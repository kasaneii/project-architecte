'use client';

import styles from '../styles';
import {motion} from 'framer-motion';
import { staggerContainer, slideIn, zoomIn } from '../utils/motion';

const Hero = () => (
  <section
    className={`${styles.yPaddings} ${styles.xPaddings}`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className={`${styles.flexStart} flex-col relative`}>
        <motion.h1
          variants={slideIn('up', 'tween', 1, 1)}
          className={`text-primary text-[50px] leading-[45px] sm:text-[80px] sm:leading-[80px] lg:text-[120px] lg:leading-[110px] xl:text-[160px] xl:leading-[150px] font-extrabold `}
        >
        beauty <br className="sm:block hidden"/> spaces
        </motion.h1>

        <motion.div
          variants={slideIn('right', 'tween', 1.5, 1)}
          className="w-full relative h-[170px] sm:h-[290px] md:h-[350px] lg:h-[500px] xl:h-[650px]"
        >
          <img 
              src="./bg-sky.jpg" 
              alt="cover"
              className="w-full absolute bottom-[0] object-cover h-[150px] rounded-br-[100px] sm:h-[250px] sm:rounded-br-[200px] md:h-[320px] lg:h-[450px] xl:h-[600px] xl:rounded-br-[300px]" 
            />

          <img 
            src="./hero-img.png" 
            alt="hero"
            className="w-full absolute bottom-[0]" 
          />
        </motion.div>

        <motion.h3
          variants={slideIn( 'left', 'tween', 2.5, 1)}
          className="text-primary font-normal text-[8px] sm:text-[14px] lg:text-[24px] mt-2 sm:mt-5"
        >
          © architectural firm est 1998
        </motion.h3>
      </div>

      <a href="#contact">
        <motion.div
          variants={zoomIn(3, 1)} 
          className="w-full flex justify-end lg:-mt-[140px] sm:-mt-[100px] -mt-[50px] xl:pr-[400px] lg:pr-[250px] sm:pr-[120px] pr-[80px] relative cursor-pointer"
        >
          <img 
            src="./stamp.png" 
            alt="stamp"
            className="lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px] w-[60px]  h-[60px] object-contain" 
          />
        </motion.div>
      </a>
    </motion.div>
  </section>
)

export default Hero