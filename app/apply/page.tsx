"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation, Footer } from "@/components/navigation"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import Image from "next/image"

const STEPS = [
  { id: 1, title: "Contact" },
  { id: 2, title: "Business" },
  { id: 3, title: "Metrics" },
  { id: 4, title: "Goals" },
]

const INDUSTRIES = [
  "Luxury Goods & Fashion",
  "Financial Services",
  "Real Estate",
  "Healthcare & Wellness",
  "Professional Services",
  "Technology / SaaS",
  "Automotive",
  "Travel & Hospitality",
  "Education",
  "Consumer Goods",
  "Other",
]

const SPEND_RANGES = [
  "$10,000 - $25,000/month",
  "$25,000 - $50,000/month",
  "$50,000 - $100,000/month",
  "$100,000 - $250,000/month",
  "$250,000+/month",
]

const PRIMARY_GOALS = [
  "Brand Awareness",
  "Demand Generation",
  "Customer Acquisition",
]

const CURRENT_CHANNELS = [
  "Paid Search (Google/Bing)",
  "Paid Social (Meta/LinkedIn)",
  "Programmatic Display",
  "Connected TV (CTV)",
  "Digital Out-of-Home",
  "Traditional TV/Radio",
  "Direct Mail",
  "None currently",
]

const CAC_RANGES = [
  "Under $50",
  "$50 - $150",
  "$150 - $500",
  "$500 - $1,500",
  "$1,500 - $5,000",
  "$5,000+",
  "Not sure",
]

const ROAS_RANGES = [
  "Under 2x",
  "2x - 4x",
  "4x - 8x",
  "8x - 15x",
  "15x+",
  "Not sure / Not applicable",
]

const AOV_RANGES = [
  "Under $100",
  "$100 - $500",
  "$500 - $2,000",
  "$2,000 - $10,000",
  "$10,000 - $50,000",
  "$50,000+",
]

const LTV_RANGES = [
  "Under $500",
  "$500 - $2,000",
  "$2,000 - $10,000",
  "$10,000 - $50,000",
  "$50,000 - $250,000",
  "$250,000+",
  "Not sure",
]

const SALES_CYCLES = [
  "Same day / Impulse",
  "1-7 days",
  "1-4 weeks",
  "1-3 months",
  "3-6 months",
  "6+ months",
]

const TIMELINES = [
  "Immediately",
  "Within 30 days",
  "Within 60 days",
  "Within 90 days",
  "Planning for next quarter",
  "Just exploring",
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    industry: "",
    monthlySpend: "",
    primaryGoal: "",
    currentChannels: [] as string[],
    cacRange: "",
    roasRange: "",
    aovRange: "",
    ltvRange: "",
    salesCycle: "",
    timeline: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (channel: string) => {
    setFormData((prev) => ({
      ...prev,
      currentChannels: prev.currentChannels.includes(channel)
        ? prev.currentChannels.filter((c) => c !== channel)
        : [...prev.currentChannels, channel],
    }))
  }

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.company
      case 2:
        return formData.industry && formData.monthlySpend
      case 3:
        return formData.cacRange || formData.aovRange
      case 4:
        return formData.primaryGoal && formData.timeline
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/partnership-handshake.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      </div>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-6 sm:px-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          
          {/* Confirmation State */}
          {isSubmitted ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 border border-[#c9a962] rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-8 h-8 text-[#c9a962]" />
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl mb-6">Application Received</h1>
              <p className="text-foreground/60 text-lg leading-relaxed max-w-md mx-auto mb-12">
                If we can help, we'll invite you to a short fit call within 48 hours.
              </p>
              <Link href="/">
                <Button className="bg-transparent border border-foreground/30 text-foreground hover:bg-foreground hover:text-background text-xs tracking-[0.15em] px-8 py-3 rounded-none transition-all duration-300">
                  RETURN HOME
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="font-heading text-4xl sm:text-5xl mb-6 tracking-tight">
                  Apply for Partnership
                </h1>
                <p className="text-foreground/60 text-lg leading-relaxed max-w-lg mx-auto">
                  We work with a limited roster of premium brands. If there's a fit, we'll respond within 48 hours.
                </p>
              </div>

              {/* Progress Stepper */}
              <div className="flex items-center justify-between mb-12 px-4">
                {STEPS.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          currentStep > step.id
                            ? "bg-[#c9a962] text-background"
                            : currentStep === step.id
                            ? "border-2 border-[#c9a962] text-[#c9a962]"
                            : "border border-border text-foreground/40"
                        }`}
                      >
                        {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                      </div>
                      <span
                        className={`mt-2 text-xs tracking-wide hidden sm:block ${
                          currentStep >= step.id ? "text-foreground/80" : "text-foreground/40"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div
                        className={`w-12 sm:w-20 h-px mx-2 sm:mx-4 transition-colors duration-300 ${
                          currentStep > step.id ? "bg-[#c9a962]" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Contact */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="bg-card border-border text-foreground placeholder:text-foreground/30 rounded-none h-12 focus:border-[#c9a962] focus:ring-[#c9a962]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        className="bg-card border-border text-foreground placeholder:text-foreground/30 rounded-none h-12 focus:border-[#c9a962] focus:ring-[#c9a962]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Company *</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company name"
                        className="bg-card border-border text-foreground placeholder:text-foreground/30 rounded-none h-12 focus:border-[#c9a962] focus:ring-[#c9a962]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Website</label>
                      <Input
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://yourcompany.com"
                        className="bg-card border-border text-foreground placeholder:text-foreground/30 rounded-none h-12 focus:border-[#c9a962] focus:ring-[#c9a962]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Business */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Industry *</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full bg-card border border-border text-foreground rounded-none h-12 px-4 focus:border-[#c9a962] focus:ring-[#c9a962] focus:outline-none appearance-none cursor-pointer"
                        required
                      >
                        <option value="" className="bg-card">Select your industry</option>
                        {INDUSTRIES.map((industry) => (
                          <option key={industry} value={industry} className="bg-card">
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Monthly Media Spend *</label>
                      <select
                        name="monthlySpend"
                        value={formData.monthlySpend}
                        onChange={handleInputChange}
                        className="w-full bg-card border border-border text-foreground rounded-none h-12 px-4 focus:border-[#c9a962] focus:ring-[#c9a962] focus:outline-none appearance-none cursor-pointer"
                        required
                      >
                        <option value="" className="bg-card">Select spend range</option>
                        {SPEND_RANGES.map((range) => (
                          <option key={range} value={range} className="bg-card">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-3">Current Channels</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CURRENT_CHANNELS.map((channel) => (
                          <label
                            key={channel}
                            className={`flex items-center gap-3 p-3 border cursor-pointer transition-all duration-200 ${
                              formData.currentChannels.includes(channel)
                                ? "border-[#c9a962] bg-[#c9a962]/10"
                                : "border-border hover:border-foreground/30"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.currentChannels.includes(channel)}
                              onChange={() => handleCheckboxChange(channel)}
                              className="sr-only"
                            />
                            <div
                              className={`w-4 h-4 border flex items-center justify-center ${
                                formData.currentChannels.includes(channel)
                                  ? "border-[#c9a962] bg-[#c9a962]"
                                  : "border-foreground/30"
                              }`}
                            >
                              {formData.currentChannels.includes(channel) && (
                                <Check className="w-3 h-3 text-background" />
                              )}
                            </div>
                            <span className="text-sm text-foreground/80">{channel}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Metrics */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Customer Acquisition Cost (CAC)</label>
                      <select
                        name="cacRange"
                        value={formData.cacRange}
                        onChange={handleInputChange}
                        className="w-full bg-card border border-border text-foreground rounded-none h-12 px-4 focus:border-[#c9a962] focus:ring-[#c9a962] focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-card">Select CAC range</option>
                        {CAC_RANGES.map((range) => (
                          <option key={range} value={range} className="bg-card">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">ROAS / MER Target</label>
                      <select
                        name="roasRange"
                        value={formData.roasRange}
                        onChange={handleInputChange}
                        className="w-full bg-card border border-border text-foreground rounded-none h-12 px-4 focus:border-[#c9a962] focus:ring-[#c9a962] focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-card">Select ROAS/MER range</option>
                        {ROAS_RANGES.map((range) => (
                          <option key={range} value={range} className="bg-card">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Average Order Value (AOV)</label>
                      <select
                        name="aovRange"
                        value={formData.aovRange}
                        onChange={handleInputChange}
                        className="w-full bg-card border border-border text-foreground rounded-none h-12 px-4 focus:border-[#c9a962] focus:ring-[#c9a962] focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-card">Select AOV range</option>
                        {AOV_RANGES.map((range) => (
                          <option key={range} value={range} className="bg-card">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Customer Lifetime Value (LTV)</label>
                      <select
                        name="ltvRange"
                        value={formData.ltvRange}
                        onChange={handleInputChange}
                        className="w-full bg-card border border-border text-foreground rounded-none h-12 px-4 focus:border-[#c9a962] focus:ring-[#c9a962] focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-card">Select LTV range</option>
                        {LTV_RANGES.map((range) => (
                          <option key={range} value={range} className="bg-card">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Sales Cycle Length</label>
                      <select
                        name="salesCycle"
                        value={formData.salesCycle}
                        onChange={handleInputChange}
                        className="w-full bg-card border border-border text-foreground rounded-none h-12 px-4 focus:border-[#c9a962] focus:ring-[#c9a962] focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-card">Select sales cycle</option>
                        {SALES_CYCLES.map((cycle) => (
                          <option key={cycle} value={cycle} className="bg-card">
                            {cycle}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 4: Goals */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-3">Primary Goal *</label>
                      <div className="grid grid-cols-1 gap-3">
                        {PRIMARY_GOALS.map((goal) => (
                          <label
                            key={goal}
                            className={`flex items-center gap-4 p-4 border cursor-pointer transition-all duration-200 ${
                              formData.primaryGoal === goal
                                ? "border-[#c9a962] bg-[#c9a962]/10"
                                : "border-border hover:border-foreground/30"
                            }`}
                          >
                            <input
                              type="radio"
                              name="primaryGoal"
                              value={goal}
                              checked={formData.primaryGoal === goal}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                formData.primaryGoal === goal
                                  ? "border-[#c9a962]"
                                  : "border-foreground/30"
                              }`}
                            >
                              {formData.primaryGoal === goal && (
                                <div className="w-2.5 h-2.5 rounded-full bg-[#c9a962]" />
                              )}
                            </div>
                            <span className="text-foreground/80">{goal}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Timeline *</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-card border border-border text-foreground rounded-none h-12 px-4 focus:border-[#c9a962] focus:ring-[#c9a962] focus:outline-none appearance-none cursor-pointer"
                        required
                      >
                        <option value="" className="bg-card">When do you want to start?</option>
                        {TIMELINES.map((timeline) => (
                          <option key={timeline} value={timeline} className="bg-card">
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide text-foreground/70 mb-2">Additional Notes</label>
                      <Textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Anything else we should know about your goals or challenges?"
                        className="bg-card border-border text-foreground placeholder:text-foreground/30 rounded-none min-h-[120px] focus:border-[#c9a962] focus:ring-[#c9a962] resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-8 border-t border-border">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-sm tracking-wide"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  
                  {currentStep < STEPS.length ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className="bg-foreground text-background hover:bg-foreground/90 disabled:opacity-40 disabled:cursor-not-allowed text-xs tracking-[0.15em] px-8 py-3 rounded-none transition-all duration-300 flex items-center gap-2"
                    >
                      CONTINUE
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!isStepValid() || isSubmitting}
                      className="bg-[#c9a962] text-background hover:bg-[#d4b978] disabled:opacity-40 disabled:cursor-not-allowed text-xs tracking-[0.15em] px-8 py-3 rounded-none transition-all duration-300"
                    >
                      {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                    </Button>
                  )}
                </div>
              </form>

              {/* Not a Fit Note */}
              <div className="mt-16 pt-8 border-t border-border">
                <p className="text-foreground/40 text-sm text-center italic">
                  If you're looking for cheap clicks or unmanaged media buying, we're not the right partner.
                </p>
              </div>
            </>
          )}
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
