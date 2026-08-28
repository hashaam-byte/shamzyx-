"use client";

import { useState } from "react";
import MatrixRainBackground from "@/components/boot/MatrixRainBackground";
import BootPhase0 from "@/components/boot/BootPhase0";
import BootPhase1Cursor from "@/components/boot/BootPhase1Cursor";
import BootPhase2Typing from "@/components/boot/BootPhase2Typing";
import BootPhase3Granted from "@/components/boot/BootPhase3Granted";

type Phase = "phase0" | "phase1-cursor" | "phase2-typing" | "phase3-granted" | "done";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("phase0");

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
    </div>
  );
}