import React from "react";
import { motion } from "framer-motion";
import LoaderIcon from "./LoaderIcon.jsx";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-[100] bg-base-100 flex flex-col items-center justify-center space-y-6"
    >
      {/* Heartbeat pulsing effect */}
      <motion.div
        className="flex items-center justify-center text-primary"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: [0.4, 0, 0.6, 1],
        }}
      >
        <LoaderIcon className="w-20 h-20" />
      </motion.div>

      {/* Animated loading text */}
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="text-base-content font-medium text-lg tracking-wide"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
