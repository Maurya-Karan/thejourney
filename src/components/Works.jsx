import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  // An array of solid brutalist colors to use as fallbacks for missing images
  const fallbackColors = ["bg-[#facc15]", "bg-[#ef4444]", "bg-[#3b82f6]", "bg-[#22c55e]"];
  const fallbackColor = fallbackColors[index % fallbackColors.length];

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-[350px] flex">
      <Tilt
        options={{ max: 10, scale: 1.02, speed: 400 }}
        className="bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-xl p-6 flex flex-col w-full h-full"
      >
        {/* Image / Fallback Container */}
        <div className="relative w-full h-[200px] border-4 border-slate-900 rounded-lg overflow-hidden bg-slate-100">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
          ) : (
            <div className={`w-full h-full ${fallbackColor} flex items-center justify-center p-4`}>
              <span className="text-slate-900 font-black text-2xl uppercase text-center tracking-tighter mix-blend-overlay opacity-50">
                {name}
              </span>
            </div>
          )}

          {/* Github Button */}
          <div className="absolute top-3 right-3 flex justify-end m-0">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 bg-white border-4 border-slate-900 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#facc15] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain brightness-0" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 flex flex-col flex-grow">
          <h3 className="text-slate-900 font-black text-[24px] uppercase tracking-tight border-b-4 border-slate-900 pb-2 mb-4 inline-block w-max pr-4">
            {name}
          </h3>
          <p className="text-slate-700 font-bold text-[14px] leading-relaxed flex-grow">
            {description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

// ... (keep your ProjectCard component exactly the same)

const Work = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-16">
      
      {/* Structural Bento Header - FLIPPED LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Text Box - Now on the LEFT (Spans 8 cols, Order 2 on mobile, Order 1 on Desktop) */}
        <motion.div 
          variants={fadeIn("right", "spring", 0.2, 1)} 
          className="lg:col-span-8 bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-xl p-8 md:p-10 relative overflow-hidden order-2 lg:order-1"
        >
          {/* Moved the accent bar to the right side to point towards the heading */}
          <div className="absolute top-0 right-0 w-4 h-full bg-[#3b82f6] border-l-4 border-slate-900"></div>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-bold pr-4 sm:pr-6">
            The following projects showcase my skills and experience through real-world examples of my work. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively. Each project is briefly described with links to code repositories.
          </p>
        </motion.div>

        {/* Header - Now on the RIGHT (Spans 4 cols, Order 1 on mobile, Order 2 on Desktop) */}
        <motion.div 
          variants={textVariant()} 
          id="work" 
          className="lg:col-span-4 flex flex-col justify-center text-left lg:text-right order-1 lg:order-2"
        >
          <p className={`text-slate-500 font-black uppercase tracking-widest text-sm sm:text-base`}>My Work</p>
          <h2 className={`text-slate-900 font-black md:text-[70px] sm:text-[60px] text-4xl uppercase tracking-tighter leading-[1.1] mt-2`}>
              Projects.
          </h2>
        </motion.div>

      </div>

      {/* Project Cards Grid - Centered to catch the eye after reading the left text */}
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Work, "work");