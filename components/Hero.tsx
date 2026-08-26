export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[86vh] flex flex-col justify-center px-5 sm:px-16 py-16 relative border-b border-panel-border bg-cover bg-center"
      style={{ backgroundImage: "url(/images/hero-workspace.png)" }}
    >
      {/* Dark overlay + binary texture on top of the photo so text stays readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,1,6,0.94) 0%, rgba(5,1,6,0.75) 45%, rgba(5,1,6,0.35) 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Ctext x='0' y='16' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.06'%3E01001101%3C/text%3E%3Ctext x='14' y='38' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.05'%3E10110010%3C/text%3E%3Ctext x='4' y='60' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.055'%3E00101101%3C/text%3E%3Ctext x='18' y='82' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.045'%3E11010010%3C/text%3E%3Ctext x='0' y='104' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.06'%3E01101001%3C/text%3E%3Ctext x='14' y='126' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.05'%3E10010110%3C/text%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat, repeat",
        }}
      />

      <div className="relative">
        <h1 className="font-extrabold leading-[1.02] text-[38px] sm:text-[56px] lg:text-[78px] max-w-3xl">
          I BUILD
          <br />
          <span className="text-purple">WHAT&apos;S NEXT.</span>
        </h1>

        <p className="mt-6 text-text-dim text-sm sm:text-base max-w-md leading-relaxed">
          Developer. Designer. Problem solver.
          <br />
          I turn ideas into digital experiences that make impact.
          <span className="inline-block w-0.5 h-[18px] bg-purple ml-1 -mb-1 animate-blink" />
        </p>

        <div className="mt-14 flex items-center gap-2.5 text-text-mute text-[11px] tracking-widest">
          SCROLL TO EXPLORE
          <span className="text-purple animate-nudge">→</span>
        </div>
      </div>
    </section>
  );
}
