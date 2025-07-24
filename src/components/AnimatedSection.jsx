import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeInUp } from "../animations/sectionVariants"; // fallback

const AnimatedSection = ({
  children,
  className = "",
  variants = fadeInUp,      // default fallback animation
  as = "div",               // motion.div, motion.section, etc.
  amount = 0.3,             // how much in-view triggers it
  delay = 0,                // custom delay for animation
  duration = 0.6,           // duration override
  once = true,              // only animate once?
  custom = null,            // for index-based animation
  whileHover = undefined,  // optional whileHover motion
  whileTap = undefined,    // optional whileTap motion
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
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
