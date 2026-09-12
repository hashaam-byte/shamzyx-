<<<<<<< Updated upstream
import { projects, ProjectType } from "@/lib/content";
import PhoneFrame from "@/components/frames/PhoneFrame";
import BrowserFrame from "@/components/frames/BrowserFrame";
import HardwareFrame from "@/components/frames/HardwareFrame";
import LiveDemoEmbed from "@/components/LiveDemoEmbed";
import Reveal from "@/components/motion/Reveal";

const TYPE_LABEL: Record<ProjectType, string> = {
  mobile: "MOBILE APP",
  web: "WEBSITE",
  hardware: "HARDWARE / CONCEPT",
};
=======
import { getProjects } from "@/lib/queries";
import ProjectsAccordion from "@/components/ProjectsAccordion";
>>>>>>> Stashed changes

export default function ProjectsSection() {
  return (
    <section>
      <div className="px-6 sm:px-16 pt-24 sm:pt-32 pb-12">
        <div className="text-purple text-xs tracking-widest mb-3 font-mono">03 — PROJECTS</div>
        <h1 className="font-extrabold text-4xl sm:text-6xl leading-[0.95] max-w-xl mb-4">
          THINGS I&apos;VE BUILT
          <br />
          WITH <span className="text-purple">PURPOSE.</span>
        </h1>
        <p className="text-text-dim text-sm">Tap a project to open its full story.</p>
      </div>

      <ProjectsAccordion projects={projects} />
    </section>
  );
}