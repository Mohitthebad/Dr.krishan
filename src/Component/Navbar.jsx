import React, { useEffect, useState } from "react";
import signatureImg from "../assets/signature.png";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { label: "Overview", href: "#hero" },
  { label: "Executive Coaching", href: "#coaching" },
  { label: "IR Advisory", href: "#industrial-relations" },
  { label: "HR Advisory", href: "#hr-advisory" },
  { label: "Awards & Projects", href: "#awards" },
  { label: "Our Venture", href: "#venture" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      // Simple scroll spy logic
      const sections = ["hero", "coaching", "industrial-relations", "hr-advisory", "awards", "venture", "gallery", "contact"];
      let currentSection = "hero";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
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
      const offset = 80;
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
          ? "bg-background-soft/90 backdrop-blur-md py-4 shadow-sm border-b border-border-light/20"
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
              filter: theme === "dark" ? "invert(1)" : (scrolled ? "invert(1)" : "none"),
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
                className={`text-xs tracking-wider font-semibold transition-all duration-300 uppercase relative py-1 whitespace-nowrap ${
                  isActive
                    ? scrolled
                      ? "text-primary"
                      : "text-accent"
                    : scrolled
                    ? "text-charcoal/80 hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${
                      scrolled ? "bg-primary" : "bg-accent"
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
                ? "bg-primary text-white border-primary hover:bg-black hover:border-black dark:bg-accent dark:text-black dark:border-accent"
                : "bg-white text-black border-white hover:bg-transparent hover:text-white"
            }`}
          >
            Contact
          </a>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === "dark" ? "Switch to White Theme" : "Switch to Black Theme"}
            className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
              scrolled
                ? "border-border-light text-charcoal hover:bg-black/5 dark:hover:bg-white/10"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full border transition-all ${
              scrolled || menuOpen ? "border-border-light text-charcoal" : "border-white/30 text-white"
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <span
              className={`material-symbols-outlined text-2xl transition-colors ${
                scrolled || menuOpen ? "text-charcoal" : "text-white"
              }`}
            >
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[72px] bg-background-soft z-40 lg:hidden transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
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
              className={`text-lg tracking-widest font-semibold uppercase whitespace-nowrap ${
                isActive ? "text-primary scale-105" : "text-charcoal/80 hover:text-charcoal"
              } transition-all`}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="px-8 py-3 bg-primary text-white text-xs tracking-widest font-bold uppercase hover:bg-black transition-all"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
