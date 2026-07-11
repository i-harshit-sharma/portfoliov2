"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/pexels-tina-p-891488179-33017127-removebg.png",
  "/pexels-lureofadventure-28367803.jpg",
  "/blog.jpg",
  "/codecollab.png",
  "/harshit.png",
  "/hi-static.webp",
];

const GREETINGS = [
  "Hello",        // English
  "Bonjour",      // French
  "Hola",         // Spanish
  "Ciao",         // Italian
  "Olá",          // Portuguese
  "Hallo",        // German
  "你好",           // Chinese
  "こんにちは",      // Japanese
  "안녕하세요",       // Korean
  "नमस्ते",         // Hindi
  "مرحبا",         // Arabic
  "Привет",        // Russian
  "שלום",          // Hebrew
  "Γεια σας",      // Greek
  "Merhaba",      // Turkish
  "Sawubona",     // Zulu
  "Habari",       // Swahili
  "Xin chào",     // Vietnamese
  "สวัสดี",        // Thai
  "Selamat",      // Malay/Indonesian
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [imagesFinished, setImagesFinished] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) return;
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 800);
    return () => clearInterval(interval);
  }, [isLoaded]);

  useEffect(() => {
    if (imagesFinished) {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
        document.body.classList.remove("overflow-hidden");
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [imagesFinished]);

  useEffect(() => {
    let active = true;
    let loadedCount = 0;
    const total = IMAGES.length;

    document.body.classList.add("overflow-hidden");

    const handleImageLoad = () => {
      if (!active) return;
      loadedCount++;
      setProgress(Math.round((loadedCount / total) * 100));
    };

    Promise.all(
      IMAGES.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => { handleImageLoad(); resolve(true); };
          img.onerror = () => { handleImageLoad(); resolve(true); };
        });
      })
    ).then(() => {
      if (active) {
        setProgress(100);
        setImagesFinished(true);
      }
    });

    return () => {
      active = false;
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090b]"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 text-zinc-400"
          >
            <div className="h-24 flex items-center justify-center overflow-hidden inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={GREETINGS[greetingIndex]}
                  // initial={{ y: "100%" }}
                  // animate={{ y: "0%" }}
                  // exit={{ y: "-100%" }}
                  // transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                  className="block text-6xl font-light text-zinc-100 tracking-wide"
                >
                  {GREETINGS[greetingIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="h-[1px] w-48 overflow-hidden bg-zinc-800">
              <motion.div
                className="h-full bg-zinc-400"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}