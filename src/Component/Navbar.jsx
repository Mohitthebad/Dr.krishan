import React, { useEffect, useState } from "react";
import signatureImg from "../assets/signature.png";

const NAV_ITEMS = [
  { label: "Overview", href: "#hero" },
  { label: "Executive Coaching", href: "#coaching" },
  { label: "Industrial Relations Advisory", href: "#industrial-relations" },
  { label: "HR Advisory", href: "#hr-advisory" },
  { label: "Awards & Projects", href: "#awards" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      // Simple scroll spy logic
      const sections = ["hero", "coaching", "industrial-relations", "hr-advisory", "awards", "gallery", "contact"];
      let currentSection = "hero";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near or above the top of viewport
          if (rect.top <= 120) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setMenuOpen(false);
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fbf9f8]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#c4c7c7]/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center px-8 md:px-16 max-w-[1440px] mx-auto">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center"
        >
          <img
            src={signatureImg}
            alt="Dr. Krishan Singh Signature"
            className="h-15 md:h-15 w-auto object-contain transition-all duration-300"
            style={{
              filter: scrolled ? "invert(1)" : "none",
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs tracking-wider font-semibold transition-all duration-300 uppercase relative py-1 ${
                  isActive
                    ? scrolled
                      ? "text-[#775a19]"
                      : "text-[#ffdea5]"
                    : scrolled
                    ? "text-[#444748] hover:text-[#775a19]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${
                      scrolled ? "bg-[#775a19]" : "bg-[#ffdea5]"
                    } transition-all duration-300`}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={`px-5 py-2.5 text-[10px] tracking-widest font-bold uppercase transition-all duration-300 border ${
              scrolled
                ? "bg-black text-white border-black hover:bg-[#775a19] hover:border-[#775a19]"
                : "bg-white text-black border-white hover:bg-transparent hover:text-white"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
        >
          <span
            className={`material-symbols-outlined text-2xl transition-colors ${
              scrolled || menuOpen ? "text-black" : "text-white"
            }`}
          >
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[72px] bg-[#fbf9f8] z-40 lg:hidden transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-lg tracking-widest font-semibold uppercase ${
                isActive ? "text-[#775a19] scale-105" : "text-[#444748] hover:text-black"
              } transition-all`}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="px-8 py-3 bg-black text-white text-xs tracking-widest font-bold uppercase hover:bg-[#775a19] transition-all"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
