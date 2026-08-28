"use client";

import { useEffect } from "react";
import type { Project } from "@/lib/content";

export default function ProjectStoryModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 backdrop-blur-sm p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} story`}
    >
      <div
        className="bg-code-panel border border-panel-border rounded-lg max-w-lg w-full p-6 sm:p-9 relative max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-dim hover:text-white text-base w-7 h-7 flex items-center justify-center rounded border border-panel-border"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="text-purple text-xs tracking-widest mb-3">THE STORY</div>
        <h3 className="font-extrabold text-2xl sm:text-3xl mb-2">
          {project.featured ? <span className="text-purple">{project.name}</span> : project.name}
        </h3>
        <p className="text-text-dim text-sm mb-6">{project.tagline}</p>

        <p className="text-text-dim text-[13.5px] leading-relaxed whitespace-pre-line">
          {project.story}
        </p>

        {project.verticals && project.verticals.length > 0 && (
          <div className="mt-7 pt-6 border-t border-panel-border">
            <div className="text-purple text-xs tracking-widest mb-4">THE BRAND TREE</div>

            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-purple shrink-0" />
              <span className="text-white text-sm font-semibold">{project.name}</span>
            </div>

            <div className="ml-[7px] border-l border-panel-border pl-5 flex flex-col gap-2.5 mt-2">
              {project.verticals.map((v) => (
                <a
                  key={v.name}
                  href={v.status === "live" ? v.url : undefined}
                  target={v.status === "live" ? "_blank" : undefined}
                  rel={v.status === "live" ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-between gap-3 -ml-5 pl-5 relative ${
                    v.status === "live" ? "hover:text-white cursor-pointer" : "cursor-default"
                  }`}
                  onClick={(e) => {
                    if (v.status !== "live") e.preventDefault();
                  }}
                >
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px bg-panel-border"
                    aria-hidden="true"
                  />
                  <span className="text-text-dim text-[13px]">{v.name}</span>
                  <span
                    className={`text-[9px] tracking-widest px-2 py-0.5 rounded shrink-0 ${
                      v.status === "live"
                        ? "text-purple border border-purple/40 bg-purple/10"
                        : "text-text-mute border border-panel-border"
                    }`}
                  >
                    {v.status === "live" ? "LIVE" : "IN PROGRESS"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}