// ─────────────────────────────────────────────
// Static content for now. Once Stage 5 (Supabase)
// lands, these arrays get replaced by DB queries —
// the shape (Project, StackItem, JourneyPoint) stays
// the same so components don't need to change.
// ─────────────────────────────────────────────

export type ProjectType = "mobile" | "web" | "hardware";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  image: string; // path in /public/images
  types: ProjectType[]; // a project can span more than one — e.g. Attendy is web AND mobile
  story: string; // shown when the card is tapped — the "why/how/when" behind the project
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "attendy",
    name: "ATTENDY",
    tagline: "School attendance made simple.",
    image: "/images/project-attendy.jpg", // NEEDS REAL IMAGE
    types: ["web", "mobile"],
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built Attendy.",
  },
  {
    slug: "nexttalk",
    name: "NEXTTALK",
    tagline: "More than messaging. It's an ecosystem.",
    image: "/images/project-nexttalk.jpg", // NEEDS REAL IMAGE
    types: ["mobile"],
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built NextTalk.",
  },
  {
    slug: "floodguard",
    name: "FLOODGUARD",
    tagline: "A conceptual hardware idea for smart flood control.",
    image: "/images/project-floodguard.jpg", // NEEDS REAL IMAGE
    types: ["hardware"],
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you conceived FloodGuard.",
    featured: true,
  },
  {
    slug: "ghost-x",
    name: "GHOST X",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-ghost-x.jpg", // NEEDS REAL IMAGE
    types: ["web"], // placeholder guess — tell me the real platform(s)
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built Ghost X.",
  },
  {
    slug: "u-plus",
    name: "U+",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-u-plus.jpg", // NEEDS REAL IMAGE
    types: ["mobile"], // placeholder guess — tell me the real platform(s)
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built U+.",
  },
];

export type StackItem = {
  name: string;
  icon: string; // path in /public/images, or an inline glyph fallback
};

export const stack: StackItem[] = [
  { name: "Next.js", icon: "N" },
  { name: "React", icon: "⚛" },
  { name: "Flutter", icon: "◆" },
  { name: "Node.js", icon: "⬡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind CSS", icon: "≈" },
  { name: "Supabase", icon: "⚡" },
  { name: "Python", icon: "Py" },
];

export type JourneyPoint = {
  year: string;
  lines: [string, string];
};

export const journey: JourneyPoint[] = [
  { year: "2022", lines: ["First idea.", "First spark."] },
  { year: "2023", lines: ["First builds.", "First lessons."] },
  { year: "2024", lines: ["First product.", "First users."] },
  { year: "2025", lines: ["Scaling systems.", "Building impact."] },
  { year: "2026", lines: ["ShamzyX", "was born."] },
];
