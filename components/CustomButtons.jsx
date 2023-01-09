'use client';

export const CategoryBtn = ({title, textStyles}) => (
  <button
    className={`w-full border-2 border-primary rounded-[50px] px-3 md:px-7 md:py-[3px] text-primary font-medium uppercase text-center ${textStyles} hover:text-[#141514] hover:border-none hover:bg-white cursor-pointer`}
  >
    {title}
  </button>
);