import React, { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

const REGIONS = ["London (Primary)", "Dubai (Strategic Hub)", "Mumbai (Technology Ops)"];

const METRICS = [
  { value: "24h", label: "RESPONSE TARGET" },
  { value: "100%", label: "CONFIDENTIALITY" },
  { value: "NDA", label: "PRE-SECURED PROTOCOLS" },
];

const glassPanel =
  "bg-card-bg/70 backdrop-blur-xl border border-border-light";

function Field({ label, children }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const active = focused || hasValue;

  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-xs font-semibold uppercase tracking-widest transition-all duration-200"
        style={{
          color: active ? "var(--color-primary)" : "var(--color-charcoal)",
          opacity: active ? 1 : 0.7,
          transform: active ? "translateY(-2px)" : "translateY(0)",
        }}
      >
        {label}
      </label>
      {React.cloneElement(children, {
        onFocus: () => setFocused(true),
        onBlur: (e) => {
          setFocused(false);
          setHasValue(!!e.target.value);
        },
        onChange: (e) => setHasValue(!!e.target.value),
      })}
    </div>
  );
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background-soft text-charcoal font-sans overflow-x-hidden min-h-screen">
      <main className="py-20 max-w-[1140px] mx-auto px-8 md:px-16">
        {/* Hero Section */}
        <section className="mb-20">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
                DIRECT ACCESS
              </span>
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[48px] lg:text-[64px] font-bold max-w-3xl leading-tight text-charcoal"
              >
                Get in Touch
              </h1>
              <p className="text-lg text-charcoal/80 max-w-2xl mt-4">
                Dr. Krishan Singh welcomes inquiries regarding executive consulting, board
                membership, and strategic leadership mentorship. Experience a bespoke
                concierge approach to professional partnership.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
            {/* Contact Form (Left) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ScrollReveal variant="fade-up">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Full Name">
                      <input
                        className="bg-transparent border-0 border-b border-border-light py-4 focus:ring-0 focus:border-primary transition-all text-lg placeholder:text-charcoal/40 text-charcoal"
                        placeholder="Johnathan Doe"
                        type="text"
                      />
                    </Field>
                    <Field label="Organization">
                      <input
                        className="bg-transparent border-0 border-b border-border-light py-4 focus:ring-0 focus:border-primary transition-all text-lg placeholder:text-charcoal/40 text-charcoal"
                        placeholder="Global Enterprises Inc."
                        type="text"
                      />
                    </Field>
                  </div>

                  <Field label="Email Address">
                    <input
                      className="bg-transparent border-0 border-b border-border-light py-4 focus:ring-0 focus:border-primary transition-all text-lg placeholder:text-charcoal/40 text-charcoal"
                      placeholder="j.doe@executive.com"
                      type="email"
                    />
                  </Field>

                  <Field label="Inquiry Type">
                    <select className="bg-card-bg border-0 border-b border-border-light py-4 focus:ring-0 focus:border-primary transition-all text-lg text-charcoal appearance-none">
                      <option className="bg-card-bg text-charcoal">Executive Leadership Consulting</option>
                      <option className="bg-card-bg text-charcoal">Board Membership Opportunity</option>
                      <option className="bg-card-bg text-charcoal">Keynote Speaking &amp; Panels</option>
                      <option className="bg-card-bg text-charcoal">Strategic Mentorship</option>
                    </select>
                  </Field>

                  <Field label="Your Message">
                    <textarea
                      className="bg-transparent border-0 border-b border-border-light py-4 focus:ring-0 focus:border-primary transition-all text-lg placeholder:text-charcoal/40 text-charcoal resize-none"
                      placeholder="How can we collaborate on your vision?"
                      rows="4"
                    />
                  </Field>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="bg-primary dark:bg-accent text-white dark:text-black text-xs font-semibold px-12 py-5 tracking-[0.2em] uppercase hover:shadow-[0px_20px_40px_rgba(0,0,0,0.1)] hover:bg-black transition-all active:scale-95 cursor-pointer"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </ScrollReveal>
            </div>

            {/* Info Sidebar (Right) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
             

              {/* Contact Details */}
              <ScrollReveal variant="fade-up" delay={300}>
                <div className="flex flex-col gap-6 p-6 border border-border-light bg-card-bg rounded-xl">
                  <div className="flex flex-col gap-2">
                    <h3
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-xl font-semibold text-charcoal"
                    >
                      Direct Lines
                    </h3>
                    <div className="flex flex-col gap-2">
                      <a
                        className="text-lg text-primary hover:text-charcoal transition-colors flex items-center gap-4"
                        href="mailto:krishansy1@gmail.com"
                      >
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                        krishansy1@gmail.com
                      </a>
                      <a
                        className="text-lg text-charcoal/80 hover:text-charcoal transition-colors flex items-center gap-4"
                        href="tel:+919910905448"
                      >
                        <span className="material-symbols-outlined text-[20px]">call</span>
                        +91 99109 05448
                      </a>
                    </div>
                  </div>

                  <div className="h-px bg-accent w-full" />

               
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Metric High-Contrast Section */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          {METRICS.map((m, idx) => {
            const renderMetricValue = (val) => {
              if (val === "24h") return <CountUp end={24} suffix="h" />;
              if (val === "100%") return <CountUp end={100} suffix="%" />;
              return val;
            };

            return (
              <ScrollReveal key={m.label} variant="scale-up" delay={idx * 150} className="w-full">
                <div className={`flex flex-col items-center text-center p-6 ${glassPanel} rounded-xl h-full justify-center`}>
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[40px] font-bold text-primary"
                  >
                    {renderMetricValue(m.value)}
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-charcoal/70 mt-2 uppercase">
                    {m.label}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </section>
      </main>

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}