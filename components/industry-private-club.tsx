import IndustryPageLayout, { type IndustryContent, type ProofEntry } from "@/components/industry-page-layout"

// Proof entries are added only after written client approval covering the
// metric, the time period, the measurement method, and the anonymised
// description. Empty array renders nothing — that is intended.
const proof: ProofEntry[] = []

export const content: IndustryContent = {
  slug: "private-club-advertising",
  breadcrumbName: "Private Clubs & Golf",

  hero: {
    eyebrow: "Industries",
    h1Line1: "Private Club Marketing for Waitlists,",
    h1Line2: "not walk-ins",
    subhead:
      "The audience for a private club is a few thousand households inside one radius. That is a precision problem, not a reach problem — and it is usually bought as though it were the reverse.",
    image: "/images/industries-private-club.webp",
    imageAlt: "An empty golf green under dawn mist with a stone clubhouse and one lit window in the distance",
  },

  problem: {
    h2: "What makes club marketing unlike other luxury media",
    items: [
      {
        h3: "A few thousand households, not a market",
        body: "The qualified audience inside a club's catchment is small enough to name. Any plan built for reach will exhaust it in weeks and then keep paying to show the same households the same message.",
      },
      {
        h3: "Discretion is part of the product",
        body: "Media that looks like it is selling devalues what is being sold. That rules out most direct-response creative conventions — urgency, discounting, visible availability — which is exactly the toolkit most performance media reaches for first.",
      },
      {
        h3: "Almost nobody calculates what a member is worth",
        body: "Membership economics are initiation plus dues across years of tenure. Most clubs set an acquisition budget against the initiation fee alone, which produces a budget far too small to reach the audience properly and then confirms that marketing does not work.",
      },
    ],
  },

  architecture: {
    h2: "How we assemble the channels",
    intro:
      "Everything is bounded by the catchment and disciplined by tone. The goal is to be quietly and consistently present to a small, precisely defined group — not to be seen widely.",
    items: [
      {
        h3: "Geo-bounded CTV and video — presence, not reach",
        body: "Streaming inventory against modelled affluent households inside the catchment only. Small budgets go further here than anywhere else in luxury media, precisely because the audience is so tightly drawn.",
      },
      {
        h3: "Programmatic display and native — lifestyle-led",
        body: "Creative that shows the life of the club rather than the offer of membership. Frequency deliberately capped, because in an audience this small the line between familiar and intrusive arrives quickly.",
      },
      {
        h3: "Retargeting — toward a private enquiry",
        body: "Warm households driven to a discreet enquiry rather than a public offer. The conversion event is a conversation, and it should look like one.",
      },
      {
        h3: "Search — low volume, high intent",
        body: "Club and category terms in the local geography. Small volume, and the people searching are the most valuable prospects the club will see all year.",
      },
    ],
  },

  dataLayer: {
    h2: "The audience is the strategy",
    intro:
      "In a catchment this small, targeting precision is the entire media strategy. There is no volume to hide imprecision behind.",
    items: [
      {
        h3: "Household wealth inside a defined radius",
        body: "Modelled financial capacity, bounded strictly by the real catchment rather than the metro area.",
      },
      {
        h3: "Club-lifestyle behavioural signals",
        body: "Golf, tennis, boating, equestrian and country-club interest and purchase behaviour — the strongest available proxy for the disposition to join.",
      },
      {
        h3: "New movers and relocations within the catchment",
        body: "Households that have recently arrived are disproportionately open to joining, and the window in which that is true is short.",
      },
      {
        h3: "Executive and business-owner profiles",
        body: "The professional profile most consistently represented in club membership, and a useful cross-check on modelled wealth.",
      },
    ],
  },

  measure: {
    h2: "What we measure",
    leadParagraphs: [
      "Cost per qualified membership enquiry, held against member lifetime value — initiation plus dues across expected tenure, not initiation alone. Setting that number correctly usually reveals the club can afford considerably more per enquiry than it has been spending, which changes what is possible.",
    ],
    linkedParagraph: {
      before:
        "We also watch frequency more closely here than in any other category. In an audience of a few thousand households, over-delivery is not merely inefficient — it is actively corrosive to a brand whose appeal depends on restraint. That discipline is the same one we apply on ",
      linkText: "every engagement",
      href: "/capabilities",
      after: ".",
    },
  },

  proof,

  builtFor: {
    h2: "Who this is for",
    body: "Private golf and country clubs, city and social clubs, yacht and beach clubs, residential club communities, and club management groups with several properties.",
    disqualifier:
      "Not a fit for a club that wants discounted initiation or public promotional offers. That approach works briefly and costs more in positioning than it returns in members, and reversing it takes years.",
  },

  engagement: {
    h2: "The first ninety days",
    steps: [
      {
        period: "Weeks 1–2",
        body: "Catchment definition, member lifetime value calculated properly, and enquiry tracking established.",
      },
      {
        period: "Weeks 3–4",
        body: "Lifestyle-led creative into the bounded catchment with frequency caps set from the outset.",
      },
      {
        period: "Weeks 5–8",
        body: "Retargeting toward private enquiry. Signals refined as response identifies which household profiles engage.",
      },
      {
        period: "Weeks 9–12",
        body: "First cost-per-qualified-enquiry read against member lifetime value, with frequency reported alongside.",
      },
    ],
  },

  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "How do private clubs market without cheapening the brand?",
        a: "By showing the life rather than the offer, capping frequency deliberately, and converting to a private enquiry instead of a public promotion. The media should feel like an invitation the household happened to notice.",
      },
      {
        q: "What should a club be willing to pay for a membership enquiry?",
        a: "Considerably more than most clubs assume, because the right denominator is initiation plus dues across expected tenure. Calculating that properly is usually the single most valuable hour spent before any media is bought.",
      },
      {
        q: "Does digital advertising work for a club with a waitlist?",
        a: "Yes, though the objective changes. With a waitlist the work is improving the quality and fit of applicants and maintaining presence for when the list moves, rather than generating volume.",
      },
      {
        q: "How small a geography can you target effectively?",
        a: "Small enough for a club catchment, comfortably. The practical constraint is not the geography but the audience size within it, which is why household precision and frequency control matter more here than budget.",
      },
      {
        q: "How do you measure marketing against member lifetime value?",
        a: "By tracking cost per qualified enquiry and the enquiry-to-member rate, then comparing acquisition cost to initiation plus expected dues revenue. That ratio, not the raw cost per enquiry, is what tells you whether to spend more.",
      },
    ],
  },

  cta: {
    h2Line1: "Selective",
    h2Line2: "by design",
    body: "We take a limited number of engagements each quarter. If you are marketing a club and membership growth or applicant quality is the constraint, apply.",
  },

  related: {
    h2: "Related reading",
    links: [
      {
        href: "/insights/golf-equipment-advertising-affluent",
        label: "Golf equipment advertising to affluent audiences",
      },
      {
        href: "/insights/dooh-affluent-location-targeting",
        label: "DOOH and affluent location targeting",
      },
      {
        href: "/insights/high-net-worth-consumer-advertising",
        label: "Advertising to high-net-worth consumers",
      },
    ],
  },
}

export default function IndustryPrivateClub() {
  return <IndustryPageLayout content={content} />
}
