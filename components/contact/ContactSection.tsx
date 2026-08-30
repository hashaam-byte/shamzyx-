"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/city-skyline.png')" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(5,1,6,0.95) 0%, rgba(35,45,82,0.35) 40%, rgba(5,1,6,0.25) 70%, rgba(5,1,6,0.35) 100%)",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-purple text-xs tracking-widest mb-3 font-mono">05 — CONTACT</div>
          <h1 className="font-extrabold leading-[0.95] text-[13vw] sm:text-[7vw] lg:text-[5.5vw] tracking-tight max-w-4xl">
            LET&apos;S BUILD
            <br />
            <span className="text-champagne">SOMETHING.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm"
        >
          <a href="mailto:Shamzyx1@gmail.com" className="text-text-dim hover:text-white transition-colors">
            Shamzyx1@gmail.com
          </a>
          <a href="#" className="text-text-dim hover:text-white transition-colors">
            @shamzyx — Twitter/X
          </a>
          <a href="#" className="text-text-dim hover:text-white transition-colors">
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}