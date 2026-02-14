"use client"

import React, { ElementType, useCallback, useRef } from "react"
import { motion, useAnimationFrame } from "motion/react"

import { cn } from "@/lib/utils"
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref"

/**
 * Interface for defining a single font variation axis.
 * Each axis represents a dimension of variation in a variable font. You should check the font variation settings of the font you are using to see the available axes.
 */
interface FontVariationAxis {
  /**
   * The name of the font variation axis (e.g., "wght" for weight, "slnt" for slant).
   * This corresponds to the OpenType variation axis tags, but can be arbitrary. Make sure to check the font variation settings of the font you are using to see the available axes.
   */
  name: string

  /**
   * The minimum value for this axis.
   * Applied when the cursor is at the left edge (for x-axis) or top edge (for y-axis).
   */
  min: number

  /**
   * The maximum value for this axis.
   * Applied when the cursor is at the right edge (for x-axis) or bottom edge (for y-axis).
   */
  max: number
  /**
   * The CSS attribute to apply the value to (e.g., "font-variation-settings", "transform").
   * @default "font-variation-settings"
   */
  attribute?: "font-variation-settings" | "transform"

  /**
   * The unit to append to the value (e.g., "px", "deg").
   */
  unit?: string

  /**
   * Template string for the value (e.g., "skewX($value)").
   * Use $value as a placeholder for the interpolated value.
   */
  template?: string
}

/**
 * Interface for mapping cursor position to font variation settings.
 * Allows independent control of two font variation axes based on cursor movement.
 */
interface FontVariationMapping {
  /**
   * Font variation axis controlled by horizontal cursor movement.
   */
  x: FontVariationAxis

  /**
   * Font variation axis controlled by vertical cursor movement.
   */
  y: FontVariationAxis
}

/**
 * Props for the VariableFontAndCursor component.
 */
interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The text content to display and animate.
   * Required prop with no default value.
   */
  children: React.ReactNode

  /**
   * HTML Tag to render the component as.
   * @default "span"
   */
  as?: ElementType

  /**
   * Mapping configuration that defines how cursor position affects font variation settings.
   * Maps x and y cursor positions to specific font variation axes and value ranges.
   * Required prop with no default value.
   */
  fontVariationMapping: FontVariationMapping

  /**
   * Reference to the container element for mouse tracking.
   * The cursor position will be calculated relative to this container's bounds.
   * Required prop with no default value.
   */
  containerRef: React.RefObject<HTMLDivElement | null>
}

const VariableFontAndCursor = ({
  children,
  as = "span",
  fontVariationMapping,
  className,
  containerRef,
  ...props
}: TextProps) => {
  // Hook to track mouse position relative to the specified container
  const mousePositionRef = useMousePositionRef(containerRef)

  // Ref for the visible text span to apply font variation settings
  const spanRef = useRef<HTMLSpanElement>(null)

  /**
   * Calculates font variation settings based on cursor position within the container.
   *
   * This function maps the cursor's x and y coordinates to font variation values
   * by interpolating between the minimum and maximum values defined in the mapping.
   * The position is normalized to a 0-1 range based on the container dimensions.
   *
   * @param xPosition - Horizontal cursor position relative to container
   * @param yPosition - Vertical cursor position relative to container
   * @returns Object containing calculated styles for font-variation-settings and transform
   */
  const interpolateFontVariationSettings = useCallback(
    (xPosition: number, yPosition: number) => {
      const container = containerRef.current
      if (!container)
        return { fontVariationSettings: "normal", transform: "none" } // Return default values if container is null

      // Get container dimensions for normalization
      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      // Normalize cursor position to 0-1 range, clamped to container bounds
      const xProgress = Math.min(Math.max(xPosition / containerWidth, 0), 1)
      const yProgress = Math.min(Math.max(yPosition / containerHeight, 0), 1)

      // Interpolate between min and max values for each axis
      const calculateValue = (axis: FontVariationAxis, progress: number) => {
        const value = axis.min + (axis.max - axis.min) * progress
        return value
      }

      const xValue = calculateValue(fontVariationMapping.x, xProgress)
      const yValue = calculateValue(fontVariationMapping.y, yProgress)

      // console.log("Debug VariableFontAndCursor", { xProgress, xValue, xPos: xPosition, width: containerWidth })

      const generateStyleString = (axis: FontVariationAxis, value: number) => {
        const formattedValue = `${value}${axis.unit || ""}`
        if (axis.attribute === "transform" && axis.template) {
          return axis.template.replace("$value", formattedValue)
        }
        if (axis.name) {
          return `'${axis.name}' ${formattedValue}`
        }
        return ""
      }

      let fontVariationSettings = ""
      let transform = ""

      // Handle X axis
      if (fontVariationMapping.x.attribute === "transform") {
        transform += generateStyleString(fontVariationMapping.x, xValue) + " "
      } else {
        fontVariationSettings +=
          generateStyleString(fontVariationMapping.x, xValue) + ", "
      }

      // Handle Y axis
      if (fontVariationMapping.y.attribute === "transform") {
        transform += generateStyleString(fontVariationMapping.y, yValue) + " "
      } else {
        fontVariationSettings +=
          generateStyleString(fontVariationMapping.y, yValue) + ", "
      }

      return {
        fontVariationSettings: fontVariationSettings.replace(/,\s*$/, ""),
        transform: transform.trim(),
      }
    },
    [fontVariationMapping, containerRef]
  )

  // Use animation frame to smoothly update font variations on every frame
  // This ensures smooth transitions as the cursor moves
  useAnimationFrame(() => {
    const settings = interpolateFontVariationSettings(
      mousePositionRef.current.x,
      mousePositionRef.current.y
    )
    if (spanRef.current) {
      if (settings.fontVariationSettings) {
        spanRef.current.style.fontVariationSettings =
          settings.fontVariationSettings
      }
      if (settings.transform) {
        spanRef.current.style.transform = settings.transform
      }
    }
  })

  // Custom motion component was causing issues with direct style manipulation
  const Component = as || "span"

  return (
    <Component
      className={cn("inline-block", className)}
      data-text={children}
      ref={spanRef}
      {...props}
    >
      <span className="inline-block">{children}</span>
    </Component>
  )
}

export default VariableFontAndCursor