import React, { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const INITIATIVES = [
  {
    icon: "leaderboard",
    title: "HR Strategy",
    text: "Architecting comprehensive business and people strategies aligned with corporate objectives to drive sustainable organizational value.",
    highlight: "Strategic Alignment",
  },
  {
    icon: "hub",
    title: "Organization Development",
    text: "Redesigning and scaling high-performance corporate structures to seamlessly support expansions, greenfield plant setups, and rapid growth.",
    highlight: "Structural Design",
  },
  {
    icon: "stars",
    title: "Leadership Development",
    text: "Establishing structured executive assessment centres, competency frameworks, and mentoring plans for robust talent and succession planning.",
    highlight: "Succession Planning",
  },
  {
    icon: "diversity_3",
    title: "Culture Transformation",
    text: "Leading large-scale cultural redesign, values alignment, and proactive change management to build collaborative, trust-filled workplaces.",
    highlight: "Change Management",
  },
  {
    icon: "badge",
    title: "Talent Management",
    text: "Designing next-generation talent programs, automated tracking systems, and digital HR platforms to unlock potential and retain critical personnel.",
    highlight: "Talent Retention",
  },
  {
    icon: "public",
    title: "Global HR Integration",
    text: "Directing complex international post-merger integrations, with proven experience in Thailand and South Africa overseeing policy and governance harmonization.",
    highlight: "Thailand & South Africa",
  },
];

function MouseFollowCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (max 10 degrees)
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateX = -(y - yc) / (rect.height / 10);
    const rotateY = (x - xc) / (rect.width / 10);

    setRotate({ x: rotateX, y: rotateY });
    setGlowPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered
          ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.1s cubic-bezier(0.25, 1, 0.5, 1)"
          : "transform 0.5s ease, box-shadow 0.5s ease",
      }}
    >
      {/* Spotlight/Glow overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(250px circle at ${glowPos.x}px ${glowPos.y}px, rgba(119, 90, 25, 0.12), transparent 80%)`,
            zIndex: 1,
          }}
        />
      )}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

export default function HRAdvisory() {
  return (
    <div className="font-sans text-base text-charcoal bg-background-soft overflow-x-hidden py-20">
      <main className="max-w-[1140px] mx-auto px-8 md:px-16">
        <ScrollReveal variant="fade-up">
          <div className="flex items-center justify-between mb-12 border-b border-border-light/20 pb-4">
            <div>
              <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
                EXECUTIVE VERTICAL
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[48px] font-bold leading-[1.1] tracking-tight mt-2 text-black"
              >
                HR Advisory
              </h2>
            </div>
            <span className="text-xs font-semibold text-charcoal/70 uppercase hidden sm:inline">
              03 / Human Capital Strategy
            </span>
          </div>
        </ScrollReveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIATIVES.map((init, idx) => (
            <ScrollReveal key={init.title} variant="scale-up" delay={idx * 100}>
              <MouseFollowCard className="p-8 rounded-lg shadow-sm border border-white/30 bg-white/40 backdrop-blur-xl hover:shadow-md hover:border-primary transition-all duration-300 group h-full">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <span className="material-symbols-outlined text-white text-2xl">{init.icon}</span>
                    </div>
                    <span className="text-[10px] tracking-widest font-bold uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {init.highlight}
                    </span>
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                  >
                    {init.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed text-sm">
                    {init.text}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-light/20 flex items-center justify-between text-primary text-xs font-bold tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                  <span>LEARN MORE</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </MouseFollowCard>
            </ScrollReveal>
          ))}
        </div>
      </main>
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}
