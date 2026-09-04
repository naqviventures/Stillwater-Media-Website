import type { Metadata } from "next"
import IndustryLuxuryHospitality, { content } from "@/components/industry-luxury-hospitality"
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/industries"

export const metadata: Metadata = {
  title: "Luxury Hospitality Advertising Agency | Stillwater Media",
  description:
    "Programmatic media for luxury hotels and resorts. Shift bookings from OTA to direct, reach guests before they open a travel site, and measure against direct revenue rather than clicks.",
  alternates: {
    canonical: `https://www.stillwatermedia.io/industries/${content.slug}`,
  },
}

const serviceSchema = buildServiceSchema(
  content,
  "Luxury Hospitality Advertising",
  "Programmatic media for luxury hotels and resorts. Shift bookings from OTA to direct, reach guests before they open a travel site, and measure against direct revenue rather than clicks.",
)
const faqSchema = buildFaqSchema(content)
const breadcrumbSchema = buildBreadcrumbSchema(content)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryLuxuryHospitality />
    </>
  )
}
