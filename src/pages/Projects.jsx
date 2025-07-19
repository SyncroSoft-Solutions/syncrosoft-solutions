import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import project1 from "../assets/projects/FUNCHAT.png";
import project2 from "../assets/projects/CWF.png";
import SEO from "../components/SEO";

const projects = [
  {
    name: "Fun Chat",
    image: project1,
    tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
    description:
      "A modern MERN-based chat platform with real-time WebSockets, authentication and private routes.",
    github: "https://github.com/Ajay120503/fun-chat.git",
    live: "https://chat-app-q8ci.onrender.com",
  },
  {
    name: "CWF",
    image: project2,
    tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
    description:
      "A real-time MERN chat app with secure authentication, protected routes, and active user tracking.",
    github: "https://github.com/Ajay120503/chat-app",
    live: "https://chat-app-q8ci.onrender.com/",
  },
];

const badgeColors = [
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

const getCardVariants = (index) => {
  const isLeft = index % 2 === 0;
  return {
    initial: { opacity: 0, x: isLeft ? "-100vw" : "100vw", scale: 0.95 },
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

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full bg-base-100">
      <SEO
        title="Projects"
        description="Explore impactful projects built by Syncrosoft, showcasing our technical expertise and innovation."
        keywords="Projects, MERN Stack, Portfolio, Web Applications, Syncrosoft Work, Vite, Tailwind"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24">

        {/* Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-base-content mb-16"
        >
          Syncing Strategy with <span className="text-primary">Scalable Solutions</span>
        </motion.h1>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={getCardVariants(index)}
              className="group relative rounded-xl border border-base-content/10 bg-base-200/70 backdrop-blur-lg shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <h2 className="absolute bottom-4 left-4 text-white text-lg font-bold z-20">
                  {project.name}
                </h2>

                {/* Tech badges top left */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1 z-20">
                  {project.tech.split(",").slice(0, 3).map((stack, i) => (
                    <span
                      key={i}
                      className={`badge badge-${badgeColors[i % badgeColors.length]} badge-sm`}
                    >
                      {stack.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <p className="text-base-content/80 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.split(",").map((stack, i) => (
                    <div
                      key={i}
                      className={`badge badge-outline badge-${badgeColors[i % badgeColors.length]} text-xs`}
                    >
                      {stack.trim()}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-3 pt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
