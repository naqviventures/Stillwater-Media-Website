"use client"

import { Navigation, Footer } from "@/components/navigation"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Privacy Policy Content */}
      <main className="pt-32 pb-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent text-xs tracking-[0.3em] mb-6">LEGAL</p>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-foreground font-normal mb-8">
            Privacy <span className="italic">Policy</span>
          </h1>

          <p className="text-foreground/40 text-sm mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-12">
            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">Introduction</h2>
              <p className="text-foreground/60 leading-relaxed">
                NAQVI VENTURES LLC d.b.a. Stillwater Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">Information We Collect</h2>
              
              <h3 className="text-foreground text-sm tracking-[0.1em] mb-3 mt-6">PERSONAL INFORMATION</h3>
              <p className="text-foreground/60 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="text-foreground/60 space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Fill out contact forms on our website
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Request information about our services
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Subscribe to our communications
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Participate in surveys or promotions
                </li>
              </ul>

              <h3 className="text-foreground text-sm tracking-[0.1em] mb-3 mt-6">AUTOMATICALLY COLLECTED INFORMATION</h3>
              <p className="text-foreground/60 leading-relaxed mb-4">
                We may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="text-foreground/60 space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  IP address and location data
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Browser type and version
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Pages visited and time spent on our site
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Referring website addresses
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">How We Use Your Information</h2>
              <p className="text-foreground/60 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="text-foreground/60 space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Provide and maintain our services
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Respond to your inquiries and requests
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Send you marketing communications (with your consent)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Improve our website and services
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  Comply with legal obligations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">Information Sharing</h2>
              <p className="text-foreground/60 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="text-foreground/60 space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  With service providers who assist us in operating our website and conducting business
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  When required by law or to protect our rights
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  In connection with a business transfer or merger
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">Data Security</h2>
              <p className="text-foreground/60 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">Your Rights</h2>
              <p className="text-foreground/60 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="text-foreground/60 space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  The right to access your personal information
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  The right to correct inaccurate information
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  The right to delete your personal information
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">-</span>
                  The right to opt-out of marketing communications
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">Cookies and Tracking</h2>
              <p className="text-foreground/60 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">Changes to This Policy</h2>
              <p className="text-foreground/60 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground font-normal mb-4">Contact Us</h2>
              <p className="text-foreground/60 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="border border-border p-6">
                <p className="text-foreground font-medium mb-2">Stillwater Media</p>
                <p className="text-foreground/60 text-sm">Charlotte, NC</p>
                <p className="text-foreground/60 text-sm">Please contact us via our Contact Page.</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
