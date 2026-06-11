import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'

const Tech = () => {
  const [techies] = useState(technologies);
  const [hovered, setHovered] = useState(null);

  return (
    // Wrapped in a flex column to push the grid down away from the header
    <div className="w-full flex flex-col gap-12 md:gap-16">
      
      <motion.div variants={textVariant()} id='technologies' className="text-center w-full mb-8">
        <p className={`text-slate-500 font-black uppercase tracking-widest text-sm sm:text-base`}>Technologies</p>
        <h2 className={`text-slate-900 font-black md:text-[70px] sm:text-[60px] text-4xl uppercase tracking-tighter leading-[1.1] mt-2`}>
            My Skills.
        </h2>
      </motion.div>
      
      <div className='flex flex-row flex-wrap w-full justify-center items-center gap-6 sm:gap-16'>
        {techies.map((technology, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", 0.05 * index, 0.5)}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(index)}
            onTouchEnd={() => setHovered(null)}
            style={{ backgroundColor: technology.color || '#ffffff' }}
            className="relative flex flex-col w-24 h-24 sm:w-28 sm:h-28 items-center justify-center border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] sm:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-brutal rounded-xl transition-all cursor-pointer group"          
          >
            <img 
              src={technology.icon} 
              className='w-8 h-8 sm:w-14 sm:h-14 object-contain grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300'
              alt={technology.name} 
            />
            
            <div className="sm:hidden mt-2 px-1 w-full text-slate-900 font-black text-[9px] text-center uppercase tracking-tighter leading-none truncate">
             {technology.name}
            </div>
            
            {hovered === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="hidden sm:block absolute -top-12 text-slate-900 font-black uppercase text-xs px-3 py-1 bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] whitespace-nowrap z-20 pointer-events-none"
              >
                {technology.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "technologies")