import React from "react";
import {
  Target,
  BarChart3,
  Lightbulb,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function OurVenture() {
  return (
    <section className="relative overflow-hidden py-20 bg-background-soft text-charcoal font-sans transition-colors duration-500">

      {/* Background Ambient Glow matching theme */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1140px] mx-auto px-8 md:px-16">

        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 text-primary px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase">
              <Sparkles size={14} className="text-accent" />
              OUR ECOSYSTEM
            </span>
          </div>

          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-center text-[36px] md:text-[48px] font-bold text-charcoal leading-tight"
          >
            Our <span className="text-primary">Venture</span>
          </h2>

          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4 mb-8" />

          <p className="max-w-3xl mx-auto text-center text-base md:text-lg leading-relaxed text-charcoal/80">
            <span className="font-semibold text-primary">
              ShiftQuest Consulting
            </span>{" "}
            is our flagship venture, committed to helping businesses navigate
            complexity, accelerate growth, and achieve meaningful transformation.
          </p>
        </ScrollReveal>

        {/* Main Card Container */}
        <ScrollReveal variant="scale-up" delay={200} className="mt-14">
          <div className="rounded-3xl bg-card-bg border border-border-light shadow-xl overflow-hidden transition-all duration-300">

            <div className="grid lg:grid-cols-12">

              {/* Left Brand Panel */}
              <div className="lg:col-span-5 flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-card-bg via-background-soft to-card-bg border-b lg:border-b-0 lg:border-r border-border-light/60">

                <div className="text-center max-w-sm">

                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white mx-auto mb-6 flex items-center justify-center text-4xl md:text-5xl font-bold font-serif shadow-lg shadow-primary/20 border-2 border-white/20">
                    SQ
                  </div>

                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-3xl md:text-4xl font-bold text-charcoal"
                  >
                    ShiftQuest
                  </h3>

                  <p className="mt-2 uppercase tracking-[6px] text-accent font-semibold text-xs md:text-sm">
                    Consulting
                  </p>

                  <p className="mt-6 text-charcoal/70 text-sm md:text-base leading-relaxed">
                    Delivering strategic consulting, digital transformation,
                    operational excellence, and business growth for ambitious
                    organizations.
                  </p>

                </div>

              </div>

              {/* Right Details Panel */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-between">

                <div>
                  <span className="inline-flex rounded-full bg-accent/15 text-accent border border-accent/30 px-4 py-1.5 font-semibold text-xs tracking-wider uppercase">
                    FLAGSHIP VENTURE
                  </span>

                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="mt-4 text-3xl md:text-4xl font-bold text-charcoal"
                  >
                    ShiftQuest Consulting
                  </h3>

                  <p className="mt-4 text-sm md:text-base leading-relaxed text-charcoal/80">
                    We partner with organizations to solve their most critical
                    business challenges through strategic advisory, operational
                    excellence, and digital transformation. Our mission is to build
                    scalable solutions that drive measurable business impact.
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

                    <Feature
                      icon={<Target size={20} />}
                      title="Strategic Advisory"
                    />

                    <Feature
                      icon={<BarChart3 size={20} />}
                      title="Operational Excellence"
                    />

                    <Feature
                      icon={<Lightbulb size={20} />}
                      title="Digital Transformation"
                    />

                    <Feature
                      icon={<Users size={20} />}
                      title="Growth Enablement"
                    />

                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-10">
                  <button className="inline-flex items-center gap-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-7 py-4 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer">
                    Learn More About ShiftQuest
                    <ArrowRight size={18} />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4">

      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm flex-shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-charcoal text-sm md:text-base">
          {title}
        </h4>
      </div>

    </div>
  );
}
