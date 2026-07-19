import React from "react";
import ScrollReveal from "./ScrollReveal";
import coaching from "../assets/coaching.jpg";

const EXPERTISE_CARDS = [
  {
    icon: "partner_exchange",
    title: "Executive & Leadership",
    text: "Driving leadership development and high-potential (HiPo) growth through structured journeys and real-world application.",
    tags: ["EXECUTIVE COACHING", "LEADERSHIP DEVELOPMENT"],
  },
  {
    icon: "trending_up",
    title: "Transition & Career",
    text: "Supporting leaders through critical career pivots and high-stakes transitions with a focus on sustainable effectiveness.",
    tags: ["TRANSITION COACHING", "CAREER STRATEGY"],
  },
  {
    icon: "groups",
    title: "HR & Transformation",
    text: "Deep specialized coaching for HR professionals and business leaders driving large-scale organizational change.",
    tags: ["HR LEADERSHIP COACHING", "CHANGE LEADERSHIP"],
  },
];

const FRAMEWORKS = [
  {
    icon: "360",
    title: "360-Degree Feedback",
    text: "Comprehensive leadership journeys powered by multi-dimensional performance feedback.",
  },
  {
    icon: "assignment_ind",
    title: "Assessment Centres",
    text: "Strategic leadership assessment centres and mentoring interventions for succession planning.",
  },
  {
    icon: "schema",
    title: "ICF Framework",
    text: "Adherence to rigorous global coaching standards ensuring ethical and effective practice.",
  },
  {
    icon: "psychology",
    title: "HiPo Development",
    text: "Structured programs designed specifically for high-potential executive growth.",
  },
];

const CERTIFICATIONS = [
  {
    label: "Global Standard",
    title: "ICF Accredited Associate Certified Coach (ACC)",
    accent: true,
  },
  {
    label: "Governance",
    title: "Certified Independent Director – World Council of Directors",
  },
  { label: "Evaluation", title: "HAY Job Evaluation Certified" },
  { label: "Psychometrics", title: "OPQ Certified Assessor" },
  { label: "Legal", title: "NLU Certified Professional" },
  { label: "Assessment", title: "Qualified Independent Director Assessment – IICA" },
];

const ACADEMICS = [
  { title: "Ph.D. in Human Resources Accounting", sub: "Doctoral Research" },
  { title: "Master of Personnel Management", sub: "University of Pune (A+ Grade)" },
  { title: "Post Graduate Diploma in Labour Law", sub: "Indian Law Institute, New Delhi" },
  { title: "Bachelor of Commerce (College Topper)", sub: "University of Delhi" },
];

const glassPanel =
  "bg-white/40 backdrop-blur-xl border border-white/30 transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1";

export default function ExecutiveCoaching() {
  return (
    <div className="font-sans text-base text-[#1b1c1c] bg-[#fbf9f8] overflow-x-hidden min-h-screen">
      <main className="py-20 max-w-[1140px] mx-auto px-8 md:px-16">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
          <div className="md:col-span-7 flex flex-col gap-6">
            <ScrollReveal variant="fade-up">
              <span className="text-xs font-semibold text-[#775a19] tracking-[0.2em]">
                EXECUTIVE COACH &amp; MENTOR
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[48px] font-bold leading-[1.1] tracking-tight mt-2"
              >
                Executive Coaching &amp; Mentorship
              </h2>
              <div className="w-24 h-1 bg-[#775a19] mt-4" />
              <blockquote className="italic text-2xl font-semibold text-[#444748] border-l-4 border-[#c4c7c7] pl-6 my-6">
                "Every individual possesses the ability to discover solutions through
                reflection, awareness, and purposeful action. My role is to bridge the gap
                between theory and real organizational impact."
              </blockquote>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 relative">
            <ScrollReveal variant="scale-up" delay={200}>
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Executive portrait of Dr. Krishan Singh"
                  src={coaching}
                />
              </div>
            </ScrollReveal>
            {/* ICF Badge Floating */}
            <ScrollReveal variant="scale-up" delay={450} className="absolute -bottom-10 -left-10">
              <div
                className={`${glassPanel} p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-40 h-40 border-[#775a19]/30`}
              >
              <span
                className="material-symbols-outlined text-[#775a19] text-4xl mb-2"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                military_tech
              </span>
              <span className="text-[10px] text-center leading-tight text-black font-semibold">
                ICF ACCREDITED
                <br />
                ASSOCIATE COACH (ACC)
              </span>
            </div>
          </ScrollReveal>
          </div>
        </section>

        {/* Expertise Sections: Bento Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6 border-b border-[#c4c7c7]/20 pb-4">
            <h3
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl font-semibold"
            >
              Coaching Expertise
            </h3>
            <span className="text-xs font-semibold text-[#444748]">01 / AREAS OF IMPACT</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERTISE_CARDS.map((card, idx) => (
              <ScrollReveal key={card.title} variant="fade-up" delay={idx * 150}>
                <div className={`${glassPanel} p-6 flex flex-col gap-4 hover:border-[#775a19] group h-full`}>
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-[#775a19] transition-colors">
                    <span className="material-symbols-outlined text-white">{card.icon}</span>
                  </div>
                  <h4
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-semibold"
                  >
                    {card.title}
                  </h4>
                  <p className="text-[#444748]">{card.text}</p>
                  <ul className="mt-auto pt-4 space-y-2">
                    {card.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-2 text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 bg-[#775a19] rounded-sm" /> {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Frameworks & Facilitation: Asymmetric Layout */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 overflow-hidden">
          <div className="md:col-span-4 bg-black p-6 flex flex-col justify-center gap-4">
            <ScrollReveal variant="slide-left">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-2xl font-semibold mb-2"
              >
                Methodology &amp; Frameworks
              </h3>
              <p className="text-[#858383]">
                Rooted in the gold standard of the International Coaching Federation (ICF),
                Dr. Singh leverages data-driven insights to spark transformation.
              </p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 px-4 relative">
            {FRAMEWORKS.map((fw, idx) => (
              <ScrollReveal key={fw.title} variant="fade-up" delay={idx * 100}>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#775a19] text-3xl">
                    {fw.icon}
                  </span>
                  <div>
                    <h5 className="font-bold text-black mb-1">{fw.title}</h5>
                    <p className="text-[#444748] text-sm">{fw.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Academic & Professional */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Main Foundation */}
          <div className="md:col-span-8">
            <ScrollReveal variant="fade-up">
              <div className="flex items-center justify-between mb-6 border-b border-[#c4c7c7]/20 pb-4">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-semibold"
                >
                  Professional Certifications
                </h3>
                <span className="text-xs font-semibold text-[#444748]">02 / QUALIFICATIONS</span>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <ScrollReveal key={cert.title} variant="scale-up" delay={idx * 100}>
                  <div
                    className={`p-4 border-l h-full ${
                      cert.accent ? "border-[#775a19]" : "border-[#c4c7c7]"
                    } bg-[#f5f3f3]`}
                  >
                    <span
                      className={`font-bold text-xs uppercase tracking-widest block mb-1 ${
                        cert.accent ? "text-[#775a19]" : "text-[#444748]"
                      }`}
                    >
                      {cert.label}
                    </span>
                    <h6 className="font-bold">{cert.title}</h6>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Sticky Glass Sidebar for Academic */}
          <div className="md:col-span-4">
            <ScrollReveal variant="fade-up" delay={200}>
              <div className={`${glassPanel} p-6 rounded-lg`}>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-semibold mb-6 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[#775a19]">school</span>
                  Academic Foundation
                </h3>
                <div className="space-y-6">
                  {ACADEMICS.map((item, i) => (
                    <React.Fragment key={item.title}>
                      <div>
                        <p className="font-bold text-black">{item.title}</p>
                        <p className="text-sm text-[#444748]">{item.sub}</p>
                      </div>
                      {i < ACADEMICS.length - 1 && (
                        <div className="h-px bg-[#c4c7c7]/30 w-full" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </ScrollReveal>
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