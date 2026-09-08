"use client";

import { useState } from "react";

export default function LiveDemoEmbed({
  image,
  alt,
  liveUrl,
}: {
  image: string;
  alt: string;
  liveUrl: string;
}) {
  const [loaded, setLoaded] = useState(false);

  function handleLaunch() {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      window.open(liveUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setLoaded(true);
  }

  return (
    <div className="relative w-full rounded-lg border border-purple/30 bg-bg overflow-hidden">
      <div className="flex items-center gap-1.5 px-2.5 py-2 bg-panel border-b border-panel-border">
        <span className="w-2 h-2 rounded-full bg-purple/30" />
        <span className="w-2 h-2 rounded-full bg-purple/30" />
        <span className="w-2 h-2 rounded-full bg-purple/30" />
      </div>

      <div className="relative w-full h-[280px] sm:h-[360px]">
        {loaded ? (
          <iframe
            src={liveUrl}
            title={`${alt} — live demo`}
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url(${image})`, backgroundColor: "#0d0710" }}
              role="img"
              aria-label={alt}
            />
            <button
              onClick={handleLaunch}
              className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/50 transition-colors group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs tracking-widest border border-white/40 px-4 py-2.5 rounded bg-black/70">
                LAUNCH LIVE DEMO →
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
