"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="3" width="6" height="6" rx="1" />
        <rect x="16" y="3" width="6" height="6" rx="1" />
        <rect x="2" y="15" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <rect x="16" y="15" width="6" height="6" rx="1" />
        <path d="M5 9v6M12 9v6M19 9v6" />
      </svg>
    ),
    title: "Too Many Tools",
    description:
      "Hundreds of AI solutions flooding the market with no clear strategy for adoption, integration, or measurable return.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
    title: "No Clear Roadmap",
    description:
      "Organizations struggle to identify where AI creates the most business value and in what sequence to implement it.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M17 11l2 2 4-4" />
      </svg>
    ),
    title: "Limited AI Expertise",
    description:
      "Building internal AI engineering and transformation capabilities takes years. Most organizations cannot wait that long.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Need Business Outcomes",
    description:
      "Executives need AI that delivers measurable business impact — not AI experiments, proof-of-concepts, or technology demos.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Subtle separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="section-label">The Challenge</p>
          <h2 className="heading-lg text-white mb-6">
            AI Is Moving Faster Than Most Organizations
          </h2>
          <p className="body-lg max-w-2xl">
            Most businesses understand AI will change how work gets done. The
            challenge is knowing where to start, what to implement, and how to
            generate measurable business value — without losing months to
            experimentation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="card-base card-hover group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-text-secondary group-hover:text-accent-blue group-hover:border-accent-blue/30 transition-all duration-300 mb-5">
                {p.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bridge statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent-blue/5 border border-accent-blue/15 rounded-2xl px-8 py-4">
            <div className="w-2 h-2 rounded-full bg-accent-blue flex-shrink-0" />
            <p className="text-base text-white font-medium">
              ENGXLABS bridges the gap between{" "}
              <span className="text-accent-blue">AI potential</span> and{" "}
              <span className="text-accent-blue">business execution</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
