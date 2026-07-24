import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  alternates: {
    canonical: "https://www.stillwatermedia.io/insights/millionaire-household-targeting-digital",
  },
  title: "Millionaire Household Targeting: A Digital Playbook",
  description:
    "How to find and reach millionaire households with digital media — data sources, segmentation models, and channel strategy for luxury brands. A Stillwater Media playbook.",
  openGraph: {
    title: "The Millionaire Household Targeting Playbook",
    description:
      "Net worth isn't a targetable field in any DSP. Here's how luxury brands actually find and reach millionaire households across CTV, programmatic, and DOOH.",
    type: "article",
    url: "https://www.stillwatermedia.io/insights/millionaire-household-targeting-digital",
    images: [
      {
        url: "/images/millionaire-household-targeting-digital.png",
        width: 1200,
        height: 630,
        alt: "Aerial view of an affluent suburban neighborhood with large estate homes symbolizing millionaire household targeting for digital advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Millionaire Household Targeting Playbook",
    description:
      "Net worth isn't a DSP targeting field. Here's the data stack and segmentation model luxury brands use to actually reach millionaire households.",
    images: ["/images/millionaire-household-targeting-digital.png"],
  },
}

export default function MillionaireHouseholdTargetingDigitalPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Millionaire Household Targeting Playbook",
    description:
      "A practical guide to finding and reaching millionaire households with digital media: the data sources, segmentation models, and channel mix that actually work for luxury and high-consideration brands.",
    image: {
      "@type": "ImageObject",
      url: "https://www.stillwatermedia.io/images/millionaire-household-targeting-digital.png",
      width: 1200,
      height: 630,
      caption:
        "Millionaire households don't self-identify in any ad platform — reaching them requires layered data, not a single targeting toggle.",
    },
    author: {
      "@type": "Organization",
      name: "Stillwater Media",
      url: "https://www.stillwatermedia.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Stillwater Media",
      url: "https://www.stillwatermedia.io",
      logo: {
        "@type": "ImageObject",
        url: "/stillwater-logo.png",
      },
    },
    datePublished: "2026-06-14T08:00:00-05:00",
    dateModified: "2026-06-14T08:00:00-05:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.stillwatermedia.io/insights/millionaire-household-targeting-digital",
    },
    keywords:
      "millionaire household targeting digital, wealth-based audience segmentation, affluent lookalike modeling, high-net-worth audience segments, HNW audience digital advertising",
    articleSection: "Affluent Audience Strategy",
    wordCount: 2095,
    inLanguage: "en-US",
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, {"@type":"BreadcrumbList","@id":"https://www.stillwatermedia.io/insights/millionaire-household-targeting-digital#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.stillwatermedia.io"},{"@type":"ListItem","position":2,"name":"Insights","item":"https://www.stillwatermedia.io/insights"},{"@type":"ListItem","position":3,"name":"The Millionaire Household Targeting Playbook","item":"https://www.stillwatermedia.io/insights/millionaire-household-targeting-digital"}]}, {"@type":"FAQPage","@id":"https://www.stillwatermedia.io/insights/millionaire-household-targeting-digital#faq","mainEntity":[{"@type":"Question","name":"Q1: Can you target millionaires directly on Facebook, Google, or The Trade Desk?","acceptedAnswer":{"@type":"Answer","text":"A1: No. No major ad platform has a verified \"net worth\" or \"millionaire\" targeting field. What's available are modeled proxies — household income estimates, property value data, and behavioral signals — that correlate with wealth but aren't direct measurements. Effective millionaire household targeting combines several of these proxies rather than relying on any single one."}},{"@type":"Question","name":"Q2: What is the most accurate way to reach affluent households digitally?","acceptedAnswer":{"@type":"Answer","text":"A2: Layering data sources produces the most accurate results: start with first-party customer data if available, add modeled household income or property value data as a filter, incorporate geographic precision (affluent zip codes or neighborhoods), and layer behavioral purchase-intent signals on top. No single data source alone reliably identifies affluent households."}},{"@type":"Question","name":"Q3: How many millionaire households are there in the U.S.?","acceptedAnswer":{"@type":"Answer","text":"A3: Roughly 8 million U.S. households have a net worth over $1 million excluding their primary residence, representing just over 6% of all households according to Federal Reserve Survey of Consumer Finances data. This concentration makes precise targeting essential — broad national campaigns waste the large majority of impressions on non-affluent audiences."}},{"@type":"Question","name":"Q4: What's the difference between income targeting and net worth targeting?","acceptedAnswer":{"@type":"Answer","text":"A4: Income reflects current cash flow, while net worth reflects accumulated assets — and they don't always align. A high-income dual-professional household and a lower-income retiree with significant accumulated wealth can both be \"affluent\" but have very different spending behaviors. Most luxury brands should prioritize discretionary spending propensity over either metric alone."}},{"@type":"Question","name":"Q5: Does affluent lookalike modeling actually work?","acceptedAnswer":{"@type":"Answer","text":"A5: It works well when seeded correctly — using your highest lifetime-value converters, not general website visitors or social engagers — and poorly when seeded from low-intent traffic. A smaller seed list of genuinely high-value customers produces tighter, more efficient lookalike audiences than a larger list of low-quality engagement data."}}]}],
  }

  return (
    <ArticleLayout
      title="The Millionaire Household Targeting Playbook"
      author="Stillwater Media"
      date="June 14, 2026"
      readingTime="11 min"
      category="Affluent Audience Strategy"
      image="/images/millionaire-household-targeting-digital.png"
      imageAlt="Stillwater Media — millionaire household targeting digital advertising aerial view of an affluent gated neighborhood at dusk"
      imageCaption="Millionaire households are geographically clustered and behaviorally distinct — the question is whether your media plan is built to find them."
      schemaMarkup={schemaMarkup}
    >
      <p>
        Here's the uncomfortable truth most agencies won't say out loud: there is no "net worth" field in The Trade
        Desk, DV360, or Amazon DSP. Millionaire household targeting digital campaigns don't work by flipping a switch
        that says "show this only to millionaires." Net worth is not observable, not self-reported at scale, and not
        something any ad platform collects directly. Every vendor that claims otherwise is selling you a modeled proxy —
        the only question is whether that proxy is built well.
      </p>

      <p>
        For luxury brands, this distinction isn't academic. The U.S. has roughly 8 million households with a net worth
        over $1 million excluding primary residence, according to data cited by wealth research firms — a little over 6%
        of all households. Spread across the country's 330 million-person population and the noise of a national
        programmatic buy, that 6% is a needle in a haystack unless your targeting stack is built specifically to isolate
        it. This playbook breaks down how Stillwater Media actually finds and reaches these households: the data layers
        that work, the ones that are mostly marketing claims, and how to combine them into a media plan that doesn't
        waste two-thirds of its impressions on people who will never buy.
      </p>

      <hr className="my-8" />

      <h2>Why "Millionaire" Isn't a Targeting Category</h2>

      <p>
        When a CMO asks for millionaire household targeting, what they usually mean is "reach people who can afford and
        are inclined to buy what we sell." That's a behavioral and economic profile, not a single data point — and
        conflating the two is the single most common mistake in affluent media planning.
      </p>

      <p>
        Consider two households both worth roughly $2 million. One is a 68-year-old couple who paid off their home
        decades ago, holds most of their wealth in retirement accounts, and spends conservatively. The other is a
        42-year-old dual-income professional household with a large mortgage, two leased vehicles, and active
        discretionary spending on travel, dining, and home renovation. Both are "millionaire households" by net worth.
        Only one of them is a relevant audience for most luxury brands — and it's usually the second one, despite having
        less total wealth on paper.
      </p>

      <p>
        This is why Stillwater doesn't lead affluent campaigns with net worth as the primary filter. We lead with{" "}
        <strong>propensity to spend in-category</strong>, and use wealth indicators as a qualifying layer underneath
        that.
      </p>

      <hr className="my-8" />

      <h2>The Data Stack: What Actually Works</h2>

      <p>
        Reaching millionaire households digitally requires stacking several data sources, because no single source is
        both accurate and scalable. Here's how the layers break down, roughly in order of reliability:
      </p>

      <ul>
        <li>
          <strong>1. First-party transaction and CRM data.</strong> If your brand already has any customer data — even a
          few thousand records — this is your highest-signal source. Match rates back to identity graphs run 60-80% for
          well-hygiened files, and the resulting lookalike models inherit real purchase behavior rather than modeled
          assumptions.
        </li>
        <li>
          <strong>2. Modeled household income and net worth (third-party data providers).</strong> Companies like
          Experian, Acxiom, and Epsilon maintain household-level models built from public records (property values,
          mortgage data), survey panels, and credit-adjacent signals. These models are directionally useful — a
          household modeled in the top 1% of income is meaningfully more likely to be affluent than one in the 50th
          percentile — but they're probabilistic, not verified. Expect 70-85% directional accuracy at the household
          level, lower at the individual level.
        </li>
        <li>
          <strong>3. Geographic and property-value signals.</strong> Home value, lot size, and neighborhood median
          income correlate strongly with household wealth, and unlike income models, property data is largely a matter
          of public record. Geo-fencing affluent zip codes, specific neighborhoods, or even individual high-value
          parcels (via geofencing technology) is one of the most underused tactics in luxury media — and one of the most
          precise.
        </li>
        <li>
          <strong>4. Behavioral and contextual signals.</strong> What someone does online is often a better predictor
          than what a model says about their bank account. Searching for private jet charter, browsing $200K+ vehicle
          configurators, or engaging with premium real estate listings are stronger purchase-intent signals than a
          modeled income decile — these are the "luxury buyer intent signals" that should anchor any affluent campaign.
        </li>
        <li>
          <strong>5. Premium content and platform context.</strong> Where someone spends attention is a wealth proxy in
          itself. Audiences on Disney+, premium financial news sites, golf and aviation content, and first-class travel
          apps over-index for affluence in ways that are both measurable and contextually brand-safe.
        </li>
      </ul>

      <hr className="my-8" />

      <h2>Building the Segmentation Model</h2>

      <p>
        A well-built millionaire household targeting strategy layers these sources rather than relying on any one.
        Here's the practical sequence we use:
      </p>

      <ul>
        <li>
          <strong>Start with first-party data, if any exists.</strong> Even a customer list of a few hundred high-LTV
          buyers can seed a lookalike model that outperforms any off-the-shelf affluent segment.
        </li>
        <li>
          <strong>Layer in modeled wealth and income data as a filter, not a target.</strong> Use it to exclude clearly
          mismatched audiences (e.g., suppress household income under $100K for a $150K+ vehicle campaign) rather than to
          define the entire audience.
        </li>
        <li>
          <strong>Add geographic precision.</strong> Identify the zip codes, counties, or specific neighborhoods where
          your historical customers concentrate, and weight media delivery toward those geographies — even within a
          national buy.
        </li>
        <li>
          <strong>Layer behavioral intent on top.</strong> This is the difference between "probably affluent" and
          "actively in-market." A household that is both modeled-affluent and currently researching your category is
          exponentially more valuable than either signal alone.
        </li>
        <li>
          <strong>Validate with holdout testing.</strong> Run a geo-holdout or audience-holdout test to confirm that the
          layered segment actually converts at a higher rate than a broader buy — don't assume the model works just
          because the inputs sound sophisticated.
        </li>
      </ul>

      <hr className="my-8" />

      <h2>Channel-by-Channel: Where Millionaire Households Actually Spend Time</h2>

      <p>
        Different channels offer different precision-to-scale tradeoffs for affluent targeting. Here's how we think
        about the mix:
      </p>

      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Affluent Targeting Precision</th>
            <th>Relative Scale</th>
            <th>Best Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CTV (Disney+, Netflix, Prime Video)</td>
            <td>Medium-High (household income + content context)</td>
            <td>High</td>
            <td>Brand awareness with affluent content adjacency</td>
          </tr>
          <tr>
            <td>Programmatic display/video</td>
            <td>Medium (modeled data + behavioral layering)</td>
            <td>Very High</td>
            <td>Full-funnel, retargeting, lookalike scaling</td>
          </tr>
          <tr>
            <td>DOOH (affluent zip codes, private clubs)</td>
            <td>Very High (geographic precision)</td>
            <td>Low-Medium</td>
            <td>Hyper-local awareness, geofenced retargeting</td>
          </tr>
          <tr>
            <td>Streaming audio (Spotify Premium, podcasts)</td>
            <td>Medium (subscription tier + content)</td>
            <td>Medium</td>
            <td>Mid-funnel storytelling, commute-time reach</td>
          </tr>
          <tr>
            <td>Native/premium publisher placements</td>
            <td>Medium-High (editorial context)</td>
            <td>Medium</td>
            <td>Credibility-building, long-form consideration content</td>
          </tr>
          <tr>
            <td>Social (Meta, LinkedIn)</td>
            <td>Low-Medium (self-reported + inferred)</td>
            <td>Very High</td>
            <td>Lookalike scaling from first-party seed audiences</td>
          </tr>
        </tbody>
      </table>

      <p>
        No single row in this table is "the answer." The campaigns that perform best for our clients — JetLinx, FLY
        Exclusive, Financial Independence Group — combine high-precision, low-scale channels (DOOH, native) to build the
        seed audiences and creative context, with high-scale programmatic and CTV to extend reach against modeled
        lookalikes of those seed groups.
      </p>

      <hr className="my-8" />

      <h2>Platform Considerations: Where the Data Actually Connects</h2>

      <p>
        The data layers above only matter if they connect to the platforms doing the buying. In practice, the
        connective tissue is identity resolution — matching a household-level data record (income model, property data,
        behavioral signal) to a device or browser that a DSP can actually bid against.
      </p>

      <p>
        <strong>The Trade Desk</strong> offers the deepest third-party data marketplace access of the major DSPs, with
        direct integrations to providers like Experian, Epsilon, and Eyeota — making it the most flexible environment
        for layering modeled wealth data with behavioral segments. <strong>DV360</strong> leans more heavily on Google's
        own first-party signals (affinity and in-market audiences), which are strong for behavioral intent but offer
        less granular household-level wealth data than The Trade Desk's marketplace. <strong>Amazon DSP</strong> has a
        unique advantage for affluent targeting in retail-adjacent categories: Amazon's purchase history data is
        arguably the strongest real-world spending signal available at scale, since it reflects actual transactions
        rather than modeled estimates — though it's limited to Amazon's own data and doesn't extend to non-shopping
        behavioral signals.
      </p>

      <p>
        For CTV specifically, Disney+, Netflix, and Prime Video each offer their own first-party household data
        (subscription tier, content consumption, in some cases purchase history via Amazon), which can be layered with
        the DSP-side targeting described above when buying through their respective ad platforms or private marketplace
        deals.
      </p>

      <p>
        The practical implication: a millionaire household targeting strategy that works well on one DSP may need to be
        rebuilt — not just copied — for another, because the underlying data partnerships and identity graphs differ
        meaningfully. This is one of the most common reasons campaigns that perform well on one platform underperform
        when "the same audience" is pushed to a second platform without adjustment.
      </p>

      <hr className="my-8" />

      <h2>Affluent Lookalike Modeling: Getting It Right</h2>

      <p>
        Affluent lookalike modeling is one of the most misused tools in luxury media. The mistake we see most often:
        agencies build a lookalike model off website visitors or social engagers, without filtering for which of those
        visitors actually converted or had high order value. The result is a lookalike model of "people who clicked,"
        not "people who buy" — and it scales the wrong audience efficiently.
      </p>

      <p>
        The fix is straightforward but requires discipline: seed lookalike models exclusively from your highest-value
        converters — ideally customers in the top quartile of lifetime value — and refresh the seed list quarterly as
        new conversions come in. A 50,000-person seed list of actual high-LTV buyers will produce a tighter, more
        efficient lookalike than a 500,000-person list of general website visitors, even though the smaller list feels
        less "statistically robust" on paper.
      </p>

      <hr className="my-8" />

      <h2>Common Mistakes in Millionaire Household Targeting</h2>

      <ul>
        <li>
          <strong>Mistake 1: Treating modeled net worth as ground truth.</strong> Modeled wealth data is directionally
          useful at the aggregate level but noisy at the individual level. Use it to weight delivery, not to gate it
          entirely — overly aggressive net-worth filters often suppress reach into the 15-20% range where the model
          simply lacks data, even though many of those households are genuinely affluent.
        </li>
        <li>
          <strong>Mistake 2: Ignoring household composition.</strong> A $5 million net worth household with three kids
          in college has very different discretionary spending patterns than a $5 million household of empty-nesters.
          Layering household composition data (available from most data providers) sharpens targeting considerably for
          categories like luxury travel, real estate, and premium automotive.
        </li>
        <li>
          <strong>Mistake 3: Optimizing to CTR instead of downstream value.</strong> Affluent audiences often have
          lower click-through rates than general audiences — they're more selective with their attention — but convert
          at significantly higher values when they do engage. Campaigns optimized purely to CTR systematically
          de-prioritize affluent segments in favor of cheaper, higher-CTR — and lower-value — audiences.
        </li>
        <li>
          <strong>Mistake 4: Skipping frequency management.</strong> Millionaire households are a small enough universe
          that frequency caps matter enormously. Without disciplined capping, a campaign can burn 40%+ of its budget on
          repeat impressions to the same few thousand households within days.
        </li>
        <li>
          <strong>Mistake 5: No holdout group.</strong> Without a holdout, there's no way to know whether the "affluent"
          segment is actually outperforming a broader buy — or whether the premium CPMs are buying nothing but a
          narrative.
        </li>
      </ul>

      <hr className="my-8" />

      <h2>How to Measure Success</h2>

      <p>
        Standard digital KPIs — CTR, CPC, even ROAS in the short window — often understate the value of millionaire
        household targeting because the sales cycle for luxury purchases typically runs 30-90+ days. The metrics that
        matter more:
      </p>

      <ul>
        <li>
          <strong>Conversion value per converter</strong>, not conversion rate alone — a smaller number of high-value
          conversions can outperform a larger number of low-value ones
        </li>
        <li>
          <strong>Geo-holdout incrementality</strong> — comparing matched markets with and without the affluent-targeted
          campaign to isolate true lift
        </li>
        <li>
          <strong>Audience overlap with known high-LTV customers</strong> — using match-rate analysis to confirm the
          targeted audience genuinely resembles your best existing customers
        </li>
        <li>
          <strong>Frequency distribution</strong> — ensuring impression delivery isn't concentrated on a small
          repeat-exposed group
        </li>
      </ul>

      <hr className="my-8" />

      <h2>The Bottom Line</h2>

      <p>
        Millionaire household targeting digital campaigns succeed when they stop looking for a magic targeting checkbox
        and start treating affluence as a layered signal — first-party data where it exists, modeled wealth and
        geography as a filter, and behavioral intent as the activation trigger. The brands that get this right aren't
        necessarily spending more; they're spending more precisely, and they're validating that precision with holdout
        testing rather than assuming the targeting works because the data vendor's sales deck said so.
      </p>

      <p>
        If your current media plan treats "affluent" as a checkbox in a DSP rather than a layered strategy, it's worth a
        conversation. Stillwater Media accepts a limited number of new client engagements per quarter.
      </p>
    </ArticleLayout>
  )
}
