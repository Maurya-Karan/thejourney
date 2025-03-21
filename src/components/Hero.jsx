import React from 'react'
import {AnimatePresence, motion, spring} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas';
import { karan } from '../assets'
import { contacts } from '../constants';
import { fadeIn, textVariant, zoomIn } from '../utils/motion';
const Hero = () => {
  return (
    <AnimatePresence>
    <section className='relative w-full h-screen mx-auto'>

      <div className= {`${styles.paddingX} absolute  inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Karan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop software and web applications
          </p>
        </div>

        

      </div>
      {/* <ComputersCanvas/> */}

      <motion.div initial={{opacity:0,x:100
        }} animate={{opacity:1,x:0}} transition={{duration:1,type:"spring",ease: "easeOut"}} exit={{opacity:0,x:100}} id="profile" 
        className='absolute top-80 justify-center w-full flex sm:justify-end items-center sm:right-32 sm:top-32'>
          <img src={karan} className='w-52 h-52 object-cover border-8  rounded-full
          '/>
        </motion.div>

      <div className={`absolute sm:bottom-0 bottom-16 w-full  flex justify-between  items-center ${styles.paddingX}`}>
        <a href='#about'>
          <div className='w-[16px] h-[40px] rounded-3xl border-4  border-secondary flex justify-center items-start p-[2px] opacity-10'>
            <motion.div  animate = {{y:[0,24,0]}} transition = {{ duration:2, repeat:Infinity, repeatType:'loop' }}
            className='w-2 h-2 rounded-full   bg-secondary mb-1'/>
            
          </div>
        </a>
        
        <motion.div initial={{opacity:0,y:100
        }} transition={{duration:0.8,type:"spring",delay:0.5,ease: "easeOut"}} animate={{opacity:1,y:0}}  exit={{opacity:0,x:100}} id='social' className=' flex flex-row gap-4'>
              {
                contacts.map((contact,index) => (
                  <a key={index} href={contact.source_link}>
                  <img src={contact.icon} className='w-6 h-6'></img></a>
                ))
              }
            </motion.div>

      </div>
      
    </section>
    </AnimatePresence>
  )
}

export default Hero