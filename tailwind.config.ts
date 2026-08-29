import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
  colors: {
  bg: "#050106",
  panel: "#0d0710",
  "panel-border": "rgba(168,85,247,0.14)",
  purple: "#a855f7",
  "purple-soft": "#d8c9f0",
  navy: "#232d52",
  "navy-soft": "#4a5a8f",
  champagne: "#d4af7a",
  "champagne-soft": "#e8d3ab",
  "text-dim": "#a99fc4",
  "text-mute": "#6f6482",
},
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
        "serif-display": ["var(--font-cinzel)", "Georgia", "serif"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        lineIn: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        nudge: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        lineIn: "lineIn 220ms ease-out forwards",
        nudge: "nudge 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;