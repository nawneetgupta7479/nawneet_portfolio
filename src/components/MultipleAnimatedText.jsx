"use client"

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MultipleAnimatedText = ({ textArray }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [textArray.length]);

  return (
    <motion.div className="text-center dark:text-light">
      <motion.h1
        key={currentTextIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: 'easeInOut', delay: 0.2 },
        }}
        exit={{
          opacity: 0,
          y: -20,
          transition: { duration: 1, ease: 'easeInOut' },
        }}
        className="text-3xl md:text-5xl font-semibold text-dark dark:text-light"
      >
        {textArray[currentTextIndex]}
      </motion.h1>
    </motion.div>
  );
};

export default MultipleAnimatedText;
