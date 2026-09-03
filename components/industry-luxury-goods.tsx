import IndustryPageLayout, { type IndustryContent, type ProofEntry } from "@/components/industry-page-layout"

// Proof entries are added only after written client approval covering the
// metric, the time period, the measurement method, and the anonymised
// description. Empty array renders nothing — that is intended.
const proof: ProofEntry[] = []

export const content: IndustryContent = {
  slug: "luxury-goods-advertising",
  breadcrumbName: "Luxury Goods & Apparel",

  hero: {
    eyebrow: "Industries",
    h1Line1: "Luxury Goods Media That Grows Direct Revenue",
    h1Line2: "without discounting the brand",
    subhead:
      "Performance media's default lever is the discount, and the discount is the fastest way to damage a premium price position. We build demand and measure it incrementally, so the upper funnel stops being the first thing cut.",
    image: "/images/industries-luxury-goods.png",
    imageAlt: "Unbranded premium leather and glass objects on dark stone, lit by a single warm directional light",
  },

  problem: {
    h2: "Three tensions specific to premium goods",
    items: [
      {
        h3: "Channel conflict is structural, not occasional",
        body: "Wholesale partners, owned retail and direct e-commerce all want the same customer. Media that lifts one can cannibalise another, and a plan that ignores this optimises one channel's numbers at the expense of the business.",
      },
      {
        h3: "The default performance toolkit is discounting",
        body: "Promotional offers, urgency and price-led creative are what performance media reaches for, and each one trades long-term pricing power for short-term conversion. For a premium brand that trade is almost always bad, and it compounds.",
      },
      {
        h3: "Last-touch reporting always argues for cutting the upper funnel",
        body: "Measured with the same last-touch model, the channel closest to the purchase takes credit for demand that something else created. Follow that logic and you cut the demand generation, watch capture efficiency decline, and never connect the two.",
      },
    ],
  },

  architecture: {
    h2: "How we assemble the channels",
    intro:
      "The design principle is that demand creation and demand capture are separate jobs, funded separately and measured differently. Collapsing them into one funnel and one metric is how premium brands end up with efficient reporting and declining growth.",
    items: [
      {
        h3: "CTV and premium video — demand creation",
        body: "Streaming and premium video against affluent audiences, building the brand desire that everything downstream converts. Measured on its contribution to incremental revenue, not on last-touch conversions.",
      },
      {
        h3: "Programmatic display and native — consideration",
        body: "Purchase-intent audiences with creative sequenced by product tier, never by discount. Brand-safe placement handled as a requirement rather than a setting.",
      },
      {
        h3: "Retail media — where the brand sells through partners",
        body: "Activated where wholesale and marketplace relationships make it relevant, and planned alongside direct so the two are not bidding against each other for the same customer.",
      },
      {
        h3: "Paid social and search — capture",
        body: "Efficient, necessary, and consistently over-credited. Funded as capture, reported as capture, and never allowed to set the budget for the layers that feed it.",
      },
    ],
  },

  dataLayer: {
    h2: "The audience is the strategy",
    intro:
      "Premium goods brands usually have better first-party data than they use, and worse audience definitions than they think. Both are fixable early.",
    items: [
      {
        h3: "Modelled wealth and discretionary spend",
        body: "Household financial capacity combined with actual premium-category spending behaviour, which is a far better filter than either alone.",
      },
      {
        h3: "Category and competitor affinity",
        body: "Purchase and browsing behaviour in the category and in adjacent premium categories, used to find buyers who are already spending at this price level.",
      },
      {
        h3: "First-party customer matching",
        body: "The brand's own customer file activated for suppression, retention and lookalike modelling. Most brands hold this and use it for none of the three.",
      },
      {
        h3: "Premium retail and e-commerce behaviour",
        body: "Shopping behaviour at premium retailers and marketplaces, which identifies the disposition to buy at a premium price rather than merely the interest in the category.",
      },
    ],
  },

  measure: {
    h2: "What we measure",
    leadParagraphs: [
      "Incremental direct revenue, established with holdouts rather than platform attribution. When demand creation and demand capture are measured with the same last-touch model, the model will always recommend cutting demand creation. That recommendation is usually wrong, and it is expensive in a way that takes two quarters to become visible.",
    ],
    linkedParagraph: {
      before:
        "We also report against full-price revenue rather than total revenue where the brand can separate them. A campaign that grows revenue by moving discounted inventory has not grown the business it appears to have grown — a distinction we hold to across ",
      linkText: "every engagement",
      href: "/capabilities",
      after: ".",
    },
  },

  proof,

  builtFor: {
    h2: "Who this is for",
    body: "Premium apparel and accessories brands, jewellery and watches, luxury beauty and fragrance, premium equipment and sporting goods, and high-end home and design brands with a direct channel worth growing.",
    disqualifier:
      "Not a fit for a brand whose growth plan depends on promotional cadence. We are not the right agency to run a discount calendar, and pretending otherwise would waste a quarter for both of us.",
  },

  engagement: {
    h2: "The first ninety days",
    steps: [
      {
        period: "Weeks 1–2",
        body: "Channel conflict mapped, first-party data assessed, and holdout measurement designed before any media runs.",
      },
      {
        period: "Weeks 3–4",
        body: "Demand creation into market against the defined audience. Full-price and promotional revenue separated in reporting from day one.",
      },
      {
        period: "Weeks 5–8",
        body: "Capture and retail media layers activated and coordinated so they are not competing for the same customer.",
      },
      {
        period: "Weeks 9–12",
        body: "First incrementality read, with demand creation assessed on incremental contribution rather than last touch.",
      },
    ],
  },

  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "How do you grow direct revenue for a luxury brand without discounting?",
        a: "By funding demand creation as its own job and measuring it on incremental contribution. Discounting is what a brand reaches for when the only channels it funds are capture channels, and the only metric it trusts is last touch.",
      },
      {
        q: "How do you handle conflict between wholesale and direct?",
        a: "By mapping it before planning, then coordinating retail media and direct activity so they are not competing for the same customer. Where the conflict is genuine, it should be an explicit commercial decision rather than an accidental outcome of the media plan.",
      },
      {
        q: "What is incrementality and why does it matter for a premium brand?",
        a: "Incrementality is the revenue that would not have happened without the media, established by holding out a comparable audience. It matters most for premium brands because their upper-funnel investment is precisely what last-touch models fail to credit.",
      },
      {
        q: "Does retail media work for premium brands?",
        a: "It works where the brand genuinely sells through those partners, and it should be planned alongside direct rather than bolted on. Treated as a separate budget with separate reporting, it tends to buy customers the brand already had.",
      },
      {
        q: "How do you value upper-funnel media when last touch says it does nothing?",
        a: "With a holdout. It is the only method that answers the question rather than reallocating credit, and it produces a number both marketing and finance can agree to use.",
      },
    ],
  },

  cta: {
    h2Line1: "Selective",
    h2Line2: "by design",
    body: "We take a limited number of engagements each quarter. If you are growing a premium brand's direct revenue and would rather not do it with discounts, apply and we will tell you honestly whether this model fits.",
  },

  related: {
    h2: "Related reading",
    links: [
      {
        href: "/insights/luxury-retail-media-networks",
        label: "Luxury retail media networks",
      },
      {
        href: "/insights/brand-lift-measurement-ctv",
        label: "Brand lift measurement on CTV",
      },
      {
        href: "/insights/holdout-testing-advertising",
        label: "Holdout testing in advertising",
      },
    ],
  },
}

export default function IndustryLuxuryGoods() {
  return <IndustryPageLayout content={content} />
}
