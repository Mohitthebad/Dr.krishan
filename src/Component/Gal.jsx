import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.png";
import gallerySrf from "../assets/gallery_srf.png";
import galleryTrophy from "../assets/gallery_trophy.png";
import galleryInclusion from "../assets/gallery_inclusion.jpg";

const HERO_ITEM = {
  id: "srf-award",
  src: gallerySrf,
  alt: "SRF Chairman's Award Ceremony",
  tags: [
    { label: "CHAIRMAN'S AWARD", bg: "bg-primary text-white" },
    { label: "SRF LIMITED", bg: "bg-amber-500 text-slate-900 font-bold" },
  ],
  title: "SRF Chairman's Award for Excellence",
  description:
    "Recognized by executive leadership for outstanding organizational transformation, IR strategy, and executive impact during transition.",
  date: "June 2021",
  author: "Dr. Krishan Singh",
  objectFit: "object-cover",
  objectPos: "object-center",
};

const MIDDLE_TOP_ITEM = {
  id: "trophy-award",
  src: galleryTrophy,
  alt: "Top 50 HR Leaders Award Trophy",
  tags: [
    { label: "HR LEADERSHIP", bg: "bg-purple-600 text-white" },
    { label: "TOP 50", bg: "bg-amber-500 text-slate-900" },
  ],
  title: "Top 50 HR Leaders Award",
  description: "Presented by SRM Jointly for distinguished leadership in workforce transformation.",
  date: "June 2021",
  author: "SRM Joint Award",
  objectFit: "object-contain p-3",
  objectPos: "object-center",
};

const RIGHT_TALL_ITEM = {
  id: "executive-leadership",
  src: gallery1,
  alt: "Dr. Krishan Singh Executive Portrait",
  tags: [{ label: "STRATEGIC VISION", bg: "bg-rose-600 text-white" }],
  title: "Executive Leadership & Strategic Oversight",
  description:
    "Steering corporate policy and multi-industry human capital strategy with excellence.",
  date: "2023",
  author: "Dr. Krishan Singh",
  objectFit: "object-cover",
  objectPos: "object-top",
};

const BOTTOM_ITEMS = [
  {
    id: "inclusion-summit",
    src: galleryInclusion,
    alt: "Global Inclusion Summit & Awards 2024 stage presentation",
    tags: [
      { label: "GLOBAL SUMMIT", bg: "bg-cyan-600 text-white" },
      { label: "AWARDS 2024", bg: "bg-amber-500 text-slate-900" },
    ],
    title: "Global Inclusion Summit & Awards",
    description: "Felicitation and keynote at the Global Inclusion Summit 2024.",
    date: "2024",
    author: "Global HR Forum",
    objectFit: "object-contain p-2",
    objectPos: "object-center",
  },
  {
    id: "leadership-honor",
    src: gallery3,
    alt: "Award presentation ceremony",
    tags: [{ label: "RECOGNITION", bg: "bg-indigo-600 text-white" }],
    title: "Annual Business Leadership Honor",
    description: "Honored at the annual business leadership summit.",
    date: "2022",
    author: "Executive Board",
    objectFit: "object-cover",
    objectPos: "object-center",
  },
  {
    id: "transformative-hr",
    src: gallery2,
    alt: "Dr. Krishan Singh portrait",
    tags: [{ label: "EXECUTIVE PORTRAIT", bg: "bg-teal-600 text-white" }],
    title: "Transformative HR Leadership",
    description: "Pioneering human-centric strategies and workplace culture.",
    date: "2023",
    author: "Dr. Krishan Singh",
    objectFit: "object-contain p-2",
    objectPos: "object-center",
  },
  {
    id: "corporate-values",
    src: gallery4,
    alt: "Corporate portrait",
    tags: [{ label: "GOVERNANCE", bg: "bg-amber-600 text-white" }],
    title: "Excellence, Innovation & Integrity",
    description: "Upholding core values of strategic governance and executive impact.",
    date: "2024",
    author: "Dr. Krishan Singh",
    objectFit: "object-contain p-2",
    objectPos: "object-center",
  },
];

function HoverGalleryCard({ item, className = "", minHeight = "min-h-[260px]", isHero = false, onClick }) {
  const fitClass = item.objectFit || "object-contain p-2";

  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-xl bg-slate-950 shadow-md border border-white/10 transition-all duration-500 hover:shadow-2xl hover:border-amber-500/40 h-full ${minHeight} flex flex-col justify-end ${className}`}
    >
      {/* Background Image */}
      <img
        src={item.src}
        alt={item.alt}
        className={`absolute inset-0 w-full h-full ${fitClass} ${item.objectPos || "object-center"} transition-transform duration-700 group-hover:scale-105`}
      />

      {/* Dark Overlay (Fades in on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Badges & Expand Icon (Slides down on hover) */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 transform -translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
        <div className="flex flex-wrap gap-1.5 max-w-[80%] overflow-hidden">
          {item.tags.map((t, i) => (
            <span
              key={i}
              className={`px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded shadow-sm whitespace-nowrap ${t.bg}`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-amber-500 hover:text-slate-900 transition-colors shrink-0">
          <span className="material-symbols-outlined text-xs">fullscreen</span>
        </div>
      </div>

      {/* Bottom Content Container (Slides up on hover) */}
      <div className="relative z-10 p-4 sm:p-5 text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden max-h-full">
        <h3
          style={{ fontFamily: "'Playfair Display', serif" }}
          className={`${
            isHero ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
          } font-bold leading-snug mb-1 text-amber-400 line-clamp-1`}
        >
          {item.title}
        </h3>
        {item.description && (
          <p className="text-[11px] sm:text-xs text-gray-200 line-clamp-2 mb-2 leading-relaxed">
            {item.description}
          </p>
        )}
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-gray-300 border-t border-white/20 pt-2 font-medium">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <span className="material-symbols-outlined text-xs text-amber-400">calendar_today</span>
            {item.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 truncate">
            <span className="material-symbols-outlined text-xs text-amber-400">person</span>
            <span className="truncate">{item.author}</span>
          </span>
        </div>
      </div>
    </div>
  );
}


export default function ExecutiveGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-background-soft text-charcoal font-sans overflow-x-hidden min-h-screen py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto">
      {/* Header Section */}
      <ScrollReveal variant="fade-up">
        <div className="max-w-4xl  mb-8   md:mb-10">
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl md:text-5xl  ml-120 font-bold text-charcoal tracking-tight  mb-3"
          >
            Gallery & Honors
          </h1>
        
        </div>
      </ScrollReveal>

      {/* Magazine Grid Layout (Top Section: Hero + Middle + Right Tall) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {/* HERO CARD (Top Left - Spans 2 cols) */}
        <ScrollReveal variant="fade-up" className="lg:col-span-2">
          <HoverGalleryCard
            item={HERO_ITEM}
            minHeight="min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
            isHero={true}
            onClick={() => openLightbox(HERO_ITEM)}
          />
        </ScrollReveal>

        {/* MIDDLE CARD (Top Middle) */}
        <ScrollReveal variant="fade-up" delay={100} className="lg:col-span-1">
          <HoverGalleryCard
            item={MIDDLE_TOP_ITEM}
            minHeight="min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
            onClick={() => openLightbox(MIDDLE_TOP_ITEM)}
          />
        </ScrollReveal>

        {/* RIGHT TALL CARD (Right Column) */}
        <ScrollReveal variant="fade-up" delay={200} className="lg:col-span-1">
          <HoverGalleryCard
            item={RIGHT_TALL_ITEM}
            minHeight="min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
            onClick={() => openLightbox(RIGHT_TALL_ITEM)}
          />
        </ScrollReveal>
      </div>

      {/* BOTTOM ROW (4 Equal Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-4 md:mt-5">
        {BOTTOM_ITEMS.map((item, index) => (
          <ScrollReveal key={item.id} variant="fade-up" delay={index * 80}>
            <HoverGalleryCard
              item={item}
              minHeight="min-h-[250px] sm:min-h-[270px] lg:min-h-[290px]"
              onClick={() => openLightbox(item)}
            />
          </ScrollReveal>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[88vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg"
            >
              ✕
            </button>

            <div className="md:w-2/3 bg-black flex items-center justify-center min-h-[220px] max-h-[55vh] md:max-h-[88vh] overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[55vh] md:max-h-[88vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="md:w-1/3 p-5 sm:p-6 flex flex-col justify-between text-white overflow-y-auto max-h-[35vh] md:max-h-[88vh]">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {selectedImage.tags.map((t, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${t.bg}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl sm:text-2xl font-bold mb-2 text-amber-400"
                >
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {selectedImage.description}
                </p>
              </div>
              <div className="border-t border-white/15 pt-3 text-xs text-gray-400 flex flex-col gap-1">
                <div><strong className="text-gray-200">Date:</strong> {selectedImage.date}</div>
                <div><strong className="text-gray-200">Recipient / Event:</strong> {selectedImage.author}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}