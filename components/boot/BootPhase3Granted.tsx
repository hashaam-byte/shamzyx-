"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BootPhase3Granted({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const tl = gsap.timeline({ onComplete });

    tl.set(text, { opacity: 0 })
      .to({}, { duration: 0.4 })
      .to(text, { opacity: 1, duration: 0.04 })
      .to(text, { opacity: 0.2, duration: 0.05 })
      .to(text, { opacity: 1, duration: 0.05 })
      .to(text, { opacity: 0.3, duration: 0.06 })
      .to(text, { opacity: 1, duration: 0.15, ease: "power1.out" })
      .to({}, { duration: 0.6 })
      .to(container, { opacity: 0.3, filter: "brightness(3)", duration: 0.05 })
      .to(container, { opacity: 1, filter: "brightness(1.4)", duration: 0.05 })
      .to(container, {
        opacity: 0,
        filter: "brightness(1)",
        duration: 0.15,
        ease: "power1.in",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full h-full flex items-center justify-center font-mono"
    >
      <div
        ref={textRef}
        className="text-white font-semibold tracking-[0.12em]"
        style={{ textShadow: "var(--glow-purple-md)" }}
      >
        ACCESS GRANTED
      </div>
    </div>
  );
}