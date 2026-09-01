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
  image: string; // path in /public/images
  types: ProjectType[]; // a project can span more than one — e.g. Attendy is web AND mobile
  story: string; // shown when the card is tapped — the "why/how/when" behind the project
  featured?: boolean;
  verticals?: ProjectVertical[]; // sub-brands under one parent project — shown as a small tree
  liveUrl?: string; // powers the "Launch Live Demo" embed — omit for concept/hardware projects
};

export const projects: Project[] = [
  {
    slug: "attendy",
    name: "ATTENDY",
    tagline: "School attendance made simple.",
    image: "/images/project-attendy.jpg", // NEEDS REAL IMAGE — main brand (attendy-web)
    types: ["web", "mobile"],
    liveUrl: "https://attendy-web.vercel.app",
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
    liveUrl: "https://nexttalk-web.vercel.app",
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
    types: ["web"], // matches ghost-z.vercel.app — confirm if mobile too
    liveUrl: "https://ghost-z.vercel.app",
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built Ghost Z.",
  },
  {
    slug: "u-plus",
    name: "U+",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-u-plus.jpg", // NEEDS REAL IMAGE
    types: ["mobile"], // placeholder guess — tell me the real platform(s)
    liveUrl: "https://u-plus.vercel.app",
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built U+.",
  },
  {
    slug: "mscakehubco",
    name: "MS CAKE HUB CO",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-mscakehubco.jpg", // NEEDS REAL IMAGE
    types: ["web"],
    liveUrl: "https://mscakehubco.vercel.app",
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built MS Cake Hub Co.",
  },
  {
    slug: "acex",
    name: "ACE X",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-acex.jpg", // NEEDS REAL IMAGE
    types: ["web"],
    liveUrl: "https://acex.vercel.app",
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built Ace X.",
  },
  {
    slug: "chess14",
    name: "CHESS14",
    tagline: "NEEDS REAL CONTENT — add a one-line tagline.",
    image: "/images/project-chess14.jpg", // NEEDS REAL IMAGE
    types: ["web"], // placeholder guess — confirm if mobile too
    liveUrl: "https://chess14.vercel.app",
    story: "NEEDS REAL CONTENT — write the story of when, how, and why you built Chess14.",
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
  label: string; // stage name (e.g. "JSS3") rather than a year
  title: string; // one-word/short theme for the stage
  description: string;
};

export const journey: JourneyPoint[] = [
  {
    label: "JSS3",
    title: "Curiosity",
    description: "Discovered coding through a friend, school ICT, Code.org, and simple HTML.",
  },
  {
    label: "SS1",
    title: "Exploration",
    description: "Started taking programming seriously and explored CSS, JavaScript, Java, React, Next.js, Python and more.",
  },
  {
    label: "SS1 → SS2",
    title: "Experimentation",
    description: "Built NextTalk and experimented with projects like Zing Survey, Connect Hub, Hoom and Ultimate AI.",
  },
  {
    label: "SS2",
    title: "Expansion",
    description: "Moved beyond web development into mobile development and explored C#, C++, PHP, Dart, Flutter, React Native and other technologies.",
  },
  {
    label: "SS2",
    title: "Building for problems",
    description: "Created projects including Qaseedah, Ghost Z, U+, Chess14 and eventually Attendy.",
  },
  {
    label: "NOW",
    title: "Still building",
    description: "Continuing to learn, experiment, build products, and turn ideas into things people can actually use.",
  },
];