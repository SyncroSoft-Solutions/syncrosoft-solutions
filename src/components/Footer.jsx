import React from "react";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bottom-0 absolute bg-base-200 text-base-content py-4 mt-auto shadow-inner"
    >
      {/* Optional animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-secondary blur-3xl pointer-events-none"
      />

      {/* Container */}
      <motion.div
        variants={footerVariants}
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative z-10"
      >
        {/* Created by */}
        <motion.p variants={textVariants} className="text-sm flex items-center gap-1">
          Created by{" "}
          <motion.span
            whileHover={{
              scale: 1.08,
              textShadow: "0px 0px 12px rgba(236, 72, 153, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="text-primary font-semibold cursor-pointer"
          >
            SyncroSoft Solutions
          </motion.span>
        </motion.p>

        {/* Rights reserved */}
        <motion.p variants={textVariants} className="text-sm mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} SyncroSoft Solutions. All rights reserved.
        </motion.p>
      </motion.div>

      {/* Subtle divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.2, scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="absolute top-0 left-0 w-full h-[1px] bg-primary/50 origin-left"
      />
    </motion.footer>
  );
};

export default Footer;
