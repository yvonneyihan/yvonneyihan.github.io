export type ProjectGif = {
  src: string;
  /** Actual playback duration of this GIF, in ms — controls how long it's shown before advancing. */
  durationMs: number;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  website?: string;
  gifs: ProjectGif[];
};

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: string[] = ["React", "Node.js", "Express", "SQL", "Python"];

export const PROJECTS: Project[] = [
  {
    title: "PaReJob - A Resume Checker",
    description:
      "An AI agent that scores how well a resume matches a job description, section by section, with an async-polling React frontend. Built with a 3-person team, contributing across the frontend and backend.",
    tags: ["React", "Go", "Python", "MongoDB", "AWS", "Claude API"],
    github: "https://github.com/sylvey/ResumeChecker",
    website: "https://parejob.com",
    gifs: [
      { src: "/projects/resume-checker-1.gif", durationMs: 14000 },
      { src: "/projects/resume-checker-2.gif", durationMs: 8000 }
    ],
  },
  {
    title: "SkyLink",
    description:
      "A flight search platform combining a hybrid rule-based + GPT-3.5 price-confidence predictor, popular-route tracking, and user reviews — with secure account login.",
    tags: ["React", "Node.js", "Flask", "Docker"],
    github: "https://github.com/yvonneyihan/flight-dashboard",
    gifs: [
      { src: "/projects/skylink-1.gif", durationMs: 7500 },
      { src: "/projects/skylink-2.gif", durationMs: 9330 },
    ],
  },
  {
    title: "Food Blog Platform",
    description:
      "A full-stack food blogging app where users create, edit, and share categorized posts with image uploads and AI-assisted draft generation via the Google Gemini API.",
    tags: ["Node.js", "TypeScript", "MySQL", "Gemini API"],
    github: "https://github.com/yvonneyihan/food-blog",
    gifs: [
      { src: "/projects/food-blog-1.gif", durationMs: 13600 },
      { src: "/projects/food-blog-2.gif", durationMs: 13100 },
      { src: "/projects/food-blog-3.gif", durationMs: 15100 },
    ],
  },
];

export const CONTACT = {
  email: "yhuang7756@gmail.com",
  github: "https://github.com/yvonneyihan",
  linkedin: "https://www.linkedin.com/in/yi-han-yvonne-huang/",
};
