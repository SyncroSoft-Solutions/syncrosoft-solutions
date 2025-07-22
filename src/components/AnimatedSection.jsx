import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const slideVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideVariant}
      className="mb-20"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
