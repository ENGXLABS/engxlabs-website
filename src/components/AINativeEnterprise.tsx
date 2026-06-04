"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const departments = [
  { id: "sales", label: "Sales Copilot", color: "blue", description: "Pipeline analysis, proposal drafting, deal coaching" },
  { id: "support", label: "Support Agent", color: "cyan", description: "Instant resolution, escalation routing, knowledge retrieval" },
  { id: "hr", label: "HR Assistant", color: "violet", description: "Onboarding, policy Q&A, talent insights" },
  { id: "engineering", label: "Engineering Copilot", color: "blue", description: "Code review, documentation, architecture guidance" },
  { id: "qe", label: "QE Copilot", color: "cyan", description: "Test generation, risk analysis, coverage optimization" },
  { id: "ops", label: "Operations Agent", color: "violet", description: "Process automation, reporting, workflow orchestration" },
];

const colorMap = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", dot: "bg-blue-500" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-500" },
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-500" },
};

export default function AINativeEnterprise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-32 bg-bg-secondary overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">The AI Native Enterprise</p>
            <h2 className="heading-lg text-white mb-6">
              What Does an AI Native Company Look Like?
            </h2>
            <p className="body-lg mb-8">
              AI should not be another tool layered on top of old workflows.
              It should become an operating layer that supports leadership,
              teams, and decisions across the business.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-10">
              ENGXLABS designs and deploys AI agents that sit between your
              teams and systems, while providing leadership with a live view of
              performance through an executive AI dashboard.
            </p>

            <div className="space-y-2.5 mb-10">
              {[
                "Leadership -> Executive AI Dashboard",
                "Sales Team -> Sales Copilot",
                "Support Team -> Support Agent",
                "Engineering Team -> Engineering Copilot",
                "Operations Team -> Operations Agent",
              ].map((line) => (
                <div
                  key={line}
                  className="text-sm text-text-secondary border border-white/[0.08] bg-white/[0.02] rounded-lg px-3 py-2"
                >
                  {line}
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary py-3.5 px-7 text-base">
              See How It Works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Right: org chart viz */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Leadership node */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl px-8 py-4 text-center w-56">
              <div className="text-xs text-text-muted mb-1 uppercase tracking-widest font-semibold">Your Organization</div>
              <div className="text-base font-semibold text-white">Leadership</div>
            </div>

            {/* Connecting line with label */}
            <div className="flex flex-col items-center gap-0">
              <div className="w-px h-4 bg-white/10" />
              <div className="bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                AI Layer
              </div>
              <div className="w-px h-4 bg-accent-blue/30" />
            </div>

            {/* Agent cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {departments.map((d, i) => {
                const c = colorMap[d.color as keyof typeof colorMap];
                return (
                  <motion.button
                    key={d.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
                    onClick={() => setActive(active === d.id ? null : d.id)}
                    className={`${c.bg} border ${active === d.id ? c.border : "border-white/[0.07]"} rounded-xl p-3 text-left transition-all duration-200 hover:${c.border} cursor-pointer`}
                  >
                    <div className={`w-2 h-2 rounded-full ${c.dot} mb-2`} />
                    <div className={`text-xs font-semibold ${active === d.id ? c.text : "text-text-primary"} leading-tight`}>
                      {d.label}
                    </div>
                    {active === d.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-[10px] text-text-secondary mt-2 leading-relaxed"
                      >
                        {d.description}
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
            <p className="text-[11px] text-text-muted text-center">Tap a card to explore each AI capability</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
