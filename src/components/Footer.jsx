import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";
import { bounceIn, fadeInLeft, fadeInRight } from "../animations/sectionVariants";

const Footer = () => {
  return (
    <footer className="bg-base-300 relative text-base-content border-t border-base-300">
      {/* Animated Header or Intro */}
      <AnimatedSection variants={bounceIn}>
        <div className="text-center py-8 px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-2 text-base-content/70 text-sm md:text-base">
            Connect with us and take your business to the next level.
          </p>
        </div>
      </AnimatedSection>

      {/* Grid Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <AnimatedSection variants={fadeInLeft}>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">SyncroSoft Solutions</h3>
            <p className="text-sm text-base-content/70 leading-relaxed">
              We build secure, scalable, and modern digital solutions tailored for businesses.
              Let’s innovate together and shape the future with tech.
            </p>
          </div>
        </AnimatedSection>

        {/* Quick Links */}
        <div>
          <AnimatedSection variants={fadeInRight}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        {/* Contact Info */}
        <div>
          <AnimatedSection variants={fadeInRight}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-base-content/80">
              <li className="flex items-center gap-2">
                <Mail size={18} />{" "}
                <a href="mailto:info.syncrosoft@gmail.com" className="text-primary underline">
                  info.syncrosoft@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />{" "}
                <a href="tel:+918446857060" className="text-primary underline">
                  +91 84468 57060
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />{" "}
                <a href="tel:+917559394187" className="text-primary underline">
                  +91 75593 94187
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} /> <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </AnimatedSection>
        </div>

        {/* Social Media */}
        <div>
          <AnimatedSection variants={fadeInLeft}>

            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://instagram.com/syncrosoft"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle bg-[#E1306C] hover:opacity-90"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com/syncrosoft"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle bg-[#1DA1F2] hover:opacity-90"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com/company/syncrosoft"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle bg-[#0A66C2] hover:opacity-90"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/SyncroSoft-Solutions"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle bg-gray-800 hover:opacity-90"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-base-300 pt-6 pb-4 text-center text-sm text-base-content/60">
        &copy; {new Date().getFullYear()} <span className="text-primary">SyncroSoft Solutions</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
