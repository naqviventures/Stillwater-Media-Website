"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Navigation, Footer } from "@/components/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Check, X, Plane, Users, Hotel, ShoppingBag, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 pt-32 pb-20 relative" data-animate id="hero">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-luxury-abstract.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        
        <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-8 text-foreground font-normal tracking-tight">
            Performance media<br />
            <span className="italic">for premium brands</span>
          </h1>
          
          <p className="text-foreground/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12">
            We help luxury and high-consideration brands acquire affluent customers through premium inventory and disciplined measurement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/apply">
              <Button className="bg-foreground text-background hover:bg-accent hover:text-background text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300 group">
                APPLY TO WORK WITH US
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border border-foreground/30 text-foreground hover:border-foreground text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300">
                REQUEST PRIVATE CAPABILITIES DECK
              </Button>
            </Link>
          </div>

          <p className="text-foreground/40 text-sm tracking-wide">
            We accept a limited number of engagements per quarter.
          </p>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="border-y border-border py-16 px-6 sm:px-12" data-animate id="social-proof">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${visibleSections.has("social-proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-foreground/50 text-xs tracking-[0.2em] mb-10">SELECTED ENGAGEMENTS</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 items-center mb-10">
            {[
              { icon: Plane, label: "Private aviation" },
              { icon: Users, label: "Private clubs" },
              { icon: Hotel, label: "Luxury hospitality" },
              { icon: ShoppingBag, label: "Premium DTC" },
              { icon: TrendingUp, label: "Boutique wealth" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <item.icon className="w-8 h-8 text-accent/60" strokeWidth={1} />
                <span className="text-foreground/60 text-xs tracking-wide text-center">{item.label}</span>
              </div>
            ))}
          </div>
          
          <p className="text-foreground/40 text-sm italic">Private references available upon request.</p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12" data-animate id="what-we-do">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("what-we-do") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-4">CAPABILITIES</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">What We Do</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium CTV & Programmatic",
                bullets: [
                  "Brand-safe inventory on premium streaming platforms",
                  "Household-level targeting with frequency control"
                ]
              },
              {
                title: "Affluent Audience Engineering",
                bullets: [
                  "First-party data enrichment and modeling",
                  "High-net-worth targeting across channels"
                ]
              },
              {
                title: "Measurement & Incrementality",
                bullets: [
                  "Attribution beyond last-click",
                  "Incrementality testing and lift measurement"
                ]
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`border border-border p-8 transition-all duration-1000 hover:border-foreground/30 ${visibleSections.has("what-we-do") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-6 font-normal">{service.title}</h3>
                <ul className="space-y-3">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="text-foreground/60 text-sm leading-relaxed flex items-start gap-3">
                      <span className="text-accent mt-1">-</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for High CAC Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-card" data-animate id="high-cac">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("high-cac") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-4">THE CHALLENGE</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">
              Built for <span className="italic">high CAC</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "High customer acquisition costs",
                solution: "Precision targeting reduces waste and improves unit economics"
              },
              {
                problem: "Long sales cycles",
                solution: "Multi-touch attribution tracks the complete customer journey"
              },
              {
                problem: "Attribution confusion",
                solution: "Incrementality testing reveals true channel contribution"
              },
              {
                problem: "Brand safety concerns",
                solution: "Premium inventory only, with rigorous content verification"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${visibleSections.has("high-cac") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="border-t border-accent/50 pt-6">
                  <p className="text-foreground text-sm font-medium mb-3">{item.problem}</p>
                  <p className="text-foreground/50 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selective by Design Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12" data-animate id="selective">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("selective") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-4">FIT</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">
              Selective <span className="italic">by design</span>
            </h2>
          </div>

          <div className={`grid md:grid-cols-2 gap-12 mb-12 transition-all duration-1000 delay-200 ${visibleSections.has("selective") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Best Fit */}
            <div className="border border-border p-8">
              <h3 className="text-foreground text-sm tracking-[0.15em] mb-8">BEST FIT</h3>
              <ul className="space-y-4">
                {[
                  "Luxury, premium, or high-consideration products",
                  "Customer LTV exceeds $5,000",
                  "Sales cycles longer than 30 days",
                  "Existing brand equity to protect",
                  "Committed to measurement rigor"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="border border-border p-8">
              <h3 className="text-foreground text-sm tracking-[0.15em] mb-8">NOT A FIT</h3>
              <ul className="space-y-4">
                {[
                  "Low-margin, high-volume e-commerce",
                  "Brands requiring overnight results",
                  "Categories with regulatory restrictions",
                  "Companies without clear positioning",
                  "Budgets optimizing for lowest CPM"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/50 text-sm">
                    <X className="h-4 w-4 text-foreground/30 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`border-t border-border pt-8 transition-all duration-1000 delay-400 ${visibleSections.has("selective") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/50 text-sm">
              Minimum engagement: <span className="text-foreground">$50,000/quarter media spend</span>
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-card" data-animate id="case-studies">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-4">RESULTS</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">Case Studies</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "3.2x",
                label: "ROAS Improvement",
                description: "Luxury real estate developer achieved 3.2x return on ad spend through premium CTV placement and affluent audience targeting.",
                category: "Real Estate",
                image: "/images/case-study-real-estate.jpg"
              },
              {
                metric: "47%",
                label: "CAC Reduction",
                description: "High-end automotive dealership group reduced customer acquisition cost by 47% while maintaining lead quality.",
                category: "Automotive",
                image: "/images/case-study-automotive.jpg"
              },
              {
                metric: "2.8x",
                label: "Conversion Lift",
                description: "Private wealth management firm saw 2.8x lift in qualified consultations through incrementality-tested campaigns.",
                category: "Financial Services",
                image: "/images/case-study-wealth.jpg"
              }
            ].map((study, index) => (
              <div 
                key={index}
                className={`border border-border overflow-hidden transition-all duration-1000 hover:border-foreground/30 ${visibleSections.has("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="h-48 relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.category}
                    fill
                    className="object-cover opacity-70"
                  />
                </div>
                <div className="p-8">
                  <p className="text-foreground/40 text-xs tracking-[0.2em] mb-6">{study.category}</p>
                  <p className="font-heading text-4xl sm:text-5xl text-accent mb-2">{study.metric}</p>
                  <p className="text-foreground text-sm font-medium mb-4">{study.label}</p>
                  <p className="text-foreground/50 text-sm leading-relaxed mb-6">{study.description}</p>
                  <button className="text-foreground/60 text-xs tracking-[0.1em] hover:text-foreground transition-colors flex items-center gap-2 group">
                    REQUEST FULL CASE STUDY
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12" data-animate id="process">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-4">PROCESS</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">How We Work</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", description: "Deep dive into current performance, audience, and competitive landscape" },
              { step: "02", title: "Architect", description: "Design channel strategy, measurement framework, and creative approach" },
              { step: "03", title: "Launch", description: "Execute with precision targeting across premium inventory" },
              { step: "04", title: "Optimize", description: "Continuous refinement based on incrementality and performance data" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <p className="text-accent text-xs tracking-[0.2em] mb-4">{item.step}</p>
                <h3 className="font-heading text-xl text-foreground mb-3 font-normal">{item.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 border-t border-border" data-animate id="cta">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal mb-8">
            Ready to discuss <span className="italic">your goals?</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-12 max-w-2xl mx-auto">
            We work with a select number of brands each quarter. If you believe we might be a fit, we would welcome the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-foreground text-background hover:bg-accent hover:text-background text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300 group">
                APPLY TO WORK WITH US
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border border-foreground/30 text-foreground hover:border-foreground text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300">
                REQUEST CAPABILITIES DECK
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
