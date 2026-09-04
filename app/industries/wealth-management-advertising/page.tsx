import type { Metadata } from "next"
import IndustryWealthManagement, { content } from "@/components/industry-wealth-management"
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/industries"

export const metadata: Metadata = {
  title: "Wealth Management Advertising Agency | Stillwater Media",
  description:
    "Programmatic media for advisory practices, annuity and insurance businesses. Built around cost per closed client rather than lead volume, with state licensing designed into the media plan.",
  alternates: {
    canonical: `https://www.stillwatermedia.io/industries/${content.slug}`,
  },
}

const serviceSchema = buildServiceSchema(
  content,
  "Wealth Management Advertising",
  "Programmatic media for advisory practices, annuity and insurance businesses. Built around cost per closed client rather than lead volume, with state licensing designed into the media plan.",
)
const faqSchema = buildFaqSchema(content)
const breadcrumbSchema = buildBreadcrumbSchema(content)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryWealthManagement />
    </>
  )
}
