"use client"

import { Button } from "@/components/ui/button"
import { Navigation, Footer } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"

/* -------------------------------------------------------------------------- */
/*  Hub copy — edit here without touching JSX.                                */
/* -------------------------------------------------------------------------- */

const hub = {
  hero: {
    eyebrow: "Industries",
    h1Line1: "Industries",
    h1Line2: "where the buyer takes their time",
    image: "/images/industries-hub.webp",
    imageAlt:
      "An abstract composition of dark glass and stone panes at blue hour with a single warm gold light refracting through",
  },
  intro: [
    "Stillwater Media works in categories where the customer is worth a great deal and takes a long time to decide. That combination changes almost everything about how media should be bought — how wide you target, how long you stay present, and which number you are allowed to call success.",
    "The architecture is not the same from one category to the next. A private aviation buyer and a private club member are both affluent, and almost nothing else about reaching them is alike. These pages set out how we build for each.",
  ],
  cards: [
    {
      name: "Private Aviation",
      href: "/industries/private-aviation-advertising",
      description:
        "A buyer pool small enough to exhaust, and a decision cycle that outlasts most campaigns.",
    },
    {
      name: "Wealth Management",
      href: "/industries/wealth-management-advertising",
      description:
        "Where lead volume is a vanity metric and the only number that matters is cost per closed client.",
    },
    {
      name: "Luxury Real Estate",
      href: "/industries/luxury-real-estate-advertising",
      description:
        "Buyers who are not searching your listings yet, and often are not in your market at all.",
    },
    {
      name: "Luxury Automotive",
      href: "/industries/luxury-automotive-advertising",
      description:
        "Three tiers of budget buying the same shopper, and a conversion that happens offline.",
    },
    {
      name: "Private Clubs & Golf",
      href: "/industries/private-club-advertising",
      description:
        "A few thousand households inside one radius, and a product that discretion is part of.",
    },
    {
      name: "Luxury Hospitality",
      href: "/industries/luxury-hospitality-advertising",
      description:
        "Rooms that sell themselves through an OTA, and a direct channel that keeps paying commission for its own guests.",
    },
    {
      name: "Luxury Goods & Apparel",
      href: "/industries/luxury-goods-advertising",
      description:
        "Growing direct revenue without reaching for the one lever that damages a premium price.",
    },
  ],
}

export default function IndustriesHub() {
  const [visible, setVisible] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(entry.target.id))
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

      {/* Hero */}
      <section
        className="min-h-[70vh] flex flex-col justify-center px-6 sm:px-12 pt-32 pb-20 relative"
        data-animate
        id="hero"
      >
        <div className="absolute inset-0 z-0">
          <Image src={hub.hero.image} alt={hub.hero.imageAlt} fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div
          className={`max-w-6xl mx-auto w-full relative z-10 transition-all duration-1000 ${visible.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs tracking-wide text-foreground/50">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <li aria-current="page" className="text-foreground/80">
                Industries
              </li>
            </ol>
          </nav>

          <p className="text-accent text-xs tracking-[0.3em] mb-6">{hub.hero.eyebrow.toUpperCase()}</p>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-foreground font-normal tracking-tight text-balance">
            {hub.hero.h1Line1}
            <br />
            <span className="italic">{hub.hero.h1Line2}</span>
          </h1>

          <div className="max-w-2xl space-y-6">
            {hub.intro.map((p, i) => (
              <p key={i} className="text-foreground/70 text-lg sm:text-xl leading-relaxed text-pretty">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Card grid */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="grid">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {hub.cards.map((card, index) => (
              <Link
                key={card.href}
                href={card.href}
                className={`bg-background p-8 sm:p-10 group transition-all duration-700 hover:bg-card ${visible.has("grid") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="font-heading text-xl sm:text-2xl text-foreground font-normal leading-tight group-hover:text-accent transition-colors">
                    {card.name}
                  </h2>
                  <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-1.5 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="cta">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${visible.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal mb-6">
              Ready to discuss
              <br />
              <span className="italic">your category?</span>
            </h2>
            <p className="text-foreground/60 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              We work with a limited number of brands each quarter. If there's a potential fit, we'll schedule a brief
              discovery call to explore how we might help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apply">
                <Button className="bg-foreground text-background hover:bg-accent hover:text-background text-xs tracking-[0.15em] px-10 py-5 rounded-none transition-all duration-300 group">
                  APPLY FOR PARTNERSHIP
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent border border-foreground/30 text-foreground hover:bg-foreground hover:text-background text-xs tracking-[0.15em] px-10 py-5 rounded-none transition-all duration-300">
                  CONTACT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
