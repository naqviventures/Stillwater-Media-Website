import type { Metadata } from "next"
import HomePage from "@/components/home-page"

export const metadata: Metadata = {
  title: "Stillwater Media | Luxury Brand Advertising Agency | CTV & Programmatic",
  description: "Stillwater Media is the performance media agency for luxury brands. CTV advertising on Disney+, Netflix & Prime Video. Programmatic media buying and high-net-worth audience targeting for luxury real estate, private aviation, wealth management & automotive. Based in Charlotte, NC.",
  alternates: {
    canonical: "https://www.stillwatermedia.io",
  },
  openGraph: {
    title: "Stillwater Media | Luxury Brand Advertising Agency",
    description: "The performance media agency for luxury brands. CTV advertising, programmatic media buying, and high-net-worth audience targeting for luxury real estate, private aviation, wealth management & automotive.",
    url: "https://www.stillwatermedia.io",
    siteName: "Stillwater Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.stillwatermedia.io/images/hero-luxury-abstract.jpg",
        width: 1200,
        height: 630,
        alt: "Stillwater Media - Luxury Brand Advertising Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stillwater Media | Luxury Brand Advertising Agency",
    description: "The performance media agency for luxury brands. CTV advertising, programmatic media buying, and high-net-worth audience targeting.",
    images: ["https://www.stillwatermedia.io/images/hero-luxury-abstract.jpg"],
  },
}

// Homepage structured data
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.stillwatermedia.io/#service",
  name: "Stillwater Media",
  description: "Selective performance media partner for luxury and high-consideration brands. Premium CTV advertising, programmatic media buying, and affluent audience targeting.",
  url: "https://www.stillwatermedia.io",
  logo: "https://www.stillwatermedia.io/stillwater-logo.png",
  image: "https://www.stillwatermedia.io/images/hero-luxury-abstract.jpg",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.2271,
    longitude: -80.8431,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Performance Media Buying",
    "CTV Advertising",
    "Programmatic Advertising",
    "Affluent Audience Targeting",
    "Marketing Measurement",
    "Incrementality Testing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Performance Media Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium CTV Advertising",
          description: "Brand-safe streaming TV advertising on Disney+, Netflix, Prime Video, and premium platforms with household-level targeting.",
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <HomePage />
    </>
  )
}
