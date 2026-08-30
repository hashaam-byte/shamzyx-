import { stack } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";

export default function StackSection() {
  return (
    <Reveal id="stack" className="px-6 sm:px-16 py-24 sm:py-36 border-t border-panel-border">
      <div className="text-purple text-xs tracking-widest mb-6 font-mono">
        03 — THE STACK
      </div>

      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3 max-w-4xl">
        {stack.map((item, i) => (
          <span key={item.name} className="flex items-baseline">
            <span className="text-3xl sm:text-5xl font-extrabold text-text-dim hover:text-white transition-colors cursor-default">
              {item.name}
            </span>
            {i < stack.length - 1 && (
              <span className="text-purple text-2xl sm:text-4xl ml-5 font-mono">/</span>
            )}
          </span>
        ))}
      </div>

      <p className="text-text-mute text-xs tracking-wide mt-10 max-w-md">
        Technologies I use to bring ideas to life.
      </p>
    </Reveal>
  );
}