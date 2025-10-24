import {
  mobile,
  backend,

  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,

  github,

  docker,
  meta,
  ascii_home,
  linkedin,
  email, java, cloudinary, jwt, gemini, cpp, python, express, nextjs, mysql, oraclesql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "technologies",
    title: "Tech"
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

  // {
  //   id:"donate",
  //   title:"Donate"
  // },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  // Languages
  {
    name: "Java",
    icon: java,
  },

  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },


  // Web Development
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },

  // Databases
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },

  {
    name: "Oracle SQL",
    icon: oraclesql,
  },

  // Tools & Platforms
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },

  {
    name: "Cloudinary",
    icon: cloudinary,
  },
  {
    name: "JWT",
    icon: jwt,
  },

  // APIs & Libraries
  {
    name: "Google Generative Language API",
    icon: gemini,
  },

];


const contacts = [
  {
    title: "LinkedIn",
    icon: linkedin,
    source_link: "https://www.linkedin.com/in/karan-maurya-13b88421b"
  },
  {
    title: "Github",
    icon: github,
    source_link: "https://github.com/Maurya-Karan"
  },
  {
    title: "Instagram",
    icon: meta,
    source_link: "https://www.instagram.com/karan_m0810"
  },
  {
    title: "E-mail",
    icon: email,
    source_link: "mailto:karanmaurya802@gmail.com"
  },


]


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ASCII",
    description:
      "ASCII (Astute Student Community Interaction Interface) is a web application that addresses the challenges faced by students in accessing study materials, managing distractions, and fostering community engagement. With ASCII, students and teachers can come together on a single platform to create a vibrant and inclusive learning environment.",
    image: ascii_home,
    source_code_link: "https://github.com/ASCII",
  },
  {
    name: "Food Sharing Platform",
    description:
      "A full-stack web platform designed to reduce food wastage by connecting donors with individuals and organizations in need. Users can register, donate surplus food, request donations, and receive intelligent recipe suggestions based on available ingredients. The platform promotes sustainability and community support through efficient food redistribution.",
    image: null,
    source_code_link: "https://github.com/FSPro",
  },
  {
    name: "WCTool (Word Count CLI)",
    description:
      "A lightweight command-line utility inspired by the Linux wc command, built from scratch in Java. The tool reads text files and returns statistics including word count, line count, and character count—making it ideal for developers or writers who work with plain text files",
    image: null,
    source_code_link: "https://github.com/WCTool",
  },
  {
    name: "Web Crawler",
    description:
      "A robust web crawler developed in Java for automated data extraction. Designed to fetch web pages, parse content, and extract useful information while respecting website rules (robots.txt). Ideal for data analysis, research, and building datasets from public sources.",
    image: null,
    source_code_link: "https://github.com/WebCrawl",

  },
];

export { services, technologies, testimonials, projects, contacts };