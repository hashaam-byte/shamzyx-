import { stack } from "@/lib/content";

export default function StackSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-panel-border">
      <div className="bg-code-panel p-6 sm:p-10">
        <div className="text-purple text-xs tracking-widest mb-2">03</div>
        <h2 className="font-extrabold text-2xl sm:text-3xl mb-3.5">THE STACK</h2>
        <p className="text-text-dim text-sm leading-relaxed max-w-xs">
          Technologies I use to bring ideas to life.
        </p>
        <button className="inline-flex items-center gap-1.5 mt-5 border border-purple text-white text-[11px] tracking-widest px-4 py-2.5 rounded bg-purple/[0.08] hover:bg-purple/20 transition-colors">
          VIEW STACK →
        </button>
      </div>

      <div className="bg-code-panel p-6 sm:p-10">
        <div className="grid grid-cols-4 gap-4">
          {stack.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-2 text-center">
              {/* NEEDS REAL IMAGE (optional): swap for the actual brand SVG logos if you want pixel-perfect icons instead of glyphs */}
              <div className="w-11 h-11 rounded-full border border-panel-border bg-purple/[0.06] flex items-center justify-center text-purple text-base">
                {item.icon}
              </div>
              <span className="text-text-dim text-[11px]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
