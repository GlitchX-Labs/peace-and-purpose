"use client";

import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/** Fades/lifts a section into place once it enters the viewport. Respects prefers-reduced-motion via the app-wide MotionConfig. */
export function Reveal({ as = "div", delay = 0, className, children, ...props }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
