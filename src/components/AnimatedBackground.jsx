import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingPatterns = [
  "absolute top-1/2 left-16 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl",
  "absolute top-1/2 right-16 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-bl from-secondary via-primary to-accent rounded-full blur-3xl",
  "absolute bottom-16 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-primary via-accent to-secondary rounded-full blur-3xl",
  "absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-warning via-accent to-info rounded-full blur-3xl",
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-gradient-to-br from-info via-success to-warning rounded-full blur-3xl",
];

const AnimatedBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingPatterns.length);
    }, 5000); // ⏱️ Change pattern every 15 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 🌙 Static Glow Layers */}
      {/* 🌟 Top Left Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-3xl"
      />
      {/* 🌟 Bottom Right Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-accent via-primary to-secondary rounded-full blur-3xl"
      />
      {/* 🌟 Top Right Corner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.13, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
        className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-bl from-accent via-primary to-secondary rounded-full blur-3xl"
      />

      {/* 🌿 Bottom Left Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.14, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tl from-primary via-secondary to-accent rounded-full blur-3xl"
      />
      {/* 🔁 Rotating Pattern */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.18, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={rotatingPatterns[index]}
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBackground;
