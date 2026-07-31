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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBio = () => {
    document.getElementById("biography")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background-soft text-charcoal selection:bg-accent/30 selection:text-white font-sans overflow-x-hidden">
      <main>
        {/* Cinematic Hero Section */}
        <section
          id="hero"
          className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
          <div className="absolute inset-x-0 bottom-0 top-[80px] z-0 overflow-hidden bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 pointer-events-none" />
            <img
              ref={heroBgRef}
              alt="Dr. Krishan Singh Portrait"
              className="w-full h-full object-contain object-center will-change-transform max-h-full"
              style={{ transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
              src={image1}
            />
          </div>

          <div
            onClick={scrollToBio}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="text-[9px] tracking-[0.3em] text-white/70 uppercase font-semibold">
              The Legacy
            </span>
            <div className="animate-bounce">
              <span className="material-symbols-outlined text-accent text-2xl">
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
                  <span className="text-xs text-primary tracking-widest mb-4 block font-semibold">
                    EXECUTIVE PROFILE
                  </span>
                  <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[32px] md:text-[44px] text-charcoal leading-tight"
                  >
                    Leadership That Built Organisation  <br className="hidden lg:block" />
                   Coaching That Builds Leaders
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                    With over three decades of global leadership, Dr. Krishan Singh has driven largescale industrial transformations, built highperforming organizations, and managed complex people strategies across diverse geographies. Today, he channels this executive expertise into consulting, coaching, and mentoring—helping leaders unlock potential and deliver lasting impact.
                  </p>
                  <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                    Renowned for his Industrial Relations acumen, Dr. Singh has resolved complex IR challenges and sustained harmony across highstakes manufacturing plants. His ability to transform confrontational unions into collaborative partners has ensured organizational stability, resilience, and business continuity in volatile environments.
                  </p>
                </div>
              </ScrollReveal>

              {/* Highlighted Quote */}
              <ScrollReveal variant="scale-up" delay={300}>
                <div className="relative py-12 px-8 my-8 border-l-4 border-primary bg-card-bg shadow-sm">
                  <span className="material-symbols-outlined text-primary/30 text-6xl absolute top-4 right-4">
                    format_quote
                  </span>
                  <blockquote
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl italic text-charcoal leading-relaxed relative z-10"
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
                      className="block text-4xl font-bold text-charcoal"
                    >
                      <CountUp end={30} suffix="+" />
                    </span>
                    <span className="text-[10px] text-charcoal/70 tracking-widest uppercase font-semibold block mt-1">
                      Years Experience
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-charcoal"
                    >
                      <CountUp end={150} suffix="+" />
                    </span>
                    <span className="text-[10px] text-charcoal/70 tracking-widest uppercase font-semibold block mt-1">
                      Leaders Coached
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-charcoal"
                    >
                      <CountUp end={75} suffix="+" />
                    </span>
                    <span className="text-[10px] text-charcoal/70 tracking-widest uppercase font-semibold block mt-1">
                       &amp; Bonus Settlements
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-charcoal"
                    >
                      <CountUp end={48} suffix="+"/>
                    </span>
                    <span className="text-[10px] text-charcoal/70 tracking-widest uppercase font-semibold block mt-1">
                      Long-Term Wage Settlements
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="block text-4xl font-bold text-primary"
                    >
                      Global
                    </span>
                    <span className="text-[10px] text-charcoal/70 tracking-widest uppercase font-semibold block mt-1">
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
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img
                    alt="Portrait Detail"
                    className="w-full aspect-[3/4] object-cover object-top hover:scale-105 transition-transform duration-1000"
                    src={heroImg}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={300}>
                <div className="p-8 rounded-xl shadow-sm border border-border-light bg-card-bg backdrop-blur-md">
                  <h3 className="text-xs text-charcoal tracking-widest mb-6 border-b border-border-light pb-4 uppercase font-semibold">
                    Consulting Verticals
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h4 className="font-bold text-charcoal text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rotate-45 shrink-0" />
                        Executive Coaching
                      </h4>
                      <p className="text-charcoal/80 text-xs mt-1 ml-4">
                        Structured, ICF-accredited journeys for leaders and high-potentials.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rotate-45 shrink-0" />
                        Industrial Relations Advisory
                      </h4>
                      <p className="text-charcoal/80 text-xs mt-1 ml-4">
                        Union dynamics, dispute resolutions, and long-term collective wage agreements.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rotate-45 shrink-0" />
                        HR Advisory
                      </h4>
                      <p className="text-charcoal/80 text-xs mt-1 ml-4">
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
