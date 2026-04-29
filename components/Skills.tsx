"use client";

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

const Skills = () => {
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
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                    className="group flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-zinc-900/50 rounded-xl border border-gray-100 dark:border-white/5 transition-colors hover:border-[#f97316]/30 hover:bg-white dark:hover:bg-zinc-800 cursor-pointer select-none"
                  >
                    <div className="w-10 h-10 mb-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 [&>svg]:w-full [&>svg]:h-full">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
