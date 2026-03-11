"use client";

import { Project } from "@/data/dummyData";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <div
      className="project-card sticky top-[12vh] h-[76vh] w-[92%] mx-auto rounded-4xl overflow-hidden shadow-2xl flex items-center"
      style={{
        backgroundColor: project.color,
        zIndex: 100 - index,
      }}
    >
      <div className="grid grid-cols-2 w-full h-full">
        {/* LEFT CONTENT */}
        <div className="project-content p-16 flex flex-col justify-center">
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-1 rounded-full border border-black/40 text-sm">
              {project.year}
            </span>
            <span className="px-4 py-1 rounded-full border border-black/40 text-sm">
              {project.category}
            </span>
          </div>

          <h2 className="text-5xl font-semibold mb-2">{project.title}</h2>

          <p className="text-4xl opacity-50">{project.subtitle}</p>

          <button className="mt-10 px-6 py-3 bg-black text-white rounded-full w-fit text-sm">
            See Project →
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative p-8">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <img
              src={project.image}
              className="project-image absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
