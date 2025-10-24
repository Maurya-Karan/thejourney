import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { AnimatePresence, motion } from 'framer-motion'
import { logo, menu, close } from '../assets'


const Navbar = (scrolled) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 30; // Adjust according to your header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.paddingX} w-screen flex items-center py-2 fixed top-0 z-20 bg-primary/25 backdrop-blur-sm`} >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo   */}
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }} >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"></img>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Karan &nbsp;<span className='sm:block hidden'> | Software Developer</span></p>
        </Link>

        {/* Nav Links  */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (<li key={link.id}
            className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
            <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleScroll(link.id); }}>
              {link.title}
            </a>
            {/* <Link to={`/#${link.id}`} onClick={(e) => { e.preventDefault(); handleScroll(link.id); }}>{link.title}</Link> */}
          </li>))}

          <li className={`hover:text-white text-secondary  font-poppins font-medium cursor-pointer text-[18px]`}>

            <Link to="/blogs">Blogs</Link>
          </li>
          <li className={`hover:text-white text-secondary  font-poppins font-medium cursor-pointer text-[18px]`}>

            <a href="/resume.pdf" download={"karanResume.pdf"}>Resume</a>
          </li>
        </ul>

        {/* For Mobile Devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-container cursor-pointer' onClick={() => setToggle(!toggle)} />
          <AnimatePresence>
            {toggle && <motion.div initial={{ opacity: 0, x: 110 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 110 }} className={` flex p-6 bg-primary/90 border-2 absolute  top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl `}>

              <ul className='list-none flex justify-end items-start  flex-col gap-4'>
                {navLinks.map((link) => (<li key={link.id}
                  className={`${active === link.id ? "text-white " : "text-secondary"} border-b-[1px]  w-full font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id)
                  }}>
                  <a href={`#${link.id}`}> {link.title}</a>
                </li>))}

                <li className={`hover:text-white text-secondary border-b-[1px] w-full font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => setToggle(!toggle)}>
                  <Link to="/blogs">Blogs</Link>
                </li>

                <li className={`hover:text-white text-secondary border-b-[1px]  w-full font-poppins font-medium cursor-pointer text-[16px]`}>
                  <a href="/resume.pdf" download={"karanResume.pdf"}>Resume</a>
                </li>
              </ul>

            </motion.div>}
          </AnimatePresence>

        </div>

      </div>
    </nav>
  )
}

export default Navbar