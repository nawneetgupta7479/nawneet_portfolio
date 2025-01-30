"use client"

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  videoUrl,
  altContent,
  children,
  childrenClassName,
  videoClassName,
  className
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");
  const [videoError, setVideoError] = useState(false); // State to track video load error

  const handleMouseEnter = (event) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    console.log("direction", direction);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  const handleVideoError = () => {
    setVideoError(true); // Set videoError to true if the video fails to load
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "md:h-[20rem] w-[30rem] h-[17rem] md:w-[30rem] mb-8 bg-transparent shadow-md shadow-gray-700 rounded-lg overflow-hidden group/card relative",
        className
      )}>
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit">
          <motion.div
            className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/60 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}>
            {videoError ? (
              // Fallback content if the video doesn't load
              <div className="h-full w-full bg-gray-500 text-white flex justify-center items-center">
                <p>{altContent || "Video could not be loaded"}</p>
              </div>
            ) : (
              <video
                className={cn("h-full w-full object-fill", videoClassName)}
                autoPlay
                loop
                muted
                playsInline
                onError={handleVideoError}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            )}
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn("text-white absolute bottom-4 left-4 z-40", childrenClassName)}>
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};
