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
    text: "Helping organizations build agile, future-ready workforces through strategic talent management, leadership development, and organizational excellence.",
    status: "Next-Gen Talent",
    alt: "Modern glass staircase in an executive office atrium",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8OKMLTjbzZd8Jn965876Z3naN5tve5blpCMTsYIztuw9-LQuur-coA5_uVs8c2f5esz12BloEP8Ctd_u6zGF06ukHYiChVfv8VRWA9VmQV6raj3WqrVaevr9qOKgww1AhUQbCs8ebcup0Bj4n7TrqbOCl3NRuM_bH2oXwbgAlLVSJ0BuS-bRzb5vRagEHOI15Kk-eEMzbdl5CTB4r-QIwQAkqlktQcX_N3Ud5pOmUrWfzjlImJwv_fy0RKQzwg0HjXIsQtDaIybQ",
  },
];

const AWARDS = [
  {
    id: 0,
    icon: "military_tech",
    year: "EST. 2017",
    title: "Chairman's Award",
    text: "Chairman’s award in SRF for increasing employee Productivity.",
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
    year: "EST. 2018",
    title: "Best Business HR Award",
    text: "Best Business HR award by HR Association of India 19th January 2018  by honorable Union Minster for women & child Development and Minority Affairs ",
    footer: "HR EXCELLENCE BOARD",
    footerIcon: "stars",
    bg: "bg-card-bg",
    borderColor: "border-secondary",
    accent: "text-secondary",
    accentBorder: "border-secondary",
  },
  
  {
    id: 3,
    icon: "workspace_premium",
    year: "EST. 2024",
    title: "Awarded for inclusion of women employees",
    text: "Awarded for inclusion of women employees in Global Inclusion submit in Delhi ",
    footer: "Global Inclusion submit",
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
