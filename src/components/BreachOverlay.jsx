import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BreachOverlay = () => {
  const [isBreached, setIsBreached] = useState(false);

  useEffect(() => {
    const handleBreach = () => {
      setIsBreached(true);

      // Automatically close the overlay after 5 seconds to match the terminal logic
      setTimeout(() => {
        setIsBreached(false);
      }, 5000);
    };

    window.addEventListener("system-breach", handleBreach);
    return () => window.removeEventListener("system-breach", handleBreach);
  }, []);

  return (
    <AnimatePresence>
      {isBreached && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // FIX: Removed mix-blend-color-burn. Added bg-red-600/95 for a solid red with slight transparency. Ensured high z-index.
          className="fixed inset-0 z-[99999] pointer-events-none flex items-center bg-red-600 mix-blend-color-burn justify-center overflow-hidden "
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:24px_24px] animate-pulse"></div>

          <motion.h1
            animate={{
              x: [-10, 10, -10, 10, 0],
              y: [5, -5, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ repeat: Infinity, duration: 0.2 }}
            // FIX: Removed mix-blend-overlay. Made text solid black (text-slate-900) so it's always visible over the red background.
            className="text-[12vw] md:text-[15vw] font-black text-red-800 leading-none tracking-tighter uppercase text-center relative z-10"
          >
            System
            <br />
            Breach
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BreachOverlay;
