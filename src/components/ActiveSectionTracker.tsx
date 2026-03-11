"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/utils/gsap";

export default function ActiveSectionTracker() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          console.log("Active:", section.id);
        },
        onEnterBack: () => {
          console.log("Active:", section.id);
        },
      });

      triggers.push(trigger);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return null;
}
