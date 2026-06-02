import type { Metadata } from "next"
import InsightsPage from "@/components/insights-page"
import { insightPosts } from "@/lib/insights"

export const metadata: Metadata = {
  title: "Insights | Luxury Brand Advertising Strategy & Analysis",
  description: "Strategic perspectives on CTV advertising, programmatic media buying, affluent audience targeting, and measurement frameworks for luxury and high-consideration brands.",
  alternates: {
    canonical: "https://www.stillwatermedia.io/insights",
  },
  openGraph: {
    title: "Insights | Stillwater Media",
    description: "Strategic perspectives on CTV advertising, programmatic media buying, and measurement frameworks for luxury brands.",
    url: "https://www.stillwatermedia.io/insights",
    siteName: "Stillwater Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.stillwatermedia.io/images/insights-editorial.jpg",
        width: 1200,
        height: 630,
        alt: "Stillwater Media Insights - Luxury Brand Advertising Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Stillwater Media",
    description: "Strategic perspectives on CTV advertising, programmatic media buying, and measurement frameworks for luxury brands.",
    images: ["https://www.stillwatermedia.io/images/insights-editorial.jpg"],
  },
}

// Generate CollectionPage structured data
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.stillwatermedia.io/insights/#collection",
  name: "Stillwater Media Insights",
  description: "Strategic perspectives on CTV advertising, programmatic media buying, affluent audience targeting, and measurement frameworks for luxury brands.",
  url: "https://www.stillwatermedia.io/insights",
  isPartOf: {
    "@id": "https://www.stillwatermedia.io/#website",
  },
  publisher: {
    "@id": "https://www.stillwatermedia.io/#organization",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: insightPosts.slice(0, 10).map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.stillwatermedia.io/insights/${post.slug}`,
      name: post.title,
    })),
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <InsightsPage />
    </>
  )
}
