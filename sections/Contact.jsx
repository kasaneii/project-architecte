'use client';

import styles from '../styles';
import {motion} from 'framer-motion';
import { CategoryBtn, CustomTextField } from '../components';
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
        keep in touch with us
      </motion.h2>
      
      <motion.form onsubmit="return false;" className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20" variants={fadeIn('down', 'tween', 1, 1)}>
        <CustomTextField name={<>name</>} placeholder="input your name"/>
        <CustomTextField name={<>email</>} placeholder="input your email"/>
        <CustomTextField name={<>company</>} placeholder="input your company"/>
        <div className="flex flex-col max-w-[490px]">
          <label htmlFor="category" className={`${styles.paragraph} pb-5 md:pb-10`}>company</label>
          <div className="flex flex-row gap-5">
            <CategoryBtn title={<>architecture</>} textStyles="text-[10px] lg:text-[16px]"/>
            <CategoryBtn title={<>interior</>} textStyles="text-[10px] lg:text-[16px]"/>
            <CategoryBtn title={<>furniture</>} textStyles="text-[10px] lg:text-[16px]"/>
          </div>
        </div>
      </motion.form>
    </motion.div>
  </section>
)

export default Contact