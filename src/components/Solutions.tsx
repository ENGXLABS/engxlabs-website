"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const solutions = [
  {
    id: "strategy",
    badge: "Lifecycle Strategy",
    title: "AI Lifecycle Strategy Copilot",
    tagline: "Prioritize the right bets first.",
    description:
      "Define how AI fits across Product Development Lifecycle (PDLC), Software Development Lifecycle (SDLC), and Agent Development Lifecycle (ADLC) with clear value milestones.",
    capabilities: [
      "PDLC, SDLC, and ADLC maturity assessment",
      "Use-case prioritization by business impact",
      "Agent opportunity mapping by function",
      "Value stream bottleneck identification",
      "Roadmap and KPI definition",
    ],
    color: "blue",
  },
  {
    id: "product",
    badge: "Product Development",
    title: "Product Copilot",
    tagline: "Discover faster. Build smarter.",
    description:
      "Embed AI into product discovery, backlog shaping, feature definition, and customer feedback loops so product teams ship what matters most.",
    capabilities: [
      "Requirements and PRD generation",
      "Backlog refinement and story slicing",
      "Feature impact prediction",
      "User feedback clustering",
      "Roadmap scenario simulation",
    ],
    color: "cyan",
  },
  {
    id: "engineering",
    badge: "Software Development",
    title: "Engineering Copilot",
    tagline: "Design, code, review, release.",
    description:
      "Accelerate core SDLC activities from architecture and implementation to code review, documentation, and release readiness.",
    capabilities: [
      "Intelligent code review",
      "Architecture guidance",
      "Documentation generation",
      "Knowledge base assistant",
      "PR summary & analysis",
    ],
    color: "cyan",
  },
  {
    id: "qe",
    badge: "Quality Engineering",
    title: "QE Copilot",
    tagline: "Shift-left quality. Lower release risk.",
    description:
      "Generate test assets, automate validation, and detect release risks early so quality becomes a continuous lifecycle capability.",
    capabilities: [
      "Intelligent test case generation",
      "Automation script creation",
      "Release risk scoring",
      "Defect pattern analysis",
      "Test coverage optimization",
    ],
    color: "violet",
  },
  {
    id: "adlcops",
    badge: "Agent Development Lifecycle",
    title: "ADLC & AgentOps Copilot",
    tagline: "Build, govern, and improve agents.",
    description:
      "Operationalize ADLC with guardrails, observability, evaluation, and continuous optimization for enterprise-grade agent systems.",
    capabilities: [
      "Agent design and safety patterns",
      "Agent evaluation and benchmark suites",
      "Observability and tracing",
      "Policy, audit, and governance controls",
      "Continuous tuning and lifecycle management",
    ],
    color: "cyan",
  },
];

const industries = [
  {
    name: "Healthcare",
    problem: "Clinical and operational teams lose time in fragmented workflows and manual handoffs.",
    outcome: "AI agents streamline intake, triage, and care ops so teams respond faster with better consistency.",
  },
  {
    name: "Financial Services",
    problem: "Risk, compliance, and service operations require high-volume, high-accuracy execution.",
    outcome: "Intelligent automation reduces review time, improves compliance quality, and accelerates decisions.",
  },
  {
    name: "Manufacturing",
    problem: "Plants struggle with downtime visibility, process variation, and reporting delays.",
    outcome: "AI copilots improve operational visibility, flag bottlenecks early, and optimize throughput.",
  },
  {
    name: "Retail",
    problem: "Teams need faster demand insights, customer support scale, and campaign coordination.",
    outcome: "AI-powered workflows improve customer response times and help teams act on real-time signals.",
  },
  {
    name: "Technology",
    problem: "Engineering and product teams face pressure to ship quickly without sacrificing quality.",
    outcome: "Engineering copilots accelerate delivery, improve release quality, and reduce cycle time.",
  },
  {
    name: "Education",
    problem: "Institutions need scalable learner support and operational efficiency with limited resources.",
    outcome: "AI assistants improve learner engagement and automate repetitive admin workflows.",
  },
];

const colorMap = {
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    dot: "bg-blue-500",
    bullet: "text-blue-400",
    glow: "group-hover:shadow-blue-500/10",
    border: "group-hover:border-blue-500/30",
  },
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    dot: "bg-cyan-500",
    bullet: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
    border: "group-hover:border-cyan-500/30",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    dot: "bg-violet-500",
    bullet: "text-violet-400",
    glow: "group-hover:shadow-violet-500/10",
    border: "group-hover:border-violet-500/30",
  },
};

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("strategy");

  const activeSol = solutions.find((s) => s.id === active)!;
  const c = colorMap[activeSol.color as keyof typeof colorMap];

  return (
    <section id="solutions" ref={ref} className="relative scroll-mt-24 py-20 md:py-28 lg:py-32 bg-bg-secondary overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <p className="section-label">Solutions</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="heading-lg text-white max-w-xl">Solutions Across PDLC, SDLC, and ADLC</h2>
            <p className="body-lg max-w-sm">
              We design and deploy AI capabilities across the full product, software,
              and agent lifecycle so teams move faster with better quality and control.
            </p>
          </div>
        </motion.div>

        {/* Tab selector — horizontally scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto mb-8 md:mb-10"
        >
          <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap pb-1">
          {solutions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                active === s.id
                  ? "bg-accent-blue/15 text-accent-blue border border-accent-blue/30"
                  : "text-text-secondary border border-transparent hover:text-text-primary hover:border-white/10"
              }`}
            >
              {s.badge}
            </button>
          ))}
          </div>
        </motion.div>

        {/* Active solution card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`group card-base ${c.border} ${c.glow} transition-all duration-300 p-5 sm:p-8 lg:p-12`}
        >
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badge} mb-4 inline-block`}>
                {activeSol.badge}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{activeSol.title}</h3>
              <p className="text-accent-blue font-medium mb-6">{activeSol.tagline}</p>
              <p className="text-text-secondary leading-relaxed text-base">{activeSol.description}</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                Key Capabilities
              </div>
              <ul className="space-y-3">
                {activeSol.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-3 text-sm text-text-secondary">
                    <svg className={`flex-shrink-0 ${c.bullet}`} width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {cap}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#contact" className="btn-primary">
                  Discuss This Solution
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Industry Solutions
            </h3>
            <p className="text-sm md:text-base text-text-secondary max-w-xl">
              We adapt AI transformation programs for each industry based on business constraints,
              operating realities, and measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <div key={industry.name} id={`industry-${industry.name.toLowerCase().replace(/\s+/g, "-")}`} className="card-base card-hover p-6 scroll-mt-28">
                <h4 className="text-base font-semibold text-white mb-3">{industry.name}</h4>
                <p className="text-xs uppercase tracking-widest text-text-muted mb-1.5">Business Problem</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{industry.problem}</p>
                <p className="text-xs uppercase tracking-widest text-accent-blue mb-1.5">AI Outcome</p>
                <p className="text-sm text-text-secondary leading-relaxed">{industry.outcome}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
