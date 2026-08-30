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

export default function ProjectsSection() {
  return (
    <section>
      <div className="px-6 sm:px-16 pt-24 sm:pt-32 pb-16">
        <div className="text-purple text-xs tracking-widest mb-3 font-mono">03 — PROJECTS</div>
        <h1 className="font-extrabold text-4xl sm:text-6xl leading-[0.95] max-w-xl">
          THINGS I&apos;VE BUILT
          <br />
          WITH <span className="text-purple">PURPOSE.</span>
        </h1>
      </div>

      {projects.map((project, i) => {
        const isEven = i % 2 === 0;

        return (
          <Reveal key={project.slug} className="border-t border-panel-border py-20 sm:py-28">
            <div className="px-6 sm:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.types.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] tracking-widest text-text-mute border border-panel-border rounded px-1.5 py-0.5"
                    >
                      {TYPE_LABEL[t]}
                    </span>
                  ))}
                </div>

                <h2 className="font-extrabold text-3xl sm:text-5xl mb-4">
                  {project.featured ? (
                    <span className="text-purple">{project.name}</span>
                  ) : (
                    project.name
                  )}
                </h2>

                <p className="text-text-dim text-base sm:text-lg mb-6 max-w-md">
                  {project.tagline}
                </p>

                <p className="text-text-dim text-sm leading-relaxed max-w-md whitespace-pre-line">
                  {project.story}
                </p>

                {project.verticals && project.verticals.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-panel-border max-w-md">
                    <div className="text-purple text-xs tracking-widest mb-4 font-mono">
                      THE BRAND TREE
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-purple shrink-0" />
                      <span className="text-white text-sm font-semibold">{project.name}</span>
                    </div>

                    <div className="ml-[7px] border-l border-panel-border pl-5 flex flex-col gap-2.5 mt-2">
                      {project.verticals.map((v) => (
                        <a
                          key={v.name}
                          href={v.status === "live" ? v.url : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between gap-3 -ml-5 pl-5 relative ${
                            v.status === "live" ? "hover:text-white cursor-pointer" : "cursor-default"
                          }`}
                          onClick={(e) => {
                            if (v.status !== "live") e.preventDefault();
                          }}
                        >
                          <span
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px bg-panel-border"
                            aria-hidden="true"
                          />
                          <span className="text-text-dim text-[13px]">{v.name}</span>
                          <span
                            className={`text-[9px] tracking-widest px-2 py-0.5 rounded shrink-0 ${
                              v.status === "live"
                                ? "text-purple border border-purple/40 bg-purple/10"
                                : "text-text-mute border border-panel-border"
                            }`}
                          >
                            {v.status === "live" ? "LIVE" : "IN PROGRESS"}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={`flex items-center justify-center gap-4 flex-wrap ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                {project.types.includes("mobile") && (
                  <PhoneFrame image={project.image} alt={project.name} />
                )}
                {project.types.includes("web") && (
                  <div className="w-full max-w-lg">
                    {project.liveUrl ? (
                      <LiveDemoEmbed image={project.image} alt={project.name} liveUrl={project.liveUrl} />
                    ) : (
                      <BrowserFrame image={project.image} alt={project.name} />
                    )}
                  </div>
                )}
                {project.types.includes("hardware") && (
                  <div className="w-full max-w-lg">
                    <HardwareFrame image={project.image} alt={project.name} />
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}