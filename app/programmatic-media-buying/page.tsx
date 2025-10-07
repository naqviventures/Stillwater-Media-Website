"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })), {
  ssr: false,
})

const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls })), {
  ssr: false,
})

const Environment = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Environment })), {
  ssr: false,
})

// const RateCardBook3D = dynamic(() => import("../components/RateCardBook3D"), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
//       <div className="text-black">Loading 3D Model...</div>
//     </div>
//   ),
// })

export default function ProgrammaticMediaBuying() {
  console.log("[v0] ProgrammaticMediaBuying component rendering")

  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleRateCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("[v0] Rate card form submitted with email:", email)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Rate card sent to your email!")
      setEmail("")

      // Clear message after 3 seconds
      setTimeout(() => setSubmitMessage(""), 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto relative z-20 animate-in fade-in duration-1000 bg-card">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <Image
            src="/stillwater-logo.png"
            alt="Stillwater Media Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110 bg-card"
          />
          <div className="text-black font-heading tracking-wide text-xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 group-hover:text-gray-700 lg:text-2xl bg-card">
            STILLWATER MEDIA
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-black text-sm hover:opacity-70 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="/programmatic-media-buying"
            className="text-black text-sm hover:opacity-70 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Programmatic
          </Link>
          <Link
            href="/precision-lead-finder"
            className="text-black text-sm hover:opacity-70 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Lead Finder
          </Link>
          <Link
            href="/insights"
            className="text-black text-sm hover:opacity-70 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="text-black text-sm hover:opacity-70 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <div
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-gray-200 shadow-lg z-50">
            <nav className="flex flex-col p-6 space-y-4">
              <Link
                href="/"
                className="text-black text-lg hover:opacity-70 transition-all duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/programmatic-media-buying"
                className="text-black text-lg hover:opacity-70 transition-all duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programmatic
              </Link>
              <Link
                href="/precision-lead-finder"
                className="text-black text-lg hover:opacity-70 transition-all duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lead Finder
              </Link>
              <Link
                href="/insights"
                className="text-black text-lg hover:opacity-70 transition-all duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="text-black text-lg hover:opacity-70 transition-all duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-16 max-w-7xl mx-auto relative" data-animate id="hero">
        <h1
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading text-black leading-tight sm:leading-none mb-6 sm:mb-8 lg:mb-12 font-bold text-left transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          PROGRAMMATIC MEDIA BUYING
        </h1>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh]">
          <div
            className={`transition-all duration-1000 delay-300 ${visibleSections.has("hero") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="font-heading text-black mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                HUMAN-CENTRIC
                <br />
                CREATIVE + AI BIDDING
              </h2>
              <p className="text-black text-sm sm:text-base leading-relaxed max-w-md">
                We plan, buy, and optimize CTV across YouTube TV, Roku, and premium OTT. Human-centric creative + AI
                bidding + outcome measurement equals campaigns that scale.
              </p>
            </div>
            <Button
              className="bg-black text-white px-6 sm:px-8 py-3 text-sm font-medium hover:bg-[#FFC700] hover:text-black transition-all duration-300 rounded-full hover:scale-105 hover:shadow-lg transform"
              asChild
            >
              <Link href="/contact#contact-form">START YOUR CTV CAMPAIGN</Link>
            </Button>
          </div>
          <div
            className={`relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg z-10 transition-all duration-1000 delay-500 ${visibleSections.has("hero") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div
              className="absolute inset-0 w-[110%] h-[110%] transition-transform duration-300 hover:scale-105"
              style={{
                transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px)`,
              }}
            >
              <Image
                src="/urban-cityscape-with-digital-billboards-and-advert.jpg"
                alt="Digital advertising landscape"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="stats">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal transition-all duration-1000 ${visibleSections.has("stats") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          THE NUMBERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { stat: "$23B", desc: "CTV ad spend projected for 2024" },
            { stat: "98%", desc: "Average completion rate for CTV ads" },
            { stat: "87%", desc: "Brands consider CTV effective or superior" },
            { stat: "51.5%", desc: "CTV will account for TV ad revenue by 2029" },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 hover:scale-105 ${visibleSections.has("stats") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-black mb-4">{item.stat}</div>
              <p className="text-black text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Programmatic Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="why-programmatic">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div
            className={`transition-all duration-1000 ${visibleSections.has("why-programmatic") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="font-heading font-normal text-black mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              WHY PROGRAMMATIC?
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "PRECISION TARGETING",
                  desc: "Reach your exact audience with household-level targeting and real-time optimization.",
                },
                {
                  title: "BRAND SAFETY",
                  desc: "Premium inventory across trusted platforms like Disney, Amazon Prime, and Netflix.",
                },
                {
                  title: "MEASURABLE RESULTS",
                  desc: "Real-time dashboards tracking ROI, ROAS, and CPA with full transparency.",
                },
                {
                  title: "SCALE & EFFICIENCY",
                  desc: "AI-driven bidding optimizes spend across multiple channels simultaneously.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 hover:translate-x-2 hover:bg-gray-50 p-4 sm:p-6 rounded-lg ${visibleSections.has("why-programmatic") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <h3 className="font-heading font-bold text-black mb-2 text-lg sm:text-xl">{benefit.title}</h3>
                  <p className="text-black text-sm sm:text-base leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${visibleSections.has("why-programmatic") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Image
              src="/modern-architectural-building-with-glass-facade-an.jpg"
              alt="Modern architecture representing precision"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* DSP Partners Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="dsp-partners">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal transition-all duration-1000 ${visibleSections.has("dsp-partners") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          OUR DSP PARTNERS
        </h2>
        <div
          className={`bg-card rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${visibleSections.has("dsp-partners") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-black text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            We maintain seats on all major Demand Side Platforms (DSPs), giving you access to premium inventory and
            advanced targeting capabilities across the digital ecosystem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {["The Trade Desk", "Xandr", "Yahoo DSP", "Amazon DSP"].map((dsp, index) => (
              <div
                key={index}
                className={`text-center p-4 sm:p-6 bg-background rounded-lg border-2 border-black transition-all duration-500 hover:scale-105 hover:shadow-lg ${visibleSections.has("dsp-partners") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${400 + index * 50}ms` }}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-black mb-2">{dsp}</div>
                <div className="text-xs sm:text-sm text-black">Premium Access</div>
              </div>
            ))}
          </div>
        </div>

        <h3
          className={`font-heading text-black mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal transition-all duration-1000 delay-400 ${visibleSections.has("dsp-partners") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          PMP DEALS WITH TOP PUBLISHERS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {["Disney", "Amazon Prime", "Netflix", "iHeartRadio", "Roku", "YouTube TV", "Hulu", "Paramount+"].map(
            (publisher, index) => (
              <div
                key={index}
                className={`text-center p-3 sm:p-4 bg-black text-white rounded-full transition-all duration-500 hover:scale-105 hover:bg-gray-800 ${visibleSections.has("dsp-partners") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${600 + index * 50}ms` }}
              >
                <div className="font-heading font-bold text-xs sm:text-sm md:text-base">{publisher}</div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Rate Card Download Section with Image */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="rate-card">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${visibleSections.has("rate-card") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="font-heading font-normal text-black mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              GET OUR MASTER RATE CARD
            </h2>
            <p className="text-black text-sm sm:text-base leading-relaxed mb-8">
              Download our comprehensive 2025 rate card featuring CTV Super Premium, Premium OTT, Sports OTT,
              Geofencing, Display, Audio, and specialized inventory pricing. Get transparent rates for all major
              platforms including ESPN, Hulu, Netflix, Amazon Prime, and more.
            </p>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h3 className="font-heading font-bold text-black mb-4 text-xl">What's Included:</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFC700] rounded-full"></div>
                  CTV Super Premium &amp; Ultra ($ CPM Pricing) - Disney+, Netlfix, ESPN, Hulu
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFC700] rounded-full"></div>
                  Premium OTT - Amazon, Sports, YouTubeTV rates
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFC700] rounded-full"></div>
                  Geofencing & Social Mirroring options
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFC700] rounded-full"></div>
                  Display, Audio, and DOOH pricing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFC700] rounded-full"></div>
                  Specialized categories and restrictions
                </li>
              </ul>
            </div>

            <form onSubmit={handleRateCardSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC700] focus:border-transparent"
                  placeholder="Enter your email to download rate card"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-[#FFC700] hover:text-black rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "DOWNLOAD RATE CARD PDF"}
              </Button>
              {submitMessage && <p className="text-green-600 text-sm font-medium text-center">{submitMessage}</p>}
            </form>
          </div>

          <div
            className={`relative h-[400px] sm:h-[500px] lg:h-[600px] transition-all duration-1000 delay-300 ${visibleSections.has("rate-card") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-[300px] h-[400px] transform hover:scale-105 transition-transform duration-500 hover:rotate-2">
                <Image
                  src="/master-rate-card-cover.jpg"
                  alt="Master Rate Card 2025"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="case-studies">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal transition-all duration-1000 ${visibleSections.has("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          CASE STUDIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "ECOMMERCE SAAS",
              result: "30% Cost Reduction",
              desc: "Achieved scalable performance in CTV with optimized bidding strategies and premium inventory access.",
            },
            {
              title: "EXTENDED WARRANTY",
              result: "67% ROAS Increase",
              desc: "Doubled holiday sales year-over-year by leveraging CTV and retail data for precise targeting.",
            },
            {
              title: "STREAMING PLATFORM",
              result: "39% Revenue Growth",
              desc: "Increased programmatic CTV revenue with direct advertiser connections and optimized win rates.",
            },
          ].map((study, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-6 transition-all duration-1000 hover:scale-105 hover:shadow-xl ${visibleSections.has("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <h3 className="font-heading font-bold text-black mb-4 text-xl sm:text-2xl">{study.title}</h3>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">{study.result}</div>
              <p className="text-black text-sm sm:text-base leading-relaxed">{study.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Q&A Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="qa">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal transition-all duration-1000 ${visibleSections.has("qa") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          FREQUENTLY ASKED
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {[
            {
              q: "What is programmatic media buying?",
              a: "Programmatic media buying uses automated technology and AI to purchase digital advertising space in real-time. It allows for precise targeting, efficient spending, and data-driven optimization across multiple channels simultaneously.",
            },
            {
              q: "How does CTV advertising differ from traditional TV?",
              a: "CTV advertising offers precise targeting at the household level, real-time optimization, measurable results, and the ability to reach cord-cutters. Unlike traditional TV, you can track exact ROI and adjust campaigns in real-time.",
            },
            {
              q: "What platforms do you advertise on?",
              a: "We advertise across premium CTV platforms including YouTube TV, Roku, Hulu, Amazon Prime Video, Disney+, Netflix (with ads), Paramount+, and many more through our DSP partnerships.",
            },
            {
              q: "How do you ensure brand safety?",
              a: "We work exclusively with premium publishers and use advanced brand safety tools. Our PMP (Private Marketplace) deals ensure your ads appear only on trusted, brand-safe inventory.",
            },
            {
              q: "What kind of results can I expect?",
              a: "Results vary by industry and goals, but our clients typically see 30-67% improvements in key metrics like ROAS, cost reduction, and revenue growth. We provide real-time dashboards to track performance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 pb-6 transition-all duration-1000 ${visibleSections.has("qa") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="font-heading font-bold text-black mb-4 text-lg sm:text-xl">{item.q}</h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="cta">
        <div
          className={`bg-black text-white rounded-lg p-8 sm:p-12 text-center transition-all duration-1000 ${visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-heading font-bold text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            READY TO SCALE?
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how programmatic CTV can drive measurable growth for your brand. Our team will create a custom
            strategy based on your goals and budget.
          </p>
          <Button
            className="bg-white text-black hover:bg-[#FFC700] hover:text-black rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            asChild
          >
            <Link href="/contact#contact-form">BOOK STRATEGY CALL</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8 sm:py-16 border-t border-gray-200" data-animate id="footer">
        <div
          className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${visibleSections.has("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="font-heading text-black mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl transition-all duration-300 hover:scale-105">
            STILLWATER MEDIA
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-black rounded-full transition-all duration-300 hover:scale-125 hover:bg-gray-700 cursor-pointer flex items-center justify-center">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="w-6 h-6 bg-black rounded-full transition-all duration-300 hover:scale-125 hover:bg-gray-700 cursor-pointer flex items-center justify-center">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-2.664 4.771-4.919 4.919-1.266.057-1.644.069-4.849.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69-.073 4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79 4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
            <span className="text-black text-sm">Charlotte, NC</span>
          </div>
          <div className="text-center">
            <Link
              href="/privacy-policy"
              className="text-black text-xs hover:opacity-70 transition-all duration-300 underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
