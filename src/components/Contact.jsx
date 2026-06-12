import { motion } from "framer-motion";
import { contacts } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, source_link, color }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1 * index, 0.75)}
      className="w-full h-full group"
    >
      <a
        href={source_link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit my ${title}`}
        style={{ backgroundColor: color || "#ffffff" }}
        // Mechanical switch physics adapted to fill a CSS grid perfectly
        className="w-full h-full border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[4px] md:hover:translate-y-[8px] hover:translate-x-[4px] md:hover:translate-x-[8px] rounded-xl transition-all overflow-hidden p-6 sm:p-8 min-h-[160px] sm:min-h-[200px] flex justify-center items-center flex-col gap-4 sm:gap-6 block"
      >
        <img
          src={icon}
          alt={title}
          aria-hidden="true"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
        />

        <h3 className="text-slate-900 text-sm sm:text-lg font-black uppercase tracking-widest text-center bg-white px-2 sm:px-3 py-1 border-2 border-slate-900">
          {title}
        </h3>
      </a>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-16 mb-20">
      {/* Clever Backend-Themed Header */}
      <motion.div
        variants={textVariant()}
        id="contact"
        className="flex flex-col justify-center text-center sm:text-left"
      >
        <p
          className={`text-slate-500 font-black uppercase tracking-widest text-sm sm:text-base`}
        >
          Communication Protocol
        </p>
        <h2
          className={`text-slate-900 font-black md:text-[70px] sm:text-[60px] text-5xl uppercase tracking-tighter leading-[1.1] mt-2`}
        >
          Initiate Handshake.
        </h2>
      </motion.div>

      {/* The Command Center Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Side: The Server Terminal Box */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:col-span-5 bg-slate-900 text-white rounded-xl border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Decorative Terminal Header */}
          <div className="flex items-center gap-2 mb-8 border-b-2 border-slate-700 pb-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="font-mono text-xs sm:text-sm text-slate-400 tracking-widest uppercase">
              Status: Listening on Port 443
            </span>
          </div>

          <div className="flex-grow flex flex-col justify-center relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black mb-6 text-[#facc15] uppercase tracking-tighter leading-[1.1]">
              Let&apos;s Build Something Scalable.
            </h3>

            <div className="font-mono text-sm sm:text-base text-slate-300 flex flex-col gap-3 leading-relaxed">
              <p>
                <span className="text-red-500 font-bold">❯</span> Whether you
                need a high-performance backend architect or want to discuss
                structural data parsing...
              </p>
              <p>
                <span className="text-red-500 font-bold">❯</span> My inbox is
                currently open for new opportunities and engineering challenges.
              </p>
              <p>
                <span className="text-red-500 font-bold">❯</span> Drop a ping. I
                execute responses within 24 hours.
              </p>
            </div>
          </div>

          {/* Subtle background graphic */}
          <div className="absolute -bottom-10 -right-10 text-[150px] text-slate-800 opacity-50 font-black pointer-events-none select-none">
            {`{}`}
          </div>
        </motion.div>

        {/* Right Side: 2x2 Grid of Mechanical Switches */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
          {contacts.map((contact, index) => (
            <ServiceCard key={contact.title} index={index} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
