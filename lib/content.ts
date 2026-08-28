// ─────────────────────────────────────────────
// Static content for now. Once Stage 5 (Supabase)
// lands, these arrays get replaced by DB queries —
// the shape (Project, StackItem, JourneyPoint) stays
// the same so components don't need to change.
// ─────────────────────────────────────────────

export type ProjectType = "mobile" | "web" | "hardware";

export type ProjectVertical = {
  name: string;
  url: string;
  status: "live" | "in-progress";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  types: ProjectType[];
  story: string;
  featured?: boolean;
  verticals?: ProjectVertical[];
};

export const projects: Project[] = [
  {
    slug: "attendy",
    name: "ATTENDY",
    tagline: "School attendance made simple.",
    image: "/images/project-attendy.jpg", // NEEDS REAL IMAGE
    types: ["web", "mobile"],
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built Attendy.",
    verticals: [
      { name: "Attendy Edu", url: "https://attendy-edu.vercel.app", status: "live" },
      { name: "Attendy Biz", url: "https://attendy-biz.vercel.app", status: "in-progress" },
      { name: "Attendy Office", url: "https://attendy-office.vercel.app", status: "in-progress" },
    ],
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
    slug: "ghost-z",
    name: "GHOST Z",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-ghost-z.jpg", // NEEDS REAL IMAGE
    types: ["web"],
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built Ghost Z.",
  },
  {
    slug: "u-plus",
    name: "U+",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-u-plus.jpg", // NEEDS REAL IMAGE
    types: ["mobile"],
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built U+.",
  },
  {
    slug: "mscakehubco",
    name: "MS CAKE HUB CO",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-mscakehubco.jpg", // NEEDS REAL IMAGE
    types: ["web"],
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built MS Cake Hub Co.",
  },
  {
    slug: "acex",
    name: "ACE X",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-acex.jpg", // NEEDS REAL IMAGE
    types: ["web"],
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built Ace X.",
  },
];

export type StackItem = {
  name: string;
  icon: string;
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