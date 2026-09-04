"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { industries } from "@/lib/industries"

const navLinks = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
]

// Menu order differs from the shared array (Hospitality before Goods), so we
// resolve slug + label from the single source of truth in the menu's own order.
const industryMenuOrder = [
  "private-aviation-advertising",
  "wealth-management-advertising",
  "luxury-real-estate-advertising",
  "luxury-automotive-advertising",
  "private-club-advertising",
  "luxury-hospitality-advertising",
  "luxury-goods-advertising",
]

const industryLinks = industryMenuOrder.map((slug) => {
  const industry = industries.find((i) => i.slug === slug)!
  return { href: `/industries/${industry.slug}`, label: industry.label }
})

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Sync React state with the theme already applied by the inline script
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    
    setTheme(initialTheme)
    // Theme class is already applied by inline script in layout.tsx, just ensure consistency
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 sm:px-12 py-5 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/stillwater-logo.png"
            alt="Stillwater Media"
            width={36}
            height={36}
            className="w-9 h-9 transition-opacity duration-300 group-hover:opacity-80 dark:invert"
          />
          <span className="text-foreground text-sm tracking-[0.2em] font-medium">STILLWATER MEDIA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) =>
            item.label === "Industries" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
                onFocus={() => setIndustriesOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setIndustriesOpen(false)
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-foreground/70 text-sm tracking-wide hover:text-foreground transition-colors duration-300"
                  aria-haspopup="true"
                  aria-expanded={industriesOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                {/* Hover dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                    industriesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div
                    className={`w-64 bg-background/95 backdrop-blur-md border border-border shadow-xl py-2 transition-all duration-300 ${
                      industriesOpen ? "translate-y-0" : "-translate-y-2"
                    }`}
                  >
                    {industryLinks.map((sub, index) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-5 py-2.5 text-foreground/70 text-sm tracking-wide hover:text-foreground hover:bg-foreground/5 transition-all duration-300 ${
                          industriesOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                        }`}
                        style={{ transitionDelay: industriesOpen ? `${index * 60}ms` : "0ms" }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/70 text-sm tracking-wide hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link href="/apply">
            <Button className="bg-transparent border border-foreground/30 text-foreground hover:bg-foreground hover:text-background text-xs tracking-[0.15em] px-6 py-2 rounded-none transition-all duration-300">
              APPLY
            </Button>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-px bg-foreground transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-px bg-foreground transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-px bg-foreground transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/70 text-sm tracking-wide hover:text-foreground transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
            <Button className="bg-transparent border border-foreground/30 text-foreground hover:bg-foreground hover:text-background text-xs tracking-[0.15em] px-6 py-2 rounded-none transition-all duration-300 w-full mt-2">
              APPLY
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <Image
                src="/stillwater-logo.png"
                alt="Stillwater Media"
                width={32}
                height={32}
                className="w-8 h-8 transition-opacity duration-300 group-hover:opacity-80 dark:invert"
              />
              <span className="text-foreground/90 text-sm tracking-[0.2em] font-medium">STILLWATER MEDIA</span>
            </Link>
            <p className="text-foreground/40 text-sm">Charlotte, NC — Serving clients nationwide and internationally</p>
          </div>
          
          <nav className="flex flex-wrap gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/50 text-sm hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="text-foreground/50 text-sm hover:text-foreground transition-colors duration-300"
            >
              Apply
            </Link>
            <Link
              href="/privacy-policy"
              className="text-foreground/50 text-sm hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </Link>
          </nav>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-foreground/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Stillwater Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
