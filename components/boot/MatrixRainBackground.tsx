"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// Ambient background for the boot sequence — a
// restrained take on the classic "digital rain"
// effect: falling 1s and 0s in the site's purple
// palette instead of the usual green, kept subtle
// (low opacity, moderate speed) so it reads as
// atmosphere behind the boot text, not something
// competing with it for attention.
//
// Canvas + requestAnimationFrame rather than GSAP
// here — a per-frame grid redraw like this is what
// canvas is for; GSAP stays for the discrete text
// animations layered on top.
// ─────────────────────────────────────────────

export default function MatrixRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 15;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = new Array(columns).fill(1);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    }
    window.addEventListener("resize", handleResize);

    // Respect reduced motion: paint a static dim frame, no animation loop
    if (prefersReducedMotion) {
      ctx.fillStyle = "#050106";
      ctx.fillRect(0, 0, width, height);
      return () => window.removeEventListener("resize", handleResize);
    }

    let animationId: number;

    function draw() {
      if (!ctx) return;
      // Translucent black over the previous frame creates the fading trail
      ctx.fillStyle = "rgba(5, 1, 6, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? "1" : "0";
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Occasional brighter "lead" character, rest faded purple
        const isLead = Math.random() > 0.92;
        ctx.fillStyle = isLead
          ? "rgba(216, 201, 240, 0.5)"
          : "rgba(168, 85, 247, 0.16)";
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.35 }}
      aria-hidden="true"
    />
  );
}