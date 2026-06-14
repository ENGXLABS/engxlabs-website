import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From Pilot to Production: Scaling AI Agents — ENGXLABS",
  description:
    "Most AI pilots succeed. Most production deployments struggle. Here is the production readiness checklist, governance model, and 90-day scaling plan that bridges the gap.",
  openGraph: {
    title: "From Pilot to Production: Scaling AI Agents",
    description:
      "The gap between a working demo and a reliable production system is wider than most teams expect. This guide shows you how to close it.",
    url: "https://engxlabs.com/resources/guides/scaling-ai-agents",
    siteName: "ENGXLABS",
    type: "article",
  },
};

const checklist = [
  { item: "Defined performance benchmarks with minimum acceptable thresholds", category: "Evaluation" },
  { item: "Evaluation suite covering both happy-path and edge-case scenarios", category: "Evaluation" },
  { item: "Observability: logging, tracing, and alerting in place before go-live", category: "Operations" },
  { item: "Human escalation path defined, documented, and tested end-to-end", category: "Operations" },
  { item: "Rollback mechanism in place — you can revert without data loss", category: "Operations" },
  { item: "Data pipeline validated end-to-end with production-representative data", category: "Data" },
  { item: "Security and access controls reviewed by a qualified engineer", category: "Security" },
  { item: "Latency and cost benchmarks established under realistic load", category: "Performance" },
  { item: "Named owner accountable for production performance and improvement", category: "Governance" },
  { item: "Failure mode documentation — what can go wrong and what happens when it does", category: "Governance" },
];

const phases = [
  {
    period: "Weeks 1–2",
    title: "Harden the evaluation suite",
    description:
      "Before anything runs in production, invest in the test infrastructure that will keep you honest. Document all known failure modes from the pilot. Add test cases for every edge case you encountered. Establish your performance baseline with a minimum acceptable score for each metric. If you cannot clearly define what 'good enough' looks like, you are not ready to proceed.",
  },
  {
    period: "Weeks 3–4",
    title: "Shadow mode deployment",
    description:
      "Run the AI system in parallel with the existing human workflow. AI processes inputs and produces outputs, but humans continue to do the work independently. Compare AI outputs to human outputs without the AI making any live decisions. This reveals gaps between pilot performance and real-world performance while the system has no impact on operations.",
  },
  {
    period: "Weeks 5–8",
    title: "Supervised production",
    description:
      "AI handles a defined subset of real work — typically the highest-confidence, lowest-risk cases. Humans review all AI outputs before any downstream action is taken. Track override rates, error rates, and latency daily. Hold a weekly review. Adjust thresholds, prompts, and context based on what you observe. The goal is to learn, not to hit coverage targets.",
  },
  {
    period: "Weeks 9–12",
    title: "Expanded production with confidence-based routing",
    description:
      "Route cases to the AI based on confidence scores. High-confidence cases proceed without human review. Lower-confidence cases get flagged for review. This is the first point at which AI is operating with real autonomy. Monitoring becomes more important, not less. Any anomalies in the week-over-week metrics should trigger an immediate review cycle.",
  },
  {
    period: "Month 4+",
    title: "Full production with automated monitoring",
    description:
      "The system is operating at scale. Human oversight shifts from reviewing individual outputs to monitoring aggregate metrics and reviewing flagged cases. The improvement loop is running: weekly evaluation, monthly model or prompt updates, quarterly roadmap reviews. This is the ADLC operating at production scale.",
  },
];

export default function ScalingAIAgents() {
  return (
    <main
      className="relative min-h-screen bg-[#0A0A0A]"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
    >
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/resources/guides"
          className="inline-flex items-center gap-2 text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors mb-12"
        >
          ← Back to Guides
        </Link>

        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {["AI Agents", "Production", "ADLC"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                {tag}
              </span>
            ))}
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">June 2026</span>
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">9 min read</span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
            style={{ letterSpacing: "-0.5px" }}
          >
            From Pilot to Production: Scaling AI Agents
          </h1>
          <p className="text-lg text-[#A1A1AA] leading-relaxed">
            Most AI pilots succeed. Most AI production deployments struggle. The gap between a working demo and
            a reliable production system is wider than most teams expect — and almost always avoidable.
          </p>
        </header>

        <div className="space-y-14 text-[#A1A1AA]">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              Why Pilots Don't Predict Production
            </h2>
            <p className="leading-relaxed mb-4">
              A pilot is a controlled experiment. It runs on curated data, with a small, motivated team,
              under close supervision. The people involved know it is a test. They catch issues before they
              escalate. They adjust behavior to make the pilot work.
            </p>
            <p className="leading-relaxed mb-4">
              Production is none of those things. Production runs on real data with all its inconsistencies.
              It serves users who did not choose to participate in an experiment. It runs unsupervised, at scale,
              at 2am when no one is watching. Edge cases that never appeared in testing surface constantly.
            </p>
            <p className="leading-relaxed">
              The gap is not a failure of the technology. It is a failure to plan for the difference between
              a controlled environment and an operational one. Closing that gap requires deliberate work before
              you move from pilot to production — not after you encounter problems.
            </p>
          </section>

          {/* Production readiness checklist */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              The Production Readiness Checklist
            </h2>
            <p className="leading-relaxed mb-8">
              Before declaring an AI agent production-ready, every item on this list should have a clear,
              documented answer. If any item is unknown, you are not ready.
            </p>
            {(["Evaluation", "Operations", "Data", "Security", "Performance", "Governance"] as const).map((cat) => {
              const items = checklist.filter((c) => c.category === cat);
              if (!items.length) return null;
              return (
                <div key={cat} className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#52525B] mb-3">{cat}</p>
                  <div className="space-y-2.5">
                    {items.map((item) => (
                      <div key={item.item} className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-3.5">
                        <div className="w-4 h-4 rounded border border-white/20 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item.item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>

          {/* 90-day plan */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              A 90-Day Scaling Plan
            </h2>
            <p className="leading-relaxed mb-10">
              Moving from pilot to full production is not a single cutover event. It is a staged rollout that
              builds confidence incrementally. Each phase answers a specific question before adding risk.
            </p>
            <div className="space-y-4">
              {phases.map((phase, i) => (
                <div key={phase.period} className="flex gap-5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-cyan-400">{i + 1}</span>
                    </div>
                    {i < phases.length - 1 && <div className="w-px flex-1 bg-white/[0.06]" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#52525B] mb-1">{phase.period}</p>
                    <h3 className="text-base font-semibold text-white mb-2">{phase.title}</h3>
                    <p className="text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Governance */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              The Governance You Need
            </h2>
            <p className="leading-relaxed mb-6">
              Production AI without governance is a liability. The minimum governance model for an AI agent
              in production includes four elements:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Named owner", body: "One person who is accountable for the system's performance and outcomes. Not the vendor. Not the IT team. A business owner." },
                { title: "Regular evaluation cadence", body: "Weekly performance reviews during the first 90 days, moving to monthly once the system is stable. Metrics reviewed against baseline every cycle." },
                { title: "Failure capture process", body: "A documented way to report, investigate, and learn from failures. Every production failure is an opportunity to improve the evaluation suite." },
                { title: "Audit logging", body: "For regulated use cases — financial, healthcare, legal — maintain logs of AI inputs, outputs, and decisions. Non-negotiable in many industries." },
              ].map((item) => (
                <div key={item.title} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cross-link to ADLC */}
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">Go Deeper</p>
            <p className="text-white font-medium mb-3 leading-relaxed">
              Everything described in this guide is a subset of the Agent Development Lifecycle (ADLC) — the
              full framework for building, governing, and continuously improving AI agent systems at enterprise scale.
            </p>
            <Link
              href="/blog/adlc"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Read the complete ADLC guide →
            </Link>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">From ENGXLABS</p>
            <p className="text-white font-medium mb-3 leading-relaxed">
              ENGXLABS deploys and operationalizes AI agents for mid-market organizations. We run the ADLC from
              evaluation design through production governance — so your system is built to last, not just to demo.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Talk to us about your agent deployment →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/resources/guides" className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors">
            ← Back to Guides
          </Link>
          <Link href="/resources/guides/ai-readiness-assessment" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
            ← Previous: AI Readiness Assessment
          </Link>
        </div>
      </div>
    </main>
  );
}
