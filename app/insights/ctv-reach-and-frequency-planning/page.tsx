import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/ctv-reach-and-frequency-planning"
const title = "CTV Reach and Frequency: Deduplicating Streaming Buys"
const description =
  "CTV reach and frequency planning: how duplication inflates delivery 25-45%, reach curve math, effective frequency ranges, and how to deduplicate streaming buys."
const image = "/images/ctv-reach-and-frequency-planning.png"
const imageAlt =
  "a darkened living room lit by a large screen, representing household-level deduplicated reach measurement across streaming platforms."
const publishedTime = "2026-09-08T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "CTV Reach and Frequency: How to Deduplicate a Multi-Platform Streaming Buy",
    description:
      "Buy five streaming platforms separately and 25% to 45% of your delivery lands on households you already reached. Here is the reach curve math, the effective frequency ranges, and the deduplication architecture that fixes it.",
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTV Reach and Frequency: Deduplicating Streaming Buys",
    description:
      "The same affluent household streams Netflix, Disney+, Hulu and Prime Video. Buy all four separately and you are paying four times to reach one home.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "What is a good reach and frequency for a CTV campaign?",
    answer:
      "For luxury and high-consideration advertisers, the efficient operating zone is generally 45% to 65% deduplicated household reach against the defined target audience within a flight, at an effective frequency of 3 to 5 exposures per household per four weeks for an established brand and 5 to 8 for an unfamiliar one. Pushing deduplicated reach beyond 70% is rarely economical because incremental reach points cost roughly six times the baseline at that level, so the additional budget buys frequency with reach as an incidental byproduct.",
  },
  {
    question: "How much audience duplication happens across streaming platforms?",
    answer:
      "In multi-platform streaming buys assembled as separate direct or platform-managed deals, duplicated impressions typically account for 25% to 45% of total delivery, and can exceed 55% when the addressable universe is under a million households. Affluent homes are the most heavily subscribed households in the market - commonly four to seven streaming services - so the audiences luxury brands target are precisely the ones most likely to appear on every platform in the plan.",
  },
  {
    question: "Can you add up the reach reported by each streaming platform?",
    answer:
      "No. Each platform reports the households it served without visibility into the other platforms serving the same home, so summing platform-level reach double-counts every duplicated household. In a five-platform plan, summed reach commonly overstates true deduplicated reach by 30% to 60% - five platforms each reporting 12% reach usually resolve to somewhere between 38% and 45% deduplicated, not 60%.",
  },
  {
    question: "How do you deduplicate reach across multiple streaming platforms?",
    answer:
      "The most practical architecture is consolidating streaming spend into a single demand-side platform seat and buying each streaming platform through negotiated private marketplace deals rather than parallel direct buys, because a DSP maintains one frequency ledger per household identifier across every deal running through it. Deduplication quality improves further when a consistent identity graph resolves households across devices, and it requires that frequency caps be set at household level rather than device level, since a device-level cap of four across three connected devices in one home is effectively a household cap of twelve.",
  },
  {
    question: "Why is average frequency a misleading metric in CTV reporting?",
    answer:
      "Average frequency conceals the distribution that determines outcomes: a campaign averaging 4.2 exposures per household could have most homes in a healthy 3-to-6 band, or could have 60% of homes at a single exposure and 15% above twenty, with an identical average. The correct analysis reports the percentage of reached households at 1, 2, 3–5, 6–10, 11–20, and 20+ exposures, and judges the buy on the share of households landing inside the intended effective frequency band, which is typically 55% to 70% in well-controlled programs and under 35% in poorly deduplicated multi-platform buys.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "CTV Reach and Frequency: How to Deduplicate a Multi-Platform Streaming Buy",
      description:
        "A planning and measurement guide to CTV reach and frequency for luxury advertisers: how audience duplication across streaming platforms inflates delivery by 25% to 45%, reach curve and diminishing-returns math, effective frequency ranges by objective, frequency distribution analysis, deduplication architecture through a single DSP and identity graph, cross-platform measurement currencies, and a five-step planning framework.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption:
          "A quiet living room lit only by a large screen, representing household-level reach measurement in connected TV",
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
        "CTV reach and frequency, deduplicated reach streaming, cross-platform frequency management, CTV reach curve diminishing returns, effective frequency benchmarks, streaming media planning, household reach measurement CTV, unduplicated audience across publishers, CTV frequency distribution analysis, incremental reach cost per point",
      articleSection: "Media Measurement",
      wordCount: 2080,
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
      title="CTV Reach and Frequency: How to Deduplicate a Multi-Platform Streaming Buy"
      author="Stillwater Media"
      date="September 8, 2026"
      readingTime="15 minutes"
      category="Media Measurement"
      image={image}
      imageAlt={imageAlt}
      imageCaption="One household, five streaming subscriptions, and five media invoices that each claim to have reached it for the first time."
      schemaMarkup={schemaMarkup}
    >
      <p>CTV reach and frequency is the least rigorous part of most streaming media plans, and it is the part that quietly determines whether a campaign works. The reason is structural: linear television had a single measurement currency and a single planning model, so reach and frequency were computed once, for the whole schedule. Streaming has neither. Each platform reports its own reach, each counts a household it served as a household it reached, and none of them can see the four other platforms serving the same living room. Add the numbers up and you get a reach figure that is confidently, arithmetically wrong.</p>
      <p>For luxury and high-consideration advertisers this matters more than it does for mass-market brands, because the addressable universe is small. When the qualified audience is 900,000 households rather than 90 million, duplication does not merely waste budget - it collapses the campaign into a narrow set of homes seeing the same spot twenty times while the rest of the target set never sees it once. This piece covers the math, the benchmark ranges, and the architecture that produces a deduplicated, controllable frequency distribution across streaming.</p>
      <h2>Why duplication is worse in streaming than most planners assume</h2>
      <p>Affluent households are the most heavily subscribed households in the market. A $2M+ home with two adults typically carries four to seven streaming subscriptions, and a large share of them are ad-supported tiers. That is the whole problem in one sentence: the audience a luxury brand is trying to reach is precisely the audience most likely to appear on every platform in the plan.</p>
      <p>When we audit multi-platform streaming buys assembled through separate direct or platform-managed deals, the duplicated share of impressions typically falls between 25% and 45% of total delivery. In narrowly targeted luxury campaigns - where the addressable universe is under a million households - we have seen it exceed 55%. Duplication of that magnitude does three things:</p>
      <ol>
        <li><strong>It inflates the reported reach.</strong> Summed platform-level reach can overstate true deduplicated reach by 30% to 60% in a five-platform plan.</li>
        <li><strong>It concentrates frequency.</strong> The households that subscribe to everything absorb an outsized share of impressions, producing a long right tail in the frequency distribution - homes at 25, 40, 60 exposures - while a meaningful share of the target set sits at zero.</li>
        <li><strong>It corrupts the efficiency read.</strong> Effective CPM against <em>unique households reached</em> can be two to three times the nominal CPM once duplication is accounted for, which changes every channel comparison in the plan.</li>
      </ol>
      <h2>The reach curve, and where the money stops working</h2>
      <p>Reach against any defined audience follows a concave curve. The first impressions buy reach almost one-for-one; later impressions increasingly land on households already reached. The practical consequence is that incremental reach gets progressively more expensive, and there is a point past which additional budget in the same channel buys almost nothing but frequency.</p>
      <p>A useful way to express this is cost per incremental reach point - the spend required to move deduplicated household reach up by one percentage point against the target audience.</p>
      <table>
        <thead>
          <tr>
            <th>Reach level against target</th>
            <th>Typical incremental cost per reach point</th>
            <th>What the budget is actually buying</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0%–25%</td>
            <td>1.0x baseline</td>
            <td>Almost pure new reach</td>
          </tr>
          <tr>
            <td>25%–45%</td>
            <td>1.3x–1.7x baseline</td>
            <td>Mostly new reach</td>
          </tr>
          <tr>
            <td>45%–60%</td>
            <td>2.0x–3.0x baseline</td>
            <td>Mixed reach and frequency</td>
          </tr>
          <tr>
            <td>60%–70%</td>
            <td>3.5x–5.0x baseline</td>
            <td>Mostly frequency</td>
          </tr>
          <tr>
            <td>70%+</td>
            <td>6x baseline and rising steeply</td>
            <td>Frequency, with reach as a byproduct</td>
          </tr>
        </tbody>
      </table>
      <p>For most luxury campaigns against a well-defined affluent household set, the efficient operating zone lands between 45% and 65% deduplicated reach within a flight. Pushing beyond 70% is rarely defensible unless the campaign has a hard date - a launch, an event, a seasonal window - that justifies paying six times the baseline for the last few points.</p>
      <p>The corollary matters just as much: if a plan is sitting at 30% reach with an average frequency of 14, the correct move is almost never more budget. It is to redistribute the existing budget across more households.</p>
      <h2>Effective frequency: how many exposures actually do the work</h2>
      <p>Effective frequency is the number of exposures required before an ad meaningfully shifts the outcome you are buying. It is not a universal number, and the single most common planning error we see is applying a legacy "three exposures" rule to a category where it does not apply.</p>
      <p>Working ranges we plan against for high-consideration and luxury advertisers, per household, per four-week period:</p>
      <ul>
        <li><strong>Awareness and brand introduction for an unfamiliar brand:</strong> 5–8 exposures. Unfamiliar luxury brands need more repetition than incumbents, not less - recognition is the entire task.</li>
        <li><strong>Consideration for an established brand:</strong> 3–5 exposures. Enough to maintain salience across a long sales cycle without irritation.</li>
        <li><strong>Sustained always-on presence:</strong> 2–4 exposures per four weeks, deliberately low, because the flight is long and the cumulative exposure is what matters.</li>
        <li><strong>Event, launch, or hard-date campaigns:</strong> 6–10 exposures, compressed into a shorter window.</li>
      </ul>
      <p>Above roughly 10 to 12 exposures per household per four weeks, we consistently observe brand favorability flattening and then declining in premium categories. The wear-out point is not fixed - creative variety, ad length, and content environment all move it - but the shape is reliable: diminishing returns first, then negative returns. Paying a $55 CPM to actively annoy a household is the most expensive mistake available in CTV.</p>
      <h2>Frequency distribution beats average frequency</h2>
      <p>Average frequency is the most misleading number on a CTV report. A campaign averaging 4.2 exposures per household can be well-distributed - most homes between 3 and 6 - or catastrophically skewed, with 60% of homes at 1 and 15% of homes above 20. The averages are identical. The outcomes are not.</p>
      <p>Any serious CTV reach and frequency analysis requires the frequency distribution: the percentage of reached households at 1 exposure, 2, 3–5, 6–10, 11–20, and 20+. Three diagnostics follow directly from it:</p>
      <ul>
        <li><strong>The 1x share.</strong> Households reached exactly once are, in most high-consideration categories, close to wasted - one exposure rarely does anything durable. If more than 35% of reached households sit at 1x, the plan is spread too thin or the flight is too short.</li>
        <li><strong>The 20x+ share.</strong> Anything above 5% to 8% of reached households indicates a frequency control failure, usually caused by uncapped duplication across platforms.</li>
        <li><strong>The effective-band share.</strong> The percentage of households landing inside the target effective frequency range is the single best summary metric for whether the buy is working. Well-controlled programs get 55% to 70% of reached households into the intended band; poorly deduplicated multi-platform buys routinely come in under 35%.</li>
      </ul>
      <h2>How to actually deduplicate: four architectures compared</h2>
      <table>
        <thead>
          <tr>
            <th>Approach</th>
            <th>Deduplication quality</th>
            <th>Premium inventory access</th>
            <th>Practical notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Separate direct buys per platform</td>
            <td>Poor - no shared frequency ledger</td>
            <td>Excellent</td>
            <td>Each platform caps only its own delivery; duplication is invisible and uncontrolled</td>
          </tr>
          <tr>
            <td>Single DSP, multiple PMP deals</td>
            <td>Strong - one frequency ledger across deals</td>
            <td>Very good with negotiated deals</td>
            <td>The default architecture we recommend for most luxury advertisers</td>
          </tr>
          <tr>
            <td>Single DSP plus identity graph resolution</td>
            <td>Strongest - household-level dedup across devices and platforms</td>
            <td>Very good</td>
            <td>Requires an identity partner and consistent household keys; best for narrow, high-value audiences</td>
          </tr>
          <tr>
            <td>Multiple DSPs</td>
            <td>Poor to moderate</td>
            <td>Good</td>
            <td>Frequency cannot be shared across seats without a third-party layer; avoid unless there is a compelling access reason</td>
          </tr>
        </tbody>
      </table>
      <p>The single most consequential decision is consolidating streaming spend into one demand-side platform seat with multiple private marketplace deals rather than assembling the plan from parallel direct buys. A DSP maintains one frequency ledger per household identifier across every deal running through it, which means the cap is enforced across Disney+, Netflix, Prime Video, Hulu, Max, Paramount+, Peacock, Roku, and Samsung inventory simultaneously rather than nine times independently.</p>
      <p>Three supporting requirements:</p>
      <ol>
        <li><strong>Consistent household identity.</strong> Deduplication is only as good as the key. CTV&apos;s lack of cookies is an advantage here - IP-based household resolution and hashed-email identity graphs are more stable in the living room than anywhere else in digital - but the identity partner must be consistent across all deals or the ledger fragments.</li>
        <li><strong>Household-level caps, not device-level.</strong> A device-level cap of 4 across three connected devices in one home is a household cap of 12.</li>
        <li><strong>Cross-channel caps where feasible.</strong> Households seeing CTV, online video, and display should be capped as one audience, not three. Sequencing is valuable; independent uncapped repetition is not.</li>
      </ol>
      <h2>Cross-platform measurement: what can verify the numbers</h2>
      <p>Deduplication executed inside a DSP still needs independent verification, because the DSP&apos;s own view is limited to inventory it transacted. The credible options for cross-platform reach and frequency validation are Nielsen ONE, VideoAmp, iSpot, and Comscore, alongside the platform-specific reporting each streamer provides. The Media Rating Council&apos;s accreditation status is a reasonable first filter when selecting among them.</p>
      <p>What to ask a measurement partner before signing:</p>
      <ul>
        <li>Does the reported reach cover platforms bought outside this DSP seat, including any direct buys?</li>
        <li>Is reach reported at household or individual level, and which is being used in the deduplication?</li>
        <li>What is the panel or dataset size in the specific geographies and audience segments that matter to this brand?</li>
        <li>Can the frequency distribution be exported, not just the average?</li>
      </ul>
      <p>The last question filters out more vendors than the others combined.</p>
      <h2>A five-step planning framework</h2>
      <ol>
        <li><strong>Size the addressable universe first.</strong> Before allocating a dollar, establish how many qualified households exist. If the target is 620,000 households, a $1.4M flight at a $48 CPM delivers roughly 29 million impressions - about 47 impressions per household if reach were perfect. That number, computed before launch, immediately tells you the plan is frequency-constrained, not reach-constrained, and should be rebalanced or the audience broadened.</li>
        <li><strong>Set the target reach and effective frequency band explicitly.</strong> Write them into the plan as objectives - for example, 55% deduplicated household reach at 4–6 exposures per four weeks - so the buy has a defined shape rather than a spend target.</li>
        <li><strong>Consolidate into one DSP seat with negotiated private marketplace deals</strong> across the streaming platforms that matter, and enforce a single household-level frequency cap across all of them.</li>
        <li><strong>Review the frequency distribution weekly, not the average.</strong> Adjust caps and pacing against the effective-band share and the 20x+ tail.</li>
        <li><strong>Validate with an independent currency and a holdout.</strong> Cross-platform measurement confirms the reach figure; a geo or audience holdout confirms that the reach purchased produced incremental outcomes. Reach without measured incrementality is a delivery metric, not a business result.</li>
      </ol>
      <h2>The mistakes that recur most often</h2>
      <ul>
        <li><strong>Summing platform-reported reach.</strong> Five platforms reporting 12% reach each do not produce 60% reach. They typically produce 38% to 45%.</li>
        <li><strong>Capping frequency per deal instead of per household.</strong> Six deals each capped at 3 per week is a household cap of 18 per week.</li>
        <li><strong>Reporting average frequency without distribution.</strong> It hides both failure modes simultaneously.</li>
        <li><strong>Buying more budget to fix low reach.</strong> Additional budget in an already-saturated audience buys frequency. Broader or better-constructed audience segments buy reach.</li>
        <li><strong>Treating device and household as interchangeable.</strong> They diverge by a factor of 2.5 to 4 in affluent homes, which is exactly where luxury campaigns run.</li>
      </ul>
      <h2>Work with Stillwater Media</h2>
      <p>Stillwater Media plans and buys premium CTV for luxury and high-consideration brands where the addressable audience is small enough that duplication is not a rounding error. We consolidate streaming spend into a single deduplicated buying architecture, negotiate private marketplace deals across the major ad-supported platforms, enforce household-level frequency control, and validate reach with independent cross-platform measurement and incrementality testing rather than platform-reported delivery.</p>
      <p>If your streaming plan reports strong reach but your frequency distribution has never been examined, there is almost certainly recoverable budget in it.</p>
      <p><strong><a href="/apply">Apply to work with Stillwater Media →</a></strong></p>

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
