import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import AnimatedBackground from '../components/AnimatedBackground';
import Testimonials from '../components/Testimonials';
import ServicesPreview from '../components/ServicesPreview';
import Footer from '../components/Footer';
import ProjectPreview from '../components/ProjectPreview';

function Home() {

  return (
    <main className="bg-base-100 relative text-base-content h-screen overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
      <SEO
        title="Syncrosoft Solutions"
        description="Learn more about Syncrosoft Solutions and our team."
        keywords="Syncrosoft Solutions, About Us, IT Company"
      />
      <AnimatedBackground />
      <div className='relative z-10'>
        <Hero />
        <About />
        <ServicesPreview />
        <ProjectPreview />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}

export default Home;