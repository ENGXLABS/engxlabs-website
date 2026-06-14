import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://engxlabs.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/adlc`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/insights/ai-adoption-mid-market`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/insights/measuring-ai-roi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/guides/ai-readiness-assessment`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/guides/scaling-ai-agents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/thought-leadership`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/thought-leadership/why-ai-projects-fail`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/thought-leadership/ai-native-vs-ai-enabled`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
