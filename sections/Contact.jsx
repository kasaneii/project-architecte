'use client';

import styles from '../styles';
import {motion} from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Contact = () => (
  <section
    className={`${styles.yPaddings} ${styles.xPaddings}`}
    id="contact"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <motion.h2
        variants={fadeIn('down', 'tween', 0.5, 1)}
        className={`${styles.heading2} mb-10`}
      >
        get in touch with us
      </motion.h2>
      
      <motion.a variants={fadeIn('down', 'tween', 1, 1)} href="mailto:buildwithus@architecte.com" className="lowercase email-primary text-[24px] sm:text-[36px] md:text-[42px] lg:text-[60px] xl:text-[72px] cursor-pointer">buildwithus@architecte.com</motion.a>
    </motion.div>
  </section>
)

export default Contact