"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Create an AI Roadmap With Clear ROI",
    description:
      "Assess readiness, prioritize the right use cases, and align AI adoption to business goals, timelines, and measurable value.",
    outcomes: ["AI Readiness Assessment", "Priority Use Case Map", "12-Month Roadmap", "ROI Framework"],
    accent: "blue",
  },
  {
    number: "02",
    title: "Deploy Intelligent Agents Across Teams",
    description:
      "Design and launch AI agents that automate complex multi-step workflows and support better decisions in day-to-day operations.",
    outcomes: ["Workflow Agents", "Decision Automation", "Multi-step Orchestration", "Human-in-the-Loop Design"],
    accent: "cyan",
  },
  {
    number: "03",
    title: "Reduce Manual Work With AI Automation",
    description:
      "Connect systems, teams, and workflows with AI-powered automation that removes bottlenecks and lowers operational overhead.",
    outcomes: ["Process Mining", "System Integration", "Data Pipeline Automation", "Compliance Workflows"],
    accent: "violet",
  },
  {
    number: "04",
    title: "Build AI Native Products and Platforms",
    description:
      "Build production-grade AI applications, copilots, and knowledge systems that become long-term competitive advantages.",
    outcomes: ["Custom AI Applications", "RAG Knowledge Systems", "Copilot Development", "AI Platform Engineering"],
    accent: "blue",
  },
  {
    number: "05",
    title: "Scale Adoption Through Managed AI Operations",
    description:
      "Operate, govern, and continuously optimize your AI stack so outcomes improve as your business scales.",
    outcomes: ["AI Operations", "Continuous Improvement", "Governance Framework", "Quarterly Reviews"],
    accent: "cyan",
  },
];

const accentColors = {
  blue: { label: "text-blue-400", bg: "bg-blue-500/8", border: "border-blue-500/20", tag: "bg-blue-500/10 text-blue-400" },
  cyan: { label: "text-cyan-400", bg: "bg-cyan-500/8", border: "border-cyan-500/20", tag: "bg-cyan-500/10 text-cyan-400" },
  violet: { label: "text-violet-400", bg: "bg-violet-500/8", border: "border-violet-500/20", tag: "bg-violet-500/10 text-violet-400" },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-20 md:py-28 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <p className="section-label">Services</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6">
            <h2 className="heading-lg text-white max-w-xl">
              Outcome-Driven AI Transformation Services
            </h2>
            <p className="body-lg max-w-md">
              Five practice areas that cover the full lifecycle of becoming an
              AI Native organization — from strategy through continuous
              operation.
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {services.map((s, i) => {
            const c = accentColors[s.accent as keyof typeof accentColors];
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className={`group card-base card-hover p-8`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <span className={`text-sm font-mono font-bold ${c.label} flex-shrink-0 w-8`}>
                    {s.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5 max-w-2xl">
                      {s.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.outcomes.map((o) => (
                        <span
                          key={o}
                          className={`text-xs font-medium px-3 py-1 rounded-full ${c.tag}`}
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 hidden md:flex items-center self-center">
                    <svg
                      className={`${c.label} opacity-0 group-hover:opacity-100 transition-opacity`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
