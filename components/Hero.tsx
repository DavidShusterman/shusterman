"use client";

import { motion } from "framer-motion";
import Monogram from "./Monogram";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-silver-dark top-1/4 -left-1/4" />
      <div className="glow-orb w-[400px] h-[400px] bg-gold/20 bottom-1/4 -right-1/4" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(192,192,192,0.04)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <Monogram className="w-24 h-24 md:w-32 md:h-32" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-shimmer font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.2em] uppercase"
        >
          Shusterman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-silver-dark text-sm sm:text-base md:text-lg tracking-[0.35em] uppercase font-light"
        >
          Legacy &nbsp;&middot;&nbsp; Innovation &nbsp;&middot;&nbsp; Investment
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-silver/40 to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-silver-dark/60 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-silver-dark/40"
          >
            <path
              d="M8 0v20M1 14l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
