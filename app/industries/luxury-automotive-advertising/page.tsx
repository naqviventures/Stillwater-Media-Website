import type { Metadata } from "next"
import IndustryLuxuryAutomotive, { content } from "@/components/industry-luxury-automotive"
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/industries"

export const metadata: Metadata = {
  title: "Luxury Automotive Advertising Agency | Stillwater Media",
  description:
    "Programmatic media for luxury dealer groups and rooftops. Built around drive-radius geography, cross-tier frequency control, and cost per sold unit matched back to the sales file.",
  alternates: {
    canonical: `https://www.stillwatermedia.io/industries/${content.slug}`,
  },
}

const serviceSchema = buildServiceSchema(
  content,
  "Luxury Automotive Advertising",
  "Programmatic media for luxury dealer groups and rooftops. Built around drive-radius geography, cross-tier frequency control, and cost per sold unit matched back to the sales file.",
)
const faqSchema = buildFaqSchema(content)
const breadcrumbSchema = buildBreadcrumbSchema(content)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryLuxuryAutomotive />
    </>
  )
}
