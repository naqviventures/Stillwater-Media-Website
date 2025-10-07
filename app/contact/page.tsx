"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { sendContactEmail } from "@/lib/email"

export default function Contact() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

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
      company: formData.get("company") as string,
      service: formData.get("service") as string,
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
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading text-black leading-tight sm:leading-none mb-6 sm:mb-8 font-bold transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            LET'S WORK TOGETHER
          </h1>
          <p
            className={`text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Ready to scale your business with precision lead generation and programmatic CTV? Our team is here to help
            you achieve measurable growth.
          </p>
        </div>
      </section>

      {/* Office Info Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="office-info">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div
            className={`text-center transition-all duration-1000 hover:scale-105 ${visibleSections.has("office-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#FFC700]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h3 className="font-heading text-black text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">LOCATION</h3>
            <p className="text-black text-xs sm:text-sm leading-relaxed">
              Charlotte, NC
              <br />
              Serving clients nationwide
            </p>
          </div>
          <div
            className={`text-center transition-all duration-1000 delay-200 hover:scale-105 ${visibleSections.has("office-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#FFC700]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h3 className="font-heading text-black text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">CONNECT</h3>
            <p className="text-black text-xs sm:text-sm leading-relaxed">
              <a
                href="#contact-form"
                className="text-black hover:text-gray-600 transition-colors duration-300 underline"
              >
                Connect with Us
              </a>
              <br />
              Response within 24 hours
            </p>
          </div>
          <div
            className={`text-center transition-all duration-1000 delay-400 hover:scale-105 ${visibleSections.has("office-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#FFC700]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="font-heading text-black text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">EXPERTISE</h3>
            <p className="text-black text-xs sm:text-sm md:text-base leading-relaxed">
              CTV & Lead Generation
              <br />
              Specialists with 15+ years of experience
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-16 max-w-7xl mx-auto" data-animate id="contact-form">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div
            className={`transition-all duration-1000 ${visibleSections.has("contact-form") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="font-heading font-normal text-black mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              CONTACT
              <br />
              US
            </h2>
            <p className="text-black text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 md:mb-8">
              Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear
              from you!
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-heading text-black text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
                  WHAT WE OFFER
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
                  <li>• Programmatic CTV campaigns across premium platforms</li>
                  <li>• Precision lead generation with real-time data capture</li>
                  <li>• Custom strategy development and optimization</li>
                  <li>• Full-service campaign management and reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-black text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
                  TYPICAL RESPONSE TIME
                </h3>
                <p className="text-black text-xs sm:text-sm">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                  mention it in your message.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`space-y-4 transition-all duration-1000 delay-300 ${visibleSections.has("contact-form") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
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
                <label className="block text-black text-sm font-medium mb-2">Company</label>
                <Input
                  name="company"
                  className="border-gray-300 rounded-lg transition-all duration-300 focus:scale-105 focus:shadow-lg"
                />
              </div>
              <div className="transition-all duration-300 hover:scale-105">
                <label className="block text-black text-sm font-medium mb-2">Service Interest</label>
                <select
                  name="service"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black text-sm transition-all duration-300 focus:scale-105 focus:shadow-lg"
                >
                  <option value="">Select a service</option>
                  <option value="programmatic">Programmatic CTV Advertising</option>
                  <option value="leads">Precision Lead Generation</option>
                  <option value="both">Both Services</option>
                  <option value="consultation">Strategy Consultation</option>
                </select>
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
                className="bg-black text-white hover:bg-[#FFC700] hover:text-black rounded-full px-6 sm:px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform w-full"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
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

      {/* Team Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="team">
        <h2
          className={`font-heading text-black mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal transition-all duration-1000 ${visibleSections.has("team") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          OUR APPROACH
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${visibleSections.has("team") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h3 className="font-heading text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              HUMAN-CENTRIC STRATEGY
            </h3>
            <p className="text-black text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              We exist for one reason: measurable growth. Our approach is human-centric and strategy-obsessed. We listen
              for the right signal, test fast with AI-assisted tooling, and scale what works—without noise.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Discovery: Goals, constraints, and customer truths",
                "Strategy: USP, offer architecture, messaging hierarchy",
                "Execution: Precision leads + programmatic CTV + digital media",
                "Optimization: Daily testing for creative, audiences, and frequency",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 hover:translate-x-2 hover:bg-gray-50 p-2 rounded-lg ${visibleSections.has("team") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-black text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${visibleSections.has("team") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Image
              src="/professional-woman-working-at-modern-desk.jpg"
              alt="Professional team member working"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto" data-animate id="cta">
        <div
          className={`bg-black text-white rounded-lg p-8 sm:p-12 text-center transition-all duration-1000 ${visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-heading font-bold text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            READY TO SCALE?
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how our precision lead generation and programmatic CTV solutions can drive measurable growth
            for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-background text-black hover:bg-[#FFC700] hover:text-black rounded-full px-6 sm:px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform inline-block"
            >
              BOOK STRATEGY CALL
            </a>
            <Button
              variant="outline"
              className="border-2 border-background text-white hover:bg-background hover:text-black rounded-full px-6 sm:px-8 py-3 text-sm bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              VIEW OUR WORK
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266-.057-1.644-.069-4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
