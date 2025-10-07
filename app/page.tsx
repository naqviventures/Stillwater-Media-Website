"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { sendContactEmail } from "@/lib/email"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    const result = await sendContactEmail(data)

    if (result.success) {
      setSubmitMessage("Thank you! We'll be in touch soon.")
      ;(e.target as HTMLFormElement).reset()
    } else {
      setSubmitMessage("Sorry, there was an error. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto relative z-20 animate-in fade-in duration-1000 bg-card">
        {/* Wrapped logo and title in Link component to make them clickable and link to homepage */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <Image
            src="/stillwater-logo.png"
            alt="Stillwater Media Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110 bg-card"
          />
          <div className="text-black font-heading tracking-wide text-xl font-bold transition-colors duration-300 group-hover:text-gray-700 sm:text-2xl bg-card">
            STILLWATER MEDIA
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-normal">
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
          className={`text-xl sm:text-2xl md:text-3xl 2xl:text-6xl font-heading text-black leading-tight sm:leading-none mb-6 sm:mb-8 lg:mb-12 font-bold transition-all duration-1000 text-center lg:text-7xl ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          SIGNAL. STRATEGY. SCALE.
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[50vh] lg:min-h-[60vh]">
          <div
            className={`transition-all duration-1000 delay-300 ${visibleSections.has("hero") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="font-heading text-black mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                HUMAN-CENTRIC
                <br />
                MEDIA AGENCY
              </h2>
              <p className="text-black text-sm sm:text-base leading-relaxed max-w-md">
                We build strategic marketing systems that turn prospects into customers, precision lead generation and
                programmatic ConnectedTV buying for growth-stage brands.
              </p>
            </div>
            <Button
              className="bg-black text-white px-6 sm:px-8 py-3 text-sm font-medium hover:bg-[#FFC700] hover:text-black transition-all duration-300 rounded-full hover:scale-105 hover:shadow-lg transform"
              asChild
            >
              <Link href="/contact#contact-form">LEARN MORE</Link>
            </Button>
          </div>
          <div
            className={`relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg z-10 transition-all duration-1000 delay-500 ${visibleSections.has("hero") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div
              className="absolute inset-0 w-[105%] h-[105%] transition-transform duration-75 ease-out hover:scale-105"
              style={{
                transform: `translate3d(${scrollY * 0.02}px, ${scrollY * 0.05}px, 0)`,
              }}
            >
              <video src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Generation_From_Image-NvoMlkGlWtG7jKSp2OQkcRBMuQ4ZUT.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-6 py-8 sm:py-16 max-w-7xl mx-auto" data-animate id="what-we-do">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal transition-all duration-1000 ${visibleSections.has("what-we-do") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          WHAT WE DO
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Programmatic Media Buying */}
          <div
            className={`rounded-lg overflow-hidden transition-all duration-1000 delay-200 hover:scale-105 hover:shadow-xl transform bg-card ${visibleSections.has("what-we-do") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="h-48 sm:h-64 bg-gray-200 relative overflow-hidden">
              <Image
                src="/urban-cityscape-with-digital-billboards-and-advert.jpg"
                alt="Urban billboard advertising"
                width={400}
                height={256}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-6 bg-card">
              <Link href="/programmatic-media-buying" className="block">
                <h3 className="font-heading font-normal text-black mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer">
                  PROGRAMMATIC
                  <br />
                  MEDIA BUYING
                </h3>
              </Link>
              <p className="text-black text-sm leading-relaxed mb-6">
                We plan, buy, and optimize CTV across YouTube TV, Roku, and premium OTT, human-centric creative + AI
                bidding + outcome measurement equals campaigns that scale.
              </p>
              <ul className="text-black text-sm space-y-1 mb-6">
                <li>• Brand-safe inventory • Hyper-local & household targeting •</li>
                <li>Frequency control • Real-time optimization • ROI/ROAS/CPA</li>
                <li>dashboards</li>
              </ul>
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-4 sm:px-6 py-2 text-sm bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                asChild
              >
                <Link href="/programmatic-media-buying">LAUNCH A CTV CAMPAIGN</Link>
              </Button>
            </div>
          </div>

          {/* Precision Lead Finder */}
          <div
            className={`rounded-lg overflow-hidden text-card bg-card transition-all duration-1000 delay-400 hover:scale-105 hover:shadow-xl transform ${visibleSections.has("what-we-do") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="h-48 sm:h-64 bg-gray-200 relative overflow-hidden">
              <Image
                src="/professional-woman-working-at-modern-desk-with-com.jpg"
                alt="Professional working at desk"
                width={400}
                height={256}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-6 text-background bg-card">
              <Link href="/precision-lead-finder" className="block">
                <h3 className="font-heading font-normal text-black mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer">
                  PRECISION LEAD
                  <br />
                  FINDER
                </h3>
              </Link>
              <p className="text-black text-sm leading-relaxed mb-6">
                We design CRs, verify data, and deliver CRM-ready prospects. Human-centric outreach protects your brand
                while maximizing response and revenue.
              </p>
              <ul className="text-black text-sm space-y-1 mb-6">
                <li>• Data verification • Verified email • phone & location •</li>
                <li>suppression • HubSpot/Salesforce delivery • Pipeline/GAC</li>
                <li>dashboards</li>
              </ul>
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-4 sm:px-6 py-2 text-sm bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                asChild
              >
                <Link href="/contact#contact-form">BOOK LEAD STRATEGY CALL</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="px-6 py-8 sm:py-16 max-w-7xl mx-auto" data-animate id="how-we-work">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div
            className={`relative transition-all duration-1000 ${visibleSections.has("how-we-work") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <Image
              src="/minimalist-geometric-composition-with-black-sphere.jpg"
              alt="Minimalist geometric composition"
              width={400}
              height={400}
              className="w-full h-auto transition-transform duration-700 hover:rotate-3 hover:scale-105"
            />
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${visibleSections.has("how-we-work") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h2 className="font-heading font-normal text-black mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              HOW WE WORK
            </h2>
            <p className="text-black text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              We exist for one reason: measurable growth.
              <br />
              <br />
              Our approach is human-centric and strategy-obsessed. We listen for the right signal, test fast with
              AI-assisted tooling, and scale what works—without noise.
            </p>
            <div className="space-y-4 mb-6 sm:mb-8">
              {[
                { num: "1.", title: "Discover", desc: "Goals, constraints, and customer truths." },
                { num: "2.", title: "Define", desc: "USP, offer, architecture, messaging hierarchy." },
                {
                  num: "3.",
                  title: "Signal Plan",
                  desc: "Channel mix: Precision Leads + Programmatic CTV + Digital Media.",
                },
                {
                  num: "4.",
                  title: "Build & Launch",
                  desc: "Creative, tracking, QA, compliant data & duplicate inventory.",
                },
                { num: "5.", title: "Optimize", desc: "Daily testing for creative, audiences, bid, and frequency." },
                { num: "6.", title: "Scale & Report", desc: "Outcome dashboards, learnings, and expansion path." },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 hover:translate-x-2 hover:bg-gray-50 p-2 rounded-lg ${visibleSections.has("how-we-work") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <span className="text-black font-bold">{step.num}</span>
                  <span className="text-black text-sm">
                    <strong>{step.title}</strong> — {step.desc}
                  </span>
                </div>
              ))}
            </div>
            <Button
              className="bg-black text-white hover:bg-[#FFC700] hover:text-black rounded-full px-6 sm:px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              asChild
            >
              <Link href="/contact#contact-form">LEARN MORE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-8 sm:py-16 max-w-7xl mx-auto" data-animate id="contact">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div
            className={`transition-all duration-1000 ${visibleSections.has("contact") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="font-heading font-normal text-black mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              CONTACT
              <br />
              US
            </h2>
            <p className="text-black text-sm leading-relaxed mb-6 sm:mb-8">
              Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear
              from you!
            </p>
          </div>
          <div
            className={`space-y-4 transition-all duration-1000 delay-300 ${visibleSections.has("contact") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="transition-all duration-300 hover:scale-105">
                  <label className="block text-black text-sm font-medium mb-2">Name (required)</label>
                  <Input
                    name="name"
                    required
                    className="border-gray-300 rounded-lg transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <label className="block text-black text-sm font-medium mb-2">Last Name</label>
                  <Input
                    name="lastName"
                    className="border-gray-300 rounded-lg transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  />
                </div>
              </div>
              <div className="transition-all duration-300 hover:scale-105">
                <label className="block text-black text-sm font-medium mb-2">Email (required)</label>
                <Input
                  name="email"
                  type="email"
                  required
                  className="border-gray-300 rounded-lg transition-all duration-300 focus:scale-105 focus:shadow-lg"
                />
              </div>
              <div className="transition-all duration-300 hover:scale-105">
                <label className="block text-black text-sm font-medium mb-2">Message (optional)</label>
                <Textarea
                  name="message"
                  className="border-gray-300 rounded-lg h-24 transition-all duration-300 focus:scale-105 focus:shadow-lg"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white hover:bg-[#FFC700] hover:text-black rounded-full px-6 sm:px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                {isSubmitting ? "SENDING..." : "SEND"}
              </Button>
              {submitMessage && (
                <p className={`text-sm ${submitMessage.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 sm:py-16 border-t border-gray-200" data-animate id="footer">
        <div
          className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${visibleSections.has("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="font-heading text-black mb-6 sm:mb-8 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl transition-all duration-300 hover:scale-105">
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266-.057-1.644-.069-4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.617 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.49-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79 4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
