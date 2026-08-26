import { journey } from "@/lib/content";

export default function JourneySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-panel-border" id="journey">
      <div className="bg-code-panel p-6 sm:p-10">
        <div className="text-purple text-xs tracking-widest mb-2">04</div>
        <h2 className="font-extrabold text-2xl sm:text-3xl mb-3.5">THE JOURNEY</h2>
        <p className="text-text-dim text-sm leading-relaxed max-w-xs">
          Every step has shaped the builder.
        </p>
        <button className="inline-flex items-center gap-1.5 mt-5 border border-purple text-white text-[11px] tracking-widest px-4 py-2.5 rounded bg-purple/[0.08] hover:bg-purple/20 transition-colors">
          VIEW TIMELINE →
        </button>
      </div>

      <div className="bg-code-panel p-6 sm:p-10">
        <div className="relative flex justify-between mt-2">
          <div className="absolute top-[6px] left-0 right-0 h-px bg-panel-border" aria-hidden="true" />
          {journey.map((point) => (
            <div key={point.year} className="flex-1 text-center relative">
              <div className="w-2.5 h-2.5 rounded-full bg-purple mx-auto mb-3.5 shadow-[0_0_10px_rgba(168,85,247,0.7)] relative z-10" />
              <div className="text-purple font-bold text-sm mb-1">{point.year}</div>
              <div className="text-text-mute text-[11px] leading-relaxed">
                {point.lines[0]}
                <br />
                {point.lines[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
