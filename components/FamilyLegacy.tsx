"use client";

import AnimatedSection from "./AnimatedSection";

const milestones = [
  {
    era: "Foundations",
    title: "Roots in Enterprise",
    description:
      "Built on generations of entrepreneurial spirit, the Shusterman family established a tradition of identifying opportunity where others saw uncertainty — from early commercial ventures to strategic property holdings.",
  },
  {
    era: "Growth",
    title: "Real Estate & Capital",
    description:
      "Through disciplined investing in real estate and private markets, the family cultivated a portfolio grounded in tangible value — acquiring, developing, and managing assets across key markets.",
  },
  {
    era: "Modern Era",
    title: "Technology & Innovation",
    description:
      "Today, the Shusterman name stands at the intersection of legacy and innovation — backing AI-driven ventures, angel investing in early-stage founders, and building technology companies from the ground up.",
  },
];

export default function FamilyLegacy() {
  return (
    <section className="relative py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <p className="text-gold/80 text-xs tracking-[0.4em] uppercase mb-4">
            Heritage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-silver-light tracking-wide">
            A Legacy of Enterprise
          </h2>
          <div className="separator-line max-w-xs mx-auto mt-8" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-silver-dark text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-20">
            For generations, the Shusterman family has built its reputation on
            a foundation of integrity, strategic vision, and an unwavering
            commitment to creating enduring value.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-silver/20 to-transparent hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, i) => (
              <AnimatedSection
                key={milestone.era}
                delay={0.15 * i}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`md:flex items-center gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      i % 2 === 0
                        ? "text-center md:text-right"
                        : "text-center md:text-left"
                    }`}
                  >
                    <TimelineCard {...milestone} />
                  </div>

                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full border border-silver/40 bg-background relative">
                      <div className="absolute inset-0.5 rounded-full bg-gold/60" />
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  era,
  title,
  description,
}: {
  era: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group">
      <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-2">
        {era}
      </p>
      <h3 className="font-serif text-xl md:text-2xl text-silver-light mb-3">
        {title}
      </h3>
      <p className="text-silver-dark text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
