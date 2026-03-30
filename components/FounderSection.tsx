"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  { label: "CaliAlfa", detail: "Acquired 2025" },
  { label: "Unit 8200", detail: "Alum" },
  { label: "AI & Predictive", detail: "Analytics" },
  { label: "Angel", detail: "Investor" },
];

export default function FounderSection() {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      <div className="glow-orb w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-silver-dark/20 top-0 right-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-gold/80 text-xs tracking-[0.4em] uppercase mb-4">
            Founder
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-silver-light tracking-wide">
            David Shusterman
          </h2>
          <div className="separator-line max-w-xs mx-auto mt-8" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative mx-auto lg:mx-0 max-w-sm">
              <div className="relative rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/david-ceo.png"
                  alt="David Shusterman — Founder & CEO"
                  width={480}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-silver/20 rounded-tl-sm" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-silver/20 rounded-br-sm" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection direction="right" delay={0.3}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-silver-light font-serif text-2xl">
                  David Shusterman
                </span>
                <span className="text-xs tracking-wider text-silver-dark border border-border rounded-full px-3 py-1">
                  Founder & CEO
                </span>
              </div>

              <div className="flex items-center gap-2 text-silver-dark/70 text-sm">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Based in Israel
              </div>

              <p className="text-silver-dark text-sm md:text-base leading-relaxed">
                Founder and CEO of CaliAlfa, a sports predictive analytics
                company fully acquired in 2025. CaliAlfa operates in the rapidly
                growing American sports tech market — U.S. and Latin America —
                processing massive volumes of real-time data and deploying
                predictive models that serve millions of users.
              </p>

              <p className="text-silver-dark text-sm md:text-base leading-relaxed">
                Background rooted in deep technical work, beginning with
                founding companies during service in Unit 8200. Over the years,
                built and scaled multiple technology ventures across AI-driven
                and real-time analytical systems.
              </p>

              <p className="text-silver-dark text-sm md:text-base leading-relaxed">
                Post-exit, focused on building a new AI-native SaaS venture
                backed by personal capital, selective early-stage investing, and
                connecting with high-caliber founders building thoughtfully in
                their next chapter.
              </p>

              <p className="text-silver-dark/60 text-sm leading-relaxed italic">
                Married, father of two with another on the way. Outside of work:
                tennis, golf, and chess.
              </p>

              {/* Highlight badges */}
              <div className="pt-4 flex flex-wrap gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="px-4 py-2.5 rounded-lg border border-border bg-surface/60 text-center"
                  >
                    <p className="text-silver-light text-xs font-medium tracking-wide">
                      {h.label}
                    </p>
                    <p className="text-silver-dark/60 text-[10px] tracking-wider uppercase mt-0.5">
                      {h.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
