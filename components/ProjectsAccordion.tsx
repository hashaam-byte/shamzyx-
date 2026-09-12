"use client";

import { useState } from "react";
import type { Project, ProjectType } from "@/lib/content";
import PhoneFrame from "@/components/frames/PhoneFrame";
import BrowserFrame from "@/components/frames/BrowserFrame";
import HardwareFrame from "@/components/frames/HardwareFrame";
import LiveDemoEmbed from "@/components/LiveDemoEmbed";

const TYPE_LABEL: Record<ProjectType, string> = {
  mobile: "MOBILE APP",
  web: "WEBSITE",
  hardware: "HARDWARE / CONCEPT",
};

export default function ProjectsAccordion({ projects }: { projects: Project[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(projects[0]?.slug ?? null);

  return (
    <div>
      {projects.map((project, i) => {
        const isOpen = openSlug === project.slug;

        return (
          <div key={project.slug} className="border-t border-panel-border last:border-b">
            {/* Collapsed row — always visible */}
            <button
              onClick={() => setOpenSlug(isOpen ? null : project.slug)}
              className="w-full flex items-center gap-4 sm:gap-5 px-6 sm:px-16 py-5 sm:py-7 text-left group hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-text-mute text-xs font-mono w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="w-12 h-9 sm:w-16 sm:h-11 rounded overflow-hidden bg-panel border border-panel-border shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden="true"
              />

              <span
                className={`font-extrabold text-lg sm:text-2xl flex-1 truncate ${
                  project.featured ? "text-purple" : "text-white"
                }`}
              >
                {project.name}
              </span>

              <div className="hidden md:flex gap-1.5 shrink-0">
                {project.types.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] tracking-widest text-text-mute border border-panel-border rounded-full px-2.5 py-0.5"
                  >
                    {TYPE_LABEL[t]}
                  </span>
                ))}
              </div>

              <span
                className={`text-purple text-xl leading-none shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Expanded detail — CSS grid-rows trick for a smooth height animation with no JS measuring */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 sm:px-16 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div>
                    <p className="text-text-dim text-base sm:text-lg mb-6 max-w-md">
                      {project.tagline}
                    </p>
                    <p className="text-text-dim text-sm leading-relaxed max-w-md whitespace-pre-line">
                      {project.story}
                    </p>

                    {project.verticals && project.verticals.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-panel-border max-w-lg">
                        <div className="text-purple text-xs tracking-widest mb-4 font-mono">
                          THE BRAND TREE
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.verticals.map((v) => {
                            const isLive = v.status === "live";
                            const thumb = (
                              <div className="relative w-[130px] aspect-[4/3] rounded-lg overflow-hidden border border-panel-border bg-panel">
                                {v.image ? (
                                  <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${v.image})` }}
                                  />
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center text-text-mute text-[10px] px-2 text-center">
                                    {v.name}
                                  </div>
                                )}
                                <span
                                  className={`absolute top-1.5 right-1.5 text-[8px] tracking-widest px-1.5 py-0.5 rounded ${
                                    isLive
                                      ? "text-purple bg-black/60 border border-purple/40"
                                      : "text-text-mute bg-black/60 border border-panel-border"
                                  }`}
                                >
                                  {isLive ? "LIVE" : "SOON"}
                                </span>
                              </div>
                            );

                            return isLive ? (
                              <a key={v.name} href={v.url} target="_blank" rel="noopener noreferrer" className="group/v w-[130px]">
                                <div className="transition-transform group-hover/v:-translate-y-0.5">{thumb}</div>
                                <div className="mt-2 text-text-dim text-[11px] group-hover/v:text-white transition-colors">
                                  {v.name}
                                </div>
                              </a>
                            ) : (
                              <div key={v.name} className="w-[130px] cursor-default">
                                {thumb}
                                <div className="mt-2 text-text-mute text-[11px]">{v.name}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    {project.types.includes("mobile") && (
                      <PhoneFrame image={project.image} alt={project.name} />
                    )}
                    {project.types.includes("web") && (
                      <div className="w-full max-w-lg">
                        {project.liveUrl ? (
                          <LiveDemoEmbed image={project.image} alt={project.name} liveUrl={project.liveUrl} />
                        ) : (
                          <BrowserFrame image={project.image} alt={project.name} />
                        )}
                      </div>
                    )}
                    {project.types.includes("hardware") && (
                      <div className="w-full max-w-lg">
                        <HardwareFrame image={project.image} alt={project.name} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
