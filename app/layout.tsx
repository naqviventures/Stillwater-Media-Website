import type React from "react"
import type { Metadata } from "next"
import { Archivo_Black, Space_Grotesk } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: ["400"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Stillwater Media - Signal. Strategy. Scale.",
  description: "Human-centric media agency building strategic marketing systems that turn prospects into customers.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${archivoBlack.variable} ${spaceGrotesk.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
