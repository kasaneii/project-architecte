'use client';

import {useState} from 'react';
import styles from '../styles';
import {motion} from 'framer-motion';
import { expertises } from '../constants';
import { AreaOfExpertise } from '../components';
import { staggerContainer, fadeIn, slideIn } from '../utils/motion';

const Expertise = () => {
  const [active, setActive] = useState('expertise-2')

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

        <motion.div
          variants={fadeIn('down', 'tween', 2, 1.5)}
        >
          {expertises.map((expertise) => (
            <AreaOfExpertise
              key={expertise.id}
              {...expertise}
              active={active}
              handleClick={setActive}
            />

          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Expertise