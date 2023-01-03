'use client';

import { motion } from "framer-motion";

import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = (props) => (
  <motion.p 
  variants={textContainer}
  className={`${props.textStyles} font-normal text-[18px] text-secondary-white`}
  >
    {Array.from(props.title).map((letter,index) =>(
      <motion.span 
      variants={textVariant2}
      key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
    ))}
  </motion.p>
);

export const TitleText = (props) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${props.textStyles} mt-[8px] font-bold text-white md:text-[60px] text-[40px]`}
  >{props.title}</motion.h2>
);
