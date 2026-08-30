import { journey } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";

export default function JourneySection() {
  return (
    <section className="px-6 sm:px-16 py-24 sm:py-32">
      <div className="text-purple text-xs tracking-widest mb-3 font-mono">04 — JOURNEY</div>
      <h1 className="font-extrabold text-4xl sm:text-6xl leading-[0.95] mb-4 max-w-xl">
        EVERY STEP HAS
        <br />
        SHAPED THE <span className="text-purple">BUILDER.</span>
      </h1>

      <div className="relative mt-20 max-w-2xl">
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px bg-panel-border"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-16 sm:gap-20">
          {journey.map((point, i) => {
            const isLast = i === journey.length - 1;

            return (
              <Reveal key={point.year} delay={i * 0.05} className="relative pl-10">
                <span
                  className={`absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${
                    isLast ? "border-champagne bg-champagne/10" : "border-purple bg-bg"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${isLast ? "bg-champagne" : "bg-purple"}`}
                    style={{
                      boxShadow: isLast ? "var(--glow-champagne-sm)" : "var(--glow-purple-sm)",
                    }}
                  />
                </span>

                <div
                  className={`font-extrabold text-5xl sm:text-7xl leading-none mb-3 ${
                    isLast ? "text-champagne" : "text-white"
                  }`}
                >
                  {point.year}
                </div>
                <p className="text-text-dim text-base sm:text-lg max-w-md">
                  {point.lines[0]}
                  <br />
                  {point.lines[1]}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}