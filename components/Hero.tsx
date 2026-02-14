"use client"
import MarqueeAlongSvgPath from "@/components/fancy/blocks/marquee-along-svg-path"
import { useRef } from "react"

import { LayoutGroup, motion } from "motion/react"

import TextRotate from "@/components/fancy/text/text-rotate"

import VariableFontAndCursor from "@/components/fancy/text/variable-font-and-cursor"
import VerticalCutReveal from "@/components/fancy/text/vertical-cut-reveal"
import { Volume2 } from "lucide-react"


const path = "M 0 200 L 300 200 C 480 200 480 15 390 15 C 300 15 300 315 390 315 C 480 315 480 200 660 200 L 1000 200"
// const path = "M0 174.9H362.44C541.72 174.9 587.785 68.475 498.145 68.475C408.505 68.475 408.505 265.65 498.145 265.65C587.785 265.65 541.72 174.9 721 174.9H996"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)


  return (
    <div ref={containerRef} className="w-full overflow-hidden relative flex flex-col my-14 items-center">
      <div className="relative z-10 w-full pointer-events-none mb-10">
        <div className="w-full py-32 z-2 relative items-center justify-center flex flex-col gap-4">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
            className="text-2xl"
          >
            <span>
              Hi I'm
            </span>
          </VerticalCutReveal>
          < VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="last"
            reverse={true}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              delay: 0.5,
            }}
          >
            <VariableFontAndCursor
              className="font-sans text-5xl font-bold sm:text-7xl md:text-9xl text-[#f97316]"
              fontVariationMapping={{
                y: { name: "wght", min: 300, max: 900 },
                x: {
                  name: "skewX",
                  min: -2,
                  max: -10,
                  attribute: "transform",
                  unit: "deg",
                  template: "skewX($value)",
                },
              }}
              containerRef={containerRef}
            >
              Harshit Sharma  
            </VariableFontAndCursor>
            {/* <Volume2 className="inline-block align-top rotate-330 mx-2" /> */}
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="center"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              delay: 1.1,
            }}
          >
            <LayoutGroup>
              <motion.p className="flex whitespace-pre text-xl" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  I make things{" "}
                </motion.span>
                <TextRotate
                  texts={[
                    "💻 work!",
                    "✽ fancy!",
                    "🎯 right!",
                    "⚡ fast!",
                    "🎉 fun!",
                    "🎸 rock!",
                    "📸 pop!",
                  ]}
                  mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#f97316] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.p>
            </LayoutGroup>
          </VerticalCutReveal>
        </div>
        <MarqueeAlongSvgPath
          path={path}

          viewBox="0 0 996 330"
          baseVelocity={1}
          slowdownOnHover={true}

          draggable={true}
          repeat={2}
          dragSensitivity={0.1}
          className="w-full absolute z-1 h-full top-0 aspect-[996/330] text-gray-200"
          responsive
          showPath={true}
          grabCursor
        >
          {imgs.map((btn, i) => (
            <div
              key={i}
              className="hover:scale-105 transition-transform duration-300 ease-in-out text-[10px] bg-white text-gray-300"
            >
              {btn.name}
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>

      
    </div>
  )
}

const imgs = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Tailwind" },
  { name: "Node.js" },
  { name: "Expressjs" },
  { name: "Next.js" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "TypeScript" },
  { name: "C/C++" },
  { name: "Mongoose" },
  { name: "Python" },
  { name: "SQL" },
  { name: "Socket.io" },

]