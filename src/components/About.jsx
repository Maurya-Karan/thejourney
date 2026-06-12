import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const CapabilityCard = ({ index, title, description, accent }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3 * index, 0.75)}
      className="w-full lg:w-[calc(33.333%-1.5rem)] flex group"
    >
      <div className="w-full bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] rounded-xl p-6 sm:p-8 flex flex-col justify-start transition-all group-hover:-translate-y-2 overflow-hidden relative">
        <div
          className={`absolute top-0 left-0 w-full h-3 ${accent} border-b-4 border-slate-900 transition-transform origin-left group-hover:scale-y-150`}
        ></div>

        <div className="mt-4">
          <span className="text-slate-400 font-mono font-bold text-sm mb-2 block">
            0{index + 1} {"//"}
          </span>
          <h3 className="text-slate-900 text-xl sm:text-2xl font-black uppercase tracking-tight mb-4 border-b-4 border-transparent group-hover:border-slate-900 inline-block transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 font-bold text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <motion.div
          variants={textVariant()}
          id="about"
          className="lg:col-span-4 flex flex-col justify-center"
        >
          <p
            className={`text-slate-500 font-black uppercase tracking-widest text-sm sm:text-base`}
          >
            Introduction
          </p>
          <h2
            className={`text-slate-900 font-black md:text-[70px] sm:text-[60px] text-5xl uppercase tracking-tighter leading-[1.1] mt-2`}
          >
            Overview.
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="lg:col-span-8 bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-3 sm:w-4 h-full bg-red-500 border-r-4 border-slate-900 z-10"></div>

          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0"></div>

          <div className="relative z-10 flex flex-col gap-4 text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-bold pl-4 sm:pl-6">
            <p>
              I engineer systems, not just websites. I specialize in
              high-performance backend architecture, data processing, and
              structural anomaly detection.
            </p>
            <p>
              My philosophy is simple: write fast code, strip away bloated
              dependencies, and build resilient solutions. Whether I am
              architecting concurrent log parsers in Go, training isolation
              forests in Python, or scripting raw command-line tools, I focus on
              ruthless efficiency and scalable design.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap gap-6 sm:gap-8 justify-between w-full mt-4">
        {services.map((service, index) => (
          <CapabilityCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
