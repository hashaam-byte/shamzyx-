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
  // Close on Escape for keyboard users
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
      </div>
    </div>
  );
}
