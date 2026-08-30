"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// DIGITAL RAIN — ambient, site-wide version
//
// This is a deliberately CALMER sibling of the
// boot sequence's MatrixRainBackground: slower,
// sparser, lower opacity. That one is tuned to be
// a brief spectacle for a 5-second intro; this one
// runs continuously behind actual content people
// are reading, so it needs to stay in the
// background — literally and visually.
//
// Lives in the root layout (not per-page), so it
// persists across navigation instead of
// restarting on every route change.
// ─────────────────────────────────────────────

export default function DigitalRain({
  opacity = 0.16,
  intervalMs = 140, // higher = slower character advancement
}: {
  opacity?: number;
  intervalMs?: number;
}) {
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

    if (prefersReducedMotion) {
      // Respect reduced motion: no animation loop at all
      return () => window.removeEventListener("resize", handleResize);
    }

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(5, 1, 6, 0.15)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? "1" : "0";
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const isLead = Math.random() > 0.95;
        ctx.fillStyle = isLead
          ? "rgba(216, 201, 240, 0.4)"
          : "rgba(168, 85, 247, 0.12)";
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const id = setInterval(draw, intervalMs);

    return () => {
      clearInterval(id);
      window.removeEventListener("resize", handleResize);
    };
  }, [intervalMs]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity, zIndex: 0 }}
      aria-hidden="true"
    />
  );
}