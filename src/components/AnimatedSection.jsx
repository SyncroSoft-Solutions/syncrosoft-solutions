import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeInUp } from "../animations/sectionVariants";

const AnimatedSection = ({
  children,
  className = "",
  variants = fadeInUp,   
  as = "div",            
  amount = 0.3, 
  delay = 0,
  duration = 0.6,
  once = true,
  custom = null,
  whileHover,
  whileTap
}) => {
  const Component = motion[as] || motion.div;
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount, once });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const resolvedVariants =
    typeof variants === "function"
      ? variants(custom || 0)
      : {
          hidden: variants.hidden,
          visible: {
            ...variants.visible,
            transition: {
              ...(variants.visible?.transition || {}),
              delay,
              duration,
            },
          },
        };

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={resolvedVariants}
      custom={custom}
      className={`will-change-transform md:will-change-auto ${className}`} // GPU optimized
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection; 