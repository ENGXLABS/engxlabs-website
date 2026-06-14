import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — ENGXLABS",
  description:
    "Observations, data, and analysis on AI adoption, ROI measurement, and what's actually working in AI transformation for mid-market companies.",
};

const posts = [
  {
    slug: "ai-adoption-mid-market",
    title: "AI Adoption in Mid-Market Companies: What's Actually Working",
    description:
      "Most AI coverage focuses on Fortune 500 experiments or startup demos. The most interesting adoption story is happening in the 10–500 employee range — and it looks nothing like the headlines.",
    readTime: "8 min read",
    date: "June 2026",
    tags: ["AI Adoption", "Mid-Market", "Operations"],
  },
  {
    slug: "measuring-ai-roi",
    title: "Measuring AI ROI: The Metrics That Actually Matter",
    description:
      "Executives want to know if AI is working. Most teams measure the wrong things — tokens processed, queries answered, models deployed. These are activity metrics, not outcome metrics.",
    readTime: "6 min read",
    date: "May 2026",
    tags: ["ROI", "Metrics", "AI Strategy"],
  },
];

export default function InsightsIndex() {
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3B82F6" }}>
            Insights
          </p>
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.5px" }}
          >
            What We're Observing
          </h1>
          <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
            Data, patterns, and observations from working with organizations at different stages of AI adoption.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/resources/insights/${post.slug}`} className="group block">
              <article className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-[#141414]/80">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs text-[#A1A1AA]">{post.date}</span>
                  <span className="text-[#52525B] text-xs">·</span>
                  <span className="text-xs text-[#A1A1AA]">{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">{post.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-[#A1A1AA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-blue-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
