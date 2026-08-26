"use client";

import { useState } from "react";
import BootSequence from "@/components/boot/BootSequence";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection from "@/components/StackSection";
import JourneySection from "@/components/JourneySection";
import WhatsNextSection from "@/components/WhatsNextSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <BootSequence onComplete={() => setLoading(false)} />}

      <div
        className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
        <Hero />
        <ProjectsSection />
        <StackSection />
        <JourneySection />
        <WhatsNextSection />
        <Footer />
      </div>
    </>
  );
}