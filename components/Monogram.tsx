"use client";

import { motion } from "framer-motion";

export default function Monogram({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle
          cx="60"
          cy="60"
          r="58"
          stroke="url(#monogramGradient)"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          stroke="url(#monogramGradient)"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fontFamily="var(--font-playfair), Georgia, serif"
          fontSize="48"
          fontWeight="400"
          fill="url(#monogramGradient)"
          letterSpacing="2"
        >
          S
        </text>
        <defs>
          <linearGradient
            id="monogramGradient"
            x1="0"
            y1="0"
            x2="120"
            y2="120"
          >
            <stop offset="0%" stopColor="#c0c0c0" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#c0c0c0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
