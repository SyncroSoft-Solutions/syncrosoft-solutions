import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2, Smartphone, Paintbrush, CloudCog, BarChart4, ShieldCheck,
  ServerCog, Globe2,
} from "lucide-react";
import SEO from "../components/SEO";

const services = [
  { icon: Code2, title: "Web Development", description: "Custom, fast-loading, mobile-friendly MERN stack websites built with modern technologies." },
  { icon: Smartphone, title: "App Development", description: "Cross-platform, scalable, and efficient mobile apps tailored for your business goals." },
  { icon: Paintbrush, title: "UI/UX Design", description: "Beautiful, intuitive, and accessible interface designs for engaging user experiences." },
  { icon: CloudCog, title: "Cloud Integration", description: "Deploy, scale, and manage apps with modern cloud infrastructure solutions." },
  { icon: BarChart4, title: "Data Analytics", description: "Turn business data into actionable insights and optimize your strategies." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Protect your systems and data with our advanced security solutions and audits." },
  { icon: ServerCog, title: "API Development", description: "Custom RESTful and GraphQL APIs for seamless integration and scalable services." },
  { icon: Globe2, title: "E-Commerce Solutions", description: "Build secure, fast, and user-friendly online stores with seamless payment gateways." },
];

const getCardVariants = (index) => {
  const isLeft = index % 2 === 0;
  return {
    initial: {
      opacity: 0,
      x: isLeft ? "-100vw" : "100vw",
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="services" className="min-h-screen w-full bg-base-100">
      <SEO
        title="Services"
        description="Discover Syncrosoft’s wide range of professional services including web development, app design, and cloud solutions."
        keywords="Web Development, App Development, UI/UX Design, Cloud Integration, MERN, Syncrosoft Services"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-base-content mb-16"
        >
          Our{" "}
          <span className="text-primary inline-flex overflow-hidden">Services</span>
        </motion.h1>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={getCardVariants(index)}
              className="card bg-base-200 border border-base-content/10 shadow-lg p-5 mb-3 rounded-2xl group hover:shadow-xl hover:scale-[1.03] transition-all duration-300 relative"
              whileHover={{ y: -4 }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl pointer-events-none" />

              {/* Icon */}
              <motion.div
                style={{ y: yParallax }}
                whileHover={{ rotate: [0, 5, -5, 0] }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 mx-auto relative overflow-visible"
              >
                {/* Glow Pulse */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 animate-pulse-slow bg-gradient-to-r from-primary via-accent to-secondary blur-2xl"></div>
                </div>
                {/* Icon Element */}
                {React.createElement(service.icon, {
                  className: "w-9 h-9 text-primary relative z-10",
                })}
              </motion.div>

              {/* Title + Description */}
              <h2 className="text-lg font-semibold text-center text-base-content">{service.title}</h2>
              <p className="text-sm text-center text-base-content/80 mt-2 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
