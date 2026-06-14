import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Run an AI Readiness Assessment — ENGXLABS",
  description:
    "A structured methodology for assessing AI readiness across people, process, data, and technology — and building the roadmap that follows.",
  openGraph: {
    title: "How to Run an AI Readiness Assessment",
    description:
      "Before deploying AI, you need an honest picture of where you stand. This guide walks through the four dimensions of readiness and how to turn the results into a prioritized transformation roadmap.",
    url: "https://engxlabs.com/resources/guides/ai-readiness-assessment",
    siteName: "ENGXLABS",
    type: "article",
  },
};

const dimensions = [
  {
    number: "01",
    title: "People Readiness",
    color: "blue",
    questions: [
      "Does leadership understand what AI can and cannot do — realistically, not based on vendor claims?",
      "Are there internal champions who can drive adoption across teams?",
      "How tolerant is the organization of experimentation, iteration, and occasional failure?",
      "Do teams have the bandwidth to participate in deployment and adoption, or is capacity already stretched?",
    ],
    signals: {
      strong: "Leadership has a clear, grounded view of AI. At least one team has already used AI tools in their workflow. There is appetite for change.",
      weak: "AI is a board mandate with no operational champion. Teams view AI as a threat. No one has used AI beyond basic productivity tools.",
    },
  },
  {
    number: "02",
    title: "Process Readiness",
    color: "cyan",
    questions: [
      "Which workflows are high-frequency, well-documented, and stable enough to automate?",
      "Where do manual handoffs and bottlenecks slow down operations?",
      "Are processes consistent across team members, or does execution vary significantly by individual?",
      "Is there a culture of process documentation, or does institutional knowledge live only in people's heads?",
    ],
    signals: {
      strong: "The organization has documented core workflows. Bottlenecks are visible and agreed-upon. There is consistency in how work gets done.",
      weak: "Processes are undocumented, highly variable, or in the middle of significant change. Multiple competing versions of the same workflow exist.",
    },
  },
  {
    number: "03",
    title: "Data Readiness",
    color: "violet",
    questions: [
      "Is the data that AI would need accessible to the teams that need it, or locked in siloed systems?",
      "Is data quality sufficient — clean, labeled, consistently formatted, and current?",
      "Are there governance policies covering sensitive or regulated data that affect what AI can access?",
      "How much historical data exists for the workflows you want to automate?",
    ],
    signals: {
      strong: "Core data is centralized, documented, and accessible. Data quality issues are known and have an owner. There are existing governance policies.",
      weak: "Data lives in disconnected systems. Quality is unknown or known to be poor. No governance framework exists for AI data use.",
    },
  },
  {
    number: "04",
    title: "Technology Readiness",
    color: "blue",
    questions: [
      "What does your current integration landscape look like — can AI connect to the systems it needs?",
      "What are your security and compliance requirements, and do they create hard constraints on AI deployment?",
      "Does your infrastructure have the capacity to run AI workloads, or will you need to expand it?",
      "Are there existing AI tools already in use that a new initiative should build on or integrate with?",
    ],
    signals: {
      strong: "Systems have accessible APIs. Security requirements are documented and have precedent for AI use cases. Some AI tooling is already in use.",
      weak: "Legacy systems with no integration path. Unclear or highly restrictive security requirements. No existing AI infrastructure.",
    },
  },
];

const colorMap: Record<string, { num: string; border: string; bg: string; dot: string }> = {
  blue: { num: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/[0.05]", dot: "bg-blue-500" },
  cyan: { num: "text-cyan-400", border: "border-cyan-500/20", bg: "bg-cyan-500/[0.05]", dot: "bg-cyan-500" },
  violet: { num: "text-violet-400", border: "border-violet-500/20", bg: "bg-violet-500/[0.05]", dot: "bg-violet-500" },
};

export default function AIReadinessAssessment() {
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
            {["AI Readiness", "Strategy", "Assessment"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                {tag}
              </span>
            ))}
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">May 2026</span>
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">10 min read</span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
            style={{ letterSpacing: "-0.5px" }}
          >
            How to Run an AI Readiness Assessment
          </h1>
          <p className="text-lg text-[#A1A1AA] leading-relaxed">
            Before deploying AI, you need to know where you stand. A structured readiness assessment gives you
            an honest picture across people, process, data, and technology — and tells you where to focus first.
          </p>
        </header>

        <div className="space-y-14 text-[#A1A1AA]">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              What an Assessment Is — and Isn't
            </h2>
            <p className="leading-relaxed mb-4">
              An AI Readiness Assessment is not a vendor evaluation checklist. It is not a technology audit.
              And it is definitely not a justification exercise for a decision that has already been made.
            </p>
            <p className="leading-relaxed mb-4">
              A good readiness assessment gives you an honest picture of your organization's current state
              across the four dimensions that determine whether an AI investment will succeed. It surfaces the
              gaps you need to close before deployment, identifies where you are already strong, and creates the
              foundation for a prioritized roadmap that is grounded in reality rather than ambition.
            </p>
            <p className="leading-relaxed">
              Done well, it takes two to four weeks and involves people from leadership, operations, IT, and the
              teams who will actually use the AI. Done poorly — or skipped entirely — it often leads to
              deployments that stall, fail to generate measurable value, or create more problems than they solve.
            </p>
          </section>

          {/* Four dimensions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              The Four Dimensions
            </h2>
            <p className="leading-relaxed mb-10">
              Readiness is not a single score. It exists across four dimensions, each of which can be a
              bottleneck independently. A highly process-ready organization with poor data quality will struggle
              just as much as a data-rich organization with a resistant culture.
            </p>
            <div className="space-y-8">
              {dimensions.map((dim) => {
                const c = colorMap[dim.color];
                return (
                  <div key={dim.number} className={`rounded-xl border ${c.border} ${c.bg} p-7`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`text-3xl font-black font-mono ${c.num}`}>{dim.number}</span>
                      <h3 className="text-lg font-bold text-white">{dim.title}</h3>
                    </div>
                    <p className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-widest mb-3">
                      Key Questions
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {dim.questions.map((q) => (
                        <li key={q} className="flex items-start gap-3 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} />
                          {q}
                        </li>
                      ))}
                    </ul>
                    <div className="grid sm:grid-cols-2 gap-4 text-xs">
                      <div className="bg-emerald-500/[0.07] border border-emerald-500/20 rounded-lg p-4">
                        <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-2">Strong signal</p>
                        <p className="text-[#A1A1AA] leading-relaxed">{dim.signals.strong}</p>
                      </div>
                      <div className="bg-red-500/[0.07] border border-red-500/20 rounded-lg p-4">
                        <p className="text-red-400 font-semibold uppercase tracking-widest mb-2">Weak signal</p>
                        <p className="text-[#A1A1AA] leading-relaxed">{dim.signals.weak}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Scoring */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              Scoring and Prioritization
            </h2>
            <p className="leading-relaxed mb-4">
              After working through each dimension, score your organization on a 1–5 scale. Be honest.
              Inflated scores create inflated expectations that AI deployments will disappoint.
            </p>
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 mb-6">
              <div className="grid grid-cols-5 gap-2 text-center text-xs mb-4">
                {[
                  { score: "1", label: "Not ready" },
                  { score: "2", label: "Early stage" },
                  { score: "3", label: "Developing" },
                  { score: "4", label: "Strong" },
                  { score: "5", label: "Mature" },
                ].map((s) => (
                  <div key={s.score} className="bg-white/[0.04] rounded-lg p-2">
                    <div className="text-white font-bold text-base mb-1">{s.score}</div>
                    <div className="text-[#52525B]">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Any dimension scoring 1–2 is a dependency that needs to be addressed before or alongside AI
                deployment, not after. Trying to deploy AI into a dimension that is not ready will expose those
                weaknesses at the worst possible time — when real users are relying on the system.
              </p>
            </div>
            <p className="leading-relaxed">
              Use the scores to prioritize use cases where multiple dimensions are strong. A 4+ across process
              and data, even with a 3 on people readiness, is a viable starting point if you include change
              management in the deployment plan. A 2 on data readiness, no matter how strong everything else is,
              requires a data improvement sprint before you proceed.
            </p>
          </section>

          {/* Output */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              The Output: What You Leave With
            </h2>
            <p className="leading-relaxed mb-6">
              A completed AI Readiness Assessment should produce three concrete artifacts:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "A readiness scorecard",
                  description: "Four dimension scores with supporting evidence, surfaced gaps, and agreed priorities. This becomes the reference point for all subsequent investment decisions.",
                },
                {
                  title: "A prioritized use-case map",
                  description: "The top 5–10 AI use cases ranked by readiness, business impact, and implementation complexity. Not every idea — the ones that can actually succeed in the near term.",
                },
                {
                  title: "A 12-month transformation roadmap",
                  description: "Quick wins (weeks 1–8) that build confidence and internal capability, followed by deeper integrations that compound on the foundation. With KPIs tied to business outcomes, not AI activity.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white/[0.03] border border-white/[0.07] rounded-xl p-6">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Callout */}
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
              From ENGXLABS
            </p>
            <p className="text-white font-medium mb-3 leading-relaxed">
              Our AI Readiness Assessment service runs in two weeks and produces all three output artifacts.
              It is the starting point for every ENGXLABS engagement because we have learned, consistently,
              that the deployments that fail do so because the readiness work was skipped.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Book a free assessment conversation →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/resources/guides" className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors">
            ← Back to Guides
          </Link>
          <Link href="/resources/guides/scaling-ai-agents" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
            Next: Scaling AI Agents →
          </Link>
        </div>
      </div>
    </main>
  );
}
