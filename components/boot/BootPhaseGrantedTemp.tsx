"use client";

import { useEffect, useState } from "react";

// ─────────────────────────────────────────────
// TEMPORARY — placeholder for the "ACCESS GRANTED"
// + flicker beat. This is the NEXT animation to
// rebuild properly with GSAP (same treatment as
// Phase 0 / Phase 1 / Phase 2). For now it's plain
// CSS transitions just so the full boot sequence
// keeps working end to end while we go one piece
// at a time.
// ─────────────────────────────────────────────

export default function BootPhaseGrantedTemp({ onComplete }: { onComplete: () => void }) {
  const [granted, setGranted] = useState(false);
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setGranted(true), 400);
    const t2 = setTimeout(() => setFlicker(true), 400 + 650);
    const t3 = setTimeout(() => onComplete(), 400 + 650 + 200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className="relative z-10 w-full h-full flex items-center justify-center font-mono transition-opacity"
      style={{ opacity: flicker ? 0 : 1, transitionDuration: "180ms" }}
    >
      {granted && (
        <div
          className="text-white font-semibold tracking-[0.12em] transition-opacity"
          style={{ textShadow: "var(--glow-purple-md)", opacity: granted ? 1 : 0, transitionDuration: "260ms" }}
        >
          ACCESS GRANTED
        </div>
      )}
    </div>
  );
}