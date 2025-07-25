import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import Typingtext from "./Typingtext";
import { bounceIn, fadeInLeft, fadeInRight } from "../animations/sectionVariants";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100 text-base-content relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <AnimatedSection variants={bounceIn} className="lg:px-36 text-center">
          <Typingtext
            as="h1"
            initialDelay={500}
            typingSpeed={120}
            deletingSpeed={90}
            pauseDuration={1500}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName=""
            className="mt-24 lg:mt-20 text-center mb-0 lg:mb-10 text-3xl min-h-40 md:text-5xl lg:text-6xl font-light leading-snug"
            sentences={[
              [
                { text: "Building", className: "text-primary font-serif" },
                { text: "Digital Solutions", className: "text-accent font-mono" },
                { text: "That", className: "" },
                { text: "Empower", className: "text-secondary font-semibold font-sans" },
                { text: "Your", className: "" },
                { text: "Growth", className: "text-warning font-bold" },
              ],
            ]}
          />
        </AnimatedSection>

        <div className="grid mb-10 lg:mb-32 grid-cols-1 lg:grid-cols-2 gap-10 relative">
          {/* Divider (only on large screens) */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-base-content/10" />

          {/* Left Column */}
          <AnimatedSection variants={fadeInLeft}>
            <p className="text-xl text-start md:text-2xl text-base-content/90 mb-6 leading-relaxed">
              At{" "}
              <span className="text-primary font-bold underline underline-offset-2">
                SyncroSoft Solutions
              </span>
              , we don’t just develop websites. We create{" "}
              <span className="text-info font-semibold animate-pulse-slow">
                meaningful digital experiences
              </span>{" "}
              that{" "}
              <span className="text-info font-semibold">
                move businesses forward
              </span>
              . Whether you’re{" "}
              <span className="text-info font-semibold">launching a startup</span>{" "}
              or{" "}
              <span className="text-info font-semibold">scaling an enterprise</span>
              , our{" "}
              <span className="text-info font-semibold">
                custom-built web solutions
              </span>{" "}
              are designed to{" "}
              <span className="text-info font-semibold">fuel your success</span>.
            </p>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection variants={fadeInRight}>
            <p className="text-xl text-start md:text-2xl text-base-content/90 mb-6 leading-relaxed">
              From{" "}
              <span className="font-semibold text-info">static websites</span>{" "}
              to{" "}
              <span className="font-semibold text-info">dynamic web platforms</span>
              , our{" "}
              <span className="text-info font-semibold">expert team</span> delivers{" "}
              <span className="text-info font-semibold">performance-driven</span>
              , <span className="text-info font-semibold">scalable</span>, and{" "}
              <span className="text-info font-semibold">user-focused products</span>{" "}
              tailored to your{" "}
              <span className="font-bold text-info">unique goals</span>.
            </p>
          </AnimatedSection>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <AnimatedSection variants={fadeInLeft}>
            <Link to="/projects">
              <button className="btn btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow-lg hover:bg-primary/90 hover:shadow-xl">
                Let’s turn your ideas into reality
              </button>
            </Link>
          </AnimatedSection>
          <AnimatedSection variants={fadeInRight}>
            <Link to="/contact">
              <button className="btn btn-outline btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow hover:border-primary/80 hover:text-primary">
                Contact us today
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
