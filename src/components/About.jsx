import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt options={{ reverse: true, max: 15, scale: 1.02, speed: 400 }} className="w-full sm:w-[250px] group">
      <motion.div 
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)} 
        // Increased padding inside the card and made hover elevation slightly higher
        className='w-full bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] rounded-xl p-8 min-h-[250px] flex justify-evenly items-center flex-col transition-all group-hover:-translate-y-2'
      >
        <img 
          src={icon} 
          alt={title} 
          className='w-20 h-20 object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100'
        />
        <h3 className='text-slate-900 text-[18px] font-black uppercase tracking-tight text-center mt-6 border-b-4 border-transparent group-hover:border-red-500 transition-colors'>
          {title}
        </h3>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    // Wrap everything in a flex column with a massive 16-unit gap between major block elements
    <div className="flex flex-col gap-12 md:gap-16">
      
      {/* Grid container for Header (Left) and Bio Box (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Header Block - Spans 4 Columns */}
        <motion.div variants={textVariant()} id='about' className="lg:col-span-4 flex flex-col justify-center">
          <p className={`text-slate-500 font-black uppercase tracking-widest text-sm sm:text-base`}>Introduction</p>
          {/* Tighter line-height for a punchier headline */}
          <h2 className={`text-slate-900 font-black md:text-[70px] sm:text-[60px] text-4xl uppercase tracking-tighter leading-[1.1] mt-2`}>
              Overview.
          </h2>
        </motion.div>

        {/* Bio Box - Spans 8 Columns. Anchors the text inside a heavy bento box */}
        <motion.div 
          variants={fadeIn("left", "spring", 0.2, 1)} 
          className='lg:col-span-8 bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-xl p-8 md:p-10 relative overflow-hidden' 
        >
          {/* Decorative red brutalist tab on the left inside edge */}
          <div className="absolute top-0 left-0 w-4 h-full bg-red-500 border-r-4 border-slate-900"></div>
          
          <p className='text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed font-bold pl-4 sm:pl-6'>
            I'm a software developer focused on backend systems and data processing. My core stack runs on Linux, utilizing high-performance languages like Go and Python. I value minimalist, open-source environments and am currently dedicating my efforts to developing a Distinguishability-based Structural Log Parsing framework for anomaly detection.
          </p>
        </motion.div>

      </div>

      {/* Service Cards Container - Kept flush left to match the grid structure */}
      <div className='flex flex-wrap gap-12 sm:gap-8 justify-center items-center mt-12 w-full'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(About, "about")