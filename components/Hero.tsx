"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

// ─────────────────────────────────────────────
// HERO IMAGES — real photos now, crossfading in
// sequence. Add more here any time; nothing else
// needs to change.
// ─────────────────────────────────────────────
const HERO_IMAGES = [
  "/images/hero-workspace.png", // wide desk shot, purple "X" neon
  "/images/hero-workspace-2.png", // close-up: hands typing, code on monitor
  "/images/hero-workspace-3.png", // wide: whiteboard sketching, "X" sign + city view
];

const IMAGE_DURATION = 7000; // ms each image stays before crossfading to the next
const SUBTEXT = "Developer · Designer · Problem solver.";
const CHAR_DURATION = 0.03;

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const cursorRef = useRef<HTMLSpanElement>(null);

  // Cycle background images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, IMAGE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // Typing effect for the subtext line only — not the big headline
  useEffect(() => {
    const proxy = { chars: 0 };
    const tl = gsap.timeline({ delay: 0.6 });

    tl.to(proxy, {
      chars: SUBTEXT.length,
      duration: SUBTEXT.length * CHAR_DURATION,
      ease: "none",
      onUpdate: () => setTypedText(SUBTEXT.slice(0, Math.floor(proxy.chars))),
    });

    const cursorTween = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.6,
    });

    return () => {
      tl.kill();
      cursorTween.kill();
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Crossfading background photos, each with its own slow zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={imageIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${HERO_IMAGES[imageIndex]}')`,
          }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.06 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: IMAGE_DURATION / 1000 + 1.2, ease: "linear" },
          }}
        />
      </AnimatePresence>

      {/* Legibility gradient — a touch of navy in the mid-tone instead of flat black, for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(5,1,6,0.95) 0%, rgba(35,45,82,0.4) 42%, rgba(5,1,6,0.2) 72%, rgba(5,1,6,0.3) 100%)",
        }}
      />

      {/* Binary texture, faint — ties back to the boot sequence */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Ctext x='0' y='16' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.05'%3E01001101%3C/text%3E%3Ctext x='14' y='38' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.04'%3E10110010%3C/text%3E%3Ctext x='4' y='60' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.045'%3E00101101%3C/text%3E%3Ctext x='18' y='82' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.035'%3E11010010%3C/text%3E%3Ctext x='0' y='104' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.05'%3E01101001%3C/text%3E%3Ctext x='14' y='126' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.04'%3E10010110%3C/text%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content — pinned low, big, minimal */}
      <div className="relative z-10 px-6 sm:px-16 pb-20 sm:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-extrabold leading-[0.95] text-[15vw] sm:text-[8vw] lg:text-[6.5vw] tracking-tight max-w-5xl"
        >
          I BUILD
          <br />
          <span className="text-purple">WHAT&apos;S NEXT.</span>
        </motion.h1>

        {/* Subtext — terminal-style typing, echoes the boot sequence without repeating it exactly */}
        <p className="mt-6 text-text-dim text-base sm:text-lg max-w-md font-mono min-h-[1.75em]">
          {typedText.split(/(·)/).map((chunk, i) =>
            chunk === "·" ? (
              <span key={i} className="text-champagne">
                ·
              </span>
            ) : (
              chunk
            )
          )}
          <span
            ref={cursorRef}
            className="inline-block w-[2px] h-[1em] bg-purple ml-0.5 align-middle"
          />
        </p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-mute text-[10px] tracking-[0.2em] z-10"
      >
        SCROLL
        <span className="w-px h-8 bg-gradient-to-b from-purple to-transparent" />
      </motion.div>
    </section>
  );
}
