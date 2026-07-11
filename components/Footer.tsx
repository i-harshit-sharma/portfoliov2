"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/i-harshit-sharma",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/harshit163", // Placeholder guess
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "Email",
    href: "mailto:harshitsharma9232@gmail.com", // Inferred from blog
    icon: <Mail className="w-5 h-5" />,
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com/i_harshit_sh", // Placeholder guess
  //   icon: <Twitter className="w-5 h-5" />,
  // },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-16 dark:bg-black dark:border-zinc-900">
      <div className="flex flex-col items-center">
        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            Let&apos;s build something <br />
            <span className="text-[#f97316]">extraordinary</span> together.
          </h2>
          <Link
            href="https://cal.com/harshit163/quick-meeting"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-full font-semibold transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-xl active:scale-95"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="relative w-full h-[100lvh] flex flex-col justify-center items-center p-4 ft">
          {/* Email is perfectly centered in the viewport */}
          <a
            href="mailto:harshitsharma9232@gmail.com"
            className="md:text-4xl lg:text-5xl sm:text-3xl text-2xl text-zinc-900 dark:text-white hover:underline font-aldrich text-center break-all max-w-full px-10"
          >
            harshitsharma9232@gmail.com
          </a>

          {/* Image and text pinned to the bottom */}
          <div className="absolute bottom-16 flex flex-col items-center gap-4">
            <Image
              src="/harshit.png"
              alt="Harshit Sharma"
              width={150}
              height={150}
              className="rounded-full"
            />
            <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium text-center">
              © {currentYear} • Handcrafted by Harshit
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
