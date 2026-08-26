"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ─────────────────────────────────────────────
// BOOT PHASE 0 — "The page opens"
//
// Pure black. "SHAMZY X" resolves into focus from
// a soft blur, holds, then dissolves back into
// blur as it vanishes. Set in Cinzel — bold,
// high-contrast, engraved serif — chosen over a
// hand-illustrated brush logotype because this
// needs to be real, animatable text, not an image.
//
// Timing: blur-in 800ms, hold 900ms, blur-out 800ms.
// ~2.5s total for this phase.
// ─────────────────────────────────────────────

export default function BootPhase0({ onComplete }: { onComplete: () => void }) {
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;

    const tl = gsap.timeline({ onComplete });

    tl.set(el, { opacity: 0, filter: "blur(16px)" })
      .to(el, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
      })
      .to(el, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9, // hold, fully in focus
      })
      .to(el, {
        opacity: 0,
        filter: "blur(16px)",
        duration: 0.8,
        ease: "power2.in",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <div
        ref={wordmarkRef}
        className="font-serif-display font-semibold text-white tracking-[0.2em] text-3xl sm:text-4xl"
      >
        SHAMZY <span className="text-purple">X</span>
      </div>
    </div>
  );
}