"use client";

import { useEffect, useState } from "react";
import MatrixRainBackground from "@/components/boot/MatrixRainBackground";
import BootPhase0 from "@/components/boot/BootPhase0";
import BootPhase1Cursor from "@/components/boot/BootPhase1Cursor";
import BootPhase2Typing from "@/components/boot/BootPhase2Typing";
import BootPhase3Granted from "@/components/boot/BootPhase3Granted";

type Phase = "phase0" | "phase1-cursor" | "phase2-typing" | "phase3-granted" | "done";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("phase0");
  const [skippable, setSkippable] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSkippable(true), 400);
    return () => clearTimeout(t);
  }, []);

  function handleSkip() {
    setPhase("done");
    onComplete();
  }

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[999] bg-bg overflow-hidden">
      <MatrixRainBackground />

      {phase === "phase0" && (
        <BootPhase0 onComplete={() => setPhase("phase1-cursor")} />
      )}
      {phase === "phase1-cursor" && (
        <BootPhase1Cursor onComplete={() => setPhase("phase2-typing")} />
      )}
      {phase === "phase2-typing" && (
        <BootPhase2Typing onComplete={() => setPhase("phase3-granted")} />
      )}
      {phase === "phase3-granted" && (
        <BootPhase3Granted
          onComplete={() => {
            setPhase("done");
            onComplete();
          }}
        />
      )}

      {skippable && (
        <button
          onClick={handleSkip}
          className="absolute bottom-7 right-8 z-20 border border-purple/35 text-text-dim text-xs tracking-wide px-3.5 py-2 rounded font-mono transition-colors hover:border-purple hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple"
        >
          Skip →
        </button>
      )}
    </div>
  );
}