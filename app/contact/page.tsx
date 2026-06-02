import type { Metadata } from "next"
import ContactPage from "@/components/contact-page"

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description: "Contact Stillwater Media for luxury brand advertising inquiries. Reach our team for CTV advertising, programmatic media buying, and high-net-worth audience targeting services. Charlotte, NC.",
  alternates: {
    canonical: "https://www.stillwatermedia.io/contact",
  },
  openGraph: {
    title: "Contact Us | Stillwater Media",
    description: "Get in touch with Stillwater Media for luxury brand advertising inquiries. CTV advertising, programmatic media, and affluent audience targeting.",
    url: "https://www.stillwatermedia.io/contact",
    siteName: "Stillwater Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.stillwatermedia.io/images/contact-minimal.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Stillwater Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Stillwater Media",
    description: "Get in touch with Stillwater Media for luxury brand advertising inquiries.",
    images: ["https://www.stillwatermedia.io/images/contact-minimal.jpg"],
  },
}

// Contact page structured data
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.stillwatermedia.io/contact/#contactpage",
  name: "Contact Stillwater Media",
  description: "Contact Stillwater Media for luxury brand advertising inquiries. CTV advertising, programmatic media buying, and high-net-worth audience targeting services.",
  url: "https://www.stillwatermedia.io/contact",
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
      name: "Contact",
      item: "https://www.stillwatermedia.io/contact",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPage />
    </>
  )
}
