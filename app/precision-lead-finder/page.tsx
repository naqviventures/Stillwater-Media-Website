"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PrecisionLeadFinder() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh]">
          <div
            className={`transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading text-black leading-tight sm:leading-none mb-6 sm:mb-8 font-bold">
              PRECISION LEAD
              <br />
              FINDER
            </h1>
            <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Advanced marketing tool that identifies and captures real-time leads by using exact match keyword searches
              on Google and Bing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-black text-white px-6 sm:px-8 py-3 text-sm font-medium hover:bg-[#FFC700] hover:text-black transition-all duration-300 rounded-full hover:scale-105 hover:shadow-lg transform"
                asChild
              >
                <Link href="/contact#contact-form">GET STARTED TODAY</Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-6 sm:px-8 py-3 text-sm bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                asChild
              >
                <Link href="/contact#contact-form">WATCH EXPLAINER VIDEO</Link>
              </Button>
            </div>
          </div>
          <div
            className={`relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg transition-all duration-1000 delay-300 ${visibleSections.has("hero") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Image
              src="/professional-woman-working-at-modern-desk-with-com.jpg"
              alt="Professional working with lead generation data"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="what-you-get">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal transition-all duration-1000 ${visibleSections.has("what-you-get") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          WHAT YOU GET
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
          <div
            className={`relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg transition-all duration-1000 ${visibleSections.has("what-you-get") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <Image
              src="/urban-cityscape-with-digital-billboards-and-advert.jpg"
              alt="Data analytics and lead generation visualization"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${visibleSections.has("what-you-get") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h3 className="font-heading text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              COMPLETE LEAD PROFILES
            </h3>
            <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Every lead comes with comprehensive contact information, enabling precise targeting and personalized
              outreach campaigns.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-black text-xs sm:text-sm">
              <li>• Verified personal identification</li>
              <li>• Direct email contact information</li>
              <li>• Complete residential addresses</li>
              <li>• Real-time search intent data</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { title: "First & Last Name", desc: "Complete personal identification" },
            { title: "Email Address", desc: "Verified contact information" },
            { title: "Complete Home Address", desc: "Full residential location data" },
            { title: "Real-Time Capture", desc: "Leads from the last 24-48 hours" },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-card p-4 sm:p-6 rounded-lg transition-all duration-1000 hover:scale-105 hover:shadow-xl transform ${visibleSections.has("what-you-get") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="font-heading text-black text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="how-it-works">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal transition-all duration-1000 ${visibleSections.has("how-it-works") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          HOW IT WORKS
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
          <div
            className={`transition-all duration-1000 ${visibleSections.has("how-it-works") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h3 className="font-heading text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              5-STEP PROCESS
            </h3>
            <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Our advanced algorithm captures search intent in real-time, matching keywords to complete contact profiles
              for immediate lead generation.
            </p>
            <div className="bg-card p-4 sm:p-6 rounded-lg">
              <p className="text-black text-xs sm:text-sm leading-relaxed">
                <strong>Note:</strong> Precision Lead Finder follows all HIPAA laws for privacy, strict CCPA and PII
                guidelines, and complies with the CAN-SPAM Act. All leads are verified opt-in with date/time stamps and
                URL acceptance records.
              </p>
            </div>
          </div>
          <div
            className={`relative h-[300px] sm:h-[400px] overflow-hidden rounded-lg transition-all duration-1000 delay-300 ${visibleSections.has("how-it-works") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Image
              src="/minimalist-geometric-shapes-black-sphere-and-woode.jpg"
              alt="Data processing and algorithm visualization"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {[
            {
              step: "1",
              title: "Keyword Identification",
              desc: "We identify exact match keywords related to your business.",
            },
            {
              step: "2",
              title: "Data Collection",
              desc: "When users search these keywords on Google and Bing, our unique algorithm captures the exact keyword searched, matches it to the personal email address, and collects the IP address associated, in real-time.",
            },
            {
              step: "3",
              title: "Lead Generation",
              desc: "We compile the first name, last name, email address, and complete home address of these users.",
            },
            {
              step: "4",
              title: "Deliver",
              desc: "We securely deliver leads to your team in the format of CSV file. Ready to import into Social and CRM's.",
            },
            {
              step: "5",
              title: "Targeted Marketing",
              desc: "Use this detailed information to create highly targeted marketing campaigns, reaching the right audience with precision.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-card rounded-lg transition-all duration-1000 hover:translate-x-2 hover:shadow-lg ${visibleSections.has("how-it-works") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-heading text-black text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-black text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="pricing">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-normal transition-all duration-1000 ${visibleSections.has("pricing") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          PRICING
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${visibleSections.has("pricing") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="bg-card p-6 sm:p-8 rounded-lg">
              <h3 className="font-heading text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                $1 PER LEAD
              </h3>
              <p className="text-black text-sm sm:text-base md:text-lg mb-4 sm:mb-6">5,000 lead minimum per order</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="text-black text-xs sm:text-sm">• Purchase leads daily, weekly, or monthly</li>
                <li className="text-black text-xs sm:text-sm">• Complete lead information (name, email, address)</li>
                <li className="text-black text-xs sm:text-sm">• Real-time data capture</li>
                <li className="text-black text-xs sm:text-sm">• CSV format ready for CRM import</li>
              </ul>
              <Button
                className="bg-black text-white px-6 sm:px-8 py-3 text-sm font-medium hover:bg-[#FFC700] hover:text-black transition-all duration-300 rounded-full hover:scale-105 hover:shadow-lg transform w-full"
                asChild
              >
                <Link href="/contact#contact-form">GET STARTED</Link>
              </Button>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${visibleSections.has("pricing") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h3 className="font-heading text-black text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              VS. GOOGLE CPC
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center p-3 sm:p-4 bg-card rounded-lg">
                <span className="text-black text-xs sm:text-sm">General Keywords</span>
                <span className="text-black text-xs sm:text-sm font-bold">$10-$40 per click</span>
              </div>
              <div className="flex justify-between items-center p-3 sm:p-4 bg-card rounded-lg">
                <span className="text-black text-xs sm:text-sm">High-Value Keywords</span>
                <span className="text-black text-xs sm:text-sm font-bold">$60+ per click</span>
              </div>
              <div className="flex justify-between items-center p-3 sm:p-4 bg-black text-white rounded-lg">
                <span className="text-xs sm:text-sm">Precision Lead Finder</span>
                <span className="text-xs sm:text-sm font-bold">$1 per complete lead</span>
              </div>
            </div>
            <p className="text-black text-xs sm:text-sm mt-4 sm:mt-6 leading-relaxed">
              <strong>Cost Efficiency:</strong> Get complete lead information for a fraction of the cost compared to
              Google CPC. No click required - direct leads with full contact details.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="case-studies">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-normal transition-all duration-1000 ${visibleSections.has("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          CASE STUDIES
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Retail Tile Store Case Study */}
          <div
            className={`bg-card p-6 sm:p-8 rounded-lg transition-all duration-1000 hover:scale-105 hover:shadow-xl transform ${visibleSections.has("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="font-heading text-black text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              RETAIL TILE STORES
            </h3>
            <p className="text-black text-xs sm:text-sm mb-4 sm:mb-6">Large Regional Tile Client, Northeast USA</p>
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div>
                <h4 className="text-black font-bold text-xs sm:text-sm mb-2">BEFORE (All of 2023):</h4>
                <ul className="text-black text-xs sm:text-sm space-y-1">
                  <li>• Spend: $350,000</li>
                  <li>• Store Visits: 4,920</li>
                  <li>• Cost per Visit: $71</li>
                </ul>
              </div>
              <div>
                <h4 className="text-black font-bold text-xs sm:text-sm mb-2">AFTER (March 2024):</h4>
                <ul className="text-black text-xs sm:text-sm space-y-1">
                  <li>• Spend: $10,000</li>
                  <li>• Store Visits: 4,796</li>
                  <li>• Cost per Visit: $17</li>
                </ul>
              </div>
            </div>
            <div className="bg-black text-white p-3 sm:p-4 rounded-lg">
              <p className="text-xs sm:text-sm font-bold">97.47% of 2023 total visits achieved in one month</p>
              <p className="text-xs sm:text-sm">Media budget efficiency improved by 66%</p>
            </div>
          </div>

          {/* Retail Jeweler Case Study */}
          <div
            className={`bg-card p-6 sm:p-8 rounded-lg transition-all duration-1000 delay-200 hover:scale-105 hover:shadow-xl transform ${visibleSections.has("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="font-heading text-black text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              RETAIL JEWELER
            </h3>
            <p className="text-black text-xs sm:text-sm mb-4 sm:mb-6">Connecting and converting active shoppers</p>
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div>
                <h4 className="text-black font-bold text-xs sm:text-sm mb-2">THE PROCESS:</h4>
                <ol className="text-black text-xs sm:text-sm space-y-2">
                  <li>1. Consumer searches for jewelry-related terms</li>
                  <li>2. Precision Lead Finder captures intent and matches to name/address</li>
                  <li>3. Personalized postcard/email sent within days</li>
                </ol>
              </div>
            </div>
            <div className="bg-black text-white p-3 sm:p-4 rounded-lg">
              <p className="text-xs sm:text-sm font-bold">30X RETURN ON AD SPEND (ROAS)</p>
              <p className="text-xs sm:text-sm">$57.53 Average Revenue Per Mailer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="benefits">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-normal transition-all duration-1000 ${visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          KEY BENEFITS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "Real-Time Leads", desc: "Access leads who have searched for keywords in the last 24-48 hours" },
            { title: "Highly Targeted", desc: "Reach individuals actively searching for your products or services" },
            { title: "Competitive Advantage", desc: "Purchase leads searching for your competitors' names" },
            { title: "Flexible Options", desc: "Purchase leads monthly, weekly, or daily to suit your needs" },
            { title: "Cost-Effective", desc: "Pay only $1 per lead with complete contact information" },
            { title: "Enhanced ROI", desc: "Improve campaign performance with data-driven, precise marketing" },
          ].map((benefit, index) => (
            <div
              key={index}
              className={`bg-card p-4 sm:p-6 rounded-lg transition-all duration-1000 hover:scale-105 hover:shadow-xl transform ${visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="font-heading text-black text-lg sm:text-xl font-bold mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Q&A Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="qa">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-normal transition-all duration-1000 ${visibleSections.has("qa") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Q&A
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {[
            {
              q: "How do you identify the best keywords to purchase?",
              a: "Use free tools like Google Keyword Planner or paid platforms like SEMRush to see monthly search volumes in the United States and filter by states. This helps identify exact match keywords with the highest potential for your business.",
            },
            {
              q: "Is the data collection compliant with privacy laws?",
              a: "Yes, Precision Lead Finder follows all HIPAA laws for privacy, strict CCPA and PII guidelines, and complies with the CAN-SPAM Act. All leads are verified opt-in with date/time stamps and URL acceptance records.",
            },
            {
              q: "What can I do with the leads once I receive them?",
              a: "Upload to social media platforms (Facebook, Instagram, LinkedIn, YouTube) as first-party lists, send direct mail campaigns, run programmatic TV ads, or create targeted email marketing campaigns.",
            },
            {
              q: "How quickly can I receive leads?",
              a: "Leads are captured in real-time and delivered within 24-48 hours. You can purchase leads on a daily, weekly, or monthly basis depending on your campaign needs.",
            },
            {
              q: "What makes this different from Google Ads?",
              a: "Unlike Google Ads where you pay $10-$60+ per click with no guarantee of contact information, Precision Lead Finder provides complete lead details (name, email, address) for just $1 per lead with no clicks required.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-card p-4 sm:p-6 rounded-lg transition-all duration-1000 hover:shadow-lg ${visibleSections.has("qa") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="font-heading text-black text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.q}</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="cta">
        <div
          className={`text-center transition-all duration-1000 ${visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-heading text-black mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-normal">
            READY TO GET STARTED?
          </h2>
          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Transform your lead generation with Precision Lead Finder. Start capturing real-time leads from your exact
            target audience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-black text-white px-6 sm:px-8 py-3 text-sm font-medium hover:bg-[#FFC700] hover:text-black transition-all duration-300 rounded-full hover:scale-105 hover:shadow-lg transform"
              asChild
            >
              <Link href="/contact#contact-form">BOOK STRATEGY CALL</Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-6 sm:px-8 py-3 text-sm bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              asChild
            >
              <Link href="/contact#contact-form">GET PRICING QUOTE</Link>
            </Button>
          </div>
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.583.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.949.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.617 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
