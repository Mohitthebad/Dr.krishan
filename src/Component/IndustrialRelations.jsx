import React, { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import handshake from "../assets/handshake.png";
import pens from "../assets/pens.png";

const EXPERTISE_CARDS = [
  {
    icon: "handshake",
    title: "Collaborative Partnerships",
    text: "Transforming traditionally confrontational trade unions into collaborative partnerships aligned with mutual growth.",
  },
  {
    icon: "groups",
    title: "Management-Workforce Trust",
    text: "Building robust, transparent bridges of trust and respect between management teams and the frontline workforce.",
  },
  {
    icon: "gavel",
    title: "Long-Term Harmony",
    text: "Upholding complete industrial harmony and operational continuity, preventing potential strikes and work stoppages.",
  },
  {
    icon: "volunteer_activism",
    title: "Sustainable Employee Relations",
    text: "Designing sustainable employee relations frameworks that promote long-term stability and workforce commitment.",
  },
];

const METRICS = [
  { value: "100%", label: "Industrial Harmony Restored" },
  { value: "75", label: "Wage & Bonus Settlements" },
  { value: "48", label: "Long-Term Settlements" },
];

const REDRESSAL_FOCUS = [
  "Grievance Redressal Frameworks",
  "Labour Code Readiness",
  "Statutory Compliance Audits",
  "Productivity Enhancement",
];

const REGIONS = ["INDIA", "DUBAI", "THAILAND", "SOUTH AFRICA"];

const glassEffect =
  "bg-white/30 backdrop-blur-xl border border-white/30";

export default function IndustrialRelations() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c] font-sans selection:bg-[#775a19]/20 min-h-screen">
      <main className="py-20 px-8 md:px-16 max-w-[1140px] mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
              <ScrollReveal variant="fade-up">
                <span className="text-[#775a19] text-xs font-semibold mb-2 block">
                  EXECUTIVE FOCUS
                </span>
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[48px] font-bold mb-4 leading-none tracking-tight"
                >
                  Industrial Relations <br />
                  Advisory
                </h1>
                <p className="text-lg text-[#444748] max-w-2xl leading-relaxed">
                  We help organizations improve productivity, streamline operations, and achieve measurable business outcomes across complex industrial ecosystems.
                </p>
              </ScrollReveal>
            </div>
            <div className="col-span-12 md:col-span-4 mt-6 md:mt-0">
              <ScrollReveal variant="scale-up" delay={200}>
                <div className={`${glassEffect} p-8 rounded-lg shadow-2xl shadow-black/5 relative overflow-hidden group`}>
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl">factory</span>
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg font-bold text-[#775a19] mb-4"
                  >
                    Redressal Focus
                  </h3>
                  <ul className="space-y-3">
                    {REDRESSAL_FOCUS.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#775a19] rotate-45 shrink-0" />
                        <span className="text-[#444748] font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Main Narrative Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Core Expertise (Bento Style) */}
          <div className="col-span-12 md:col-span-8">
            <ScrollReveal variant="fade-up">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-semibold mb-6 border-b border-[#c4c7c7]/30 pb-4"
              >
                Core Expertise
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EXPERTISE_CARDS.map((card, idx) => (
                <ScrollReveal key={card.title} variant="fade-up" delay={idx * 100}>
                  <div className="bg-white p-8 border border-[#c4c7c7]/10 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-12 h-12 bg-[#775a19]/10 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-[#775a19]">{card.icon}</span>
                    </div>
                    <h4
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-xl font-semibold mb-2"
                    >
                      {card.title}
                    </h4>
                    <p className="text-[#444748]">{card.text}</p>
                  </div>
                </ScrollReveal>
              ))}

              {/* Full Width Achievement Highlight */}
              <div className="col-span-1 md:col-span-2">
                <ScrollReveal variant="scale-up" delay={200}>
                  <div className={`${glassEffect} p-10 border border-[#c4c7c7]/20 relative`}>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="text-center md:text-left">
                        <h3
                          style={{ fontFamily: "'Playfair Display', serif" }}
                          className="text-2xl font-semibold mb-2"
                        >
                          Global Operations
                        </h3>
                        <p className="text-lg text-[#444748] mb-4">
                          Successfully led HR integration of acquired businesses across India,
                          Dubai, Thailand, and South Africa, harmonizing diverse cultures and
                          governance frameworks.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {REGIONS.map((region) => (
                            <span
                              key={region}
                              className="px-4 py-1 bg-[#e4e2e2] text-xs font-semibold rounded-full text-[#775a19]"
                            >
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Legacy & Metrics */}
          <div className="col-span-12 md:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Performance Metrics */}
              <ScrollReveal variant="fade-up" delay={200}>
                <div className="bg-black p-8 text-white shadow-xl">
                  <span className="text-[#e9c176] text-xs font-semibold tracking-widest block mb-4 uppercase">
                    Proven Impact
                  </span>
                  <div className="space-y-6">
                    {METRICS.map((m, i) => (
                      <div key={m.label} className={i > 0 ? "border-t border-white/20 pt-6" : ""}>
                        <h4
                          style={{ fontFamily: "'Playfair Display', serif" }}
                          className="text-[40px] font-bold leading-none text-[#ffdea5]"
                        >
                          {m.value}
                        </h4>
                        <p className="text-xs font-semibold text-[#858383] uppercase tracking-widest mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

             

              {/* Image with Narrative */}
              <ScrollReveal variant="scale-up" delay={400}>
                <div className="relative h-64 overflow-hidden rounded-lg group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Industrial manufacturing plant interior"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBjrfszphpLWbMNnlraXO3AiAbTMl0X0ivvVEdzCLx79PT3lWpnfwzfx7EC13JqDSAZCjkc61BA1okH7c2jjApiMlo4K-W4AmHlSjzybU7BPxt9dqR4Cox1PVlk8a036mnyOrOlDxte_-MFHWqNoaYugQxFkeMbQLjBZigiKzXIUt7mviLgtcb7F4gYVil7alj8X9ysx1y_KB-bP3WqL_ywLp_s6U6UhNTS7XFS4IpBI8WjlK6sj9WAeHh0TbQT-UHPoiJui1a5Kc"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white text-[10px] font-semibold tracking-widest">
                      OPERATIONAL EXCELLENCE PORTFOLIO
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="mt-20 pt-20 border-t border-[#c4c7c7]/30">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <ScrollReveal variant="slide-left">
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[48px] font-bold mb-4"
                >
                  Strategic Resolution &amp; Settlements
                </h2>
                <p className="text-lg text-[#444748] mb-6 leading-relaxed">
                  Dr. Singh has successfully negotiated complex long-term settlements,
                  resolved major industrial disputes, and extinguished potential strikes
                  before they impacted production. By establishing unified compliance
                  governance across multiple manufacturing units, he minimized corporate
                  risk while strengthening business continuity in volatile markets.
                </p>
                <button className="bg-black text-white px-8 py-3 text-xs font-semibold tracking-widest flex items-center gap-2 hover:bg-[#775a19] transition-colors">
                  VIEW LEADERSHIP HISTORY
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </ScrollReveal>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-[#efeded] relative group overflow-hidden">
                <ScrollReveal variant="scale-up" delay={200} className="w-full h-full">
                  <img
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    alt="Business handshake over a boardroom table"
                    src={handshake}
                  />
                </ScrollReveal>
              </div>
              <div className="aspect-square bg-[#efeded] relative group overflow-hidden mt-8">
                <ScrollReveal variant="scale-up" delay={400} className="w-full h-full">
                  <img
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    alt="Flat paper pens display stand"
                    src={pens}
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}