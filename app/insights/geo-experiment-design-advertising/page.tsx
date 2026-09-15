import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/geo-experiment-design-advertising"
const title = "Geo Experiment Design: Markets, Duration, Detectable Lift"
const description = "Geo experiment design for advertisers: how many markets, how long to run, and what lift is detectable at your spend - with power math and benchmark tables."
const image = "/images/geo-experiment-design-advertising.png"
const imageAlt = "Stillwater Media guide to geo experiment design - a darkened analytics room with an illuminated United States metro-market map showing lit test regions and deliberately dark holdout markets used in advertising incrementality testing."
const publishedTime = "2026-09-12T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Geo Experiment Design: Market Counts, Duration, and Minimum Detectable Lift",
    description: "Most geo tests that report \"no significant lift\" were never statistically capable of detecting the lift the brand actually had. Here is the design math that fixes it.",
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geo Experiment Design: Markets, Duration, Detectable Lift",
    description: "A ten-market, four-week geo test cannot detect a 6% lift. Most brands run one anyway, then conclude the channel does not work.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "How many markets do you need for a geo experiment?",
    answer: "It depends on your baseline volatility, test duration and spend delta, but as a working guide: at 12% weekly volatility with a full on/off holdout, roughly 15 matched markets per arm over 8 weeks detects a lift of about 8% to 11%, while 40 markets per arm over 12 weeks detects 3.5% to 5%. Fewer than 8 markets per arm rarely produces a usable result for anything short of a very large effect. Compute your own coefficient of variation first, because volatility affects the required market count more than any other input.",
  },
  {
    question: "How long should a geo lift test run?",
    answer: "Eight to twelve weeks is the practical range for most high-consideration advertisers, plus a twelve-to-twenty-four-month pre-period for matching. Critically, the first two to three weeks of a holdout should be excluded as burn-in, because residual awareness keeps dark markets converting at near-normal rates after media stops. That means a design needing eight weeks of clean measurement should run for ten or eleven, and should be followed by a four-to-six-week cool-down before any subsequent test in the same markets.",
  },
  {
    question: "What is minimum detectable effect in advertising testing?",
    answer: "Minimum detectable effect is the smallest true lift a given experiment has a reasonable probability - conventionally 80% - of identifying as statistically significant. It is fixed by the design before the test runs, determined by baseline volatility, market count, duration and spend delta. Its practical importance is that a null result only means the true effect is probably smaller than the MDE. A test with a 14% MDE returning \"no significant lift\" is fully consistent with a real and commercially valuable 9% lift.",
  },
  {
    question: "What is the difference between a matched-market test and synthetic control?",
    answer: "A matched-market test pairs each treated market with a single comparable untreated market chosen on pre-period similarity, then compares outcomes directly. Synthetic control instead builds a weighted composite of many untreated markets designed to track each treated market's historical series, which works better when a brand operates in too few markets to form good natural pairs or when no single market is a close match. Synthetic control requires more pre-period history - twelve months minimum - but tolerates smaller and less symmetric footprints.",
  },
  {
    question: "Why do geo tests so often show no lift?",
    answer: "Most often because the design lacked the statistical power to detect the effect that was actually present. The recurring causes are too few markets, too short a measurement window, a partial spend reduction instead of a full holdout, failure to exclude burn-in, spillover between adjacent metros that contaminates controls, and matching on population rather than on qualified audience density. Each of these compresses the measured difference toward zero. Before accepting a null result, confirm what the test's minimum detectable effect was - if it exceeds the lift you would realistically expect, the experiment answered nothing.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Geo Experiment Design: Market Counts, Duration, and Minimum Detectable Lift",
      description: "A practical guide to geo experiment design for high-consideration advertisers: the three experimental structures and when each applies, how baseline volatility and market count determine minimum detectable effect, a minimum detectable lift table by market count and test duration, market matching and pre-period correlation thresholds, spend-delta requirements, carryover and cool-down windows, how to read incremental ROAS confidence intervals rather than point estimates, the true opportunity cost of a holdout, and the seven design errors that produce false null results.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption: "An illuminated metro-market map with regions deliberately dark, representing the geographic holdout structure at the center of geo experiment design",
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
      keywords: "geo experiment design, geo lift testing, matched market testing, minimum detectable effect advertising, geo holdout test duration, incrementality testing methodology, synthetic control advertising measurement, media test statistical power, incremental ROAS confidence interval, DMA level media testing",
      articleSection: "Measurement & Incrementality",
      wordCount: 2405,
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
      title={title}
      author="Stillwater Media"
      date="September 12, 2026"
      readingTime="18 minutes"
      category="Measurement & Incrementality"
      image={image}
      imageAlt={imageAlt}
      imageCaption="The dark markets are the point: a geo experiment only produces an answer when a brand is willing to deliberately stop advertising somewhere for long enough to measure what changes."
      schemaMarkup={schemaMarkup}
    >
      <p>Sound geo experiment design is the difference between a measurement program that settles arguments and one that manufactures them. The pattern we encounter most often is a brand that ran a geo test, saw a result labeled "not statistically significant," and concluded the channel does not work - when the test as designed could never have detected the effect the brand plausibly had. Ten test markets, four weeks, a 40% spend reduction, and a conversion series that swings 9% week to week will return a null result almost regardless of the truth. The experiment did not fail to find lift. It was never capable of finding it.</p>
      <p>For luxury and high-consideration advertisers, this problem is structural rather than occasional. User-level holdouts are unavailable across most premium CTV and audio inventory, conversion volumes are low by design, and the purchase cycle runs longer than the typical test window. Geographic experimentation is usually the only credible route to a causal number - which makes getting the design math right the entire game. This piece covers the three experimental structures, how market count and baseline volatility set your minimum detectable effect, how long a test actually needs to run, how to match markets, and the seven errors that produce false nulls.</p>
      <h2>What a geo experiment actually measures</h2>
      <p>A geo experiment partitions geography into treatment and control groups, changes media spend in one group, and attributes the difference in outcomes to that change. The output is not a modeled contribution or a credited conversion path - it is a measured difference between a world where the media ran and a constructed estimate of a world where it did not. That is why it sits above <a href="/insights/multi-touch-attribution-high-consideration-brands">multi-touch attribution</a> in the evidentiary hierarchy: attribution allocates credit among touchpoints that all occurred, while a geo experiment establishes whether the outcome would have occurred anyway.</p>
      <p>Three structures dominate practice, and they are not interchangeable.</p>
      <table>
        <thead>
          <tr>
            <th>Design</th>
            <th>Structure</th>
            <th>Best for</th>
            <th>Typical duration</th>
            <th>Main weakness</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matched-market holdout</td>
            <td>Paired treatment and control markets selected on pre-period similarity</td>
            <td>Channel-level "does this work at all" questions</td>
            <td>6–12 weeks</td>
            <td>Requires enough comparable markets to pair</td>
          </tr>
          <tr>
            <td>Synthetic control</td>
            <td>A weighted composite of untreated markets constructed to track each treated market&apos;s pre-period series</td>
            <td>Brands with few markets or poor natural pairs</td>
            <td>8–16 weeks</td>
            <td>Needs 12+ months of clean pre-period data</td>
          </tr>
          <tr>
            <td>Switchback / time-based</td>
            <td>Same markets alternate on and off in randomized intervals</td>
            <td>Short-cycle categories with fast response</td>
            <td>8–16 weeks in 1–2 week blocks</td>
            <td>Invalid where carryover exceeds block length</td>
          </tr>
        </tbody>
      </table>
      <p>For most luxury advertisers, matched-market and synthetic control are the viable options. Switchback designs assume the effect decays within the block interval, which is false for a category where the consideration window runs sixty to two hundred days. Running one against a private aviation or luxury residential program produces contaminated blocks and a meaningless average.</p>
      <h2>Geo experiment design inputs: what sets minimum detectable effect</h2>
      <p>Minimum detectable effect (MDE) is the smallest true lift your test has a reasonable probability of detecting. It is determined before a single impression serves, by four inputs.</p>
      <p><strong>1. Baseline volatility.</strong> The week-to-week coefficient of variation in your outcome series within each market. This is the dominant term and the one most often ignored. A brand whose weekly qualified inquiries per market swing 6% has a fundamentally different test than one swinging 22%. Compute it from at least twelve months of history, after removing known seasonality.</p>
      <p><strong>2. Market count.</strong> Precision improves roughly with the square root of the number of geographic units. Going from 10 to 40 markets does not cut your MDE by four - it cuts it by about half. This is why market count is a costly lever and duration is often the cheaper one.</p>
      <p><strong>3. Test duration.</strong> More weeks means more observations per market and more averaging of idiosyncratic noise, with the same square-root relationship. Duration is usually the least expensive way to buy power, up to the point where seasonality and market drift begin to erode the match.</p>
      <p><strong>4. Spend delta.</strong> The size of the change between treatment and control. A 100% holdout - media fully dark in control - produces a far larger signal than a 30% budget reduction. A 30% delta requires roughly three times the sample of a 100% delta to detect the same underlying effect.</p>
      <p>Here is the practical consequence, using a baseline coefficient of variation of 12%, a full on/off delta, 80% power, and a 90% confidence threshold - the design parameters we consider the sensible default for a commercial media decision.</p>
      <table>
        <thead>
          <tr>
            <th>Matched markets per arm</th>
            <th>4-week test</th>
            <th>8-week test</th>
            <th>12-week test</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8</td>
            <td>16%–22% MDE</td>
            <td>11%–15% MDE</td>
            <td>9%–12% MDE</td>
          </tr>
          <tr>
            <td>15</td>
            <td>11%–15% MDE</td>
            <td>8%–11% MDE</td>
            <td>6%–9% MDE</td>
          </tr>
          <tr>
            <td>25</td>
            <td>9%–12% MDE</td>
            <td>6%–8% MDE</td>
            <td>5%–7% MDE</td>
          </tr>
          <tr>
            <td>40</td>
            <td>7%–9% MDE</td>
            <td>5%–6% MDE</td>
            <td>3.5%–5% MDE</td>
          </tr>
        </tbody>
      </table>
      <p>Read that table against the effect you are actually trying to find. If premium CTV is contributing a true 7% lift to qualified demand - a genuinely good result for an upper-funnel channel in a high-consideration category - then the 8-market, 4-week test at the top left has roughly a one-in-four chance of detecting it. Three brands out of four would run that test and conclude the channel does nothing.</p>
      <h2>Working the math backwards</h2>
      <p>The correct sequence is to start from the decision, not the calendar.</p>
      <ol>
        <li><strong>State the effect size that would change your behavior.</strong> If a 5% lift in qualified demand would justify sustaining the investment and 2% would not, your MDE target is 5% or better. Write this down before the test.</li>
        <li><strong>Measure baseline volatility from history.</strong> Twelve to twenty-four months, seasonality removed, computed at the geographic unit you intend to test.</li>
        <li><strong>Solve for the market-and-duration combination that reaches your MDE.</strong> Use the table above as a first pass, then confirm with a simulation against your own historical series.</li>
        <li><strong>Check whether you have enough comparable markets to support it.</strong> This is usually the binding constraint, and it is where most designs quietly break.</li>
        <li><strong>Price the holdout.</strong> Multiply the control-market spend by the test duration to get the media cost, then add the estimated foregone revenue.</li>
        <li><strong>Only then set dates.</strong></li>
      </ol>
      <p>A worked example. A luxury residential developer sells across 31 metros, with weekly qualified tour requests showing a 14% coefficient of variation per market. They want to detect a 6% lift with 80% power. At 14% volatility, a 6% MDE requires roughly 15 matched pairs at 12 weeks or 25 pairs at 8 weeks. With 31 markets, 15 pairs is impossible - pairing consumes two markets each, so 15 pairs requires 30 markets and leaves nothing for the treatment group to scale into. The workable design is therefore 12 control markets against 19 treatment markets using a synthetic control weighting, run for 14 weeks. The additional two weeks compensate for the smaller control arm.</p>
      <p>Notice what happened: the honest answer was a longer test, not a smaller one. Brands routinely make the opposite substitution.</p>
      <h2>Market matching in geo experiment design: the thresholds that matter</h2>
      <p>A matched-market design is only as good as its pairs. Four criteria, applied in order:</p>
      <ul>
        <li><strong>Pre-period outcome correlation of 0.80 or higher</strong> between paired markets across at least 52 weeks, computed on the actual outcome metric rather than on population or spend. Below 0.75, the pair contributes noise rather than precision.</li>
        <li><strong>Comparable scale</strong>, within roughly a 2:1 ratio of baseline volume. Pairing a market producing 400 weekly outcomes with one producing 30 lets the small market&apos;s variance dominate.</li>
        <li><strong>No spillover.</strong> Adjacent metros with shared media markets, commuting overlap, or overlapping out-of-home footprints will contaminate the control. This is a real constraint for <a href="/insights/dooh-affluent-location-targeting">DOOH and location-based</a> layers and for any streaming inventory sold at a regional rather than metro level.</li>
        <li><strong>Comparable affluent composition.</strong> For luxury advertisers, matching on total population is close to meaningless. Match on the density of the qualified audience - the same <a href="/insights/wealth-based-audience-segmentation">wealth-based segmentation</a> that defines the media buy should define the market pairing.</li>
      </ul>
      <p>Randomize the assignment within qualified pairs rather than selecting which market goes dark. Analyst-chosen controls are the most common source of bias in commercial geo testing, and the direction of the bias is always flattering.</p>
      <h2>Duration, carryover, and the cool-down window</h2>
      <p>Three duration components are frequently collapsed into one, which is why so many tests measure the wrong interval.</p>
      <p><strong>Pre-period.</strong> Twelve months minimum, twenty-four preferred, used to establish the match and the baseline. Synthetic control methods are effectively unusable below twelve months.</p>
      <p><strong>Burn-in.</strong> The first one to three weeks of a holdout do not reflect the absence of media, because prior exposure is still converting. In a category with a 90-day consideration cycle, demand in a newly dark market continues at near-normal levels for several weeks on residual awareness. Excluding a two-to-three-week burn-in from the analysis window is standard practice for high-consideration advertisers and is the single most common omission we see.</p>
      <p><strong>Measurement window.</strong> The interval actually analyzed, which must be long enough to clear burn-in and still deliver the observations your MDE requires. A test billed as "eight weeks" with a three-week burn-in is a five-week test, and its real MDE is materially worse than the planner assumed.</p>
      <p>Add a <strong>cool-down</strong> of four to six weeks after restoring spend before beginning another test in the same markets. Running back-to-back experiments without one contaminates the second test&apos;s pre-period with the first test&apos;s after-effects.</p>
      <h2>Reading the result: intervals, not point estimates</h2>
      <p>A geo experiment does not return "incremental ROAS was 3.4." It returns a distribution. The correct output is a point estimate with a confidence interval, and the interval is the part that governs the decision.</p>
      <p>Consider two results from the same category:</p>
      <ul>
        <li><strong>Test A:</strong> iROAS 3.1, 90% CI [2.4, 3.8]</li>
        <li><strong>Test B:</strong> iROAS 4.6, 90% CI [0.3, 8.9]</li>
      </ul>
      <p>Test B has the better headline number and is nearly worthless. Its interval spans outcomes from "destroyed value" to "extraordinary," which means the test lacked the power to constrain anything. Test A, with a tighter interval that excludes break-even, actually supports a budget decision. When an experiment returns an interval wider than roughly ±40% of the point estimate, report it as inconclusive and redesign rather than reporting the midpoint.</p>
      <p>Interpret a null result correctly as well. "We did not detect a significant effect" means the true effect is probably smaller than your MDE - not that it is zero. If your MDE was 14%, a null result is entirely consistent with a real and valuable 9% lift. State the MDE alongside every null finding; a null without its MDE is not a finding at all. This distinction is the core of what separates <a href="/insights/incrementality-vs-attribution-advertising">incrementality from attribution</a> in practice.</p>
      <h2>What the test actually costs</h2>
      <p>The holdout is not free, and pretending otherwise causes brands to under-resource tests and then distrust them.</p>
      <p>For a program spending $200,000 monthly across 30 markets, a 12-week holdout in 12 markets removes roughly 40% of spend for three months - about $240,000 in media redeployed to the treatment arm, plus foregone demand in the dark markets. At a true 6% lift, the cost of the darkness is the revenue that 6% would have produced over twelve weeks in 40% of the footprint.</p>
      <p>Against that, price the alternative. A brand spending $2.4M annually with no causal read is making a full-year allocation decision on modeled evidence. A single well-powered experiment that moves the credible range of iROAS from "somewhere between 1 and 6" to "2.4 to 3.8" is worth a substantial multiple of its cost, and the result informs budgeting for several quarters - which is why we generally recommend one to two properly powered tests per year rather than four underpowered ones. The same logic drives how we approach <a href="/insights/media-mix-optimization-luxury">media mix optimization</a> for clients with multiple channels in play.</p>
      <h2>Seven geo experiment design errors that produce false nulls</h2>
      <ol>
        <li><strong>Running the test before computing the MDE.</strong> If you cannot state the smallest lift your design can detect, you do not have a design.</li>
        <li><strong>Using a partial spend reduction when a full holdout was feasible.</strong> A 30% delta triples your required sample for the same detectable effect.</li>
        <li><strong>Selecting control markets by judgment.</strong> Randomize within qualified pairs; analyst selection biases toward the expected answer.</li>
        <li><strong>Failing to exclude a burn-in period.</strong> Residual awareness in high-consideration categories keeps dark markets converting for two to three weeks.</li>
        <li><strong>Matching on population rather than on qualified audience density.</strong> For luxury advertisers these are different variables, and only one of them is relevant.</li>
        <li><strong>Ignoring spillover between adjacent metros.</strong> Contaminated controls compress the measured difference toward zero, manufacturing a null.</li>
        <li><strong>Reporting the point estimate without the interval.</strong> A 4.6 iROAS with a [0.3, 8.9] interval is a number, not evidence.</li>
      </ol>
      <h2>How Stillwater Media designs geo experiments</h2>
      <p>We compute minimum detectable effect from the client&apos;s own historical series before proposing a structure, and we will say plainly when a client&apos;s market count and volatility make a credible test impossible at their current spend - in which case the honest recommendation is a synthetic control design, a longer window, or a different question. We randomize assignment within qualified pairs, exclude burn-in explicitly, and report intervals rather than headline numbers. When a test returns a null, we report the MDE alongside it so the result is interpreted as a bound rather than a verdict.</p>
      <p>If you are spending meaningfully on premium CTV, programmatic or audio and want a causal read you can defend to a board, <a href="/apply">apply to work with Stillwater Media</a>. We accept a limited number of engagements each quarter.</p>
    </ArticleLayout>
  )
}
