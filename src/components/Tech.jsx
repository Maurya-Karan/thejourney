import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

// We dynamically group your existing array so you don't have to rewrite constants/index.js
const categorizedTech = [
  {
    title: "SYS.LANG",
    // Filters match the exact names from your constants
    items: technologies.filter((t) =>
      ["Java", "C++", "Python", "JavaScript", "Typescript"].includes(t.name),
    ),
  },
  {
    title: "SYS.DATA_BACK",
    items: technologies.filter((t) =>
      ["Node JS", "Express JS", "MongoDB", "MySQL", "Oracle SQL"].includes(
        t.name,
      ),
    ),
  },
  {
    title: "SYS.FRONTEND",
    items: technologies.filter((t) =>
      ["HTML 5", "CSS 3", "React JS", "Tailwind CSS", "Next.js"].includes(
        t.name,
      ),
    ),
  },
  {
    title: "SYS.OPS_TOOLS",
    items: technologies.filter((t) =>
      [
        "Git",
        "GitHub",
        "Cloudinary",
        "JWT",
        "Google Generative Language API",
      ].includes(t.name),
    ),
  },
];

const TechModule = ({ title, techs, index }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2 * index, 0.75)}
      className="bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-xl p-6 sm:p-8 flex flex-col w-full lg:w-[calc(50%-1rem)]"
    >
      <div className="border-b-4 border-slate-900 pb-2 mb-6">
        <h3 className="text-slate-900 font-black text-xl uppercase tracking-widest">
          [{title}]
        </h3>
      </div>

      <div className="flex flex-wrap gap-4 justify-start">
        {techs.map((technology, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ backgroundColor: "#ffffff" }}
            className="relative flex flex-col w-16 h-16 sm:w-20 sm:h-20 items-center justify-center border-4 border-slate-900 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 rounded-lg transition-all  group"
          >
            <img
              src={technology.icon}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain brightness-75 grayscale opacity-90 group-hover:brightness-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"
              alt={technology.name}
            />

            {/* Tooltip */}
            {hovered === i && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-10 text-slate-900 font-black uppercase text-[10px] px-2 py-1 bg-white border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] whitespace-nowrap z-20 pointer-events-none"
              >
                {technology.name}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-16" id="tech">
      <motion.div variants={textVariant()} className="text-center w-full">
        <p
          className={`text-slate-500 font-black uppercase tracking-widest text-sm sm:text-base`}
        >
          Technologies
        </p>
        <h2
          className={`text-slate-900 font-black md:text-[70px] sm:text-[60px] text-5xl uppercase tracking-tighter leading-[1.1] mt-2`}
        >
          My Skills.
        </h2>
      </motion.div>

      {/* 2x2 Bento Grid for Tech Modules */}
      <div className="flex flex-wrap gap-6 sm:gap-8 justify-center w-full">
        {categorizedTech.map((category, index) => (
          <TechModule
            key={category.title}
            title={category.title}
            techs={category.items}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
