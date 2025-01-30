"use client"

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName
}) => {
  return (<>
    <FloatingDockDesktop items={items} className={desktopClassName} />
    {/* <FloatingDockMobile items={items} className={mobileClassName} /> */}
  </>);
};

// const FloatingDockMobile = ({
//   items,
//   className
// }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     (<div className={cn("relative block md:hidden", className)}>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             layoutId="nav"
//             className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
//             {items.map((item, idx) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: 10,
//                   transition: {
//                     delay: idx * 0.05,
//                   },
//                 }}
//                 transition={{ delay: (items.length - 1 - idx) * 0.05 }}>
//                 <Link
//                   href={item.href}
//                   key={item.title}
//                   className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center">
//                   <div className="h-4 w-4">{item.icon}</div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <button
//         onClick={() => setOpen(!open)}
//         className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center">
//         <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
//       </button>
//     </div>)
//   );
// };

const FloatingDockDesktop = ({
  items,
  className
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    (<motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-12 gap-4 items-end  rounded-2xl bg-gray-100 dark:bg-white/5 border-dark dark:border-light border shadow-lg  px-4 pb-2",
        className
      )}>
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>)
  );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href
  }) {
    let ref = useRef(null);
  
    let distance = useTransform(mouseX, (val) => {
      let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
  
      return val - bounds.x - bounds.width / 2;
    });
  
    // Reduce the size range for the width/height transformation
    let widthTransform = useTransform(distance, [-150, 0, 150], [30, 60, 30]); // Reduced size range
    let heightTransform = useTransform(distance, [-150, 0, 150], [30, 60, 30]); // Reduced size range
  
    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [15, 30, 15]); // Reduced size range for icon
    let heightTransformIcon = useTransform(distance, [-150, 0, 150], [15, 30, 15]); // Reduced size range for icon
  
    let width = useSpring(widthTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
    let height = useSpring(heightTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
  
    let widthIcon = useSpring(widthTransformIcon, {
      mass: 0.1,
      stiffness: 15,
      damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
  
    const [hovered, setHovered] = useState(false);
  
    return (
      <Link href={href}>
        <motion.div
          ref={ref}
          style={{ width, height }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="aspect-square rounded-full bg-dark  dark:border-2  dark:bg-neutral-700 flex items-center justify-center relative">
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 2, x: "-50%" }}
                className="px-2 py-0.5 whitespace-pre rounded-md dark:bg-gray-100 border bg-neutral-800 dark:border-neutral-900 dark:text-dark border-gray-200 text-light absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs">
                {title}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            style={{ width: widthIcon, height: heightIcon }}
            className="flex items-center justify-center ">
            {icon}
          </motion.div>
        </motion.div>
      </Link>
    );
  }
  