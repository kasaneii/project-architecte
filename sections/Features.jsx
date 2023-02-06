'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CategoryBtn, BusinessFeature, ResidentialFeature, HospitalFeature } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';

const Features = () => {
  const [selectedCategory, setSelectedCategory] = useState('business');

  return (
    <section className={`${styles.yPaddings} ${styles.xPaddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <motion.h2
          variants={fadeIn('down', 'tween', 0.5, 1)}
          className={`${styles.heading2} text-center lg:text-left`}
        >
          featured projects
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center text-center lg:text-left pt-5 md:pt-10">
          <motion.p
            variants={fadeIn('down', 'tween', 1, 1)} 
            className={`${styles.paragraph} max-w-[384px]`}
          >
            our inspired solutions have helped shape modern architectural design
          </motion.p>

          <motion.div
            variants={fadeIn('down', 'tween', 1.5, 1)} 
            className="flex justify-center lg:justify-end gap-3 lg:gap-5 max-w-[580px] text-[10px] sm:text-[14px] lg:text-[20px]"
          >
            <button
              onClick={() => setSelectedCategory("business")}
              className={`w-full border-2 border-primary rounded-[50px] px-3 md:px-7 md:py-[3px] text-primary font-medium uppercase text-center hover:text-[#141514] hover:border-none hover:bg-white cursor-pointer`}
            >
              business
            </button>
            <button
              onClick={() => setSelectedCategory("residential")}
              className={`w-full border-2 border-primary rounded-[50px] px-3 md:px-7 md:py-[3px] text-primary font-medium uppercase text-center hover:text-[#141514] hover:border-none hover:bg-white cursor-pointer`}
            >
              residential
            </button>
            <button
              onClick={() => setSelectedCategory("hospital")}
              className={`w-full border-2 border-primary rounded-[50px] px-3 md:px-7 md:py-[3px] text-primary font-medium uppercase text-center hover:text-[#141514] hover:border-none hover:bg-white cursor-pointer`}
            >
              hospital
            </button>
          </motion.div>
        </div>

        {selectedCategory === 'business' && <BusinessFeature />}
        {selectedCategory === 'residential' && <ResidentialFeature />}
        {selectedCategory === 'hospital' && <HospitalFeature />}

      </motion.div>
    </section>
  )
}

export default Features