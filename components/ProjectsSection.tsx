"use client";

import { useState } from "react";
import { projects, ProjectType, Project } from "@/lib/content";
import PhoneFrame from "@/components/frames/PhoneFrame";
import BrowserFrame from "@/components/frames/BrowserFrame";
import HardwareFrame from "@/components/frames/HardwareFrame";
import ProjectStoryModal from "@/components/ProjectStoryModal";

const TYPE_LABEL: Record<ProjectType, string> = {
  mobile: "MOBILE APP",
  web: "WEBSITE",
  hardware: "HARDWARE / CONCEPT",
};

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-panel-border" id="projects">
      <div className="bg-code-panel p-6 sm:p-10">
        <div className="text-purple text-xs tracking-widest mb-2">02</div>
        <h2 className="font-extrabold text-2xl sm:text-3xl mb-3.5">PROJECTS</h2>
        <p className="text-text-dim text-sm leading-relaxed max-w-xs">
          Things I&apos;ve built with purpose. Tap a project to see the story behind it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-panel-border">
        {projects.map((project) => (
          <button
            key={project.slug}
            onClick={() => setSelected(project)}
            className="text-left bg-code-panel p-5 flex flex-col gap-3 hover:bg-white/[0.03] transition-colors cursor-pointer"
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

            {/* A project can render more than one frame — e.g. Attendy is web + mobile */}
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
              <h3 className="text-[16px] mb-1">
                {project.featured ? <span className="text-purple">{project.name}</span> : project.name}
              </h3>
              <p className="text-text-dim text-xs leading-relaxed">{project.tagline}</p>
              <span className="text-purple text-[10px] tracking-widest mt-2 inline-block">
                TAP FOR STORY →
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <ProjectStoryModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
