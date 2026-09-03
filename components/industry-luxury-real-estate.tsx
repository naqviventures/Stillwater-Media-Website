import IndustryPageLayout, { type IndustryContent, type ProofEntry } from "@/components/industry-page-layout"

// Proof entries are added only after written client approval covering the
// metric, the time period, the measurement method, and the anonymised
// description. Empty array renders nothing — that is intended.
const proof: ProofEntry[] = []

export const content: IndustryContent = {
  slug: "luxury-real-estate-advertising",
  breadcrumbName: "Luxury Real Estate",

  hero: {
    eyebrow: "Industries",
    h1Line1: "Luxury Real Estate Media for Buyers Who",
    h1Line2: "are not searching your listings yet",
    subhead:
      "The buyer for an eight-figure residence is rarely on a portal and frequently not in your market. We build audiences in the markets your buyers actually come from, and report against qualified private appointments.",
    image: "/images/industries-luxury-real-estate.png",
    imageAlt:
      "A modern hillside residence at blue hour with warm interior light glowing through large windows above a still reflecting pool",
  },

  problem: {
    h2: "Three structural problems in this category",
    items: [
      {
        h3: "Renting the audience instead of owning one",
        body: "Most developments and brokerages source demand from listing portals, which means acquisition cost rises every year, the relationship belongs to the portal, and nothing accumulates. You are buying the same audience repeatedly and never building one.",
      },
      {
        h3: "The buyer is often somewhere else",
        body: "Out-of-state and cross-border buyers make up a large share of high-end transactions and are close to invisible to local media. A plan built around the local DMA systematically misses the segment with the least price sensitivity.",
      },
      {
        h3: "Lumpy economics break conventional reporting",
        body: "One transaction can carry a quarter. That makes month-to-month efficiency metrics nearly meaningless and makes it very easy to switch off a channel during the gap before it produces the closing that justifies it.",
      },
    ],
  },

  architecture: {
    h2: "How we assemble the channels",
    intro:
      "The job is to be present in the buyer's world before the property search begins, then to be findable and persuasive once it does. That means building demand outside the local market and capturing it wherever the buyer happens to be.",
    items: [
      {
        h3: "CTV and premium video — feeder-market demand",
        body: "Streaming inventory against modelled high-net-worth households in the markets buyers actually relocate from, not only the DMA the property sits in. This is where out-of-market demand is created.",
      },
      {
        h3: "Programmatic display and native — lifestyle to listing",
        body: "Creative sequenced from the life the property offers toward the property itself. Leading with a listing to a cold audience asks for a decision before there is any reason to make one.",
      },
      {
        h3: "Geo-fenced and out-of-home — where it earns its place",
        body: "Against relevant physical locations when the catchment genuinely justifies it. Used deliberately and sparingly, not as a default line item.",
      },
      {
        h3: "Retargeting — toward an appointment",
        body: "Warm audiences driven to a private appointment or a personal enquiry, not to a brochure download. In this category the brochure is the end of the conversation, not the beginning.",
      },
    ],
  },

  dataLayer: {
    h2: "The audience is the strategy",
    intro:
      "Wealth alone is a weak filter here. The useful audience is wealth combined with a reason to move, in a market with a real relationship to yours.",
    items: [
      {
        h3: "Modelled household wealth",
        body: "Financial-capacity indicators at the household level, used as the base layer rather than the whole targeting strategy.",
      },
      {
        h3: "Feeder-market geography",
        body: "Built from where a development's or brokerage's buyers have historically come from. Where that history exists, it is the single most valuable input to the plan.",
      },
      {
        h3: "Relocation and second-home signals",
        body: "Movement, seasonal residence and second-property behaviour — the difference between a wealthy household and a wealthy household with a reason to buy.",
      },
      {
        h3: "Luxury travel and hospitality behaviour",
        body: "Premium travel and hospitality patterns that correlate with second-home markets and identify buyers before any property search starts.",
      },
    ],
  },

  measure: {
    h2: "What we measure",
    leadParagraphs: [
      "Cost per qualified private appointment, and where the client will share it, appointment-to-transaction rate. Lead volume is close to meaningless when a single closing can carry the year, and optimising toward it produces enquiries that occupy a sales team without producing sales.",
    ],
    linkedParagraph: {
      before:
        "Because the transaction cycle is long and lumpy, we also insist on a measurement window long enough to contain a closing. Judging a luxury property campaign on a single month is how good campaigns get cancelled one month before they work — which is the argument we make on ",
      linkText: "every engagement",
      href: "/capabilities",
      after: ".",
    },
  },

  proof,

  builtFor: {
    h2: "Who this is for",
    body: "Luxury developments and master-planned communities, high-end brokerages and teams, resort and second-home residential, and branded residences.",
    disqualifier:
      "Not a fit for a single listing or a short campaign around one property. The model earns out across a development, a portfolio or a brokerage's ongoing acquisition. For one house, a portal listing and a good agent will serve you better and cost less.",
  },

  engagement: {
    h2: "The first ninety days",
    steps: [
      {
        period: "Weeks 1–2",
        body: "Feeder-market analysis from the client's transaction history, plus audience construction and appointment tracking.",
      },
      {
        period: "Weeks 3–4",
        body: "Demand layer into feeder markets. Lifestyle-led creative in market before any listing-led creative runs.",
      },
      {
        period: "Weeks 5–8",
        body: "Retargeting activated toward private appointment. Sequencing tightened as engagement data arrives.",
      },
      {
        period: "Weeks 9–12",
        body: "First qualified-appointment read, with cost per appointment reported by feeder market rather than in aggregate.",
      },
    ],
  },

  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "How do you reach luxury home buyers who are not on the portals?",
        a: "By targeting the household rather than the search. Modelled wealth, relocation and second-home signals, and luxury travel behaviour identify qualified buyers before they begin a property search, in the feeder markets they actually live in today.",
      },
      {
        q: "What does it cost to acquire a qualified luxury real estate lead?",
        a: "It varies enormously by market, price band and how \"qualified\" is defined, and a benchmark number without those inputs is not useful. The productive version of this question is what a qualified private appointment is worth to you, which sets what one is worth paying for.",
      },
      {
        q: "How do you target out-of-state and international buyers?",
        a: "Through feeder-market analysis, ideally built from the client's own transaction history. Where that history exists it is the most valuable input available; where it does not, wealth migration patterns are a workable starting point until real data accumulates.",
      },
      {
        q: "Does CTV work for real estate, or is it just branding?",
        a: "It creates demand in markets where you have no other presence, which is precisely the out-of-market segment most plans miss. It should be measured on its contribution to qualified appointments over a full cycle, not on last-touch conversions.",
      },
      {
        q: "How do you measure media when one closing carries the quarter?",
        a: "By measuring the step before the closing. Qualified private appointments occur frequently enough to steer decisions, and appointment-to-transaction rate connects them to revenue without waiting for a closing to prove the channel.",
      },
    ],
  },

  cta: {
    h2Line1: "Selective",
    h2Line2: "by design",
    body: "We take a limited number of engagements each quarter. If you are marketing a development, a portfolio or a brokerage and acquisition cost is the constraint, apply and we will tell you honestly whether this model fits.",
  },

  related: {
    h2: "Related reading",
    links: [
      {
        href: "/insights/high-net-worth-consumer-advertising",
        label: "Advertising to high-net-worth consumers",
      },
      {
        href: "/insights/dooh-affluent-location-targeting",
        label: "DOOH and affluent location targeting",
      },
      {
        href: "/insights/affluent-lookalike-modeling",
        label: "Affluent lookalike modeling",
      },
    ],
  },
}

export default function IndustryLuxuryRealEstate() {
  return <IndustryPageLayout content={content} />
}
