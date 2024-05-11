import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  const [techies] = useState(technologies)


  return (
    <>
    <motion.div variants={textVariant()} id='about'>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
    <div id="technologies" className='flex flex-row flex-wrap w-full justify-center p-16 items-center gap-20 ' >
      {techies.map((technology, index) => (
        <motion.div
          key={index} 
          variants={fadeIn("right","spring", 0.1*index, 1)}  >
          <img src={technology.icon} className='w-24 h-24 p-3 bg-white rounded-full' alt={technology.name} />
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "technologies")



    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28 ' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}