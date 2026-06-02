import type { Metadata } from "next"
import ApplyPage from "@/components/apply-page"

export const metadata: Metadata = {
  title: "Apply to Work With Us | Become a Client",
  description: "Apply to become a Stillwater Media client. We partner with luxury real estate, private aviation, wealth management, and automotive brands for CTV advertising and programmatic media buying.",
  alternates: {
    canonical: "https://www.stillwatermedia.io/apply",
  },
  openGraph: {
    title: "Apply to Work With Us | Stillwater Media",
    description: "Submit an inquiry to become a Stillwater Media client. We partner with luxury brands for CTV advertising and programmatic media buying.",
    url: "https://www.stillwatermedia.io/apply",
    siteName: "Stillwater Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.stillwatermedia.io/images/hero-luxury-abstract.jpg",
        width: 1200,
        height: 630,
        alt: "Apply to Stillwater Media - Luxury Brand Advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Work With Us | Stillwater Media",
    description: "Submit an inquiry to become a Stillwater Media client for CTV advertising and programmatic media.",
    images: ["https://www.stillwatermedia.io/images/hero-luxury-abstract.jpg"],
  },
}

// Apply page structured data
const applySchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.stillwatermedia.io/apply/#contactpage",
  name: "Apply to Work With Stillwater Media",
  description: "Submit an inquiry to become a Stillwater Media client. We partner with luxury real estate, private aviation, wealth management, and automotive brands.",
  url: "https://www.stillwatermedia.io/apply",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://www.stillwatermedia.io/#organization",
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
      name: "Apply",
      item: "https://www.stillwatermedia.io/apply",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(applySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ApplyPage />
    </>
  )
}
