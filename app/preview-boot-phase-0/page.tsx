"use client";

import { useState } from "react";
import BootPhase0 from "@/components/boot/BootPhase0";

export default function PreviewBootPhase0() {
  const [key, setKey] = useState(0);
  const [done, setDone] = useState(false);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      {!done && <BootPhase0 key={key} onComplete={() => setDone(true)} />}
      {done && (
        <button
          onClick={() => { setDone(false); setKey((k) => k + 1); }}
          className="border border-purple/40 text-text-dim text-xs tracking-widest px-4 py-2 rounded font-mono hover:text-white hover:border-purple transition-colors"
        >
          ↻ Replay Phase 0
        </button>
      )}
    </div>
  );
}
