import IndustryPageLayout, { type IndustryContent, type ProofEntry } from "@/components/industry-page-layout"

// Proof entries are added only after written client approval covering the
// metric, the time period, the measurement method, and the anonymised
// description. Empty array renders nothing — that is intended.
const proof: ProofEntry[] = []

export const content: IndustryContent = {
  slug: "luxury-automotive-advertising",
  breadcrumbName: "Luxury Automotive",

  hero: {
    eyebrow: "Industries",
    h1Line1: "Luxury Automotive Media That Reduces",
    h1Line2: "cost per sold unit, rooftop by rooftop",
    subhead:
      "Most luxury dealer media is planned by DMA, reported on store visits, and bought three times over by three tiers of budget. We plan by drive radius, manage frequency across the group, and match back to the sales file.",
    image: "/images/industries-luxury-automotive.webp",
    imageAlt:
      "An unbranded luxury car under a single warm overhead light in a dark minimal concrete showroom, reflected on a polished floor",
  },

  problem: {
    h2: "Three things that break dealer media",
    items: [
      {
        h3: "Three tiers of budget buying the same person",
        body: "Manufacturer, regional association and dealer budgets are planned separately and frequently reach the same household repeatedly within a week. Nobody sees the combined frequency, and the shopper experiences a brand that will not stop talking.",
      },
      {
        h3: "The drive radius is real and the DMA is not",
        body: "A luxury rooftop draws from a specific geography defined by how far a buyer will travel to service a car, not by a media market boundary. Impressions outside that radius are decorative, and in a DMA plan there are a great many of them.",
      },
      {
        h3: "Attribution stops at the showroom door",
        body: "The conversion that matters happens offline, which is exactly where most dealer reporting ends. Store visits and form fills fill the gap, and they have been used to overstate dealer media for twenty years.",
      },
    ],
  },

  architecture: {
    h2: "How we assemble the channels",
    intro:
      "The plan is built around one rooftop's actual catchment, then extended across the group with frequency managed centrally. That order matters — a group-level plan disaggregated to rooftops produces waste at every store.",
    items: [
      {
        h3: "CTV and online video — in-market demand inside the radius",
        body: "Streaming inventory against in-market affluent households within the true drive radius. Model-level creative, not brand-level, because the shopper is already choosing between specific cars.",
      },
      {
        h3: "Programmatic display and native — the consideration layer",
        body: "Sequenced by model and by where the shopper sits in their consideration set. Conquest audiences handled separately from loyalty audiences, because the message is not the same.",
      },
      {
        h3: "Retargeting — from configurator behaviour",
        body: "Built from vehicle detail page and configurator activity, which is the strongest in-market signal a dealer owns and the one most often left unused.",
      },
      {
        h3: "Search — model and trim intent",
        body: "Aligned to the model and trim terms buyers actually use rather than generic category terms, and coordinated with tier-one and tier-two activity rather than bidding against it.",
      },
    ],
  },

  dataLayer: {
    h2: "The audience is the strategy",
    intro:
      "Automotive has better in-market signals than almost any other luxury category. The failure is rarely data availability — it is geography and frequency discipline.",
    items: [
      {
        h3: "In-market shopping signals",
        body: "Active vehicle research and shopping behaviour, the strongest predictor available and time-sensitive enough to be worth acting on quickly.",
      },
      {
        h3: "Drive-radius geography, per rooftop",
        body: "Built per store from real catchment rather than per DMA. This single change usually removes more waste than any targeting improvement.",
      },
      {
        h3: "Ownership and lease-end timing",
        body: "Current vehicle and lease expiry where the data supports it. Lease-end is a date, and a date is a far better trigger than an interest category.",
      },
      {
        h3: "Conquest and loyalty, separated",
        body: "Competitive conquest audiences and existing-owner audiences built and messaged separately, with frequency managed across the group so one household is not bought by four rooftops at once.",
      },
    ],
  },

  measure: {
    h2: "What we measure",
    leadParagraphs: [
      "Cost per sold unit, matched back to the dealer's sales file where the group will share it. Store visits, form fills and lead volume are diagnostics — they tell you whether the machine is running, not whether it is producing.",
    ],
    linkedParagraph: {
      before:
        "A match-back requires the group to share sales data, and we understand why that is a conversation. But without it, the programme is being judged on proxies, and proxies are precisely how dealer media has been overstated for a generation. We would rather have the harder conversation early, on this engagement as on ",
      linkText: "every other",
      href: "/capabilities",
      after: ".",
    },
  },

  proof,

  builtFor: {
    h2: "Who this is for",
    body: "Luxury and exotic franchise rooftops, multi-rooftop dealer groups, pre-owned specialists in the premium segment, and groups adding new stores who need launch demand in an unfamiliar catchment.",
    disqualifier:
      "Not a fit for a group unwilling to share sales data. Without a match-back we would be reporting on proxies and calling it performance, and neither of us would learn anything worth the budget.",
  },

  engagement: {
    h2: "The first ninety days",
    steps: [
      {
        period: "Weeks 1–2",
        body: "Drive-radius definition per rooftop, sales-file match-back agreement, and audience construction.",
      },
      {
        period: "Weeks 3–4",
        body: "In-market demand and model-level creative into the defined radius. Cross-tier frequency baseline established.",
      },
      {
        period: "Weeks 5–8",
        body: "Retargeting from configurator and vehicle detail page behaviour. Conquest and loyalty separated and measured apart.",
      },
      {
        period: "Weeks 9–12",
        body: "First match-back read: cost per sold unit by rooftop, with frequency and radius efficiency reported alongside.",
      },
    ],
  },

  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "How do you lower cost per sold unit for a luxury dealership?",
        a: "Mostly by removing waste before improving targeting. Planning to the real drive radius instead of the DMA, and managing frequency across all three tiers of budget, typically recovers more working media than any optimisation applied to a badly-bounded plan.",
      },
      {
        q: "Can programmatic work for a single rooftop, or only for a group?",
        a: "A single rooftop works well and is usually the right way to start. One store, one clearly defined radius, and a window long enough to see a sales-file match-back is a real test that a group can evaluate before committing more.",
      },
      {
        q: "How do you avoid buying the same shopper across tier one, two and three?",
        a: "By making combined frequency visible, which requires knowing what the other tiers are running. We plan the dealer layer with that in view and report frequency at household level rather than per campaign.",
      },
      {
        q: "How do you attribute a showroom sale to digital media?",
        a: "Through a match-back against the dealer's sales file, comparing exposed and unexposed households. It is more work than reading a platform dashboard and it is the only version of this answer worth acting on.",
      },
      {
        q: "What is a realistic first test for a group that has not run programmatic?",
        a: "One rooftop, one drive radius, and a window long enough for a sales-file match-back to be meaningful. Small enough to approve, structured enough to produce an answer the group can trust.",
      },
    ],
  },

  cta: {
    h2Line1: "Selective",
    h2Line2: "by design",
    body: "We take a limited number of engagements each quarter. If you run a luxury rooftop or a dealer group and cost per sold unit is the constraint, apply.",
  },

  related: {
    h2: "Related reading",
    links: [
      {
        href: "/insights/high-end-car-dealership-programmatic",
        label: "Programmatic media for high-end car dealerships",
      },
      {
        href: "/insights/incrementality-vs-attribution-advertising",
        label: "Incrementality versus attribution in advertising",
      },
      {
        href: "/insights/customer-acquisition-cost-luxury-brands",
        label: "Customer acquisition cost for luxury brands",
      },
    ],
  },
}

export default function IndustryLuxuryAutomotive() {
  return <IndustryPageLayout content={content} />
}
