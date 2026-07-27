export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
};

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: string[] = ["React", "Node.js", "Express", "SQL", "Python"];

export const PROJECTS: Project[] = [
  {
    title: "SkyLink",
    description:
      "A flight search platform combining a hybrid rule-based + GPT-3.5 price-confidence predictor, popular-route tracking, and user reviews — with secure account login.",
    tags: ["React", "Node.js", "Flask", "Docker"],
    github: "https://github.com/yvonneyihan/flight-dashboard",
  },
  {
    title: "ResumeChecker",
    description:
      "An AI agent that scores how well a resume matches a job description, section by section, with an async-polling React frontend. Built with a 3-person team, contributing across the frontend and backend.",
    tags: ["React", "Go", "Python", "MongoDB", "AWS", "Claude API"],
    github: "https://github.com/sylvey/ResumeChecker",
  },
  {
    title: "Food Blog Platform",
    description:
      "A full-stack food blogging app where users create, edit, and share categorized posts with image uploads and AI-assisted draft generation via the Google Gemini API.",
    tags: ["Node.js", "TypeScript", "MySQL", "Gemini API"],
    github: "https://github.com/yvonneyihan/food-blog",
  },
];

export const CONTACT = {
  email: "yhuang7756@gmail.com",
  github: "https://github.com/yvonneyihan",
  linkedin: "https://www.linkedin.com/in/yi-han-yvonne-huang/",
};
