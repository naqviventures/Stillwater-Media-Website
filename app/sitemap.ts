import type { MetadataRoute } from "next"
import { insightPosts } from "@/lib/insights"
import { industries } from "@/lib/industries"

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
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...industries.map(({ slug }) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ]

  // Generate blog post entries dynamically from insights registry.
  // Recently published posts (within 30 days) get higher priority and weekly
  // change frequency to encourage faster crawl + indexing by Google, Bing, and
  // AI search crawlers.
  const now = Date.now()
  const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30

  const blogPosts: MetadataRoute.Sitemap = insightPosts.map((post) => {
    const published = post.date ? new Date(post.date) : new Date("2026-05-01")
    const isRecent = now - published.getTime() < THIRTY_DAYS

    return {
      url: `${baseUrl}/insights/${post.slug}`,
      lastModified: published,
      changeFrequency: isRecent ? ("weekly" as const) : ("monthly" as const),
      priority: isRecent ? 0.8 : 0.7,
    }
  })

  return [...corePages, ...blogPosts]
}
