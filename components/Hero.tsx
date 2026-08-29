"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-workspace.png')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 20, ease: "linear" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(5,1,6,0.95) 0%, rgba(5,1,6,0.55) 45%, rgba(5,1,6,0.15) 75%, rgba(5,1,6,0.3) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Ctext x='0' y='16' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.05'%3E01001101%3C/text%3E%3Ctext x='14' y='38' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.04'%3E10110010%3C/text%3E%3Ctext x='4' y='60' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.045'%3E00101101%3C/text%3E%3Ctext x='18' y='82' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.035'%3E11010010%3C/text%3E%3Ctext x='0' y='104' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.05'%3E01101001%3C/text%3E%3Ctext x='14' y='126' font-family='monospace' font-size='12' fill='%23a855f7' opacity='0.04'%3E10010110%3C/text%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-text-dim text-base sm:text-lg max-w-md"
        >
          Developer. Designer. Problem solver.
        </motion.p>
      </div>

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