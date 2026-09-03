import type { Metadata } from "next"
import IndustriesHub from "@/components/industries-hub"

export const metadata: Metadata = {
  title: "Industries | Luxury & High-Consideration Media | Stillwater",
  description:
    "Stillwater Media builds programmatic media for categories with high customer lifetime value and long consideration cycles — private aviation, wealth management, luxury real estate, automotive, private clubs and luxury goods.",
  alternates: {
    canonical: "https://www.stillwatermedia.io/industries",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.stillwatermedia.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: "https://www.stillwatermedia.io/industries",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustriesHub />
    </>
  )
}
