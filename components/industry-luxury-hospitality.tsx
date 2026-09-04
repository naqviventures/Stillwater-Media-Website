import IndustryPageLayout, { type IndustryContent, type ProofEntry } from "@/components/industry-page-layout"

// Proof entries are added only after written client approval covering the
// metric, the time period, the measurement method, and the anonymised
// description. Empty array renders nothing — that is intended.
const proof: ProofEntry[] = []

export const content: IndustryContent = {
  slug: "luxury-hospitality-advertising",
  breadcrumbName: "Luxury Hospitality",

  hero: {
    eyebrow: "Industries",
    h1Line1: "Luxury Hospitality Media That Moves Bookings",
    h1Line2: "from the OTA to your own front door",
    subhead:
      "Every booking that arrives through a travel site costs you a commission and a guest relationship you never own. We build demand before the search begins and measure against direct revenue, not room nights.",
    image: "/images/industries-luxury-hospitality.webp",
    imageAlt:
      "A resort terrace at dusk with a single lit lantern on a stone table and an empty infinity pool reflecting a darkening sky",
  },

  problem: {
    h2: "Three things that quietly set the economics",
    items: [
      {
        h3: "The OTA is a customer you rent",
        body: "Booking platforms deliver volume and take a commission on every stay, and the guest relationship stays theirs. Worse, a property that relies on them ends up advertising to win back guests it already served. The cost is not the commission line — it is that nothing compounds.",
      },
      {
        h3: "The decision starts long before the search",
        body: "Nobody books a five-figure stay from a cold search result. The destination is chosen first, often months earlier, and the property is chosen from a short list formed well before anyone opens a travel site. Media that only shows up at the search is competing on price for a decision already half made.",
      },
      {
        h3: "Seasonality punishes short measurement windows",
        body: "Occupancy, rate and demand all move seasonally, which makes month-over-month comparison close to meaningless and makes it easy to cancel a campaign in a soft month that was working perfectly well.",
      },
    ],
  },

  architecture: {
    h2: "How we assemble the channels",
    intro:
      "The objective is to be present while the destination is being chosen, then to be the obvious direct option once the property is. That means building demand in feeder markets and capturing it before an OTA does.",
    items: [
      {
        h3: "CTV and premium video — destination and property demand",
        body: "Streaming inventory against affluent households in the markets guests actually travel from. This is where the short list gets formed, and it is the only layer that influences the decision before price comparison begins.",
      },
      {
        h3: "Programmatic display and native — the consideration layer",
        body: "Creative sequenced from the experience toward the stay, against travel-intent and affluent-lifestyle audiences. Property photography does the work here; rate messaging does not.",
      },
      {
        h3: "Retargeting — toward the direct booking",
        body: "Warm audiences driven to the property's own booking path, with the direct advantage made explicit. This is the layer that decides whether the booking is yours or the platform's, and it is worth funding accordingly.",
      },
      {
        h3: "Search — brand defence and demand capture",
        body: "Property and destination terms, including defending your own brand terms against platforms bidding on them. Losing your own name in search is the most expensive avoidable line in hospitality media.",
      },
    ],
  },

  dataLayer: {
    h2: "The audience is the strategy",
    intro:
      "Wealth alone is a weak filter for travel. The useful audience is affluence combined with a real relationship to the destination and a reason to travel now.",
    items: [
      {
        h3: "Feeder-market geography",
        body: "Built from where the property's guests actually come from, using the property management system where the client will share it. Where that history exists it is the single most valuable input available.",
      },
      {
        h3: "Modelled household wealth and discretionary travel spend",
        body: "Financial capacity combined with actual premium travel behaviour, which is a far better predictor than either signal alone.",
      },
      {
        h3: "Travel intent and seasonal timing",
        body: "Destination research, seasonal booking patterns and lead-time behaviour, used to be present during the window when the destination is chosen rather than after.",
      },
      {
        h3: "Past guests and lookalikes",
        body: "The property's own guest file activated for return stays, suppression and lookalike modelling. Most properties hold this and use it for none of the three.",
      },
    ],
  },

  measure: {
    h2: "What we measure",
    leadParagraphs: [
      "Direct booking revenue and the share of bookings arriving direct rather than through a platform. Room nights and click volume describe activity; the channel mix describes whether the business is getting healthier.",
    ],
    linkedParagraph: {
      before:
        "We also insist on a measurement window that contains a full booking cycle. The gap between a guest first seeing a property and arriving at it can run months, and a campaign judged inside a single soft month will look like a failure right up until the season it was built for. That is the same discipline we bring to ",
      linkText: "every engagement",
      href: "/capabilities",
      after: ".",
    },
  },

  proof,

  builtFor: {
    h2: "Who this is for",
    body: "Independent luxury hotels and resorts, small luxury collections and groups, boutique properties with a distinct point of view, private residence clubs and branded residences, and destination properties with a defined feeder-market pattern.",
    disqualifier:
      "Not a fit for a property whose plan is to discount its way to occupancy. Rate integrity and direct-channel growth are the same project, and a property that leads with price will train its guests to wait for the next offer.",
  },

  engagement: {
    h2: "The first ninety days",
    steps: [
      {
        period: "Weeks 1–2",
        body: "Feeder-market analysis from the property management system, audience construction, and direct-booking tracking confirmed end to end.",
      },
      {
        period: "Weeks 3–4",
        body: "Demand layer into feeder markets, timed to the booking window for the season being sold rather than the season being lived.",
      },
      {
        period: "Weeks 5–8",
        body: "Retargeting toward the direct booking path activated. Brand-term defence in search reviewed and corrected.",
      },
      {
        period: "Weeks 9–12",
        body: "First read on direct revenue and channel mix, reported against the same period last year rather than against last month.",
      },
    ],
  },

  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "How do you shift bookings from OTAs to direct?",
        a: "By reaching the guest before the travel platform does, then making the direct path the obvious one once they are considering the property. Most of the work happens upstream of the booking search, which is why properties that only run capture channels find the platform share never moves.",
      },
      {
        q: "Does CTV work for a hotel or resort?",
        a: "It works where the destination decision is still open, which is the part of the journey most hospitality media ignores. It should be measured on its contribution to direct bookings over a full booking cycle, not on last-touch conversions in the week it ran.",
      },
      {
        q: "How far in advance should we be advertising?",
        a: "Ahead of the booking window for the season you are selling, which for luxury leisure is typically months rather than weeks. Advertising into the season you are currently operating is advertising to people who have already chosen somewhere else.",
      },
      {
        q: "How do you target guests who have not started searching yet?",
        a: "Through feeder-market geography combined with modelled wealth and premium travel behaviour, rather than through travel-search intent alone. Intent data finds people who have already begun; the object here is to be there first.",
      },
      {
        q: "How do you measure against direct revenue rather than room nights?",
        a: "By instrumenting the property's own booking path and reporting direct revenue and channel mix alongside cost, with a window long enough to contain a real booking cycle. Room nights alone will not tell you whether the direct channel is growing.",
      },
    ],
  },

  cta: {
    h2Line1: "Selective",
    h2Line2: "by design",
    body: "We take a limited number of engagements each quarter. If you run a luxury property and the direct channel is the constraint, apply.",
  },

  related: {
    h2: "Related reading",
    links: [
      {
        href: "/insights/luxury-hospitality-marketing-agency",
        label: "Luxury hospitality marketing agency",
      },
      {
        href: "/insights/boutique-hotel-advertising-digital",
        label: "Boutique hotel advertising in a digital-first world",
      },
      {
        href: "/insights/high-net-worth-consumer-advertising",
        label: "Advertising to high-net-worth consumers",
      },
    ],
  },
}

export default function IndustryLuxuryHospitality() {
  return <IndustryPageLayout content={content} />
}
