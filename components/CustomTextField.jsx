'use client';

import styles from '../styles';

export const CustomTextField = ({name, placeholder}) => (
  <div className="flex flex-col">
    <label htmlFor={`${name}`} className={`${styles.paragraph} pb-5 md:pb-10`}>{name}</label>
    <input type="text" name={`${name}`} id={`${name}`} placeholder={`${placeholder}`} className={`${styles.paragraph} outline-none bg-transparent placeholder:text-[#2b2b2b] pb-7 border-b-2 border-primary border-opacity-20`}/>
  </div>
);

