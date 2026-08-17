import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/incrementality-vs-attribution-advertising"
const imagePath = "/images/incrementality-vs-attribution-advertising.png"

export const metadata: Metadata = {
  title: "Incrementality vs Attribution: Which Should Lead Budget?",
  description:
    "Incrementality vs attribution: what each actually measures, where attribution overstates paid media, and how luxury brands use both to allocate budget.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Incrementality vs. Attribution in Advertising: Which One Should Actually Drive Your Media Decisions?",
    description:
      "Attribution tells you which touchpoint got credit. Incrementality tells you what would have happened anyway. A senior strategist's guide to the difference, the four test designs that measure true incremental lift, benchmark lift ranges by channel, and how luxury brands run both systems without letting the wrong one set budget.",
    type: "article",
    url: canonicalUrl,
    images: [{ url: imagePath, width: 1200, height: 630, alt: "Incrementality vs. attribution in advertising — Stillwater Media" }],
    locale: "en_US",
    siteName: "Stillwater Media",
    publishedTime: "2026-08-17",
  },
  twitter: {
    card: "summary_large_image",
    title: "Incrementality vs. Attribution in Advertising",
    description:
      "Attribution assigns credit. Incrementality proves causation. The four test designs, benchmark lift ranges by channel, and which metric should set your budget.",
    images: [imagePath],
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Incrementality vs. Attribution in Advertising: Which One Should Actually Drive Your Media Decisions?",
      description:
        "A senior media strategist's guide to incrementality vs attribution advertising — what each methodology actually measures, the three structural reasons attribution systematically overstates paid media performance in luxury and high-consideration categories, four test designs for true incremental lift measurement including geo holdouts and ghost-ad controls, statistical power requirements and minimum detectable effect math, benchmark incrementality ranges by channel from branded search through premium CTV, and the operating model that lets attribution govern daily optimization while incrementality governs budget allocation.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${imagePath}`,
        width: 1200,
        height: 630,
        caption: "Incrementality vs. attribution in advertising — Stillwater Media",
      },
      author: { "@type": "Organization", name: "Stillwater Media" },
      publisher: {
        "@type": "Organization",
        name: "Stillwater Media",
        logo: { "@type": "ImageObject", url: "https://www.stillwatermedia.io/logo.png" },
      },
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords:
        "incrementality vs attribution advertising, true incremental lift measurement, incrementality testing advertising agency, holdout testing advertising, media measurement beyond last click, multi-touch attribution high-consideration, ad attribution luxury brands, marketing mix modeling luxury brands, advertising ROI luxury brands, media efficiency ratio advertising, geo holdout test methodology",
      articleSection: "Measurement & Attribution",
      wordCount: 2566,
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stillwatermedia.io" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.stillwatermedia.io/insights" },
        { "@type": "ListItem", position: 3, name: "Incrementality vs. Attribution in Advertising", item: canonicalUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between incrementality and attribution in advertising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Attribution is a correlational credit-assignment system that looks backward from conversions that already happened and divides credit among the touchpoints that preceded them, using a rule such as last click, time decay, or an algorithmic multi-touch model. Incrementality is a causal measurement system that compares an exposed group against a randomized or matched control group that received no advertising, so the difference between them represents conversions that exist because of the media rather than conversions that merely followed it.",
          },
        },
        {
          "@type": "Question",
          name: "Why does attribution overstate paid media performance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three structural mechanisms drive it. Retargeting selects for people who already demonstrated intent and would have converted at high rates regardless, branded search intercepts users who were already navigating to your site and cannibalizes clicks the organic listing would have captured, and long view-through windows on display and CTV credit impressions that were never clicked and often had no causal role. In high-consideration categories these effects compound, and the median gap between platform-attributed and incrementally measured conversions typically runs 20–45%, exceeding 70% on retargeting-heavy accounts.",
          },
        },
        {
          "@type": "Question",
          name: "How do you measure true incremental lift?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are four practical designs. A geo holdout splits matched markets into test and control and works for unaddressable media such as CTV, DOOH, and streaming audio while capturing offline conversions. Ghost ads log users who would have won an auction but were withheld, providing a clean within-platform control. An audience-split holdout randomly suppresses 10–20% of a targetable audience, which is the cheapest place to start because retargeting carries the largest distortion. Platform conversion lift studies from Google, Meta, and Amazon are free but measure only within-platform effects and involve the platform grading its own work.",
          },
        },
        {
          "@type": "Question",
          name: "How long should an incrementality test run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The test window must exceed one full purchase cycle plus roughly a two-week measurement tail, which for luxury and high-consideration brands with 60- to 180-day sales cycles usually means a minimum of eight to twelve weeks rather than the two- to three-week windows platforms suggest. Running a short test on a long sales cycle does not produce a conservative estimate — it produces a null result that gets misread as evidence the channel does not work, when the conversions simply had not occurred yet.",
          },
        },
        {
          "@type": "Question",
          name: "Should incrementality replace attribution entirely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — they operate on different clocks and answer different questions, and a functioning measurement stack runs both. Attribution should govern daily optimization inside a channel, including creative rotation, bid and pacing decisions, supply-path comparison, and anomaly detection, because those decisions need a same-day signal. Incrementality should govern allocation across channels, channel entry and exit, and any figure reported as ROI to a board or CFO, with quarterly holdout results applied as calibration coefficients so that daily attributed reporting remains usable without being misleading.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <ArticleLayout
      title="Incrementality vs. Attribution in Advertising: Which One Should Actually Drive Your Media Decisions?"
      author="Stillwater Media"
      date="August 17, 2026"
      readingTime="15 min read"
      category="Measurement & Attribution"
      image={imagePath}
      imageAlt="Stillwater Media guide illustration on incrementality vs attribution advertising showing an antique brass balance scale tipped unevenly on dark marble under warm directional lamplight"
      imageCaption="Attribution weighs the credit that was claimed; incrementality weighs the revenue that would not have existed otherwise."
      schemaMarkup={schemaMarkup}
    >
      <p>
        The distinction at the heart of incrementality vs. attribution advertising is a distinction between two
        different questions. Attribution asks: <em>of the conversions that happened, which touchpoints deserve
        credit?</em> Incrementality asks: <em>how many of those conversions would have happened anyway?</em> Those are
        not variations on a theme. They are different questions with different answers, and a brand that uses the first
        to answer the second will systematically overfund the channels that are best at intercepting demand and
        underfund the channels that create it.
      </p>
      <p>
        At Stillwater Media we run measurement programs for luxury and high-consideration brands — private aviation,
        wealth management, luxury real estate, premium DTC — where a single customer can be worth six figures and the
        sales cycle runs 60 to 180 days. In those conditions the gap between attributed performance and true incremental
        lift is not a rounding error. Across the holdout tests we have run, the median gap between platform-attributed
        conversions and incrementally measured conversions sits somewhere between 20% and 45% depending on channel mix,
        and on heavily retargeting-weighted accounts it has exceeded 70%. This is a practical guide to understanding the
        difference, running the tests that resolve it, and building an operating model where each methodology does the
        job it is actually good at.
      </p>

      <h2>What Attribution Actually Measures</h2>
      <p>
        Attribution is a credit-assignment system. It observes a set of conversions that occurred, looks backward at the
        touchpoints preceding each one, and applies a rule — last click, first click, linear, time decay,
        position-based, or an algorithmic multi-touch model — to divide the credit among them.
      </p>
      <p>
        Everything about that description is correlational. Attribution never observes a counterfactual. It has no
        information about what the converting user would have done in the absence of the ad, because the converting user
        saw the ad. The entire methodology is a bookkeeping convention applied to observed data, and its outputs are
        only as meaningful as the assumption that exposure caused the outcome.
      </p>
      <p>
        That assumption is often wrong, and it is wrong in a <em>directional</em> way. Attribution is biased toward
        channels that appear late in the journey and toward channels that target people already demonstrating intent —
        which is to say, exactly the channels that would perform well even if they had no causal effect at all.
      </p>

      <h2>What Incrementality Actually Measures</h2>
      <p>
        Incrementality is a causal-inference system. It creates or identifies a control group that does not receive the
        advertising, measures the outcome rate in both groups, and reports the difference. That difference — the
        incremental lift — is the number of conversions that exist because of the media.
      </p>
      <p>The formal expression is simple:</p>
      <p>
        <strong>
          Incremental conversions = (Conversions in exposed group) − (Conversions in control group, scaled to exposed
          group size)
        </strong>
      </p>
      <p>
        <strong>Incremental ROAS = (Incremental revenue) ÷ (Media cost)</strong>
      </p>
      <p>
        The value of this design is that it requires no assumption about the causal role of any touchpoint. The control
        group answers the counterfactual question directly. The cost is that incrementality is expensive, slow, and
        lower-resolution: a well-powered test takes weeks, requires you to deliberately withhold advertising from a
        portion of your addressable market, and typically returns one number for one channel or campaign rather than a
        per-creative, per-placement breakdown.
      </p>

      <h2>Incrementality vs. Attribution in Advertising: A Direct Comparison</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Attribution</th>
              <th>Incrementality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Question answered</td>
              <td>Which touchpoints preceded conversions?</td>
              <td>How many conversions did media cause?</td>
            </tr>
            <tr>
              <td>Inference type</td>
              <td>Correlational</td>
              <td>Causal</td>
            </tr>
            <tr>
              <td>Requires a control group</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Typical time to result</td>
              <td>Real time to 72 hours</td>
              <td>3–8 weeks per test</td>
            </tr>
            <tr>
              <td>Granularity</td>
              <td>Campaign, ad set, creative, keyword</td>
              <td>Channel or campaign level only</td>
            </tr>
            <tr>
              <td>Cost to run</td>
              <td>Effectively free (platform-reported)</td>
              <td>Withheld spend + analyst time</td>
            </tr>
            <tr>
              <td>Systematic bias</td>
              <td>Overstates retargeting, branded search, view-through CTV</td>
              <td>Underpowered tests overstate uncertainty, not effect</td>
            </tr>
            <tr>
              <td>Best used for</td>
              <td>Daily optimization, creative rotation, bid management</td>
              <td>Budget allocation, channel entry/exit, board-level ROI</td>
            </tr>
            <tr>
              <td>Fails when</td>
              <td>Long sales cycles, offline conversion, cross-device journeys</td>
              <td>Small conversion volume, national-only media, contaminated controls</td>
            </tr>
            <tr>
              <td>Luxury-specific weakness</td>
              <td>Sales cycles exceed cookie and click windows</td>
              <td>Low conversion counts make lift hard to detect</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why Attribution Systematically Overstates Paid Media</h2>
      <p>
        Three structural mechanisms produce the gap, and understanding them tells you where to look first.
      </p>

      <h3>Selection bias in retargeting</h3>
      <p>
        Retargeting, by construction, serves ads to people who have already visited your site, configured a product, or
        requested pricing. Those people were already the most likely to convert in your entire universe. When a
        retargeting platform reports a 12x ROAS, it is reporting the conversion rate of a pre-selected high-intent
        population, not the effect of showing them a banner. Holdout tests on retargeting in high-consideration
        categories routinely find that 50–80% of attributed conversions would have occurred without the ad. This is the
        single largest source of measurement distortion in most premium accounts.
      </p>

      <h3>The branded search problem</h3>
      <p>
        A person types your brand name into Google. They already know who you are, and in most cases they intended to
        reach you. The paid ad appears above the organic result, they click it, and the click is attributed a conversion
        — one that the organic listing would very likely have captured for free. Published brand-keyword pause tests,
        including well-documented experiments by large advertisers, have found that a substantial share of paid branded
        clicks are cannibalized from organic. The incremental value of branded search is real but far smaller than its
        attributed value, and it varies enormously depending on whether competitors are bidding on your terms.
      </p>

      <h3>View-through inflation on CTV and display</h3>
      <p>
        View-through attribution credits a conversion to an impression that was never clicked. On premium CTV this is
        not inherently unreasonable — the format is unclickable and its effects are genuinely upper-funnel — but the
        window is where the abuse lives. A 30-day view-through window on a broadly targeted CTV campaign will capture a
        large fraction of your organic conversions purely by coincidence of exposure. If your CTV partner reports
        view-through conversions on a 14-day-plus window and cannot produce a lift study, treat the number as a reach
        proxy rather than a performance metric.
      </p>

      <h2>Four Designs for True Incremental Lift Measurement</h2>

      <h3>1. Geo holdout (matched-market test)</h3>
      <p>
        Split your addressable geography into test and control DMAs or ZIP clusters matched on baseline conversion
        volume, seasonality, and demographics. Run media in test markets, suppress it in control, and compare. This is
        the most robust design available to most brands because it works for unaddressable media — CTV, DOOH, streaming
        audio, linear — and it captures offline and cross-device conversions that pixel-based methods miss entirely. It
        is our default for luxury clients with national footprints. The constraint is that it requires enough markets
        and enough conversion volume per market to detect an effect.
      </p>

      <h3>2. Ghost ads and PSA controls</h3>
      <p>
        Within a programmatic platform, the control group is identified by logging users who <em>would have</em> won an
        auction but were deliberately withheld (ghost ads), or who were served an unrelated public-service creative in
        the winning slot (PSA). Ghost ads are the cleaner design because they cost nothing to serve the control and
        avoid the possibility that the PSA itself has an effect. Both require DSP support; not all platforms offer it.
      </p>

      <h3>3. Audience-split holdout</h3>
      <p>
        Randomly assign a share — typically 10–20% — of a targetable audience to a suppression list and exclude it from
        delivery. This is the standard approach for retargeting and CRM-based audiences, and it is where we recommend
        most brands start, because retargeting is where the overstatement is largest and the test is cheapest to run.
        Suppression must be enforced at the identity level across every channel, or the control is contaminated.
      </p>

      <h3>4. Platform conversion lift studies</h3>
      <p>
        Meta, Google, Amazon Ads, and several CTV platforms offer native lift studies with randomized control groups.
        These are useful and free, with two caveats: they measure only within-platform effects, and the platform
        grading its own homework introduces an obvious incentive problem. Use them as one input, not as the arbiter.
      </p>

      <h2>Sizing the Test: The Math Most Brands Skip</h2>
      <p>
        The most common failure in incrementality work is running an underpowered test, getting an inconclusive result,
        and concluding that the channel &quot;didn&apos;t work.&quot; Underpowered tests do not measure small effects —
        they fail to detect real ones.
      </p>
      <p>The practical planning steps:</p>
      <ol>
        <li>
          <strong>Establish baseline conversion rate and volume</strong> in the control population over the intended
          test window.
        </li>
        <li>
          <strong>Set the minimum detectable effect (MDE)</strong> — the smallest lift that would change a decision. If
          you would keep spending at 10% lift, do not design a test to detect 30%.
        </li>
        <li>
          <strong>Compute required sample size</strong> for 80% statistical power at 95% confidence. As a rough planning
          heuristic, detecting a 10% relative lift on a 1% baseline conversion rate requires on the order of tens of
          thousands of users per arm; detecting a 30% lift requires roughly an order of magnitude fewer.
        </li>
        <li>
          <strong>Extend the window past the sales cycle.</strong> A brand with a 90-day consideration period cannot
          learn anything from a 21-day test. Test duration should cover at least one full purchase cycle plus a two-week
          measurement tail.
        </li>
        <li>
          <strong>Pre-register the analysis.</strong> Decide the primary metric, the exclusion rules, and the decision
          thresholds before the test starts. Post hoc metric selection is how brands talk themselves into whatever they
          already believed.
        </li>
      </ol>
      <p>
        For luxury brands with genuinely low conversion counts, use an intermediate outcome — qualified inquiries,
        booked consultations, showroom appointments — as the primary test metric, and validate its historical
        relationship to closed revenue separately.
      </p>

      <h2>Benchmark Incrementality Ranges by Channel</h2>
      <p>
        These are directional ranges we see across high-consideration and luxury portfolios. Treat them as priors to
        test against, not as substitutes for your own measurement.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Typical attributed ROAS vs. incremental</th>
              <th>Typical incrementality rate</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Branded search</td>
              <td>Heavily overstated</td>
              <td>10–40%</td>
              <td>Depends almost entirely on competitor bidding</td>
            </tr>
            <tr>
              <td>Site retargeting</td>
              <td>Heavily overstated</td>
              <td>20–50%</td>
              <td>Largest single source of distortion</td>
            </tr>
            <tr>
              <td>CRM/email retargeting</td>
              <td>Overstated</td>
              <td>15–45%</td>
              <td>Overlaps with owned channels</td>
            </tr>
            <tr>
              <td>Non-brand search</td>
              <td>Moderately overstated</td>
              <td>50–80%</td>
              <td>Genuine demand capture, some cannibalization</td>
            </tr>
            <tr>
              <td>Social prospecting</td>
              <td>Moderately overstated</td>
              <td>40–70%</td>
              <td>Highly dependent on audience breadth</td>
            </tr>
            <tr>
              <td>Premium CTV (PMP)</td>
              <td>Understated by click attribution</td>
              <td>70–95%</td>
              <td>Unclickable; attribution misses most of its effect</td>
            </tr>
            <tr>
              <td>DOOH</td>
              <td>Almost entirely unattributed</td>
              <td>Measurable only via geo lift</td>
              <td>Requires matched-market design</td>
            </tr>
            <tr>
              <td>Streaming audio</td>
              <td>Almost entirely unattributed</td>
              <td>Measurable only via geo lift</td>
              <td>Same</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The pattern is the point. The channels attribution flatters are the ones that intercept existing demand. The
        channels attribution starves are the ones that create it. A brand optimizing purely to attributed ROAS will
        drift, quarter over quarter, into a portfolio of retargeting and branded search — a machine that harvests demand
        efficiently and generates none.
      </p>

      <h2>Incrementality vs. Attribution in Advertising: When Attribution Is Still the Right Tool</h2>
      <p>
        None of this means attribution should be discarded. It remains the correct instrument for questions where
        relative comparison within a controlled context is what matters:
      </p>
      <ul>
        <li>
          <strong>Creative testing.</strong> Which of six CTV cuts drives more site visitation, holding audience and
          placement constant.
        </li>
        <li>
          <strong>Bid and pacing decisions.</strong> Daily optimization requires a fast signal; incrementality cannot
          operate on a 24-hour loop.
        </li>
        <li>
          <strong>Placement and supply-path quality.</strong> Comparing publisher A to publisher B within the same
          campaign.
        </li>
        <li>
          <strong>Diagnosing breakage.</strong> Sudden attributed-performance collapse is a reliable early warning of
          tracking, feed, or landing-page failure.
        </li>
      </ul>
      <p>
        The rule we operate by: <strong>attribution governs optimization within a channel; incrementality governs
        allocation across channels.</strong> Never let attribution answer an allocation question, and never wait for an
        incrementality test to answer a creative one.
      </p>

      <h2>Running Incrementality and Attribution Together: The Advertising Operating Model We Use</h2>
      <p>A functional measurement stack in a high-consideration category has three layers running on different clocks.</p>
      <ol>
        <li>
          <strong>Attribution — daily.</strong> Platform and MTA reporting for in-flight optimization, creative
          rotation, and anomaly detection. Explicitly labeled internally as directional, never reported to the board as
          ROI.
        </li>
        <li>
          <strong>Incrementality testing — quarterly, rotating.</strong> One or two well-powered holdouts per quarter,
          rotating across channels so every major line item is tested at least annually. Results are applied as{" "}
          <em>calibration coefficients</em> to attributed numbers, so daily reporting stays usable but honest.
        </li>
        <li>
          <strong>Marketing mix modeling — semiannual or annual.</strong> A top-down model reconciling total spend to
          total outcome, including offline and brand media. MMM and incrementality validate each other: when the
          model&apos;s channel coefficients and the holdout results disagree materially, one of them is misspecified,
          and finding out which is where most of the learning lives.
        </li>
      </ol>
      <p>
        The output of this stack is a set of calibrated channel efficiencies you can actually allocate against — and a
        defensible answer when the CFO asks what the media is buying.
      </p>

      <h2>Five Mistakes That Waste Incrementality Programs</h2>
      <ol>
        <li>
          <strong>Testing the channel you already trust.</strong> Test where the stakes and the suspected distortion are
          highest. That is almost always retargeting and branded search first.
        </li>
        <li>
          <strong>Contaminated control groups.</strong> If the control audience can be reached by any other active
          campaign, email flow, or organic push, the test measures nothing. Suppression must be enforced at the identity
          level everywhere.
        </li>
        <li>
          <strong>Windows shorter than the sales cycle.</strong> A 14-day test on a 120-day purchase decision measures
          noise with a confident face on it.
        </li>
        <li>
          <strong>Treating one test as permanent truth.</strong> Incrementality is a function of saturation, competitor
          behavior, and creative. A channel that tested at 65% lift at $200K/month may test at 30% at $600K/month.
          Retest at materially different spend levels.
        </li>
        <li>
          <strong>Running the test and not acting on it.</strong> The most common outcome of a well-run holdout is a
          result that threatens someone&apos;s budget. Decide in advance what you will do at each outcome, and put it in
          writing before the data arrives.
        </li>
      </ol>

      <h2>Why Incrementality vs. Attribution Matters Most in Luxury Advertising</h2>
      <p>
        Brands that resolve incrementality vs. attribution properly do not usually end up spending less. They end up
        spending differently — shifting budget out of demand harvesting that was double-counting itself and into premium
        upper-funnel inventory whose contribution was invisible to click-based measurement. In our own client
        portfolio, the typical first-year effect of a calibrated measurement program is not a dramatic cut but a
        reallocation of 15–30% of working media, accompanied by the ability to defend an increase rather than negotiate
        a decrease.
      </p>
      <p>
        That is the real return on measurement discipline: not the efficiency you find, but the confidence to scale the
        things that were working all along.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the difference between incrementality and attribution in advertising?</h3>
      <p>
        Attribution is a correlational credit-assignment system that looks backward from conversions that already
        happened and divides credit among the touchpoints that preceded them, using a rule such as last click, time
        decay, or an algorithmic multi-touch model. Incrementality is a causal measurement system that compares an
        exposed group against a randomized or matched control group that received no advertising, so the difference
        between them represents conversions that exist because of the media rather than conversions that merely followed
        it.
      </p>
      <h3>Why does attribution overstate paid media performance?</h3>
      <p>
        Three structural mechanisms drive it. Retargeting selects for people who already demonstrated intent and would
        have converted at high rates regardless, branded search intercepts users who were already navigating to your
        site and cannibalizes clicks the organic listing would have captured, and long view-through windows on display
        and CTV credit impressions that were never clicked and often had no causal role. In high-consideration
        categories these effects compound, and the median gap between platform-attributed and incrementally measured
        conversions typically runs 20–45%, exceeding 70% on retargeting-heavy accounts.
      </p>
      <h3>How do you measure true incremental lift?</h3>
      <p>
        There are four practical designs. A geo holdout splits matched markets into test and control and works for
        unaddressable media such as CTV, DOOH, and streaming audio while capturing offline conversions. Ghost ads log
        users who would have won an auction but were withheld, providing a clean within-platform control. An
        audience-split holdout randomly suppresses 10–20% of a targetable audience, which is the cheapest place to start
        because retargeting carries the largest distortion. Platform conversion lift studies from Google, Meta, and
        Amazon are free but measure only within-platform effects and involve the platform grading its own work.
      </p>
      <h3>How long should an incrementality test run?</h3>
      <p>
        The test window must exceed one full purchase cycle plus roughly a two-week measurement tail, which for luxury
        and high-consideration brands with 60- to 180-day sales cycles usually means a minimum of eight to twelve weeks
        rather than the two- to three-week windows platforms suggest. Running a short test on a long sales cycle does
        not produce a conservative estimate — it produces a null result that gets misread as evidence the channel does
        not work, when the conversions simply had not occurred yet.
      </p>
      <h3>Should incrementality replace attribution entirely?</h3>
      <p>
        No — they operate on different clocks and answer different questions, and a functioning measurement stack runs
        both. Attribution should govern daily optimization inside a channel, including creative rotation, bid and pacing
        decisions, supply-path comparison, and anomaly detection, because those decisions need a same-day signal.
        Incrementality should govern allocation across channels, channel entry and exit, and any figure reported as ROI
        to a board or CFO, with quarterly holdout results applied as calibration coefficients so that daily attributed
        reporting remains usable without being misleading.
      </p>
    </ArticleLayout>
  )
}
