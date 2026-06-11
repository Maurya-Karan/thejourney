import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        // 'once: true' keeps them visible once loaded. 
        // 'amount: 0.1' triggers the animation slightly earlier so it feels like a continuous flow
        viewport={{ once: true, amount: 0.1 }}
        // Tightened the vertical padding so the sections don't feel entirely isolated
        className={`max-w-[96rem] mx-auto relative z-0 px-4 sm:px-6 md:px-8 py-16 md:py-24`}
      >
        <span className='hash-span block mt-[-80px] pb-[80px]' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;