import type { Metadata } from "next"
import CapabilitiesPage from "@/components/capabilities-page"

export const metadata: Metadata = {
  title: "Capabilities | CTV Advertising & Programmatic Media Buying",
  description: "Stillwater Media capabilities: Premium CTV advertising on Disney+, Netflix & Prime Video. Programmatic media buying with private marketplace access. Affluent audience targeting and marketing measurement for luxury brands.",
  alternates: {
    canonical: "https://www.stillwatermedia.io/capabilities",
  },
  openGraph: {
    title: "Capabilities | Stillwater Media",
    description: "Premium CTV advertising, programmatic media buying, affluent audience targeting, and marketing measurement for luxury brands.",
    url: "https://www.stillwatermedia.io/capabilities",
    siteName: "Stillwater Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.stillwatermedia.io/images/capabilities-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Stillwater Media Capabilities - CTV & Programmatic Advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capabilities | Stillwater Media",
    description: "Premium CTV advertising, programmatic media buying, and affluent audience targeting for luxury brands.",
    images: ["https://www.stillwatermedia.io/images/capabilities-hero.jpg"],
  },
}

// Capabilities page structured data
const capabilitiesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.stillwatermedia.io/capabilities/#service",
  name: "Stillwater Media Capabilities",
  provider: {
    "@id": "https://www.stillwatermedia.io/#organization",
  },
  description: "Premium CTV advertising, programmatic media buying, affluent audience targeting, and marketing measurement services for luxury brands.",
  url: "https://www.stillwatermedia.io/capabilities",
  serviceType: [
    "CTV Advertising",
    "Programmatic Media Buying",
    "Affluent Audience Targeting",
    "Marketing Measurement",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Performance Media Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium CTV Advertising",
          description: "Brand-safe streaming TV advertising on Disney+, Netflix, Prime Video with household-level targeting.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Programmatic Media Buying",
          description: "Private marketplace deals and programmatic guaranteed campaigns for luxury brand-safe environments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Affluent Audience Engineering",
          description: "High-net-worth audience targeting using wealth signals, behavioral data, and first-party data enrichment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Measurement & Attribution",
          description: "Incrementality testing, multi-touch attribution, and marketing mix modeling for long sales cycles.",
        },
      },
    ],
  },
}

// Breadcrumb schema
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
      name: "Capabilities",
      item: "https://www.stillwatermedia.io/capabilities",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capabilitiesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CapabilitiesPage />
    </>
  )
}
