'use client';

import styles from '../styles';
import {motion} from 'framer-motion';

const AreaOfExpertise = ({id, imgUrl, title, subtitle, active, handleClick}) => {
  return (
    <div className="pt-10" onClick={() => handleClick(id)}>
      <div className="w-full pb-2 md:pb-5 border-b-2 border-primary border-opacity-20">
        <div className="flex justify-between items-center">
          <p className="text-primary font-medium text-[14px] lg:text-[24px]">{title}</p>
          <motion.img
            whileHover={{ rotate:90 }}
            src="./arrow-up-right-gray.svg" 
            alt="arrow"
            className={`w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] object-contain ${active === id ? 'rotate-90' : 'rotate-0'}`} 
          />
        </div>

        <p className={`pt-5 text-primary text-[10px] leading-[16px] lg:text-[18px] lg:leading-[28px] ${active === id ? 'block' : 'hidden'}`}>{subtitle}</p>
        
        <div className="w-full overflow-hidden mt-5">
          <motion.img
            whileHover={{ scale:1.4 }} 
            src={imgUrl} 
            alt="expertise"
            className={`w-full object-cover h-[440px] ${active === id ? 'block' : 'hidden'}`} 
          />
        </div>
      </div>

    </div>
  )
}

export default AreaOfExpertise