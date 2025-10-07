"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Insights() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    {
      slug: "real-time-lead-finder-technology",
      title: "Real-Time Lead Finder Technology: Revolutionizing B2B Sales Prospecting",
      excerpt:
        "Discover how advanced lead finder technology is transforming B2B sales with instant prospect identification, data verification, and automated outreach systems.",
      image: "/real-time-lead-finder-technology-dashboard.jpg",
      category: "Lead Generation",
    },
    {
      slug: "charlotte-nc-lead-generation-market",
      title: "Charlotte, NC Lead Generation Market: Opportunities and Best Practices for Local Businesses",
      excerpt:
        "Navigate the Charlotte lead generation landscape with insights into local market dynamics, industry trends, and proven strategies for business growth.",
      image: "/charlotte-nc-business-district-lead-generation.jpg",
      category: "Local",
    },
    {
      slug: "data-driven-lead-qualification",
      title: "Data-Driven Lead Qualification: Using AI and Analytics for Better Prospect Scoring",
      excerpt:
        "Transform your lead qualification process with AI-powered scoring models, predictive analytics, and automated prospect evaluation systems.",
      image: "/data-driven-lead-qualification-analytics.jpg",
      category: "Lead Generation",
    },
    {
      slug: "automated-lead-nurturing-systems",
      title: "Automated Lead Nurturing Systems: Building Scalable Prospect Engagement Workflows",
      excerpt:
        "Build sophisticated lead nurturing systems that automatically engage prospects, deliver personalized content, and drive conversions at scale.",
      image: "/automated-lead-nurturing-workflow-system.jpg",
      category: "Lead Generation",
    },
  ]

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
      <section className="px-4 sm:px-6 py-8 sm:py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading text-black leading-tight font-bold mb-6 sm:mb-8">
          INSIGHTS
        </h1>
        <p className="text-black text-lg sm:text-xl leading-relaxed max-w-3xl mb-12">
          Strategic insights, industry trends, and proven methodologies for programmatic media buying and precision lead
          generation.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 pb-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-gray-200"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-3 py-1 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-black text-xl font-bold mb-3 leading-tight">
                  <Link href={`/insights/${post.slug}`} className="hover:text-gray-700 transition-colors duration-300">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/insights/${post.slug}`}
                  className="text-black text-sm font-medium hover:text-gray-700 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266-.057-1.644-.069-4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.617 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
