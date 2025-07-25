import { motion } from "framer-motion";
import React from "react";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    strokeLinecap="round"
    {...props}
  />
);

const AnimatedBurgerButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <button
      className="btn btn-ghost btn-circle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle mobile menu"
    >
      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        initial={false}
        animate={menuOpen ? "open" : "closed"}
      >
        {/* Top line: longest */}
        <Path
          variants={{
            closed: { d: "M 3 6 L 21 6" },
            open: { d: "M 4 4 L 20 20" },
          }}
          stroke="currentColor"
        />
        {/* Middle line: medium */}
        <Path
          variants={{
            closed: { d: "M 6 12 L 18 12", opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
          stroke="currentColor"
        />
        {/* Bottom line: shortest */}
        <Path
          variants={{
            closed: { d: "M 8 18 L 16 18" },
            open: { d: "M 4 20 L 20 4" },
          }}
          stroke="currentColor"
        />
      </motion.svg>
    </button>
  );
};

export default AnimatedBurgerButton;
