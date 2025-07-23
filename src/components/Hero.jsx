import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import Typingtext from "./Typingtext";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100 text-base-content relative overflow-hidden">
      <div className="px-4 sm:px-8">
        <AnimatedSection >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
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
              className="text-4xl min-h-40 md:text-5xl lg:text-6xl font-light leading-snug text-center my-10"
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-start lg:text-center md:text-2xl text-base-content/90 mb-6 leading-relaxed"
            >
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
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-start lg:text-center  md:text-xl text-base-content/80 mb-10 leading-relaxed"
            >
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
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/services">
                <button className="btn btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl">
                  Let’s turn your ideas into reality
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn btn-outline btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow transition-all duration-300 hover:border-primary/80 hover:text-primary">
                  Contact us today
                </button>
              </Link>
            </motion.div>

          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
