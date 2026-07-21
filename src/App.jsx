import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Experience from './Component/Experience'
import IndustrialRelations from './Component/IndustrialRelations'
import HRAdvisory from './Component/HRAdvisory'
import Awards from './Component/pro'
import Gal from './Component/Gal'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      
    });
  };

  return (
    <div className="relative bg-[#fbf9f8] min-h-screen text-[#1b1c1c]">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-[#775a19] z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Global Navbar */}
      <Navbar />

      {/* Sections with Scoped IDs */}
      <div id="hero">
        <Hero />
      </div>
      <div id="coaching">
        <Experience />
      </div>
      <div id="industrial-relations">
        <IndustrialRelations />
      </div>
      <div id="hr-advisory">
        <HRAdvisory />
      </div>
      <div id="awards">
        <Awards />
      </div>
      <div id="gallery">
        <Gal />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />

      {/* Circular Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-[#c4c7c7]/20 transition-all duration-500 cursor-pointer active:scale-95 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* SVG Progress Circle */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-gray-100 fill-none"
            strokeWidth="2"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-[#775a19] fill-none transition-all duration-100"
            strokeWidth="2"
            strokeDasharray={2 * Math.PI * 20}
            strokeDashoffset={2 * Math.PI * 20 * (1 - scrollProgress / 100)}
          />
        </svg>
        <span className="material-symbols-outlined text-black text-xl z-10">
          arrow_upward
        </span>
      </button>
    </div>
  )
}

export default App
