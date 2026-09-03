import IndustryPageLayout, { type IndustryContent, type ProofEntry } from "@/components/industry-page-layout"

// Proof entries are added only after written client approval covering the
// metric, the time period, the measurement method, and the anonymised
// description. Empty array renders nothing — that is intended.
// REVIEW BEFORE PUBLISHING. Remove this entry if approval is not on file.
const proof: ProofEntry[] = [
  {
    heading: "What this looks like in practice",
    body: [
      "A national operator running membership, fractional and charter products engaged us for a coordinated CTV, social and search programme built on the architecture above. Over a two-quarter window, the programme returned approximately 4.4 times its media investment in closed revenue — not modelled pipeline, not attributed conversions, but deals recorded as won in the client's own CRM, with several times that figure again live in active pipeline at the end of the window.",
      "The pattern inside the numbers is the useful part. The CTV layer produced the highest average deal value and converted disproportionately at the fractional tier. Social produced the highest volume of attributed deals, across both prospecting and retargeting. Search closed buyers who were already in market. Each channel did the job it was built for, and none of them would have produced that result alone.",
    ],
  },
]

export const content: IndustryContent = {
  slug: "private-aviation-advertising",
  breadcrumbName: "Private Aviation",

  hero: {
    eyebrow: "Industries",
    h1Line1: "Private Aviation Advertising for a Buyer Pool",
    h1Line2: "measured in thousands, not millions",
    subhead:
      "Charter, jet card, membership and fractional buyers are among the smallest addressable audiences in performance media — and among the most expensive to reach badly. We build multi-channel programmatic that stays present across a decision cycle measured in months, and we report it against deals in your CRM.",
    image: "/images/industries-private-aviation.png",
    imageAlt:
      "An unbranded business jet at rest on a private terminal apron at blue hour, warm apron lights on wet tarmac with a distant city skyline",
  },

  problem: {
    h2: "Three things make aviation media different",
    items: [
      {
        h3: "A buyer pool small enough to exhaust",
        body: "The realistic audience is affluent business owners, C-suite executives and high-net-worth households with both the means and the motivation to commit. That is not a demographic — it is a list. Broad targeting doesn't just waste money here, it burns the same small pool with repetitive impressions until the brand reads as cheap.",
      },
      {
        h3: "A decision cycle that outlasts most campaigns",
        body: "Nobody buys a fractional share on impulse. Buyers research, compare operators, talk to their advisors and deliberate — often over several months and across several devices. A campaign optimised to a seven-day conversion window will conclude that none of it worked, right up until the deals close.",
      },
      {
        h3: "A cost of waste that scales with the price tag",
        body: "When the products in the portfolio run from a five-figure charter to a seven-figure fractional commitment, every misaligned impression is not just inefficient — it is budget that should have been spent staying in front of a buyer who was actually going to close.",
      },
    ],
  },

  architecture: {
    h2: "How we assemble the channels",
    intro:
      "No channel works alone in this category. A buyer might meet the brand on a streaming service, research it in search two weeks later, and convert through a retargeted social ad a month after that. Break any link in that chain and the deal doesn't close — it just quietly goes to a competitor. We build the full chain deliberately.",
    items: [
      {
        h3: "Premium CTV and video — the awareness layer",
        body: "Connected TV and premium streaming inventory placed against modelled high-net-worth households, before those households ever search for an operator. In our experience this layer produces the highest average deal value in the portfolio, because it reaches buyers early enough to shape which operator they consider at all. Brand-building and revenue generation are not opposing goals at this price point.",
      },
      {
        h3: "Programmatic display and native — the consideration layer",
        body: "Sequenced creative against the same audience, differentiated by product tier. Charter, membership and fractional buyers are not one audience with one message, and treating them as one is the most common error we see in the category.",
      },
      {
        h3: "Paid social — the conversion layer",
        body: "Precision-targeted prospecting and retargeting against warm audiences. Typically the highest volume of attributed deals, working across both the first touch and the return visit.",
      },
      {
        h3: "Search — the demand-capture layer",
        body: "High-intent traffic from buyers already comparing operators, funnelled into the retargeting ecosystem rather than treated as a standalone channel. Search closes the loop; it rarely opens it.",
      },
    ],
  },

  dataLayer: {
    h2: "The audience is the strategy",
    intro:
      "Most media plans target broadly and hope the algorithm sorts it out. In a category this narrow, the audience build is not a setup step — it is the reason the economics work at all. The same audience intelligence informs every channel decision: who sees CTV, which segments get built in social, which search audiences get bid up.",
    items: [
      {
        h3: "Modelled household wealth",
        body: "Verified financial-capacity indicators at the household level, not self-reported income bands or interest proxies.",
      },
      {
        h3: "Business ownership and executive signals",
        body: "Firmographic and behavioural data identifying business owners and executives with travel-intensive profiles — the population that converts to membership and fractional most reliably.",
      },
      {
        h3: "Aviation-adjacent behaviour",
        body: "Interest and purchase signals from luxury travel, premium hospitality and high-end lifestyle categories, used to find buyers before they enter the aviation category at all.",
      },
      {
        h3: "Route and market geography",
        body: "Prioritised by the operator's actual fleet positioning and route density rather than by generic wealth geography. Media served into markets you cannot serve well is worse than no media.",
      },
    ],
  },

  measure: {
    h2: "We report against deals, not clicks",
    leadParagraphs: [
      "Platform-reported conversions are close to meaningless in this category. The window is too long, the buyer moves across devices, and the platform will happily claim credit for a deal it touched once. We instrument campaigns to report at the deal level inside the client's CRM — every attributed opportunity tied back to the touchpoints that produced it, with pipeline and closed revenue kept as separate figures rather than blended into one flattering number.",
    ],
    linkedParagraph: {
      before:
        "That separation matters. Pipeline is a forecast. Closed revenue is a fact. Any agency that quotes a return multiple without telling you which one it used is telling you something about their reporting, not their performance. It is the same discipline we bring to ",
      linkText: "every engagement",
      href: "/capabilities",
      after: ".",
    },
  },

  proof,

  builtFor: {
    h2: "Who this is for",
    body: "Charter operators, jet card and membership programmes, fractional programmes, aircraft management companies, and FBO or terminal groups with a consumer acquisition motive.",
    disqualifier:
      "This is not a fit for operators looking for a monthly report and a low retainer. The model depends on staying present across a long decision cycle, which means committing to a window long enough for the cycle to complete. If the plan is a thirty-day test, the honest answer is that you will not learn anything from it, and we will say so before you spend the money.",
  },

  engagement: {
    h2: "The first ninety days",
    steps: [
      {
        period: "Weeks 1–2",
        body: "Audience construction and CRM instrumentation. No media runs until deal-level attribution is confirmed working end to end.",
      },
      {
        period: "Weeks 3–4",
        body: "CTV and video into market against the modelled household audience. Creative differentiated by product tier from the start.",
      },
      {
        period: "Weeks 5–8",
        body: "Retargeting and social layers activated as the pool builds. Search aligned to the terms buyers actually use, not the terms the category uses about itself.",
      },
      {
        period: "Weeks 9–12",
        body: "First deal-level read. Channel roles assessed against attributed opportunities, not clicks. Budget reallocated on evidence.",
      },
    ],
  },

  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "How do you reach private aviation buyers without wasting budget?",
        a: "By building the audience before the media plan. We combine modelled household wealth, business ownership and executive signals, and aviation-adjacent behavioural data, then use that single audience definition across CTV, social and search so the channels reinforce each other instead of competing for the same impressions.",
      },
      {
        q: "What does CTV actually do for a private aviation brand?",
        a: "It reaches high-net-worth households before they enter the category. In our experience it produces the highest average deal value of any channel in an aviation programme, because it influences which operators a buyer considers at all — and that is decided long before anyone opens a search tab.",
      },
      {
        q: "How long before we see results?",
        a: "Expect a meaningful deal-level read at around ninety days, and expect early clicks and conversions to tell you very little. The decision cycle at these price points runs months, so a campaign judged on a two-week window will systematically undercount its own performance.",
      },
      {
        q: "How do you measure return when deals close months later and offline?",
        a: "We instrument against the client's CRM and report attributed opportunities at the deal level, keeping pipeline and closed revenue separate. Platform-reported conversions are not used as the primary measure of success in this category.",
      },
      {
        q: "Do you work with more than one operator at a time?",
        a: "Conflicts are handled explicitly at the start of any engagement, in writing, before commercial terms are discussed.",
      },
    ],
  },

  cta: {
    h2Line1: "Selective",
    h2Line2: "by design",
    body: "We take a limited number of engagements each quarter. If you operate in private aviation and acquisition cost is the constraint, apply and we will tell you honestly whether this model fits.",
  },

  related: {
    h2: "Related reading",
    links: [
      {
        href: "/insights/private-jet-charter-marketing-digital",
        label: "Private jet charter marketing in a digital-first world",
      },
      {
        href: "/insights/high-net-worth-consumer-advertising",
        label: "Advertising to high-net-worth consumers",
      },
      {
        href: "/insights/incrementality-vs-attribution-advertising",
        label: "Incrementality versus attribution in advertising",
      },
    ],
  },
}

export default function IndustryPrivateAviation() {
  return <IndustryPageLayout content={content} />
}
