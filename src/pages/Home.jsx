import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';


function Home() {

  return (
    <main className="bg-base-100 relative text-base-content h-screen overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
      <SEO
        title="Syncrosoft Solutions"
        description="Learn more about Syncrosoft Solutions and our team."
        keywords="Syncrosoft Solutions, About Us, IT Company"
      />
      <div className='relative z-10'>
        <AnimatedBackground />
      </div>
      <Hero />
      <About />
      <Footer />
    </main>
  );
}

export default Home;