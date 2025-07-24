import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { bounceIn} from "../animations/sectionVariants";

const About = () => {
  return (
    <section className="flex items-center justify-center bg-base-100 text-base-content relative overflow-hidden">
      <div className="px-4 sm:px-8 py-10 max-w-6xl mx-auto">
        <div className="text-center z-10">
        <AnimatedSection variants={bounceIn}>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
            Who We Are
          </h2>
        </AnimatedSection>

          {/* Grid Text Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
            <AnimatedSection variants={bounceIn}>
            <p className="text-lg md:text-xl text-base-content/90 leading-relaxed">
              At{" "}
              <span className="text-primary font-bold underline underline-offset-2">
                SyncroSoft Solutions
              </span>
              , we believe technology should do more than just function — it should{" "}
              <span className="text-warning font-semibold">drive transformation</span>. We specialize in building not just software, but{" "}
              <span className="text-warning font-semibold">lasting partnerships</span>{" "}
              rooted in trust, innovation, and measurable results.
            </p>
            </AnimatedSection>

            <AnimatedSection variants={bounceIn}>
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed">
              Our expert team of{" "}
              <span className="text-warning font-semibold">developers, designers, and strategists</span>{" "}
              blends technical excellence with creative thinking. From{" "}
              <span className="text-warning font-semibold">responsive websites</span> to{" "}
              <span className="text-warning font-semibold">powerful web applications</span>, we craft solutions that align with your goals and deliver{" "}
              <span className="text-warning font-semibold">real value</span>.
            </p>
            </AnimatedSection>

            <AnimatedSection variants={bounceIn}>
            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed">
              With a{" "}
              <span className="text-warning font-semibold">user-first mindset</span> and{" "}
              <span className="text-warning font-semibold">agile development</span> approach, we help businesses grow in a competitive digital landscape. Whether you're{" "}
              <span className="text-warning font-semibold">starting fresh</span> or{" "}
              <span className="text-warning font-semibold">upgrading your systems</span>, we’re your reliable partner at every stage.
            </p>
            </AnimatedSection>
          </div>

          {/* Button */}
          <AnimatedSection variants={bounceIn}>
          <div className="flex justify-center mt-10">
            <Link to="/about">
              <button className="btn btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl">
                Learn More About Us
              </button>
            </Link>
          </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};

export default About;
