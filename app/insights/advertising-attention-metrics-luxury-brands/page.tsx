import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/advertising-attention-metrics-luxury-brands"
const title = "Advertising Attention Metrics: 2026 Benchmarks & Uses"
const description =
  "Advertising attention metrics separate a 22-second CTV impression from a 1.4-second banner. Here are the 2026 benchmarks and how to buy against them."
const image = "/images/advertising-attention-metrics-luxury-brands.png"
const imageAlt =
  "A single illuminated screen in a dark minimalist room drawing the eye, representing advertising attention metrics"
const publishedTime = "2026-08-27T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description,
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "22 attentive seconds on CTV. 1.4 on a desktop banner. Both count as one impression. Here is how to buy against the difference.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "What are advertising attention metrics?",
    answer:
      "Advertising attention metrics quantify whether a human actually looked at an ad and for how long, rather than whether the ad had a technical opportunity to be seen. They extend the viewability standard — 50% of pixels in view for one second — by adding measured or modeled human engagement, expressed either as attentive seconds per impression or as a placement quality index. The two dominant approaches are panel-based eye tracking, which observes gaze on an opt-in panel and models the result to census data, and modeled exposure quality, which scores placements from signals like share of screen, pod position, ad density, and dwell.",
  },
  {
    question: "What is the difference between Adelaide's AU and Lumen's APM?",
    answer:
      "Adelaide's AU is an Attention Unit score, a 1–100 index that rates the quality of a placement based on dozens of exposure signals calibrated against downstream outcomes. Lumen's APM is Attention Per Mille, a duration measure expressing total attentive seconds delivered per thousand impressions, derived from webcam-based eye-tracking panels. AU answers \u201chow good is this placement,\u201d APM answers \u201chow many seconds of attention did I buy,\u201d and the two are not mathematically convertible — a plan optimized to one will not automatically score well on the other.",
  },
  {
    question: "What are good attention benchmarks in 2026?",
    answer:
      "Current market benchmarks put average attentive time at roughly 1.4 seconds for a standard desktop display banner, 4.7 seconds for native, 9.2 seconds for rich media in-banner video, 6 to 11 seconds for online in-stream video, and approximately 22 seconds for connected TV. On index-based scoring, CTV placements typically fall between about 59 and 70, online video near 38, and standard display near 23. The variation within any single format is wider than the gap between formats, so format should be treated as a starting prior rather than a verdict.",
  },
  {
    question: "Do attention metrics predict sales?",
    answer:
      "They predict media quality and correlate with brand lift, aided recall, and, above certain thresholds, downstream conversion — but they measure the input, not the causal outcome. A campaign can post strong attention scores while producing no incremental business result, most commonly when the attention gains come from re-weighting delivery toward existing customers and prior site visitors who would have converted anyway. Attention should be used as an in-flight steering signal between holdout-based incrementality readouts, not as a substitute for them.",
  },
  {
    question: "Should luxury brands buy media based on attention metrics?",
    answer:
      "Yes, as a secondary optimization layer. High-consideration purchases require encoded memory that survives a 30-to-180-day consideration window, and memory encoding tracks attention duration far better than it tracks exposure count — which is precisely why frequency-heavy, attention-light plans underperform for luxury categories despite attractive CPMs. The practical implementation is to add cost per thousand attentive seconds to reporting, set format-specific thresholds rather than one global floor, cap attention-driven reallocation at 20% to 30% of budget per quarter, and reconcile against a holdout each quarter.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: title,
      description,
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption: imageAlt,
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
        "advertising attention metrics, attention metrics benchmarks 2026, attention per mille APM, Adelaide AU attention unit, CTV attention score benchmarks, viewability vs attention measurement, attentive seconds by format, premium CTV media quality, luxury brand media measurement, attention-based media buying",
      articleSection: "Media Quality & Measurement",
      wordCount: 2151,
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
      title="Advertising Attention Metrics: 2026 Benchmarks and How Luxury Brands Should Use Them"
      author="Stillwater Media"
      date="August 27, 2026"
      readingTime="11 min read"
      category="Media Quality & Measurement"
      image={image}
      imageAlt={imageAlt}
      imageCaption="A served impression and an attended impression are the same line in the media plan and entirely different events in the room."
      schemaMarkup={schemaMarkup}
    >
      <p>
        Advertising attention metrics exist because the industry&apos;s default currency measures the wrong thing. A
        served, viewable impression on a desktop banner and a served, viewable impression in a connected TV pod are
        counted identically, priced differently, and experienced in ways that are not remotely comparable. Current 2026
        benchmarks put average attentive time at roughly 1.4 seconds for a desktop banner, 4.7 seconds for a native unit,
        9.2 seconds for rich media in-banner video, and about 22 seconds for a CTV placement. Same word —
        &quot;impression&quot; — describing events that differ by a factor of fifteen.
      </p>
      <p>
        For a luxury or high-consideration brand, that gap is not an academic measurement problem. It is the difference
        between a media plan that builds memory in households worth $25,000 in lifetime value and one that accumulates
        cheap, technically-compliant impressions nobody looked at. This piece covers what advertising attention metrics
        actually measure, the 2026 benchmarks by format and channel, what attention does and does not predict, and how to
        put it into a buying workflow without letting it displace the measurement that matters more.
      </p>

      <h2>What advertising attention metrics actually measure</h2>
      <p>
        Attention measurement is an attempt to quantify the probability and duration of human visual engagement with an
        ad, rather than the mere technical opportunity to see it. Viewability — the MRC standard of 50% of pixels in view
        for one second for display, two seconds for video — established a floor. It answered &quot;could this have been
        seen?&quot; Attention metrics attempt the harder question: &quot;was it, and for how long?&quot;
      </p>
      <p>Two methodological schools dominate, and confusing them causes most of the misuse we see in the market.</p>

      <h3>Panel-based eye tracking</h3>
      <p>
        Firms like Lumen recruit opt-in panels who allow webcam-based gaze tracking while browsing normally. The panel
        produces observed data — where eyes actually went, for how long — which is then used to build predictive models
        applied to census-scale impression data. The headline metric here is <strong>Attention Per Mille (APM)</strong>:
        total attentive seconds delivered per thousand impressions. APM is useful because it is additive and comparable
        across formats, and because it converts directly into a cost efficiency figure: cost per thousand attentive
        seconds.
      </p>

      <h3>Modeled exposure quality</h3>
      <p>
        Firms like Adelaide take a different route, scoring placements rather than tracking eyes. The{" "}
        <strong>AU (Attention Unit)</strong> score is a 1–100 index built from dozens of placement-level signals — share
        of screen, position in page or pod, ad density, dwell, device, environment quality — calibrated against
        downstream outcome data. Adelaide&apos;s own 2026 Outcomes Guide, drawing on 60 case studies across 16
        industries, reports that attention-optimized campaigns averaged roughly a 33% lift in upper-funnel KPIs and a 53%
        increase in lower-funnel impact versus their controls.
      </p>
      <p>
        The distinction matters practically: APM is a duration measure and AU is a quality index. Neither is wrong, but
        they are not interchangeable, and a media plan optimized to one will not automatically look good on the other.
        Pick one as the plan&apos;s operating currency and use the other, if at all, as a check.
      </p>

      <h2>Attention benchmarks by format in 2026</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Format / environment</th>
              <th>Attentive seconds per impression</th>
              <th>Attention index (1–100)</th>
              <th>Directional cost per 1,000 attentive seconds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Connected TV (premium, in-stream)</td>
              <td>~22s</td>
              <td>58.9–69.5</td>
              <td>Low ($1.10–$2.00)</td>
            </tr>
            <tr>
              <td>Live sports CTV</td>
              <td>~22–28s</td>
              <td>62–72</td>
              <td>Low ($1.60–$2.80)</td>
            </tr>
            <tr>
              <td>Online video (in-stream, desktop/mobile)</td>
              <td>6–11s</td>
              <td>~38.4</td>
              <td>Moderate ($2.50–$5.00)</td>
            </tr>
            <tr>
              <td>Rich media / in-banner video</td>
              <td>~9.2s</td>
              <td>30–42</td>
              <td>Moderate ($3.00–$6.00)</td>
            </tr>
            <tr>
              <td>Native</td>
              <td>~4.7s</td>
              <td>26–36</td>
              <td>Moderate–high ($4.00–$8.00)</td>
            </tr>
            <tr>
              <td>Standard display banner</td>
              <td>~1.4s</td>
              <td>~23.2</td>
              <td>High ($6.00–$15.00)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Three things in that table deserve emphasis. First, CTV&apos;s dominance on attentive seconds is so large that
        even at a $45 CPM it is frequently the cheapest attention on the plan — a $45 CPM delivering 22 attentive seconds
        per impression costs roughly $2.05 per thousand attentive seconds, while a $4 CPM banner delivering 1.4 seconds
        costs about $2.86. The &quot;expensive&quot; channel is the efficient one, and the reverse is only true if you
        believe impressions and attention are the same commodity.
      </p>
      <p>
        Second, the spread <em>within</em> each format is wider than the spread <em>between</em> formats. A poorly
        placed, high-density CTV pod in a low-quality app can score below a well-placed native unit on a premium
        publisher. Format is a starting prior, not a verdict.
      </p>
      <p>
        Third, the attention index values above are directional ranges observed across the market, not a single
        vendor&apos;s published figure. Any vendor quoting a precise universal number for &quot;CTV attention&quot; is
        over-claiming; the honest version is a range that varies by pod position, ad load, and app quality.
      </p>

      <h2>Why attention matters more for high-consideration brands</h2>
      <p>
        For a $40 impulse purchase, a fraction of a second of brand exposure at high frequency can be enough —
        recognition at the shelf is the job. For a private aviation membership, a $4M listing, or a wealth management
        relationship, the job is different: build enough encoded memory that the brand is present in a consideration set
        that forms over 30 to 180 days, then survive a comparison process involving multiple people.
      </p>
      <p>
        Memory encoding is roughly a function of attention duration and emotional intensity, not exposure count. This is
        why frequency-heavy, attention-light plans underperform for high-consideration categories even when they look
        efficient on a CPM basis. Adding a fourteenth 1.4-second exposure contributes almost nothing to a decision that
        will be made three months later; a single 22-second exposure on a large screen in a living room contributes
        materially more.
      </p>
      <p>
        This is also the strongest available argument for the premium CTV allocation that most luxury brands under-fund.
        It is not a taste argument — it is that the channel delivers the duration threshold the category requires. Our
        view on{" "}
        <a href="/insights/premium-ctv-advertising-agency">where premium CTV belongs on a luxury plan</a> rests on
        exactly this arithmetic.
      </p>

      <h2>What attention metrics predict — and what they don&apos;t</h2>
      <p>
        Attention metrics are a leading indicator of media quality, and a reasonable proxy for the probability that an
        impression could have had an effect. They correlate with brand lift, aided recall, and, at sufficient AU
        thresholds, with downstream conversion. That is genuinely useful, and it is available in-flight, which
        incrementality readouts are not.
      </p>
      <p>
        What they do not do is establish causal business impact. Attention measures the input, not the outcome. A
        campaign can post excellent attention scores against an audience that was going to convert anyway, in which case
        you have bought expensive, well-attended, non-incremental impressions. We have audited plans that improved AU
        scores by 20% quarter over quarter while incremental lift went flat, because the attention gains came from
        re-weighting toward existing customers and site visitors.
      </p>
      <p>The correct hierarchy, in our practice:</p>
      <ol>
        <li>
          <strong>Incrementality</strong> is the verdict. Holdout-based lift answers whether the media caused anything.
          Nothing else does.
        </li>
        <li>
          <strong>Attention</strong> is the in-flight steering signal. It tells you which placements are worth keeping
          between incrementality readouts, when you have weeks of delivery and no causal read yet.
        </li>
        <li>
          <strong>Viewability and IVT</strong> are the floor. They are hygiene checks, not optimization targets. A plan
          at 78% viewability and 0.2% invalid traffic has cleared the bar; pushing viewability to 84% is not a strategy.
        </li>
        <li>
          <strong>Click-through rate</strong> is noise for this category and should not appear in a luxury reporting deck
          at all.
        </li>
      </ol>
      <p>
        Treating attention as the verdict rather than the steering signal is the single most common error we see in
        brands that have adopted these metrics enthusiastically. Attention is a better proxy than what it replaced. It is
        still a proxy. The relationship between{" "}
        <a href="/insights/incrementality-vs-attribution-advertising">incrementality and attribution</a> applies here in
        the same shape: proxies steer, experiments decide.
      </p>

      <h2>How to put attention metrics into a luxury media plan</h2>
      <p>Six steps, in order of implementation:</p>
      <ol>
        <li>
          <strong>Establish a pre-period baseline.</strong> Measure attention on the existing plan for four to six weeks
          before changing anything. Without a baseline you cannot distinguish an improvement from a mix shift.
        </li>
        <li>
          <strong>Set format-specific thresholds, not one global floor.</strong> A single AU floor across the plan will
          simply defund display and native entirely. Set a threshold within each format — for example, keep the top
          two-thirds of placements by score inside each channel — so the metric optimizes composition rather than just
          reallocating to CTV.
        </li>
        <li>
          <strong>Buy attention-curated inventory where it is offered.</strong> Several supply-side platforms now expose
          attention-scored inventory packages and pre-bid segments. These typically carry a 5% to 15% CPM premium and are
          usually worth it, because the alternative is paying full price for the low-attention tail and blocking it after
          the fact.
        </li>
        <li>
          <strong>Report cost per thousand attentive seconds alongside CPM.</strong> This is the single most clarifying
          change a luxury advertiser can make to a reporting template. It reorders the channel ranking immediately and
          makes the premium CTV case without argument.
        </li>
        <li>
          <strong>Cap attention-driven reallocation at 20% to 30% of budget per quarter.</strong> Attention scores are
          placement-level and noisy at small volumes; aggressive reallocation chases noise and destabilizes reach curves.
        </li>
        <li>
          <strong>Reconcile against a holdout every quarter.</strong> If attention improves and incremental lift does
          not, the attention gains are coming from audience composition rather than media quality. Investigate before
          continuing.
        </li>
      </ol>

      <h2>Common mistakes with attention metrics</h2>
      <ul>
        <li>
          <strong>Mixing vendors mid-flight.</strong> APM and AU are not convertible. Switching providers mid-campaign
          invalidates the trend line.
        </li>
        <li>
          <strong>Optimizing to attention alone.</strong> Produces plans that skew heavily toward retargeting and
          existing customers — high attention, low incrementality.
        </li>
        <li>
          <strong>Applying a single threshold across formats.</strong> Defunds every non-video channel by construction,
          whether or not that is the right plan.
        </li>
        <li>
          <strong>Confusing dwell with attention.</strong> Time-in-view is a technical measure; attention is a human
          one. Long dwell on an unattended screen is worthless.
        </li>
        <li>
          <strong>Ignoring creative.</strong> Attention data reflects both placement and creative quality. A weak asset
          scores poorly on strong inventory, and the diagnosis usually gets pinned on the media.
        </li>
        <li>
          <strong>Treating scores as absolute.</strong> Attention indices are relative measures calibrated to a market. A
          55 is not a grade; it is a percentile position.
        </li>
      </ul>

      <h2>Attention outside the screen: DOOH, streaming audio, and podcasts</h2>
      <p>
        Visual attention frameworks cover roughly two-thirds of a typical luxury plan and say nothing useful about the
        rest. Digital out-of-home, streaming audio, and podcasts all carry meaningful budget for brands targeting
        affluent households, and each requires a different attention proxy.
      </p>
      <p>
        For DOOH, the working measure is a modeled likelihood-to-see built from screen size, dwell time at the location,
        viewing distance, angle, and pedestrian or vehicular throughput. A screen inside a private terminal lounge where
        the average dwell is 40 minutes is a fundamentally different attention asset than a roadside unit passed at 55
        miles per hour, even when both report the same impression count from the same measurement vendor. Ask for the
        dwell and distance inputs, not just the delivered impressions.
      </p>
      <p>
        For streaming audio and podcasts, attention is approximated through listen-through rate, host-read versus
        announcer-read format, ad position within the episode, and — where available — device and environment signals
        distinguishing headphone from speaker listening. Host-read midroll placements in shows with established audience
        relationships consistently outperform programmatically inserted preroll on every available proxy, often by a wide
        margin, which is why we buy podcast inventory by show rather than by category whenever the scale allows.
      </p>
      <p>
        The unifying rule across all three: no cross-channel attention currency exists that is honest. Compare within a
        channel, and use incrementality — not a blended attention score — to arbitrate between them.
      </p>

      <h2>Where this leaves a luxury media plan</h2>
      <p>
        The practical conclusion is not complicated. Add cost per thousand attentive seconds to the reporting template.
        Use attention to prune the weakest third of placements within each format. Keep buying premium, curated supply
        through <a href="/insights/private-marketplace-deals-luxury-advertising">private marketplace deals</a>, because
        attention-scored inventory and clean supply paths turn out to be very nearly the same set. And keep the holdout
        running, because attention will tell you which impressions were seen, and only an experiment will tell you which
        ones mattered.
      </p>

      <h2>Work with Stillwater Media</h2>
      <p>
        We build attention measurement into premium CTV and programmatic plans for luxury brands as a steering layer
        beneath a holdout-based incrementality design — never as a substitute for it. That means baseline periods,
        format-specific thresholds, cost per attentive second in every report, and a quarterly reconciliation against
        measured lift. We take a limited number of engagements each quarter so that this level of rigor is applied to
        every account.
      </p>
      <p>
        <a href="/apply">Apply to work with Stillwater Media</a> to have your current plan evaluated on attention and
        incrementality together.
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
