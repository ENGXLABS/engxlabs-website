"use client";

import { motion, useReducedMotion } from "framer-motion";

const systems = ["CRM", "ERP", "Support", "Knowledge", "Analytics"];
const agents = [
  "Sales Copilot",
  "Engineering Agent",
  "Support Agent",
  "QE Copilot",
  "HR Assistant",
  "Ops Agent",
];

function AIFlowViz() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-accent-blue/5 blur-3xl" />
      </div>

      {/* Business Teams — top */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center mb-4"
      >
        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3">
          <div className="flex -space-x-2">
            {["bg-blue-500", "bg-violet-500", "bg-emerald-500", "bg-amber-500"].map((c, i) => (
              <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-[#0A0A0A]`} />
            ))}
          </div>
          <span className="text-sm font-medium text-text-primary ml-1">Business Teams</span>
        </div>
      </motion.div>

      {/* Connector line down */}
      <div className="flex justify-center">
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/20 to-accent-blue/60"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
      </div>

      {/* AI Agents layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative border border-accent-blue/30 rounded-2xl p-4 bg-accent-blue/[0.04] glow-blue mb-0"
      >
        <div className="text-center mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-blue">
            AI Agent Layer
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {agents.map((agent, i) => (
            <motion.div
              key={agent}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08, duration: 0.4 }}
              className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg px-2 py-2 text-center"
            >
              <span className="text-[10px] font-medium text-blue-300 leading-tight block">
                {agent}
              </span>
            </motion.div>
          ))}
        </div>
        {/* Pulse indicator */}
        {!prefersReduced && (
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-accent-blue">
            <div className="absolute inset-0 rounded-full bg-accent-blue animate-ping opacity-60" />
          </div>
        )}
      </motion.div>

      {/* Connector line down */}
      <div className="flex justify-center">
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-accent-blue/60 to-white/10"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        />
      </div>

      {/* Business Systems */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="flex justify-center gap-2 flex-wrap"
      >
        {systems.map((sys, i) => (
          <motion.div
            key={sys}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 + i * 0.07 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-xs font-medium text-text-secondary hover:border-white/20 hover:text-text-primary transition-all cursor-default"
          >
            {sys}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0A0A0A]" />

      {/* Blue gradient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-blue/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
              AI Native Engineering & Transformation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="heading-xl text-white mb-6"
            >
              Build an{" "}
              <span className="gradient-text-blue">AI Native</span>{" "}
              Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="body-lg text-lg max-w-xl mb-10"
            >
              We help growing businesses deploy AI agents, automate operations,
              and build AI native workflows without hiring an internal AI team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-16"
            >
              <a href="#contact" className="btn-primary py-3.5 px-6 text-sm sm:text-base justify-center sm:justify-start">
                Free AI Transformation Assessment
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#solutions" className="btn-secondary py-3.5 px-6 text-sm sm:text-base justify-center sm:justify-start">
                Explore Solutions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.6 }}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              {[
                "AI Native Engineering",
                "Enterprise Ready",
                "Security First",
                "Outcome Driven",
                "Human + AI Collaboration",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/[0.06]"
            >
              {[
                { value: "10–500", label: "Employee businesses served" },
                { value: "5 Practices", label: "AI transformation areas" },
                { value: "4-Step", label: "Proven methodology" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <AIFlowViz />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
      </motion.div>
    </section>
  );
}
