"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  NextJs,
  TypeScript,
  TailwindCSS,
  ShadcnUI,
  FramerDark,
  React,
  NodeJs,
  ExpressJsDark,
  Prisma,
  PostgreSQL,
  MongoDB,
  Redis,
  MySQL,
  Docker,
  Linux,
  Cloudflare,
  DigitalOcean,
  GitHubDark,
  Supabase,
  Git,
  BunJs,
  Zod,
  // SQLite,
  Appwrite,
  VisualStudioCode,
  Figma,
  Postman,
  ViteJS,
  NPM,
  ReactQuery
} from "developer-icons";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <React /> },
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "Tailwind", icon: <TailwindCSS /> },
      { name: "Shadcn UI", icon: <ShadcnUI /> },
      { name: "Framer Motion", icon: <FramerDark /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <NodeJs /> },
      { name: "Express.js", icon: <ExpressJsDark /> },
      { name: "Prisma", icon: <Prisma /> },
      { name: "Supabase", icon: <Supabase /> },
      { name: "Bun", icon: <BunJs /> },
      { name: "Zod", icon: <Zod /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: <PostgreSQL /> },
      { name: "MongoDB", icon: <MongoDB /> },
      { name: "Redis", icon: <Redis /> },
      { name: "MySQL", icon: <MySQL /> },
      // // { name: "SQLite", icon: <SQLite /> },
      { name: "Appwrite", icon: <Appwrite /> },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <Docker /> },
      { name: "Linux", icon: <Linux /> },
      { name: "GitHub Actions", icon: <GitHubDark /> },
      { name: "Cloudflare", icon: <Cloudflare /> },
      { name: "DigitalOcean", icon: <DigitalOcean /> },
      { name: "Git", icon: <Git /> },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "VS Code", icon: <VisualStudioCode /> },
      { name: "Figma", icon: <Figma /> },
      { name: "Postman", icon: <Postman /> },
      { name: "Vite", icon: <ViteJS /> },
      { name: "NPM", icon: <NPM /> },
      { name: "React Query", icon: <ReactQuery /> },
    ],
  },
];

const shadowGradients = [
  ["#3b82f6", "#8b5cf6", "#ec4899", "#f43f5e"],
  ["#10b981", "#3b82f6", "#6366f1", "#8b5cf6"],
  ["#f59e0b", "#ef4444", "#ec4899", "#8b5cf6"],
  ["#ec4899", "#8b5cf6", "#3b82f6", "#0ea5e9"],
  ["#0ea5e9", "#10b981", "#84cc16", "#eab308"],
  ["#f97316", "#f59e0b", "#10b981", "#0ea5e9"],
  ["#6366f1", "#ec4899", "#f43f5e", "#f97316"],
  ["#14b8a6", "#3b82f6", "#6366f1", "#8b5cf6"],
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="w-full min-h-screen py-24 bg-white relative overflow-hidden dark:bg-black">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#a3a3a3 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Large Watermark */}
      <div className="absolute top-20 right-10 md:right-20 pointer-events-none select-none z-0">
        <span className="text-[15vw] font-black text-gray-200/50 dark:text-gray-900 leading-none opacity-50 font-sans uppercase">
          Skills
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-[#f97316] tracking-tighter">
            Tech Stack.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.1,
                ease: [0.2, 0.65, 0.3, 0.9]
              }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const isHovered = hoveredSkill === skill.name;
                  const isAnyHovered = hoveredSkill !== null;
                  const colorIndex = (categoryIndex * 10 + skillIndex) % shadowGradients.length;
                  const colors = shadowGradients[colorIndex];

                  return (
                    <motion.div
                      key={skill.name}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group cursor-pointer select-none"
                    >
                      {/* Gradient Border */}
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                          }}
                          transition={{
                            opacity: { duration: 0.2 },
                            backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                          }}
                          className="absolute z-0 rounded-[5px]"
                          style={{
                            top: "50%",
                            left: "50%",
                            width: "calc(100% + 2px)",
                            height: "calc(100% + 2px)",
                            transform: "translate(-50%, -50%)",
                            background: `linear-gradient(90deg, ${colors.join(", ")}, ${colors[0]})`,
                            backgroundSize: "300% 100%"
                          }}
                        />
                      )}

                      {/* Content Wrapper */}
                      <div className="relative z-10 flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-zinc-900/50 rounded border border-gray-100 dark:border-white/5 transition-colors group-hover:border-transparent group-hover:bg-white dark:group-hover:bg-zinc-800 w-full h-full">
                        <div
                          className={`w-10 h-10 mb-3 flex items-center justify-center transition-all duration-300 [&>svg]:w-full [&>svg]:h-full ${isAnyHovered && !isHovered ? "grayscale opacity-40" : "grayscale-0 opacity-100"
                            }`}
                        >
                          {skill.icon}
                        </div>
                        <span
                          className={`text-xs font-semibold text-center transition-colors duration-300 ${isAnyHovered && !isHovered ? "text-gray-400 dark:text-gray-600" : "text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
