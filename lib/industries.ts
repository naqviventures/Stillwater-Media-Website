/* -------------------------------------------------------------------------- */
/*  Server-safe module: shared content types + JSON-LD schema builders for the */
/*  /industries vertical pages. Kept out of the client layout component so     */
/*  Server Component routes can import the builders at module scope.           */
/* -------------------------------------------------------------------------- */

export const SITE = "https://www.stillwatermedia.io"

/* -------------------------------------------------------------------------- */
/*  Single source of truth for the industry verticals: slug + label only.     */
/*  Editorial copy (hub card descriptions) intentionally stays in its         */
/*  component. Order here matches the sitemap; consumers that render in a      */
/*  different order re-sort explicitly to preserve their existing order.      */
/* -------------------------------------------------------------------------- */

export type Industry = { slug: string; label: string }

export const industries: Industry[] = [
  { slug: "private-aviation-advertising", label: "Private Aviation" },
  { slug: "wealth-management-advertising", label: "Wealth Management" },
  { slug: "luxury-real-estate-advertising", label: "Luxury Real Estate" },
  { slug: "luxury-automotive-advertising", label: "Luxury Automotive" },
  { slug: "private-club-advertising", label: "Private Clubs & Golf" },
  { slug: "luxury-goods-advertising", label: "Luxury Goods & Apparel" },
  { slug: "luxury-hospitality-advertising", label: "Luxury Hospitality" },
]

export type SubItem = { h3: string; body: string }

export type ProofEntry = { heading: string; body: string[] }

export type IndustryContent = {
  /** URL slug segment, e.g. "private-aviation-advertising" */
  slug: string
  /** Label used in the breadcrumb + schema, e.g. "Private Aviation" */
  breadcrumbName: string

  hero: {
    eyebrow: string
    h1Line1: string
    h1Line2: string
    subhead: string
    image: string
    imageAlt: string
  }

  problem: { h2: string; items: SubItem[] }
  architecture: { h2: string; intro: string; items: SubItem[]; outro?: string }
  dataLayer: { h2: string; intro: string; items: SubItem[] }

  /** Block 5 — prose with one inline link inside the final paragraph. */
  measure: {
    h2: string
    /** Paragraphs rendered before the linked paragraph. */
    leadParagraphs: string[]
    /** Final paragraph split around the inline link. */
    linkedParagraph: { before: string; linkText: string; href: string; after: string }
  }

  /** Block 6 — empty array renders nothing at all (no wrapper, no heading). */
  proof: ProofEntry[]

  builtFor: { h2: string; body: string; disqualifier: string }

  engagement: { h2: string; steps: { period: string; body: string }[] }

  faq: { h2: string; items: { q: string; a: string }[] }

  cta: { h2Line1: string; h2Line2: string; body: string }

  related: { h2: string; links: { href: string; label: string }[] }
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD builders. Copy is derived from the typed content object so the     */
/*  structured data always matches the visible page exactly.                   */
/* -------------------------------------------------------------------------- */

export function buildFaqSchema(content: IndustryContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }
}

export function buildServiceSchema(content: IndustryContent, serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}/industries/${content.slug}/#service`,
    name: serviceName,
    provider: { "@id": `${SITE}/#organization` },
    description,
    url: `${SITE}/industries/${content.slug}`,
    areaServed: { "@type": "Country", name: "United States" },
  }
}

export function buildBreadcrumbSchema(content: IndustryContent) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: content.breadcrumbName,
        item: `${SITE}/industries/${content.slug}`,
      },
    ],
  }
}
