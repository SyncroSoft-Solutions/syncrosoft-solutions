import React from "react";
import { Link } from "react-router-dom";
import { Code2, Smartphone, ServerCog, Globe2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedSection from "./AnimatedSection";
import {
  bounceIn,
  bounceStaggeredContainer,
  bounceStaggeredItem,
  fadeInLeft,
  fadeInRight,
} from "../animations/sectionVariants";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom, fast-loading, mobile-friendly MERN stack websites built with modern technologies.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Cross-platform, scalable, and efficient mobile apps tailored for your business goals.",
  },
  {
    icon: ServerCog,
    title: "API Development",
    description:
      "Custom RESTful and GraphQL APIs for seamless integration and scalable services.",
  },
  {
    icon: Globe2,
    title: "E-Commerce Solutions",
    description: "Build secure, fast, and user-friendly online stores with seamless payment gateways."
  },

];

const ServicesPreview = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10">
      {/* Centered Heading */}
      <AnimatedSection variants={bounceIn}>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-base-content leading-snug mb-16">
          Web Development and Digital Solutions <br />
          <span className="text-primary">Tailored to Your Needs</span>
        </h2>
      </AnimatedSection>

      {/* Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative">
        {/* Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-base-content/10"></div>

        {/* Left Content */}
        <div className="pr-0 md:pr-12 space-y-8">
          <AnimatedSection variants={fadeInLeft}>
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed">
              At <span className="text-secondary font-semibold">SyncroSoft Solutions</span>, we provide end-to-end web
              development services designed to help your business thrive in the digital world.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={fadeInRight}>
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed">
              Whether you’re launching a startup or scaling an enterprise, our experienced team builds fast, secure,
              and scalable solutions that drive performance and deliver measurable results.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={fadeInLeft}>
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed">
              From front-end design to back-end architecture, we offer smart and affordable digital solutions that help
              you stand out and succeed online.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={bounceIn}>
            <Link to="/services">
              <button className="btn btn-outline btn-primary rounded-full px-6 pt-2 lg:mb-0 mb-10 text-base font-semibold flex items-center gap-2">
                Explore All Services
              </button>
            </Link>
          </AnimatedSection>
        </div>

        {/* Right Services Cards */}
        <AnimatedSection
          variants={bounceStaggeredContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {services.slice(0, 4).map((service, index) => (
            <AnimatedSection
              key={index}
              variants={bounceStaggeredItem}
              custom={index}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-base-200 border border-base-content/10 shadow-lg p-5 mb-5 rounded-2xl group hover:shadow-xl relative"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl pointer-events-none" />

              {/* Icon */}
              <motion.div
                style={{ y: yParallax }}
                whileHover={{ rotate: [0, 5, -5, 0] }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 mx-auto relative overflow-visible"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 animate-pulse-slow bg-gradient-to-r from-primary via-accent to-secondary blur-2xl" />
                </div>
                {React.createElement(service.icon, {
                  className: "w-9 h-9 text-primary relative z-10",
                })}
              </motion.div>

              {/* Title + Description */}
              <h3 className="text-lg font-semibold text-center text-base-content">
                {service.title}
              </h3>
              <p className="text-sm text-center text-base-content/80 mt-2 leading-relaxed">
                {service.description}
              </p>
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesPreview;
