import { getProjects } from "@/lib/queries";
import ProjectsAccordion from "@/components/ProjectsAccordion";

export default async function ProjectsSection() {
  const projects = await getProjects();

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
