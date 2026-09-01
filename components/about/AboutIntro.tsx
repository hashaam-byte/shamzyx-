"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 sm:px-16 py-24 lg:py-0 flex flex-col justify-center order-2 lg:order-1"
        >
          <div className="text-purple text-xs tracking-widest mb-3 font-mono">02 — ABOUT</div>
          <h1 className="font-extrabold text-4xl sm:text-6xl leading-[0.95] mb-4 max-w-lg">
            I STARTED WITH
            <br />
            <span className="text-purple">CURIOSITY.</span>
          </h1>
          <p className="text-champagne text-lg sm:text-xl mb-6 max-w-md font-mono">
            I stayed because I wanted to build.
          </p>
          <p className="text-text-dim text-base sm:text-lg max-w-md leading-relaxed">
            From a young age, I&apos;ve always been fascinated by technology and
            the way it continues to evolve — the idea that it could change how
            people live, communicate, learn, and solve problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about-portrait.png')" }}
          />
          {/* Navy-tinted wash for palette cohesion, plus a left-edge fade so it blends into the text column instead of a hard rectangle cut */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,1,6,0.85) 0%, rgba(35,45,82,0.25) 25%, transparent 55%), linear-gradient(0deg, rgba(5,1,6,0.6), transparent 40%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Ctext x='0' y='16' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.05'%3E01001101%3C/text%3E%3Ctext x='14' y='38' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.04'%3E10110010%3C/text%3E%3Ctext x='4' y='60' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.045'%3E00101101%3C/text%3E%3Ctext x='18' y='82' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.035'%3E11010010%3C/text%3E%3Ctext x='0' y='104' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.05'%3E01101001%3C/text%3E%3Ctext x='14' y='126' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.04'%3E10010110%3C/text%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}