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

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-screen flex flex-col justify-start px-6 md:px-16 py-20 bg-base-100 overflow-y-auto"
    >
      <SEO
        title="Projects"
        description=""
        keywords=""
      />
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl w-full py-3 top-12 absolute z-40 left-0 backdrop-blur-3xl justify-center md:text-5xl lg:text-6xl font-bold text-center text-base-content"
      >
        Our{" "}
        <span className="text-primary inline-flex overflow-hidden">
          Team Work
        </span>
      </motion.h1>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="relative group rounded-xl border border-base-content/10 bg-base-200/70 backdrop-blur-sm shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

              {/* Project Title */}
              <h2 className="absolute bottom-4 left-4 text-white text-lg font-bold z-20">
                {project.name}
              </h2>

              {/* Tech Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-1 z-20">
                {project.tech
                  .split(",")
                  .slice(0, 3)
                  .map((stack, i) => (
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
              <p className="text-base-content/80 text-[0.95rem] leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Full Tech Badges */}
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
      </div>
    </section>
  );
};

export default Projects;

