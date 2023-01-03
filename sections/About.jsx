'use client';

import { motion } from "framer-motion";

import { TypingText } from '../components/CustomTexts'
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      classname={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}>
        <TypingText title="| About Metaworld" textStyles="text-center" />
        <motion.p 
          variants={fadeIn('up','tween',0.2,1)}
          className={`mt-[28px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white`}>
          BAYC is a collection of 10,000 Bored Ape NFTs—unique 
          <span className="font-extrabold text-white"> digital collectibles</span> living on the Ethereum blockchain. 
          Your Bored Ape doubles as your Yacht Club membership card, and grants 
          access to <span className="font-extrabold text-white">members-only benefits</span>, the first of which is 
          access to THE BATHROOM, a collaborative graffiti board. 
          Future areas and perks can be unlocked by the community through roadmap activation.  
          When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are 
          gaining membership access to a club whose benefits and offerings will increase over time. Your Bored 
          Ape can serve as your <span className="font-extrabold text-white">digital identity</span>, and open digital doors for you.
        </motion.p>
        <motion.img 
          variants={fadeIn('up','tween',0.3,1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px] ml-[50%]" /> 
      </motion.div>
  </section>
);

export default About;
