import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import AnimatedBurgerButton from "./AnimatedBurgerButton";
import {
  Home,
  Info,
  Briefcase,
  Layout,
  Users,
  MessageCircle,
  Star,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Projects", path: "/projects", icon: Layout },
  { name: "Team", path: "/team", icon: Users },
  { name: "Testimonials", path: "/testimonials", icon: Star },
  { name: "Contact", path: "/contact", icon: MessageCircle },
];

const navbarVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 z-50 w-full py-2 backdrop-blur-lg bg-base-100/80 border-b border-base-content/10 shadow-md"
    >
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-12 h-full">
        {/* Logo */}
        <div className="max-w-[160px]">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden lg:flex items-center gap-10"
          initial="hidden"
          animate="visible"
        >
          {navItems.map(({ name, path }) => (
            <motion.div
              key={name}
              variants={navItemVariants}
            >
              <Link
                to={path}
                className={`text-[17px] font-medium transition duration-300 ${location.pathname === path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "hover:text-primary"
                  }`}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="lg:hidden">
              <AnimatedBurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-base-100/80 backdrop-blur-md shadow-md"
          >
            <ul className="flex flex-col gap-4 p-6">
              {navItems.map(({ name, path, icon: Icon }) => (
                <li key={name}>
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 text-lg font-medium transition duration-300 ${location.pathname === path
                        ? "text-primary border-b-2 border-primary pb-1"
                        : "hover:text-primary"
                      }`}
                  >
                    <Icon size={20} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
