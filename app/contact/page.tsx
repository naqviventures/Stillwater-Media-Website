"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation, Footer } from "@/components/navigation"
import { useEffect, useState } from "react"
import { sendContactEmail } from "@/lib/email"
import { ArrowRight, MapPin, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    const result = await sendContactEmail(data)

    if (result.success) {
      setSubmitMessage("Thank you. We'll be in touch within 48 hours.")
      ;(e.target as HTMLFormElement).reset()
    } else {
      setSubmitMessage("Sorry, there was an error. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-12" data-animate id="hero">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-accent text-xs tracking-[0.3em] mb-6">CONTACT</p>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-foreground font-normal tracking-tight">
              Let's discuss<br />
              <span className="italic">your goals</span>
            </h1>
            
            <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
              For general inquiries, use the form below. For partnership applications, please visit our application page.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 sm:px-12 border-y border-border" data-animate id="info">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${visibleSections.has("info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="border border-border p-8">
              <MapPin className="w-5 h-5 text-accent mb-4" />
              <h3 className="text-foreground text-sm tracking-[0.1em] mb-2">LOCATION</h3>
              <p className="text-foreground/60 text-sm">Charlotte, NC</p>
              <p className="text-foreground/40 text-sm">Serving clients nationwide</p>
            </div>
            
            <div className="border border-border p-8">
              <Mail className="w-5 h-5 text-accent mb-4" />
              <h3 className="text-foreground text-sm tracking-[0.1em] mb-2">INQUIRIES</h3>
              <p className="text-foreground/60 text-sm">Use the form below</p>
              <p className="text-foreground/40 text-sm">or apply for partnership</p>
            </div>
            
            <div className="border border-border p-8">
              <Clock className="w-5 h-5 text-accent mb-4" />
              <h3 className="text-foreground text-sm tracking-[0.1em] mb-2">RESPONSE TIME</h3>
              <p className="text-foreground/60 text-sm">Within 48 hours</p>
              <p className="text-foreground/40 text-sm">Monday - Friday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 sm:px-12" data-animate id="form">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div className={`transition-all duration-1000 ${visibleSections.has("form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-heading text-3xl sm:text-4xl text-foreground font-normal mb-6">
                General <span className="italic">inquiries</span>
              </h2>
              
              <p className="text-foreground/60 text-base leading-relaxed mb-8">
                For questions about our services, media partnerships, or speaking engagements, use this form. We respond to all inquiries within 48 hours during business days.
              </p>
              
              <div className="border-t border-border pt-8 mb-8">
                <h3 className="text-foreground text-sm tracking-[0.1em] mb-4">LOOKING TO WORK WITH US?</h3>
                <p className="text-foreground/50 text-sm mb-4">
                  If you're interested in a media partnership, we recommend starting with our application process.
                </p>
                <a href="/apply" className="text-accent text-sm tracking-[0.1em] hover:text-foreground transition-colors flex items-center gap-2 group">
                  APPLY FOR PARTNERSHIP
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={`transition-all duration-1000 delay-200 ${visibleSections.has("form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground/60 text-xs tracking-wide mb-2">FIRST NAME *</label>
                    <Input
                      name="name"
                      required
                      className="bg-transparent border-border rounded-none text-foreground placeholder:text-foreground/30 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground/60 text-xs tracking-wide mb-2">LAST NAME</label>
                    <Input
                      name="lastName"
                      className="bg-transparent border-border rounded-none text-foreground placeholder:text-foreground/30 focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-foreground/60 text-xs tracking-wide mb-2">EMAIL *</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    className="bg-transparent border-border rounded-none text-foreground placeholder:text-foreground/30 focus:border-accent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground/60 text-xs tracking-wide mb-2">COMPANY</label>
                  <Input
                    name="company"
                    className="bg-transparent border-border rounded-none text-foreground placeholder:text-foreground/30 focus:border-accent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground/60 text-xs tracking-wide mb-2">INQUIRY TYPE</label>
                  <select
                    name="service"
                    className="w-full bg-transparent border border-border rounded-none px-3 py-2 text-foreground text-sm focus:border-accent transition-colors"
                  >
                    <option value="" className="bg-background">Select a topic</option>
                    <option value="general" className="bg-background">General Inquiry</option>
                    <option value="media" className="bg-background">Media Partnership</option>
                    <option value="speaking" className="bg-background">Speaking / Press</option>
                    <option value="careers" className="bg-background">Careers</option>
                    <option value="other" className="bg-background">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-foreground/60 text-xs tracking-wide mb-2">MESSAGE</label>
                  <Textarea
                    name="message"
                    className="bg-transparent border-border rounded-none text-foreground placeholder:text-foreground/30 focus:border-accent transition-colors min-h-[120px]"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foreground text-background hover:bg-accent hover:text-background text-xs tracking-[0.15em] px-8 py-4 rounded-none transition-all duration-300 w-full sm:w-auto"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
                
                {submitMessage && (
                  <p className={`text-sm ${submitMessage.includes("Thank you") ? "text-accent" : "text-red-500"}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
