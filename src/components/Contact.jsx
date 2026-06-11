import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { contacts } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon, source_link, color }) => {
  return (
    <Tilt options={{ reverse: true, max: 15, scale: 1.02, speed: 400 }} className="w-full sm:w-[250px] group">
      <motion.div 
        variants={fadeIn("up", "spring", 0.3 * index, 0.75)} 
        style={{ backgroundColor: color || '#ffffff' }}
        className='w-full border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] rounded-xl transition-all overflow-hidden'
      >
        <a 
          href={source_link} 
          target='_blank' 
          rel="noreferrer"
          className="p-8 min-h-[220px] flex justify-center items-center flex-col gap-6"
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-opacity group-hover:scale-110 duration-300' />

          <h3 className='text-slate-900 text-[20px] font-black uppercase tracking-widest text-center border-b-4 border-transparent group-hover:border-slate-900 transition-colors'>
            {title}
          </h3>
        </a>
      </motion.div>
    </Tilt>
  )
}

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-16 mb-20">
      
      {/* Header aligned perfectly with About, Tech, and Work sections */}
      <motion.div variants={textVariant()} id='contact' className="flex flex-col justify-center text-center sm:text-left">
        <p className={`text-slate-500 font-black uppercase tracking-widest text-sm sm:text-base`}>Connect</p>
        <h2 className={`text-slate-900 font-black md:text-[70px] sm:text-[60px] text-4xl uppercase tracking-tighter leading-[1.1] mt-2`}>
          Let's Talk.
        </h2>
      </motion.div>

      <div className='flex flex-wrap gap-6 sm:gap-8 justify-center sm:justify-start w-full'>
        {contacts.map((contac, index) => (
          <ServiceCard key={contac.title} index={index} {...contac} />
        ))}
      </div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")