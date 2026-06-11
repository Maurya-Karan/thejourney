import { AnimatePresence, motion } from "framer-motion";
import { karan } from "../assets";
import { contacts } from "../constants";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <AnimatePresence>
      <section className="relative w-full min-h-screen lg:h-screen bg-[#fafafa] text-slate-900 font-mono flex flex-col p-4 sm:p-5 md:p-6 lg:p-8 box-border overflow-hidden">
        <div
          // 1. CHANGED: max-w-[96rem] is now max-w-7xl. This instantly cures the "empty warehouse" feeling.
          className={`max-w-[96rem] mx-auto w-full h-full flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-5`}
          style={{
            gridTemplateRows:
              window.innerWidth >= 768 ? "repeat(7, minmax(0, 1fr))" : "none",
          }}
        >
          {/* Row 1: Navbar Block */}
          <div className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-2 bg-red-500 rounded-xl border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-2 sm:p-4 flex items-center justify-center z-20">
            <Navbar />
          </div>

          {/* Main Intro Block - CREATIVE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-5 bg-white rounded-xl p-8 lg:p-12 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center relative overflow-hidden"
          >
            {/* Added a subtle grid pattern to the background of just this box to kill dead space */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-4 uppercase z-10">
              Hi, I&apos;m <span className="text-red-500">Karan</span>.
            </h1>

            {/* A thick, brutalist geometric divider to anchor the text */}
            <div className="w-20 h-4 bg-slate-900 mb-6 z-10"></div>

            <p className="text-lg sm:text-2xl lg:text-3xl text-slate-700 font-bold max-w-2xl leading-relaxed z-10">
              I architect backend systems, build scalable data pipelines, and
              forge fast CLI utilities.
            </p>
          </motion.div>

          {/* Profile Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", ease: "easeOut" }}
            className="md:col-start-9 md:col-end-13 md:row-start-2 md:row-end-6 bg-[#915eff] rounded-xl border-4 border-slate-900 overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative min-h-[250px]"
          >
            <img
              src={karan}
              alt="Karan"
              className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
            />
          </motion.div>

          {/* Tech Stack Block - TERMINAL LIST STYLE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="md:col-start-1 md:col-end-5 md:row-start-5 md:row-end-8 bg-slate-900 text-white rounded-xl p-5 sm:p-8 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center min-h-[120px]"
          >
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-400 mb-4 border-b-2 border-slate-700 pb-1 inline-block w-max">
              System.Stack
            </h3>
            <div className="flex flex-col gap-2 font-mono text-sm sm:text-base font-bold text-green-400">
              <div className="flex items-center gap-3">
                <span className="text-slate-500">❯</span> Go
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-500">❯</span> Python
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-500">❯</span> Java & Linux
              </div>
            </div>
          </motion.div>

          {/* Ethos Block - HIGHLIGHTER STYLE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
            className="md:col-start-5 md:col-end-9 md:row-start-5 md:row-end-7 bg-white rounded-xl p-5 sm:p-6 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center min-h-[120px]"
          >
            <h3 className="text-xs sm:text-base font-black uppercase tracking-tight mb-2 border-b-4 border-red-500 text-slate-900 inline-block w-max pr-2">
              Engineering Ethos
            </h3>
            <p className="font-bold text-sm sm:text-base lg:text-lg leading-tight text-slate-700">
              Write{" "}
              <span className="bg-[#facc15] px-1 text-slate-900">
                fast code
              </span>
              . Minimize dependencies. Stay in the terminal.
            </p>
          </motion.div>

          {/* Social Links Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
            className="md:col-start-5 md:col-end-9 md:row-start-7 md:row-end-8 bg-[#facc15] rounded-xl p-3 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-row justify-evenly items-center gap-2 min-h-[60px]"
          >
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.source_link}
                className="group hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Icons turn white on hover instead of natural colors to match the red background */}
                <img
                  src={contact.icon}
                  alt="social"
                  className="w-6 h-6  opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator Block */}
          {/* Scroll Indicator Block - TERMINAL EXECUTION STYLE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            className="hidden sm:flex md:col-start-9 md:col-end-13 md:row-start-6 md:row-end-8 bg-slate-900 rounded-xl p-5 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] group cursor-pointer hover:bg-slate-800 transition-colors min-h-[120px]"
          >
            <a
              href="#about"
              className="flex flex-col items-start justify-center w-full h-full gap-2 overflow-hidden"
            >
              {/* Live System Status Pulse */}
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Sys.Status: Online
                </span>
              </div>

              {/* Terminal Command Execution */}
              <div className="flex items-center gap-3">
                <span className="text-red-500 font-bold">❯</span>
                <span className="text-sm sm:text-base font-black tracking-widest text-white group-hover:text-[#facc15] transition-colors">
                  ./scroll_down
                </span>
                {/* Yellow Blinking Block Cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-2.5 h-4 sm:h-5 bg-[#facc15]"
                />
              </div>

              {/* Heavy Brutalist Bouncing Arrow
              <motion.div 
                animate={{ y: [0, 6, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="ml-6 mt-1 text-slate-500 font-black text-lg group-hover:text-red-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>  
              </motion.div> */}
            </a>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Hero;
