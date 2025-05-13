// src/components/AnimatedSection.tsx
import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number; // Vertical offset for slide-in effect (e.g., 20 for slide up from 20px below)
  xOffset?: number; // Horizontal offset
  once?: boolean; // Whether the animation should only run once
  threshold?: number; // Intersection observer threshold
  staggerChildren?: number; // If > 0, children will be staggered
  childVariants?: Variants; // Variants for children if staggering
}

const defaultChildVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  yOffset = 20,
  xOffset = 0,
  once = true,
  threshold = 0.1,
  staggerChildren,
  childVariants = defaultChildVariants,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  const parentVariants: Variants = {
    hidden: { opacity: 0, y: yOffset, x: xOffset },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut",
        when: staggerChildren ? "beforeChildren" : "",
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={parentVariants}
      className={className}
    >
      {staggerChildren
        ? React.Children.map(children, (child) =>
            React.isValidElement(child) ? (
              <motion.div variants={childVariants}>{child}</motion.div>
            ) : (
              child
            )
          )
        : children}
    </motion.div>
  );
};

export default AnimatedSection;
