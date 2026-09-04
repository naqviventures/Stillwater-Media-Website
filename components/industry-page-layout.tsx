"use client"

import { Button } from "@/components/ui/button"
import { Navigation, Footer } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import type { IndustryContent } from "@/lib/industries"

export type { IndustryContent, SubItem, ProofEntry } from "@/lib/industries"

function useReveal() {
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
  return visible
}

export default function IndustryPageLayout({ content }: { content: IndustryContent }) {
  const visible = useReveal()
  const { hero, problem, architecture, dataLayer, measure, proof, builtFor, engagement, faq, cta, related } = content

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Block 1 — HERO */}
      <section
        className="min-h-[80vh] flex flex-col justify-center px-6 sm:px-12 pt-32 pb-20 relative"
        data-animate
        id="hero"
      >
        <div className="absolute inset-0 z-0">
          <Image src={hero.image} alt={hero.imageAlt} fill className="object-cover opacity-70" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>

        <div
          className={`max-w-6xl mx-auto w-full relative z-10 transition-all duration-1000 ${visible.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Visible breadcrumb — backs the BreadcrumbList schema */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs tracking-wide text-foreground/50">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <li>
                <Link href="/industries" className="hover:text-foreground transition-colors">
                  Industries
                </Link>
              </li>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <li aria-current="page" className="text-foreground/80">
                {content.breadcrumbName}
              </li>
            </ol>
          </nav>

          <p className="text-accent text-xs tracking-[0.3em] mb-6">{hero.eyebrow.toUpperCase()}</p>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-foreground font-normal tracking-tight text-balance">
            {hero.h1Line1}
            <br />
            <span className="italic">{hero.h1Line2}</span>
          </h1>

          <p className="text-foreground/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12 text-pretty">
            {hero.subhead}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/apply">
              <Button className="bg-foreground text-background hover:bg-accent hover:text-background text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300 group">
                APPLY
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border border-foreground/30 text-foreground hover:bg-foreground hover:text-background text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300">
                CONTACT
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Block 2 — THE PROBLEM */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="problem">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal max-w-3xl mb-16 transition-all duration-1000 ${visible.has("problem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {problem.h2}
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {problem.items.map((item, index) => (
              <div
                key={item.h3}
                className={`bg-background p-8 sm:p-10 transition-all duration-700 ${visible.has("problem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4 font-normal leading-tight">
                  {item.h3}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 3 — THE ARCHITECTURE */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="architecture">
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-16 transition-all duration-1000 ${visible.has("architecture") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal max-w-3xl mb-8">
              {architecture.h2}
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed max-w-3xl">{architecture.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {architecture.items.map((item, index) => (
              <div
                key={item.h3}
                className={`bg-background p-8 sm:p-10 transition-all duration-700 ${visible.has("architecture") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4 font-normal leading-tight">
                  {item.h3}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          {architecture.outro && (
            <p
              className={`text-foreground/70 text-base leading-relaxed max-w-3xl mt-10 transition-all duration-1000 ${visible.has("architecture") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              {architecture.outro}
            </p>
          )}
        </div>
      </section>

      {/* Block 4 — THE DATA LAYER */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="data-layer">
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-16 transition-all duration-1000 ${visible.has("data-layer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal max-w-3xl mb-8">
              {dataLayer.h2}
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed max-w-3xl">{dataLayer.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {dataLayer.items.map((item, index) => (
              <div
                key={item.h3}
                className={`bg-background p-8 sm:p-10 transition-all duration-700 ${visible.has("data-layer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4 font-normal leading-tight">
                  {item.h3}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 5 — WHAT WE MEASURE */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="measure">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal mb-8 transition-all duration-1000 ${visible.has("measure") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {measure.h2}
          </h2>
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${visible.has("measure") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {measure.leadParagraphs.map((p, i) => (
              <p key={i} className="text-foreground/70 text-base leading-relaxed">
                {p}
              </p>
            ))}
            <p className="text-foreground/70 text-base leading-relaxed">
              {measure.linkedParagraph.before}
              <Link href={measure.linkedParagraph.href} className="text-accent hover:underline">
                {measure.linkedParagraph.linkText}
              </Link>
              {measure.linkedParagraph.after}
            </p>
          </div>
        </div>
      </section>

      {/* Block 6 — PROOF (renders nothing when the array is empty) */}
      {proof.length > 0 && (
        <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="proof">
          <div className="max-w-4xl mx-auto">
            {proof.map((entry) => (
              <div
                key={entry.heading}
                className={`border border-border p-8 sm:p-10 transition-all duration-1000 ${visible.has("proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              >
                <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-6 font-normal leading-tight">
                  {entry.heading}
                </h2>
                <div className="space-y-6">
                  {entry.body.map((p, i) => (
                    <p key={i} className="text-foreground/70 text-base leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Block 7 — BUILT FOR */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="built-for">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${visible.has("built-for") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal mb-8">
              {builtFor.h2}
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed mb-10">{builtFor.body}</p>
            <div className="border-l-2 border-accent bg-card px-6 py-5">
              <p className="text-foreground/60 text-sm leading-relaxed italic">{builtFor.disqualifier}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 8 — ENGAGEMENT */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="engagement">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal mb-16 transition-all duration-1000 ${visible.has("engagement") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {engagement.h2}
          </h2>
          <div className="grid md:grid-cols-4 gap-px bg-border">
            {engagement.steps.map((step, index) => (
              <div
                key={step.period}
                className={`bg-background p-8 transition-all duration-700 ${visible.has("engagement") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <p className="text-accent text-xs tracking-[0.2em] mb-4">{step.period}</p>
                <p className="text-foreground/60 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 9 — FAQ */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="faq">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal mb-16 transition-all duration-1000 ${visible.has("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {faq.h2}
          </h2>
          <div className="divide-y divide-border border-t border-border">
            {faq.items.map((item) => (
              <div key={item.q} className="py-8">
                <h3 className="font-heading text-lg sm:text-xl text-foreground mb-4 font-normal leading-snug">
                  {item.q}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 10 — CTA */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="cta">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${visible.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal mb-6">
              {cta.h2Line1}
              <br />
              <span className="italic">{cta.h2Line2}</span>
            </h2>
            <p className="text-foreground/60 text-base max-w-xl mx-auto mb-10 leading-relaxed">{cta.body}</p>
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

      {/* Block 11 — RELATED */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="related">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal mb-16 transition-all duration-1000 ${visible.has("related") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {related.h2}
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {related.links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`bg-background p-8 group transition-all duration-700 hover:bg-card ${visible.has("related") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="font-heading text-lg text-foreground font-normal leading-snug group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
