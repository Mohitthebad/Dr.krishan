import React, { useEffect, useRef, useState } from "react";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

export default function ExecutivePortfolio() {
  const heroBgRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const heroImg = image;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      if (heroBgRef.current && y < window.innerHeight) {
        const zoom = 1.15 + y * 0.0003;
        const parallax = y * 0.4;
        heroBgRef.current.style.transform = `scale(${zoom}) translateY(${parallax}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBio = () => {
    document.getElementById("biography")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c] selection:bg-[#ffdea5] selection:text-[#261900] font-sans overflow-x-hidden">
      <main>
        {/* Cinematic Hero Section */}
        <section
          id="hero"
          className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
            <img
              ref={heroBgRef}
              alt="Dr. Krishan Singh Portrait"
              className="w-full h-full object-cover object-center scale-[1.15] will-change-transform"
              style={{ transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
              src={image1}
              />
          </div>

          <div className="relative z-20 text-center px-8 md:px-16 max-w-5xl">
            <div className="mb-4 overflow-hidden">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className=" bg-transparent text-[56px] md:text-[96px] text-white leading-none tracking-tight animate-[fadeUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards] opacity-0"
              >
                Dr. Krishan Singh
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-xs tracking-[0.5em] text-[#e9c176] uppercase font-semibold animate-[fadeUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards] opacity-0">
                Transformative HR Leader
              </p>
            </div>
          </div>

          <div
            onClick={scrollToBio}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-[9px] tracking-[0.3em] text-white/50 uppercase font-semibold">
              The Legacy
            </span>
            <div className="animate-bounce">
              <span className="material-symbols-outlined text-[#e9c176] text-3xl">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section
          id="biography"
          className="py-20 px-8 md:px-16 max-w-[1140px] mx-auto overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Editorial Content */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6 order-2 md:order-1">
              <ScrollReveal variant="fade-up">
                <div className="mb-6">
                  <span className="text-xs text-[#775a19] tracking-widest mb-4 block font-semibold">
                    EXECUTIVE PROFILE
                  </span>
                  <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[32px] md:text-[44px] text-black leading-tight"
                  >
                    Legacy of Strategic Leadership <br className="hidden lg:block" />
                    &amp; Human Capital Excellence.
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-[#444748] mb-6 leading-relaxed">
                    Dr. Krishan Singh is a transformative human resources executive with over
                    three decades of experience leading large-scale organizational change, building
                    high-performance cultures, and steering enterprises through complex industrial
                    relations landscapes. His leadership philosophy blends strategic rigor with a
                    deeply human-centric approach, empowering thousands of employees while guiding
                    boards and executive teams through periods of significant transformation.
                  </p>
                </div>
              </ScrollReveal>

              {/* Highlighted Quote */}
              <ScrollReveal variant="scale-up" delay={300}>
                <div className="relative py-12 px-8 my-8 border-l-4 border-[#775a19] bg-[#f5f3f3] shadow-sm">
                  <span className="material-symbols-outlined text-[#775a19]/30 text-6xl absolute top-4 right-4">
                    format_quote
                  </span>
                  <blockquote
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl italic text-black leading-relaxed relative z-10"
                  >
                    "Transforming organizational culture through strategic vision and
                    human-centric leadership."
                  </blockquote>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={400}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-5xl font-bold text-black"
                    >
                      <CountUp end={30} suffix="+" />
                    </span>
                    <span className="text-xs text-[#444748] tracking-widest uppercase font-semibold">
                      Years Experience
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-5xl font-bold text-black"
                    >
                      <CountUp end={4} suffix="k+" />
                    </span>
                    <span className="text-xs text-[#444748] tracking-widest uppercase font-semibold">
                      Employees Led
                    </span>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-5xl font-bold text-black"
                    >
                      <CountUp end={12} />
                    </span>
                    <span className="text-xs text-[#444748] tracking-widest uppercase font-semibold">
                      Global Awards
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Detail Portrait */}
            <div className="md:col-span-5 lg:col-span-4 sticky top-32 order-1 md:order-2">
              <ScrollReveal variant="scale-up" delay={200}>
                <div className="relative rounded-lg overflow-hidden mb-6 shadow-2xl group">
                  <div className="absolute inset-0 bg-[#775a19]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img
                    alt="Portrait Detail"
                    className="w-full aspect-[3/4] object-cover object-top hover:scale-105 transition-transform duration-1000"
                    src={heroImg}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={300}>
                <div
                  style={{
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    backgroundColor: "rgba(255,255,255,0.7)",
                  }}
                  className="p-8 rounded-xl shadow-sm border border-[#c4c7c7]/20"
                >
                  <h3 className="text-xs text-black tracking-widest mb-6 border-b border-[#c4c7c7]/30 pb-4 uppercase font-semibold">
                    Core Expertise
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Strategic Change Management",
                      "Organizational Culture Design",
                      "Executive Talent Acquisition",
                      "Digital HR Transformation",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#775a19] rotate-45 shrink-0" />
                        <span className="text-[#444748] font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

 

      <style>{`
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}