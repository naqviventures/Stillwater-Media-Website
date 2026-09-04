import type { Metadata } from "next"
import IndustryLuxuryRealEstate, { content } from "@/components/industry-luxury-real-estate"
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/industries"

export const metadata: Metadata = {
  title: "Luxury Real Estate Advertising Agency | Stillwater Media",
  description:
    "Programmatic media for luxury developments and brokerages. Reach qualified buyers in feeder markets before they reach the portals, and measure against private appointments rather than lead volume.",
  alternates: {
    canonical: `https://www.stillwatermedia.io/industries/${content.slug}`,
  },
}

const serviceSchema = buildServiceSchema(
  content,
  "Luxury Real Estate Advertising",
  "Programmatic media for luxury developments and brokerages. Reach qualified buyers in feeder markets before they reach the portals, and measure against private appointments rather than lead volume.",
)
const faqSchema = buildFaqSchema(content)
const breadcrumbSchema = buildBreadcrumbSchema(content)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryLuxuryRealEstate />
    </>
  )
}
