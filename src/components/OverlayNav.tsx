"use client";
import { useState } from "react";
import { gsap } from "@/utils/gsap";

export default function OverlayNav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);

    gsap.to(".overlay", {
      clipPath: open ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "power4.inOut",
    });
  };

  return (
    <>
      <button onClick={toggleMenu}>Menu</button>
      <div className="overlay fixed inset-0 bg-black z-40 clip-path-[inset(0%_0%_100%_0%)]">
        <div className="flex items-center justify-center h-full text-5xl">
          Navigation
        </div>
      </div>
    </>
  );
}
