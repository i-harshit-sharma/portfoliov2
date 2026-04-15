"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Android, Clerk, Cloudflare, Cloudinary, CPlusPlus, DigitalOcean, Docker, ExpressJsDark, ExpressJsLight, Firebase, Kotlin, Linux, MongoDB, NextJs, PnpmDark, PostgreSQL, Prisma, ShadcnUI, TailwindCSS, Tensorflow, TypeScript } from "developer-icons";

type Tag = { icon: React.ReactNode; label: string } | string;

const projects = [
  {
    id: 1,
    name: "Personal Blog",
    description: "Modern blog with Server actions.",
    url: "https://blog.harshits.live",
    imageUrl: "/blog.jpg",
    githubUrl: "https://github.com/i-harshit-sharma/blog",
    caseStudyUrl: "/case-studies/personal-blog",
    previewAvailable: true,
    tags: [
      { icon: <NextJs />, label: "Next.js" },
      { icon: <TypeScript />, label: "TypeScript" },
      { icon: <Prisma />, label: "Prisma" },
      { icon: <Cloudinary />, label: "Cloudinary" },
    ] as Tag[],
  },
  {
    id: 2,
    name: "NIT Delhi Website Redesign",
    description: "Helped redesign of NIT Delhi's official website with a modern research portal.",
    url: "https://new.nitdelhi.ac.in/research/publication/journal?affiliated=Yes",
    imageUrl: "/nitd.png",
    githubUrl: "",
    caseStudyUrl: "/case-studies/nit-delhi",
    previewAvailable: true,
    tags: [
      { icon: <NextJs />, label: "Next.js" },
      { icon: <MongoDB />, label: "MongoDB" },
      { icon: <ShadcnUI />, label: "shadcn/ui" },
      { icon: <PnpmDark />, label: "pnpm" },
    ] as Tag[],
  },
  {
    id: 3,
    name: "Collaborative Code Platform",
    description: "A collaborative coding platform that allows multiple users to code together in real-time. Powered by Docker for maximum scalability and security.",
    url: "",
    imageUrl: "/codecollab.png",
    githubUrl: "",
    badge: "Private Beta",
    previewAvailable: false,
    tags: [
      { icon: <Docker />, label: "Docker" },
      { icon: <MongoDB />, label: "MongoDB" },
      { icon: <Clerk />, label: "Clerk" },
      { icon: <ExpressJsDark />, label: "Express.js" },
    ] as Tag[],
  },
  {
    id: 4,
    name: "Micro Marketing tool",
    description: "Advanced analytics and marketing automation for small businesses.",
    url: "",
    imageUrl: "",
    githubUrl: "",
    badge: "In Development",
    previewAvailable: false,
    tags: [] as Tag[],
  },
  {
    id: 5,
    name: "AI Voice Interview Platform",
    description: "Automated voice-based interview screening powered by cutting-edge AI.",
    url: "",
    imageUrl: "",
    githubUrl: "",
    badge: "In Development",
    previewAvailable: false,
    tags: [
      { icon: <NextJs />, label: "Next.js" },
      { icon: <TailwindCSS />, label: "Tailwind CSS" },
      { icon: <Prisma />, label: "Prisma" },
      { icon: <Cloudinary />, label: "Cloudinary" }] as Tag[],
  },
  {
    id: 6,
    name: "vidPlatform",
    description: "Youtube Style video platform with AI features.",
    url: "",
    imageUrl: "",
    githubUrl: "",
    badge: "In Development",
    previewAvailable: false,
    tags: [
      { icon: <NextJs />, label: "Next.js" },
      { icon: <TailwindCSS />, label: "Tailwind CSS" },
      { icon: <MongoDB />, label: "MongoDB" },
      { icon: <DigitalOcean />, label: "DigitalOcean" },
      { icon: <Cloudflare />, label: "Cloudflare R2" },

    ] as Tag[],
  },
  {
    id: 7,
    name: "Finvault",
    description: "An Android App with comprehensive financial management application with advanced tracking and insights.",
    url: "https://github.com/i-harshit-sharma/app-dev",
    imageUrl: "",
    badge: "In Development",
    previewAvailable: false,
    githubUrl: "https://github.com/i-harshit-sharma/app-dev",
    tags: [
      { icon: <Android />, label: "Android" },
      { icon: <Kotlin />, label: "Kotlin" },
      { icon: <Firebase />, label: "Firebase" },
      { icon: <PostgreSQL />, label: "PostgreSQL" },
    ] as Tag[],
  },
  {
    id: 8,
    name: "Todo App",
    description: "A complex todo app with AI features.",
    url: "",
    imageUrl: "",
    githubUrl: "",
    badge: "In Development",
    previewAvailable: false,
    tags: [{ icon: <NextJs />, label: "Next.js" }, { icon: <TailwindCSS />, label: "Tailwind CSS" }, { icon: <MongoDB />, label: "MongoDB" }, { icon: <ShadcnUI />, label: "shadcn/ui" }] as Tag[],
  },
  {
    id: 9,
    name: "Simple Shell",
    description: "A simple shell with basic features.",
    url: "",
    imageUrl: "",
    githubUrl: "",
    badge: "In Development",
    previewAvailable: false,
    tags: [{ icon: <CPlusPlus />, label: "C++" }, { icon: <Linux />, label: "Linux" }] as Tag[],
  },
  {
    id: 10,
    name: "Mental Health Predictor using Social media posts",
    description: "A machine learning model that predicts mental health using social media posts.",
    url: "",
    imageUrl: "",
    githubUrl: "",
    badge: "In Development",
    previewAvailable: false,
    tags: ["Streamlit", { icon: <Tensorflow />, label: "Tensorflow" }] as Tag[],
  },
];

/* ── Shared SVG paths ─────────────────────────────── */
const githubPath = "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z";
const lockPath = "M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2z";

/* ── TagPill ──────────────────────────────────────── */
function TagPill({ tag, size = "sm" }: { tag: Tag; size?: "sm" | "md" }) {
  const isObj = typeof tag === "object" && tag !== null && "icon" in tag;
  const label = isObj ? (tag as { icon: React.ReactNode; label: string }).label : String(tag);
  const icon = isObj ? (tag as { icon: React.ReactNode; label: string }).icon : null;

  return (
    <div className="relative group/tip">
      <span className={`inline-flex items-center gap-1.5 ${size === "md" ? "px-3 py-1" : "p-1"} text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200 rounded-full`}>
        {icon
          ? <span className="w-4 h-4 flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>
          : label
        }
        {size === "md" && icon && <span>{label}</span>}
      </span>
      {/* Tooltip */}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-medium bg-zinc-900 text-white rounded-md whitespace-nowrap opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150 z-50">
        {label}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
      </div>
    </div>
  );
}

/* ── GitHubButton ─────────────────────────────────── */
function GitHubButton({ githubUrl, compact = false }: { githubUrl?: string; compact?: boolean }) {
  const hasUrl = !!githubUrl;

  if (compact) {
    return (
      <div className="relative group/gh">
        {hasUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200 text-zinc-700"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden><path d={githubPath} /></svg>
          </a>
        ) : (
          <span className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white/60 text-zinc-300 cursor-not-allowed">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden><path d={lockPath} /></svg>
          </span>
        )}
        {/* Tooltip */}
        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-medium bg-zinc-900 text-white rounded-md whitespace-nowrap opacity-0 group-hover/gh:opacity-100 transition-opacity duration-150 z-50">
          {hasUrl ? "View on GitHub" : "Private Repo"}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
        </div>
      </div>
    );
  }

  return hasUrl ? (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-zinc-200 bg-zinc-50 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden><path d={githubPath} /></svg>
      View on GitHub
    </a>
  ) : (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-zinc-200 bg-zinc-50 text-zinc-400 cursor-not-allowed select-none">
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden><path d={lockPath} /></svg>
      Private Repo
    </span>
  );
}

/* ── LinkButton ───────────────────────────────────── */
function LinkButton({ url }: { url?: string }) {
  const hasUrl = !!url;
  return (
    <div className="relative group/lk">
      {hasUrl ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200 text-zinc-700"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      ) : (
        <span className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white/60 text-zinc-300 cursor-not-allowed">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      )}
      {/* Tooltip */}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-medium bg-zinc-900 text-white rounded-md whitespace-nowrap opacity-0 group-hover/lk:opacity-100 transition-opacity duration-150 z-50">
        {hasUrl ? "Visit Project" : "No Link"}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
      </div>
    </div>
  );
}

/* ── CaseStudyButton ──────────────────────────────── */
function CaseStudyButton({ caseStudyUrl, compact = false }: { caseStudyUrl?: string; compact?: boolean }) {
  if (!caseStudyUrl) return null;

  const icon = (
    <svg viewBox="0 0 24 24" className={`${compact ? "w-3.5 h-3.5" : "w-4 h-4"} fill-none stroke-current stroke-2`} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );

  if (compact) {
    return (
      <div className="relative group/cs">
        <a
          href={caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200 text-zinc-700"
        >
          {icon}
        </a>
        {/* Tooltip */}
        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-medium bg-zinc-900 text-white rounded-md whitespace-nowrap opacity-0 group-hover/cs:opacity-100 transition-opacity duration-150 z-50">
          View Case Study
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
        </div>
      </div>
    );
  }

  return (
    <a
      href={caseStudyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 ${compact ? "px-4 py-1.5 text-xs" : "px-6 py-2.5 text-sm"} rounded-full font-semibold border border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-lg active:scale-[0.98] transition-all duration-200`}
    >
      {icon}
      Read Case Study
    </a>
  );
}

/* ── ProjectCard ──────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [canCloseFromBars, setCanCloseFromBars] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const [circleOrigin, setCircleOrigin] = useState({ x: 50, y: 50 });
  const mousePosRef = useRef({ x: 50, y: 50 });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPreviewOpen) {
      const timer = setTimeout(() => setCanCloseFromBars(true), 700);
      return () => clearTimeout(timer);
    } else {
      setCanCloseFromBars(false);
    }
  }, [isPreviewOpen]);

  const handleMouseMoveOnImage = (e: React.MouseEvent) => {
    if (isPreviewOpen || !project.previewAvailable) return;
    mousePosRef.current = {
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    };
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setCircleOrigin(mousePosRef.current);
      setIsPreviewOpen(true);
      setHasLoaded(true);
    }, 500);
  };

  const handleMouseLeaveImage = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHoveringImage(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group flex flex-col border border-zinc-200 rounded overflow-hidden bg-white"
      >
        {/* ── Image area ──────────────────────────────── */}
        <div
          className="relative w-full h-64 overflow-hidden cursor-pointer bg-zinc-100 shrink-0"
          onMouseMove={handleMouseMoveOnImage}
          onMouseEnter={() => setIsHoveringImage(true)}
          onMouseLeave={handleMouseLeaveImage}
        >
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              className={`object-cover object-top transition-all duration-500 ${isHoveringImage ? "blur-sm brightness-75" : " blur-0 brightness-100"}`}
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 transition-all duration-500 ${isHoveringImage ? "brightness-75" : ""}`} />
          )}

          {/* Status Badge */}
          {project.badge && (
            <div className="absolute top-4 left-4 z-20">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white rounded-full shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {project.badge}
              </motion.span>
            </div>
          )}

          {/* "Hover to Preview" overlay */}
          {project.previewAvailable && (
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHoveringImage ? "opacity-100" : "opacity-0"}`}>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold tracking-wide shadow-lg">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
                </svg>
                Hover to Preview
              </span>
            </div>
          )}
        </div>

        {/* ── Card bottom content ──────────────────────── */}
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between flex-wrap">
            <h3 className="text-xl font-bold text-zinc-900">{project.name}</h3>
            {project.caseStudyUrl && !project.badge && (
              <CaseStudyButton caseStudyUrl={project.caseStudyUrl} compact={true} />
            )}
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>

          {/* Tags row + Links */}
          <div className="flex items-center gap-2 flex-wrap mt-auto pt-2">
            {project.tags.map((tag, index) => (
              <TagPill key={index} tag={tag} size="sm" />
            ))}
            <div className="flex items-center gap-1.5 ml-auto shrink-0">
              <GitHubButton githubUrl={project.githubUrl} compact />
              <LinkButton url={project.url} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Full Screen Preview ──────────────────────── */}
      <motion.div
        className="fixed inset-0 z-100 bg-white/95 backdrop-blur-xl flex flex-col md:flex-row overflow-hidden pb-0 px-4 md:pl-12 md:pr-0"
        initial={false}
        animate={{
          clipPath: isPreviewOpen
            ? `circle(150% at ${circleOrigin.x}% ${circleOrigin.y}%)`
            : `circle(0% at ${circleOrigin.x}% ${circleOrigin.y}%)`,
          opacity: isPreviewOpen ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: isPreviewOpen ? "auto" : "none" }}
        onMouseMove={(e) => {
          if (!canCloseFromBars) return;
          if (e.target === e.currentTarget) setIsPreviewOpen(false);
        }}
      >
        {/* Iframe panel */}
        <div className="flex-1 h-full flex flex-col bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] border-r border-zinc-200 z-10">
          {/* Mac-style top bar */}
          <div className="w-full h-8 bg-zinc-100 flex items-center px-4 border-b border-zinc-200 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mx-auto text-xs font-mono text-zinc-400 truncate max-w-50 italic">
              {project.url || "preview unavailable…"}
            </div>
          </div>

          {hasLoaded && (
            <div className="relative w-full flex-1">
              {project.url ? (
                <>
                  {!isIframeLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 z-21">
                      <div className="w-10 h-10 border-4 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
                    </div>
                  )}
                  <iframe
                    src={project.url}
                    className="w-full h-full border-none bg-white relative z-20"
                    title={project.name}
                    loading="eager"
                    onLoad={() => setIsIframeLoaded(true)}
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 select-none">
                  {/* Animated ring */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-300 animate-[spin_8s_linear_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-9 h-9 text-zinc-400 fill-none stroke-current stroke-1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-zinc-800 tracking-tight">In Development</p>
                  <p className="text-sm text-zinc-400 mt-2 font-medium">This project is currently being polished.</p>
                  {/* Decorative dots */}
                  <div className="flex gap-2 mt-6">
                    <span className="w-2 h-2 rounded-full bg-zinc-300 animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 rounded-full bg-zinc-300 animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 rounded-full bg-zinc-300 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right panel */}
        <div className="w-full md:w-80 lg:w-96 p-8 md:p-12 flex flex-col justify-between shrink-0 overflow-y-auto custom-scrollbar bg-white/50">
          <div>
            <div className="flex items-center gap-4 mb-4">
              {project.caseStudyUrl && !project.badge && (
                <CaseStudyButton caseStudyUrl={project.caseStudyUrl} compact={true} />
              )}
              <h3 className="text-3xl font-bold text-zinc-900">{project.name}</h3>
            </div>
            <p className="text-zinc-500 text-sm mb-6">{project.url}</p>
            <p className="text-zinc-600 mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <TagPill key={index} tag={tag} size="md" />
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <GitHubButton githubUrl={project.githubUrl} />
            </div>
          </div>

          <button
            onClick={() => setIsPreviewOpen(false)}
            className="w-full mt-8 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-4 rounded-full font-semibold transition-colors shadow-md text-center"
          >
            Close Preview
          </button>
        </div>
      </motion.div>
    </>
  );
}

/* ── Work section ─────────────────────────────────── */
export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="work" className="py-24 px-4 md:px-8 text-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Selected Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold transition-all hover:bg-zinc-800 hover:shadow-xl active:scale-95"
            >
              <span>{showAll ? "Show Less" : "More projects"}</span>
              <svg
                viewBox="0 0 24 24"
                className={`w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <a
              href="https://github.com/i-harshit-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-zinc-900 text-zinc-900 rounded-full font-semibold transition-all hover:bg-zinc-900 hover:text-white hover:shadow-xl active:scale-95"
            >
              <span>Visit GitHub Profile</span>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                <path d={githubPath} />
              </svg>
            </a>
          </motion.div>
        )}

        {/* ── GitHub Stats ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-zinc-800" aria-hidden>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">GitHub Activity</h3>
          </div>

          {/* Row 1 — Activity graph (full width) */}
          <div className="rounded overflow-hidden border border-zinc-200 bg-whiteAdd ">
            <div className="px-4 pt-4 pb-1 text-xs font-semibold text-zinc-400 uppercase tracking-widest">Activity Graph</div>
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=i-harshit-sharma&bg_color=ffffff&color=52525b&line=18181b&point=18181b&area=true&area_color=e4e4e7&hide_border=true&custom_title=Contribution%20Activity"
              alt="GitHub Activity Graph"
              className="w-full h-auto"
              loading="eager"
            />
          </div>

          {/* Row 2 — Streak (full width) */}
          {/* <div className="mt-4 rounded-xl overflow-hidden border border-zinc-200 bg-white hover:shadow-md transition-shadow duration-300">
            <img
              src="https://streak-stats.demolab.com?user=i-harshit-sharma&hide_current_streak=true&hide_longest_streak=true"
              alt="GitHub Streak"
              className="w-full h-auto"
              loading="lazy"
            />
          </div> */}

          {/* Row 3 — Contribution Calendar (full width) */}
          <div className="mt-4 rounded overflow-hidden border border-zinc-200 bg-white">
            <div className="px-4 pt-4 pb-1 text-xs font-semibold text-zinc-400 uppercase tracking-widest">Contribution Calendar</div>
            <div className="p-4">
              <img
                src="https://ghchart.rshah.org/18181b/i-harshit-sharma"
                alt="GitHub Contribution Calendar"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
