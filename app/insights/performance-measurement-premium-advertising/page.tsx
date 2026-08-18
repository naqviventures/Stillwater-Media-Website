import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/performance-measurement-premium-advertising"
const imagePath = "/images/performance-measurement-premium-advertising.png"

export const metadata: Metadata = {
  title: "Performance Measurement for Premium Advertising",
  description:
    "A measurement framework for premium advertising: what to measure when volume is low, cycles are long, and platform-reported ROAS is quietly overstated.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Performance Measurement for Premium Advertising: A Framework That Holds Up",
    description:
      "How to measure premium advertising when conversion volume is low, sales cycles run past 90 days, and platform-reported ROAS is inflated — the three-layer measurement stack, the metric hierarchy, benchmark ranges, and the cadence that fits your budget.",
    type: "article",
    url: canonicalUrl,
    images: [{ url: imagePath, width: 1200, height: 630, alt: "Performance measurement for premium advertising — Stillwater Media" }],
    locale: "en_US",
    siteName: "Stillwater Media",
    publishedTime: "2026-08-11",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Measurement for Premium Advertising",
    description:
      "Low volume, long cycles, offline conversions. The measurement stack luxury brands need when standard performance playbooks stop working.",
    images: [imagePath],
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Performance Measurement for Premium Advertising: A Framework That Holds Up",
      description:
        "A senior media strategist's framework for performance measurement in premium advertising — why low conversion volume, sales cycles beyond 90 days, and offline closings break standard performance playbooks; the three-layer measurement stack of incrementality, marketing mix modeling, and platform attribution; a metric hierarchy separating primary, secondary, and diagnostic measures; benchmark ranges for premium CTV, programmatic, and paid social; the measurement cadence appropriate to each budget tier; and the errors that cause luxury advertisers to over-credit retargeting and under-fund upper-funnel media.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${imagePath}`,
        width: 1200,
        height: 630,
        caption: "Performance measurement for premium advertising — Stillwater Media",
      },
      author: { "@type": "Organization", name: "Stillwater Media" },
      publisher: {
        "@type": "Organization",
        name: "Stillwater Media",
        logo: { "@type": "ImageObject", url: "https://www.stillwatermedia.io/logo.png" },
      },
      datePublished: "2026-08-11",
      dateModified: "2026-08-11",
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords:
        "performance measurement premium advertising, incrementality testing advertising, media measurement beyond last click, advertising ROI luxury brands, multi-touch attribution high-consideration, marketing mix modeling luxury brands, media efficiency ratio advertising, holdout testing advertising, brand lift measurement CTV, customer acquisition cost reduction luxury, how to attribute long sales cycle conversions",
      articleSection: "Measurement & Attribution",
      wordCount: 2310,
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
          name: "Performance Measurement for Premium Advertising",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is performance measurement for premium advertising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is the discipline of determining what a high-consideration brand's media actually caused rather than what a platform claimed credit for, under conditions that break standard direct-response measurement: low conversion volume, sales cycles of 60 to 300 days, purchases that close offline, and transaction values large enough that one misattributed sale distorts a month of reporting. It requires a layered approach combining incrementality testing for causal truth, marketing mix modeling for budget allocation, and platform attribution strictly as an in-flight diagnostic.",
          },
        },
        {
          "@type": "Question",
          name: "Why doesn't last-click attribution work for luxury brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Last-click attribution credits the final touchpoint before a conversion, which for a 90-to-180-day purchase cycle is almost always branded search or retargeting — channels that harvest demand rather than create it. The upper-funnel media that generated the original interest falls outside standard 1-to-30-day attribution windows entirely, so the report doesn't merely undercount premium CTV and programmatic, it produces an analysis that actively argues for defunding the media doing the work.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between incrementality and attribution?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Attribution divides credit among the touchpoints that appear in a converter's path, which is a correlational exercise, while incrementality withholds media from a randomized or matched control group and measures the difference in outcomes, which is a causal one. The practical gap is large: holdout tests across categories routinely find retargeting and branded search deliver only 20–60% incremental lift against their reported conversions, whereas prospecting CTV and premium programmatic often test at 70–95% incremental.",
          },
        },
        {
          "@type": "Question",
          name: "What metrics should luxury brands actually use to judge media?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The primary metrics are incremental customer acquisition cost, media efficiency ratio (total revenue divided by total media spend), CAC-to-LTV ratio targeting a 1:3 to 1:5 range, and CAC payback period of roughly 6 to 18 months. Secondary metrics such as qualified lead rate, close rate by source, and average deal value by channel explain movement in those primaries, while click-through rate, viewability, and completion rate are diagnostics for optimization that should never be used to judge whether a program is working.",
          },
        },
        {
          "@type": "Question",
          name: "How much media spend do you need before marketing mix modeling is worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open-source frameworks such as Meta's Robyn and Google's Meridian have brought marketing mix modeling within reach of brands spending roughly $2M or more annually, well below the $50M threshold that historically gated it, but the binding constraint is usually data rather than spend — MMM typically needs 24 to 36 months of history with meaningful variation in channel spend to produce stable coefficients. Below that level, quarterly geo holdout tests and CRM-matched cohort analysis deliver more reliable decisions for far less cost.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <ArticleLayout
      title="Performance Measurement for Premium Advertising: A Framework That Holds Up"
      author="Stillwater Media"
      date="August 11, 2026"
      readingTime="15 min read"
      category="Measurement & Attribution"
      image={imagePath}
      imageAlt="Stillwater Media guide illustration on performance measurement for premium advertising showing antique brass precision instruments and a balance scale on a marble desk lit by warm lamplight at blue hour"
      imageCaption="Premium advertising doesn't suffer from too little data — it suffers from measuring the wrong things with unwarranted confidence."
      schemaMarkup={schemaMarkup}
    >
      <p>
        Performance measurement for premium advertising is the discipline of determining what a high-consideration
        brand&apos;s media actually caused — not what a platform claimed credit for — under conditions that break the
        standard performance playbook: low conversion volume, sales cycles that run 60 to 300 days, purchases that close
        offline or over the phone, and customer values large enough that a single misattributed sale distorts an entire
        month of reporting. The tools most marketers inherited were built for a different problem. Direct-response
        measurement assumes thousands of same-session conversions and a short window between exposure and purchase. A
        private aviation brand closing 40 memberships a quarter, or a wealth management firm whose average client
        relationship takes five months to sign, has neither.
      </p>
      <p>
        At Stillwater Media we run performance media for luxury and high-consideration brands where customer LTV exceeds
        $5,000, and measurement is the part of the engagement most clients arrive least equipped for. They usually have
        too many dashboards and too little truth. This is the framework we use to fix that — the three-layer stack, the
        metric hierarchy, the benchmark ranges that matter, and the specific errors that cause premium advertisers to
        systematically overfund retargeting and starve the media that is actually generating demand.
      </p>

      <h2>Why Standard Performance Measurement Fails Premium Brands</h2>
      <p>Four structural conditions break conventional measurement for luxury and high-consideration advertisers.</p>
      <p>
        <strong>Low conversion volume destroys statistical power.</strong> Optimization algorithms and significance
        tests both need volume. A campaign generating 25 conversions a month cannot support a meaningful A/B test at the
        creative level, and any platform algorithm optimizing toward that event is learning from noise. This is why
        premium programs must optimize toward qualified mid-funnel signals — a completed consultation request, a
        verified inquiry, a scheduled tour — while measuring against the closed sale on a longer cadence.
      </p>
      <p>
        <strong>Long sales cycles break attribution windows.</strong> Default click and view windows range from 1 to 30
        days. If your average close takes 90 to 180 days, the majority of your genuine influence occurs outside the
        window entirely, and the touchpoints that survive are the ones nearest the sale — branded search and
        retargeting. Attribution doesn&apos;t just miss upper-funnel media; it produces a report that actively argues
        against it.
      </p>
      <p>
        <strong>Offline and assisted conversions leave the digital record.</strong> A jet card sold over the phone, a
        listing closed at a private showing, a membership signed at the club — none of these fire a pixel unless the
        brand deliberately closes the loop through CRM integration and offline conversion imports.
      </p>
      <p>
        <strong>High order values create extreme variance.</strong> When individual transactions range from $40,000 to
        $2M, a single closed deal can swing monthly ROAS by 300%. Averages become misleading and medians become
        necessary.
      </p>

      <h2>The Three-Layer Measurement Stack</h2>
      <p>
        Serious performance measurement for premium advertising is not one methodology. It&apos;s three, each answering
        a different question at a different cadence, and each covering the others&apos; blind spots.
      </p>

      <h3>Layer 1: Incrementality — What Did the Media Actually Cause?</h3>
      <p>
        Incrementality testing isolates causal effect by withholding media from a randomized or matched control group
        and comparing outcomes. Geo-based holdouts, ghost bidding on CTV, and PSA-control designs all serve this
        purpose. This is the only layer that answers the question that matters most, and it is the layer premium brands
        are most likely to skip.
      </p>
      <p>
        The findings are consistently humbling. Published holdout studies across categories regularly find that branded
        search and retargeting deliver 20–60% incremental lift against reported conversions — meaning a substantial
        share of the conversions those channels claim would have occurred anyway. Prospecting CTV and premium
        programmatic often test at 70–95% incremental, because those impressions are genuinely creating demand rather
        than harvesting it. Run at a quarterly cadence, incrementality is the arbiter that keeps the other two layers
        honest.
      </p>

      <h3>Layer 2: Marketing Mix Modeling — How Should Budget Be Allocated?</h3>
      <p>
        Marketing mix modeling uses regression against aggregate time-series data — spend, outcomes, seasonality,
        pricing, competitive activity, macro conditions — to estimate each channel&apos;s contribution. It requires no
        user-level tracking, which makes it durable in a cookieless environment, and it captures offline media, brand
        halo effects, and long-lag response that user-level methods cannot.
      </p>
      <p>
        Its constraints are real: it typically needs 24 to 36 months of history and meaningful spend variation to
        produce stable coefficients, and it answers at the channel level rather than the tactic level. Open-source
        implementations (Meta&apos;s Robyn, Google&apos;s Meridian) have made MMM accessible to brands spending $2M+
        annually, well below the $50M threshold that used to gate it. Run it semi-annually and calibrate its outputs
        against your incrementality results.
      </p>

      <h3>Layer 3: Platform and Multi-Touch Attribution — What&apos;s Happening In-Flight?</h3>
      <p>
        Platform reporting and multi-touch attribution are directional instruments for daily and weekly optimization,
        not truth. Used correctly — with the understanding that every platform grades its own homework and that summing
        across platforms routinely double-counts 20–40% of conversions — they tell you which creative is fatiguing,
        which placements are delivering, and where pacing has drifted. Used incorrectly, as a budget-allocation
        authority, they will steer a premium brand steadily downward into the bottom of its own funnel.
      </p>

      <h2>Comparing Measurement Methods for Premium Advertising</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Question It Answers</th>
              <th>Cadence</th>
              <th>Minimum Requirements</th>
              <th>Reliability for Luxury</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Geo holdout / incrementality test</td>
              <td>What did media cause?</td>
              <td>Quarterly</td>
              <td>20+ comparable geos, 4–8 week window</td>
              <td>Highest</td>
              <td>$ (opportunity cost of withheld media)</td>
            </tr>
            <tr>
              <td>Marketing mix modeling</td>
              <td>How to allocate budget across channels</td>
              <td>Semi-annual</td>
              <td>24–36 months history, $2M+ annual spend</td>
              <td>High at channel level</td>
              <td>$$–$$$</td>
            </tr>
            <tr>
              <td>Multi-touch attribution</td>
              <td>Which touchpoints participated</td>
              <td>Weekly</td>
              <td>User-level tracking, CRM integration</td>
              <td>Moderate, degrading</td>
              <td>$$</td>
            </tr>
            <tr>
              <td>Platform-reported ROAS</td>
              <td>In-flight delivery and creative health</td>
              <td>Daily</td>
              <td>Pixel/API setup</td>
              <td>Low as truth, useful as diagnostic</td>
              <td>Included</td>
            </tr>
            <tr>
              <td>Brand lift study</td>
              <td>Did awareness and consideration move?</td>
              <td>Per flight</td>
              <td>100K+ impressions, survey partner</td>
              <td>High for upper funnel</td>
              <td>$–$$ (often free at spend thresholds)</td>
            </tr>
            <tr>
              <td>CRM-matched cohort analysis</td>
              <td>What did exposed prospects become?</td>
              <td>Monthly</td>
              <td>Closed-loop CRM, offline import</td>
              <td>High</td>
              <td>$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Metric Hierarchy: Primary, Secondary, Diagnostic</h2>
      <p>
        Most premium brands fail measurement not by lacking metrics but by treating all of them as equally
        authoritative. Rank them explicitly.
      </p>
      <p>
        <strong>Primary metrics</strong> — the ones that determine whether the program continues:
      </p>
      <ol>
        <li>Incremental customer acquisition cost (incremental CAC), not blended or platform-reported CAC</li>
        <li>Media efficiency ratio (MER) — total revenue divided by total media spend, the one number no platform can inflate</li>
        <li>CAC-to-LTV ratio, with a target range of 1:3 to 1:5 for most luxury categories</li>
        <li>CAC payback period, typically 6–18 months for high-LTV premium brands</li>
      </ol>
      <p>
        <strong>Secondary metrics</strong> — the ones that explain movement in the primary metrics:
      </p>
      <ul>
        <li>Qualified lead rate (inquiries meeting a defined qualification bar, not raw form fills)</li>
        <li>Lead-to-opportunity and opportunity-to-close rates by media source</li>
        <li>Average deal value by acquisition channel — frequently the metric that reverses a channel ranking</li>
        <li>Sales cycle length by source</li>
      </ul>
      <p>
        <strong>Diagnostic metrics</strong> — useful for optimization, never for judgment:
      </p>
      <ul>
        <li>CTV video completion rate (premium CTV benchmarks run 92–97%; anything below 90% suggests inventory quality issues)</li>
        <li>Viewability (premium display targets 70%+; MRC standard is 50% of pixels for one second)</li>
        <li>Click-through rate, which for premium CTV and awareness display is close to meaningless as a quality signal</li>
        <li>Frequency and reach curves against your defined universe</li>
      </ul>
      <p>
        The single most common measurement error in luxury media is promoting a diagnostic metric to a primary one. CTR
        is not performance. Completion rate is not demand.
      </p>

      <h2>Benchmark Ranges Worth Knowing</h2>
      <p>
        Context matters more than any single number, but these ranges reflect what we see across premium programs:
      </p>
      <ul>
        <li>
          <strong>Premium CTV CPMs:</strong> $28–$55 for private marketplace deals on major streaming platforms;
          open-exchange CTV at $12–$20 should raise questions about what inventory you&apos;re actually buying.
        </li>
        <li>
          <strong>Premium programmatic display CPMs:</strong> $8–$18 for curated, brand-safe PMP inventory.
        </li>
        <li>
          <strong>Qualified lead rate:</strong> healthy premium programs convert 15–35% of raw inquiries into qualified
          opportunities; below 10% usually indicates an audience quality problem, not a creative problem.
        </li>
        <li>
          <strong>View-through window for high-consideration:</strong> 14–30 days is defensible; 90-day view-through
          windows are where attribution becomes fiction.
        </li>
        <li>
          <strong>Cross-platform double-counting:</strong> expect 20–40% overlap when summing conversions across Meta,
          Google, and DSP reporting.
        </li>
        <li>
          <strong>Incremental lift on prospecting CTV:</strong> 70–95%; on retargeting, 20–60%.
        </li>
      </ul>

      <h2>Matching Measurement Cadence to Budget</h2>
      <p>
        Not every brand should run every method. Over-engineering measurement on a small budget wastes money that
        should be in media.
      </p>
      <ul>
        <li>
          <strong>Under $500K annual media:</strong> Platform reporting for optimization, CRM-matched cohort analysis
          monthly, and one geo holdout per year on your largest channel. Skip MMM entirely.
        </li>
        <li>
          <strong>$500K–$2M:</strong> Add quarterly incrementality testing and per-flight brand lift studies (most
          major platforms provide these free above modest spend thresholds).
        </li>
        <li>
          <strong>$2M–$10M:</strong> Add marketing mix modeling on a semi-annual cadence, calibrated against
          incrementality results. This is where the three-layer stack becomes fully operational.
        </li>
        <li>
          <strong>$10M+:</strong> Continuous incrementality program, quarterly MMM refresh, and dedicated analytics
          resourcing.
        </li>
      </ul>

      <h2>Closing the Offline Loop: The Prerequisite Nobody Wants to Do</h2>
      <p>
        Every method above depends on knowing what happened after the click, and for premium brands the answer usually
        lives in a CRM rather than a checkout. Closing that loop is unglamorous integration work, and it is the
        highest-return measurement investment most luxury advertisers can make.
      </p>
      <p>
        Three components make it work. First, <strong>source persistence</strong>: capture the original click ID, UTM
        set, and landing page as fields on the lead record at creation, then carry them through every stage change to
        closed-won. Most CRMs overwrite source on subsequent touches by default — a setting that quietly destroys the
        audit trail on exactly the long cycles you most need to trace. Second, <strong>offline conversion import</strong>:
        push closed-won events with their revenue values and original click identifiers back to Google, Meta, and your
        DSP via their conversion APIs, so the algorithms optimize against realized value rather than form fills. Third,{" "}
        <strong>a written qualification definition</strong> agreed to by both marketing and sales before the campaign
        launches, so &quot;qualified lead&quot; means the same thing in both departments six months later when the
        numbers are being argued about.
      </p>
      <p>
        Brands that skip this step are not measuring performance; they are measuring form submissions and hoping the two
        correlate. In our experience they usually don&apos;t. Across premium programs we&apos;ve audited, the channel
        ranked first on cost per lead is the channel ranked first on cost per closed customer less than half the time —
        and the reordering is often dramatic, because the cheapest leads tend to come from the broadest, least qualified
        audiences.
      </p>

      <h2>What This Looks Like in Practice</h2>
      <p>
        Consider a private aviation brand spending $1.8M annually across premium CTV, programmatic display, paid search,
        and paid social, closing roughly 55 jet card memberships a year at an average first-year value of $145,000.
      </p>
      <p>
        Platform reporting will show paid search and retargeting driving the overwhelming majority of conversions at an
        attractive cost per acquisition, and CTV contributing almost nothing on a last-click basis. Acting on that
        report means cutting CTV and reinvesting in search — a decision that looks obviously correct and is almost
        always wrong. A geo holdout typically reveals that a meaningful share of the branded search conversions would
        have occurred without the ad, because the prospect was searching for the brand by name, and that the demand
        generating those branded searches was created upstream by the CTV and programmatic exposure the report gave no
        credit to.
      </p>
      <p>
        The corrective is not to abandon platform data but to rank the evidence properly: the holdout determines
        allocation, the CRM cohort analysis determines which sources produce members rather than inquiries, and the
        platform dashboard determines which creative to rotate out this week. Three instruments, three jobs, one
        hierarchy of authority.
      </p>

      <h2>Five Errors That Distort Premium Advertising Measurement</h2>
      <ol>
        <li>
          <strong>Summing platform-reported conversions across channels.</strong> This inflates total performance by
          20–40% and disproportionately rewards the platforms with the most aggressive attribution windows.
        </li>
        <li>
          <strong>Optimizing to a closed sale that hasn&apos;t happened yet.</strong> With a 120-day cycle, optimizing
          to closed revenue means the algorithm is learning from a signal four months stale. Optimize to a validated
          mid-funnel proxy and validate the proxy&apos;s correlation to revenue quarterly.
        </li>
        <li>
          <strong>Judging upper-funnel media on last-click.</strong> Premium CTV will always look bad in a last-click
          report. That is a property of the report, not the media.
        </li>
        <li>
          <strong>Ignoring lead quality differences by source.</strong> Two channels delivering identical CPL can
          differ 3x in close rate and 2x in average deal value. CPL without qualification data is a vanity metric.
        </li>
        <li>
          <strong>Never withholding media.</strong> If you have never turned something off in a controlled way, every
          performance claim in your reporting is correlational.
        </li>
      </ol>

      <h2>How to Build This in 90 Days</h2>
      <p>
        Weeks 1–3: close the loop — CRM integration, offline conversion import, source tagging discipline, and a written
        definition of a qualified lead. Weeks 4–6: establish the baseline — 12 months of historical CAC, MER, close
        rate, and deal value by source. Weeks 7–10: run the first holdout on your highest-spend channel, typically
        branded search or retargeting, where the surprises are largest. Weeks 11–13: rebuild reporting around the metric
        hierarchy and reallocate against what the holdout revealed.
      </p>
      <p>
        Most brands find that this sequence moves 10–25% of budget out of harvesting channels and into demand creation —
        and that blended CAC improves rather than worsens as a result.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is performance measurement for premium advertising?</h3>
      <p>
        It is the discipline of determining what a high-consideration brand&apos;s media actually caused rather than
        what a platform claimed credit for, under conditions that break standard direct-response measurement: low
        conversion volume, sales cycles of 60 to 300 days, purchases that close offline, and transaction values large
        enough that one misattributed sale distorts a month of reporting. It requires a layered approach combining
        incrementality testing for causal truth, marketing mix modeling for budget allocation, and platform attribution
        strictly as an in-flight diagnostic.
      </p>
      <h3>Why doesn&apos;t last-click attribution work for luxury brands?</h3>
      <p>
        Last-click attribution credits the final touchpoint before a conversion, which for a 90-to-180-day purchase
        cycle is almost always branded search or retargeting — channels that harvest demand rather than create it. The
        upper-funnel media that generated the original interest falls outside standard 1-to-30-day attribution windows
        entirely, so the report doesn&apos;t merely undercount premium CTV and programmatic, it produces an analysis
        that actively argues for defunding the media doing the work.
      </p>
      <h3>What is the difference between incrementality and attribution?</h3>
      <p>
        Attribution divides credit among the touchpoints that appear in a converter&apos;s path, which is a
        correlational exercise, while incrementality withholds media from a randomized or matched control group and
        measures the difference in outcomes, which is a causal one. The practical gap is large: holdout tests across
        categories routinely find retargeting and branded search deliver only 20–60% incremental lift against their
        reported conversions, whereas prospecting CTV and premium programmatic often test at 70–95% incremental.
      </p>
      <h3>What metrics should luxury brands actually use to judge media?</h3>
      <p>
        The primary metrics are incremental customer acquisition cost, media efficiency ratio (total revenue divided by
        total media spend), CAC-to-LTV ratio targeting a 1:3 to 1:5 range, and CAC payback period of roughly 6 to 18
        months. Secondary metrics such as qualified lead rate, close rate by source, and average deal value by channel
        explain movement in those primaries, while click-through rate, viewability, and completion rate are diagnostics
        for optimization that should never be used to judge whether a program is working.
      </p>
      <h3>How much media spend do you need before marketing mix modeling is worth it?</h3>
      <p>
        Open-source frameworks such as Meta&apos;s Robyn and Google&apos;s Meridian have brought marketing mix modeling
        within reach of brands spending roughly $2M or more annually, well below the $50M threshold that historically
        gated it, but the binding constraint is usually data rather than spend — MMM typically needs 24 to 36 months of
        history with meaningful variation in channel spend to produce stable coefficients. Below that level, quarterly
        geo holdout tests and CRM-matched cohort analysis deliver more reliable decisions for far less cost.
      </p>
    </ArticleLayout>
  )
}
