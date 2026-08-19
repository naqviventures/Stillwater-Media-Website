import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/true-incremental-lift-measurement"
const imagePath = "/images/true-incremental-lift-measurement.png"

export const metadata: Metadata = {
  title: "True Incremental Lift Measurement: A Practical Guide",
  description:
    "True incremental lift measurement explained: the lift equation, five test designs compared, sample size math, and the errors that inflate reported lift.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "True Incremental Lift Measurement: How to Calculate What Your Media Actually Caused",
    description:
      "A senior strategist's guide to true incremental lift measurement — the lift equation and its four variants, the five test designs compared on bias and cost, the minimum detectable effect math that determines whether a test can succeed before you run it, and the six contamination sources that make reported lift look larger than reality.",
    type: "article",
    url: canonicalUrl,
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
        alt: "True incremental lift measurement — Stillwater Media",
      },
    ],
    locale: "en_US",
    siteName: "Stillwater Media",
    publishedTime: "2026-08-18",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Incremental Lift Measurement",
    description:
      "Most reported lift is inflated by contamination, not causation. The lift equation, five test designs compared, MDE math, and the six errors that break results.",
    images: [imagePath],
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "True Incremental Lift Measurement: How to Calculate What Your Media Actually Caused",
      description:
        "A senior media strategist's guide to true incremental lift measurement — the difference between observed performance and causal contribution, the lift equation and its four working variants including absolute lift, relative lift, incremental ROAS and incremental CAC, a comparison of five test designs across bias, cost and time to read, the minimum detectable effect calculation that determines whether a test is worth running before it launches, the six contamination sources that systematically inflate reported lift, and the measurement cadence luxury and high-consideration brands should operate on.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${imagePath}`,
        width: 1200,
        height: 630,
        caption: "True incremental lift measurement — Stillwater Media",
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
        "true incremental lift measurement, incremental lift measurement, incrementality testing advertising agency, holdout testing advertising, incrementality vs attribution advertising, brand lift measurement CTV, media measurement beyond last click, advertising ROI luxury brands, customer acquisition cost reduction luxury, geo holdout test design, incremental ROAS calculation",
      articleSection: "Measurement & Attribution",
      wordCount: 2249,
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
          name: "True Incremental Lift Measurement",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is true incremental lift measurement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "True incremental lift measurement is the process of isolating the conversions or revenue that occurred because a campaign ran and would not have occurred otherwise, calculated as the difference in outcome rate between a randomized exposed group and a comparable unexposed control group. It differs from attribution, which assigns credit for conversions that already happened to the touchpoints that preceded them without establishing whether those touchpoints caused anything. Incrementality answers \"what did this media cause,\" while attribution answers \"what did this media touch\" — and for most channels those two numbers differ by a wide margin.",
          },
        },
        {
          "@type": "Question",
          name: "How do you calculate incremental lift?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Subtract the control group's conversion rate from the exposed group's conversion rate to get absolute lift in percentage points, then multiply by the size of the exposed group to get incremental conversions. Relative lift is absolute lift divided by the control conversion rate, incremental ROAS is incremental revenue divided by media spend, and incremental CAC is media spend divided by incremental customers. Always report the confidence interval and the control baseline alongside relative lift, because a large relative lift on a very small baseline is often statistical noise rather than a real effect.",
          },
        },
        {
          "@type": "Question",
          name: "Why is platform-reported ROAS higher than incremental ROAS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Platform-reported ROAS counts every conversion that occurred within an attribution window after an ad impression or click, including conversions that would have happened with no advertising at all. Because delivery algorithms optimize toward users already likely to convert, the exposed population is systematically more valuable than the average user before any ad serves. In practice this means retargeting and branded search — which target people already in-market or already searching your brand name — show the largest gaps, frequently overstating incremental contribution by 200% to 600%.",
          },
        },
        {
          "@type": "Question",
          name: "How long should an incrementality test run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Test duration should be set by your conversion lag distribution and required sample size, not by convenience. Geo holdout tests for premium video typically need six to ten weeks, ghost-ad tests on programmatic display three to six weeks, and user-level holdouts four to eight weeks — plus a two-to-four-week pre-period A/A validation to confirm the groups behave identically before treatment starts. Brands with 90-to-180-day sales cycles, common in private aviation and luxury real estate, must extend the measurement window to match the actual lag to close or the test will report no lift simply because the conversions have not landed yet.",
          },
        },
        {
          "@type": "Question",
          name: "Can luxury brands with small audiences run valid incrementality tests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but the test design has to respect the volume constraint. Small-audience brands should test at the channel level rather than the creative or placement level, use a mid-funnel proxy event such as a consultation request or configurator completion that occurs eight to twenty times more often than a closed sale, and calculate the minimum detectable effect before launching to confirm the test can actually resolve an effect of plausible size. A brand with a 0.9% baseline conversion rate can detect a 20% relative lift with roughly 58,000 users per group, but detecting a 5% lift would require close to a million per group — which is why setting a realistic MDE in advance is the difference between a decisive result and an inconclusive one.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <ArticleLayout
      title="True Incremental Lift Measurement: How to Calculate What Your Media Actually Caused"
      author="Stillwater Media"
      date="August 18, 2026"
      readingTime="15 min read"
      category="Measurement & Attribution"
      image={imagePath}
      imageAlt="Stillwater Media guide illustration on true incremental lift measurement showing an antique brass equal-arm balance with two nearly level pans of polished spheres on dark marble"
      imageCaption="Incrementality is a difference, not a total — and the entire discipline is about measuring that difference cleanly enough to trust it."
      schemaMarkup={schemaMarkup}
    >
      <p>
        True incremental lift measurement is the practice of isolating the conversions, revenue, or pipeline that exist{" "}
        <em>because</em> a campaign ran and would not have existed otherwise. It is a subtraction, not a sum. Every other
        reporting number a media platform produces — attributed conversions, view-through revenue, platform-reported
        ROAS — is a count of outcomes that happened near an ad. Incremental lift is the far smaller and far more useful
        number that survives when you remove the outcomes that would have happened anyway.
      </p>
      <p>
        The gap between those two numbers is not a rounding error. Across the private aviation, wealth management, luxury
        real estate, private club, and premium hospitality accounts Stillwater Media plans and buys for, platform-reported
        conversions typically overstate true incremental contribution by 20% to 40% in prospecting channels and by 200% to
        600% in retargeting and branded search. Brands that never close that gap are not making bad decisions occasionally
        — they are making systematically biased decisions every quarter, in the same direction, in favor of the channels
        that are best at taking credit.
      </p>
      <p>
        This is the working method we use: the equation, the four variants that matter, the five test designs and where
        each one is appropriate, the sample-size math that tells you whether a test can succeed before you spend a dollar
        on it, and the contamination sources that make most published lift figures unreliable.
      </p>

      <h2>What Does True Incremental Lift Measurement Actually Mean?</h2>
      <p>
        The formal definition borrows from clinical trial design. You have a treatment group exposed to the media and a
        control group that is identical in every respect except that it was not exposed. Lift is the difference in outcome
        rate between them:
      </p>
      <p>
        <strong>
          Incremental conversions = (Conversion rate in exposed group − Conversion rate in control group) × Size of
          exposed group
        </strong>
      </p>
      <p>
        The word <em>identical</em> is doing enormous work in that sentence, and it is where nearly all measurement
        failures originate. If your "control" is simply the people the platform chose not to show ads to, it is not a
        control — algorithmic delivery selects for likelihood to convert, so the exposed group was already more likely to
        buy before a single impression served. Comparing them measures the algorithm's targeting skill, not the
        advertising's causal effect.
      </p>
      <p>
        A valid control must be created by <em>randomization or geographic assignment before exposure</em>, not discovered
        afterward in the log files. That single requirement disqualifies most of what marketers call incrementality
        measurement.
      </p>

      <h3>The Four Metrics Worth Reporting</h3>
      <p>Once you have a clean test, four derived figures do all the practical work:</p>
      <ol>
        <li>
          <strong>Absolute lift</strong> — the raw difference in conversion rate, expressed in percentage points. Exposed
          group converts at 2.4%, control at 1.8%, absolute lift is 0.6 points. This is the number to use when sizing
          total incremental volume.
        </li>
        <li>
          <strong>Relative lift</strong> — absolute lift divided by the control rate: 0.6 ÷ 1.8 = 33%. This is the number
          to use when comparing channels or campaigns of different baseline sizes, and the number most often quoted
          without context.
        </li>
        <li>
          <strong>Incremental ROAS (iROAS)</strong> — incremental revenue divided by media spend. For high-consideration
          brands this should be calculated on <em>booked</em> revenue or qualified pipeline, not on the lead event,
          because lead-to-close rates diverge sharply between channels.
        </li>
        <li>
          <strong>Incremental CAC</strong> — media spend divided by incremental customers. This is the figure that
          belongs in a board deck. For our client set, incremental CAC typically runs 1.4× to 3.2× the platform-reported
          CAC, and that multiple is itself diagnostic: channels with the widest gap are the channels most heavily
          harvesting existing demand.
        </li>
      </ol>
      <p>
        A useful discipline: never report relative lift without also reporting the confidence interval and the
        control-group baseline. A 40% lift on a 0.2% baseline in a small test is frequently noise wearing a suit.
      </p>

      <h2>Five Test Designs for True Incremental Lift Measurement, Compared</h2>
      <p>
        There is no universally correct design. The right one depends on your conversion volume, your channel mix, and
        whether user-level randomization is even possible — which, in CTV and DOOH, it usually is not.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Test Design</th>
              <th>How Control Is Formed</th>
              <th>Bias Risk</th>
              <th>Min. Monthly Conversions</th>
              <th>Time to Read</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Geo holdout</td>
              <td>Matched markets randomly assigned to on/off</td>
              <td>Low</td>
              <td>150+</td>
              <td>6–10 weeks</td>
              <td>CTV, DOOH, audio, radio, any non-addressable channel</td>
            </tr>
            <tr>
              <td>PSA / ghost ads</td>
              <td>Randomized users served a public-service ad or a logged-but-unfilled impression</td>
              <td>Very low</td>
              <td>400+</td>
              <td>3–6 weeks</td>
              <td>Programmatic display, native, video with a cooperative DSP</td>
            </tr>
            <tr>
              <td>User-level holdout</td>
              <td>Randomized suppression list applied at audience level</td>
              <td>Low–moderate</td>
              <td>300+</td>
              <td>4–8 weeks</td>
              <td>Retargeting, CRM audiences, email-matched segments</td>
            </tr>
            <tr>
              <td>Synthetic control</td>
              <td>Statistically constructed counterfactual from untreated markets</td>
              <td>Moderate</td>
              <td>100+</td>
              <td>4–8 weeks</td>
              <td>Single-market launches where randomization is impossible</td>
            </tr>
            <tr>
              <td>Switchback / on-off</td>
              <td>Same geography alternated on and off over time blocks</td>
              <td>Moderate–high</td>
              <td>200+</td>
              <td>8–16 weeks</td>
              <td>Always-on channels with strong weekly seasonality controls</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Three notes on choosing among them.</p>
      <p>
        <strong>Geo holdout is the default for premium video.</strong> Because CTV impressions on Disney+, Netflix, Prime
        Video, and Hulu inventory cannot be reliably randomized at the household level across every supply path, geography
        is the only assignment unit you fully control. Design it by matching markets on pre-period conversion rate,
        seasonality shape, and category penetration — not on population size alone. Twenty to forty matched market pairs is
        a healthy target; below ten pairs the variance between markets swamps the effect you are trying to detect.
      </p>
      <p>
        <strong>Ghost ads are the cleanest design available and the most under-used.</strong> In a ghost-ad test the DSP
        records which users <em>would have</em> won the auction for a control-group user and logs the impression without
        serving it. That control group is exposed to identical selection pressure — same auction, same bid, same targeting
        — differing only in whether creative rendered. If your DSP supports it, it is the gold standard for display and
        programmatic video. Ask the question directly during platform selection; support varies more than vendors
        advertise.
      </p>
      <p>
        <strong>Synthetic control is a fallback, not a peer.</strong> It builds a weighted composite of untreated markets
        that tracks the treated market closely in the pre-period, then measures divergence after launch. It is genuinely
        useful when a brand opens one market at a time — a private club, a single resort property, a regional dealership
        group — but it is a modeling assumption, not a randomization, and it should be reported with wider uncertainty
        than its outputs usually suggest.
      </p>

      <h2>The Math That Decides Whether Your Test Can Work</h2>
      <p>
        The most expensive mistake in incrementality testing is running a test that was statistically incapable of
        detecting the effect before it launched. That determination takes ten minutes and requires three inputs: baseline
        conversion rate, sample size per group, and the minimum detectable effect (MDE) you are willing to accept.
      </p>
      <p>For a two-proportion test at 90% confidence and 80% power, an adequate working approximation is:</p>
      <p>
        <strong>n per group ≈ 21 × p(1 − p) ÷ (p × MDE)²</strong>
      </p>
      <p>where <em>p</em> is the baseline conversion rate and MDE is expressed as a relative lift.</p>
      <p>
        Run it for a realistic high-consideration case. A wealth management firm with a 0.9% inquiry rate wanting to detect
        a 20% relative lift needs roughly 21 × (0.009 × 0.991) ÷ (0.009 × 0.20)² ≈ 57,800 users per group. That is
        achievable. The same firm wanting to detect a 5% relative lift needs roughly 925,000 per group — which, for a brand
        whose entire addressable audience is a few million affluent households, is not achievable in a quarter.
      </p>
      <p>The practical consequences:</p>
      <ul>
        <li>
          <strong>Set the MDE before the test, not after.</strong> If the smallest effect you can detect is 25% and the
          true effect is 12%, your test will return "no significant lift" and someone will read that as "the channel does
          not work." Those are different statements.
        </li>
        <li>
          <strong>Small-audience luxury brands should measure at the channel or campaign level, not the creative or
          placement level.</strong> There is rarely enough volume to power granular tests, and splitting the budget across
          four simultaneous tests usually means four inconclusive results instead of one clear one.
        </li>
        <li>
          <strong>Use an upper-funnel proxy when volume is thin.</strong> Qualified site actions, configurator
          completions, brochure requests, or scheduled consultations occur 8–20× more often than closed business and can
          power a test in weeks rather than years — provided you have first validated that the proxy correlates with
          revenue.
        </li>
      </ul>

      <h3>Reading Results Honestly</h3>
      <p>
        A result is worth acting on when three conditions hold together: the confidence interval excludes zero, the point
        estimate is large enough to change a decision, and the pre-period between test and control groups shows no
        meaningful divergence. Skipping the third check is common and costly — an A/A validation period of two to four
        weeks before the treatment starts is the cheapest insurance in measurement.
      </p>

      <h2>Six Contamination Sources That Inflate Reported Lift</h2>
      <p>When a reported lift figure looks implausibly good, one of these is almost always responsible.</p>
      <ol>
        <li>
          <strong>Selection-based controls.</strong> As above: unexposed users are systematically less valuable than
          exposed users. This is the single largest source of overstated lift and it can inflate results by 2–5×.
        </li>
        <li>
          <strong>Cross-market spillover.</strong> Holdout markets exposed to national CTV buys, spillover DOOH, or an
          untargeted PR moment are not clean controls. Audit every national or unmanaged media line before designating
          holdouts.
        </li>
        <li>
          <strong>Cookie and identity decay.</strong> In a user-level holdout, suppression lists degrade as identifiers
          churn. Over a ten-week test, meaningful fractions of the control group can drift into exposure. Refresh
          suppression weekly and measure leakage explicitly.
        </li>
        <li>
          <strong>Conversion window mismatch.</strong> High-consideration purchases with 30–180 day cycles read as
          no-lift if the measurement window closes at 30 days. Set the window from your actual observed lag-to-close
          distribution — for private aviation and luxury real estate that is frequently 90 days or more.
        </li>
        <li>
          <strong>Novelty and seasonality confounds.</strong> Tests launched alongside a product release, a rate change,
          or a seasonal peak measure the combination. Either randomize across time blocks or extend the pre-period long
          enough to model the seasonal shape.
        </li>
        <li>
          <strong>Peeking.</strong> Checking results daily and stopping when significance appears inflates false-positive
          rates dramatically. Fix the test duration in advance, or use a sequential testing method designed for continuous
          monitoring.
        </li>
      </ol>

      <h2>Turning Test Results Into Planning Coefficients</h2>
      <p>
        A finished test is not a deliverable. The deliverable is a <em>calibration coefficient</em> — a per-channel
        multiplier that converts platform-reported performance into estimated true contribution, applied continuously
        between tests.
      </p>
      <p>
        The construction is simple. During the test window, record what the platform reported for the treated channel and
        what the test measured as incremental. The ratio is the coefficient:
      </p>
      <p>
        <strong>Calibration coefficient = Incremental conversions measured ÷ Platform-attributed conversions reported</strong>
      </p>
      <p>
        Representative coefficients across our high-consideration client set, offered as orientation rather than as
        substitutes for your own testing:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Typical Calibration Coefficient</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Retargeting / site remarketing</td>
              <td>0.10 – 0.30</td>
              <td>Most reported conversions would have occurred anyway</td>
            </tr>
            <tr>
              <td>Branded search</td>
              <td>0.15 – 0.35</td>
              <td>Largely demand capture, not demand creation</td>
            </tr>
            <tr>
              <td>Non-brand search</td>
              <td>0.55 – 0.80</td>
              <td>Substantially incremental on qualified terms</td>
            </tr>
            <tr>
              <td>Premium CTV (PMP)</td>
              <td>0.70 – 0.95</td>
              <td>High incrementality, poorly credited by click attribution</td>
            </tr>
            <tr>
              <td>Programmatic display (prospecting)</td>
              <td>0.40 – 0.70</td>
              <td>Wide variance driven by inventory quality</td>
            </tr>
            <tr>
              <td>DOOH</td>
              <td>0.60 – 0.90</td>
              <td>Rarely credited at all in standard attribution</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two cautions. Coefficients are <strong>spend-level dependent</strong> — a channel measured at $80K per month does
        not carry the same coefficient at $400K, because saturation reduces marginal incrementality. And they are{" "}
        <strong>perishable</strong>, drifting materially within two to three quarters as audiences saturate and creative
        fatigues. Re-derive rather than inherit.
      </p>
      <p>
        Applied properly, the coefficient turns a single expensive experiment into a decision input used in every weekly
        optimization for the following quarter. That leverage — not the headline lift number — is the actual return on a
        measurement program.
      </p>

      <h2>How Often Should True Incremental Lift Measurement Run?</h2>
      <p>
        Incrementality is not a one-time audit; coefficients drift as audiences saturate, creative fatigues, and
        competitors change their spend. A workable cadence for a brand spending $150K–$2M per quarter in working media:
      </p>
      <ul>
        <li>
          <strong>Continuously:</strong> hold 5–10% of working media in a permanent test reserve.
        </li>
        <li>
          <strong>Quarterly:</strong> one primary channel test, rotating across the mix so every material channel is
          re-measured within four quarters.
        </li>
        <li>
          <strong>Semi-annually:</strong> re-validate calibration coefficients used to discount platform-reported
          performance in planning.
        </li>
        <li>
          <strong>Annually:</strong> a full-portfolio geo test or MMM refresh that reconciles bottom-up test results
          against top-down modeled contribution.
        </li>
      </ul>
      <p>
        The compounding value is in the calibration, not any single test. Once you know that your retargeting reads at 0.18
        incremental conversions per attributed conversion and your premium CTV reads at 0.82, every planning conversation
        for the next two quarters becomes materially better without running another experiment.
      </p>

      <h2>Work With Stillwater Media</h2>
      <p>
        We build incrementality measurement into every engagement from the first flight, because allocation decisions made
        on attributed data are decisions made on the wrong number. If you are running meaningful media spend against
        affluent audiences and cannot currently state what your incremental CAC is by channel, that is the gap worth
        closing first.
      </p>
      <p>
        Stillwater Media accepts a limited number of engagements each quarter.{" "}
        <a href="/apply">Apply to work with us →</a>
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is true incremental lift measurement?</h3>
      <p>
        True incremental lift measurement is the process of isolating the conversions or revenue that occurred because a
        campaign ran and would not have occurred otherwise, calculated as the difference in outcome rate between a
        randomized exposed group and a comparable unexposed control group. It differs from attribution, which assigns
        credit for conversions that already happened to the touchpoints that preceded them without establishing whether
        those touchpoints caused anything. Incrementality answers &quot;what did this media cause,&quot; while attribution
        answers &quot;what did this media touch&quot; — and for most channels those two numbers differ by a wide margin.
      </p>
      <h3>How do you calculate incremental lift?</h3>
      <p>
        Subtract the control group&apos;s conversion rate from the exposed group&apos;s conversion rate to get absolute
        lift in percentage points, then multiply by the size of the exposed group to get incremental conversions. Relative
        lift is absolute lift divided by the control conversion rate, incremental ROAS is incremental revenue divided by
        media spend, and incremental CAC is media spend divided by incremental customers. Always report the confidence
        interval and the control baseline alongside relative lift, because a large relative lift on a very small baseline
        is often statistical noise rather than a real effect.
      </p>
      <h3>Why is platform-reported ROAS higher than incremental ROAS?</h3>
      <p>
        Platform-reported ROAS counts every conversion that occurred within an attribution window after an ad impression
        or click, including conversions that would have happened with no advertising at all. Because delivery algorithms
        optimize toward users already likely to convert, the exposed population is systematically more valuable than the
        average user before any ad serves. In practice this means retargeting and branded search — which target people
        already in-market or already searching your brand name — show the largest gaps, frequently overstating incremental
        contribution by 200% to 600%.
      </p>
      <h3>How long should an incrementality test run?</h3>
      <p>
        Test duration should be set by your conversion lag distribution and required sample size, not by convenience. Geo
        holdout tests for premium video typically need six to ten weeks, ghost-ad tests on programmatic display three to
        six weeks, and user-level holdouts four to eight weeks — plus a two-to-four-week pre-period A/A validation to
        confirm the groups behave identically before treatment starts. Brands with 90-to-180-day sales cycles, common in
        private aviation and luxury real estate, must extend the measurement window to match the actual lag to close or
        the test will report no lift simply because the conversions have not landed yet.
      </p>
      <h3>Can luxury brands with small audiences run valid incrementality tests?</h3>
      <p>
        Yes, but the test design has to respect the volume constraint. Small-audience brands should test at the channel
        level rather than the creative or placement level, use a mid-funnel proxy event such as a consultation request or
        configurator completion that occurs eight to twenty times more often than a closed sale, and calculate the minimum
        detectable effect before launching to confirm the test can actually resolve an effect of plausible size. A brand
        with a 0.9% baseline conversion rate can detect a 20% relative lift with roughly 58,000 users per group, but
        detecting a 5% lift would require close to a million per group — which is why setting a realistic MDE in advance is
        the difference between a decisive result and an inconclusive one.
      </p>
    </ArticleLayout>
  )
}
