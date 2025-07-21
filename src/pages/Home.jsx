import React from 'react'
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import funchatImg from '../assets/projects/FUNCHAT.png';
import cwfImg from '../assets/projects/CWF.png';

function Home() {
  return (
    <div>
      <SEO
        title="Syncrosoft Solutions"
        description="Learn more about Syncrosoft Solutions and our team."
        keywords="Syncrosoft Solutions, About Us, IT Company"
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-4 py-20 md:py-32 bg-base-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-center z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight mb-6">
            Building Digital Solutions That Empower Your Growth
          </h1>
          <p className="text-lg md:text-xl text-base-content/80 mb-6">
            At <span className="text-primary font-semibold">SyncroSoft Solutions</span>, we don’t just develop websites. We create meaningful digital experiences that move businesses forward. Whether you’re launching a startup or scaling an enterprise, our custom-built web solutions are designed to fuel your success.
          </p>
          <p className="text-base md:text-lg text-base-content/70 mb-8">
            From static websites to dynamic web platforms, our expert team delivers performance-driven, scalable, and user-focused products tailored to your unique goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/services">
              <button className="btn btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow-lg hover:scale-105 transition-transform">
                <span role="img" aria-label="rocket">🚀</span> Let’s turn your ideas into reality
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-outline btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow hover:scale-105 transition-transform">
                <span role="img" aria-label="point right">👉</span> Contact us today
              </button>
            </Link>
          </div>
          <div className="text-base-content/60 text-sm md:text-base">
            <span role="img" aria-label="point right">👉</span> <Link to="/services" className="text-primary underline hover:text-accent transition-colors">Explore our services</Link> or <Link to="/contact" className="text-primary underline hover:text-accent transition-colors">contact us today</Link> to get started
          </div>
        </motion.div>
        {/* Subtle background shapes for aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl z-0"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
          className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-gradient-to-tr from-secondary via-primary to-accent rounded-full blur-3xl z-0"
        />
      </section>
      {/* About Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-base-200 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-center z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Who We Are</h2>
          <p className="text-lg md:text-xl text-base-content/80 mb-6">
            At <span className="text-primary font-semibold">SyncroSoft Solutions</span>, we believe technology should do more than just function. It should drive transformation. That’s why we specialize in building not just software, but lasting partnerships rooted in trust, innovation, and measurable results.
          </p>
          <p className="text-base md:text-lg text-base-content/70 mb-4">
            Our team of developers, designers, and strategists combines technical excellence with creative thinking to deliver high-impact digital solutions. From responsive websites to powerful web applications, we focus on delivering solutions that align with your business objectives and deliver real value.
          </p>
          <p className="text-base md:text-lg text-base-content/70 mb-8">
            With a user-first mindset and agile development practices, we help businesses thrive in a competitive digital landscape. Whether you’re just starting out or looking to upgrade, we’re here to guide you every step of the way.
          </p>
          <div className="text-primary text-lg font-semibold flex items-center justify-center gap-2">
            <span role="img" aria-label="handshake">🤝</span> Your vision. Our code. One powerful solution
          </div>
        </motion.div>
        {/* Subtle background for About aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.10, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl z-0"
        />
      </section>
      {/* Our Services Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-base-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-center z-10 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-base-content/80 mb-6">
            Web Development and Digital Solutions Tailored to Your Needs
          </p>
          <p className="text-base md:text-lg text-base-content/70">
            At <span className="text-primary font-semibold">SyncroSoft Solutions</span>, we provide end-to-end web development services designed to help your business thrive in the digital world
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl z-10"
        >
          {/* Static Website Development */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
            }}
            className="card bg-base-200 shadow-lg p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Static Website Development</h3>
            <p className="text-base-content/80 text-sm mb-2">Clean, fast, and SEO-optimized websites built for businesses that need a strong online presence without complex features</p>
          </motion.div>
          {/* Dynamic Website Development */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 } }
            }}
            className="card bg-base-200 shadow-lg p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Dynamic Website Development</h3>
            <p className="text-base-content/80 text-sm mb-2">Custom platforms with interactive elements and backend integration designed for flexibility and engagement</p>
          </motion.div>
          {/* Domain Registration */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } }
            }}
            className="card bg-base-200 shadow-lg p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Domain Registration</h3>
            <p className="text-base-content/80 text-sm mb-2">Quick and hassle-free domain name registration to get your website up and running smoothly</p>
          </motion.div>
          {/* Website Redesign */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 } }
            }}
            className="card bg-base-200 shadow-lg p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Website Redesign</h3>
            <p className="text-base-content/80 text-sm mb-2">Give your current site a modern refresh with updated visuals, better user experience, and improved performance</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="max-w-2xl text-center mt-12 text-base md:text-lg text-base-content/70 z-10"
        >
          Whatever your goal, our team delivers efficient, reliable, and affordable digital solutions to help you succeed online
        </motion.div>
        {/* Subtle background for Services aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-secondary via-primary to-accent rounded-full blur-3xl z-0"
        />
      </section>
      {/* Our Projects Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-base-200 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-center z-10 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Our Projects</h2>
          <p className="text-lg md:text-xl text-base-content/80 mb-6">See What We've Built</p>
          <p className="text-base md:text-lg text-base-content/70">
            We take pride in delivering results-driven solutions for clients across industries. Our portfolio showcases a range of projects, from simple websites to complex web applications.<br/>
            Each project is built with precision, creativity, and a commitment to quality.
          </p>
        </motion.div>
        {/* Project Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl z-10"
        >
          {/* Project 1 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
            className="group relative rounded-xl border border-base-content/10 bg-base-100/80 backdrop-blur-lg shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            whileHover={{ y: -6 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={funchatImg}
                alt="Fun Chat"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold z-20">Fun Chat</h3>
            </div>
            <div className="p-5 space-y-3">
              <p className="text-base-content/80 text-sm leading-relaxed font-medium">
                A modern MERN-based chat platform with real-time WebSockets, authentication and private routes.
              </p>
            </div>
          </motion.div>
          {/* Project 2 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 } } }}
            className="group relative rounded-xl border border-base-content/10 bg-base-100/80 backdrop-blur-lg shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            whileHover={{ y: -6 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={cwfImg}
                alt="CWF"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold z-20">CWF</h3>
            </div>
            <div className="p-5 space-y-3">
              <p className="text-base-content/80 text-sm leading-relaxed font-medium">
                A real-time MERN chat app with secure authentication, protected routes, and active user tracking.
              </p>
            </div>
          </motion.div>
        </motion.div>
        {/* Subtle background for Projects aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.10, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl z-0"
        />
      </section>
      {/* Our Team Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-base-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-center z-10 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Our Team</h2>
          <p className="text-lg md:text-xl text-base-content/80 mb-6">The People Behind the Innovation</p>
          <p className="text-base md:text-lg text-base-content/70 mb-4">
            At <span className="text-primary font-semibold">SyncroSoft Solutions</span>, our strength lies in our people. We are a team of passionate developers, creative designers, and strategic thinkers dedicated to building technology that works.
          </p>
          <p className="text-base md:text-lg text-base-content/70 mb-4">
            Collaboration, innovation, and transparency are at the heart of everything we do. Our team works closely with clients to understand their goals and bring their ideas to life with smart, scalable solutions.
          </p>
          <div className="text-primary text-lg font-semibold flex items-center justify-center gap-2 mt-4 mb-10">
            Together, we turn vision into value
          </div>

          {/* Team Faces Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center place-content-center mt-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-primary/20 p-2 mb-2">
                <svg className="w-20 h-20 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#6366F1"/>
                  <ellipse cx="50" cy="60" rx="25" ry="18" fill="#fff"/>
                  <circle cx="50" cy="45" r="18" fill="#fff"/>
                </svg>
              </span>
              <div className="font-semibold text-base-content">Ajay Kandhare</div>
              <div className="text-sm text-base-content/70">Full Stack Developer</div>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-secondary/20 p-2 mb-2">
                <svg className="w-20 h-20 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#F59E42"/>
                  <ellipse cx="50" cy="60" rx="25" ry="18" fill="#fff"/>
                  <circle cx="50" cy="45" r="18" fill="#fff"/>
                </svg>
              </span>
              <div className="font-semibold text-base-content">Samarth Kanthale</div>
              <div className="text-sm text-base-content/70">Full Stack Developer</div>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-accent/20 p-2 mb-2">
                <svg className="w-20 h-20 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#10B981"/>
                  <ellipse cx="50" cy="60" rx="25" ry="18" fill="#fff"/>
                  <circle cx="50" cy="45" r="18" fill="#fff"/>
                </svg>
              </span>
              <div className="font-semibold text-base-content">Rutika Ekshinge</div>
              <div className="text-sm text-base-content/70">Project Manager</div>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-info/20 p-2 mb-2">
                <svg className="w-20 h-20 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#3B82F6"/>
                  <ellipse cx="50" cy="60" rx="25" ry="18" fill="#fff"/>
                  <circle cx="50" cy="45" r="18" fill="#fff"/>
                </svg>
              </span>
              <div className="font-semibold text-base-content">Sadhana Jadhav</div>
              <div className="text-sm text-base-content/70">Social Media Manager</div>
            </div>
            {/* Team Member 5 */}
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-info/20 p-2 mb-2">
                <svg className="w-20 h-20 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#3B82F6"/>
                  <ellipse cx="50" cy="60" rx="25" ry="18" fill="#fff"/>
                  <circle cx="50" cy="45" r="18" fill="#fff"/>
                </svg>
              </span>
              <div className="font-semibold text-base-content">Abhishek Jaiswar</div>
              <div className="text-sm text-base-content/70">Full Stack Developer</div>
            </div>
            {/* Team Member 6 */}
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-info/20 p-2 mb-2">
                <svg className="w-20 h-20 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#3B82F6"/>
                  <ellipse cx="50" cy="60" rx="25" ry="18" fill="#fff"/>
                  <circle cx="50" cy="45" r="18" fill="#fff"/>
                </svg>
              </span>
              <div className="font-semibold text-base-content">Sohan Kendre</div>
              <div className="text-sm text-base-content/70">Frontend Developer</div>
            </div>
            {/* Team Member 7 */}
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-info/20 p-2 mb-2">
                <svg className="w-20 h-20 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#3B82F6"/>
                  <ellipse cx="50" cy="60" rx="25" ry="18" fill="#fff"/>
                  <circle cx="50" cy="45" r="18" fill="#fff"/>
                </svg>
              </span>
              <div className="font-semibold text-base-content">Rohit Gaware</div>
              <div className="text-sm text-base-content/70">Data Analyst</div>
            </div>
          </div>
        </motion.div>
        {/* Subtle background for Team aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-gradient-to-tr from-secondary via-primary to-accent rounded-full blur-3xl z-0"
        />
      </section>
      {/* Testimonials Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-base-200 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-center z-10 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Testimonials</h2>
          <p className="text-lg md:text-xl text-base-content/80 mb-6">What Our Clients Say About Us</p>
          <p className="text-base md:text-lg text-base-content/70">
            We’re proud to have built lasting relationships with clients who trust us to deliver high-quality digital products
          </p>
        </motion.div>
        {/* Testimonial Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl z-10"
        >
          {/* Testimonial 1 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
            className="bg-base-100 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-base-content/10"
          >
            <p className="text-lg text-base-content/90 italic mb-4">"Working with SyncroSoft was seamless. They understood our vision and delivered a website that exceeded expectations"</p>
            <div className="font-semibold text-primary">— Client 1., Company 1</div>
          </motion.div>
          {/* Testimonial 2 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 } } }}
            className="bg-base-100 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-base-content/10"
          >
            <p className="text-lg text-base-content/90 italic mb-4">"Professional, creative, and responsive. They transformed our outdated site into a modern platform our users love"</p>
            <div className="font-semibold text-primary">— Client 2., Company 2</div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="max-w-2xl text-center mt-12 text-base md:text-lg text-base-content/70 z-10"
        >
          We value your success as much as our own
        </motion.div>
        {/* Subtle background for Testimonials aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-gradient-to-tr from-primary via-accent to-secondary rounded-full blur-3xl z-0"
        />
      </section>
      {/* Contact Us Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-base-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl text-center z-10 mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl text-base-content/80 mb-6">Let’s Start Your Project</p>
          <p className="text-base md:text-lg text-base-content/70 mb-6">
            We’re here to help you bring your digital vision to life. Whether you have a question, an idea, or a full project in mind, we’d love to hear from you
          </p>
          <div className="flex flex-col gap-3 items-center mb-6">
            <div className="flex items-center gap-2 text-base md:text-lg text-base-content/90">
              <span role="img" aria-label="e-mail">📧</span>
              <span>Email: <a href="mailto:info@syncrosoftsolutions.com" className="text-primary underline hover:text-accent transition-colors">info@syncrosoftsolutions.com</a></span>
            </div>
            <div className="flex items-center gap-2 text-base md:text-lg text-base-content/90">
              <span role="img" aria-label="telephone">📞</span>
              <span>Phone: <a href="tel:8446857060" className="text-primary underline hover:text-accent transition-colors">8446857060</a>, <a href="tel:7559394187" className="text-primary underline hover:text-accent transition-colors">7559394187</a></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <span className="flex items-center gap-2 text-base md:text-lg text-base-content/90">
              <span role="img" aria-label="memo">📝</span>
              <span>Contact Form:</span>
            </span>
            <a href="/contact">
              <button className="btn btn-primary rounded-full px-8 text-base flex items-center gap-2 group shadow-lg hover:scale-105 transition-transform">
                Get in Touch
              </button>
            </a>
          </div>
          <div className="text-base-content/70 text-base mt-8">
            Reach out today and let’s build something amazing together
          </div>
        </motion.div>
        {/* Subtle background for Contact aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-gradient-to-tr from-secondary via-primary to-accent rounded-full blur-3xl z-0"
        />
      </section>
    </div>
  )
}

export default Home