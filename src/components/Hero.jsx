import { lazy } from "react";
// Removed the redundant AnimatePresence import
import { motion } from "framer-motion";
import { contacts } from "../constants";
import Navbar from "./Navbar";

const Terminal = lazy(() => import("./Terminal"));

const Hero = () => {
  // --- THE BOOT SEQUENCE VARIANTS ---
  const bootSpring = { type: "spring", bounce: 0.3, duration: 0.8 };

  const varMonitorPower = {
    hidden: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { ...bootSpring, delay: 0.1 },
    },
  };

  const varDrawerLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (customDelay) => ({
      opacity: 1,
      x: 0,
      transition: { ...bootSpring, delay: customDelay },
    }),
  };

  const varDrawerRight = {
    hidden: { opacity: 0, x: 40 },
    visible: (customDelay) => ({
      opacity: 1,
      x: 0,
      transition: { ...bootSpring, delay: customDelay },
    }),
  };

  const varDropTop = {
    hidden: { opacity: 0, y: -40 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { ...bootSpring, delay: customDelay },
    }),
  };

  const varDropBottom = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { ...bootSpring, delay: customDelay },
    }),
  };

  return (
    <section
      className="relative w-full min-h-screen lg:h-screen text-slate-900 font-mono flex flex-col p-4 sm:p-5 md:p-6 lg:p-8 box-border overflow-hidden"
      id="hero"
    >
      <div
        className={`max-w-[96rem] mx-auto w-full h-full flex flex-col md:grid md:grid-cols-12 md:grid-rows-7 gap-4 md:gap-5`}
      >
        {/* Row 1: Navbar Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden" // <--- Added Exit State
          variants={varDropTop}
          custom={0.5}
          className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-2 bg-white rounded-xl border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-2 sm:p-4 flex items-center justify-center z-20"
        >
          <Navbar />
        </motion.div>

        {/* Main Intro Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden" // <--- Added Exit State
          variants={varMonitorPower}
          className="md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-5 bg-white rounded-xl p-8 lg:p-12 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-1 uppercase z-10">
            Hi, <br />
            I&apos;m <span className="text-red-500">Karan</span>.
          </h1>

          <div className="w-44 h-4 bg-red-500 mb-10 z-10"></div>

          <p className="text-lg sm:text-2xl lg:text-2xl text-slate-700 font-bold max-w-4xl leading-relaxed z-10">
            I build backend systems, AI infrastructure, and Linux-powered tools.
          </p>
        </motion.div>

        {/* Terminal Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden" // <--- Added Exit State
          variants={varDrawerRight}
          custom={0.3}
          className="md:col-start-9 md:col-end-13 md:row-start-2 md:row-end-6 flex"
        >
          <Terminal />
        </motion.div>

        {/* Tech Stack Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden" // <--- Added Exit State
          variants={varDrawerLeft}
          custom={0.4}
          className="md:col-start-1 md:col-end-5 md:row-start-5 md:row-end-8 bg-white text-slate-900 rounded-xl p-5 sm:p-8 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center"
        >
          <h3 className="text-xs sm:text-lg font-black uppercase tracking-tight mb-4 border-b-4 border-green-500 text-slate-900 inline-block w-max pr-2">
            System Stack
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-base font-bold uppercase tracking-widest text-slate-700 mb-1">
                Languages & Core
              </p>
              <p className="font-semibold text-sm text-slate-700">
                Go · Python · C/C++ · Java · SQL
              </p>
            </div>
            <div>
              <p className="text-base font-bold uppercase tracking-widest text-slate-700 mb-1">
                Web & Infrastructure
              </p>
              <p className="font-semibold text-sm text-slate-700">
                React.js · Next.js · Node.js · AWS EC2 · Docker
              </p>
            </div>
            <div>
              <p className="text-base font-bold uppercase tracking-widest text-slate-700 mb-1">
                Data & Tooling
              </p>
              <p className="font-semibold text-sm text-slate-700">
                Pandas · NumPy · Scikit-learn · Linux · Git
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ethos Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden" // <--- Added Exit State
          variants={varDropBottom}
          custom={0.5}
          className="md:col-start-5 md:col-end-9 md:row-start-5 md:row-end-7 bg-white rounded-xl p-5 sm:p-8 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center min-h-[120px]"
        >
          <h3 className="text-base sm:text-lg font-black uppercase tracking-tight mb-2 border-b-4 border-yellow-500 text-slate-900 inline-block w-max pr-2">
            Engineering Ethos
          </h3>
          <ul className="font-black text-sm sm:text-base lg:text-base text-slate-700 list-disc list-inside leading-relaxed">
            <li>Simplicity first</li>
            <li>Automate repetitive work</li>
            <li>Measure before optimizing</li>
            <li>Learn by building</li>
          </ul>
        </motion.div>

        {/* Social Links Block (Inline Animation Fix) */}
        <motion.div
          initial={{ opacity: 0, y: 30, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 30, x: -20, transition: { duration: 0.2 } }} // <--- Explicit Exit Object
          transition={{ ...bootSpring, delay: 0.6 }}
          className="md:col-start-5 md:col-end-9 md:row-start-7 md:row-end-8 bg-white rounded-xl p-3 pr-10 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-row justify-around items-center gap-2 min-h-[60px]"
        >
          <p className="font-bold text-lg text-slate-800 border-b-4 border-blue-500">
            CONNECT
          </p>
          {contacts.map((contact, index) => (
            <a
              key={index}
              target="_blank"
              rel="noreferrer"
              href={contact.source_link}
              className="group hover:-translate-y-1 transition-transform duration-200"
            >
              <img
                src={contact.icon}
                alt="social"
                className="w-6 h-6 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
              />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden" // <--- Added Exit State
          variants={varDrawerRight}
          custom={0.6}
          className="hidden sm:flex md:col-start-9 md:col-end-13 md:row-start-6 md:row-end-8 bg-slate-900 rounded-xl p-5 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] group cursor-pointer hover:bg-slate-800 transition-colors min-h-[120px]"
        >
          <a
            href="#about"
            className="flex flex-col items-start justify-center w-full h-full gap-2 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Sys.Status: Online
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500 font-bold">❯</span>
              <span className="text-sm sm:text-base font-black tracking-widest text-white group-hover:text-[#facc15] transition-colors">
                ./scroll_down
              </span>
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
