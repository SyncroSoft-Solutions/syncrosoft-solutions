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
      {/* Pulsing animated ring */}
      <motion.div
        className="flex items-center justify-center"
        animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="text-primary"
        >
          <LoaderIcon className="w-20 h-20" />
        </motion.div>
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
