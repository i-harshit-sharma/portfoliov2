"use client"
import Image from "next/image";
import { motion, LayoutGroup } from "motion/react";
import { useRef } from "react";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={containerRef} className="w-full min-h-screen flex items-center justify-center bg-white relative overflow-hidden dark:bg-black">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-30"
                style={{
                    backgroundImage: "radial-gradient(#a3a3a3 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }}
            />

            {/* Large Watermark */}
            <div className="absolute top-20 left-10 md:left-20 pointer-events-none select-none z-0">
                <span className="text-[15vw] font-black text-gray-200/70 dark:text-gray-900 leading-none opacity-50 font-sans">
                    ABOUT
                </span>
            </div>

            <motion.div
                className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-start"
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
                        "Full Stack Developer | AI Enthusiast | Problem Solver based in Jaipur, Rajasthan",
                        "I Love building things and solving problems, Passionate about AI and its applications",
                        "I am a quick learner and a team player, always eager to learn new technologies and improve my skills",
                        <span>Currently working as a <span className="text-[#f97316] font-bold">App Developer</span> for my app <span className="text-[#f97316] font-bold">Finvault</span></span>
                    ].map((text, index) => (
                        <div key={index} className="overflow-hidden">
                            <motion.p
                                className="text-2xl md:text-3xl font-comic-neue font-medium leading-relaxed text-gray-800 dark:text-gray-200"
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

                    {/* Interactive Keywords */}
                    {/* <div className="flex flex-wrap gap-3 pt-6 overflow-hidden">
                        <motion.div
                            className="flex flex-wrap gap-3"
                            variants={{
                                hidden: { y: "100%", opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.4 }
                                }
                            }}
                        >
                            {["React", "Next.js", "Node", "AI/ML", "TypeScript"].map((tag, i) => (
                                <motion.span
                                    key={i}
                                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div> */}
                </div>
            </motion.div>
        </div>
    )
}

export default About
