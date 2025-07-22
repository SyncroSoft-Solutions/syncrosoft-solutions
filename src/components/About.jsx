import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section className="flex items-center justify-center bg-base-100 text-base-content relative overflow-hidden">
      <div className="px-4 sm:px-8">
        <AnimatedSection index={1} >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-center z-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-primary"
            >
              Who We Are
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-start lg:text-center md:text-2xl text-base-content/90 mb-6 leading-relaxed"
            >
              At{" "}
              <span className="text-primary font-bold underline underline-offset-2">
                SyncroSoft Solutions
              </span>
              , we believe technology should do more than just function — it should{" "}
              <span className="text-warning font-semibold">drive transformation</span>. We specialize in building not just software, but{" "}
              <span className="text-warning font-semibold">lasting partnerships</span>{" "}
              rooted in trust, innovation, and measurable results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-start lg:text-center md:text-2xl text-base-content/80 mb-6 leading-relaxed"
            >
              Our expert team of{" "}
              <span className="text-warning font-semibold">developers, designers, and strategists</span>{" "}
              blends technical excellence with creative thinking. From{" "}
              <span className="text-warning font-semibold">responsive websites</span> to{" "}
              <span className="text-warning font-semibold">powerful web applications</span>, we craft solutions that align with your goals and deliver{" "}
              <span className="text-warning font-semibold">real value</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-start lg:text-center md:text-2xl text-base-content/70 mb-10 leading-relaxed"
            >
              With a{" "}
              <span className="text-warning font-semibold">user-first mindset</span> and{" "}
              <span className="text-warning font-semibold">agile development</span> approach, we help businesses grow in a competitive digital landscape. Whether you're{" "}
              <span className="text-warning font-semibold">starting fresh</span> or{" "}
              <span className="text-warning font-semibold">upgrading your systems</span>, we’re your reliable partner at every stage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center"
            >
              <Link to="/about">
                <button className="btn btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl">
                  Learn More About Us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
