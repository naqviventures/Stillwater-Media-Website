import type { Metadata } from "next"
import IndustryLuxuryGoods, { content } from "@/components/industry-luxury-goods"
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/industries"

export const metadata: Metadata = {
  title: "Luxury Goods Advertising Agency | Stillwater Media",
  description:
    "Programmatic media for premium goods and apparel brands. Grow direct revenue without discounting, manage wholesale and retail channel conflict, and measure incrementally rather than by last touch.",
  alternates: {
    canonical: `https://www.stillwatermedia.io/industries/${content.slug}`,
  },
}

const serviceSchema = buildServiceSchema(
  content,
  "Luxury Goods Advertising",
  "Programmatic media for premium goods and apparel brands. Grow direct revenue without discounting, manage wholesale and retail channel conflict, and measure incrementally rather than by last touch.",
)
const faqSchema = buildFaqSchema(content)
const breadcrumbSchema = buildBreadcrumbSchema(content)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryLuxuryGoods />
    </>
  )
}
