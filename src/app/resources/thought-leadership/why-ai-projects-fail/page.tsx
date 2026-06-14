import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Most Enterprise AI Projects Fail to Scale — ENGXLABS",
  description:
    "60% of AI projects never reach production. Of those that do, most fail to deliver measurable value within 18 months. Here are the four root causes — and what successful organizations do instead.",
  openGraph: {
    title: "Why Most Enterprise AI Projects Fail to Scale",
    description:
      "The failure rate in enterprise AI is not a technology problem. It is an ownership, governance, and operational capability problem. Here is what is actually going wrong.",
    url: "https://engxlabs.com/resources/thought-leadership/why-ai-projects-fail",
    siteName: "ENGXLABS",
    type: "article",
  },
};

const rootCauses = [
  {
    number: "01",
    title: "No clear business ownership",
    color: "violet",
    body: [
      "Every AI project that fails eventually reveals the same structural problem: the project was owned by a technology team but the success criteria belonged to a business function. Technology teams can build AI systems. They cannot own the business outcomes those systems are supposed to produce.",
      "Successful AI deployments have a named business owner who is accountable for what the AI delivers — not accountable for the technology, but accountable for whether it reduces cost, improves quality, or increases throughput in their area of the business.",
      "Without that person, AI systems get built, deployed, and then gradually ignored as the teams that were supposed to use them find workarounds or simply stop using them. The technology often continues running for months before anyone formally acknowledges it is not delivering value.",
    ],
  },
  {
    number: "02",
    title: "Treating AI as a project, not a capability",
    color: "blue",
    body: [
      "Projects have end dates. Capabilities do not. The most common organizational frame for AI investment is the project frame: there is a scope, a timeline, a budget, and a definition of done. When the project delivers, the budget closes and the team moves on.",
      "But AI systems require continuous evaluation, tuning, and governance. The model that performed well at launch will drift. The data it was trained on will go stale. The business context it was designed for will evolve. Without ongoing investment, the system degrades — often imperceptibly at first, then suddenly.",
      "Organizations that treat AI as a capability build the operational infrastructure to run it: evaluation cadences, improvement cycles, owned metrics, and resources dedicated to continuity. Those that treat it as a project build systems that slowly decay.",
    ],
  },
  {
    number: "03",
    title: "Missing observability",
    color: "cyan",
    body: [
      "You cannot improve what you cannot see. This is a first principle in software operations, and it applies even more forcefully to AI systems — because AI failure is often subtle. A traditional software system that breaks usually breaks loudly. An AI system that degrades often does so quietly: outputs become slightly less accurate, edge cases are handled slightly worse, user trust erodes gradually.",
      "The minimum observability stack for a production AI system includes input and output logging, latency tracking, quality metrics sampled on a regular cadence, and alerting when metrics move outside normal bounds. For systems that handle sensitive decisions, it also includes auditability — the ability to explain why the system produced a given output.",
      "Most AI projects that fail to scale were deployed without this infrastructure. The teams running them could not see what was happening, so they could not course-correct. By the time problems were visible, trust had already been lost.",
    ],
  },
  {
    number: "04",
    title: "Unresolved data debt",
    color: "violet",
    body: [
      "Pilots run on curated data. Production runs on real data. The difference is significant. Real data has inconsistencies, gaps, formatting variations, stale records, and edge cases that were not represented in the carefully assembled pilot dataset.",
      "Organizations that discover their data problems after deployment face the worst possible situation: a system that is supposed to be delivering value but is being undermined by data quality issues that are expensive to fix retroactively. Every week that passes before the data is fixed is a week of degraded performance being observed by real users.",
      "The organizations that avoid this pattern invest in data quality before they invest in AI deployment. This is slower and less exciting than building the AI system. It also dramatically increases the probability that the AI system will actually work.",
    ],
  },
];

const colorMap: Record<string, { num: string; border: string; bg: string }> = {
  violet: { num: "text-violet-400", border: "border-violet-500/20", bg: "bg-violet-500/[0.05]" },
  blue: { num: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/[0.05]" },
  cyan: { num: "text-cyan-400", border: "border-cyan-500/20", bg: "bg-cyan-500/[0.05]" },
};

export default function WhyAIProjectsFail() {
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
          href="/resources/thought-leadership"
          className="inline-flex items-center gap-2 text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors mb-12"
        >
          ← Back to Thought Leadership
        </Link>

        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {["AI Strategy", "Enterprise", "Failure Modes"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                {tag}
              </span>
            ))}
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">May 2026</span>
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">7 min read</span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
            style={{ letterSpacing: "-0.5px" }}
          >
            Why Most Enterprise AI Projects Fail to Scale
          </h1>
          <p className="text-lg text-[#A1A1AA] leading-relaxed">
            IDC estimates that 60% of AI projects never make it to production. Of those that do, a significant
            portion fail to deliver measurable business value within 18 months. This is not a technology problem.
          </p>
        </header>

        <div className="space-y-14 text-[#A1A1AA]">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              The Pattern
            </h2>
            <p className="leading-relaxed mb-4">
              The story is consistent across industries, company sizes, and geographies. A leadership team
              identifies an AI opportunity. A project is funded. A team is assembled. A pilot is run. The pilot
              succeeds — it always succeeds, because pilots are designed to succeed. A deployment is planned.
              And then, somewhere between the pilot and production, things stall.
            </p>
            <p className="leading-relaxed mb-4">
              The AI system that worked beautifully in the controlled environment of the pilot does not behave
              the same way in production. Or it does, initially, but there is no process to maintain it. Or it
              delivers value, but no one measured the baseline, so the value cannot be demonstrated to the
              people who funded the project. Or it works perfectly but nobody uses it because the change
              management plan was an afterthought.
            </p>
            <p className="leading-relaxed">
              The pattern is predictable. The failure modes are well-understood. And yet they repeat, in
              organization after organization, because the conditions that create them are also predictable —
              and rarely addressed before deployment.
            </p>
          </section>

          {/* Root causes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8" style={{ letterSpacing: "-0.3px" }}>
              Four Root Causes
            </h2>
            <div className="space-y-8">
              {rootCauses.map((cause) => {
                const c = colorMap[cause.color];
                return (
                  <div key={cause.number} className={`rounded-xl border ${c.border} ${c.bg} p-7`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`text-3xl font-black font-mono ${c.num}`}>{cause.number}</span>
                      <h3 className="text-lg font-bold text-white">{cause.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {cause.body.map((para, i) => (
                        <p key={i} className="text-sm leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* What successful orgs do */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              What Successful Organizations Do Differently
            </h2>
            <p className="leading-relaxed mb-6">
              The organizations that consistently deliver value from AI investment share a set of behaviors
              that distinguish them from the majority. None of these behaviors are technically complex.
              All of them require organizational discipline.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "They define AI as an operational capability, not a project",
                  body: "AI systems have ongoing owners, ongoing budgets, and ongoing improvement cycles. The build is not the end; it is the beginning of an operational lifecycle.",
                },
                {
                  title: "They invest in evaluation infrastructure before deployment",
                  body: "Before any AI system goes live, they have built the test suite, defined the metrics, and established the baseline. Success and failure are measurable from day one.",
                },
                {
                  title: "They assign business ownership explicitly",
                  body: "A named business leader is accountable for each AI system's outcomes. This person has authority over whether the system continues, evolves, or is decommissioned.",
                },
                {
                  title: "They treat data quality as a prerequisite",
                  body: "They fix data before they deploy AI, not after. The investment in data quality is a known cost of AI deployment, not a surprise that surfaces in production.",
                },
                {
                  title: "They run continuous improvement cycles",
                  body: "Weekly or monthly reviews of production metrics, regular updates to prompts or models, and quarterly roadmap reviews for each AI system in production.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white/[0.03] border border-white/[0.07] rounded-xl p-6">
                  <div className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Closing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              The Shift That Makes the Difference
            </h2>
            <p className="leading-relaxed mb-4">
              The fundamental shift required is from thinking about AI as something you deploy to thinking about
              it as something you operate. Deployment is a moment in time. Operations is an ongoing commitment.
            </p>
            <p className="leading-relaxed">
              Organizations that make this shift stop asking "when will the AI project be done?" and start
              asking "how is our AI capability performing this month?" That is a different question — and it
              is the right one.
            </p>
          </section>

          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3">From ENGXLABS</p>
            <p className="text-white font-medium mb-3 leading-relaxed">
              ENGXLABS builds AI systems with production operations in mind from the beginning — not as an
              afterthought. We design evaluation infrastructure, assign governance, and build improvement cycles
              into every engagement.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
            >
              Talk to us about building AI that lasts →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/resources/thought-leadership" className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors">
            ← Back to Thought Leadership
          </Link>
          <Link href="/resources/thought-leadership/ai-native-vs-ai-enabled" className="text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium">
            Next: AI Native vs. AI Enabled →
          </Link>
        </div>
      </div>
    </main>
  );
}
