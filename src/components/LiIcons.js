"use client"

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcons = () => {
  const ref = useRef(null); // Create the ref

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'], // Define the offsets for scroll tracking
  });

  return (
    <div ref={ref} className="relative right-[91.5px]">
      <figure className="absolute left-0 stroke-dark dark:stroke-light">
        <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
          {/* Outer Circle */}
          <circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-primary stroke-1 fill-none"
          />
          {/* Animated Circle */}
          <motion.circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-[5px] fill-light dark:fill-dark"
            style={{ pathLength: scrollYProgress }} // Bind animation
          />
          {/* Inner Circle */}
          <circle
            cx="75"
            cy="50"
            r="10"
            className="stroke-1 fill-primary animate-pulse"
          />
        </svg>
      </figure>
    </div>
  );
};

export default LiIcons;
