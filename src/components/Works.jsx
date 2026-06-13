import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  // Brutalist solid colors for missing images
  const fallbackColors = [
    "bg-[#facc15]",
    "bg-[#ef4444]",
    "bg-[#3b82f6]",
    "bg-[#22c55e]",
  ];
  const fallbackColor = fallbackColors[index % fallbackColors.length];

  const isFeatured = index === 0;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={`flex ${isFeatured ? "w-full" : "w-full lg:w-[calc(50%-1rem)]"}`}
    >
      {/* Replaced <Tilt> with a stark, strict 2D container.
        THE ANIMATION: Uses 'group' and aggressive group-hover utility classes to snap the card up/left,
        extending the shadow heavily to simulate physically pulling a hardware rack.
      */}
      <div
        className={`group relative bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-xl p-6 sm:p-8 flex flex-col w-full h-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-3 hover:-translate-x-3 hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] md:hover:shadow-[20px_20px_0px_0px_rgba(15,23,42,1)]  ${isFeatured ? "lg:flex-row lg:gap-8" : ""}`}
      >
        {/* Visual Container */}
        <div
          className={`relative border-4 border-slate-900 rounded-lg overflow-hidden bg-slate-100 ${isFeatured ? "lg:w-1/2 h-[250px] lg:h-auto" : "w-full h-[200px]"}`}
        >
          {/* Quick sliding 'scanline' overlay that triggers on card hover */}
          <div className="absolute inset-0 bg-slate-900 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out opacity-20 z-10 pointer-events-none"></div>

          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`w-full h-full ${fallbackColor} flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-500`}
            >
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none group-hover:scale-110 transition-transform duration-700 ease-out"></div>
              <span className="text-slate-900 font-black text-2xl sm:text-3xl uppercase text-center tracking-tighter mix-blend-overlay opacity-60 z-10 group-hover:opacity-100 transition-opacity duration-300">
                {name}
              </span>
            </div>
          )}

          {/* Github Button - The "Mechanical Lock" */}
          <div className="absolute top-3 right-3 flex justify-end m-0 z-20">
            <div
              onClick={(e) => {
                e.stopPropagation(); // Prevents clicking the whole card if they just want the repo
                window.open(source_code_link, "_blank");
              }}
              // The button rotates 12 degrees on hover like a physical key being turned
              className="w-10 h-10 bg-white border-4 border-slate-900 rounded-full flex justify-center items-center hover:bg-slate-900 hover:scale-110 group/btn transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] group-hover:-rotate-12 duration-300 cursor-external"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain brightness-0 group-hover/btn:invert transition-all"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`mt-6 flex flex-col flex-grow ${isFeatured ? "lg:w-1/2 lg:mt-0 justify-center" : ""}`}
        >
          <div className="flex items-center gap-3 mb-4">
            {/* Featured badge turns black on hover */}
            {isFeatured && (
              <span className="px-2 py-1 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest border-2 border-slate-900 group-hover:bg-slate-900 transition-colors duration-300">
                Featured
              </span>
            )}

            {/* Title underlines in Red on hover */}
            <h3 className="text-slate-900 font-black text-2xl sm:text-3xl uppercase tracking-tight inline-block border-b-4 border-slate-900 pb-1 group-hover:border-red-500 transition-colors duration-300">
              {name}
            </h3>
          </div>

          <p className="text-slate-700 font-bold text-sm sm:text-base leading-relaxed flex-grow group-hover:text-slate-900 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ... keep the rest of your Work.jsx the same

const Work = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-16">
      {/* Structural Bento Header - Flipped for the "S" Curve Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Text Box - UPGRADED NO-NONSENSE COPY */}
        {/* Text Box in Work.jsx */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:col-span-8 bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-xl p-6 sm:p-8 md:p-10 relative overflow-hidden order-2 lg:order-1"
        >
          {/* 1. The Blue Accent Bar */}
          <div className="absolute top-0 right-0 w-3 sm:w-4 h-full bg-[#3b82f6] border-l-4 border-slate-900 z-10"></div>

          {/* 2. ADD THIS: The Blueprint Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0"></div>

          {/* 3. Add relative and z-10 to the text */}
          <p className="relative z-10 text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-bold pr-4 sm:pr-6">
            Real-world engineering requires more than just writing code; it
            requires architecting resilient systems. Below are the core data
            pipelines, algorithmic parsers, and CLI utilities I have built to
            solve complex extraction and performance challenges. Code is
            available on GitHub.
          </p>
        </motion.div>

        {/* Header - Right Aligned */}
        <motion.div
          variants={textVariant()}
          id="work"
          className="lg:col-span-4 flex flex-col justify-center text-left lg:text-right order-1 lg:order-2"
        >
          <p
            className={`text-slate-500 font-black uppercase tracking-widest text-sm sm:text-base`}
          >
            Execution
          </p>
          <h2
            className={`text-slate-900 font-black md:text-[70px] sm:text-[60px] text-5xl uppercase tracking-tighter leading-[1.1] mt-2`}
          >
            Projects.
          </h2>
        </motion.div>
      </div>

      {/* Project Cards Grid */}
      <div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Work, "work");
