import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { fadeIn } from '../utils/motion'

const Tech = () => {
  const [techies] = useState(technologies)

  // Ensure the fadeIn function returns an object with initial, animate, and exit properties
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <div className='flex flex-row flex-wrap w-full justify-center p-16 items-center gap-20  ' >
      {techies.map((technology, index) => (
        <motion.div
          key={index} // Unique key for each item
          variants={fadeIn("right","spring", 0.1*index, 1)} // Variants for animation
 // Animate to this state
        >
          <img src={technology.icon} className='w-24 h-24 p-3 bg-white rounded-full' alt={technology.name} />
        </motion.div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "technologies")



    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28 ' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}