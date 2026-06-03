"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2L4 7v7c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 2z" />
        <path d="M9 14l3 3 7-7" />
      </svg>
    ),
    label: "Engineering First",
    headline: "Built by engineers. Delivered by engineers.",
    description:
      "ENGXLABS was founded by experienced engineering and automation leaders with deep expertise in enterprise systems, quality engineering, and delivery. We don't just advise — we build.",
    points: [
      "Deep enterprise engineering background",
      "Automation-native thinking",
      "Real implementation experience",
    ],
    color: "blue",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 2" />
        <path d="M8 14h2M18 14h2M14 8v-2M14 20v2" />
      </svg>
    ),
    label: "AI Native",
    headline: "AI-first in everything we design.",
    description:
      "Every solution we build is designed from the ground up around modern AI capabilities — not retrofitted onto legacy approaches. AI is not a feature we add; it's the foundation we build on.",
    points: [
      "LLM-native architectures",
      "Agent-first design patterns",
      "Continuous model optimization",
    ],
    color: "cyan",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22V16l4-4 4 4 4-6 4 6" />
        <path d="M4 12V6h20v16" />
      </svg>
    ),
    label: "Outcome Driven",
    headline: "We measure results, not activity.",
    description:
      "Every engagement starts with defining what success looks like in business terms — cost reduction, time saved, quality improved, revenue influenced. Then we build toward those targets.",
    points: [
      "Business metric alignment",
      "Measurable ROI frameworks",
      "Continuous outcome tracking",
    ],
    color: "violet",
  },
];

const colorMap = {
  blue: {
    icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    label: "text-blue-400",
    bullet: "bg-blue-500",
    border: "hover:border-blue-500/30",
  },
  cyan: {
    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    label: "text-cyan-400",
    bullet: "bg-cyan-500",
    border: "hover:border-cyan-500/30",
  },
  violet: {
    icon: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    label: "text-violet-400",
    bullet: "bg-violet-500",
    border: "hover:border-violet-500/30",
  },
};

export default function WhyENGXLABS() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-32 bg-bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="section-label">Why ENGXLABS</p>
          <h2 className="heading-lg text-white mb-6">
            Why Organizations Choose ENGXLABS
          </h2>
          <p className="body-lg">
            We combine three capabilities that are rarely found together in one
            partner: deep engineering expertise, AI-native thinking, and
            unwavering focus on business outcomes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((p, i) => {
            const c = colorMap[p.color as keyof typeof colorMap];
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className={`card-base ${c.border} transition-all duration-300 p-8`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                  {p.icon}
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest ${c.label} mb-2`}>
                  {p.label}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.headline}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">{p.description}</p>
                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-xs text-text-secondary">
                      <div className={`w-1 h-1 rounded-full flex-shrink-0 ${c.bullet}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative rounded-3xl border border-white/[0.07] bg-white/[0.02] p-12 lg:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-accent-blue/[0.04] via-transparent to-transparent" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-2xl lg:text-3xl font-light text-white leading-relaxed mb-6">
              "Every business deserves access to enterprise-grade AI capabilities."
            </p>
            <p className="text-text-secondary leading-relaxed">
              We believe the future belongs to organizations that successfully combine human expertise
              with intelligent systems. ENGXLABS exists to help businesses make that transition
              — confidently, practically, and with measurable results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
