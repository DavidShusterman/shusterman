"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  { label: "Law", detail: "Attorney" },
  { label: "IPX", detail: "Founder" },
  { label: "Special Forces", detail: "Veteran" },
  { label: "Entrepreneur", detail: "Decades" },
];

export default function ArikSection() {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      <div className="glow-orb w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gold/10 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-gold/80 text-xs tracking-[0.4em] uppercase mb-4">
            Patriarch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-silver-light tracking-wide">
            Arik Shusterman
          </h2>
          <div className="separator-line max-w-xs mx-auto mt-8" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo -- first on mobile, second on desktop */}
          <AnimatedSection direction="right" delay={0.1} className="order-1 lg:order-2">
            <div className="relative mx-auto lg:mx-0 max-w-sm lg:ml-auto">
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/5]">
                <Image
                  src="/arik-shusterman.png"
                  alt="Arik Shusterman — Businessman, Attorney & Founder of IPX"
                  fill
                  className="object-cover object-top"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-silver/20 rounded-tl-sm" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-silver/20 rounded-br-sm" />
            </div>
          </AnimatedSection>

          {/* Bio -- second on mobile, first on desktop */}
          <AnimatedSection direction="left" delay={0.15} className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-silver-light font-serif text-2xl">
                  Arik Shusterman
                </span>
                <span className="text-xs tracking-wider text-silver-dark border border-border rounded-full px-3 py-1">
                  Businessman & Attorney
                </span>
              </div>

              <p className="text-silver-dark text-sm md:text-base leading-relaxed">
                Arik Shusterman is the embodiment of a life forged through
                discipline, intellect, and relentless ambition. A lawyer by
                profession, he built his career at the intersection of law,
                business, and strategic innovation — navigating complex
                regulatory landscapes and high-stakes transactions with the
                precision of a master strategist.
              </p>

              <p className="text-silver-dark text-sm md:text-base leading-relaxed">
                As the founder of the Israeli Patent Exchange (IPX), Arik
                pioneered a platform that redefined how intellectual property is
                valued, traded, and monetized in Israel and beyond. His vision
                recognized that patents are not mere legal instruments but
                powerful assets — and he built the infrastructure to unlock their
                true market potential.
              </p>

              <p className="text-silver-dark text-sm md:text-base leading-relaxed">
                Before his career in law and business, Arik served in the
                Israeli Special Forces — an experience that instilled in him an
                unbreakable resolve, an acute ability to perform under pressure,
                and a leadership philosophy rooted in accountability and
                calculated risk. Those years of elite military service shaped
                everything that followed: the discipline to build companies, the
                composure to close deals others walked away from, and the
                courage to enter markets before anyone else saw the opportunity.
              </p>

              <p className="text-silver-dark text-sm md:text-base leading-relaxed">
                Over decades, Arik has operated across a wide range of
                industries — from real estate development and private equity to
                technology ventures and intellectual property management. He is
                known among peers for his sharp legal mind, his intuitive
                understanding of market dynamics, and his ability to see the
                long game when others are focused on the quarter ahead.
              </p>

              <p className="text-silver-dark text-sm md:text-base leading-relaxed">
                More than a businessman, Arik Shusterman is a builder of
                legacies. He has mentored entrepreneurs, advised startups, and
                fostered a family culture where ambition is expected, integrity
                is non-negotiable, and giving back is a responsibility — not a
                choice. His influence extends far beyond the boardroom: it lives
                in the values he has passed down to the next generation of the
                Shusterman family.
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
