import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 30;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    // Removed all logo elements and width-spanning classes.
    // Now acts purely as a flex container for the links inside its grid box.
    <nav
      className={`w-full h-full flex items-center justify-center bg-transparent z-20`}
    >
      {/* Desktop Links - Scaled down font size to fit the compact grid box nicely */}
      <ul className="list-none hidden sm:flex flex-row flex-wrap justify-center items-center gap-3 lg:gap-5 w-full">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${active === link.title ? "text-red-500" : "text-slate-900"} hover:text-red-500 text-xs lg:text-sm font-black uppercase tracking-widest cursor-pointer transition-colors duration-200`}
            onClick={() => setActive(link.title)}
          >
            <a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.id);
              }}
            >
              {link.title}
            </a>
          </li>
        ))}

        <li
          className={`hover:text-red-500 text-slate-900 font-black uppercase tracking-widest cursor-pointer text-xs lg:text-sm transition-colors duration-200`}
        >
          <Link to="/blogs">Blogs</Link>
        </li>
        <li
          className={`hover:text-red-500 text-slate-900 font-black uppercase tracking-widest cursor-pointer text-xs lg:text-sm transition-colors duration-200`}
        >
          <a href="/resume.pdf" download={"karanResume.pdf"}>
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu - Centered hamburger icon for when the box collapses on phones */}
      <div className="sm:hidden flex flex-1 justify-center items-center w-full">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer opacity-90 brightness-0"
          onClick={() => setToggle(!toggle)}
        />

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex p-6 bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] absolute top-16 left-4 right-4 z-50 rounded-xl`}
            >
              <ul className="list-none flex justify-center items-center flex-col gap-4 w-full text-center">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.id ? "text-red-500" : "text-slate-900"} border-b-4 border-slate-100 pb-2 w-full font-black uppercase tracking-wide cursor-pointer text-[14px] hover:border-red-200 transition-colors duration-200`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.id);
                    }}
                  >
                    <a href={`#${link.id}`}> {link.title}</a>
                  </li>
                ))}

                <li
                  className={`hover:text-red-500 text-slate-900 border-b-4 border-slate-100 pb-2 w-full font-black uppercase tracking-wide cursor-pointer text-[14px] hover:border-red-200 transition-colors duration-200`}
                  onClick={() => setToggle(!toggle)}
                >
                  <Link to="/blogs">Blogs</Link>
                </li>

                <li
                  className={`hover:text-red-500 text-slate-900 border-b-4 border-slate-100 pb-2 w-full font-black uppercase tracking-wide cursor-pointer text-[14px] hover:border-red-200 transition-colors duration-200`}
                >
                  <a href="/resume.pdf" download={"karanResume.pdf"}>
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
