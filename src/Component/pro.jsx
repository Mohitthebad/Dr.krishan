import React, { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const PROJECTS = [
  {
    id: "plant",
    tag: "Manufacturing",
    title: "Greenfield Plant Setup",
    text: "Orchestrating the human capital infrastructure for a $1.2B industrial facility from inception to full operational scale.",
    status: "Phase I Completed",
    alt: "Futuristic greenfield manufacturing plant",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0QkNIRspeVmwTRgKPYqHs8AtlekuYbGhyHp9m-1UaLI2hdV1jr5AeGL6rPg-FUTLxW7ciC3LWAyDTR5PTCtezGWnyeyMH1rwIRZiDZHu1tpPW_asXZkda7gxXlknsWqpMIe2bD0I3ZAwjpRn33xBw2AUIq7V8AvQtEGLc_VT9A1JGbz3sMnuJpC1D2ijhcjZZkf04LH8wyesEyxwCrHxE1E6pspa-QbrBlNrmNTDE1Pn9lLc_Vx_efk_j-fOtkfUwGhsqJ1hKuDA",
  },
  {
    id: "integration",
    tag: "M&A Strategy",
    title: "Global HR Integration",
    text: "Harmonizing workforce policies and organizational structures across 14 countries during a multi-billion dollar merger.",
    status: "Global Synergy focus",
    alt: "Corporate boardroom overlooking a city skyline",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuqRmCIBjPhNrBT3IDt1JYUIGWFxnCtKWByszTVf9d1bTTeOfA_-FvNjztJxxrFjPrcb2JPVkSLkKrF2crAEzeCHYmT6Lci6ZMHTCLZi3YmkurSFdBe8qWHPyeYnjUiUq-Fqd_KBJQY38yOI9X_-LTNfHJIPL4T554QEYfaMaGV7_TbJTKbEYYY5qiBOOsLeKUcSoHz-ID0dQEmJRJlhOhfqWiBAnOMIC4o9pNjxLdJCq6jiRSkxBQ7Uwnz3tAyFHVW3cqYqWj5iQ",
  },
  {
    id: "transformation",
    tag: "Digitalization",
    title: "Workforce Transformation",
    text: "Implementing AI-driven talent management systems to future-proof 45,000+ employees against industry disruption.",
    status: "Next-Gen Talent",
    alt: "Modern glass staircase in an executive office atrium",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8OKMLTjbzZd8Jn965876Z3naN5tve5blpCMTsYIztuw9-LQuur-coA5_uVs8c2f5esz12BloEP8Ctd_u6zGF06ukHYiChVfv8VRWA9VmQV6raj3WqrVaevr9qOKgww1AhUQbCs8ebcup0Bj4n7TrqbOCl3NRuM_bH2oXwbgAlLVSJ0BuS-bRzb5vRagEHOI15Kk-eEMzbdl5CTB4r-QIwQAkqlktQcX_N3Ud5pOmUrWfzjlImJwv_fy0RKQzwg0HjXIsQtDaIybQ",
  },
];

const AWARDS = [
  {
    id: 0,
    icon: "military_tech",
    year: "EST. 2021",
    title: "Chairman's Award",
    text: "For exceptional contribution to organizational restructuring and value creation during the transition period.",
    footer: "RECIPIENT: DR. K. SINGH",
    footerIcon: "verified",
    bg: "bg-card-bg",
    borderColor: "border-primary",
    accent: "text-primary",
    accentBorder: "border-primary",
  },
  {
    id: 1,
    icon: "award_star",
    year: "EST. 2019",
    title: "Best Business HR Award",
    text: "Recognized for aligning HR metrics with bottom-line business outcomes in a highly competitive sector.",
    footer: "HR EXCELLENCE BOARD",
    footerIcon: "stars",
    bg: "bg-card-bg",
    borderColor: "border-secondary",
    accent: "text-secondary",
    accentBorder: "border-secondary",
  },
  {
    id: 2,
    icon: "workspace_premium",
    year: "EST. 2022",
    title: "Top 50 HR Leaders",
    text: "Inducted into the Global Elite Circle for pioneering digital transformation in human resources.",
    footer: "INTERNATIONAL HR SUMMIT",
    footerIcon: "tonality",
    bg: "bg-card-bg",
    borderColor: "border-accent",
    accent: "text-accent",
    accentBorder: "border-accent",
  },
];

function getAwardStyle(relativeIndex) {
  if (relativeIndex === 0) {
    return { zIndex: 30, transform: "rotate(0deg) translateZ(0) scale(1)", opacity: 1 };
  }
  if (relativeIndex === 1) {
    return {
      zIndex: 20,
      transform: "rotate(-4deg) translateX(-25px) translateZ(-40px) scale(0.95)",
      opacity: 0.7,
    };
  }
  return {
    zIndex: 10,
    transform: "rotate(4deg) translateX(25px) translateZ(-80px) scale(0.9)",
    opacity: 0.4,
  };
}

export default function ProjectsAndAwards() {
  const sliderRef = useRef(null);
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);
  const totalAwards = AWARDS.length;

  const scrollSlider = (amount) => {
    sliderRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  const nextAward = () => setActiveAwardIndex((i) => (i + 1) % totalAwards);
  const prevAward = () => setActiveAwardIndex((i) => (i - 1 + totalAwards) % totalAwards);

  return (
    <div className="bg-background-soft text-charcoal font-sans selection:bg-accent/30 selection:text-charcoal min-h-screen">
      <main className="py-20">
        {/* Section: Projects */}
        <section id="projects" className="px-8 md:px-16 max-w-[1140px] mx-auto mb-20">
          <ScrollReveal variant="fade-up">
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between border-b border-primary/20 pb-4">
              <div>
                <span className="text-xs tracking-widest font-semibold text-accent mb-2 block">
                  STRATEGIC ARCHITECTURE
                </span>
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[32px] md:text-[48px] font-semibold text-charcoal"
                >
                  Global Initiatives
                </h2>
              </div>
              <div className="hidden md:flex gap-4">
              <button
                onClick={() => scrollSlider(-400)}
                className="w-12 h-12 rounded-full border border-border-light text-charcoal flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => scrollSlider(400)}
                className="w-12 h-12 rounded-full border border-border-light text-charcoal flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

          <div
            ref={sliderRef}
            className="flex flex-col md:flex-row gap-8 overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PROJECTS.map((p, idx) => (
              <ScrollReveal key={p.id} variant="fade-up" delay={idx * 150} className="min-w-full md:min-w-[45%] flex-shrink-0 snap-start">
                <div className="group cursor-pointer h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden mb-4 rounded-lg">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                    <img
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700"
                      alt={p.alt}
                      src={p.src}
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="bg-card-bg/90 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest text-charcoal uppercase rounded">
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-grow">
                    <h3
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-2xl font-semibold text-charcoal group-hover:text-primary transition-colors"
                    >
                      {p.title}
                    </h3>
                    <p className="text-charcoal/80 max-w-md flex-grow">{p.text}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-px w-8 bg-primary" />
                      <span className="text-[11px] font-bold tracking-tighter text-primary uppercase italic">
                        {p.status}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Section: Awards (Animated Card Stack) */}
        <section id="awards" className="bg-black dark:bg-card-bg/50 border-t border-border-light py-20 overflow-hidden">
          <div className="px-8 md:px-16 max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 mb-8 lg:mb-0">
              <ScrollReveal variant="slide-left">
                <span className="text-xs tracking-widest font-semibold text-accent mb-4 block">
                  DISTINCTIONS
                </span>
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[32px] md:text-[48px] font-semibold text-white dark:text-charcoal mb-6 leading-tight"
                >
                  Recognition of Leadership
                </h2>
                <p className="text-lg text-border-light/80 dark:text-charcoal/80 mb-6">
                  A chronicle of professional excellence, awarded by industry boards for
                  pioneering human-centric business strategies and executive impact.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={prevAward}
                    className="p-3 border border-border-light/30 text-white dark:text-charcoal rounded-full hover:bg-accent hover:text-black transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <button
                    onClick={nextAward}
                    className="p-3 border border-border-light/30 text-white dark:text-charcoal rounded-full hover:bg-accent hover:text-black transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Card Stack */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="scale-up" delay={200} className="w-full">
                <div
                  className="relative h-[450px] flex items-center justify-center w-full"
                  style={{ perspective: "1000px" }}
                >
                  {AWARDS.map((award) => {
                    const relativeIndex = (award.id - activeAwardIndex + totalAwards) % totalAwards;
                    const style = getAwardStyle(relativeIndex);
                    return (
                      <div
                        key={award.id}
                        className={`absolute w-[320px] md:w-[430px] h-[280px] md:h-[350px] ${award.bg} rounded-lg shadow-2xl p-6 border-t-8 ${award.borderColor} flex flex-col justify-between border border-border-light`}
                        style={{
                          ...style,
                          transition:
                            "transform 0.6s cubic-bezier(0.23,1,0.32,1), opacity 0.6s ease",
                        }}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span
                              className={`material-symbols-outlined ${award.accent} text-5xl`}
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              {award.icon}
                            </span>
                            <span className="text-xs md:text-sm text-charcoal/60 font-bold">{award.year}</span>
                          </div>
                          <h3
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="text-charcoal mb-2 text-2xl md:text-3xl font-semibold"
                          >
                            {award.title}
                          </h3>
                          <p className="text-charcoal/80 text-base md:text-lg leading-relaxed">{award.text}</p>
                        </div>
                        <div className="border-t border-border-light/30 pt-4 flex justify-between items-center">
                          <span className="text-sm md:text-base text-charcoal tracking-widest font-bold">
                            {award.footer}
                          </span>
                          <div
                            className={`w-9 h-9 md:w-10 h-10 rounded-full border ${award.accentBorder} flex items-center justify-center`}
                          >
                            <span className={`material-symbols-outlined ${award.accent} text-sm md:text-base`}>
                              {award.footerIcon}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        #projects div[ref]::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}