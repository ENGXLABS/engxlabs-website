import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is ADLC? The Agent Development Lifecycle Explained — ENGXLABS",
  description:
    "A comprehensive guide to ADLC — the Agent Development Lifecycle. Learn how to design, build, test, deploy, and continuously improve AI agents using a structured framework, from opportunity through the improvement flywheel.",
  keywords: [
    "ADLC",
    "Agent Development Lifecycle",
    "AI agents",
    "LLMOps",
    "AI governance",
    "agent evaluation",
    "observability",
    "agentic AI",
  ],
  openGraph: {
    title: "What is ADLC? The Agent Development Lifecycle Explained",
    description:
      "AI agents aren't just software — they reason. Learn how ADLC provides the structured playbook for building reliable AI agents at enterprise scale.",
    url: "https://engxlabs.com/blog/adlc",
    siteName: "ENGXLABS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is ADLC? The Agent Development Lifecycle Explained — ENGXLABS",
    description: "A beginner-friendly deep dive into the framework behind reliable AI agents.",
  },
};

export default function ADLCLayout({ children }: { children: React.ReactNode }) {
  return children;
}
