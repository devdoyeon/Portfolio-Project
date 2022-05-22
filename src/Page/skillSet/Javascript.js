/* eslint-disable */

import React, { useLayoutEffect } from 'react';
import Exit from './Components/Exit';
import SkillList from './Components/SkillList';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Javascript = () => {
  useLayoutEffect(() => {
    AOS.init();
  });

  return (
    <>
      <motion.div
        className='skill js'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          JavaScript
        </h1>
        <hr />
      </motion.div>
      <Exit />
      <SkillList
        js={window.location.pathname == '/stack/javascript' ? 'true' : 'false'}
      />
    </>
  );
};

export default Javascript;
