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
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  { label: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "Go", "SQL"] },
  { label: "Frontend", skills: ["React", "Angular", "Vue", "HTML/CSS", "Tailwind CSS", "Vite", "Figma"] },
  { label: "Backend & APIs", skills: ["Node.js", "Django", "FastAPI", "Flask", "REST APIs"] },
  { label: "Testing & Practices", skills: ["Pytest", "Jest", "Unit Testing", "Git"] },
  { label: "Databases & Caching", skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"] },
  {
    label: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, IAM)", "Google Cloud", "Docker", "GitHub Actions (CI/CD)", "Linux/Bash"],
  },
  {
    label: "AI & Tools",
    skills: ["Claude Code", "GitHub Copilot", "OpenAI API", "Anthropic API", "Prompt Engineering"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "CTBC Bank",
    role: "Associate, Global Capital Markets",
    location: "Taipei, Taiwan",
    start: "July 2021",
    end: "Apr. 2024",
    bullets: [
      "Combined finance and technology to build internal tools, optimize data pipelines, and develop Python-based investment analysis models—while translating complex insights into practical solutions for both teams and clients",
    ],
  },
];

export type EducationEntry = {
  school: string;
  degree: string;
  start: string;
  end: string;
  details?: string[];
};

export const EDUCATION: EducationEntry[] = [
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "Master of Information Management",
    start: "Aug. 2024",
    end: "May 2026",
    details: ["Courses: Database Systems; Data Mining; NLP; Deep Learning for Computer Vision"],
  },
  {
    school: "The Chinese University of Hong Kong",
    degree: "Integrated Bachelor of Business Administration",
    start: "Sept. 2017",
    end: "June 2021",
    details: ["Concentrations: Business Analytics & Finance"],
  },
];

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
      { src: "/projects/skylink-1.gif", durationMs: 13070 },
      { src: "/projects/skylink-2.gif", durationMs: 7600 },
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
