import HomeClient from "@/components/HomeClient";
import HomeTeaser from "@/components/HomeTeaser";
import { getProjects } from "@/lib/queries";

<<<<<<< Updated upstream
import { useState } from "react";
import BootSequence from "@/components/boot/BootSequence";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection from "@/components/StackSection";
import JourneySection from "@/components/JourneySection";
import WhatsNextSection from "@/components/WhatsNextSection";
import Footer from "@/components/Footer";
=======
export const revalidate = 60;
>>>>>>> Stashed changes

export default async function Home() {
  const projects = await getProjects();

  return (
<<<<<<< Updated upstream
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
=======
    <HomeClient>
      <HomeTeaser projects={projects} />
    </HomeClient>
>>>>>>> Stashed changes
  );
}