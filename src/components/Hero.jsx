import { AnimatePresence, motion } from 'framer-motion'
import { styles } from '../styles'
import { karan } from '../assets'
import { contacts } from '../constants';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <AnimatePresence>
      {/* Changed to min-h-screen for mobile scrolling, locks to h-screen on large devices */}
      <section className='relative w-full min-h-screen lg:h-screen bg-[#fafafa] text-slate-900 font-mono flex flex-col p-4 sm:p-5 md:p-6 lg:p-8 box-border overflow-hidden'>
        
        {/* Changed to flex-col on mobile, switches to Grid on Medium screens + */}
        <div 
          className={`max-w-[96rem] mx-auto w-full h-full flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-5`}
          style={{ 
            gridTemplateRows: window.innerWidth >= 768 ? 'repeat(7, minmax(0, 1fr))' : 'none' 
          }}
        >

          {/* Row 1: Navbar Block */}
          <div className='md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-2 bg-white rounded-xl border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-2 sm:p-4 flex items-center justify-center z-20'>
            <Navbar />
          </div>

          {/* Intro Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className='md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-5 bg-white rounded-xl p-6 lg:p-10 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center relative overflow-hidden'
          >
            {/* Responsive text sizing */}
            <h1 className='text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-2 sm:mb-4 uppercase z-10'>
              Hi, I'm <span className='text-red-500'>Karan</span>
            </h1>
            <p className='text-base sm:text-xl lg:text-2xl text-slate-700 font-bold max-w-xl leading-relaxed z-10'>
              I develop software and web applications.
            </p>
          </motion.div>

          {/* Profile Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", ease: "easeOut" }}
            className='md:col-start-9 md:col-end-13 md:row-start-2 md:row-end-6 bg-slate-200 rounded-xl border-4 border-slate-900 overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative min-h-[250px]'
          >
            <img 
              src={karan} 
              alt="Karan"
              className='absolute inset-0 w-full h-full object-cover object-top'
            />
          </motion.div>

          {/* Tech Stack Block */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className='md:col-start-1 md:col-end-5 md:row-start-5 md:row-end-8 bg-white rounded-xl p-4 sm:p-6 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center min-h-[120px]'
          >
            <h3 className='text-xs sm:text-base md:text-lg font-black uppercase tracking-tight text-slate-900 mb-2 border-b-4 border-red-500 inline-block w-max pr-2'>
              Core Stack
            </h3>
            <p className='text-slate-700 font-bold text-xs sm:text-base'>
              Go, Python, Linux
            </p>
          </motion.div>

          {/* Current Focus Block */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
            className='md:col-start-5 md:col-end-9 md:row-start-5 md:row-end-7 bg-red-500 text-white rounded-xl p-4 sm:p-6 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-center min-h-[120px]'
          >
            <h3 className='text-xs sm:text-base font-black uppercase tracking-tight mb-2 border-b-4 border-white inline-block w-max pr-2'>
              Current Focus
            </h3>
            <p className='font-bold text-xs sm:text-base lg:text-lg leading-tight'>
              Structural Log Parsing for Anomaly Detection
            </p>
          </motion.div>

          {/* Social Links Block */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
            className='md:col-start-5 md:col-end-9 md:row-start-7 md:row-end-8 bg-[#facc15] rounded-xl p-3 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-row justify-evenly items-center gap-2 min-h-[60px]'
          >
            {contacts.map((contact, index) => (
              <a key={index} href={contact.source_link} className="group hover:-translate-y-1 transition-transform duration-200">
                <img 
                  src={contact.icon} 
                  alt="social" 
                  className='w-6 h-6 grayscale opacity-80 brightness-0 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100' 
                />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator Block (Hidden on very small mobile to save space) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            className='hidden sm:flex md:col-start-9 md:col-end-13 md:row-start-6 md:row-end-8 bg-white rounded-xl p-4 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] justify-center items-center group cursor-pointer hover:bg-slate-50 transition-colors min-h-[120px]'
          >
            <a href='#about' className="flex flex-col items-center justify-center w-full h-full gap-2 px-1">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-red-500 transition-colors">Scroll</span>
              <div className='w-[20px] h-[36px] rounded-full border-4 border-slate-900 flex justify-center items-start p-[3px] bg-white group-hover:-translate-y-1 transition-transform'>
                <motion.div 
                  animate={{ y: [0, 14, 0] }} 
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                  className='w-2 h-2 rounded-full bg-red-500' 
                />
              </div>
            </a>
          </motion.div>

        </div>
      </section>
    </AnimatePresence>
  )
}

export default Hero