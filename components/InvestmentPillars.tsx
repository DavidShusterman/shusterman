"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect
          x="6"
          y="20"
          width="36"
          height="22"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6 20L24 6L42 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect x="18" y="30" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Real Estate",
    description:
      "Generational property investments spanning commercial, residential, and strategic development — building tangible, lasting wealth across key markets.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M24 12V24L32 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 8L24 6L30 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Angel Investing",
    description:
      "Backing visionary founders at the earliest stages — providing capital, mentorship, and strategic guidance to high-potential ventures across technology and beyond.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 32L22 20L28 26L36 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Technology Ventures",
    description:
      "Building and investing in AI-native, data-driven companies — from predictive analytics to real-time systems that redefine industries at scale.",
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: 0.15 * index,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative"
    >
      <div className="relative p-8 md:p-10 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm transition-all duration-500 hover:border-silver-dark/30 hover:bg-surface-light/80">
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-silver/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="text-silver/60 mb-6 group-hover:text-gold/70 transition-colors duration-500">
            {pillar.icon}
          </div>
          <h3 className="font-serif text-xl md:text-2xl text-silver-light mb-4 tracking-wide">
            {pillar.title}
          </h3>
          <p className="text-silver-dark text-sm md:text-base leading-relaxed">
            {pillar.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function InvestmentPillars() {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      <div className="glow-orb w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gold/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-gold/80 text-xs tracking-[0.4em] uppercase mb-4">
            Pillars
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-silver-light tracking-wide">
            Where We Invest
          </h2>
          <div className="separator-line max-w-xs mx-auto mt-8" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
