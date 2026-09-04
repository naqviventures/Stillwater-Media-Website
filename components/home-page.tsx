"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Navigation, Footer } from "@/components/navigation"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Check, X, Plane, Users, Hotel, ShoppingBag, TrendingUp, Car, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [caseStudyIndex, setCaseStudyIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const caseStudies = [
    {
      metric: "3.2x",
      label: "ROAS Improvement",
      description: "Luxury real estate developer achieved 3.2x return on ad spend through premium CTV placement and affluent audience targeting.",
      category: "Real Estate",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/villa-3RcNXJukiq4qQyFvr6tmHFRssRvlBy.png"
    },
    {
      metric: "38%",
      label: "ROAS on Equipment Sales",
      description: "Premium golf equipment brand drove a 38% increase in direct revenue through CTV and programmatic targeting of avid golfers with household incomes above $250K.",
      category: "Golf Equipment",
      image: "/images/case-study-golf.jpg"
    },
    {
      metric: "52%",
      label: "Membership Inquiry Growth",
      description: "Exclusive private country club grew qualified membership inquiries by 52% by reaching high-net-worth prospects through premium digital channels.",
      category: "Private Clubs",
      image: "/images/case-study-private-club.jpg"
    },
    {
      metric: "4.1x",
      label: "Lead Quality Lift",
      description: "Private aviation charter company achieved 4.1x improvement in lead quality through precision targeting of frequent flyers and business travelers.",
      category: "Private Aviation",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pj-KZ1i4ebyIG3fBqRuF0Q51xaRuLD4lg.png"
    },
    {
      metric: "47%",
      label: "CAC Reduction",
      description: "High-end automotive dealership group reduced customer acquisition cost by 47% while maintaining lead quality through programmatic audience engineering.",
      category: "Automotive",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leather-pMiVazMlNKmAh3VIdfiAQtLTeQCVWN.png"
    },
    {
      metric: "2.8x",
      label: "Qualified Consultation Lift",
      description: "Private wealth management firm saw 2.8x lift in qualified consultations through incrementality-tested campaigns targeting ultra-high-net-worth individuals.",
      category: "Wealth Management",
      image: "/images/case-study-wealth.jpg"
    },
    {
      metric: "61%",
      label: "Repeat Purchase Rate",
      description: "Luxury direct-to-consumer timepiece brand achieved a 61% increase in repeat purchase rate through precision retargeting and affluent lookalike modeling.",
      category: "Direct to Consumer",
      image: "/images/case-study-dtc.jpg"
    },
  ]

  const visibleCount = 3
  const maxIndex = caseStudies.length - visibleCount

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

      {/* Trusted By Brands */}
      <section className="border-b border-border py-16 px-6 sm:px-12" data-animate id="trusted-by">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${visibleSections.has("trusted-by") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-foreground/40 text-xs tracking-[0.2em] mb-12 text-center">TRUSTED BY</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 md:gap-x-20">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jetlinx-logo-white-e1769896941651-w3ubXqlqCYtEHFxcDTudDS762Th8bX.png",
                alt: "JetLinx",
                height: 44,
                href: "https://www.jetlinx.com",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w-hotels-logo-png-transparent-uthObCjSeGBfMKwtMi7udjDyTqhhNt.webp",
                alt: "W Hotels",
                height: 72,
                href: "https://www.marriott.com/w-hotels/travel.mi",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pxg_logo_transparent-hYzi3h9jcpvwfZelS5c8y7HaHGQH4v.png",
                alt: "PXG",
                height: 64,
                href: "https://www.pxg.com",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6297b9faac36da5e098ea631_FLY_MasterLogo_RGB_Reverse%202-CTJ30129ucxz1nRDzATR9RCcIrVWta.png",
                alt: "FLY Exclusive",
                height: 44,
                href: "https://www.flyexclusive.com",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/preserve_logo_only_wordmark_white_text-T7CoWSAvi14KiCMscwBxe5qSm5cuHt.png",
                alt: "Preserve",
                height: 72,
                href: "https://www.thepreserveri.com",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4c712f073b348846cf77773df105-2uDvrK2wUA7eZxy1htm5bYIxsCTaJL.webp",
                alt: "Financial Independence Group",
                height: 58,
                href: "https://www.figmarketing.com",
              },
            ].map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${logo.alt}`}
                className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: logo.height,
                    width: "auto",
                    maxWidth: 200,
                  }}
                  className="object-contain trusted-logo"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline with Image */}
      <section className="py-20 px-6 sm:px-12 relative overflow-hidden" data-animate id="tagline">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leather-pMiVazMlNKmAh3VIdfiAQtLTeQCVWN.png"
            alt=""
            fill
            className={`object-cover transition-all duration-[2000ms] ${visibleSections.has("tagline") ? "opacity-20 scale-100" : "opacity-0 scale-105"}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>
        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${visibleSections.has("tagline") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground/80 font-normal italic">
            Signal. Strategy. Scale.
          </h2>
        </div>
      </section>

      {/* Private Jet Image Break */}
      <section className="h-64 sm:h-80 relative overflow-hidden" data-animate id="jet-break">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pj-KZ1i4ebyIG3fBqRuF0Q51xaRuLD4lg.png"
          alt=""
          fill
          className={`object-cover transition-all duration-[2500ms] ${visibleSections.has("jet-break") ? "opacity-30 scale-100" : "opacity-0 scale-105"}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </section>

      {/* What We Do Section */}
      <section className="pt-12 pb-24 sm:pt-16 sm:pb-32 px-6 sm:px-12" data-animate id="what-we-do">
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

      {/* Expertise Strip */}
      <section className="border-t border-b border-border py-16 px-6 sm:px-12" data-animate id="social-proof">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${visibleSections.has("social-proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-foreground/50 text-xs tracking-[0.2em] mb-10">EXPERTISE</p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-6 items-center mb-10">
            {[
              { icon: Plane, label: "Private aviation", href: "/industries/private-aviation-advertising" },
              { icon: Users, label: "Private clubs", href: "/industries/private-club-advertising" },
              { icon: Hotel, label: "Luxury hospitality", href: "/industries" },
              { icon: ShoppingBag, label: "Premium DTC", href: "/industries/luxury-goods-advertising" },
              { icon: TrendingUp, label: "Boutique wealth", href: "/industries/wealth-management-advertising" },
              { icon: Car, label: "Automotive", href: "/industries/luxury-automotive-advertising" }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                aria-label={item.label}
                className="flex flex-col items-center gap-4 group cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <item.icon className="w-8 h-8 text-accent/60 transition-all duration-300 group-hover:scale-110 group-hover:text-accent/90" strokeWidth={1} />
                <span className="text-foreground/60 text-xs tracking-wide text-center transition-colors duration-300 group-hover:text-foreground/80">{item.label}</span>
              </Link>
            ))}
          </div>
          
          <p className="text-foreground/40 text-sm italic">Private references available upon request.</p>
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
      <section className="py-24 sm:py-32 px-6 sm:px-12 relative overflow-hidden" data-animate id="selective">
        {/* Right-side image — occupies the right 50% only, entire container fades together */}
        <div
          className={`absolute inset-y-0 right-0 w-1/2 z-0 transition-all duration-[2000ms] ${visibleSections.has("selective") ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cabana%202.png-YEYKHMWiAP2fSIDLmrqBa4MjwRfFlg.jpeg"
            alt=""
            fill
            className="object-cover opacity-25"
            loading="lazy"
          />
          {/* Fade from left edge into section bg, and soften right edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-background/60" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("selective") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-4">THE BEST FIT</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">
              Selective <span className="italic">by design</span>
            </h2>
          </div>

          <div className={`max-w-2xl transition-all duration-1000 delay-200 ${visibleSections.has("selective") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Best Fit */}
            <div className="border border-border p-8 mb-12">
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

            <div className="border-t border-border pt-8">
              <p className="text-foreground/50 text-sm">
                <span className="text-foreground">Investment level is determined after engagement scope</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 sm:py-32 bg-card overflow-hidden" data-animate id="case-studies">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className={`flex items-end justify-between mb-16 transition-all duration-1000 ${visibleSections.has("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-foreground/50 text-xs tracking-[0.2em] mb-4">RESULTS</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">Case Studies</h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCaseStudyIndex((i) => Math.max(0, i - 1))}
                disabled={caseStudyIndex === 0}
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/50 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Previous case studies"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-foreground/30 text-xs tracking-widest tabular-nums">
                {caseStudyIndex + 1} — {Math.min(caseStudyIndex + visibleCount, caseStudies.length)} / {caseStudies.length}
              </span>
              <button
                onClick={() => setCaseStudyIndex((i) => Math.min(maxIndex, i + 1))}
                disabled={caseStudyIndex >= maxIndex}
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/50 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Next case studies"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding track — no horizontal padding so cards bleed to edge */}
        <div
          className="relative"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const delta = touchStartX.current - e.changedTouches[0].clientX
            if (delta > 50) setCaseStudyIndex((i) => Math.min(maxIndex, i + 1))
            else if (delta < -50) setCaseStudyIndex((i) => Math.max(0, i - 1))
            touchStartX.current = null
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(calc(-${caseStudyIndex} * (min(400px, 85vw) + 1.5rem) + ${caseStudyIndex === 0 ? "max(1.5rem, calc((100vw - 72rem) / 2))" : "max(1.5rem, calc((100vw - 72rem) / 2))"}))` }}
          >
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="flex-none group"
                style={{ width: "min(400px, 85vw)", marginRight: "1.5rem" }}
              >
                <div className="border border-border overflow-hidden hover:border-foreground/30 transition-colors duration-300 h-full">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.category}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-foreground/40 text-xs tracking-[0.2em] mb-6">{study.category}</p>
                    <p className="font-heading text-4xl sm:text-5xl text-accent mb-2">{study.metric}</p>
                    <p className="text-foreground text-sm font-medium mb-4">{study.label}</p>
                    <p className="text-foreground/50 text-sm leading-relaxed mb-6">{study.description}</p>
                    <Link href="/contact" className="text-foreground/60 text-xs tracking-[0.1em] hover:text-foreground transition-colors flex items-center gap-2 group/link">
                      REQUEST FULL CASE STUDY
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className={`flex justify-center gap-2 mt-10 px-6 transition-all duration-1000 ${visibleSections.has("case-studies") ? "opacity-100" : "opacity-0"}`}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCaseStudyIndex(i)}
              className={`h-px transition-all duration-300 ${i === caseStudyIndex ? "w-8 bg-foreground" : "w-4 bg-foreground/20"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Luxury Image Break */}
      <section className="h-64 sm:h-80 relative overflow-hidden" data-animate id="image-break">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yacht%202-JiOsv4grWBl4qmjC9dsByIpoAOMGie.png"
          alt=""
          fill
          className={`object-cover transition-all duration-[2500ms] ${visibleSections.has("image-break") ? "opacity-30 scale-100" : "opacity-0 scale-105"}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-background" />
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
      <section className="py-24 sm:py-32 px-6 sm:px-12 border-t border-border relative overflow-hidden" data-animate id="cta">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yacht.png-eZg3SkQdiov4FfwEKbytMDfT5j9kwd.jpeg"
            alt=""
            fill
            className={`object-cover transition-all duration-[2000ms] ${visibleSections.has("cta") ? "opacity-10 scale-100" : "opacity-0 scale-105"}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />
        </div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
