"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation, Footer } from "@/components/navigation"
import { ArrowRight } from "lucide-react"
import { insightPosts, allCategories } from "@/lib/insights"

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? insightPosts
      : insightPosts.filter((p) => p.category === activeCategory)

  const sorted = filtered.sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-12 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/insights-editorial.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-accent text-xs tracking-[0.3em] mb-6">INSIGHTS</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-foreground font-normal tracking-tight">
            Strategic <span className="italic">perspectives</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
            Industry analysis, measurement methodologies, and strategic frameworks for premium brand media.
          </p>
        </div>
      </section>

      {/* Filter Tabs + Grid */}
      <section className="py-16 px-6 sm:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-[0.15em] border transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground/50 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
            <span className="ml-auto text-foreground/30 text-xs self-center tabular-nums">
              {sorted.length} {sorted.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {/* Posts Grid */}
          {sorted.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sorted.map((post) => (
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
                      <Link
                        href={`/insights/${post.slug}`}
                        className="hover:text-accent transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-foreground/50 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
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
          ) : (
            <div className="text-center py-24 text-foreground/30 text-sm tracking-widest">
              NO ARTICLES IN THIS CATEGORY YET
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  )
}
