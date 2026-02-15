"use client"

import { motion } from "motion/react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
// import Image from "next/image" // Keeping imported but unused if needed later
// import { MapPin } from "lucide-react"

export interface WarpBackgroundProps {
    className?: string
    children?: React.ReactNode
    /** Perspective depth in pixels */
    perspective?: number
    /** Number of beams per wall */
    beamsPerSide?: number
    /** Beam width as percentage */
    beamSize?: number
    /** Maximum beam delay in seconds */
    beamDelayMax?: number
    /** Minimum beam delay in seconds */
    beamDelayMin?: number
    /** Beam animation duration in seconds */
    beamDuration?: number
    /** Grid line color */
    gridColor?: string
}

interface BeamProps {
    width: string
    x: string
    delay: number
    duration: number
}

function Beam({ width, x, delay, duration }: BeamProps) {
    const [hue, setHue] = useState(0)
    const [aspectRatio, setAspectRatio] = useState(1)

    useEffect(() => {
        setHue(Math.floor(Math.random() * 360))
        setAspectRatio(Math.floor(Math.random() * 10) + 1)
    }, [])

    return (
        <motion.div
            className="absolute top-0"
            style={{
                left: x,
                width,
                aspectRatio: `1 / ${aspectRatio}`,
                background: `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
                transform: "translateX(-50%)",
            }}
            initial={{ y: "100cqmax" }}
            animate={{ y: "-100%" }}
            transition={{
                duration,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            }}
        />
    )
}

const wallClasses = "[transform-style:preserve-3d] [container-type:inline-size] [height:100cqmax]"

function createGridBackground(gridColor: string, beamSize: string) {
    return {
        backgroundImage: `linear-gradient(${gridColor} 0 1px, transparent 1px ${beamSize}), linear-gradient(90deg, ${gridColor} 0 1px, transparent 1px ${beamSize})`,
        backgroundSize: `${beamSize} ${beamSize}`,
    }
}

export function WarpBackground({
    className,
    children,
    perspective = 100,
    beamsPerSide = 3,
    beamSize = 4,
    beamDelayMax = 8,
    beamDelayMin = 1,
    beamDuration = 6,
    gridColor = "rgba(6, 63, 70, 0.5)",
}: WarpBackgroundProps) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const generateBeams = useCallback(() => {
        const beams = []
        const cellsPerSide = Math.floor(100 / beamSize)
        const step = cellsPerSide / beamsPerSide

        for (let i = 0; i < beamsPerSide; i++) {
            const x = Math.floor(i * step)
            const delay = isClient
                ? Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin
                : beamDelayMin + (i / beamsPerSide) * (beamDelayMax - beamDelayMin)
            beams.push({ x, delay })
        }
        return beams
    }, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin, isClient])

    const topBeams = useMemo(() => generateBeams(), [generateBeams])
    const rightBeams = useMemo(() => generateBeams(), [generateBeams])
    const bottomBeams = useMemo(() => generateBeams(), [generateBeams])
    const leftBeams = useMemo(() => generateBeams(), [generateBeams])

    const beamSizeStr = `${beamSize}%`
    const gridStyle = createGridBackground(gridColor, beamSizeStr)

    return (
        <div className={cn("relative min-h-screen w-full overflow-hidden bg-white", className)}>
            {/* 3D Tunnel Container */}
            <div
                className="pointer-events-none absolute inset-0 [clip-path:inset(0)] [container-type:size] [transform-style:preserve-3d]"
                style={{ perspective }}
            >
                {/* Top wall */}
                <div
                    className={cn(
                        wallClasses,
                        "absolute z-20 [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)]",
                    )}
                    style={gridStyle}
                >
                    {topBeams.map((beam, i) => (
                        <Beam
                            key={i}
                            delay={beam.delay}
                            duration={beamDuration}
                            width={beamSizeStr}
                            x={`${beam.x * beamSize}%`}
                        />
                    ))}
                </div>

                {/* Bottom wall */}
                <div
                    className={cn(
                        wallClasses,
                        "absolute top-full [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)]",
                    )}
                    style={gridStyle}
                >
                    {bottomBeams.map((beam, i) => (
                        <Beam
                            key={i}
                            delay={beam.delay}
                            duration={beamDuration}
                            width={beamSizeStr}
                            x={`${beam.x * beamSize}%`}
                        />
                    ))}
                </div>

                {/* Left wall */}
                <div
                    className={cn(
                        wallClasses,
                        "absolute left-0 top-0 [width:100cqh] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)]",
                    )}
                    style={gridStyle}
                >
                    {leftBeams.map((beam, i) => (
                        <Beam
                            key={i}
                            delay={beam.delay}
                            duration={beamDuration}
                            width={beamSizeStr}
                            x={`${beam.x * beamSize}%`}
                        />
                    ))}
                </div>

                {/* Right wall */}
                <div
                    className={cn(
                        wallClasses,
                        "absolute right-0 top-0 [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]",
                    )}
                    style={gridStyle}
                >
                    {rightBeams.map((beam, i) => (
                        <Beam
                            key={i}
                            delay={beam.delay}
                            duration={beamDuration}
                            width={beamSizeStr}
                            x={`${beam.x * beamSize}%`}
                        />
                    ))}
                </div>
            </div>

            {/* Content layer */}
            {children && <div className="relative z-10 h-full w-full flex items-center justify-center">{children}</div>}
        </div>
    )
}

const About = () => {
    return (
        <WarpBackground>
            {/* Large Watermark */}
            <div className="absolute top-20 left-10 md:left-20 pointer-events-none select-none z-0">
                <span className="text-[15vw] font-black text-gray-200/70 dark:text-gray-900 leading-none opacity-50 font-sans">
                    ABOUT
                </span>
            </div>

            <motion.div
                className="max-w-7xl py-20 w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {/* Left Side - Image/Decoration could go here, for now keeping it text focused */}
                <div className="md:w-1/3">
                    <motion.div
                        className="overflow-hidden"
                        variants={{ hidden: {}, visible: {} }}
                    >
                        <motion.h2
                            className="text-6xl md:text-8xl font-black text-[#f97316] mb-4 tracking-tighter"
                            variants={{
                                hidden: { y: "100%" },
                                visible: {
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
                                }
                            }}
                        >
                            Me.
                        </motion.h2>
                    </motion.div>
                </div>

                {/* Right Side - Content */}
                <div className="md:w-2/3 flex flex-col gap-6">
                    {[
                        "Hi I am Harshit, a",
                        <span>Full Stack Developer | AI Enthusiast | Problem Solver based in Jaipur, Rajasthan</span>,
                        "I Love building things and solving problems, Passionate about AI and its applications",
                        "I am a quick learner and a team player, always eager to learn new technologies and improve my skills",
                        <span>Currently working as a <span className="text-[#f97316] font-bold">App Developer</span> for my app <span className="text-[#f97316] font-bold">Finvault</span></span>
                    ].map((text, index) => (
                        <div key={index} className="overflow-hidden">
                            <motion.p
                                className="text-2xl md:text-3xl font-comic-neue font-medium leading-relaxed text-gray-900"
                                variants={{
                                    hidden: { y: "100%", opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
                                    }
                                }}
                            >
                                {text}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </WarpBackground>
    )
}

export default About
