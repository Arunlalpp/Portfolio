"use client";

import { useRef, useEffect } from "react";
import { useMagnetic } from "@/utils/useMagnetic";
import { gsap } from "@/utils/gsap";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null); // ← HTMLButtonElement → HTMLElement

  const homeRef = useMagnetic<HTMLButtonElement>(); // ← add <HTMLButtonElement>
  const portfolioRef = useMagnetic<HTMLButtonElement>(); // ← add <HTMLButtonElement>
  const aboutRef = useMagnetic<HTMLButtonElement>(); // ← add <HTMLButtonElement>
  const contactRef = useMagnetic<HTMLButtonElement>(); // ← add <HTMLButtonElement>

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 100) {
        gsap.to(headerRef.current, {
          y: -120,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(headerRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center px-8 transition-transform"
    >
      <div className="flex gap-4">
        <button
          ref={homeRef}
          className="px-6 py-2 rounded-full border border-white/30 backdrop-blur-md text-sm"
        >
          Home
        </button>
        <button
          ref={portfolioRef}
          className="px-6 py-2 rounded-full border border-white/30 backdrop-blur-md text-sm"
        >
          Portfolio
        </button>
      </div>

      <div className="text-xl font-semibold tracking-wide">GASPAR</div>

      <div className="flex gap-4">
        <button
          ref={aboutRef}
          className="px-6 py-2 rounded-full border border-white/30 backdrop-blur-md text-sm"
        >
          About
        </button>
        <button
          ref={contactRef}
          className="px-6 py-2 rounded-full border border-white/30 backdrop-blur-md text-sm"
        >
          Get in touch
        </button>
      </div>
    </header>
  );
}
