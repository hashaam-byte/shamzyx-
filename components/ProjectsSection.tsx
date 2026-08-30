"use client";

import { useState } from "react";
import { projects, ProjectType, Project } from "@/lib/content";
import PhoneFrame from "@/components/frames/PhoneFrame";
import BrowserFrame from "@/components/frames/BrowserFrame";
import HardwareFrame from "@/components/frames/HardwareFrame";
import ProjectStoryModal from "@/components/ProjectStoryModal";
import Reveal from "@/components/motion/Reveal";

const TYPE_LABEL: Record<ProjectType, string> = {
  mobile: "MOBILE APP",
  web: "WEBSITE",
  hardware: "HARDWARE / CONCEPT",
};

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="px-6 sm:px-16 py-24 sm:py-32">
      <div className="text-purple text-xs tracking-widest mb-3 font-mono">03 — PROJECTS</div>
      <h1 className="font-extrabold text-4xl sm:text-6xl leading-[0.95] mb-4 max-w-xl">
        THINGS I&apos;VE BUILT
        <br />
        WITH <span className="text-purple">PURPOSE.</span>
      </h1>
      <p className="text-text-dim text-base sm:text-lg max-w-md mb-16">
        Tap a project to see the story behind it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <button
              onClick={() => setSelected(project)}
              className="text-left w-full h-full rounded-xl bg-code-panel border border-panel-border p-5 flex flex-col gap-3 hover:border-purple/40 transition-colors cursor-pointer"
            >
              <div className="flex flex-wrap gap-1.5">
                {project.types.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] tracking-widest text-text-mute border border-panel-border rounded px-1.5 py-0.5"
                  >
                    {TYPE_LABEL[t]}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 flex-wrap py-1">
                {project.types.includes("mobile") && (
                  <PhoneFrame image={project.image} alt={project.name} />
                )}
                {project.types.includes("web") && (
                  <div className="w-full">
                    <BrowserFrame image={project.image} alt={project.name} />
                  </div>
                )}
                {project.types.includes("hardware") && (
                  <div className="w-full">
                    <HardwareFrame image={project.image} alt={project.name} />
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-[17px] mb-1">
                  {project.featured ? (
                    <span className="text-purple">{project.name}</span>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="text-text-dim text-xs leading-relaxed">{project.tagline}</p>
                <span className="text-purple text-[10px] tracking-widest mt-2 inline-block">
                  TAP FOR STORY →
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {selected && (
        <ProjectStoryModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}