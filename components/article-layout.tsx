"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { Navigation, Footer } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ArticleLayoutProps {
  title: string
  subtitle?: string
  category: string
  image: string
  imageAlt: string
  imageCaption?: string
  author?: string
  date?: string
  readingTime?: string
  schemaMarkup?: Record<string, unknown>
  children: React.ReactNode
}

export function ArticleLayout({ 
  title, 
  subtitle, 
  category, 
  image, 
  imageAlt, 
  imageCaption,
  author,
  date,
  readingTime,
  schemaMarkup,
  children 
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      )}
      <Navigation />

      <article className="pt-32 pb-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/insights" className="text-foreground/50 hover:text-foreground transition-colors text-sm flex items-center gap-2 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>
          </nav>

          {/* Hero Image */}
          <div className="mb-8 overflow-hidden border border-border">
            <Image
              src={image || "/placeholder.svg"}
              alt={imageAlt}
              width={800}
              height={400}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-secondary text-foreground px-4 py-1 text-xs tracking-[0.15em]">{category}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-normal leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-foreground/60 text-xl leading-relaxed mb-6">
                {subtitle}
              </p>
            )}
            {(author || date || readingTime) && (
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50">
                {author && <span>{author}</span>}
                {author && (date || readingTime) && <span>•</span>}
                {date && <span>{date}</span>}
                {date && readingTime && <span>•</span>}
                {readingTime && <span>{readingTime}</span>}
              </div>
            )}
          </header>
          
          {imageCaption && (
            <p className="text-sm text-foreground/50 italic -mt-4 mb-8">{imageCaption}</p>
          )}

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-normal prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-foreground/70 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-foreground/70 prose-li:leading-relaxed prose-ul:my-6 prose-ol:my-6 prose-ul:space-y-2 prose-ol:space-y-3 prose-strong:text-foreground prose-a:text-foreground prose-a:underline hover:prose-a:no-underline prose-hr:my-8 prose-hr:border-border prose-table:my-6 prose-th:text-left prose-th:py-3 prose-th:px-4 prose-td:py-3 prose-td:px-4 prose-tr:border-b prose-tr:border-border">
            {children}
          </div>

          {/* Call to Action */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="font-heading text-2xl text-foreground font-normal mb-4">
              Ready to discuss <span className="italic">your strategy?</span>
            </h3>
            <p className="text-foreground/60 mb-6">
              Discover how our approach can transform your brand's media performance.
            </p>
            <Link href="/apply">
              <Button className="bg-foreground text-background hover:bg-accent hover:text-background text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300 group">
                APPLY FOR PARTNERSHIP
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
