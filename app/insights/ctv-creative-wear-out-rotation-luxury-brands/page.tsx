import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/ctv-creative-wear-out-rotation-luxury-brands"
const title = "CTV Creative Wear-Out: Rotation Benchmarks for Luxury"
const description = "CTV creative wear-out erodes lift long before spend runs out. Benchmarks for how many spots to run, when to rotate, and how to measure decay for luxury brands."
const image = "/images/ctv-creative-wear-out-rotation-luxury-brands.png"
const imageAlt = "A luxury private screening room where a television image fades from color to grey beside a stack of film reels, illustrating Stillwater Media's guide to CTV creative wear-out and rotation benchmarks for luxury brands."
const publishedTime = "2026-09-18T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "CTV Creative Wear-Out: How Many Spots, How Often to Rotate, and How to Measure Decay for Luxury Brands",
    description: "Most luxury CTV campaigns lose a third of their lift before the flight ends because one spot runs too long. Benchmarks for creative count, rotation cadence, and wear-out measurement from Stillwater Media.",
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTV Creative Wear-Out: Rotation Benchmarks for Luxury Brands",
    description: "Lift per exposure on a single CTV spot typically falls 30 to 50 percent by the sixth household exposure. Here is how luxury brands should size, rotate and measure creative.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "What is CTV creative wear-out?",
    answer: "CTV creative wear-out is the decline in a video ad's incremental effect as the same household sees the same execution repeatedly on connected TV. It is a property of the creative rather than the media plan, which is what separates it from frequency saturation (when any additional exposure stops helping) and audience exhaustion (when a narrow segment has been fully reached). On premium streaming, lift per exposure for a single spot typically drops to 50 to 70 percent of its peak by the fifth or sixth household exposure and to 30 to 50 percent by the seventh to ninth, so a campaign that needs ten exposures per household cannot deliver them efficiently with one film.",
  },
  {
    question: "How many creatives should a CTV campaign have?",
    answer: "A useful rule is that each distinct execution delivers roughly four to six effective exposures per household before its lift falls below about 70 percent of peak, so divide your target household frequency by that number to get a floor. A four-to-six-week launch burst at frequency four to six needs two to three executions; a standard 12-week quarterly flight at frequency eight to twelve needs three to five; an always-on premium CTV plan needs five to eight executions refreshed in waves. Cutdowns of the same film count as roughly half an execution each because they refresh the ad pod but not the viewer's memory.",
  },
  {
    question: "How often should luxury brands rotate CTV creative?",
    answer: "Within a flight, run all executions concurrently with even or performance-weighted rotation rather than one after another, so that no single spot accumulates more than four or five exposures in a household during a quarter. Across flights, refresh at least one execution every six to eight weeks and turn over the full creative set every 20 to 26 weeks on always-on plans. Refresh earlier if message recall in brand-lift surveys drops below 60 percent of the first two weeks' reading, if incremental site-visit rate per thousand exposed households falls 25 percent or more with no change in audience or frequency, or if more than 30 percent of reached households are at exposure six or above on one execution.",
  },
  {
    question: "How do you measure creative fatigue on connected TV?",
    answer: "Completion rate cannot detect it because streaming ads are non-skippable and complete at the same rate regardless of effect. Instead, log household-level exposure counts per execution into a clean room, calculate incremental outcomes (site visits, inquiry starts, brand-lift survey response) against a holdout separately for exposure buckets of 1–2, 3–4, 5–6 and 7+, and plot the resulting decay curve for each spot at weeks four, eight and twelve. Comparing executions head-to-head at matched exposure, for instance lift per exposure at exposure three, separates a good spot that has worn out from a spot that was never effective.",
  },
  {
    question: "Does raising the frequency cap fix softening CTV results?",
    answer: "Usually it makes them worse. Softening results at moderate frequency are most often a sign of creative wear-out, and adding exposures of a worn execution pushes more households into the exposure buckets where lift is lowest and, for intrusive creative, can turn negative. The correct response is to add or refresh executions and re-weight rotation toward the spots with the flattest decay curves, then revisit the cap only once cross-execution frequency is being measured as a single household number.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "CTV Creative Wear-Out: How Many Spots, How Often to Rotate, and How to Measure Decay for Luxury Brands",
      description: "A practical guide to CTV creative wear-out for luxury and high-consideration advertisers: how lift per exposure decays with repeated household exposure on streaming, how many creative executions a campaign needs by budget and flight length, rotation and refresh cadence benchmarks, the difference between wear-out and frequency saturation, and a measurement protocol for detecting creative decay before it wastes spend.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption: "Every spot has a half-life. The expensive mistake is not knowing when yours has passed it.",
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
      keywords: "CTV creative wear-out, creative rotation benchmarks CTV, ad wear-out luxury brands, how many creatives for a CTV campaign, creative fatigue connected TV, CTV creative refresh cadence, streaming ad frequency and wear-out, creative decay curve advertising, luxury brand video creative testing, CTV creative optimization, brand lift decay by exposure",
      articleSection: "Premium CTV Strategy",
      wordCount: 2320,
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
      date="2026-09-18"
      readingTime="12 min read"
      category="Premium CTV Strategy"
      image={image}
      imageAlt={imageAlt}
      imageCaption="Every spot has a half-life. The expensive mistake is not knowing when yours has passed it."
      schemaMarkup={schemaMarkup}
    >
      <p>A luxury brand spends four to six months and several hundred thousand dollars producing a single hero film, launches it on Disney+, Netflix and Prime Video, and then runs it, unchanged, for the next nine months. By week ten the campaign is still delivering impressions on schedule, the completion rate is still 96 percent, and the dashboard looks fine. What the dashboard does not show is that incremental lift per exposure has fallen by roughly half. CTV creative wear-out is the most common, least measured source of waste we see in premium video plans, and it is almost entirely avoidable.</p>
      <p>This guide covers what Stillwater Media has learned running CTV creative for private aviation, luxury hospitality, wealth management and premium DTC clients: how lift decays with repeated household exposure on streaming, how many executions a flight actually needs, how often to rotate, and how to detect decay early enough to do something about it.</p>
      <h2>What CTV creative wear-out is (and what it is not)</h2>
      <p>Wear-out is the decline in a creative&apos;s marginal effect as the same household sees it repeatedly. It is a property of the creative, not the media. Two related problems get confused with it:</p>
      <ul>
        <li><strong>Frequency saturation</strong> is the point at which additional exposures of <em>any</em> creative stop producing incremental response for a household. It is a media-planning problem, solved with frequency caps and reach extension. We cover it in our guide to <a href="/insights/ctv-reach-and-frequency-planning">CTV reach and frequency planning</a>.</li>
        <li><strong>Audience exhaustion</strong> is what happens when a narrow affluent segment has been fully reached and spend is now buying repeat impressions by default. It is an audience problem, solved with expansion and lookalike modeling.</li>
      </ul>
      <p>Wear-out is distinct because it can happen well below the frequency cap and well before the audience is exhausted. A household at exposure five of a spot it has stopped noticing is not "saturated" in any useful sense; it would respond to a <em>different</em> spot. That is why the fix is creative rotation, not a lower cap.</p>
      <h2>How fast does lift decay on streaming?</h2>
      <p>Streaming accelerates wear-out relative to linear for three reasons. Ad loads are lighter (typically four to six minutes per hour on the major ad tiers versus 14 to 18 on linear), so each spot occupies a larger share of the viewer&apos;s ad memory. Pods are shorter, often one to three ads, so there is less clutter to hide in and more attention on each execution. And household-level targeting concentrates impressions: the same affluent household is deliberately reached again and again, which is the point of the targeting and also the reason the same spot burns faster.</p>
      <p>Across the brand-lift and holdout studies we have run on premium CTV, the pattern is consistent enough to plan against:</p>
      <table>
        <thead>
          <tr>
            <th>Household exposures to a single spot</th>
            <th>Typical share of peak incremental lift per exposure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1–2</td>
            <td>100% (peak; exposure two is often the strongest single exposure)</td>
          </tr>
          <tr>
            <td>3–4</td>
            <td>80–90%</td>
          </tr>
          <tr>
            <td>5–6</td>
            <td>50–70%</td>
          </tr>
          <tr>
            <td>7–9</td>
            <td>30–50%</td>
          </tr>
          <tr>
            <td>10+</td>
            <td>10–30%, occasionally negative for intrusive creative</td>
          </tr>
        </tbody>
      </table>
      <p>Two caveats on the table. First, these are ranges for a <em>single</em> execution; a household that sees three different executions over nine exposures behaves much more like a household at exposure three or four of any one of them. Second, the curve is steeper for direct-response-style creative (offer, deadline, hard CTA) and flatter for narrative brand films, which tend to hold up through roughly one to two additional exposures before decaying.</p>
      <p>For a luxury brand with a 30-to-120-day consideration cycle, the practical implication is that a household you need to reach eight to twelve times over a quarter cannot be reached with one spot without spending the back half of that frequency at a fraction of the front half&apos;s value.</p>
      <h2>How many creatives does a CTV campaign need?</h2>
      <p>The right creative count is a function of three things: how many times you need to reach each household, how long the flight runs, and how quickly your particular creative decays. A workable rule from the table above is that each execution has roughly four to six "good" exposures per household before it drops below 70 percent of peak. Divide your target household frequency by that, and you have a floor.</p>
      <table>
        <thead>
          <tr>
            <th>Flight profile</th>
            <th>Target household frequency</th>
            <th>Minimum distinct executions</th>
            <th>Recommended (with variants)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Short launch burst (4–6 weeks)</td>
            <td>4–6</td>
            <td>1–2</td>
            <td>2–3</td>
          </tr>
          <tr>
            <td>Standard quarterly flight (12–13 weeks)</td>
            <td>8–12</td>
            <td>2–3</td>
            <td>3–5</td>
          </tr>
          <tr>
            <td>Always-on premium CTV (26+ weeks)</td>
            <td>15–25 cumulative</td>
            <td>4–5</td>
            <td>5–8, refreshed in waves</td>
          </tr>
          <tr>
            <td>Launch + sustain (e.g., new aircraft, new development)</td>
            <td>10–14</td>
            <td>3</td>
            <td>4–6 with a sequenced arc</td>
          </tr>
        </tbody>
      </table>
      <p>"Distinct execution" means a spot a viewer would recognize as different: a new scene, a new story, a new product. Cutdowns of the same film (a :30 and a :15 from the same :60) count as roughly half an execution each for wear-out purposes; they refresh the pod but not the memory. Variants that swap the end card, the offer, or the voiceover count for less still, though they matter for sequencing.</p>
      <p>Luxury advertisers routinely under-build here. It is common for a brand to have one hero :60, two cutdowns, and nothing else for a six-month plan. The economics are lopsided: a brand spending $1.2 million on CTV over two quarters and running one film through it is, by the decay figures above, buying something like $350,000 to $450,000 of impressions at less than half their potential value. A second and third execution rarely costs more than a fraction of that, and modular shoots that capture three stories in one production can bring the incremental cost per execution down to the low tens of thousands.</p>
      <h2>Rotation cadence: how often to change the creative</h2>
      <p>There are two rotation questions and they need different answers.</p>
      <h3>Rotation within a flight</h3>
      <p>Run every execution concurrently, weighted, rather than sequentially. A three-spot flight where spot A runs for weeks one to four, B for five to eight and C for nine to twelve does not solve wear-out; it just serializes it, and each spot burns through its useful exposures in its own block. Concurrent rotation with an even or performance-weighted split keeps every household&apos;s exposure count <em>per spot</em> low while cumulative brand frequency climbs.</p>
      <p>Where the DSP and the publisher support it, we use household-level sequencing so that exposure one is always the anchor film, exposures two through four rotate among supporting stories, and later exposures carry the shortest cutdown with the most direct call to action. The sequencing logic is covered in more depth in our post on <a href="/insights/creative-sequencing-ctv-advertising">creative sequencing in CTV</a>. The wear-out benefit is that no single execution ever accumulates more than four or five exposures in a household during a quarter.</p>
      <h3>Refresh cadence across flights</h3>
      <p>For always-on plans, the benchmark we hold clients to is a refresh of at least one execution every six to eight weeks and a full creative-set turnover every 20 to 26 weeks. The refresh does not have to be a new production; re-editing existing footage into a materially different story counts, as does a seasonal re-grade with new music and end card. What does not count is changing the disclaimer.</p>
      <p>Three signals tell us a refresh is due earlier than scheduled:</p>
      <ol>
        <li>Brand-lift survey deltas on the "message recall" question fall below 60 percent of the flight&apos;s first-two-week reading.</li>
        <li>Incremental site-visit rate per thousand exposed households falls 25 percent or more from the first-four-week baseline with no change in audience or frequency.</li>
        <li>Household exposure distribution shows more than 30 percent of reached households at exposure six or above on a single execution.</li>
      </ol>
      <h2>Wear-out is faster in some luxury categories than others</h2>
      <p>Decay is not uniform across the verticals we serve, and the differences are large enough to change the creative plan.</p>
      <ul>
        <li><strong>Private aviation and fractional ownership</strong> wear out slowly on narrative creative (the cabin, the FBO, the time saved) and quickly on offer-led creative (jet-card pricing, hours bundles). Plan for three to four narrative executions per quarter and rotate offer creative every four weeks.</li>
        <li><strong>Luxury real estate and new developments</strong> decay fastest of any vertical because the creative is often a single walkthrough film and the audience is tightly geo-fenced. Two executions per phase is a floor; the residence, the amenities and the neighborhood should be three separate stories.</li>
        <li><strong>Wealth management and private banking</strong> run long-cycle, low-frequency plans where a single execution can survive a quarter, but message recall collapses on the second quarter. Refresh at the quarter boundary without exception.</li>
        <li><strong>Luxury hospitality and resorts</strong> benefit from seasonal refresh by nature; the risk is the shoulder season, when the same summer film runs into October. Build a shoulder-season cut in the original production.</li>
        <li><strong>Premium DTC and luxury goods</strong> behave most like direct response: steep decay, high sensitivity to offer and product, and a need for four to six executions per quarter with weekly performance weighting.</li>
      </ul>
      <h2>How to measure creative wear-out on CTV</h2>
      <p>Completion rate will not tell you. Viewers on ad-supported streaming tiers cannot skip, so a spot at exposure ten completes just as reliably as it did at exposure one. Viewability and attention metrics degrade only slightly. The only reliable measures are outcome-based and exposure-indexed.</p>
      <h3>The measurement protocol we use</h3>
      <ol>
        <li><strong>Log household-level exposure counts per execution.</strong> Most major DSPs and the leading CTV publishers can pass this into a clean room; if a partner cannot, that partner&apos;s inventory should carry a lower frequency allocation.</li>
        <li><strong>Index incremental outcomes by exposure bucket.</strong> Using exposed-versus-holdout lift from a clean-room match, calculate incremental site visits, inquiry starts or brand-lift survey response separately for households at exposure 1–2, 3–4, 5–6 and 7+ of each execution.</li>
        <li><strong>Plot the decay curve per execution at week four, eight and twelve.</strong> A healthy spot shows a gentle slope; a worn spot shows the 5–6 bucket at less than 60 percent of the 1–2 bucket.</li>
        <li><strong>Compare executions head-to-head at matched exposure.</strong> This is the single most useful chart in a CTV creative review: lift per exposure for each spot at exposure three. It separates a good spot that has worn out from a spot that was never good.</li>
        <li><strong>Re-weight rotation on the result, not on CTR.</strong> Click-through on CTV is noise. Shift weight to executions with the flattest curves and pull the steepest ones for re-edit.</li>
      </ol>
      <p>The requirements for this protocol, chiefly clean-room access and household-level logs, are the same ones described in our guide to <a href="/insights/data-clean-rooms-luxury-advertising">data clean rooms for luxury advertisers</a>. Brands without them can approximate with brand-lift surveys cut by self-reported exposure, but the sample sizes are usually too small to read at the execution level.</p>
      <h2>Common mistakes that accelerate wear-out</h2>
      <ul>
        <li><strong>Running the hero film on every channel at once.</strong> The same :60 on CTV, YouTube, paid social and pre-roll is a single execution in the viewer&apos;s memory, and cross-channel exposure counts against it. Vary the execution by channel, or accept that cross-platform frequency needs to be measured as one number.</li>
        <li><strong>Confusing cutdowns with new creative.</strong> A :15 cut from the hero film refreshes the pod but not the memory.</li>
        <li><strong>Sequential rather than concurrent rotation.</strong> Discussed above; it serializes decay instead of preventing it.</li>
        <li><strong>Raising the frequency cap to "make up" for softening results.</strong> This is the most expensive error. Softening results at moderate frequency are almost always wear-out, and more exposures of a worn spot make it worse.</li>
        <li><strong>Judging creative on completion rate.</strong> Non-skippable inventory produces near-uniform completion regardless of effect.</li>
        <li><strong>Letting the disclaimer be the only thing that changes.</strong> Regulatory copy updates are not refreshes.</li>
      </ul>
      <h2>Planning creative budget against wear-out</h2>
      <p>The cleanest way to justify creative investment to a CFO is to price the decay. Take the planned CTV spend, estimate the share of impressions that would land at exposure five or above on a single execution (for a quarterly plan at frequency ten, typically 40 to 55 percent), and apply the decay table. The result is the dollar value of impressions that a second and third execution would restore to near-full effectiveness. In our client base that figure is routinely two to four times the cost of producing the additional executions, before counting the lift from better sequencing.</p>
      <p>A reasonable planning ratio for premium CTV is that creative production should run 10 to 18 percent of media for a launch quarter and 6 to 10 percent for sustain quarters, provided the production is modular. Below those ranges, wear-out is almost certain to be costing more than the creative would have. This sits comfortably inside the overall splits we recommend in our post on <a href="/insights/luxury-advertising-budget-allocation">luxury advertising budget allocation</a>.</p>
      <h2>Where Stillwater Media fits</h2>
      <p>Stillwater Media plans and buys premium CTV on Disney+, Netflix, Prime Video and the major FAST and vMVPD platforms through private marketplace deals, with household-level exposure logs and clean-room lift measurement as a standard part of every engagement. Creative rotation, sequencing and wear-out measurement are built into our flight plans rather than added when results soften. We accept a limited number of new engagements each quarter. If your CTV plan is running one film longer than it should, we should talk. <a href="/apply">Apply to work with Stillwater Media</a>.</p>
    </ArticleLayout>
  )
}
