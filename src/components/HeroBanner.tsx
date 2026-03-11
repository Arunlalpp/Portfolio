"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/utils/gsap";
import Hero from "./Hero";

export default function HeroBanner() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hero = container.current;
    const content = hero?.querySelector(".hero-content-wrapper");

    if (!hero || !content) return;

    // Shrink animation
    gsap.to(hero, {
      width: "92%",
      height: "80vh",
      borderRadius: "50px",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Move content to center
    gsap.to(content, {
      y: () => -window.innerHeight * 0.35,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative h-[150vh] bg-slate-950">
      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <div
          ref={container}
          className="relative h-screen w-full overflow-hidden will-change-transform"
        >
          {/* VIDEO */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="hero-content-wrapper relative z-10 h-full flex items-end px-16 pb-24 text-white">
            <Hero />
          </div>
        </div>
      </div>
    </section>
  );
}
