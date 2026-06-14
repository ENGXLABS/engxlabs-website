import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Adoption in Mid-Market Companies: What's Actually Working — ENGXLABS",
  description:
    "Most AI coverage focuses on Fortune 500 experiments or startup demos. The most interesting adoption story is happening in the 10–500 employee range.",
  openGraph: {
    title: "AI Adoption in Mid-Market Companies: What's Actually Working",
    description:
      "Observations from working with 10–500 employee companies on what's driving real AI adoption and what keeps getting in the way.",
    url: "https://engxlabs.com/resources/insights/ai-adoption-mid-market",
    siteName: "ENGXLABS",
    type: "article",
  },
};

const patterns = [
  {
    number: "01",
    title: "Start with a high-frequency, measurable workflow",
    body: "The companies seeing the fastest ROI are not picking the most exciting AI use case. They are picking the most repetitive one — the workflow that happens 50 times a day, where even a 20% efficiency gain compounds quickly. If the workflow touches many people and has a clear output, it is a strong candidate.",
  },
  {
    number: "02",
    title: "Build internal fluency before deploying to customers",
    body: "External-facing AI carries higher risk. Internal automation — in operations, finance, HR, or engineering — allows teams to learn how AI behaves in their specific context before those behaviors affect a customer. Companies that start internal consistently report faster iteration cycles and fewer production failures.",
  },
  {
    number: "03",
    title: "Treat data quality as a prerequisite, not an afterthought",
    body: "AI amplifies whatever it is given. Clean, structured, accessible data produces reliable AI outputs. Fragmented, undocumented, inconsistent data produces unreliable ones. The mid-market companies succeeding at AI have usually invested at least one quarter cleaning up core data assets before attempting AI deployment.",
  },
  {
    number: "04",
    title: "Define success metrics before deployment",
    body: "Without a defined baseline and target, every AI deployment eventually becomes a conversation about whether it is working. Teams that define 'what good looks like' before the first line of code is written can defend their results — and know when to course-correct.",
  },
  {
    number: "05",
    title: "Assign clear ownership",
    body: "AI without an owner becomes shelfware. The most common mid-market failure mode is an AI tool that was deployed, used briefly, and then quietly abandoned because no one was accountable for its performance or evolution. Successful deployments have a named person responsible for outcomes — not just a vendor relationship.",
  },
];

const stuckReasons = [
  {
    title: "The pilot forever trap",
    body: "Running a successful pilot is not the same as delivering production value. Many mid-market organizations run three, five, or ten pilots simultaneously — and none of them progress to production because there is no clear ownership or prioritization model for what happens after a pilot succeeds.",
  },
  {
    title: "Automating broken processes",
    body: "AI does not fix broken processes. It executes them faster and at greater scale. Organizations that deploy AI into poorly defined, inconsistent, or undocumented workflows find that the AI faithfully reproduces the inconsistency. Process clarity is a prerequisite for AI reliability.",
  },
  {
    title: "Underestimating change management",
    body: "The technology is often the easy part. Getting teams to change how they work — to trust AI outputs, to adjust their review habits, to redefine what 'done' means — is significantly harder. Companies that plan for the change management effort from day one have materially higher adoption rates.",
  },
  {
    title: "Choosing tools over strategy",
    body: "Signing up for an AI tool is not the same as having an AI strategy. Tool-first adoption leads to fragmented investments, low utilization, and difficulty measuring impact. Strategy-first adoption identifies the outcomes the business wants to achieve, then selects tools that serve those outcomes.",
  },
];

export default function AIAdoptionMidMarket() {
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
            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              AI Adoption
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              Mid-Market
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              Operations
            </span>
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">June 2026</span>
            <span className="text-[#52525B] text-xs">·</span>
            <span className="text-xs text-[#A1A1AA]">8 min read</span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
            style={{ letterSpacing: "-0.5px" }}
          >
            AI Adoption in Mid-Market Companies: What's Actually Working
          </h1>
          <p className="text-lg text-[#A1A1AA] leading-relaxed">
            Most AI coverage focuses on Fortune 500 experiments or startup demos. The most interesting adoption
            story is happening in the 10–500 employee range — and it looks nothing like the headlines.
          </p>
        </header>

        {/* Body */}
        <div className="prose prose-invert max-w-none space-y-14 text-[#A1A1AA]">

          {/* Intro section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              The Adoption Reality Gap
            </h2>
            <p className="leading-relaxed mb-4">
              In the past 18 months, the majority of mid-market companies have experimented with at least one AI
              tool. A much smaller percentage have moved those experiments into production workflows. The gap
              between experimenting and operationalizing is not a technology gap — the tools are accessible,
              affordable, and increasingly capable. It is a strategy, ownership, and change management gap.
            </p>
            <p className="leading-relaxed mb-4">
              The organizations making real progress share a common set of behaviors. They are not necessarily
              the most technically sophisticated. They are the most disciplined about how they approach adoption.
            </p>
            <p className="leading-relaxed">
              Below are the five patterns we observe most consistently in mid-market companies that have moved
              from experiments to production results — and the four traps that keep others stuck.
            </p>
          </section>

          {/* Patterns */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8" style={{ letterSpacing: "-0.3px" }}>
              Five Patterns of Successful Adoption
            </h2>
            <div className="space-y-8">
              {patterns.map((p) => (
                <div key={p.number} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-400 font-mono">{p.number}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                    <p className="text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Where teams get stuck */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6" style={{ letterSpacing: "-0.3px" }}>
              Where Teams Get Stuck
            </h2>
            <p className="leading-relaxed mb-8">
              Knowing what works is only useful if you can also recognize the failure modes in advance.
              These are the four patterns we see most often in organizations that are running AI experiments
              but not converting them into operational value.
            </p>
            <div className="space-y-6">
              {stuckReasons.map((r) => (
                <div key={r.title} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6">
                  <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
                  <p className="text-sm leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Path forward */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: "-0.3px" }}>
              The Path Forward
            </h2>
            <p className="leading-relaxed mb-4">
              The companies that will have a meaningful AI advantage in three years are not the ones deploying
              the most AI tools today. They are the ones building the organizational capability to adopt, operate,
              and continuously improve AI systems.
            </p>
            <p className="leading-relaxed mb-4">
              That means focusing on operations before applications. It means picking one workflow, proving the
              value, and learning how to run AI in production before expanding. It means building internal
              knowledge — not just signing contracts with vendors.
            </p>
            <p className="leading-relaxed">
              The best time to start this work was 18 months ago. The second best time is now — but only if you
              start with a clear strategy, defined ownership, and an honest assessment of where you actually stand.
            </p>
          </section>

          {/* Callout */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              From ENGXLABS
            </p>
            <p className="text-white font-medium mb-3 leading-relaxed">
              If you're in the 10–500 employee range and trying to figure out where to focus your AI investment,
              we offer a structured AI Readiness Assessment that gives you an honest picture of where you stand
              and what to do next.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Start with an assessment →
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
            href="/resources/insights/measuring-ai-roi"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Next: Measuring AI ROI →
          </Link>
        </div>
      </div>
    </main>
  );
}
