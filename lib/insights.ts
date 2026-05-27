export interface InsightPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date?: string
}

export const insightPosts: InsightPost[] = [
  {
    slug: "ctv-vs-linear-tv-luxury-brand-advertising",
    title: "CTV vs. Linear TV: Which Wins for Luxury Brand Advertising?",
    excerpt:
      "A definitive comparison of CTV and linear TV for luxury advertisers — targeting capabilities, CPM benchmarks, brand lift measurement, and strategic allocation.",
    image: "/images/ctv-vs-linear-tv-luxury-brand-advertising.png",
    category: "CTV & Streaming",
    date: "2026-05-27",
  },
  {
    slug: "private-marketplace-deals-luxury-advertising",
    title: "Private Marketplace Deals: Why Luxury Brands Need PMP Access",
    excerpt:
      "Discover why private marketplace deals are essential for luxury brands. Learn how to access PMP deals, negotiate with premium publishers, and build brand-safe programmatic strategy.",
    image: "/images/private-marketplace-deals-luxury-advertising.png",
    category: "Programmatic Strategy",
    date: "2026-05-27",
  },
  {
    slug: "affluent-audience-targeting",
    title: "The Complete Guide to Affluent Audience Targeting in 2025",
    excerpt:
      "Learn how affluent audience targeting works—wealth signals, premium data sources, lookalike modeling, and the exact frameworks luxury brands use to reach HNW consumers.",
    image: "/images/affluent-audience-targeting.jpg",
    category: "Audience Strategy",
    date: "2026-05-26",
  },
  {
    slug: "brand-safe-programmatic-advertising",
    title: "Why Brand-Safe Programmatic Advertising Is Non-Negotiable for Luxury Brands",
    excerpt:
      "Brand-safe programmatic advertising ensures your luxury brand never appears next to content that undermines premium equity. Learn private marketplaces, brand suitability tiers, and contextual safeguards.",
    image: "/images/brand-safe-programmatic-advertising.jpg",
    category: "Programmatic",
    date: "2026-05-26",
  },
  {
    slug: "incrementality-testing-luxury-brands",
    title: "Incrementality Testing: The Metric Luxury Brands Can't Afford to Ignore",
    excerpt:
      "Incrementality testing reveals what your media actually causes—not just correlates with. Learn how luxury brands use holdout testing to prove real ad ROI.",
    image: "/images/incrementality-testing-luxury-brands.jpg",
    category: "Measurement",
    date: "2026-05-25",
  },
  {
    slug: "ctv-advertising-high-net-worth-consumers",
    title: "How to Reach High-Net-Worth Consumers Through Premium CTV Advertising",
    excerpt:
      "Discover how luxury brands are leveraging Connected TV's precision targeting to reach affluent audiences in premium streaming environments with measurable results.",
    image: "/images/ctv-advertising-high-net-worth.jpg",
    category: "CTV",
    date: "2026-05-24",
  },
  {
    slug: "programmatic-advertising-revolution-2024",
    title: "The Programmatic Advertising Revolution: How AI is Transforming Digital Media Buying",
    excerpt:
      "Discover how artificial intelligence and machine learning are reshaping programmatic advertising, delivering unprecedented targeting precision and ROI optimization for modern marketers.",
    image: "/programmatic-advertising-ai-revolution-dashboard.jpg",
    category: "Programmatic",
    date: "2026-04-10",
  },
  {
    slug: "connected-tv-advertising-guide",
    title: "Connected TV Advertising: The Complete Guide to CTV Campaign Success",
    excerpt:
      "Master the art of Connected TV advertising with proven strategies for audience targeting, creative optimization, and performance measurement across streaming platforms.",
    image: "/connected-tv-streaming-devices-and-smart-tv-interf.jpg",
    category: "CTV",
    date: "2026-03-28",
  },
  {
    slug: "billboard-advertising-digital-age",
    title: "Billboard Advertising in the Digital Age: Integrating OOH with Programmatic Campaigns",
    excerpt:
      "Learn how traditional billboard advertising is evolving with digital integration, programmatic buying, and advanced attribution models for maximum impact.",
    image: "/digital-billboard-advertising-with-programmatic.jpg",
    category: "OOH",
    date: "2026-03-15",
  },
  {
    slug: "programmatic-media-buying-charlotte-nc",
    title: "Programmatic Media Buying in Charlotte, NC: Local Market Insights and Opportunities",
    excerpt:
      "Explore the unique programmatic advertising landscape in Charlotte, North Carolina, including local audience behaviors, market trends, and growth opportunities.",
    image: "/charlotte-nc-skyline-with-digital-advertising-tech.jpg",
    category: "Local",
    date: "2026-03-02",
  },
  {
    slug: "real-time-bidding-optimization-strategies",
    title: "Real-Time Bidding Optimization: Advanced Strategies for Programmatic Success",
    excerpt:
      "Unlock the power of real-time bidding with sophisticated optimization techniques, bid management strategies, and performance enhancement tactics.",
    image: "/real-time-bidding-optimization-dashboard-with-data.jpg",
    category: "Programmatic",
    date: "2026-02-18",
  },
  {
    slug: "precision-lead-generation-strategies",
    title: "Precision Lead Generation: Advanced Strategies for Real-Time Prospect Identification",
    excerpt:
      "Master the art of precision lead generation with cutting-edge techniques for identifying, qualifying, and converting high-value prospects in real-time.",
    image: "/precision-lead-generation-targeting-dashboard.jpg",
    category: "Lead Generation",
    date: "2026-02-05",
  },
  {
    slug: "automated-lead-nurturing-systems",
    title: "Automated Lead Nurturing Systems: Converting Prospects into Premium Clients",
    excerpt:
      "Build intelligent lead nurturing workflows that guide high-value prospects through your funnel with personalized, timely communications that convert.",
    image: "/automated-lead-nurturing-workflow-system.jpg",
    category: "Lead Generation",
    date: "2026-01-22",
  },
  {
    slug: "charlotte-nc-lead-generation-market",
    title: "Charlotte, NC Lead Generation Market: Opportunities and Competitive Landscape",
    excerpt:
      "A deep dive into the Charlotte lead generation ecosystem — from key industries and audience segments to the tactics that outperform in the Carolinas market.",
    image: "/charlotte-nc-business-district-lead-generation.jpg",
    category: "Local",
    date: "2026-01-10",
  },
  {
    slug: "data-driven-lead-qualification",
    title: "Data-Driven Lead Qualification: Identifying Your Highest-Value Prospects",
    excerpt:
      "Use behavioral signals, firmographic data, and intent scoring to qualify leads faster and focus your sales team on the prospects most likely to close.",
    image: "/data-driven-lead-qualification-analytics.jpg",
    category: "Lead Generation",
    date: "2025-12-18",
  },
  {
    slug: "real-time-lead-finder-technology",
    title: "Real-Time Lead Finder Technology: How Intent Data Changes Everything",
    excerpt:
      "Explore how real-time intent data and lead finder technology enable brands to identify in-market buyers the moment they signal purchase readiness.",
    image: "/real-time-lead-finder-technology-dashboard.jpg",
    category: "Lead Generation",
    date: "2025-12-05",
  },
]

export const allCategories = ["All", ...Array.from(new Set(insightPosts.map((p) => p.category))).sort()]
