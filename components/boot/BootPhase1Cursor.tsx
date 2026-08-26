"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ─────────────────────────────────────────────
// BOOT PHASE 1 — "The cursor"
//
// A single terminal cursor materializes (small,
// blurred, transparent -> full size, sharp, with
// a slight overshoot). Then it blinks three times —
// not a flat opacity flicker, but a color shift
// between a soft lavender-purple and a deep dark
// purple, which reads more like a "breathing"
// pulse than a harsh on/off blink.
//
// Timing: materialize 350ms, 3 color-blink cycles
// (~900ms), ~1.25s total.
// ─────────────────────────────────────────────

export default function BootPhase1Cursor({ onComplete }: { onComplete: () => void }) {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const tl = gsap.timeline({ onComplete });

    tl.set(el, {
      opacity: 0,
      scale: 0.4,
      filter: "blur(6px)",
      backgroundColor: "#d8c9f0", // purple-soft
    })
      .to(el, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.35,
        ease: "back.out(2.2)",
      })
      .to(el, {
        backgroundColor: "#3b1a5c", // purple-dark
        duration: 0.3,
        repeat: 5, // 3 full soft<->dark cycles = 6 half-steps
        yoyo: true,
        ease: "power1.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <span
        ref={cursorRef}
        className="inline-block w-3 h-6"
        style={{ boxShadow: "var(--glow-purple-sm)" }}
      />
    </div>
  );
}