import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "motion/react";
import { cn } from "@/lib/utils";

const wrap = (min: number, max: number, value: number): number => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

interface CSSVariableInterpolation {
  property: string;
  from: number | string;
  to: number | string;
}

type PreserveAspectRatioAlign =
  | "none"
  | "xMinYMin"
  | "xMidYMin"
  | "xMaxYMin"
  | "xMinYMid"
  | "xMidYMid"
  | "xMaxYMid"
  | "xMinYMax"
  | "xMidYMax"
  | "xMaxYMax";

type PreserveAspectRatioMeetOrSlice = "meet" | "slice";

type PreserveAspectRatio =
  | PreserveAspectRatioAlign
  | `${Exclude<PreserveAspectRatioAlign, "none">} ${PreserveAspectRatioMeetOrSlice}`;

interface MarqueeAlongSvgPathProps {
  children: React.ReactNode;
  className?: string;
  // Path properties
  path: string;
  pathId?: string;
  preserveAspectRatio?: PreserveAspectRatio;
  showPath?: boolean;
  // SVG properties
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  // Marquee properties
  baseVelocity?: number;
  easing?: (value: number) => number;
  // Item repetition
  repeat?: number;
  // Z-index properties
  enableRollingZIndex?: boolean;
  zIndexBase?: number;
  zIndexRange?: number;
  cssVariableInterpolation?: CSSVariableInterpolation[];
  // Responsive properties
  responsive?: boolean;
}

const MarqueeAlongSvgPath = ({
  children,
  className,
  // Path defaults
  path,
  pathId,
  preserveAspectRatio = "xMidYMid meet",
  showPath = true,
  // SVG defaults
  width = "100%",
  height = "100%",
  viewBox = "0 0 100 100",
  // Marquee defaults
  baseVelocity = 5,
  easing,
  // Items repetition
  repeat = 3,
  // Z-index defaults
  enableRollingZIndex = true,
  zIndexBase = 1,
  zIndexRange = 10,
  cssVariableInterpolation = [],
  // Responsive defaults
  responsive = false,
}: MarqueeAlongSvgPathProps) => {
  const container = useRef<HTMLDivElement>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const baseOffset = useMotionValue(0);
  const [isReady, setIsReady] = useState(!responsive);
  const pathRef = useRef<SVGPathElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Responsive scaling using direct DOM manipulation (no re-renders)
  useEffect(() => {
    if (!responsive) return;
    const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
    const originalWidth = vbWidth || 100;
    const originalHeight = vbHeight || 100;

    const updateScale = () => {
      const wrapper = container.current;
      const marqueeContainer = marqueeContainerRef.current;
      if (!wrapper || !marqueeContainer) return;

      const wrapperWidth = wrapper.clientWidth;
      const wrapperHeight = wrapper.clientHeight;
      const scaleX = wrapperWidth / originalWidth;
      const scaleY = wrapperHeight / originalHeight;
      const scale = Math.min(scaleX, scaleY);

      const scaledWidth = originalWidth * scale;
      const scaledHeight = originalHeight * scale;
      const offsetX = (wrapperWidth - scaledWidth) / 2;
      const offsetY = (wrapperHeight - scaledHeight) / 2;

      marqueeContainer.style.width = `${originalWidth}px`;
      marqueeContainer.style.height = `${originalHeight}px`;
      marqueeContainer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
      marqueeContainer.style.transformOrigin = "top left";
    };

    updateScale();
    setIsReady(true);
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [responsive, viewBox]);

  // Create an array of items outside of the render function
  const items = React.useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.flatMap((child, childIndex) =>
      Array.from({ length: repeat }, (_, repeatIndex) => {
        const itemIndex = repeatIndex * childrenArray.length + childIndex;
        const key = `${childIndex}-${repeatIndex}`;
        return {
          child,
          childIndex,
          repeatIndex,
          itemIndex,
          key,
        };
      }),
    );
  }, [children, repeat]);

  // Generate a random ID for the path if not provided
  const id =
    pathId || `marquee-path-${Math.random().toString(36).substring(7)}`;

  // Z-index calculator
  const calculateZIndex = useCallback(
    (offsetDistance: number) => {
      if (!enableRollingZIndex) return undefined;
      const normalizedDistance = offsetDistance / 100;
      return Math.floor(zIndexBase + normalizedDistance * zIndexRange);
    },
    [enableRollingZIndex, zIndexBase, zIndexRange],
  );

  // Continuous animation loop
  useAnimationFrame((_, delta) => {
    const moveBy = baseVelocity * (delta / 1000);
    baseOffset.set(baseOffset.get() + moveBy);
  });

  return (
    <div ref={container} className={cn("relative", className)}>
      <div
        ref={marqueeContainerRef}
        className="relative"
        style={{
          contain: "layout style",
          opacity: isReady || !responsive ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={viewBox}
          preserveAspectRatio={preserveAspectRatio}
          className="w-full h-full"
        >
          <path
            id={id}
            d={path}
            stroke={showPath ? "currentColor" : "none"}
            strokeWidth="2"
            fill="none"
            ref={pathRef}
          />
        </svg>

        {items.map(({ child, repeatIndex, itemIndex, key }) => {
          const itemOffset = useTransform(baseOffset, (v) => {
            const position = (itemIndex * 100) / items.length;
            const wrappedValue = wrap(0, 100, v + position);
            const value = easing ? easing(wrappedValue / 100) * 100 : wrappedValue;
            return `${value}%`;
          });

          const currentOffsetDistance = useMotionValue(0);

          useEffect(() => {
            const unsubscribe = itemOffset.on("change", (value: string) => {
              const match = value.match(/^([\d.]+)%$/);
              if (match && match[1]) {
                currentOffsetDistance.set(parseFloat(match[1]));
              }
            });
            return unsubscribe;
          }, [itemOffset, currentOffsetDistance]);

          const zIndex = useTransform(currentOffsetDistance, (value) =>
            calculateZIndex(value),
          );

          const cssVariables = Object.fromEntries(
            (cssVariableInterpolation || []).map(({ property, from, to }) => [
              property,
              useTransform(currentOffsetDistance, [0, 100], [from, to]),
            ]),
          );

          return (
            <motion.div
              key={key}
              ref={(el) => {
                if (el) itemRefs.current.set(key, el as HTMLDivElement);
              }}
              className="absolute top-0 left-0"
              style={{
                offsetPath: `path('${path}')`,
                offsetDistance: itemOffset,
                zIndex: enableRollingZIndex ? zIndex : undefined,
                willChange: "offset-distance",
                backfaceVisibility: "hidden",
                ...cssVariables,
              }}
              aria-hidden={repeatIndex > 0}
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeAlongSvgPath;
