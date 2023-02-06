'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { people } from '../constants';
import { fadeIn, staggerContainer, slideIn } from '../utils/motion';
import styles from '../styles';

const Team = () => {
  const [hoverIndex, setHoverIndex] = useState(-1)

  return ( <section className={`${styles.yPaddings} ${styles.xPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="flex flex-col lg:flex-row text-center lg:text-right gap-3 justify-between items-center">
        <motion.h2
          variants={fadeIn('down', 'tween', 0.5, 1)}
          className={`${styles.heading2}`}
        >
          meet our people
        </motion.h2>

        <motion.p
          variants={fadeIn('down', 'tween', 1, 1)}
          className={`${styles.paragraph2} max-w-[417px]`}
        >
          meet the best expert talents from our team who are ready to be your partners
        </motion.p>
      </div>

      <div className="mt-10 grid md:grid-cols-4 grid-cols-2 gap-5 lg:gap-10 overflow-hidden">
        {people.map((person, index) => (
          <motion.div
            variants={slideIn('down', 'tween', index * 1, 1)} 
            key={person.id} 
            className="relative"
            onHoverStart={() => setHoverIndex(index)}
            onHoverEnd={() => setHoverIndex(-1)}
          >
            <img
              src={person.imgUrl} 
              alt={person.name}
              className={`w-full object-cover object-top h-[300px] lg:min-h-[600px] ${index == people.length -1 ? "md:rounded-tr-[70px] lg:rounded-tr-[130px]" : "lg:rounded-none"} ${index == people.length-4 ? "md:rounded-bl-[70px] lg:rounded-bl-[130px]" : "lg:rounded-none"}`} 
            />

            <motion.div
              animate={{ opacity: hoverIndex === index ? 1 : 0 }}
              className={`flex flex-col text-right absolute bottom-0 w-full h-[100px] lg:h-[200px] people-bg pt-5 lg:pt-10 pr-3 opacity-0 ${index == people.length-4 ? "md:rounded-bl-[70px] lg:rounded-bl-[130px]" : "md:rounded-none"}`}
            >
              <h2 className="text-primary font-medium text-[20px] leading-[20px] lg:text-[50px] lg:leading-[50px]">
                {person.name}
              </h2>

              <p className="text-primary text-[12px] lg:text-[16px] pt-2 lg:pt-4">
                {person.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
  )
}

export default Team