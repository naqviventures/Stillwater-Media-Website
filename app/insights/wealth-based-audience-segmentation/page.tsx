import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/wealth-based-audience-segmentation"
const imagePath = "/images/wealth-based-audience-segmentation.png"

export const metadata: Metadata = {
  title: "Wealth-Based Audience Segmentation for Luxury Brands",
  description:
    "Wealth-based audience segmentation explained: income vs. net worth signals, five segment tiers, data source accuracy benchmarks, and activation playbooks.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Wealth-Based Audience Segmentation: How Luxury Brands Should Actually Tier Affluence",
    description:
      "A senior strategist's guide to wealth-based audience segmentation — why income-based targeting misidentifies the affluent, the difference between income, net worth, liquidity and spending capacity as segmentation axes, a five-tier segment framework with reachable scale by tier, data source accuracy benchmarks, and the activation playbook for each tier across CTV, programmatic, DOOH and audio.",
    type: "article",
    url: canonicalUrl,
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
        alt: "Wealth-based audience segmentation — Stillwater Media",
      },
    ],
    locale: "en_US",
    siteName: "Stillwater Media",
    publishedTime: "2026-08-18",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth-Based Audience Segmentation for Luxury Brands",
    description:
      "Household income is the weakest wealth signal available. The four segmentation axes, five reachable tiers, data accuracy benchmarks, and activation by channel.",
    images: [imagePath],
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Wealth-Based Audience Segmentation: How Luxury Brands Should Actually Tier Affluence",
      description:
        "A senior media strategist's guide to wealth-based audience segmentation for luxury and high-consideration brands — why household income is the weakest available proxy for purchasing capacity, the four distinct segmentation axes of income, net worth, liquidity and category spending propensity, a five-tier segment framework with realistic addressable scale and modeling accuracy at each tier, benchmark accuracy ranges for tax-assessor, financial-services, purchase-based and modeled data sources, the seeding requirements for affluent lookalike modeling, and channel-by-channel activation guidance across premium CTV, programmatic, DOOH and streaming audio.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${imagePath}`,
        width: 1200,
        height: 630,
        caption: "Wealth-based audience segmentation — Stillwater Media",
      },
      author: { "@type": "Organization", name: "Stillwater Media" },
      publisher: {
        "@type": "Organization",
        name: "Stillwater Media",
        logo: { "@type": "ImageObject", url: "https://www.stillwatermedia.io/logo.png" },
      },
      datePublished: "2026-08-18",
      dateModified: "2026-08-18",
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords:
        "wealth-based audience segmentation, affluent audience targeting, high-net-worth audience segments, millionaire household targeting digital, high income consumer targeting, luxury lifestyle audience segments, affluent lookalike modeling, ultra high net worth advertising targeting, premium consumer data partnerships, first-party data luxury advertising, luxury buyer intent signals",
      articleSection: "Audience Strategy",
      wordCount: 2349,
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stillwatermedia.io" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.stillwatermedia.io/insights" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wealth-Based Audience Segmentation",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is wealth-based audience segmentation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wealth-based audience segmentation divides an audience by financial capacity — net worth, investable assets, and demonstrated category spending — rather than by demographic proxies like household income or age. It exists because income measures how fast a household accumulates money, not how much it has available to spend, which is why income-based targeting systematically misses retirees, inheritors, and post-liquidity founders while over-including high-earning households with heavy financial obligations. For luxury and high-consideration brands, defining the eligible universe by net worth or liquidity and then prioritizing within it by behavioral spending signals produces materially better qualified reach.",
          },
        },
        {
          "@type": "Question",
          name: "Is household income a good way to target affluent consumers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is the weakest of the available wealth signals and should never be the sole qualifier. Household income of $250K or more describes roughly 12–14% of U.S. households and includes a large population of high-obligation, low-liquidity earners who cannot transact at luxury price points, while excluding asset-rich households whose reported income is modest. In our experience rebuilding inherited media plans, income-only affluent segments typically reach 60–75% households that cannot actually buy the product, which shows up as high engagement paired with poor conversion.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is wealth data for high-net-worth targeting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accuracy declines as wealth increases. Modeled wealth data performs reasonably well at the mass affluent tier, roughly 75–85% precision, because the underlying signals — property values, mortgage data, vehicle registrations — are publicly observable. At $25M+ net worth precision typically falls to 40–60%, and at $100M+ to 25–45%, because assets at that level are commonly held in trusts, LLCs, and holding companies that break the link between a household and its balance sheet. Any vendor claiming high precision on ultra-high-net-worth segments should be asked directly for the deterministic-to-modeled ratio behind the segment.",
          },
        },
        {
          "@type": "Question",
          name: "How large should a lookalike seed audience be for luxury advertising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The productive range for most luxury advertisers is 2,000 to 10,000 matched seed records, drawn from the top revenue decile of customers rather than from all converters. Below roughly 1,000 records models overfit and produce unstable expansion; above about 25,000 the additional precision gain is marginal. Expansion should be capped at 1–3%, because platform lookalikes at 5% or 10% dilute wealth composition toward population averages — in practice a 1% lookalike layered with a net-worth qualifier often beats a 5% lookalike on cost per qualified inquiry by 30–60%.",
          },
        },
        {
          "@type": "Question",
          name: "Which channels work best for reaching each wealth tier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mass affluent and affluent tiers are reachable at scale through premium CTV, private marketplace display, YouTube Select, podcasts, and streaming audio, where audience data layered onto quality inventory does most of the work. High-net-worth households are best reached through curated private marketplace deals and endemic native placements where inventory context reinforces the targeting. At the very-high and ultra-high-net-worth tiers, household-level data becomes unreliable and geography becomes the stronger proxy — DOOH in private terminal corridors, club districts, and luxury retail corridors — supplemented by first-party and relationship channels that paid media cannot replace.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <ArticleLayout
      title="Wealth-Based Audience Segmentation: How Luxury Brands Should Actually Tier Affluence"
      author="Stillwater Media"
      date="August 18, 2026"
      readingTime="15 min read"
      category="Audience Strategy"
      image={imagePath}
      imageAlt="Stillwater Media guide illustration on wealth-based audience segmentation showing five nested brass rings of decreasing diameter arranged concentrically on dark marble"
      imageCaption="Affluence is not one audience — it is a set of nested tiers with radically different scale, accuracy, and media economics at each level."
      schemaMarkup={schemaMarkup}
    >
      <p>
        Wealth-based audience segmentation is the practice of dividing a market by financial capacity — net worth, liquid
        assets, investable capital, and demonstrated category spending — rather than by the demographic proxies most media
        plans still default to. The distinction matters because the default proxy, household income, is the weakest signal
        of purchasing capacity available in the commercial data ecosystem, and it is the one nearly every off-the-shelf
        "affluent" segment is built on.
      </p>
      <p>
        Consider two households a media plan would treat identically at HHI $250K+. One is a dual-income professional
        couple in their late thirties carrying a large mortgage, two car notes, and private school tuition, with roughly
        $80K in investable assets. The other is a retired business owner with $6M in liquid assets and a reported income of
        $180K, because most of what they have is not income. For a private aviation charter program, a wealth management
        firm, or a $4M coastal listing, only one of those households is a real prospect — and income-based targeting either
        misses them or buries them among thousands of look-alike non-prospects.
      </p>
      <p>
        At Stillwater Media we plan and buy for brands where customer LTV routinely exceeds $5,000 and sales cycles run
        past 30 days — private aviation, luxury real estate, wealth management, private clubs, premium automotive, and
        luxury hospitality. Wealth-based audience segmentation is the first thing we rebuild on nearly every account we
        inherit. This is how we do it.
      </p>

      <h2>The Four Axes of Wealth-Based Audience Segmentation (and Why Income Is the Weakest)</h2>
      <p>
        Financial capacity is not a single variable. Four distinct axes carry different information, and confusing them is
        the root of most affluent targeting failure.
      </p>
      <ol>
        <li>
          <strong>Income</strong> — annual earnings. Widely modeled, widely available, and only loosely correlated with
          discretionary purchasing capacity. Income captures wealth <em>accumulation rate</em>, not wealth. It
          systematically over-indexes on high-earning, high-obligation households and under-indexes on retirees,
          inheritors, and post-liquidity founders — three of the most valuable cohorts in luxury.
        </li>
        <li>
          <strong>Net worth</strong> — total assets less liabilities. A far better capacity signal, and derivable at
          household level with reasonable accuracy from property records, mortgage data, vehicle registration, and
          financial-services modeling. This is the primary axis for most luxury categories.
        </li>
        <li>
          <strong>Liquidity / investable assets</strong> — what is actually available to deploy. The decisive axis for
          wealth management, private equity, private aviation, and any purchase made from cash rather than financing. A
          household can be net-worth-rich and liquidity-poor if the balance sheet is concentrated in illiquid real estate
          or a closely held business.
        </li>
        <li>
          <strong>Demonstrated category spending propensity</strong> — observed behavior in the category: prior luxury
          purchases, charter history, club memberships, brand affinity, high-value transaction patterns. The strongest
          single predictor of the next luxury purchase is the last one, and this axis consistently outperforms all three
          financial axes on conversion rate in our testing.
        </li>
      </ol>
      <p>
        The practical rule: <strong>use net worth or liquidity to define the eligible universe, and behavioral spending
        signals to prioritize within it.</strong> Using income alone typically produces an audience where 60–75% of
        reached households cannot actually transact at your price point.
      </p>

      <h2>A Five-Tier Wealth-Based Audience Segmentation Framework</h2>
      <p>
        Affluence is usually discussed as one thing. It behaves as at least five, each with different addressable scale in
        the U.S., different modeling accuracy, and different media economics.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Definition</th>
              <th>Approx. U.S. Households</th>
              <th>Modeled Accuracy</th>
              <th>Typical Addressable Reach</th>
              <th>Best-Fit Channels</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mass affluent</td>
              <td>$100K–$1M investable</td>
              <td>~30–33M</td>
              <td>High (75–85%)</td>
              <td>60–80% of tier</td>
              <td>Programmatic, CTV, social, streaming audio</td>
            </tr>
            <tr>
              <td>Affluent</td>
              <td>$1M–$5M net worth</td>
              <td>~14–16M</td>
              <td>Good (65–80%)</td>
              <td>50–70% of tier</td>
              <td>Premium CTV, PMP display, YouTube Select, podcasts</td>
            </tr>
            <tr>
              <td>High net worth</td>
              <td>$5M–$25M net worth</td>
              <td>~1.5–2M</td>
              <td>Moderate (55–70%)</td>
              <td>35–55% of tier</td>
              <td>Premium CTV, curated PMPs, DOOH, endemic native</td>
            </tr>
            <tr>
              <td>Very high net worth</td>
              <td>$25M–$100M net worth</td>
              <td>~120–160K</td>
              <td>Lower (40–60%)</td>
              <td>20–40% of tier</td>
              <td>Curated PMP, DOOH in known corridors, first-party</td>
            </tr>
            <tr>
              <td>Ultra high net worth</td>
              <td>$100M+ net worth</td>
              <td>~10–12K</td>
              <td>Poor (25–45%)</td>
              <td>Under 25% of tier</td>
              <td>First-party, direct relationship, non-media channels</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Three implications leaders consistently underestimate.</p>
      <p>
        <strong>Accuracy degrades as wealth rises.</strong> Modeled wealth data is built from property, mortgage, vehicle,
        and financial signals that become progressively less observable at the top — trusts, LLCs, holding companies, and
        multiple residences obscure exactly the households you most want. Any vendor promising 90% precision on a $100M+
        segment is selling a model, not a measurement.
      </p>
      <p>
        <strong>Reachable scale collapses faster than population.</strong> At the UHNW tier you are looking at roughly ten
        to twelve thousand U.S. households, of which perhaps a quarter are addressable with confidence, distributed across
        every media property in the country. No media plan reaches that group efficiently through targeting alone; it is
        reached through context — the environments those households occupy — and through relationship channels media
        cannot substitute for.
      </p>
      <p>
        <strong>Most luxury brands should be buying two tiers, not one.</strong> A private club, a boutique hotel group, or
        a premium DTC brand with $2K–$15K price points converts primarily from the affluent and HNW tiers, not from UHNW.
        Over-targeting the top tier is a common vanity error that trades away 90% of reachable demand for a segment that
        was never the buyer.
      </p>

      <h2>Building Wealth-Based Audience Segmentation: Data Sources Compared</h2>
      <p>
        Not all wealth data is created the same way, and the construction method determines where it can be trusted.
      </p>
      <ul>
        <li>
          <strong>Tax assessor and property records (deterministic).</strong> Public, accurate on the asset they describe,
          and the strongest single foundation for net-worth modeling. Excellent for identifying $2M+ primary residences;
          blind to liquid wealth and to anything held in entities.
        </li>
        <li>
          <strong>Financial services and brokerage-derived panels (modeled from real balances).</strong> The most
          credible source for investable-asset tiers. Availability is constrained and privacy-governed; expect aggregated
          or modeled delivery rather than household-level truth.
        </li>
        <li>
          <strong>Purchase and transaction-based signals (behavioral).</strong> Card-panel and retail cooperative data
          showing high-value category spend. Strong predictive value, moderate coverage, and the best available proxy when
          financial data is unavailable.
        </li>
        <li>
          <strong>Survey and panel-projected segments (inferred).</strong> Broad, cheap, and the source of most
          off-the-shelf "luxury lifestyle audience segments." Useful for directional reach expansion, weak for precision.
          Treat as a top-of-funnel supplement, never as a foundation.
        </li>
        <li>
          <strong>First-party CRM and client files (deterministic, yours).</strong> The highest-value asset you own. A
          matched file of 5,000 existing clients is worth more than any purchased segment, both as a suppression list and
          as a lookalike seed.
        </li>
      </ul>
      <p>
        The hierarchy is worth stating plainly, because budget frequently flows in the opposite direction: your own client
        file outperforms brokerage-derived data, which outperforms property records, which outperform purchase panels,
        which outperform survey-projected lifestyle segments. Most brands spend the most on the weakest layer, because the
        weakest layer is the cheapest to buy and the easiest to activate in a self-serve interface.
      </p>

      <h3>Validating a Vendor Segment Before You Buy It</h3>
      <p>Run this three-step test on any wealth segment before committing budget:</p>
      <ol>
        <li>
          <strong>Match-rate check.</strong> Push your known-customer file against the vendor's segment. If your own
          high-value clients are not disproportionately present in their $5M+ segment, the segment does not describe what
          it claims to.
        </li>
        <li>
          <strong>Composition audit.</strong> Request the segment's construction methodology and the ratio of
          deterministic to modeled records. Below roughly 30% deterministic input, precision at the HNW tier and above
          degrades sharply.
        </li>
        <li>
          <strong>Reach sanity check.</strong> Compare the vendor's stated segment size to the true population of that
          wealth tier. A "$5M+ net worth" segment claiming 12 million U.S. households is describing something else
          entirely — that is roughly six times the actual population.
        </li>
      </ol>

      <h2>Affluent Lookalike Modeling: Seeding It Correctly</h2>
      <p>Lookalike expansion is where wealth segmentation either compounds or corrupts. Three rules govern it.</p>
      <p>
        <strong>Seed on value, not volume.</strong> Model from your top revenue decile — ideally customers above a defined
        LTV threshold — rather than from all converters. Seeding on all leads teaches the model to find lead-form
        completers, which is a different and much less valuable population.
      </p>
      <p>
        <strong>Seed size matters more than seed recency, up to a point.</strong> Below roughly 1,000 matched records,
        models overfit badly. The productive range for most luxury advertisers is 2,000–10,000 seed records; beyond about
        25,000 the incremental precision gain is marginal.
      </p>
      <p>
        <strong>Cap expansion at 1–3%.</strong> Platform lookalikes at 5% or 10% expansion dilute wealth composition to
        near-population averages within the first few percentiles. For high-consideration brands, a 1% lookalike layered
        with a net-worth qualifier typically outperforms a 5% lookalike on cost per qualified inquiry by 30–60%.
      </p>
      <p>
        A fourth practice separates good wealth modeling from adequate wealth modeling:{" "}
        <strong>exclude your worst customers deliberately.</strong> Most brands seed only on positive examples. Feeding the
        model a negative seed — inquiries that never qualified, trial members who churned in the first year, leads that
        consumed sales time without converting — sharpens the boundary considerably. In categories with high sales-labor
        cost per lead, such as private aviation and wealth management, suppressing look-alikes of unqualified inquirers
        often improves lead quality more than any positive-signal refinement.
      </p>

      <h3>How Wealth Segmentation Interacts With Intent</h3>
      <p>
        Wealth and intent are independent variables, and the most common planning error is treating them as substitutes. A
        household can be highly qualified financially and entirely out of market, or actively shopping and unable to
        transact. The productive framing is a two-by-two:
      </p>
      <ul>
        <li>
          <strong>High wealth, high intent</strong> — the smallest and most valuable cell. Warrants maximum frequency,
          direct-response creative, and immediate sales routing.
        </li>
        <li>
          <strong>High wealth, low intent</strong> — the strategic cell where most luxury brands under-invest. This is
          where premium CTV, DOOH, and podcast presence earn their return, building familiarity months before a search
          ever happens.
        </li>
        <li>
          <strong>Low wealth, high intent</strong> — the trap. It looks excellent in click and engagement reporting and
          converts poorly to revenue. Aggressive qualification and suppression belong here.
        </li>
        <li>
          <strong>Low wealth, low intent</strong> — pure waste. Exclusion lists exist for this cell.
        </li>
      </ul>
      <p>
        For brands with sales cycles beyond 60 days, the high-wealth/low-intent cell typically deserves 45–65% of working
        media, which is far more than click-based reporting will ever justify on its own.
      </p>

      <h2>Activating Wealth-Based Audience Segmentation by Channel</h2>
      <p>
        Segmentation is only as good as the activation. The same audience definition performs very differently depending
        on the supply it is applied against.
      </p>
      <ul>
        <li>
          <strong>Premium CTV.</strong> Apply wealth segments as an audience layer inside curated private marketplace
          deals on Disney+, Netflix, Prime Video, and Hulu inventory rather than as an open-exchange targeting parameter.
          The inventory quality does half the segmentation work — premium subscription environments already skew affluent
          — and the data layer sharpens it. Expect effective CPMs of roughly $38–$65 for wealth-qualified premium CTV.
        </li>
        <li>
          <strong>Programmatic display and native.</strong> Wealth segments here should be paired with contextual and
          publisher allow-lists. Audience data alone on open exchange delivers precision but poor environment quality,
          which is a brand-safety problem for luxury.
        </li>
        <li>
          <strong>DOOH.</strong> Wealth targeting becomes geographic: private terminal corridors, wealth-concentrated ZIP
          codes, club and marina districts, luxury retail corridors. Location behaves as a strong wealth proxy at the top
          tiers where household-level data is weakest, which makes DOOH unusually valuable for VHNW and UHNW reach.
        </li>
        <li>
          <strong>Streaming audio and podcasts.</strong> Wealth segmentation is generally coarser here; lean on show-level
          affinity and premium-tier subscriber inventory, which self-selects for higher income and lower price
          sensitivity.
        </li>
      </ul>

      <h3>Four Common Segmentation Mistakes</h3>
      <ol>
        <li>
          <strong>Treating "HHI $250K+" as a luxury segment.</strong> It describes roughly 12–14% of U.S. households and
          includes an enormous population of high-obligation, low-liquidity earners.
        </li>
        <li>
          <strong>Layering too many qualifiers.</strong> Stacking net worth, income, lifestyle, and intent filters can
          reduce a segment to a few thousand reachable households, at which point frequency runs away and delivery becomes
          unstable.
        </li>
        <li>
          <strong>Never suppressing existing customers.</strong> In categories with long repurchase cycles, serving
          prospecting media to current clients is pure waste and inflates apparent performance through misattribution.
        </li>
        <li>
          <strong>Refreshing segments annually or never.</strong> Wealth is dynamic — liquidity events, relocations, and
          retirements move households between tiers constantly. Quarterly refresh is the minimum defensible cadence.
        </li>
      </ol>

      <h2>How to Know Your Wealth Segmentation Is Working</h2>
      <p>
        Segment quality does not show up in impressions or click-through rate; both are essentially uninformative about
        audience composition. Four measures actually track it:
      </p>
      <ol>
        <li>
          <strong>Qualified inquiry rate.</strong> The share of inquiries that pass your sales team's qualification
          threshold. This is the fastest-moving indicator of segment precision and should be read within four to six weeks
          of a segment change.
        </li>
        <li>
          <strong>Revenue per thousand impressions (RPM), not CPM.</strong> A wealth-qualified premium CTV buy at a $52 CPM
          that produces twice the qualified pipeline of a $19 open-exchange buy is the cheaper media. Judging affluent
          segments on CPM is how brands systematically buy the wrong audience.
        </li>
        <li>
          <strong>Composition backtest.</strong> Quarterly, match converted customers back against the segments that
          reached them. If your $5M+ segment is not over-represented among high-value closers relative to its share of
          impressions, it is not doing its job.
        </li>
        <li>
          <strong>Incremental contribution by segment.</strong> Run holdout tests at the segment level where volume
          permits. Wealth segments that look strong in attributed reporting sometimes turn out to be harvesting demand that
          would have arrived regardless — a pattern especially common in retargeting layered with affluence qualifiers.
        </li>
      </ol>
      <p>
        Set a review cadence around these: monthly on qualified inquiry rate, quarterly on composition backtest and
        segment refresh, semi-annually on incremental contribution. Wealth-based audience segmentation is not a setup task
        that concludes; it is a standing input that decays if left alone.
      </p>

      <h2>Work With Stillwater Media</h2>
      <p>
        Wealth-based audience segmentation is the difference between reaching people who look prosperous and reaching
        people who can transact at your price point. If your current media plan is built on income-based segments and you
        have never validated them against your own customer file, that audit is where the fastest efficiency gains usually
        sit.
      </p>
      <p>
        Stillwater Media accepts a limited number of engagements each quarter.{" "}
        <a href="/apply">Apply to work with us →</a>
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is wealth-based audience segmentation?</h3>
      <p>
        Wealth-based audience segmentation divides an audience by financial capacity — net worth, investable assets, and
        demonstrated category spending — rather than by demographic proxies like household income or age. It exists because
        income measures how fast a household accumulates money, not how much it has available to spend, which is why
        income-based targeting systematically misses retirees, inheritors, and post-liquidity founders while over-including
        high-earning households with heavy financial obligations. For luxury and high-consideration brands, defining the
        eligible universe by net worth or liquidity and then prioritizing within it by behavioral spending signals produces
        materially better qualified reach.
      </p>
      <h3>Is household income a good way to target affluent consumers?</h3>
      <p>
        It is the weakest of the available wealth signals and should never be the sole qualifier. Household income of $250K
        or more describes roughly 12–14% of U.S. households and includes a large population of high-obligation,
        low-liquidity earners who cannot transact at luxury price points, while excluding asset-rich households whose
        reported income is modest. In our experience rebuilding inherited media plans, income-only affluent segments
        typically reach 60–75% households that cannot actually buy the product, which shows up as high engagement paired
        with poor conversion.
      </p>
      <h3>How accurate is wealth data for high-net-worth targeting?</h3>
      <p>
        Accuracy declines as wealth increases. Modeled wealth data performs reasonably well at the mass affluent tier,
        roughly 75–85% precision, because the underlying signals — property values, mortgage data, vehicle registrations —
        are publicly observable. At $25M+ net worth precision typically falls to 40–60%, and at $100M+ to 25–45%, because
        assets at that level are commonly held in trusts, LLCs, and holding companies that break the link between a
        household and its balance sheet. Any vendor claiming high precision on ultra-high-net-worth segments should be
        asked directly for the deterministic-to-modeled ratio behind the segment.
      </p>
      <h3>How large should a lookalike seed audience be for luxury advertising?</h3>
      <p>
        The productive range for most luxury advertisers is 2,000 to 10,000 matched seed records, drawn from the top
        revenue decile of customers rather than from all converters. Below roughly 1,000 records models overfit and produce
        unstable expansion; above about 25,000 the additional precision gain is marginal. Expansion should be capped at
        1–3%, because platform lookalikes at 5% or 10% dilute wealth composition toward population averages — in practice a
        1% lookalike layered with a net-worth qualifier often beats a 5% lookalike on cost per qualified inquiry by 30–60%.
      </p>
      <h3>Which channels work best for reaching each wealth tier?</h3>
      <p>
        Mass affluent and affluent tiers are reachable at scale through premium CTV, private marketplace display, YouTube
        Select, podcasts, and streaming audio, where audience data layered onto quality inventory does most of the work.
        High-net-worth households are best reached through curated private marketplace deals and endemic native placements
        where inventory context reinforces the targeting. At the very-high and ultra-high-net-worth tiers, household-level
        data becomes unreliable and geography becomes the stronger proxy — DOOH in private terminal corridors, club
        districts, and luxury retail corridors — supplemented by first-party and relationship channels that paid media
        cannot replace.
      </p>
    </ArticleLayout>
  )
}
