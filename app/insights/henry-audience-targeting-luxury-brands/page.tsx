import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/henry-audience-targeting-luxury-brands"
const title = "HENRY Audience Targeting for Luxury Brands (2026)"
const description =
  "HENRY audience targeting for luxury brands: who High Earners Not Rich Yet are, how to segment them, CPM and CAC benchmarks, and where they differ from HNW."
const image = "/images/henry-audience-targeting-luxury-brands.png"
const imageAlt =
  "A young professional couple on a modern city apartment terrace at golden hour with a skyline behind them"
const publishedTime = "2026-08-31T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "HENRY Audience Targeting: How Luxury Brands Reach High Earners Not Rich Yet",
    description:
      "Who HENRYs actually are, how to segment them without paying HNW CPMs, real CAC and CPM benchmarks, and which luxury categories should pursue them — from Stillwater Media.",
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HENRY Audience Targeting for Luxury Brands",
    description:
      "High income, low accumulated wealth, enormous discretionary spend. How to segment and buy the HENRY audience without overpaying for HNW data.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "What does HENRY mean in marketing?",
    answer:
      "HENRY stands for \u201cHigh Earner, Not Rich Yet\u201d — a household with strong current income but comparatively little accumulated wealth. In media planning terms the working definition is $150,000 to $500,000 in household income with under roughly $1 million in investable assets, which describes an estimated 12–18 million US households and represents the largest reachable pool of qualified demand for most premium and luxury brands.",
  },
  {
    question: "How is HENRY audience targeting different from high-net-worth targeting?",
    answer:
      "The two audiences buy under different constraints: HNW purchase decisions are limited by preference and timing, while HENRY decisions are limited by cash flow. That difference changes everything downstream — HENRYs respond to entry-tier products, visible financing, and value substantiation, they are far more reachable on ad-supported streaming because wealthier households buy ad-free tiers, and reaching them costs roughly 40–55% less per household than reaching a verified high-net-worth audience.",
  },
  {
    question: "Can you buy a HENRY audience segment from a data provider?",
    answer:
      "Not reliably. Segments sold under the HENRY label are typically modeled household income overlaid with an age filter, which is not the same construct and does not exclude genuinely wealthy households. The stronger approach is to build the segment in four layers — modeled income, active suppression of high investable-asset households, category behavior overlays, and a lookalike model trained on your own entry-tier customers — with the expectation that third-party income models run about 55–75% accurate at the $150K+ threshold.",
  },
  {
    question: "Which channels reach HENRY audiences most efficiently?",
    answer:
      "Ad-supported connected TV is the foundation, because ad-tier subscription penetration is meaningfully higher in the $150K–$300K income band than above $500K. Beyond CTV, the efficient mix is YouTube Select and connected-device YouTube at roughly $18–$32 CPM, host-read podcast placements at $25–$45 CPM, premium publisher inclusion lists, and retail media networks, which sidestep the income-model accuracy problem by targeting demonstrated purchase behavior instead of modeled income.",
  },
  {
    question: "Should luxury brands target HENRYs at all?",
    answer:
      "It depends on the price point and the availability of an entry rung. Premium DTC, luxury apparel, entry-tier automotive, luxury hospitality and travel, and accumulation-phase wealth management should pursue this cohort aggressively; private aviation, private clubs, and fine watches should pursue it selectively through jet cards, junior memberships, and sub-$10,000 pieces. Ultra-prime real estate, whole-aircraft sales, and family office services should not, because the audience cannot transact and the media spend dilutes the brand's positioning.",
  },
  {
    question: "How should HENRY campaign performance be measured?",
    answer:
      "Split conversions by wealth tier so that unsuppressed high-net-worth households are not credited to the HENRY line item, then evaluate acquisition against 36-month customer value rather than first-order value, because this cohort typically has lower initial purchase value and a steeper up-tier trajectory. Confirm the whole program with a geo or audience holdout run for at least six weeks, measuring incremental acquisition rather than attributed conversions.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "HENRY Audience Targeting: How Luxury Brands Reach High Earners Not Rich Yet",
      description:
        "A strategic guide to HENRY audience targeting for luxury and high-consideration brands, covering how High Earners Not Rich Yet differ from high-net-worth buyers, segmentation methods, channel selection, CPM and customer acquisition cost benchmarks, creative strategy, and measurement.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption:
          "A young professional couple on a city apartment terrace at golden hour, representing the emerging affluent HENRY audience",
      },
      author: { "@type": "Organization", name: "Stillwater Media", url: "https://www.stillwatermedia.io" },
      publisher: {
        "@type": "Organization",
        name: "Stillwater Media",
        url: "https://www.stillwatermedia.io",
        logo: {
          "@type": "ImageObject",
          url: "https://www.stillwatermedia.io/images/stillwater-media-logo.png",
          width: 600,
          height: 60,
        },
      },
      datePublished: publishedTime,
      dateModified: publishedTime,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords:
        "HENRY audience targeting, marketing to HENRYs, high earners not rich yet, emerging affluent audience, aspirational luxury consumers, household income targeting advertising, affluent audience segmentation, luxury brand customer acquisition, premium DTC audience strategy, HENRY vs HNW targeting",
      articleSection: "Audience Strategy",
      wordCount: 2349,
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stillwatermedia.io" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.stillwatermedia.io/insights" },
        { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
}

export default function Page() {
  return (
    <ArticleLayout
      title="HENRY Audience Targeting: How Luxury Brands Reach High Earners Not Rich Yet"
      author="Stillwater Media"
      date="August 31, 2026"
      readingTime="13 min read"
      category="Audience Strategy"
      image={image}
      imageAlt={imageAlt}
      imageCaption="The HENRY household has the income of a luxury buyer and the balance sheet of someone still building one — and that gap defines everything about how to reach them."
      schemaMarkup={schemaMarkup}
    >
      <p>
        HENRY audience targeting is the practice of reaching households with high current income and comparatively low
        accumulated net worth — the &quot;High Earners, Not Rich Yet&quot; cohort, typically defined as $150,000 to
        $500,000 in household income with under roughly $1 million in investable assets. They are not high-net-worth
        buyers, and treating them as such is one of the most reliable ways to waste a luxury media budget. They are also,
        for most premium brands, the largest reachable pool of qualified demand in the United States, and the population
        from which tomorrow&apos;s HNW customers are drawn.
      </p>
      <p>
        The distinction matters commercially because the two groups buy differently. A high-net-worth household purchasing
        a $9 million residence or a fractional aircraft share is making a decision constrained by preference. A HENRY
        household purchasing a $2,800 watch, a first $95,000 vehicle, or a junior club membership is making a decision
        constrained by cash flow. Same category, entirely different buying psychology, entirely different media
        requirement.
      </p>

      <h2>Who HENRYs Actually Are</h2>
      <p>
        The term originated in personal finance journalism and has since been adopted, loosely, by marketers who use it to
        mean anyone youngish with money. A working definition needs boundaries. In planning work we use three criteria
        together, because any one alone produces a bad segment:
      </p>
      <ul>
        <li>
          <strong>Income:</strong> $150,000–$500,000 household, roughly the 85th to 98th percentile of US household
          income.
        </li>
        <li>
          <strong>Liquid net worth:</strong> under about $1 million, which excludes the genuinely wealthy while retaining
          households with strong income.
        </li>
        <li>
          <strong>Spending posture:</strong> meaningful discretionary outlay on categories with status or experience value
          — travel, dining, apparel, vehicles, fitness, home.
        </li>
      </ul>
      <p>
        By that definition the HENRY population in the US sits in the range of 12–18 million households depending on where
        the income floor is drawn — roughly two to three times the size of the household population above $500,000 in
        income, and dramatically larger than the sub-2-million households with over $5 million in investable assets. That
        size difference is the entire strategic argument for HENRY audience targeting: the cohort is reachable at scale, at
        CPMs well below what wealth-tier data commands, and it converts on entry-tier products that most luxury brands
        already sell.
      </p>

      <h3>The Four HENRY Sub-Segments That Behave Differently</h3>
      <p>Treating HENRYs as one audience is the first mistake. We consistently see four distinct behavioral clusters:</p>
      <ol>
        <li>
          <strong>Early-career high earners (28–36).</strong> Technology, finance, law, medicine, consulting. High income,
          high student debt or none at all depending on field, minimal home equity, extremely high category
          experimentation. Best prospects for premium DTC, apparel, travel, and fitness.
        </li>
        <li>
          <strong>Dual-income, no children (30–45).</strong> The highest discretionary spend density of any group in the
          cohort. Best prospects for luxury travel, hospitality, dining, automotive, and experience-led memberships.
        </li>
        <li>
          <strong>Established income, constrained liquidity (38–52).</strong> Strong salaries absorbed by mortgages,
          private school tuition, and family costs. They buy considered, durable, justifiable purchases — vehicles,
          watches, home improvement, wealth management relationships.
        </li>
        <li>
          <strong>Recently liquid (any age).</strong> Equity events, business sales, inheritance. They cross into HNW
          behavior quickly and are the single most valuable sub-segment to identify early. See our guidance on{" "}
          <a href="/insights/luxury-buyer-intent-signals">luxury buyer intent signals</a> for how these households
          announce themselves before the data providers reclassify them.
        </li>
      </ol>
      <p>
        A brand running one creative and one bid strategy across all four is averaging away the differences that determine
        performance.
      </p>

      <h2>HENRY vs HNW vs UHNW: A Planning Comparison</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>HENRY</th>
              <th>HNW</th>
              <th>UHNW</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Household income</strong>
              </td>
              <td>$150K–$500K</td>
              <td>$500K–$1M+</td>
              <td>Often irrelevant to wealth</td>
            </tr>
            <tr>
              <td>
                <strong>Investable assets</strong>
              </td>
              <td>Under ~$1M</td>
              <td>$1M–$30M</td>
              <td>$30M+</td>
            </tr>
            <tr>
              <td>
                <strong>US household count (planning estimate)</strong>
              </td>
              <td>12–18 million</td>
              <td>6–8 million</td>
              <td>100K–150K</td>
            </tr>
            <tr>
              <td>
                <strong>Typical audience data CPM premium</strong>
              </td>
              <td>$0.75–$2.00</td>
              <td>$2.00–$4.50</td>
              <td>$3.50–$7.00</td>
            </tr>
            <tr>
              <td>
                <strong>Achievable programmatic CPM range</strong>
              </td>
              <td>$14–$30</td>
              <td>$25–$45</td>
              <td>$40–$80+</td>
            </tr>
            <tr>
              <td>
                <strong>Purchase decision constraint</strong>
              </td>
              <td>Cash flow and financing</td>
              <td>Preference and timing</td>
              <td>Access and discretion</td>
            </tr>
            <tr>
              <td>
                <strong>Typical sales cycle</strong>
              </td>
              <td>2–10 weeks</td>
              <td>4 weeks–6 months</td>
              <td>3–18 months</td>
            </tr>
            <tr>
              <td>
                <strong>Best-performing channels</strong>
              </td>
              <td>CTV, YouTube Select, podcasts, social, premium display</td>
              <td>CTV, business news, DOOH, endemic publishers</td>
              <td>Direct relationships, private events, referral</td>
            </tr>
            <tr>
              <td>
                <strong>Creative emphasis</strong>
              </td>
              <td>Value justification, craft, entry access</td>
              <td>Provenance, exclusivity, service</td>
              <td>Discretion, relationship, bespoke</td>
            </tr>
            <tr>
              <td>
                <strong>Realistic CAC range (premium products)</strong>
              </td>
              <td>$180–$900</td>
              <td>$900–$4,000</td>
              <td>$5,000–$40,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The row that surprises most CMOs is achievable CPM. HENRY inventory is not cheap in absolute terms, but reaching an
        emerging-affluent household costs roughly 40–55% less than reaching a verified HNW household — and for products
        priced between $1,000 and $75,000, that difference usually outweighs the higher conversion rate the wealthier
        audience delivers.
      </p>

      <h2>How to Build HENRY Audience Targeting Segments</h2>
      <p>
        There is no reliable off-the-shelf &quot;HENRY&quot; segment. The ones sold under that name are usually income
        models with a young-adult age filter applied, which is not the same thing. Build the segment yourself from four
        layers.
      </p>
      <p>
        <strong>Layer 1: Income modeling with honest accuracy expectations.</strong> Modeled household income segments
        from major data providers are directionally useful and individually unreliable. Third-party income segments
        typically show 55–75% accuracy against verified panels at the $150K+ threshold, and accuracy degrades as the
        threshold rises. Plan for the model to be right most of the time, not almost always, and never build a campaign
        whose economics require precision the data cannot deliver.
      </p>
      <p>
        <strong>Layer 2: Exclude the wealthy.</strong> This is the step nearly everyone skips. If you want HENRY behavior,
        suppress households with high investable-asset scores — otherwise your &quot;HENRY&quot; segment is simply an
        affluent segment with your best-converting HNW households included, and your reported results will be flattered by
        an audience you were not trying to buy. Suppression is also how you keep entry-tier messaging away from customers
        who should be seeing the flagship offer.
      </p>
      <p>
        <strong>Layer 3: Add behavior, not just demographics.</strong> Category consumption, premium subscription
        ownership, travel booking behavior, and vehicle ownership signals separate a $180,000 household that spends on your
        category from one that does not. Behavioral overlays typically improve conversion rate by 20–40% over income-only
        targeting in our accounts, at a modest CPM premium.
      </p>
      <p>
        <strong>Layer 4: Model against your own customers.</strong> The most durable version of HENRY audience targeting
        is a lookalike built from your own first-party file, filtered to customers who bought entry-tier products and
        constrained to the income band. This is the only version of the segment that reflects your actual economics rather
        than a data provider&apos;s definition. Our approach to this is detailed in{" "}
        <a href="/insights/affluent-lookalike-modeling">affluent lookalike modeling</a>.
      </p>

      <h2>Where HENRY Audiences Are Reachable</h2>
      <p>
        Channel selection differs meaningfully from HNW planning, mostly because HENRYs consume more ad-supported media.
        Wealthier households buy their way out of advertising; HENRYs, still optimizing cash flow, hold ad-supported
        streaming tiers at substantially higher rates.
      </p>
      <ul>
        <li>
          <strong>Ad-supported CTV and streaming.</strong> The core channel. Ad-tier subscription penetration is
          materially higher in the $150K–$300K band than above $500K, which means the HENRY cohort is genuinely
          addressable on premium services in a way the wealthiest households increasingly are not.
        </li>
        <li>
          <strong>YouTube Select and connected-device YouTube.</strong> Strong reach against early-career high earners at
          CPMs of roughly $18–$32 in premium lineups.
        </li>
        <li>
          <strong>Podcasts.</strong> Business, finance, health, and narrative categories over-index heavily. Host-read
          placements in the $25–$45 CPM range remain among the most efficient consideration drivers we buy for this
          cohort.
        </li>
        <li>
          <strong>Premium social.</strong> Still effective for the 28–40 group, particularly for premium DTC, though rising
          costs and weakening signal make it a supporting channel rather than a foundation.
        </li>
        <li>
          <strong>Premium publisher display and native.</strong> Efficient for the established-income cluster, best bought
          through inclusion lists rather than broad category buys.
        </li>
        <li>
          <strong>Retail media networks.</strong> Increasingly viable for HENRY reach because purchase data resolves the
          income-model accuracy problem — you are targeting demonstrated spending rather than modeled income.
        </li>
      </ul>
      <p>
        Note what is missing: the private-aviation-and-yacht channel mix. DOOH at private terminals, endemic wealth
        publications, and event sponsorships are HNW instruments. Running them against a HENRY strategy produces beautiful
        media plans and poor economics.
      </p>

      <h2>Creative and Offer Strategy for HENRY Audience Targeting</h2>
      <p>Media targeting fails quietly when the creative is built for a different buyer. Three adjustments matter most.</p>
      <p>
        <strong>Justify, don&apos;t merely signal.</strong> HNW creative can rest on provenance and restraint. HENRY buyers
        need a reason that survives a conversation with a spouse: durability, resale value, warranty, craft, cost-per-use.
        The most effective luxury creative we run for this cohort spends its middle third on substantiation.
      </p>
      <p>
        <strong>Give the entry point a name.</strong> Fractional and card programs in aviation, certified pre-owned and
        entry trims in automotive, associate or junior tiers in private clubs, accumulation-phase advisory offerings in
        wealth management. HENRYs convert on a defined first rung far more readily than on an open invitation to the
        flagship.
      </p>
      <p>
        <strong>Make financing visible without making it the message.</strong> Payment structure removes the cash-flow
        constraint that is the actual barrier. Leading with it cheapens the brand; hiding it loses the sale. Place it at
        the third or fourth beat of the sequence, after the product case is made.
      </p>

      <h2>A 90-Day HENRY Program Structure</h2>
      <p>For a brand starting from zero, this is the sequence we run rather than launching a full plan on day one.</p>
      <p>
        <strong>Days 1–15: Define the segment and the entry rung.</strong> Agree the income band, the asset suppression
        rule, and the specific product or tier the campaign is selling. If the brand cannot name the entry rung, the media
        cannot fix it — that work happens first.
      </p>
      <p>
        <strong>Days 16–30: Build and size.</strong> Construct the four-layer segment, size it in the DSP, and check reach
        against the plan. A well-built HENRY segment for a national brand should size in the range of 6–12 million
        addressable households; if it sizes under 2 million, the overlays are too tight and delivery will be starved.
      </p>
      <p>
        <strong>Days 31–60: Run a structured test, not a rollout.</strong> Three to five cells maximum, split by
        sub-segment and by channel, with matched creative and a holdout region excluded from all of them. Resist
        optimizing the cells against each other before week four — early performance differences in a 2–10 week
        consideration cycle are mostly noise.
      </p>
      <p>
        <strong>Days 61–90: Read, cut, and concentrate.</strong> Kill the bottom cells outright rather than shaving budget
        from them, split conversions by wealth tier, read the holdout, and move surviving budget into the two or three
        combinations that cleared both attention and qualified engagement thresholds. Expect roughly half the cells to
        fail. That is the point of running them.
      </p>
      <p>
        The discipline that matters here is refusing to declare victory early. HENRY campaigns produce encouraging click
        and engagement metrics almost immediately, because the cohort is large, media-literate, and interested in the
        category — which makes them the easiest audience in luxury to be wrong about.
      </p>

      <h2>Measurement: The Trap of Flattering Attribution</h2>
      <p>Two measurement problems recur in HENRY programs.</p>
      <p>
        The first is <strong>wealth contamination</strong>. If HNW households are not suppressed, they will convert at
        higher rates, and last-click reporting will credit those conversions to the HENRY line item. The fix is to report
        conversions split by wealth tier, every time.
      </p>
      <p>
        The second is <strong>LTV timing</strong>. HENRY customers frequently have lower first-purchase value but longer,
        steeper spending trajectories — they are the cohort most likely to move up-tier within three to five years. Judging
        them on first-order value understates their worth, often by a factor of two or more once repeat and up-tier
        purchases are counted. Model HENRY acquisition against 36-month value, not against initial order value, and hold
        the line when finance asks why blended <a href="/insights/customer-acquisition-cost-luxury-brands">CAC</a> rose.
      </p>
      <p>
        Both problems are resolved the same way as everything else on a serious media plan: with a holdout. Run a geo or
        audience holdout for at least six weeks and measure incremental acquisition rather than attributed conversions,
        using the approach in{" "}
        <a href="/insights/incrementality-testing-luxury-brands">incrementality testing for luxury brands</a>.
      </p>

      <h2>Which Luxury Categories Should Actually Pursue HENRYs</h2>
      <p>Not all of them should. Our working guidance:</p>
      <ul>
        <li>
          <strong>Pursue aggressively:</strong> premium DTC, luxury apparel and accessories, entry-tier automotive, luxury
          hospitality and travel, fitness and wellness memberships, wealth management aimed at accumulation-phase clients.
        </li>
        <li>
          <strong>Pursue selectively, at the entry rung only:</strong> private aviation via jet cards and fractional
          programs, private clubs via junior and associate tiers, luxury watches and jewelry under $10,000.
        </li>
        <li>
          <strong>Do not pursue:</strong> ultra-prime real estate, whole-aircraft sales, bespoke commissions, family office
          services. The cohort cannot transact, and the media spent reaching them is spent twice — once in wasted
          impressions, once in the brand dilution of appearing where the flagship shouldn&apos;t.
        </li>
      </ul>
      <p>
        One further caution on brand architecture. A luxury brand that sells the flagship and the entry rung to the same
        audience with the same message erodes both. The flagship buyer sees financing language attached to a product they
        were never going to finance; the entry buyer sees pricing that makes the brand feel unreachable and disengages.{" "}
        <a href="/insights/wealth-based-audience-segmentation">Wealth-tier suppression</a> is not only a targeting hygiene
        issue — it is what allows two different messages to coexist under one brand without either one undermining the
        other. Every serious HENRY program we run is paired with a suppression rule and a separate HNW line item carrying
        different creative — including full{" "}
        <a href="/insights/premium-dtc-brand-advertising">premium DTC brand advertising</a> tracks — and the two are
        reported separately from the first week.
      </p>
      <p>
        The strategic frame we recommend to clients is that HENRY audience targeting is a pipeline investment with a
        near-term revenue justification. It should pay for itself on entry-tier volume within the current fiscal year, and
        the compounding value — customers who move up-tier as their balance sheets catch up to their incomes — is the
        return you collect later.
      </p>

      <p>
        Stillwater Media accepts a limited number of engagements each quarter. If you are a luxury or high-consideration
        brand with customer LTV above $5,000 and a sales cycle longer than 30 days,{" "}
        <a href="/apply">apply here</a>.
      </p>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((f) => (
        <div key={f.question}>
          <h3>{f.question}</h3>
          <p>{f.answer}</p>
        </div>
      ))}
    </ArticleLayout>
  )
}
