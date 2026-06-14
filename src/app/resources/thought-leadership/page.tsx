import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thought Leadership — ENGXLABS",
  description:
    "Our perspective on the future of AI in business — why most AI projects fail to scale, what it means to be truly AI native, and where enterprise AI is heading.",
};

const posts = [
  {
    slug: "why-ai-projects-fail",
    title: "Why Most Enterprise AI Projects Fail to Scale",
    description:
      "IDC estimates that 60% of AI projects never make it to production. Of those that do, a significant portion fail to deliver measurable business value within 18 months. This is not a technology problem.",
    readTime: "7 min read",
    date: "May 2026",
    tags: ["AI Strategy", "Enterprise", "Failure Modes"],
  },
  {
    slug: "ai-native-vs-ai-enabled",
    title: "AI Native vs. AI Enabled: Why the Distinction Matters",
    description:
      "Two companies can both say they use AI. One has added AI features to existing processes. The other has rebuilt how it works from the ground up with AI as a core operational layer. The outcomes look similar today. In three years, they won't.",
    readTime: "8 min read",
    date: "April 2026",
    tags: ["AI Native", "Strategy", "Transformation"],
  },
];

export default function ThoughtLeadershipIndex() {
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#8B5CF6" }}>
            Thought Leadership
          </p>
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.5px" }}
          >
            Our Perspective
          </h1>
          <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
            Honest takes on where AI in business is heading, what the failure modes are, and what it actually
            means to build an AI native organization.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/resources/thought-leadership/${post.slug}`} className="group block">
              <article className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-violet-500/30 hover:bg-[#141414]/80">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs text-[#A1A1AA]">{post.date}</span>
                  <span className="text-[#52525B] text-xs">·</span>
                  <span className="text-xs text-[#A1A1AA]">{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">{post.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-violet-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
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
