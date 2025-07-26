import React from "react";
import { motion } from "framer-motion";

// Number of stars
const starCount = 60;

// DaisyUI theme hex values (you can customize this if you change your theme)
const themeColors = [
  "#6366f1", // primary (indigo)
  "#06b6d4", // accent (cyan)
  "#3b82f6", // info (blue)
  "#ec4899", // secondary (pink)
  "#f59e0b", // warning (amber)
  "#10b981", // success (green)
];

const generateStars = () => {
  return Array.from({ length: starCount }, (_, i) => {
    const size = Math.random() * 2 + 1; // 1–3px
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const color = themeColors[Math.floor(Math.random() * themeColors.length)];
    const delay = Math.random() * 5;
    const opacity = 0.2 + Math.random() * 0.4;

    return {
      key: i,
      x,
      y,
      size,
      color,
      delay,
      opacity,
    };
  });
};

const stars = generateStars();

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.key}
          className="absolute rounded-full mix-blend-screen"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: `0 0 6px ${star.color}`,
          }}
          animate={{
            opacity: [star.opacity, 1, star.opacity],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
