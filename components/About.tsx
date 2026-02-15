"use client"
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
import { LayoutGroup } from "motion/react";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    return (
        <motion.div
            ref={containerRef}
            className="w-full h-screen flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.2
                    }
                }
            }}
        >
            <div className="max-w-7xl w-full mx-auto px-4">
                <motion.p
                    className="text-2xl font-comic-neue font-bold mb-4"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
                    }}
                >
                    Hi I am Harshit a
                </motion.p>
                <motion.p
                    className="text-2xl font-comic-neue font-bold mb-4"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
                    }}
                >
                    Full Stack Developer | AI Enthusiast | Problem Solver based in Jaipur, Rajasthan
                </motion.p>
                <motion.p
                    className="text-2xl font-comic-neue font-bold mb-4"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
                    }}
                >
                    I Love building things and solving problems, Passionate about AI and its applications
                </motion.p>
                <motion.p
                    className="text-2xl font-comic-neue font-bold mb-4"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
                    }}
                >
                    I am a quick learner and a team player, always eager to learn new technologies and improve my skills
                </motion.p>
                <motion.p
                    className="text-2xl font-comic-neue font-bold"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
                    }}
                >
                    Currently working as a <span className="text-[#f97316] font-bold">Software Engineer</span> at <span className="text-[#f97316] font-bold">Infobeans Technologies Ltd.</span>
                </motion.p>
            </div>
        </motion.div>
    )
}

export default About
