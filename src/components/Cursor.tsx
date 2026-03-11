"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/utils/gsap";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(cursor.current, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 w-8 h-8 border border-yellow-300 rounded-full pointer-events-none z-50"
    />
  );
}
