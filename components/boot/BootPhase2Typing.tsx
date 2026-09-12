"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BOOT_LINES = [
  "initializing shamzyx...",
  "loading creative core...",
  "loading projects...",
  "loading systems...",
  "connecting to imagination...",
];

const CHAR_DURATION = 0.018;
const LINE_PAUSE = 0.22;

export default function BootPhase2Typing({ onComplete }: { onComplete: () => void }) {
  const [linesShown, setLinesShown] = useState<string[]>([]);
  const [currentTyped, setCurrentTyped] = useState("");
  const [typingActive, setTypingActive] = useState(true);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursorTween = gsap.to(cursorRef.current, {
      opacity: 0.15, duration: 0.45, repeat: -1, yoyo: true, ease: "power1.inOut",
    });

    const master = gsap.timeline({
      onComplete: () => { setTypingActive(false); cursorTween.kill(); onComplete(); },
    });

    BOOT_LINES.forEach((line) => {
      const proxy = { chars: 0 };
      master.to(proxy, {
        chars: line.length,
        duration: Math.max(line.length * CHAR_DURATION, 0.1),
        ease: "none",
        onUpdate: () => setCurrentTyped(line.slice(0, Math.floor(proxy.chars))),
        onComplete: () => {
          setLinesShown((prev) => [...prev, line]);
          setCurrentTyped("");
        },
      });
      master.to({}, { duration: LINE_PAUSE });
    });

    return () => { master.kill(); cursorTween.kill(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  return (
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <div className="w-[min(560px,86vw)] min-h-[160px] flex flex-col justify-center gap-1.5 font-mono">
        {linesShown.map((line, i) => (
          <div key={i} className="text-purple-soft text-sm tracking-wide leading-relaxed">
            <span className="text-purple">{">"}</span> {line}
          </div>
        ))}
        {typingActive && (
          <div className="text-purple-soft text-sm tracking-wide leading-relaxed">
            <span className="text-purple">{">"}</span> {currentTyped}
            <span ref={cursorRef} className="inline-block w-2 h-[15px] bg-purple ml-1 -mb-0.5" style={{ boxShadow: "var(--glow-purple-sm)" }} />
          </div>
        )}
      </div>
    </div>
  );
}
