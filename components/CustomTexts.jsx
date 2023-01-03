'use client';

import { motion } from "framer-motion";

import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = (props) => (
  <motion.p 
  variants={textContainer}
  className={`${props.textStyles} font-normal text-[18px] text-secondary-white`}
  >
    {console.log('text',props)}
    {Array.from(props.title).map((letter,index) =>(
      <motion.span 
      variants={textVariant2}
      key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
    ))}
  </motion.p>
);

export const TitleText = () => (
  <h2>Title Text</h2>
);
