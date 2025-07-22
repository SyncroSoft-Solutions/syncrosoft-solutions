import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content border-t border-base-300 px-6 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-3">SyncroSoft Solutions</h3>
          <p className="text-sm text-base-content/70 leading-relaxed">
            We build secure, scalable, and modern digital solutions tailored for businesses. Let’s innovate together and shape the future with tech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-base-content/80">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:info.syncrosoft@gmail.com" className="text-primary underline">info.syncrosoft@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+918446857060" className="text-primary underline">+91 84468 57060</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+917559394187" className="text-primary underline">+91 75593 94187</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Pune, Maharashtra, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-white">
            <a href="https://instagram.com/syncrosoft" target="_blank" rel="noreferrer" className="btn btn-sm btn-circle bg-[#E1306C] hover:opacity-90">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com/syncrosoft" target="_blank" rel="noreferrer" className="btn btn-sm btn-circle bg-[#1DA1F2] hover:opacity-90">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com/company/syncrosoft" target="_blank" rel="noreferrer" className="btn btn-sm btn-circle bg-[#0A66C2] hover:opacity-90">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/SyncroSoft-Solutions" target="_blank" rel="noreferrer" className="btn btn-sm btn-circle bg-gray-800 hover:opacity-90">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-base-300 mt-12 pt-6 text-center text-sm text-base-content/60">
        &copy; {new Date().getFullYear()} SyncroSoft Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
