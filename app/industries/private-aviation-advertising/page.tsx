import type { Metadata } from "next"
import IndustryPrivateAviation, { content } from "@/components/industry-private-aviation"
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/industries"

export const metadata: Metadata = {
  title: "Private Aviation Advertising Agency | Stillwater Media",
  description:
    "Programmatic media for private aviation. How to reach a narrow ultra-high-net-worth buyer pool across a long decision cycle, and measure it against closed revenue instead of clicks.",
  alternates: {
    canonical: `https://www.stillwatermedia.io/industries/${content.slug}`,
  },
}

const serviceSchema = buildServiceSchema(
  content,
  "Private Aviation Advertising",
  "Programmatic media for private aviation. How to reach a narrow ultra-high-net-worth buyer pool across a long decision cycle, and measure it against closed revenue instead of clicks.",
)
const faqSchema = buildFaqSchema(content)
const breadcrumbSchema = buildBreadcrumbSchema(content)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryPrivateAviation />
    </>
  )
}
