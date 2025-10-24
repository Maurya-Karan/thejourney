import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  const [techies] = useState(technologies);
  const [hovered, setHovered] = useState(null);

  return (
    <div className={`${styles.paddingY}`}>
      <motion.div variants={textVariant()} id='technologies'>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      
      <div className='flex flex-row flex-wrap w-full justify-center p-4 sm:p-8 md:p-16 items-center gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-20'>
        {techies.map((technology, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", 0.1 * index, 1)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.15 }}  // Added for mobile touch
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(index)}  // Mobile touch support
            onTouchEnd={() => setHovered(null)}
            className="relative flex flex-col w-20 sm:w-32 md:w-44 items-center"
          >
            <img 
              src={technology.icon} 
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 bg-white rounded-full' 
              alt={technology.name} 
            />
            
            {/* Mobile: Always show name below icon, Desktop: Show on hover */}
            <div className="sm:hidden mt-2 text-white text-xs text-center">
              {technology.name}
            </div>
            
            {/* Desktop hover tooltip */}
            {hovered === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="hidden sm:block absolute top-full mt-2 text-white text-sm sm:text-base px-3 py-1 bg-black/80 rounded shadow-lg whitespace-nowrap"
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
