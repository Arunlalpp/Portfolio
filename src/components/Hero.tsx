"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/utils/gsap";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray(".reveal");

      gsap.from(words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1.4,
        ease: "power4.out",
      });

      // Scroll-based scaling (Gaspar style)
      gsap.to(".hero-title", {
        scale: 1.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-24 overflow-hidden"
    >
      <h1 className="hero-title text-[12vw] leading-[0.9] font-bold tracking-tight">
        <div className="overflow-hidden">
          <span className="reveal block">Front-End</span>
        </div>
        <div className="overflow-hidden">
          <span className="reveal block">Developer</span>
        </div>
      </h1>

      <p className="text-slate-400 mt-10 text-lg max-w-xl">
        Building immersive digital experiences with precision and motion.
      </p>
    </section>
  );
}
