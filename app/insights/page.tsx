"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation, Footer } from "@/components/navigation"
import { ArrowRight } from "lucide-react"

export default function Insights() {
  const blogPosts = [
    {
      slug: "programmatic-advertising-revolution-2024",
      title: "The Programmatic Advertising Revolution: How AI is Transforming Digital Media Buying",
      excerpt:
        "Discover how artificial intelligence and machine learning are reshaping programmatic advertising, delivering unprecedented targeting precision and ROI optimization for modern marketers.",
      image: "/programmatic-advertising-ai-revolution-dashboard.jpg",
      category: "Programmatic",
    },
    {
      slug: "connected-tv-advertising-guide",
      title: "Connected TV Advertising: The Complete Guide to CTV Campaign Success",
      excerpt:
        "Master the art of Connected TV advertising with proven strategies for audience targeting, creative optimization, and performance measurement across streaming platforms.",
      image: "/connected-tv-streaming-devices-and-smart-tv-interf.jpg",
      category: "CTV",
    },
    {
      slug: "billboard-advertising-digital-age",
      title: "Billboard Advertising in the Digital Age: Integrating OOH with Programmatic Campaigns",
      excerpt:
        "Learn how traditional billboard advertising is evolving with digital integration, programmatic buying, and advanced attribution models for maximum impact.",
      image: "/digital-billboard-advertising-with-programmatic.jpg",
      category: "OOH",
    },
    {
      slug: "programmatic-media-buying-charlotte-nc",
      title: "Programmatic Media Buying in Charlotte, NC: Local Market Insights and Opportunities",
      excerpt:
        "Explore the unique programmatic advertising landscape in Charlotte, North Carolina, including local audience behaviors, market trends, and growth opportunities.",
      image: "/charlotte-nc-skyline-with-digital-advertising-tech.jpg",
      category: "Local",
    },
    {
      slug: "real-time-bidding-optimization-strategies",
      title: "Real-Time Bidding Optimization: Advanced Strategies for Programmatic Success",
      excerpt:
        "Unlock the power of real-time bidding with sophisticated optimization techniques, bid management strategies, and performance enhancement tactics.",
      image: "/real-time-bidding-optimization-dashboard-with-data.jpg",
      category: "Programmatic",
    },
    {
      slug: "precision-lead-generation-strategies",
      title: "Precision Lead Generation: Advanced Strategies for Real-Time Prospect Identification",
      excerpt:
        "Master the art of precision lead generation with cutting-edge techniques for identifying, qualifying, and converting high-value prospects in real-time.",
      image: "/precision-lead-generation-targeting-dashboard.jpg",
      category: "Lead Generation",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-xs tracking-[0.3em] mb-6">INSIGHTS</p>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-foreground font-normal tracking-tight">
            Strategic <span className="italic">perspectives</span>
          </h1>
          
          <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
            Industry analysis, measurement methodologies, and strategic frameworks for premium brand media.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 sm:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-border hover:border-foreground/30 transition-all duration-300"
              >
                <div className="h-48 bg-secondary relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 text-xs tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-foreground text-xl font-normal mb-3 leading-tight">
                    <Link href={`/insights/${post.slug}`} className="hover:text-accent transition-colors duration-300">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-foreground/50 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="text-foreground/60 text-xs tracking-[0.1em] hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2 group/link"
                  >
                    READ MORE
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
