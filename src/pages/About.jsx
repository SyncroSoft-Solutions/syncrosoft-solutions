import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AnimatedSection from "../components/AnimatedSection";

import {
  ArrowUpRight,
  Code,
  Cpu,
  Database,
  Server,
  Zap,
  Atom,
  Settings2,
  Users,
  FolderGit2,
} from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";

import samarth from "../assets/team/samarth.jpeg";
import rutika from "../assets/team/rutika.jpeg";
import ajay from "../assets/team/ajay.jpeg";
import sadhana from "../assets/team/sadhana.jpeg";
import sohan from "../assets/team/sohan.jpeg";
import abhishek from "../assets/team/abhishek.jpeg";
import rohit from "../assets/team/rohit.jpeg";
import Typingtext from "../components/Typingtext";

const teamMembers = [
  { id: 1, name: "Samarth Kanthale", role: "Full Stack Developer", image: samarth },
  { id: 2, name: "Ajay Kandhare", role: "Full Stack Developer", image: ajay },
  { id: 3, name: "Rutika Ekshinge", role: "Project Manager", image: rutika },
  { id: 4, name: "Sadhana Jadhav", role: "Data Analyst", image: sadhana },
  { id: 5, name: "Sohan Kendre", role: "Frontend Developer", image: sohan },
  { id: 6, name: "Abhishek Jaiswar", role: "Full Stack Developer", image: abhishek },
  { id: 7, name: "Rohit Gaware", role: "Digital Marketing", image: rohit },
];

const techStack = [
  {
    name: "React",
    icon: Code,
    about:
      "React is a JavaScript library for building user interfaces. It allows us to create reusable UI components for fast and scalable applications."
  },
  {
    name: "Node.js",
    icon: Cpu,
    about:
      "Node.js is a JavaScript runtime that enables backend development using JavaScript. It is highly efficient and suitable for scalable network applications."
  },
  {
    name: "MongoDB",
    icon: Database,
    about:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is widely used for modern applications requiring fast, flexible data storage."
  },
  {
    name: "Express",
    icon: Server,
    about:
      "Express is a web framework for Node.js. It simplifies backend development by providing powerful features for handling requests, middleware, and routing."
  },
  {
    name: "Tailwind CSS",
    icon: Zap,
    about:
      "Tailwind CSS is a utility-first CSS framework. It allows rapid UI development by composing styles directly in the HTML markup, increasing efficiency and consistency."
  },
  {
    name: "Framer Motion",
    icon: Atom,
    about:
      "Framer Motion is a React library for animations. It helps build interactive user interfaces with simple yet powerful animation APIs for smoother UX."
  },
  {
    name: "Vite",
    icon: Settings2,
    about:
      "Vite is a frontend build tool that significantly improves the development experience with fast hot-module replacement and optimized production builds."
  }
];

const About = () => {
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

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="bg-base-100 text-base-content h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
      <SEO
        title="About"
        description="About SyncroSoft"
        keywords="about, team, syncrosoft, software development, web, react, node, express, mongodb"
      />
      <AnimatedBackground />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 overflow-hidden">
        <AnimatedSection>
          <div className="py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-base-content mb-16"
            >
              About{" "}
              <Typingtext
                as="h1"
                initialDelay={500}
                typingSpeed={120}
                deletingSpeed={90}
                pauseDuration={1500}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-secondary"
                className="min-h-20 text-4xl md:text-6xl font-bold mb-6"
                sentences={[
                  [
                    { text: "SyncroSoft", className: "text-primary font-bold font-mono" },
                  ],
                ]}
              />
              <p className="text-xl md:text-2xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
                We’re glad you’re here.<br className="my-2" />
                At <span className="text-secondary font-bold">SyncroSoft Solutions</span>, we’re passionate about building more than just software — we build <span className="text-primary font-bold">partnerships</span>, <span className="text-primary font-bold">possibilities</span>, and <span className="text-primary font-bold">digital experiences</span> that make a difference. Whether you're a <span className="text-accent font-semibold">startup</span> or an <span className="text-accent font-semibold">enterprise</span>, you're in the right place.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20"
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-lg md:text-2xl text-base-content/80 leading-relaxed">
                To empower clients with <span className="text-secondary font-bold">cutting-edge</span> digital tools through <span className="text-secondary font-bold">agile development</span>, <span className="text-secondary font-bold">smart technology</span>, and a <span className="text-secondary font-bold">user-first approach</span>.
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 px-4 sm:px-6 mb-16 sm:mb-24">
              {[{ label: "Clients", end: 120 }, { label: "Projects", end: 200 }, { label: "Team Members", end: 10 }].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-4xl font-bold text-primary">
                    <CountUp end={stat.end} duration={3} />+
                  </h3>
                  <p className="text-lg font-semibold text-base-content/80 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Responsive Grid: 1 column on sm, 2 on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* === TEXT BLOCK === */}
                <AnimatedSection>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                      Our <span className="text-primary underline underline-offset-4">Team</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-base-content/80 mb-6">
                      The <span className="text-accent font-semibold">People Behind</span> the Innovation
                    </p>
                    <div className="text-start">
                      <p className="text-lg md:text-xl text-base-content/70 mb-4 leading-relaxed">
                        At <span className="text-primary font-bold">SyncroSoft Solutions</span>, our strength lies in our{" "}
                        <span className="text-success font-semibold">people</span>. We are a team of{" "}
                        <span className="text-success font-semibold">passionate developers</span>,{" "}
                        <span className="text-success font-semibold">creative designers</span>, and{" "}
                        <span className="text-success font-semibold">strategic thinkers</span> dedicated to building{" "}
                        <span className="text-success font-semibold">technology that works</span>.
                      </p>
                      <p className="text-lg md:text-xl text-base-content/70 mb-4 leading-relaxed">
                        <span className="text-success font-semibold">Collaboration</span>,{" "}
                        <span className="text-success font-semibold">innovation</span>, and{" "}
                        <span className="text-success font-semibold">transparency</span> are at the heart of everything we do. Our team works closely with clients to bring their ideas to life with{" "}
                        <span className="text-success font-semibold">smart</span>,{" "}
                        <span className="text-success font-semibold">scalable</span> solutions.
                      </p>
                      <div className="text-primary text-xl md:text-2xl font-bold flex items-center gap-2 mt-4">
                        Together, we turn vision into <span className="text-warning">value</span>
                      </div>
                      <Link to="/team">
                        <button className="mt-8 btn btn-primary rounded-full px-8 text-base font-semibold">
                          Meet Our Team
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* === TEAM GRID === */}
                <AnimatedSection>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mx-auto justify-center"
                  >
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex flex-col gap-2 items-center text-center group transition-transform duration-300"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg ring-4 ring-primary ring-offset-2 ring-offset-base-100 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex flex-col gap-0.5">
                          <div className="font-semibold text-base-content text-sm md:text-base">
                            {member.name}
                          </div>
                          <div className="text-xs md:text-sm text-base-content/70 font-medium">
                            {member.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatedSection>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection >
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="px-4 sm:px-6 mb-4 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-lg md:text-2xl text-base-content/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              We use a combination of modern <span className="text-primary font-semibold">frameworks</span>, <span className="text-secondary font-semibold">tools</span>, and <span className="text-accent font-semibold">libraries</span> to build reliable, scalable, and visually appealing applications tailored to business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:pt-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={getCardVariants(index)}
                  className="card bg-base-200 border border-base-content/10 shadow-lg p-5 rounded-2xl group hover:shadow-xl hover:scale-[1.03] transition-all duration-300 relative mb-3"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl pointer-events-none" />
                  <motion.div
                    style={{ y: yParallax }}
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 mx-auto relative overflow-visible"
                  >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                      <div className="w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 animate-pulse-slow bg-gradient-to-r from-primary via-accent to-secondary blur-2xl"></div>
                    </div>
                    {React.createElement(tech.icon, {
                      className: "w-6 h-6 text-primary relative z-10",
                    })}
                  </motion.div>
                  <h2 className="text-lg font-semibold text-center text-base-content mb-2">
                    {tech.name}
                  </h2>
                  <p className="text-base text-base-content/70 leading-snug">
                    {tech.about}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20 sm:mb-24 flex flex-col sm:flex-row gap-4 px-4 justify-center"
          >
            <Link to="/team">
              <button className="btn btn-outline btn-secondary flex items-center gap-2">
                <Users size={18} /> Meet Our Team
              </button>
            </Link>
            <Link to="/projects">
              <button className="btn btn-outline btn-secondary flex items-center gap-2">
                <FolderGit2 size={18} /> Our Team Work
              </button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-5 right-5 z-50"
          >
            <Link to="/contact">
              <button className="btn btn-primary btn-circle shadow-xl">
                <ArrowUpRight />
              </button>
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
