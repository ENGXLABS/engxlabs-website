"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    label: "Discover",
    duration: "Weeks 1–2",
    description:
      "Deep-dive into your business objectives, workflows, pain points, and AI opportunities. We map what exists, what's possible, and where AI delivers the most value.",
    deliverables: ["AI opportunity map", "Workflow analysis", "Readiness report", "Priority ranking"],
    color: "blue",
  },
  {
    number: "02",
    label: "Design",
    duration: "Weeks 3–4",
    description:
      "Define the AI architecture, operating model, governance framework, and implementation blueprint. Every technical decision traces back to a business outcome.",
    deliverables: ["Technical architecture", "Governance framework", "Implementation blueprint", "Success metrics"],
    color: "cyan",
  },
  {
    number: "03",
    label: "Deploy",
    duration: "Weeks 5–14",
    description:
      "Build and integrate AI capabilities directly into real business workflows. Iterative delivery with continuous stakeholder alignment and user adoption focus.",
    deliverables: ["Working AI system", "Integration testing", "User training", "Go-live support"],
    color: "violet",
  },
  {
    number: "04",
    label: "Optimize",
    duration: "Ongoing",
    description:
      "Continuously measure outcomes, improve model performance, expand adoption, and scale AI capabilities as your business grows and objectives evolve.",
    deliverables: ["Performance monitoring", "Adoption analytics", "Iterative improvements", "Capability expansion"],
    color: "blue",
  },
];

const colorMap = {
  blue: { num: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", tag: "bg-blue-500/10 text-blue-400", line: "bg-blue-500/40" },
  cyan: { num: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", tag: "bg-cyan-500/10 text-cyan-400", line: "bg-cyan-500/40" },
  violet: { num: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", tag: "bg-violet-500/10 text-violet-400", line: "bg-violet-500/40" },
};

export default function Framework() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="method" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Left ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-blue/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <p className="section-label">Our Approach</p>
          <h2 className="heading-lg text-white mb-6">
            From AI Exploration to AI Transformation
          </h2>
          <p className="body-lg">
            A proven four-step framework that moves organizations from initial
            discovery through full deployment — and then keeps improving.
          </p>
        </motion.div>

        {/* Step selector timeline */}
        <div className="flex items-center justify-center gap-0 mb-12 overflow-x-auto pb-2">
          {steps.map((step, i) => {
            const c = colorMap[step.color as keyof typeof colorMap];
            return (
              <div key={step.number} className="flex items-center">
                <button
                  onClick={() => setActive(i)}
                  className={`flex flex-col items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                    active === i ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                      active === i
                        ? `${c.bg} ${c.border} ${c.num}`
                        : "border-white/10 text-text-muted"
                    }`}
                  >
                    {i < 3 ? step.number : "∞"}
                  </div>
                  <span className={`text-xs font-semibold ${active === i ? "text-white" : "text-text-muted"}`}>
                    {step.label}
                  </span>
                  <span className="text-[10px] text-text-muted">{step.duration}</span>
                </button>
                {i < steps.length - 1 && (
                  <div className="w-8 h-px bg-white/10 flex-shrink-0 mx-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Active step detail */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {(() => {
            const step = steps[active];
            const c = colorMap[step.color as keyof typeof colorMap];
            return (
              <div className={`card-base border ${c.border} ${c.bg} p-8 lg:p-12 max-w-4xl mx-auto`}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className={`text-5xl font-black ${c.num} mb-4 font-mono`}>{step.number}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.label}</h3>
                    <p className="text-sm text-text-muted mb-4 uppercase tracking-widest font-semibold">{step.duration}</p>
                    <p className="text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Deliverables</div>
                    <ul className="space-y-3">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-sm text-text-secondary">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.line}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>
      </div>
    </section>
  );
}
