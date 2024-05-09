import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { contacts } from '../constants'
import { fadeIn,textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon, source_link}) =>{
  return (
    <Tilt options={{reverse:true}} className = "xs:w-[250px] w-full hover:transition hover:duration-100 hover:ease-in transition duration-800 ease-out">
      <motion.div variants={fadeIn("right","spring", 0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <a options = {{max:45, scale:1, speed: 450}} href={source_link} target='_blank' className="bg-tertiary rounded-[20px] py-4 px-8 min-h-[280px] flex justify-evenly items-center flex-col">

          <img src={icon} alt = {icon} className='w-16 h-16 object-contain'/>

          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </a>
      </motion.div>
    </Tilt>
  )
}

const Contact = () => {


  return (
    <>
      <motion.div variants={textVariant()} className='mt-3' id='contact'>
        <p className={styles.sectionSubText}>Contact</p>
        <h2 className={styles.sectionHeadText}>Let's Talk</h2>
      </motion.div>

      {/* <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
        I'm a skilled react frontend developer with 6 months of experience. I have developed few programs in c, java, c++, and javascript. I'm a quick learner and collaborate closely with clients to create efficient, scalable and user friendly solutions that solve real-world problems. Let's work together to bring ideas to life!.
      </motion.p> */}

        <div className='mt-20 flex flex-wrap gap-6  '>
          {contacts.map((contac, index) => (<ServiceCard key = {contac.title} index={index}{...contac}/>))}
        </div>

    </>
  )
}





export default SectionWrapper(Contact,"contact")