'use client';

import styles from '../styles';
import {motion} from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Partner = () => (
  <section
    className={`${styles.yPaddings} ${styles.xPaddings}`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col text-center lg:text-left lg:flex-row justify-between items-center gap-5`}
    >
      <motion.h2
        variants={fadeIn('down', 'tween', 0.5, 1)}
        className={`${styles.heading2} max-w-[473px]`}
      >
        we are your partner in building legacy
      </motion.h2>

      <motion.p
        variants={fadeIn('down', 'tween', 1, 1)}
        className={`${styles.paragraph} flex items-center max-w-[500px]`}
      >
        with passion and thoughts we help bring your <br className="sm:block hidden"/>vision to reality and overcome any engineering and technical challenge, without doubt
      </motion.p>
    </motion.div>
  </section>
)

export default Partner