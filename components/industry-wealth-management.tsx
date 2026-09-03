import IndustryPageLayout, { type IndustryContent, type ProofEntry } from "@/components/industry-page-layout"

// Proof entries are added only after written client approval covering the
// metric, the time period, the measurement method, and the anonymised
// description. Empty array renders nothing — that is intended.
const proof: ProofEntry[] = []

export const content: IndustryContent = {
  slug: "wealth-management-advertising",
  breadcrumbName: "Wealth Management",

  hero: {
    eyebrow: "Industries",
    h1Line1: "Wealth Management Advertising Built Around",
    h1Line2: "cost per closed client, not cost per lead",
    subhead:
      "A practice measured on lead volume will reliably produce more leads and a worse business. We build media against the population with the balance-sheet capacity to become a funded relationship, and we report the cost of getting one.",
    image: "/images/industries-wealth-management.png",
    imageAlt:
      "A private high-floor study at dusk lit by a single brass lamp, with a city skyline visible through floor-to-ceiling windows",
  },

  problem: {
    h2: "Why this category punishes the obvious metric",
    items: [
      {
        h3: "Lead volume is a vanity metric here",
        body: "Optimise toward form fills and the algorithm will find you people who fill in forms. That is a different population from people who move assets, and the gap between them is where most advisory media budgets disappear. The dashboard improves while the business does not.",
      },
      {
        h3: "Compliance narrows the creative surface before you start",
        body: "What can be claimed, how performance can be described, and which states you are licensed to transact in all constrain the media before a single impression is served. Creative built without those constraints in mind gets rejected late, expensively, and usually twice.",
      },
      {
        h3: "The qualified universe is a balance sheet, not a demographic",
        body: "Household net worth and investable assets are different variables and they behave differently in targeting. Age and income are weak proxies for both. A plan built on demographics will reach a lot of comfortable people who will never move a portfolio.",
      },
    ],
  },

  architecture: {
    h2: "How we assemble the channels",
    intro:
      "The sequence matters more than the channel list. Advisory purchases are trust purchases, which means the brand has to be familiar before the offer is relevant. Running capture channels without a demand layer produces a short, cheap, disappointing campaign.",
    items: [
      {
        h3: "CTV and premium video — category authority",
        body: "Streaming inventory against net-worth-banded households, establishing the firm as a credible custodian before any offer appears. In a trust category, the first job of media is to make the brand recognisable.",
      },
      {
        h3: "Programmatic display and native — the qualification layer",
        body: "Net-worth-banded audiences layered with retirement, rollover and guaranteed-income intent. This is where the audience definition does the real work, and where a broad plan quietly bleeds budget.",
      },
      {
        h3: "Paid social — capture and retargeting",
        body: "Lower-funnel capture against warm audiences, sequenced from the demand the upper funnel created. Effective, and consistently over-credited by last-touch reporting.",
      },
      {
        h3: "Search — advisor and product intent",
        body: "Terms for advisors, products and the specific questions that precede a rollover. Low volume, high intent, and best treated as the closing end of the chain rather than the whole of it.",
      },
    ],
    outro:
      "Geography is built from the licensed-state list, not from wealth geography. Serving media into a state you cannot transact in is pure waste, and it is the most common structural error we see in this category.",
  },

  dataLayer: {
    h2: "The audience is the strategy",
    intro:
      "Everything downstream depends on defining the qualified universe correctly, and in this category that definition has more than one dimension. We build it in bands rather than against a single floor, because the reachable universe and the cost to reach it change sharply between tiers.",
    items: [
      {
        h3: "Household net worth, in bands",
        body: "Not a single threshold. The scale, the cost and the competitive pressure are different at each tier, and the right tier depends on the practice's actual minimum.",
      },
      {
        h3: "Investable and liquid assets",
        body: "A higher-confidence subset where the data supports it. Net worth including primary residence and net worth available to deploy are not the same buyer.",
      },
      {
        h3: "Life-stage and liquidity events",
        body: "Business exit, inheritance, job transition, approaching or recent retirement. These moments create deployable assets and a reason to choose an advisor now.",
      },
      {
        h3: "Product and planning intent",
        body: "Annuities, guaranteed income, principal protection, rollovers, tax-deferred growth, estate and legacy planning, and active research into advisors themselves.",
      },
    ],
  },

  measure: {
    h2: "What we measure",
    leadParagraphs: [
      "Cost per closed client, with the acquisition cost of a funded relationship kept separate from the cost of an appointment and the cost of a lead. Those three numbers move independently, and a practice that only watches the last one will make decisions that look correct and are not.",
    ],
    linkedParagraph: {
      before:
        "Where a practice runs several channels at once, we argue for a holdout rather than a channel-by-channel attribution fight. Parallel campaigns judged on platform-reported cost per acquisition reward whichever platform reports most generously, not whichever actually produced the client. That is a measurement design problem, and it is solvable before the money is spent — which is the approach we take across ",
      linkText: "every engagement",
      href: "/capabilities",
      after: ".",
    },
  },

  proof,

  builtFor: {
    h2: "Who this is for",
    body: "Independent advisory practices, RIAs, annuity and life insurance distributors, retirement planning specialists, and marketing organisations supporting a national advisor base.",
    disqualifier:
      "Not a fit for a practice that wants to be judged on lead volume in month one. If the internal metric is leads, the media will optimise to leads, and the cost per closed client will get worse while the report gets better. We would rather decline than deliver that.",
  },

  engagement: {
    h2: "The first ninety days",
    steps: [
      {
        period: "Weeks 1–2",
        body: "Licensed-state list, qualified-universe definition and tracking setup. Agreement on what counts as a closed client before anything runs.",
      },
      {
        period: "Weeks 3–4",
        body: "Demand layer into market against the banded audience. Creative cleared against compliance constraints before launch, not after.",
      },
      {
        period: "Weeks 5–8",
        body: "Capture and retargeting layers activated. Intent signals tightened as real response data arrives.",
      },
      {
        period: "Weeks 9–12",
        body: "First cost-per-closed-client read, with lead, appointment and client costs reported separately.",
      },
    ],
  },

  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "How do you lower acquisition cost for an advisory practice?",
        a: "By changing what the media optimises toward. We define the qualified universe by balance-sheet capacity and intent rather than demographics, then report against funded relationships rather than form fills, so the optimisation pressure points at the outcome you actually want.",
      },
      {
        q: "What is a realistic cost per closed client in wealth management?",
        a: "It depends on the minimum, the product and the licensed footprint, and any agency quoting a universal benchmark is guessing. What is reasonable is to establish your current cost from your own data, then set a target against it and measure honestly.",
      },
      {
        q: "How do you handle state licensing in the media plan?",
        a: "The licensed-state list defines the geography before anything else is decided. Media served into a state you cannot transact in is wasted, and tightening geo after launch is far more expensive than getting the list first.",
      },
      {
        q: "Can you target by net worth, and how accurate is it?",
        a: "Yes, using modelled household wealth data, in bands rather than as a single threshold. It is modelled, not certain, which is why we treat it as a probability layer combined with intent signals rather than as a guarantee about any individual household.",
      },
      {
        q: "How do you compare programmatic fairly against a social funnel?",
        a: "With a holdout, and with both campaigns funded at a level where the comparison means something. A programmatic budget set well below the incumbent channel's spend loses the comparison on arithmetic rather than on merit, and everyone involved should agree on that before the test starts.",
      },
    ],
  },

  cta: {
    h2Line1: "Selective",
    h2Line2: "by design",
    body: "We take a limited number of engagements each quarter. If you run an advisory practice or distribute retirement products and acquisition cost is the constraint, apply and we will tell you honestly whether this model fits.",
  },

  related: {
    h2: "Related reading",
    links: [
      {
        href: "/insights/financial-advisor-advertising-programmatic",
        label: "Programmatic advertising for financial advisors",
      },
      {
        href: "/insights/wealth-based-audience-segmentation",
        label: "Wealth-based audience segmentation",
      },
      {
        href: "/insights/customer-acquisition-cost-luxury-brands",
        label: "Customer acquisition cost for luxury brands",
      },
    ],
  },
}

export default function IndustryWealthManagement() {
  return <IndustryPageLayout content={content} />
}
