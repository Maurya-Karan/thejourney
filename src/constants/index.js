import {
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  linux,
  mongodb,
  git,
  github,
  meta,
  linkedin,
  email,
  java,
  cloudinary,
  go,
  postgresql,
  docker,
  jwt,
  gemini,
  cpp,
  python,
  express,
  nextjs,
  aws,
  mysql,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "technologies", title: "Tech" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Systems & Backend Architecture",
    description:
      "Designing high-performance, concurrent infrastructure and anomaly detection frameworks in Go and Java.",
    accent: "bg-[#3b82f6]", // Blue
  },
  {
    title: "Full-Stack Web Platforms",
    description:
      "Building responsive, secure, and AI-integrated applications using the MERN stack and Next.js.",
    accent: "bg-[#facc15]", // Yellow
  },
  {
    title: "CLI Tooling & Automation",
    description:
      "Forging fast, memory-efficient command-line utilities and multithreaded scripts for the Linux ecosystem.",
    accent: "bg-[#ef4444]", // Red
  },
];

const technologies = [
  { name: "Go", icon: go, color: "#00ADD8" }, // Cyan/Blue
  { name: "Java", icon: java, color: "#f89820" }, // Orange
  { name: "Python", icon: python, color: "#facc15" }, // Yellow
  { name: "C/C++", icon: cpp, color: "#3b82f6" }, // Blue
  { name: "Node JS", icon: nodejs, color: "#22c55e" }, // Green
  { name: "Express JS", icon: express, color: "#ffffff" }, // White
  { name: "React JS", icon: reactjs, color: "#06b6d4" }, // Cyan
  { name: "Next.js", icon: nextjs, color: "#ffffff" }, // White
  { name: "Tailwind CSS", icon: tailwind, color: "#06b6d4" }, // Cyan
  { name: "MongoDB", icon: mongodb, color: "#22c55e" }, // Green
  { name: "MySQL", icon: mysql, color: "#f97316" }, // Orange
  { name: "PostgreSQL", icon: postgresql, color: "#336791" }, // Blue
  { name: "Linux", icon: linux, color: "#facc15" }, // Yellow
  { name: "Docker", icon: docker, color: "#2496ed" }, // Blue
  { name: "AWS", icon: aws, color: "#ff9900" }, // Orange
  { name: "Git", icon: git, color: "#f97316" }, // Orange
  { name: "GitHub", icon: github, color: "#ffffff" }, // White
  { name: "Cloudinary", icon: cloudinary, color: "#3b82f6" }, // Blue
  { name: "JWT", icon: jwt, color: "#ec4899" }, // Pink
  { name: "Gemini API", icon: gemini, color: "#8b5cf6" }, // Purple
  { name: "HTML 5", icon: html, color: "#ef4444" }, // Orange
  { name: "CSS 3", icon: css, color: "#3b82f6" }, // Blue
];

const contacts = [
  {
    title: "LinkedIn",
    icon: linkedin,
    source_link: "https://www.linkedin.com/in/karan-maurya-13b88421b",
    color: "#3b82f6", // Blue
  },
  {
    title: "Github",
    icon: github,
    source_link: "https://github.com/Maurya-Karan",
    color: "#ffffff", // White
  },
  {
    title: "Instagram",
    icon: meta,
    source_link: "https://www.instagram.com/_maurya.karan/",
    color: "#ec4899", // Pink
  },
  {
    title: "E-mail",
    icon: email,
    source_link: "mailto:karanmaurya802@gmail.com",
    color: "#ef4444", // Red
  },
];

const testimonials = [
  /* ... (Keep your existing testimonials here) ... */
];

const projects = [
  {
    name: "Distinx: Distinguishability based Structural log parsing for anomaly detection",
    description:
      "A high-performance framework built in Go. It utilizes Longest Common Subsequence (LCS) algorithms and a Semantic Guard to dynamically structure, analyze, and monitor unstructured log streams, leveraging Isolation Forest algorithms for optimized anomaly detection.",
    image: null,
    source_code_link: "https://github.com/Maurya-Karan/LogParser",
  },
  {
    name: "Food Sharing Platform (MERN + AI)",
    description:
      "A full-stack platform seamlessly connecting food donors with recipients. Features secure authentication, real-time inventory updates, and integrates the Google GenAI API to generate dynamic recipe suggestions from uploaded inventory images.",
    image: null,
    source_code_link: "https://github.com/Maurya-Karan/FSPro",
  },
  {
    name: "WCTool (CLI)",
    description:
      "A custom word count command-line utility architected in Java. Features optimized string processing to rapidly handle multi-gigabyte text files with minimal memory overhead, maximizing execution speed and architectural efficiency.",
    image: null,
    source_code_link: "https://github.com/Maurya-Karan/SystemTools",
  },
  {
    name: "Autonomous Web Crawler",
    description:
      "A multithreaded web crawler constructed using Java and Jsoup. Built to successfully extract, clean, and structure hierarchical web data while strictly adhering to robots.txt policies and minimizing data acquisition latency.",
    image: null,
    source_code_link: "https://github.com/Maurya-Karan/WebCrawl",
  },
];

export { services, technologies, testimonials, projects, contacts };
