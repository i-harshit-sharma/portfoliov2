"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/i-harshit-sharma",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/i-harshit-sharma", // Placeholder guess
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "Email",
    href: "mailto:harshitsharma@harshits.live", // Inferred from blog
    icon: <Mail className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/i_harshit_sh", // Placeholder guess
    icon: <Twitter className="w-5 h-5" />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-zinc-100 py-16 px-6 md:px-12 dark:bg-black dark:border-zinc-900 mb-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            Let&apos;s build something <br />
            <span className="text-[#f97316]">extraordinary</span> together.
          </h2>
          <Link
            href="mailto:harshitsharma@harshits.live"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-full font-semibold transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-xl active:scale-95"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Links and Info Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              HARSHIT SHARMA
            </span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            © {currentYear} • Handcrafted by Harshit
          </div>
        </div>
      </div>
    </footer>
  );
}
