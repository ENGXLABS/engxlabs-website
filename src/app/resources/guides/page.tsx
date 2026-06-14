import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Transformation Guides — ENGXLABS",
  description:
    "Step-by-step guides for running AI readiness assessments, scaling AI agents to production, and building lasting AI transformation programs.",
};

const posts = [
  {
    slug: "ai-readiness-assessment",
    title: "How to Run an AI Readiness Assessment",
    description:
      "Before deploying AI, you need to know where you stand. A structured readiness assessment gives you an honest picture across people, process, data, and technology — and tells you where to focus first.",
    readTime: "10 min read",
    date: "May 2026",
    tags: ["AI Readiness", "Strategy", "Assessment"],
  },
  {
    slug: "scaling-ai-agents",
    title: "From Pilot to Production: Scaling AI Agents",
    description:
      "Most AI pilots succeed. Most AI production deployments struggle. The gap between a working demo and a reliable production system is wider than most teams expect — here's how to close it.",
    readTime: "9 min read",
    date: "June 2026",
    tags: ["AI Agents", "Production", "ADLC"],
  },
];

export default function GuidesIndex() {
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors mb-12"
        >
          ← Back to ENGXLABS
        </Link>

        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#06B6D4" }}>
            AI Transformation Guides
          </p>
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.5px" }}
          >
            Step-by-Step Playbooks
          </h1>
          <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
            Practical, opinionated guides for teams doing the real work of AI transformation — not theory, but
            process you can follow.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/resources/guides/${post.slug}`} className="group block">
              <article className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#141414]/80">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs text-[#A1A1AA]">{post.date}</span>
                  <span className="text-[#52525B] text-xs">·</span>
                  <span className="text-xs text-[#A1A1AA]">{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">{post.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Cross-link to ADLC */}
        <div className="mt-8">
          <Link href="/blog/adlc" className="group block">
            <article className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#141414]/80">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs text-[#A1A1AA]">June 2026</span>
                <span className="text-[#52525B] text-xs">·</span>
                <span className="text-xs text-[#A1A1AA]">12 min read</span>
                <span className="text-[#52525B] text-xs">·</span>
                <span className="text-xs text-[#52525B]">Deep Dive</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                What is ADLC? The Agent Development Lifecycle Explained
              </h2>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">
                The most comprehensive guide to ADLC — the structured 7-phase framework for building, governing,
                and continuously improving enterprise AI agents.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {["AI Agents", "ADLC", "LLMOps", "Governance"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read →
                </span>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </main>
  );
}
