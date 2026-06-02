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
    default: "Stillwater Media | Performance Media for Luxury Brands",
    template: "%s | Stillwater Media",
  },
  description: "Selective performance media partner for luxury and high-consideration brands. Premium CTV advertising, programmatic media buying, and affluent audience targeting with disciplined measurement. Charlotte, NC.",
  keywords: ["performance media agency", "luxury brand advertising", "premium CTV advertising", "programmatic media buying", "affluent audience targeting", "high-net-worth marketing", "luxury brand marketing", "CTV advertising agency", "streaming TV advertising", "private marketplace deals", "brand-safe advertising", "incrementality testing", "Charlotte NC media agency"],
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
    title: "Stillwater Media | Performance Media for Luxury Brands",
    description: "Selective performance media partner for luxury and high-consideration brands. Premium CTV, programmatic advertising, and affluent audience engineering.",
    url: "https://www.stillwatermedia.io",
    siteName: "Stillwater Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.stillwatermedia.io/images/hero-luxury-abstract.jpg",
        width: 1200,
        height: 630,
        alt: "Stillwater Media - Performance Media for Luxury Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stillwater Media | Performance Media for Luxury Brands",
    description: "Selective performance media partner for luxury and high-consideration brands. Signal. Strategy. Scale.",
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

// Organization structured data for Google
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.stillwatermedia.io/#organization",
  name: "Stillwater Media",
  url: "https://www.stillwatermedia.io",
  logo: "https://www.stillwatermedia.io/stillwater-logo.png",
  description: "Selective performance media partner for luxury and high-consideration brands. Premium CTV advertising, programmatic media buying, and affluent audience targeting.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@stillwatermedia.io",
    url: "https://www.stillwatermedia.io/contact",
  },
  sameAs: [],
  knowsAbout: [
    "CTV Advertising",
    "Programmatic Advertising",
    "Luxury Brand Marketing",
    "Affluent Audience Targeting",
    "Performance Media",
    "Premium Streaming Advertising",
    "Private Marketplace Deals",
    "Marketing Mix Modeling",
    "Incrementality Testing",
    "Multi-Touch Attribution",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Performance Media Buying",
    "CTV Advertising",
    "Programmatic Advertising",
    "Affluent Audience Engineering",
    "Marketing Measurement",
  ],
}

// WebSite structured data for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.stillwatermedia.io/#website",
  url: "https://www.stillwatermedia.io",
  name: "Stillwater Media",
  description: "Performance media for luxury brands",
  publisher: {
    "@id": "https://www.stillwatermedia.io/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.stillwatermedia.io/insights?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
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
