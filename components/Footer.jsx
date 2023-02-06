'use client';

import styles from '../styles';
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 mt-10`}
  >
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center`}
    >
      <h3 className="font-medium text-primary text-center text-[10px] sm:[14px] lg:text-[20px]">
        terms & agreements
      </h3>

      <h3 className="font-medium text-primary text-center text-[10px] sm:[14px] lg:text-[20px]">
        @2022 architecte all rights reserved
      </h3>

      <h3 className="font-medium text-primary text-center text-[10px] sm:[14px] lg:text-[20px]">
        privacy policy
      </h3>
    </div>
  </motion.footer>
)

export default Footer