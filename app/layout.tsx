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
  title: "Stillwater Media | Performance Media for Premium Brands",
  description: "Selective performance media partner for luxury and high-consideration brands. Premium CTV, programmatic advertising, and affluent audience engineering with disciplined measurement.",
  keywords: ["performance media", "luxury brands", "premium advertising", "CTV advertising", "programmatic media", "affluent audience targeting", "high-consideration brands", "Charlotte NC media agency"],
  authors: [{ name: "Stillwater Media" }],
  creator: "Stillwater Media",
  publisher: "Stillwater Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://stillwatermedia.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stillwater Media | Performance Media for Premium Brands",
    description: "Selective performance media partner for luxury and high-consideration brands. Signal. Strategy. Scale.",
    url: "https://stillwatermedia.io",
    siteName: "Stillwater Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-luxury-abstract.jpg",
        width: 1200,
        height: 630,
        alt: "Stillwater Media - Performance Media for Premium Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stillwater Media | Performance Media for Premium Brands",
    description: "Selective performance media partner for luxury and high-consideration brands. Signal. Strategy. Scale.",
    images: ["/images/hero-luxury-abstract.jpg"],
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
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-PZXTGG4Q"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PZXTGG4Q');
            `,
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
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZXTGG4Q"
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
