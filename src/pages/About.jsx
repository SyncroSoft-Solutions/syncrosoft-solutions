import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedBackground from "../components/AnimatedBackground";
import { bounceIn, bounceStaggeredContainer, bounceStaggeredItem, fadeInLeft, fadeInRight, fadeInUp } from "../animations/sectionVariants.js";

import samarth from "../assets/team/samarth.jpeg";
import rutika from "../assets/team/rutika.jpeg";
import ajay from "../assets/team/ajay.jpeg";
import sadhana from "../assets/team/sadhana.jpeg";
import sohan from "../assets/team/sohan.jpeg";
import abhishek from "../assets/team/abhishek.jpeg";
import rohit from "../assets/team/rohit.jpeg";
import Typingtext from "../components/Typingtext";

import {
  Code,
  Cpu,
  Database,
  Server,
  Zap,
  Atom,
  Settings2,
} from "lucide-react";
import Footer from "../components/Footer.jsx";


const teamMembers = [
  { id: 1, name: "Samarth Kanthale", role: "Full Stack Developer", image: samarth },
  { id: 2, name: "Ajay Kandhare", role: "Full Stack Developer", image: ajay },
  { id: 3, name: "Rutika Ekshinge", role: "Project Manager", image: rutika },
  { id: 4, name: "Sadhana Jadhav", role: "Data Analyst", image: sadhana },
  { id: 5, name: "Sohan Kendre", role: "Java Developer", image: sohan },
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

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="bg-base-100 relative text-base-content h-screen overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
      <SEO
        title="About"
        description="About SyncroSoft"
        keywords="about, team, syncrosoft, software development, web, react, node, express, mongodb"
      />
      <AnimatedBackground />
      <div className="w-full max-w-7xl mx-auto px-0 sm:px-8 lg:px-12 pt-24 overflow-hidden">
        {/* {About Section} */}
        <div className="min-h-screen bg-base-100 py-10 lg:pt-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-start items-center">
          <AnimatedSection
            variants={fadeInUp}
          >
            {/* Heading on Top */}
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-base-content mb-4">
                About{" "}
                <Typingtext
                  as="span"
                  initialDelay={500}
                  typingSpeed={120}
                  deletingSpeed={90}
                  pauseDuration={1500}
                  loop={true}
                  showCursor={true}
                  cursorCharacter="|"
                  cursorClassName="text-secondary"
                  className="text-primary font-bold font-mono"
                  sentences={[
                    [{ text: "SyncroSoft", className: "text-primary font-bold font-mono" }],
                  ]}
                />
              </h2>
            </div>
          </AnimatedSection>

          {/* Two-Column Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <AnimatedSection variants={fadeInLeft}>
              <p className="text-lg md:text-xl text-base-content/80 leading-relaxed">
                We’re glad you’re here. At{" "}
                <span className="text-secondary font-bold">SyncroSoft Solutions</span>, we build more than just
                software — we build <span className="text-primary font-bold">partnerships</span>,{" "}
                <span className="text-primary font-bold">possibilities</span>, and{" "}
                <span className="text-primary font-bold">digital experiences</span> that make a difference.
              </p>
            </AnimatedSection>

            <AnimatedSection variants={fadeInRight}>
              <p className="text-lg md:text-xl text-base-content/80 leading-relaxed">
                Whether you're a <span className="text-accent font-semibold">startup</span> or an{" "}
                <span className="text-accent font-semibold">enterprise</span>, you're in the right place.
                Our <span className="text-info font-semibold">custom web solutions</span> are built for growth,
                performance, and user experience.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection
            variants={bounceIn}
          >
            {/* Mission Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold mb-4">Our Mission & Vision</h3>
              <p className="text-lg md:text-xl text-base-content/80 leading-relaxed">
                To empower clients with{" "}
                <span className="text-secondary font-bold">cutting-edge</span> digital tools through{" "}
                <span className="text-secondary font-bold">agile development</span>,{" "}
                <span className="text-secondary font-bold">smart technology</span>, and a{" "}
                <span className="text-secondary font-bold">user-first approach</span>.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
            {[
              { label: "Our Clients", end: 20 },
              { label: "Our Projects", end: 5 },
              { label: "Team Members", end: 7 },
            ].map((stat) => (
              <AnimatedSection key={stat.label} variants={bounceIn}>
                <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl shadow-sm bg-base-100 hover:shadow-md transition duration-300">
                  <h4 className="text-3xl lg:text-5xl font-extrabold text-primary">
                    <CountUp end={stat.end} duration={9.5} />+
                  </h4>
                  <p className="text-lg lg:text-xl font-semibold text-base-content/90 mt-1">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* {Team Section} */}
        <div className="lg:py-20 py-10 bg-base-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <AnimatedSection variants={bounceIn}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-2">
                  Our <span className="text-primary underline underline-offset-4">Team</span>
                </h2>
                <p className="text-xl md:text-2xl text-base-content/80">
                  The <span className="text-accent font-semibold">People Behind</span> the Innovation
                </p>
              </div>
            </AnimatedSection>

            {/* Split Layout with Vertical Divider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative">
              {/* Vertical Divider Line (hidden on small screens) */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-base-content/10"></div>

              {/* === TEXT BLOCK === */}
              <div className="md:pr-10">
                <div>
                  <div className="text-start">
                    <AnimatedSection variants={bounceIn}>
                      <p className="text-lg md:text-xl text-base-content/70 mb-4 leading-relaxed">
                        At <span className="text-primary font-bold">SyncroSoft Solutions</span>, our strength lies in our{" "}
                        <span className="text-success font-semibold">people</span>. We are a team of{" "}
                        <span className="text-success font-semibold">passionate developers</span>,{" "}
                        <span className="text-success font-semibold">creative designers</span>, and{" "}
                        <span className="text-success font-semibold">strategic thinkers</span> dedicated to building{" "}
                        <span className="text-success font-semibold">technology that works</span>.
                      </p>
                    </AnimatedSection>
                    <AnimatedSection variants={bounceIn}>
                      <p className="text-lg md:text-xl text-base-content/70 mb-4 leading-relaxed">
                        <span className="text-success font-semibold">Collaboration</span>,{" "}
                        <span className="text-success font-semibold">innovation</span>, and{" "}
                        <span className="text-success font-semibold">transparency</span> are at the heart of everything we do. Our team works closely with clients to bring their ideas to life with{" "}
                        <span className="text-success font-semibold">smart</span>,{" "}
                        <span className="text-success font-semibold">scalable</span> solutions.
                      </p>
                    </AnimatedSection>
                    <AnimatedSection variants={bounceIn}>
                      <div className="text-primary text-xl md:text-2xl font-bold flex items-center gap-2 mt-4">
                        Together, we turn vision into value
                      </div>
                      <Link to="/team">
                        <button className="mt-8 btn btn-primary rounded-full px-8 text-base font-semibold">
                          Meet Our Team
                        </button>
                      </Link>
                    </AnimatedSection>
                  </div>
                </div>
              </div>

              {/* === TEAM GRID === */}
              <div className="md:pl-10">
                <AnimatedSection
                  variants={bounceStaggeredContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 justify-center"
                >
                  {teamMembers.map((member, index) => (
                    <AnimatedSection
                      key={index}
                      variants={bounceStaggeredItem}
                      custom={index}
                      whileHover={{ scale: 1 }}
                      whileTap={{ scale: 0.95 }}
                    >
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
                    </AnimatedSection>
                  ))}
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>

        {/* {Tech Stack Section} */}
        <div className="py-10 text-center w-full mx-auto px-4 sm:px-8 lg:px-12">
          <AnimatedSection variants={bounceIn} >
            <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-lg md:text-2xl text-base-content/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              We use a combination of modern <span className="text-primary font-semibold">frameworks</span>, <span className="text-secondary font-semibold">tools</span>, and <span className="text-accent font-semibold">libraries</span> to build reliable, scalable, and visually appealing applications tailored to business needs.
            </p>
          </AnimatedSection>
          <AnimatedSection
            variants={bounceStaggeredContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:pt-4">
            {techStack.map((tech, index) => (
              <AnimatedSection
                key={index}
                variants={bounceStaggeredItem}
                custom={index}
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }} >
                <div
                  key={tech.name}
                  className="card bg-base-300 border border-base-content/10 shadow-lg p-5 rounded-2xl group hover:shadow-xl hover:scale-[1.03] relative mb-3"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl pointer-events-none" />
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
                </div>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
