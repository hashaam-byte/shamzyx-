import Link from "next/link";
import type { Project } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";

export default function HomeTeaser({ projects }: { projects: Project[] }) {
  const preview = projects.slice(0, 3);

  return (
    <Reveal className="px-6 sm:px-16 py-24 sm:py-32 border-t border-panel-border">
      <div className="text-purple text-xs tracking-widest mb-4 font-mono">SELECTED WORK</div>
      <h2 className="font-extrabold text-3xl sm:text-5xl leading-[0.95] max-w-xl mb-12">
        A FEW THINGS
        <br />
        WORTH <span className="text-purple">SHOWING.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {preview.map((project) => (
          <Link
            key={project.slug}
            href="/projects"
            className="group block rounded-lg overflow-hidden border border-panel-border bg-code-panel hover:border-purple/40 transition-colors"
          >
            <div
              className="aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
              aria-hidden="true"
            />
            <div className="p-4">
              <div className={`font-extrabold text-sm ${project.featured ? "text-purple" : "text-white"}`}>
                {project.name}
              </div>
              <p className="text-text-dim text-xs mt-1 line-clamp-1">{project.tagline}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 border border-purple text-white text-xs tracking-widest px-5 py-3 rounded bg-purple/10 hover:bg-purple/20 transition-colors"
      >
        VIEW ALL WORK →
      </Link>
    </Reveal>
  );
}
