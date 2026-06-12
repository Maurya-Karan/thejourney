import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  meta,
  linkedin,
  email,
  java,
  cloudinary,
  jwt,
  gemini,
  cpp,
  python,
  express,
  nextjs,
  mysql,
  oraclesql,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "technologies", title: "Tech" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// In constants/index.js
const services = [
  {
    title: "Systems Architecture",
    description:
      "Designing high-performance, concurrent backend infrastructure in Go and Java.",
    accent: "bg-[#3b82f6]", // Blue
  },
  {
    title: "Data Pipelines",
    description:
      "Building robust extraction tools and anomaly detection models using Python.",
    accent: "bg-[#facc15]", // Yellow
  },
  {
    title: "CLI Tooling",
    description:
      "Forging fast, dependency-free command-line utilities for the Linux ecosystem.",
    accent: "bg-[#ef4444]", // Red
  },
];

const technologies = [
  // Injecting Hex Colors for the brutalist background pop
  { name: "Java", icon: java, color: "#f89820" }, // Orange
  { name: "C++", icon: cpp, color: "#3b82f6" }, // Blue
  { name: "Python", icon: python, color: "#facc15" }, // Yellow
  { name: "JavaScript", icon: javascript, color: "#facc15" }, // Yellow
  { name: "Typescript", icon: typescript, color: "#3178C6" }, // Blue
  { name: "HTML 5", icon: html, color: "#ef4444" }, // Red
  { name: "CSS 3", icon: css, color: "#3b82f6" }, // Blue
  { name: "React JS", icon: reactjs, color: "#06b6d4" }, // Cyan
  { name: "Node JS", icon: nodejs, color: "#22c55e" }, // Green
  { name: "Express JS", icon: express, color: "#ffffff" }, // White
  { name: "Tailwind CSS", icon: tailwind, color: "#06b6d4" }, // Cyan
  { name: "Next.js", icon: nextjs, color: "#ffffff" }, // White
  { name: "MongoDB", icon: mongodb, color: "#22c55e" }, // Green
  { name: "MySQL", icon: mysql, color: "#f97316" }, // Orange
  { name: "Oracle SQL", icon: oraclesql, color: "#ef4444" }, // Red
  { name: "Git", icon: git, color: "#f97316" }, // Orange
  { name: "GitHub", icon: github, color: "#ffffff" }, // White
  { name: "Cloudinary", icon: cloudinary, color: "#3b82f6" }, // Blue
  { name: "JWT", icon: jwt, color: "#ec4899" }, // Pink
  { name: "Gemini API", icon: gemini, color: "#8b5cf6" }, // Purple
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
    source_link: "https://www.instagram.com/karan_m0810",
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

// In constants/index.js
const projects = [
  {
    name: "Structural Log Parser",
    description:
      "A high-performance framework built in Go for anomaly detection. It utilizes Distinguishability-based Structural Log Parsing with Longest Common Subsequence (LCS) and Semantic Guards to ingest and process massive, noisy log streams with extreme efficiency.",
    image: null, // Will use our brutalist color fallback
    source_code_link: "https://github.com/Maurya-Karan",
  },
  {
    name: "WCTool (CLI)",
    description:
      "A lightweight command-line utility inspired by the native Linux 'wc' command, built entirely from scratch in Java. It rapidly processes plain text files to return exact word, line, and character count statistics.",
    image: null,
    source_code_link: "https://github.com/WCTool",
  },
  {
    name: "E-Commerce Engine",
    description:
      "A specialized cost and price calculator designed for Indian e-commerce marketplaces like Meesho. It algorithmically factors in dynamic logistics, taxes, and complex return risks to optimize seller profit margins.",
    image: null,
    source_code_link: "https://github.com/Maurya-Karan",
  },
  {
    name: "Autonomous Web Crawler",
    description:
      "A robust, multi-threaded data extraction crawler developed in Java. Engineered to autonomously fetch, parse, and structure raw web content while strictly adhering to robots.txt compliance rules.",
    image: null,
    source_code_link: "https://github.com/WebCrawl",
  },
];

export { services, technologies, testimonials, projects, contacts };
