import type { Metadata } from "next"
import IndustryPrivateClub, { content } from "@/components/industry-private-club"
import {
  buildFaqSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
} from "@/components/industry-page-layout"

export const metadata: Metadata = {
  title: "Private Club Marketing Agency | Stillwater Media",
  description:
    "Membership marketing for private clubs. Tightly bounded targeting against a few thousand qualified households, without discounting, and measured against member lifetime value.",
  alternates: {
    canonical: `https://www.stillwatermedia.io/industries/${content.slug}`,
  },
}

const serviceSchema = buildServiceSchema(
  content,
  "Private Club Marketing",
  "Membership marketing for private clubs. Tightly bounded targeting against a few thousand qualified households, without discounting, and measured against member lifetime value.",
)
const faqSchema = buildFaqSchema(content)
const breadcrumbSchema = buildBreadcrumbSchema(content)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryPrivateClub />
    </>
  )
}
