import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Playfair_Display, Space_Grotesk } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Stillwater Media | Luxury Brand Advertising Agency | CTV & Programmatic",
    template: "%s | Stillwater Media",
  },
  description: "Stillwater Media is the performance media agency for luxury brands. We specialize in CTV advertising on Disney+, Netflix & Prime Video, programmatic media buying, and high-net-worth audience targeting. Serving luxury real estate, private aviation, wealth management & automotive brands nationwide from Charlotte, NC.",
  keywords: ["Stillwater Media", "luxury brand advertising agency", "CTV advertising agency", "programmatic media buying", "high-net-worth audience targeting", "luxury marketing agency", "premium streaming advertising", "Disney+ advertising", "Netflix advertising", "Prime Video advertising", "private aviation advertising", "luxury real estate marketing", "wealth management advertising", "luxury automotive advertising", "performance media agency", "Charlotte NC advertising agency", "affluent audience targeting", "private marketplace deals", "brand-safe advertising", "incrementality testing", "marketing mix modeling"],
  authors: [{ name: "Stillwater Media", url: "https://www.stillwatermedia.io" }],
  creator: "Stillwater Media",
  publisher: "Stillwater Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.stillwatermedia.io"),
  alternates: {
    canonical: "/",
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
    creator: "@stillwatermedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  generator: "v0.app",
  applicationName: "Stillwater Media",
  referrer: "origin-when-cross-origin",
  category: "Marketing Agency",
}

// Organization structured data for Google Knowledge Panel
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.stillwatermedia.io/#organization",
  name: "Stillwater Media",
  alternateName: ["Stillwater Media Agency", "Stillwater Media Group"],
  url: "https://www.stillwatermedia.io",
  logo: {
    "@type": "ImageObject",
    url: "https://www.stillwatermedia.io/stillwater-logo.png",
    width: 512,
    height: 512,
  },
  image: "https://www.stillwatermedia.io/images/hero-luxury-abstract.jpg",
  description: "Stillwater Media is a performance media agency specializing in luxury brand advertising. We deliver CTV advertising on Disney+, Netflix & Prime Video, programmatic media buying, and high-net-worth audience targeting for luxury real estate, private aviation, wealth management, and automotive brands.",
  slogan: "Signal. Strategy. Scale.",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Stillwater Media Team",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Charlotte",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    postalCode: "28202",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.2271,
    longitude: -80.8431,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@stillwatermedia.io",
      url: "https://www.stillwatermedia.io/apply",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@stillwatermedia.io",
      url: "https://www.stillwatermedia.io/contact",
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/stillwater-media-io",
  ],
  knowsAbout: [
    "CTV Advertising",
    "Connected TV Advertising",
    "Programmatic Advertising",
    "Luxury Brand Marketing",
    "High-Net-Worth Audience Targeting",
    "Affluent Audience Targeting",
    "Performance Media",
    "Premium Streaming Advertising",
    "Disney+ Advertising",
    "Netflix Advertising",
    "Prime Video Advertising",
    "Private Marketplace Deals",
    "Marketing Mix Modeling",
    "Incrementality Testing",
    "Multi-Touch Attribution",
    "Private Aviation Advertising",
    "Luxury Real Estate Marketing",
    "Wealth Management Advertising",
    "Luxury Automotive Advertising",
    "Private Club Marketing",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Invoice, Wire Transfer",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Stillwater Media Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CTV Advertising",
          description: "Premium Connected TV advertising on Disney+, Netflix, Prime Video, and other streaming platforms",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Programmatic Media Buying",
          description: "Data-driven programmatic advertising with private marketplace access and brand-safe inventory",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Affluent Audience Targeting",
          description: "Precision targeting of high-net-worth individuals using wealth signals and behavioral data",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Measurement",
          description: "Incrementality testing, marketing mix modeling, and multi-touch attribution for luxury brands",
        },
      },
    ],
  },
}

// WebSite structured data for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.stillwatermedia.io/#website",
  url: "https://www.stillwatermedia.io",
  name: "Stillwater Media",
  alternateName: "Stillwater Media Agency",
  description: "Luxury brand advertising agency specializing in CTV advertising, programmatic media buying, and high-net-worth audience targeting",
  publisher: {
    "@id": "https://www.stillwatermedia.io/#organization",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.stillwatermedia.io/insights?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

// SiteNavigationElement for sitelinks
const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.stillwatermedia.io/#navigation",
  name: "Main Navigation",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Capabilities",
      description: "Our CTV advertising, programmatic media buying, and measurement services",
      url: "https://www.stillwatermedia.io/capabilities",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Insights",
      description: "Articles and guides on luxury brand advertising and performance media",
      url: "https://www.stillwatermedia.io/insights",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Apply to Work With Us",
      description: "Submit an inquiry to become a Stillwater Media client",
      url: "https://www.stillwatermedia.io/apply",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Contact",
      description: "Get in touch with Stillwater Media",
      url: "https://www.stillwatermedia.io/contact",
    },
  ],
}

// BreadcrumbList for homepage
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.stillwatermedia.io/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.stillwatermedia.io",
    },
  ],
}

// FAQPage schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.stillwatermedia.io/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Stillwater Media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stillwater Media is a performance media agency specializing in luxury brand advertising. We provide CTV advertising on Disney+, Netflix, and Prime Video, programmatic media buying, and high-net-worth audience targeting for luxury real estate, private aviation, wealth management, and automotive brands.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Stillwater Media offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stillwater Media offers four core services: (1) CTV Advertising on premium streaming platforms like Disney+, Netflix, and Prime Video; (2) Programmatic Media Buying with private marketplace access; (3) Affluent Audience Targeting using wealth signals and behavioral data; and (4) Marketing Measurement including incrementality testing and marketing mix modeling.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Stillwater Media serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stillwater Media specializes in luxury and high-consideration brands including: luxury real estate developers and brokerages, private aviation companies, wealth management firms and RIAs, luxury automotive dealerships, private clubs and membership organizations, and premium direct-to-consumer brands.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Stillwater Media located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stillwater Media is headquartered in Charlotte, North Carolina, and serves luxury brands nationwide across the United States.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Navigation Schema for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZXT6G4Q');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans ${playfairDisplay.variable} ${spaceGrotesk.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZXT6G4Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
