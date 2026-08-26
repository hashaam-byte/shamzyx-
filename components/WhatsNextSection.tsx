export default function WhatsNextSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-panel-border" id="contact">
      <div className="bg-code-panel p-6 sm:p-10">
        <div className="text-purple text-xs tracking-widest mb-2">05</div>
        <h2 className="font-extrabold text-2xl sm:text-3xl mb-3.5">WHAT&apos;S NEXT?</h2>
        <p className="text-text-dim text-sm leading-relaxed max-w-xs">
          The future is being built right now.
        </p>
        <button className="inline-flex items-center gap-1.5 mt-5 border border-purple text-white text-[11px] tracking-widest px-4 py-2.5 rounded bg-purple/[0.08] hover:bg-purple/20 transition-colors">
          LET&apos;S BUILD →
        </button>
      </div>

      <div
        className="relative min-h-[260px] flex flex-col justify-end p-6 sm:p-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/city-skyline.png)" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,7,16,0.15) 0%, rgba(5,1,6,0.85) 100%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.15), transparent 60%)",
          }}
        />
        <h2 className="relative text-xl sm:text-2xl font-extrabold">
          THE <span className="text-purple">BEST IS</span>
          <br />
          YET TO COME.
        </h2>
      </div>
    </div>
  );
}
