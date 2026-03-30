"use client";

import AnimatedSection from "./AnimatedSection";

export default function Philanthropy() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <div className="separator-line mb-16" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-silver/70 leading-relaxed italic tracking-wide">
            &ldquo;Prosperity carries purpose.&rdquo;
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-10 text-silver-dark/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            The Shusterman name carries a longstanding tradition of giving
            back — aligned with the broader Schusterman family&apos;s legacy of
            philanthropy, community impact, and the belief that success is
            measured not only in returns, but in the lives it touches.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="separator-line mt-16" />
        </AnimatedSection>
      </div>
    </section>
  );
}
