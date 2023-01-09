'use client';

import styles from '../styles';
import {motion} from 'framer-motion';
import { navVariants } from '../utils/motion';


const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <h3 className="text-primary text-[14px] sm:text-[18px] lg:text-[24px] cursor-pointer">
        hire us
      </h3>

      <h2 className="text-primary text-[18px] sm:text-[24px] lg:text-[34px]">
        architecte
      </h2>

      <h3 className="text-primary text-[14px] sm:text-[18px] lg:text-[24px] cursor-pointer">
        menu
      </h3>
    </div>
    
  </motion.nav>
)

export default Navbar