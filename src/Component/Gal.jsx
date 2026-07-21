import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";

const GALLERY_ITEMS = [
  {
    id: "leadership",
    aspect: "aspect-[3/4]",
    margin: "",
    alt: "Dr. Krishan Singh corporate portrait",
    src: gallery1,
    tag: "EXECUTIVE LEADERSHIP",
    caption: "Strategic oversight and leadership in action.",
    position: "object-top",
  },
  {
    id: "summit",
    aspect: "aspect-[3/4]",
    margin: "mt-12",
    alt: "Dr. Krishan Singh portrait",
    src: gallery2,
    tag: "EXECUTIVE PORTRAIT",
    caption: "Dr. Krishan Singh, Transformative HR Leader.",
    position: "object-top",
  },
  {
    id: "award",
    aspect: "aspect-square",
    margin: "",
    alt: "Dr. Krishan Singh receiving an award",
    src: gallery3,
    tag: "RECOGNITION",
    caption: "Honored at the annual business leadership summit.",
    position: "object-center",
  },
  {
    id: "collaboration",
    aspect: "aspect-[3/4]",
    margin: "mt-[-40px]",
    alt: "Dr. Krishan Singh corporate portrait",
    src: gallery4,
    tag: "EXECUTIVE PORTRAIT",
    caption: "Upholding values of excellence, innovation, and integrity.",
    position: "object-top",
  },
];

const MILESTONES = [
  {
    year: "2024",
    title: "Board Appointment",
    text: "Appointed to the Global Leadership Council for Strategic Innovation.",
    rail: "flex-grow",
  },
  {
    year: "2022",
    title: "Excellence Award",
    text: "Received the prestigious Executive Visionary of the Year trophy.",
    rail: "flex-grow",
  },
  {
    year: "2020",
    title: "Regional Expansion",
    text: "Spearheaded the $500M market entry into South East Asia.",
    rail: "h-8",
  },
];

function GalleryCard({ item }) {
  return (
    <ScrollReveal variant="scale-up" className={item.margin}>
      <div className="group relative overflow-hidden bg-[#efeded] shadow-sm">
        <img
          className={`w-full ${item.aspect} object-cover ${item.position || "object-center"} transition-transform duration-700 group-hover:scale-105`}
          alt={item.alt}
          src={item.src}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-xs tracking-widest font-semibold text-[#ffdea5]">
            {item.tag}
          </span>
          <p className="text-white mt-1">{item.caption}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ExecutiveGallery() {
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c] font-sans overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section id="overview" className="py-20 px-8 md:px-16 max-w-[1440px] mx-auto">
        <ScrollReveal variant="fade-up">
          <div className="max-w-4xl">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-[48px] leading-[1.1] tracking-tight font-bold text-black mb-4"
            >
              Visual Legacy
            </h1>
            <p className="text-lg text-[#444748] max-w-2xl leading-relaxed">
              A curated selection of moments capturing decades of strategic leadership,
              global summits, and the pursuit of excellence in the executive landscape.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Main Content Grid */}
      <main id="gallery" className="px-8 md:px-16 pb-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Gallery Masonry */}
          <div className="flex-grow lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {GALLERY_ITEMS.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside id="experience" className="lg:w-1/3 relative">
            <div
              style={{
                backdropFilter: "saturate(180%) blur(20px)",
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
              className="sticky top-32 p-6 border border-l border-[#c4c7c7]/10"
            >
              <ScrollReveal variant="fade-up">
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-semibold text-black mb-4"
                >
                  Career Milestones
                </h2>
              </ScrollReveal>
              <div className="space-y-6">
                {MILESTONES.map((m, idx) => (
                  <ScrollReveal key={m.year} variant="fade-up" delay={idx * 100}>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-[#775a19] mt-2 shrink-0" />
                        <div className={`w-px bg-black/10 ${m.rail}`} />
                      </div>
                      <div>
                        <span className="text-xs tracking-widest font-semibold text-[#775a19]">
                          {m.year}
                        </span>
                        <h3 className="text-lg font-bold text-black">{m.title}</h3>
                        <p className="text-[#444748]">{m.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Metric Chips */}
              <ScrollReveal variant="fade-up" delay={150}>
                <div className="mt-20 p-6 bg-[#ffdea5]/30 border border-[#775a19]/20 rounded-lg">
                  <div
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-3xl font-semibold text-[#775a19]"
                  >
                    <CountUp end={30} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#5d4201]">
                    Years of Executive Authority
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={250}>
                <div className="mt-6 p-6 bg-[#1c1b1b] text-[#858383] rounded-lg">
                  <div
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-3xl font-semibold text-[#fbf9f8]"
                  >
                    <CountUp end={4400} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#858383]">
                    Global Employees Managed
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </aside>
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