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
                    Proven Leadership Backed by <br className="hidden lg:block" />
                    Measurable Global Impact.
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-[#444748] mb-6 leading-relaxed">
                    With over three decades of leadership, Dr. Krishan Singh has delivered massive, measurable outcomes across complex global industries. He spearheaded the human capital infrastructure for a <strong>$1.2 Billion greenfield industrial facility</strong> from inception to full scale, successfully led cross-border HR integration for acquisitions across <strong>India, Dubai, Thailand, and South Africa</strong>, and digitized talent management systems for <strong>45,000+ employees</strong>.
                  </p>
                  <p className="text-lg text-[#444748] mb-6 leading-relaxed">
                    A champion of organizational stability and business continuity, Dr. Singh has negotiated key long-term wage settlements and maintained <strong>100% industrial harmony</strong> across multiple high-stakes manufacturing plants.
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
                    "True leadership is measured not by consultant jargon, but by the tangible stability, growth, and alignment we bring to enterprises."
                  </blockquote>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={400}>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-black"
                    >
                      <CountUp end={30} suffix="+" />
                    </span>
                    <span className="text-[10px] text-[#444748] tracking-widest uppercase font-semibold block mt-1">
                      Years Experience
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-black"
                    >
                      <CountUp end={200} suffix="+" />
                    </span>
                    <span className="text-[10px] text-[#444748] tracking-widest uppercase font-semibold block mt-1">
                      Leaders Coached
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-black"
                    >
                      <CountUp end={75} />
                    </span>
                    <span className="text-[10px] text-[#444748] tracking-widest uppercase font-semibold block mt-1">
                      Wage &amp; Bonus Settlements
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-black"
                    >
                      <CountUp end={48} />
                    </span>
                    <span className="text-[10px] text-[#444748] tracking-widest uppercase font-semibold block mt-1">
                      Long-Term Settlements
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-[#775a19]"
                    >
                      Global
                    </span>
                    <span className="text-[10px] text-[#444748] tracking-widest uppercase font-semibold block mt-1">
                      HR Integration (Thailand &amp; SA)
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
                    Consulting Verticals
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h4 className="font-bold text-black text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#775a19] rotate-45 shrink-0" />
                        Executive Coaching
                      </h4>
                      <p className="text-[#444748] text-xs mt-1 ml-4">
                        Structured, ICF-accredited journeys for leaders and high-potentials.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#775a19] rotate-45 shrink-0" />
                        Industrial Relations Advisory
                      </h4>
                      <p className="text-[#444748] text-xs mt-1 ml-4">
                        Union dynamics, dispute resolutions, and long-term collective wage agreements.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#775a19] rotate-45 shrink-0" />
                        HR Advisory
                      </h4>
                      <p className="text-[#444748] text-xs mt-1 ml-4">
                        Billion-dollar greenfield setup, M&A integrations, and digital workforce transformation.
                      </p>
                    </div>
                  </div>
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