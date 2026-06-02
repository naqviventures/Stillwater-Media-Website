import type { MetadataRoute } from "next"
import { insightPosts } from "@/lib/insights"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.stillwatermedia.io"

  // Core pages with high priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/capabilities`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/programmatic-media-buying`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/precision-lead-finder`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Generate blog post entries dynamically from insights registry
  const blogPosts: MetadataRoute.Sitemap = insightPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date("2026-05-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...corePages, ...blogPosts]
}
