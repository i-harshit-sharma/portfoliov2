"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { AlarmClock } from "lucide-react";

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector(
      "[data-parallax-layers]",
    );

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0, // Scrub is 0 because Lenis handles the smooth interpolation
        },
      });

      const layers = [
        { layer: "1", yPercent: 70 }, // Background moves the most
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 }, // Text layer
        { layer: "4", yPercent: 10 }, // Foreground moves the least
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(
            `[data-parallax-layer="${layerObj.layer}"]`,
          ),
          {
            yPercent: layerObj.yPercent,
            ease: "none",
          },
          idx === 0 ? undefined : "<",
        );
      });
    }

    // 2. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 3. Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="bg-[#0f0f0f] text-white overflow-x-hidden"
      ref={parallaxRef}
    >
      <section className="relative h-screen w-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Layer Container: taller than screen and pulled up to hide edges during animation */}
          <div
            data-parallax-layers
            className="relative w-full h-[120%] -top-[10%]"
          >
            {/* Layer 1: Background */}
            <Image
              src="/pexels-lureofadventure-28367803.jpg"
              loading="eager"
              width="800"
              height="800"
              data-parallax-layer="1"
              alt="Background mountains"
              className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom z-[1] brightness-75"
            />

            {/* Layer 2: Midground */}
            {/*<img
              src="/text-1783712625547.png"
              loading="eager"
              width="800"
              data-parallax-layer="2"
              alt="Midground trees"
              className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom z-[2]"
            />*/}

            {/* Layer 3: Text */}
            <div
              data-parallax-layer="3"
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-[3]"
            >
              {/*<h2 className="text-[clamp(4rem,12vw,12rem)] font-bold uppercase tracking-[-0.02em] m-0 text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.5)] mb-18">
                Harshit
              </h2>*/}
              <Image
                src="/harshit.png"
                loading="eager"
                height="400"
                width="600"
                // data-parallax-layer="2"
                alt="Midground trees"
                className="  mb-20"
              />
            </div>

            {/* Layer 4: Foreground */}
            <Image
              src="/green.png"
              loading="eager"
              width="800"
              height="800"
              data-parallax-layer="4"
              alt="Foreground subject"
              className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom z-[4] brightness-70"
            />
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#030303] to-transparent z-[5]"></div>
          <ProfileFooter />
        </div>
      </section>
    </div>
  );
}

export function ProfileFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      // Formats to the exact local time string in India
      const indiaTime = new Intl.DateTimeFormat("en-US", options).format(
        new Date(),
      );
      setTime(indiaTime);
    };

    updateClock(); // Run immediately on mount
    const timerId = setInterval(updateClock, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="absolute bottom-6 left-16 right-16 z-20 flex justify-between items-center text-white">
      <div className="flex items-center gap-2 font-mono text-sm tracking-wider opacity-90">
        <AlarmClock size={18} className="animate-pulse" />
        <span>{time || "00:00:00 AM"}</span>
      </div>
  
      <div className="text-sm opacity-60 font-medium ">
        Software engineer from Jaipur / India
      </div>
    </div>
  );
}
