"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { Navigation, Footer } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ArticleLayoutProps {
  title: string
  subtitle: string
  category: string
  image: string
  imageAlt: string
  children: React.ReactNode
}

export function ArticleLayout({ title, subtitle, category, image, imageAlt, children }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <p className="text-foreground/60 text-xl leading-relaxed">
              {subtitle}
            </p>
          </header>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none">
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
