import type { Metadata } from "next"
import { Instrument_Serif, Instrument_Sans, IBM_Plex_Mono } from "next/font/google"
import { Navigation, Footer } from "@/components/navigation"
import { TheData } from "@/components/the-data-page"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: { absolute: "The Data — Stillwater Media" },
  description:
    "23.6 million American millionaires. Four layers of data to find the ones who should see your brand.",
  alternates: { canonical: "/the-data" },
  openGraph: {
    title: "The Data — Stillwater Media",
    description:
      "23.6 million American millionaires. Four layers of data to find the ones who should see your brand.",
    url: "https://www.stillwatermedia.io/the-data",
    type: "website",
  },
}

export default function TheDataPage() {
  return (
    <div
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <Navigation />
      <TheData />
      <Footer />
    </div>
  )
}
