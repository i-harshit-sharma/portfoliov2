// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";

// // Local image size mapping in bytes (from public list) to accurately calculate weight-based percentage.
// const IMAGE_SIZES: Record<string, number> = {
//   "/pexels-tina-p-891488179-33017127-removebg.png": 9000000,
//   "/pexels-lureofadventure-28367803.jpg": 9545882,
//   "/blog.jpg": 71081,
//   "/codecollab.png": 386117,
//   "/harshit.png": 12435,
//   "/hi-static.webp": 11460,
// };

// export default function Preloader() {
//   const [progress, setProgress] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     let active = true;
//     const urls = Object.keys(IMAGE_SIZES);
//     const loadedBytesMap: Record<string, number> = {};

//     // Initialize all loaded bytes to 0
//     urls.forEach((url) => {
//       loadedBytesMap[url] = 0;
//     });

//     const totalExpectedBytes = urls.reduce((sum, url) => sum + IMAGE_SIZES[url], 0);

//     const updateProgress = () => {
//       if (!active) return;
//       const currentLoaded = urls.reduce((sum, url) => sum + (loadedBytesMap[url] || 0), 0);
//       const pct = Math.min(100, Math.round((currentLoaded / totalExpectedBytes) * 100));
//       setProgress(pct);
//     };

//     const fetchImageWithProgress = async (url: string) => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//         const contentLengthHeader = response.headers.get("content-length");
//         const expectedSize = contentLengthHeader ? parseInt(contentLengthHeader, 10) : IMAGE_SIZES[url];

//         const reader = response.body?.getReader();
//         if (!reader) {
//           loadedBytesMap[url] = expectedSize;
//           updateProgress();
//           return;
//         }

//         let loaded = 0;
//         while (true) {
//           const { done, value } = await reader.read();
//           if (done) break;
//           if (value) {
//             loaded += value.length;
//             loadedBytesMap[url] = loaded;
//             updateProgress();
//           }
//         }

//         loadedBytesMap[url] = expectedSize;
//         updateProgress();
//       } catch (error) {
//         console.error(`Failed to preload image: ${url}`, error);
//         // Fail gracefully: count as loaded so we don't stall the loading screen
//         loadedBytesMap[url] = IMAGE_SIZES[url];
//         updateProgress();
//       }
//     };

//     // Lock page scrolling immediately on mount
//     document.body.classList.add("overflow-hidden");
//     document.documentElement.classList.add("overflow-hidden");

//     // Preload all assets in parallel
//     Promise.all(urls.map((url) => fetchImageWithProgress(url))).then(() => {
//       if (active) {
//         setProgress(100);
//         // Wait a short delay at 100% for smooth visual transition
//         setTimeout(() => {
//           setIsLoaded(true);
//           // Unlock body scroll
//           document.body.classList.remove("overflow-hidden");
//           document.documentElement.classList.remove("overflow-hidden");
//         }, 800);
//       }
//     });

//     return () => {
//       active = false;
//       document.body.classList.remove("overflow-hidden");
//       document.documentElement.classList.remove("overflow-hidden");
//     };
//   }, []);

//   const getLoadingMessage = (p: number) => {
//     if (p < 20) return "CONNECTING TO HOST...";
//     if (p < 50) return "RETRIEVING GRAPHICS CACHE...";
//     if (p < 75) return "CALIBRATING LAYOUT MODULES...";
//     if (p < 95) return "STYLING WORKSPACE INTERFACE...";
//     if (p < 100) return "FINALIZING RENDER...";
//     return "SYSTEMS ONLINE";
//   };

//   return (
//     <AnimatePresence>
//       {!isLoaded && (
//         <motion.div
//           key="preloader"
//           initial={{ opacity: 1 }}
//           exit={{
//             opacity: 0,
//             y: "-100%",
//             transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
//           }}
//           className="fixed inset-0 w-screen h-screen bg-[#09090b] z-[9999] flex flex-col items-center justify-center overflow-hidden"
//         >
//           {/* High-tech Background Grid */}
//           <div
//             className="absolute inset-0 pointer-events-none opacity-[0.03]"
//             style={{
//               backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)",
//               backgroundSize: "24px 24px",
//             }}
//           />

//           {/* Central Glowing Orb */}
//           <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

//           {/* Preloader Main Content */}
//           <div className="flex flex-col items-center select-none relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-orange-500/80 mb-6 font-mono font-semibold"
//             >
//               INITIALIZING HARSHIT SHARMA PORTFOLIO
//             </motion.div>

//             {/* Huge Monospace Percentage */}
//             <div className="text-8xl md:text-9xl font-black text-white font-mono tracking-tighter relative flex items-baseline leading-none">
//               <span className="w-[3ch] text-center inline-block tabular-nums">
//                 {String(progress).padStart(3, "0")}
//               </span>
//               <span className="text-3xl md:text-4xl text-orange-500 ml-1 font-sans font-normal">%</span>
//             </div>

//             {/* Sleek Progress Bar Track */}
//             <div className="w-64 md:w-80 h-[2px] bg-zinc-800 rounded-full mt-8 overflow-hidden relative">
//               <motion.div
//                 className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full"
//                 animate={{ width: `${progress}%` }}
//                 transition={{ type: "tween", ease: "easeOut" }}
//               />
//             </div>

//             {/* Dynamic Status Label */}
//             <div className="mt-6 text-[10px] font-mono text-zinc-400 tracking-[0.2em] uppercase h-4 flex items-center justify-center">
//               <span className="animate-pulse">{getLoadingMessage(progress)}</span>
//             </div>
//           </div>

//           {/* Bottom Branding */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.4 }}
//             className="absolute bottom-10 font-mono text-[9px] md:text-[10px] text-zinc-500 tracking-[0.3em] uppercase"
//           >
//             PORTFOLIO V2.0 © {new Date().getFullYear()}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const IMAGES = [
  "/pexels-tina-p-891488179-33017127-removebg.png",
  "/pexels-lureofadventure-28367803.jpg",
  "/blog.jpg",
  "/codecollab.png",
  "/harshit.png",
  "/hi-static.webp",
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    let loadedCount = 0;
    const total = IMAGES.length;

    // Lock page scrolling
    document.body.classList.add("overflow-hidden");

    const handleImageLoad = () => {
      if (!active) return;
      loadedCount++;
      setProgress(Math.round((loadedCount / total) * 100));
    };

    // Preload all assets
    Promise.all(
      IMAGES.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          // Resolve on both load and error so a broken image doesn't stall the app
          img.onload = () => {
            handleImageLoad();
            resolve(true);
          };
          img.onerror = () => {
            handleImageLoad();
            resolve(true);
          };
        });
      })
    ).then(() => {
      if (active) {
        setProgress(100);
        setTimeout(() => {
          setIsLoaded(true);
          document.body.classList.remove("overflow-hidden");
        }, 500); // Brief pause at 100%
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
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090b]"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 text-zinc-400"
          >
            <div className="font-mono text-sm tracking-widest tabular-nums">
              {progress}%
            </div>
            {/* Optional: A very thin, minimal progress line. Remove if you only want text. */}
            <div className="h-[1px] w-32 overflow-hidden bg-zinc-800">
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