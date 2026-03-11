"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/utils/gsap";
import { projects } from "@/data/dummyData";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        const image = card.querySelector(".project-image");

        // Parallax image movement
        gsap.to(image, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-black">
      {projects.map((project, index) => (
        <div key={project.id} className="h-[120vh] relative">
          <ProjectCard project={project} index={index} />
        </div>
      ))}
    </section>
  );
}
