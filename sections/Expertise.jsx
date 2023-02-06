'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { expertises } from '../constants';
import { staggerContainer, fadeIn, slideIn } from '../utils/motion';
import styles from '../styles';

const Expertise = () => {
  const [active, setActive] = useState('expertise-2');

  return (

    <section
      className={`${styles.yPaddings} ${styles.xPaddings}`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <div className="flex flex-col text-center lg:text-left gap-3 lg:flex-row items-center justify-between">
          <motion.h2
            variants={fadeIn('down', 'tween', 0.5, 1)}
            className={`${styles.heading2}`}
          >
            areas of expertise
          </motion.h2>

          <motion.p
            variants={fadeIn('down', 'tween', 1, 1)}
            className={`${styles.paragraph2} max-w-[459px]`}
          >
            with more than 20+ years of experience, we always develop a deeper experience for you
          </motion.p>
        </div>

        <div className='pt-20 flex flex-col lg:flex-row items-center gap-10'>
          <motion.div 
            variants={slideIn('left', 'tween', 1.5, 1)}
            className="flex flex-col gap-5 w-full lg:w-[50%]"
          >
            {expertises.map((expertise) => (
              <div key={expertise.id} className="w-full pb-2 md:pb-5 border-b-2 border-primary border-opacity-20 cursor-pointer" onClick={() => setActive(expertise.id)}>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-center">
                    <p className="text-primary font-medium text-[14px] lg:text-[24px]">{expertise.title}</p>
                    <motion.img
                      whileHover={{ rotate: 90 }}
                      src="./arrow-up-right-gray.svg" 
                      alt="arrow"
                      className={`w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] object-contain ${active === expertise.id ? 'rotate-90' : 'rotate-0'}`} 
                    />
                  </div>
                  <p className={`w-full pt-5 text-primary text-[10px] leading-[16px] lg:text-[18px] lg:leading-[28px] ${active === expertise.id ? 'active' : 'inactive'}`}>{expertise.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={slideIn('right', 'tween', 1.5, 1)} 
            className="w-full lg:w-[50%]"
          >
            {expertises.map((expertise) => (
              <div key={expertise.id} className={`w-full lg:h-[550px] xl:h-[500px] overflow-hidden rounded-br-[130px] ${active === expertise.id ? 'active' : 'inactive'}`}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }} 
                  src={expertise.imgUrl} 
                  alt="expertise"
                  className={`rounded-br-[130px] w-full h-full object-cover`} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Expertise