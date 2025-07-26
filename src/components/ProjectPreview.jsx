import React from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import project1 from "../assets/projects/FUNCHAT.png";
import AnimatedSection from "../components/AnimatedSection";
import { bounceIn, fadeInLeft, fadeInRight } from "../animations/sectionVariants";

const badgeColors = ["primary", "secondary", "accent", "info", "success", "warning", "error"];

const project = {
  name: "Fun Chat",
  image: project1,
  tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
  description:
    "Fun Chat is a real-time modern messaging platform built using the MERN stack. It includes features like WebSocket-based instant messaging, secure authentication with JWT, protected private routes, real-time user status updates, group chats, and beautiful UI powered by Tailwind CSS and DaisyUI. Designed to deliver seamless performance and responsiveness.",
  live: "https://chat-app-q8ci.onrender.com",
};

const ProjectPreview = () => {
  return (
    <section className="flex items-center justify-center bg-base-200 text-base-content relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-10">

        {/* Heading */}
        <AnimatedSection variants={bounceIn}>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Our <span className="text-primary">Team Work</span>
            </h2>
            <hr className="border-primary max-w-40 mx-auto mt-2" />
          </div>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center relative">

          {/* Left Content */}
          <AnimatedSection variants={fadeInLeft}>
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold text-base-content">{project.name}</h3>
              <p className="text-base-content/80 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(",").map((stack, i) => (
                  <span
                    key={i}
                    className={`badge badge-outline badge-${badgeColors[i % badgeColors.length]} text-xs`}
                  >
                    {stack.trim()}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  to="/projects"
                  className="btn btn-md px-6 rounded-full text-base btn-outline btn-primary"
                >
                  Explore All Projects
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-base-content/20 z-0" />

          {/* Right Content */}
          <AnimatedSection variants={fadeInRight}>
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-base-content/10 bg-base-200/60 backdrop-blur-md z-10">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-primary gap-2"
                >
                  <ExternalLink size={18} />
                  Live Preview
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0 pointer-events-none" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;
