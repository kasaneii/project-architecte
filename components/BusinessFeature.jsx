'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer } from '../utils/motion'
import styles from '../styles'

const BusinessFeature = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="overflow-hidden"
    >
      <motion.div
        variants={slideIn('down', 'tween', 0.5, 1)} 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10"
      >
        <div className="md:col-span-2 relative">
          <img 
            src="./business-2.jpg" 
            alt="business"
            className="w-full object-cover h-[150px] sm:h-[250px]" 
          />

          <motion.div
            whileHover={{ opacity:1 }}
            className={`${styles.flexCenter} cursor-pointer absolute bottom-0 w-full h-full feature-bg flex flex-col opacity-0`}
          >
            <h2 className={`${styles.heading2} text-white`}>
              Hummingscape
            </h2>

            <div className="flex flex-row justify-center items-center lg:pt-3">
              <p className={`${styles.paragraph} text-white`}>view more</p>
              <img 
                src="./arrow-up-right-white.svg" 
                alt="arrow"
                className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] object-contain ml-1 lg:ml-3"
              />
            </div>
          </motion.div>
        </div>

        <div className="md:row-span-2 relative">
          <img 
            src="./business-3.jpg" 
            alt="business"
            className="w-full object-cover h-[150px] md:h-[522px] sm:h-[250px]" 
          />

          <motion.div
            whileHover={{ opacity:1 }}
            className={`${styles.flexCenter} cursor-pointer absolute bottom-0 w-full h-full feature-bg flex flex-col opacity-0`}
          >
            <h2 className={`${styles.heading2} flex flex-wrap text-center text-white`}>
              River Enterprises
            </h2>

            <div className="flex flex-row justify-center items-center lg:pt-3">
              <p className={`${styles.paragraph} text-white`}>view more</p>
              <img 
                src="./arrow-up-right-white.svg" 
                alt="arrow"
                className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] object-contain ml-1 lg:ml-3"
              />
            </div>
          </motion.div>
        </div>

        <div className="md:row-span-2 relative">
          <img 
            src="./business-1.jpg" 
            alt="business"
            className="w-full object-cover h-[150px] md:h-[522px] sm:h-[250px] md:rounded-tr-[130px]"  
          />

          <motion.div
            whileHover={{ opacity: 1 }}
            className={`${styles.flexCenter} cursor-pointer absolute bottom-0 w-full h-full feature-bg flex flex-col opacity-0 md:rounded-tr-[130px]`}
          >
            <h2 className={`${styles.heading2} flex flex-wrap text-center text-white`}>
              Gemtube Corporation
            </h2>

            <div className="flex flex-row justify-center items-center lg:pt-3">
              <p className={`${styles.paragraph} text-white`}>view more</p>
              <img 
                src="./arrow-up-right-white.svg" 
                alt="arrow"
                className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] object-contain ml-1 lg:ml-3"
              />
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-2 relative">
          <img 
            src="./business-4.jpg" 
            alt="business"
            className="w-full object-cover h-[150px] sm:h-[250px] object-top md:rounded-bl-[130px]" 
          />

          <motion.div
            whileHover={{ opacity:1 }}
            className={`${styles.flexCenter} cursor-pointer absolute bottom-0 w-full h-full feature-bg flex flex-col md:rounded-bl-[130px] opacity-0`}
          >
            <h2 className={`${styles.heading2} text-white`}>
              Zuidplein Building
            </h2>

            <div className="flex flex-row justify-center items-center lg:pt-3">
              <p className={`${styles.paragraph} text-white`}>view more</p>
              <img 
                src="./arrow-up-right-white.svg" 
                alt="arrow"
                className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] object-contain ml-1 lg:ml-3"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default BusinessFeature