import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Measuring AI ROI: The Metrics That Actually Matter — ENGXLABS",
  description:
    "Most teams measure the wrong things when evaluating AI — tokens processed, queries answered, models deployed. These are activity metrics, not outcome metrics.",
  openGraph: {
    title: "Measuring AI ROI: The Metrics That Actually Matter",
    description:
      "A practical three-tier framework for measuring AI ROI in terms executives and business owners actually care about.",
    url: "https://engxlabs.com/resources/insights/measuring-ai-roi",
    siteName: "ENGXLABS",
    type: "article",
  },
};

const tiers = [
  {
    label: "Tier 1 — Efficiency",
    color: "blue",
    tagline: "Time and cost",
    metrics: [
      { name: "Task completion time", description: "How long does a given task take with AI vs. without? Measure end-to-end, not just the AI-assisted portion." },
      { name: "Error rate", description: "What percentage of outputs require correction or rework? Lower error rates reduce downstream costs." },
      { name: "Cost per unit of work", description: "What does it cost to process one invoice, answer one support ticket, or review one document? AI should reduce this." },
    ],
  },
  {
    label: "Tier 2 — Quality",
    color: "cyan",
    tagline: "Output and reliability",
    metrics: [
      { name: "Accuracy / precision", description: "Are the outputs correct? Define what correct means for your specific use case before deployment." },
      { name: "Consistency", description: "Does AI produce the same quality output across different inputs, team members, and time periods?" },
      { name: "Human override rate", description: "How often do people override or ignore AI suggestions? High override rates signal poor relevance or poor trust." },
    ],
  },
  {
    label: "Tier 3 — Scale",
    color: "violet",
    tagline: "Capacity and leverage",
    metrics: [
      { name: "Volume per team member", description: "How much more work can a team handle with AI assistance at the same headcount?" },
      { name: "Time-to-value for new use cases", description: "How quickly can you deploy AI to a new workflow? This measures organizational AI capability, not just tool performance." },
      { name: "Workflow AI coverage", description: "What percentage of your high-frequency workflows have AI assistance? This measures strategic progress over time." },
    ],
  },
];

const colorMap: Record<string, { border: string; label: string; bg: string }> = {
  blue: { border: "border-blue-500/25", label: "text-blue-400", bg: "bg-blue-500/[0.06]" },
  cyan: { border: "border-cyan-500/25", label: "text-cyan-400", bg: "bg-cyan-500/[0.06]" },
  violet: { border: "border-violet-500/25", label: "text-violet-400", bg: "bg-violet-500/[0.06]" },
};

export default function MeasuringAIROI() {
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
        {/* Back */}
        <Link
          href="/resources/insights"
          className="inline-flex items-center gap-2 text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors mb-12"
        >
          ← Back to Insights
        </Link>

        {/* Header */}
        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {["ROI", "Metrics", "AI Strategy"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                {tag}
              </span>
            ))}
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">May 2026</span>
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">6 min read</span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
            style={{ letterSpacing: "-0.5px" }}
          >
            Measuring AI ROI: The Metrics That Actually Matter
          </h1>
          <p className="text-lg text-[#A1A1AA] leading-relaxed">
            Executives want to know if AI is working. Most teams measure the wrong things — tokens processed,
            queries answered, models deployed. These are activity metrics, not outcome metrics.
          </p>
        </header>

        {/* Body */}
        <div className="space-y-14 text-[#A1A1AA]">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              Why Traditional Frameworks Miss the Mark
            </h2>
            <p className="leading-relaxed mb-4">
              When a team deploys an AI tool, the natural first question from leadership is: "Is it working?"
              The natural first answer is to report what is easy to measure — usage statistics, queries processed,
              or time saved on individual tasks. These metrics feel concrete but they don't answer the question
              that matters: "Is the business better off?"
            </p>
            <p className="leading-relaxed mb-4">
              Activity metrics can improve while business outcomes stay flat or get worse. An AI tool can
              process 10,000 documents a day while still producing outputs that require significant manual review,
              delaying the downstream processes that depend on them.
            </p>
            <p className="leading-relaxed">
              Measuring AI ROI requires connecting what the AI does to what the business cares about: cost,
              quality, speed, and capacity. The three-tier model below gives you a framework to do that.
            </p>
          </section>

          {/* Three-tier model */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8" style={{ letterSpacing: "-0.3px" }}>
              The Three-Tier Measurement Model
            </h2>
            <div className="space-y-6">
              {tiers.map((tier) => {
                const c = colorMap[tier.color];
                return (
                  <div key={tier.label} className={`rounded-xl border ${c.border} ${c.bg} p-6`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`text-xs font-bold uppercase tracking-widest ${c.label}`}>
                        {tier.label}
                      </span>
                      <span className="text-xs text-[#52525B]">—</span>
                      <span className="text-xs text-[#A1A1AA]">{tier.tagline}</span>
                    </div>
                    <div className="space-y-4">
                      {tier.metrics.map((m) => (
                        <div key={m.name} className="flex gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 mt-2 opacity-60" />
                          <div>
                            <span className="text-sm font-semibold text-white">{m.name}: </span>
                            <span className="text-sm leading-relaxed">{m.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Setting baselines */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              Setting Your Baseline Before You Start
            </h2>
            <p className="leading-relaxed mb-4">
              You cannot measure improvement without knowing where you started. This sounds obvious, but the
              majority of AI deployments begin without a documented baseline for the workflow being automated.
              After deployment, teams struggle to prove value because they have nothing to compare against.
            </p>
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 mb-6">
              <p className="text-sm font-semibold text-white mb-4">Before any AI deployment, capture:</p>
              <ul className="space-y-2.5">
                {[
                  "Average time to complete the target task (per instance)",
                  "Error or rework rate for the current process",
                  "Cost per unit of output (including human labor time)",
                  "Volume of tasks processed per week or month",
                  "Any existing quality benchmarks or SLAs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="leading-relaxed">
              Capture this data for at least two weeks before deployment. One week is not enough to smooth out
              variation. Two weeks gives you a stable baseline that will hold up under scrutiny.
            </p>
          </section>

          {/* Reporting to leadership */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              Reporting to Leadership
            </h2>
            <p className="leading-relaxed mb-4">
              Leadership does not think in tokens or queries. They think in cost, risk, revenue, and competitive
              position. When you report on AI ROI, translate your metrics into those terms.
            </p>
            <p className="leading-relaxed mb-4">
              "Our AI system processes support tickets 40% faster" is an activity statement. "Our AI system
              allows our three-person support team to handle the ticket volume that previously required five
              people, freeing two roles for higher-value work" is a business statement.
            </p>
            <p className="leading-relaxed mb-4">
              Be honest about what is still maturing. AI systems improve over time, but they also degrade if
              not maintained. A clean report shows current performance against baseline, trend over time, and
              what is being done to continuously improve. It does not oversell early results or hide emerging
              issues.
            </p>
            <p className="leading-relaxed">
              The organizations that build lasting confidence in their AI investments are the ones that report
              transparently — including when something is not working as expected.
            </p>
          </section>

          {/* Callout */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              From ENGXLABS
            </p>
            <p className="text-white font-medium mb-3 leading-relaxed">
              Every ENGXLABS engagement starts with defining what success looks like in business terms — before
              any AI is deployed. We build the measurement framework alongside the solution so you always know
              whether it is working.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Talk to us about your AI investment →
            </a>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/resources/insights"
            className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors"
          >
            ← Back to Insights
          </Link>
          <Link
            href="/resources/insights/ai-adoption-mid-market"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            ← Previous: AI Adoption in Mid-Market
          </Link>
        </div>
      </div>
    </main>
  );
}
