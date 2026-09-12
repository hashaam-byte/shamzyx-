"use client";

import { useState } from "react";
import BootSequence from "@/components/boot/BootSequence";
import Hero from "@/components/Hero";

export default function HomeClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <BootSequence onComplete={() => setLoading(false)} />}

      <div className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Hero />
        {children}
      </div>
    </>
  );
}
