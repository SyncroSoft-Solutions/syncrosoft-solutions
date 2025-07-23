import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Default fade + slide variant
const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  variants = defaultVariants,
  as = "div", // optional: render as div/section/span etc.
  amount = 0.3, // % in view
}) => {
  const Component = motion[as]; // render as 'motion.div', 'motion.section', etc.
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount, once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
