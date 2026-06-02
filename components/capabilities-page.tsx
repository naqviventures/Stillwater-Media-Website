"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Navigation, Footer } from "@/components/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Shield, Target, BarChart3, Eye, Lock } from "lucide-react"
import Image from "next/image"

export default function CapabilitiesPage() {
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
      <section className="min-h-[70vh] flex flex-col justify-center px-6 sm:px-12 pt-32 pb-20 relative" data-animate id="hero">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/capabilities-hero.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        
        <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <p className="text-accent text-xs tracking-[0.3em] mb-6">CAPABILITIES</p>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-foreground font-normal tracking-tight">
            Premium inventory.<br />
            <span className="italic">Disciplined execution.</span>
          </h1>
          
          <p className="text-foreground/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12">
            We deploy media across brand-safe environments with precision targeting, rigorous frequency management, and measurement frameworks designed for high-consideration purchases.
          </p>
        </div>
      </section>

      {/* Private Inventory Access */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="private-inventory">
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${visibleSections.has("private-inventory") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-5 w-5 text-accent" />
                <p className="text-foreground/50 text-xs tracking-[0.2em]">PRIVATE ACCESS</p>
              </div>
              
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] mb-6 text-foreground font-normal">
                Inventory reserved for<br /><span className="italic">premium brands</span>
              </h2>
              
              <p className="text-foreground/70 text-base leading-relaxed mb-8">
                We maintain private marketplace deals and direct relationships with premium publishers. This inventory is not available through self-serve platforms or general media buying.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Direct PMP access to Disney+, Netflix, Prime Video",
                  "Premium CTV inventory with guaranteed brand safety",
                  "First-party data partnerships with luxury publishers",
                  "Exclusivity arrangements for select categories",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-foreground/60 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <Link href="/apply">
                <Button className="bg-foreground text-background hover:bg-accent hover:text-background text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300 group">
                  REQUEST ACCESS
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-card border border-border overflow-hidden">
                <Image
                  src="/images/premium-ctv-living.jpg"
                  alt="Premium CTV inventory"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="capabilities">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("capabilities") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-6">WHAT WE DO</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal max-w-3xl">
              Built for brands where<br /><span className="italic">every impression matters</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                icon: Shield,
                title: "Brand-Safe Premium Inventory",
                description: "We only run on environments that reflect your brand standards. No MFA sites, no questionable adjacencies, no exceptions. Every placement is reviewed and verified.",
              },
              {
                icon: Target,
                title: "Affluent Targeting & First-Party Data",
                description: "Access to high-net-worth audience segments, luxury intent signals, and first-party data partnerships with premium publishers. We reach the 10% you actually want.",
              },
              {
                icon: Eye,
                title: "Frequency & Creative Discipline",
                description: "Strict frequency caps prevent wear-out. Creative sequencing tells your story. We optimize for attention, not just reach. Your brand never becomes wallpaper.",
              },
              {
                icon: BarChart3,
                title: "Measurement That Matters",
                description: "Incrementality testing, MMM integration, and MTA options. We measure true lift, not just attributed conversions. Know exactly what your media spend is producing.",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className={`bg-background p-10 sm:p-12 transition-all duration-700 ${visibleSections.has("capabilities") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <capability.icon className="h-6 w-6 text-accent mb-6" />
                <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4 font-normal">
                  {capability.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="results">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("results") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-6">RESULTS</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal">
              Outcomes for <span className="italic">premium brands</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "LUXURY HOME GOODS",
                headline: "68% lower CPA through premium CTV",
                description: "A luxury furniture brand struggling with Meta fatigue needed a scalable upper-funnel channel. We deployed premium CTV with strict frequency caps and measured incremental lift through holdout testing.",
                metrics: [
                  { label: "CPA Reduction", value: "68%" },
                  { label: "Incremental ROAS", value: "4.2x" },
                  { label: "Brand Search Lift", value: "+127%" },
                ],
              },
              {
                category: "HIGH-END PROFESSIONAL SERVICES",
                headline: "3.8x MER on $85K monthly spend",
                description: "A wealth management firm needed to reach HNW prospects without compromising brand positioning. We combined first-party data with premium publisher inventory and implemented incrementality measurement.",
                metrics: [
                  { label: "Marketing Efficiency Ratio", value: "3.8x" },
                  { label: "Cost Per Qualified Lead", value: "-54%" },
                  { label: "Pipeline Generated", value: "$12M" },
                ],
              },
            ].map((study, index) => (
              <div
                key={index}
                className={`border border-border p-8 sm:p-10 transition-all duration-700 hover:border-foreground/30 ${visibleSections.has("results") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <p className="text-accent text-xs tracking-[0.2em] mb-4">{study.category}</p>
                <h3 className="font-heading text-2xl sm:text-3xl text-foreground mb-4 font-normal leading-tight">
                  {study.headline}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="font-heading text-2xl text-foreground mb-1">{metric.value}</p>
                      <p className="text-foreground/40 text-xs">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${visibleSections.has("results") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-foreground/40 text-sm mb-6">
              Detailed case studies available under NDA for qualified prospects.
            </p>
            <Link href="/apply">
              <Button className="bg-transparent border border-foreground/30 text-foreground hover:bg-foreground hover:text-background text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300">
                REQUEST FULL CASE STUDIES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="channels">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has("channels") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] mb-6">CHANNELS</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal">
              Where we deploy
            </h2>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${visibleSections.has("channels") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {[
              { name: "Premium CTV", detail: "Disney+, Netflix, Prime Video" },
              { name: "Streaming Audio", detail: "Spotify, Pandora Premium" },
              { name: "Digital Out-of-Home", detail: "Affluent location targeting" },
              { name: "Programmatic Display", detail: "Premium publisher direct" },
              { name: "YouTube Select", detail: "Brand-safe lineups only" },
              { name: "Podcasts", detail: "Host-read & programmatic" },
              { name: "Native", detail: "Premium editorial placements" },
              { name: "Social", detail: "Paid amplification" },
            ].map((channel, index) => (
              <div
                key={index}
                className="border border-border p-6 hover:border-foreground/30 transition-all duration-300"
              >
                <p className="text-foreground text-sm font-medium mb-1">{channel.name}</p>
                <p className="text-foreground/40 text-xs">{channel.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 px-6 sm:px-12" data-animate id="cta">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground font-normal mb-6">
              Ready to discuss<br /><span className="italic">your media strategy?</span>
            </h2>
            
            <p className="text-foreground/60 text-base max-w-xl mx-auto mb-10">
              We work with a limited number of brands each quarter. If there's a potential fit, we'll schedule a brief discovery call to explore how we might help.
            </p>

            <Link href="/apply">
              <Button className="bg-foreground text-background hover:bg-accent hover:text-background text-xs tracking-[0.15em] px-10 py-5 rounded-none transition-all duration-300 group">
                APPLY FOR PARTNERSHIP
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
