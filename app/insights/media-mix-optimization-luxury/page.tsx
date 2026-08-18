import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/media-mix-optimization-luxury"
const imagePath = "/images/media-mix-optimization-luxury.png"

export const metadata: Metadata = {
  title: "Media Mix Optimization for Luxury Brands: A Practical Guide",
  description:
    "Media mix optimization for luxury brands: saturation curves, reallocation math, channel constraints, and the quarterly cadence that compounds returns.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Media Mix Optimization for Luxury Brands: How to Reallocate Budget With Evidence",
    description:
      "Most luxury media plans are inherited, not optimized. A senior strategist's guide to media mix optimization for luxury brands — saturation and diminishing-returns curves, the marginal-return reallocation rule, channel-level saturation benchmarks, the constraints premium brands must impose on pure efficiency logic, and the quarterly operating cadence that makes optimization compound.",
    type: "article",
    url: canonicalUrl,
    images: [{ url: imagePath, width: 1200, height: 630, alt: "Media mix optimization for luxury brands — Stillwater Media" }],
    locale: "en_US",
    siteName: "Stillwater Media",
    publishedTime: "2026-08-17",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mix Optimization for Luxury Brands",
    description:
      "Optimizing to average ROAS is why luxury media plans stagnate. The marginal-return rule, saturation benchmarks by channel, and the quarterly reallocation cadence.",
    images: [imagePath],
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Media Mix Optimization for Luxury Brands: How to Reallocate Budget With Evidence",
      description:
        "A senior media strategist's guide to media mix optimization for luxury brands — why optimizing to average return rather than marginal return is the single most common allocation error, how saturation and diminishing-returns curves differ by channel in premium portfolios, the four inputs required before any reallocation, a step-by-step marginal-return reallocation procedure with worked math, channel-level saturation benchmarks from branded search through premium CTV and DOOH, the brand-equity and inventory-quality constraints luxury brands must impose on pure efficiency logic, and the quarterly operating cadence that turns optimization into compounding advantage.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${imagePath}`,
        width: 1200,
        height: 630,
        caption: "Media mix optimization for luxury brands — Stillwater Media",
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
        "media mix optimization luxury, media mix optimization for luxury brands, marketing mix modeling luxury brands, best advertising channels for luxury brands, advertising ROI luxury brands, media efficiency ratio advertising, incrementality testing advertising agency, luxury brand digital marketing strategy, premium programmatic media buying, customer acquisition cost reduction luxury, diminishing returns media saturation curve",
      articleSection: "Strategy & Planning",
      wordCount: 2364,
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stillwatermedia.io" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.stillwatermedia.io/insights" },
        { "@type": "ListItem", position: 3, name: "Media Mix Optimization for Luxury Brands", item: canonicalUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is media mix optimization?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Media mix optimization is the planning process of allocating budget across channels so that the next dollar spent produces the greatest incremental return, using calibrated channel efficiency, response curves, and operational constraints as inputs. It is distinct from marketing mix modeling, which is the econometric measurement technique that estimates each channel's historical contribution and response curve — the model measures, the optimization decides. A brand can perform credible media mix optimization without a formal MMM, but not without some estimate of how each channel responds to changes in spend.",
          },
        },
        {
          "@type": "Question",
          name: "How do you optimize a media mix for a luxury brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Run a six-step quarterly cycle: recalibrate attributed performance using incrementality coefficients, estimate the marginal return on the next increment of spend in each channel, rank channels by marginal rather than average return, apply brand and inventory constraints to define the feasible space, move budget in bounded increments of no more than 15–20% of a channel's spend per quarter, and reserve 5–10% of working media for deliberate testing. Luxury adds constraints that pure efficiency logic will violate — premium inventory floors, cross-channel frequency ceilings, and minimum brand presence in high-visibility environments.",
          },
        },
        {
          "@type": "Question",
          name: "Why is average ROAS the wrong metric for budget allocation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because every channel has diminishing returns, average ROAS describes the productivity of all dollars already spent while allocation decisions concern only the next dollar. Retargeting and branded search almost always show the highest average returns and the lowest marginal returns, because both are capped by audiences you already own — site visitors and people already searching your name — so additional budget buys frequency rather than reach. Ranking channels by average return therefore reliably concentrates budget in demand harvesting and starves the upper-funnel channels that generate the demand being harvested.",
          },
        },
        {
          "@type": "Question",
          name: "How do you know when a media channel is saturated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Watch for channel-specific ceiling signals rather than a single rule. Retargeting is saturated when average weekly frequency exceeds roughly six to eight exposures and CPA rises while conversion rate stays flat; branded search when impression share passes 85–90% and CPCs rise without additional clicks; non-brand search above roughly 70% impression share on qualified terms; and premium CTV when private marketplace deal fill rates drop below about 70% or frequency drifts above target because the buyer cannot find enough qualified inventory. Luxury portfolios hit these ceilings earlier than mass-market ones because the addressable audience is far smaller.",
          },
        },
        {
          "@type": "Question",
          name: "How much budget should a luxury brand put into upper-funnel channels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For brands with sales cycles longer than 60 days, upper-funnel channels — premium CTV, streaming audio, DOOH, and YouTube Select — typically warrant 45–65% of working media, with retargeting held to 8–15% and branded search to 5–12%. The reason this looks aggressive relative to standard performance-marketing advice is that click-based attribution cannot see most of the upper-funnel contribution, so brands without incrementality calibration systematically under-fund it. The allocation is only defensible once holdout testing has established each channel's true incremental contribution.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <ArticleLayout
      title="Media Mix Optimization for Luxury Brands: How to Reallocate Budget With Evidence"
      author="Stillwater Media"
      date="August 17, 2026"
      readingTime="15 min read"
      category="Strategy & Planning"
      image={imagePath}
      imageAlt="Stillwater Media guide illustration on media mix optimization for luxury brands showing graduated brass calibration weights in a walnut case with two lifted out and repositioned on dark marble"
      imageCaption="Optimization is not finding the best channel — it is knowing precisely which weight to move, and by how much."
      schemaMarkup={schemaMarkup}
    >
      <p>
        Media mix optimization for luxury brands is the discipline of moving budget to the point where the <em>next</em>{" "}
        dollar produces the most incremental revenue — not the point where the <em>average</em> dollar looks most
        efficient in a dashboard. That distinction sounds academic until you see what it costs. Nearly every stagnant
        luxury media plan we inherit shares the same signature: budget concentrated in the channels with the highest
        reported ROAS, those channels saturated well past their productive range, and every genuinely under-invested
        line item starved because its average efficiency looks unimpressive next to retargeting.
      </p>
      <p>
        At Stillwater Media we plan and buy for brands in private aviation, luxury real estate, wealth management,
        private clubs, premium automotive, and luxury hospitality — categories where customer LTV routinely exceeds
        $5,000 and where the wrong allocation compounds quietly for years. This is the working method we use for media
        mix optimization: the inputs required before you touch anything, the marginal-return math that drives
        reallocation, the saturation behavior of each channel in a premium portfolio, the constraints that must override
        pure efficiency logic in luxury specifically, and the cadence that makes the whole thing compound.
      </p>

      <h2>Media Mix Optimization vs. Marketing Mix Modeling for Luxury Brands</h2>
      <p>These get used interchangeably and should not be.</p>
      <p>
        <strong>Marketing mix modeling (MMM)</strong> is an econometric method — typically a regression of outcomes on
        spend by channel, with controls for seasonality, pricing, distribution, and external factors — that estimates
        each channel&apos;s historical contribution and its response curve. It is a measurement technique.
      </p>
      <p>
        <strong>Media mix optimization</strong> is the decision process that uses those estimates, plus incrementality
        results and operational constraints, to set next period&apos;s allocation. It is a planning technique.
      </p>
      <p>
        You can perform media mix optimization without a formal MMM — many mid-market luxury brands should, because a
        credible MMM generally requires two to three years of weekly data and meaningful spend variation. What you
        cannot do is optimize without <em>some</em> estimate of each channel&apos;s response curve. Where the data does
        not support a model, you generate the curve empirically through deliberate spend variation and holdout testing.
      </p>

      <h2>The Four Inputs Optimization Requires</h2>
      <p>Before any budget moves, you need four things. Missing any of them turns optimization into opinion.</p>
      <ol>
        <li>
          <strong>Calibrated channel efficiency.</strong> Not attributed ROAS. Attributed performance adjusted by
          incrementality coefficients from holdout testing, so that retargeting&apos;s real contribution is not being
          counted three times. If you have not run holdouts, this is the first work to do — everything downstream
          inherits the error.
        </li>
        <li>
          <strong>A response curve per channel.</strong> At minimum, three observed points of spend and outcome per
          channel so you can see the shape. Flat portfolios that have spent the same amount in every channel every
          quarter for two years contain almost no information about response, which is why deliberate variation is
          itself a planning investment.
        </li>
        <li>
          <strong>A defined outcome with a defined lag.</strong> In luxury, the terminal outcome is often 90–180 days
          out. Optimizing to a 7-day conversion window in a category with a 120-day cycle optimizes for impatience. Pick
          a validated intermediate metric — qualified inquiry, booked consultation, showroom appointment — and
          separately verify its historical conversion-to-revenue rate.
        </li>
        <li>
          <strong>Constraints, written down.</strong> Minimum brand presence, inventory-quality floors, contractual
          commitments, seasonality, and the frequency ceilings that protect brand equity. Optimization without
          constraints will happily recommend allocations no luxury brand should execute.
        </li>
      </ol>

      <h2>The Core Principle: Optimize Marginal Return, Not Average Return</h2>
      <p>
        Every media channel exhibits diminishing returns. The first dollars reach the most responsive people at the
        lowest prices; each additional dollar reaches a less responsive person at a higher price. The response curve is
        concave — steep at first, flattening as you scale.
      </p>
      <p>
        The consequence is the single most important idea in this article: <strong>the channel with the best average
        return is frequently not the channel where your next dollar belongs.</strong> Retargeting will nearly always
        show the best average ROAS in your account, and it will also be the channel that saturates fastest, because its
        addressable audience is capped by your site traffic. Once you have reached every site visitor five times,
        additional retargeting budget buys nothing but frequency.
      </p>
      <p>The correct optimization rule is:</p>
      <p>
        <strong>
          Move budget from any channel to any other channel whenever the marginal return on the next dollar in the
          receiving channel exceeds the marginal return on the last dollar in the giving channel.
        </strong>
      </p>
      <p>
        At the optimum, marginal returns are equal across all channels. That is the mathematical definition of an
        optimized mix, and it looks nothing like a plan built by ranking channels on average ROAS.
      </p>

      <h3>A worked example</h3>
      <p>
        Suppose calibrated analysis gives you these figures for a private aviation client spending $400K/quarter:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Current spend</th>
              <th>Average incremental ROAS</th>
              <th>Marginal ROAS at current spend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Site retargeting</td>
              <td>$90K</td>
              <td>6.2x</td>
              <td>1.1x</td>
            </tr>
            <tr>
              <td>Branded search</td>
              <td>$40K</td>
              <td>9.4x</td>
              <td>1.4x</td>
            </tr>
            <tr>
              <td>Non-brand search</td>
              <td>$70K</td>
              <td>3.8x</td>
              <td>2.6x</td>
            </tr>
            <tr>
              <td>Premium CTV (PMP)</td>
              <td>$120K</td>
              <td>2.9x</td>
              <td>2.7x</td>
            </tr>
            <tr>
              <td>Streaming audio</td>
              <td>$40K</td>
              <td>2.4x</td>
              <td>2.3x</td>
            </tr>
            <tr>
              <td>DOOH</td>
              <td>$40K</td>
              <td>2.1x</td>
              <td>2.1x</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ranked by average return, you would pour money into retargeting and branded search. Ranked by marginal return —
        the only ranking that matters — those two channels are the <em>worst</em> homes for the next dollar in the
        portfolio. The optimization moves roughly $60K out of retargeting and branded search and into non-brand search
        and premium CTV until marginal returns converge near 2.3–2.5x across the portfolio. Total portfolio return rises
        without a dollar of incremental budget.
      </p>
      <p>
        This is the mechanism behind most of the efficiency gains we deliver in a first engagement. It is not clever
        buying. It is refusing to confuse average with marginal.
      </p>

      <h2>How Channels Saturate in a Luxury Portfolio</h2>
      <p>
        Saturation behavior differs sharply by channel, and luxury portfolios saturate faster than mass-market ones
        because the addressable audience is small. A brand targeting 1.2 million qualified U.S. households runs out of
        reach at spend levels where a mass DTC brand is still on the steep part of the curve.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Saturation speed</th>
              <th>Primary constraint</th>
              <th>Practical ceiling signal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Site retargeting</td>
              <td>Very fast</td>
              <td>Site traffic volume</td>
              <td>Avg. frequency &gt;6–8/week; CPA rising with flat CVR</td>
            </tr>
            <tr>
              <td>Branded search</td>
              <td>Very fast</td>
              <td>Branded search volume</td>
              <td>Impression share &gt;85–90%; CPCs rising, clicks flat</td>
            </tr>
            <tr>
              <td>CRM/list-based</td>
              <td>Very fast</td>
              <td>List size and match rate</td>
              <td>Match-rate-adjusted reach exhausted</td>
            </tr>
            <tr>
              <td>Non-brand search</td>
              <td>Moderate</td>
              <td>Category query volume</td>
              <td>Impression share &gt;70% on qualified terms</td>
            </tr>
            <tr>
              <td>Social prospecting</td>
              <td>Moderate</td>
              <td>Audience quality decay</td>
              <td>CPM stable but lead quality falling</td>
            </tr>
            <tr>
              <td>Premium CTV (PMP)</td>
              <td>Slow</td>
              <td>Premium inventory availability</td>
              <td>Deal fill rate &lt;70%; frequency drifting above target</td>
            </tr>
            <tr>
              <td>Streaming audio</td>
              <td>Slow</td>
              <td>Affluent listener inventory</td>
              <td>Reach curve flattening within target segment</td>
            </tr>
            <tr>
              <td>DOOH</td>
              <td>Slow</td>
              <td>Qualified location inventory</td>
              <td>Marginal locations dropping below index threshold</td>
            </tr>
            <tr>
              <td>YouTube Select</td>
              <td>Moderate–slow</td>
              <td>Lineup inventory in category</td>
              <td>Rising CPV at flat completion rate</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two operational readings follow. First, the fast-saturating channels should be treated as{" "}
        <em>capacity-constrained line items</em>, funded to their efficient ceiling and then capped — not scaled.
        Second, the slow-saturating premium channels are where portfolio growth has to come from, which is exactly why
        the measurement work in the previous section matters: those channels are invisible to click attribution, so
        without incrementality calibration you will never justify funding them.
      </p>

      <h2>The Media Mix Optimization Procedure for Luxury Portfolios, Step by Step</h2>
      <p>A disciplined quarterly optimization runs in six steps.</p>
      <ol>
        <li>
          <strong>Recalibrate.</strong> Apply the most recent incrementality coefficients to attributed performance for
          every channel. Flag any coefficient older than four quarters as stale.
        </li>
        <li>
          <strong>Estimate marginal return.</strong> For each channel, use the observed response curve to estimate
          return on the next $10K increment. Where the curve is unknown, use the ceiling signals in the table above as a
          proxy for whether you are near saturation.
        </li>
        <li>
          <strong>Rank by marginal, not average.</strong> Produce a single ordered list of channels by marginal return.
          This list is the whole decision.
        </li>
        <li>
          <strong>Apply constraints before moving anything.</strong> Brand-presence minimums, inventory-quality floors,
          frequency ceilings, contractual commitments, and seasonality. Constraints are not adjustments made after
          optimization — they define the feasible space the optimization runs inside.
        </li>
        <li>
          <strong>Move in bounded increments.</strong> Never reallocate more than 15–20% of a channel&apos;s budget in a
          single quarter. Large moves destroy the comparability of the data you need to learn from the move, and in
          premium channels they trigger deal renegotiation and delivery instability.
        </li>
        <li>
          <strong>Reserve a test budget.</strong> Hold 5–10% of working media for deliberate exploration — new channels,
          new supply partners, and spend levels above and below current in existing channels. That variation is what
          regenerates your response curves. A portfolio with no test budget goes blind within a year.
        </li>
      </ol>

      <h2>Constraints Luxury Brands Must Impose on Pure Efficiency</h2>
      <p>
        Optimization logic is indifferent to brand equity. In luxury it cannot be allowed to run unconstrained, and
        these are the four guardrails we consider non-negotiable.
      </p>
      <p>
        <strong>Inventory quality floors.</strong> Efficiency optimization will always find cheap inventory, and cheap
        inventory in programmatic is cheap for reasons — MFA sites, low-viewability placements, content adjacencies that
        damage a premium brand. Set a hard floor: PMP and curated marketplace only above a defined share of spend,
        viewability minimums in the 70%+ range, and a maintained inclusion list. The CPM premium for genuinely premium
        supply typically runs 40–120% over open exchange, and it is a cost of doing business in this category, not an
        inefficiency to optimize away.
      </p>
      <p>
        <strong>Frequency ceilings.</strong> Uncapped frequency is the fastest path to converting brand affinity into
        irritation. For luxury CTV we generally hold total exposure to 3–5 per week per household across the portfolio,
        not per campaign — cross-channel frequency management is the part most brands skip.
      </p>
      <p>
        <strong>Brand presence minimums.</strong> Some share of budget must remain in high-visibility premium
        environments regardless of measured short-term return, because visibility in those environments is itself a
        signal of legitimacy to an affluent audience. This is not a measurement failure; it is a category property.
        Treat it as a fixed constraint, sized deliberately.
      </p>
      <p>
        <strong>Long-horizon weighting.</strong> Because luxury sales cycles run months, short-window optimization
        structurally underweights upper funnel. Apply a documented lag adjustment or optimize to a validated
        intermediate metric, and revisit the assumption annually.
      </p>

      <h2>What Good Looks Like: Benchmark Ranges</h2>
      <p>
        Directional ranges from luxury and high-consideration portfolios. Use them as a starting hypothesis, then let
        your own measurement overwrite them.
      </p>
      <ul>
        <li>
          <strong>Share of working media in premium/PMP inventory:</strong> 55–80% for luxury brands, versus 20–40%
          typical of mass-market programmatic.
        </li>
        <li>
          <strong>Retargeting share of total budget:</strong> 8–15%. Above 20% in a luxury portfolio is almost always
          over-allocation.
        </li>
        <li>
          <strong>Branded search share:</strong> 5–12%, and lower where competitors are not bidding on your terms.
        </li>
        <li>
          <strong>Upper-funnel share (CTV, audio, DOOH, YouTube Select):</strong> 45–65% for brands with sales cycles
          over 60 days.
        </li>
        <li>
          <strong>Test and learn reserve:</strong> 5–10% of working media.
        </li>
        <li>
          <strong>Typical first-year reallocation from a calibrated optimization:</strong> 15–30% of working media, with
          portfolio-level media efficiency ratio improvement in the 12–25% range without incremental budget.
        </li>
      </ul>

      <h2>The Media Mix Optimization Cadence That Makes Luxury Portfolios Compound</h2>
      <p>Optimization is not a project. The brands that pull meaningfully ahead run it on a fixed rhythm.</p>
      <ul>
        <li>
          <strong>Weekly:</strong> In-channel optimization — creative rotation, pacing, supply-path pruning. No
          cross-channel reallocation at this frequency; the signal is too noisy.
        </li>
        <li>
          <strong>Monthly:</strong> Saturation review against the ceiling signals. Frequency audit across channels.
          Inventory-quality audit.
        </li>
        <li>
          <strong>Quarterly:</strong> Full recalibration and reallocation using the six-step procedure. One or two new
          incrementality tests commissioned.
        </li>
        <li>
          <strong>Annually:</strong> MMM refresh where data supports it, constraint review, response-curve rebuild, and
          a deliberate re-examination of the channels excluded from the plan entirely.
        </li>
      </ul>
      <p>
        The compounding comes from step four of the quarterly cycle feeding step one of the next. Each reallocation
        generates spend variation, spend variation regenerates response curves, better curves produce better
        reallocations. Portfolios that hold allocation constant to preserve comparability learn nothing and drift toward
        whatever the platforms optimize them into.
      </p>

      <h2>Five Mistakes That Undo Media Mix Optimization</h2>
      <ol>
        <li>
          <strong>Optimizing to average ROAS.</strong> The whole error in one line. It reliably concentrates budget into
          demand harvesting and starves demand creation.
        </li>
        <li>
          <strong>Reallocating too aggressively.</strong> Moving 50% of a channel&apos;s budget in one quarter destroys
          the comparability required to evaluate the move and destabilizes premium delivery.
        </li>
        <li>
          <strong>Optimizing without incrementality calibration.</strong> Applying rigorous math to biased inputs
          produces confident, precise, wrong answers.
        </li>
        <li>
          <strong>Letting the optimizer choose inventory.</strong> Efficiency logic will find the cheapest impressions
          available. In luxury, that is a brand-safety incident waiting for a quarterly review.
        </li>
        <li>
          <strong>No test reserve.</strong> Without deliberate spend variation, response curves go stale, and within a
          year the plan is being optimized against a model of a market that no longer exists.
        </li>
      </ol>

      <h2>The Return on Getting This Right</h2>
      <p>
        The gains from disciplined media mix optimization are not one-time. A brand that reallocates on marginal return,
        protects premium inventory and frequency by constraint, and reserves budget for deliberate variation improves
        its efficiency every quarter while its competitors re-run last year&apos;s plan with a 5% increase. Over three
        or four cycles, that gap becomes the difference between a media program that defends its budget and one that
        grows it.
      </p>
      <p>That is what optimization is actually for: not squeezing the plan, but earning the right to scale it.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is media mix optimization?</h3>
      <p>
        Media mix optimization is the planning process of allocating budget across channels so that the next dollar
        spent produces the greatest incremental return, using calibrated channel efficiency, response curves, and
        operational constraints as inputs. It is distinct from marketing mix modeling, which is the econometric
        measurement technique that estimates each channel&apos;s historical contribution and response curve — the model
        measures, the optimization decides. A brand can perform credible media mix optimization without a formal MMM,
        but not without some estimate of how each channel responds to changes in spend.
      </p>
      <h3>How do you optimize a media mix for a luxury brand?</h3>
      <p>
        Run a six-step quarterly cycle: recalibrate attributed performance using incrementality coefficients, estimate
        the marginal return on the next increment of spend in each channel, rank channels by marginal rather than
        average return, apply brand and inventory constraints to define the feasible space, move budget in bounded
        increments of no more than 15–20% of a channel&apos;s spend per quarter, and reserve 5–10% of working media for
        deliberate testing. Luxury adds constraints that pure efficiency logic will violate — premium inventory floors,
        cross-channel frequency ceilings, and minimum brand presence in high-visibility environments.
      </p>
      <h3>Why is average ROAS the wrong metric for budget allocation?</h3>
      <p>
        Because every channel has diminishing returns, average ROAS describes the productivity of all dollars already
        spent while allocation decisions concern only the next dollar. Retargeting and branded search almost always show
        the highest average returns and the lowest marginal returns, because both are capped by audiences you already
        own — site visitors and people already searching your name — so additional budget buys frequency rather than
        reach. Ranking channels by average return therefore reliably concentrates budget in demand harvesting and
        starves the upper-funnel channels that generate the demand being harvested.
      </p>
      <h3>How do you know when a media channel is saturated?</h3>
      <p>
        Watch for channel-specific ceiling signals rather than a single rule. Retargeting is saturated when average
        weekly frequency exceeds roughly six to eight exposures and CPA rises while conversion rate stays flat; branded
        search when impression share passes 85–90% and CPCs rise without additional clicks; non-brand search above
        roughly 70% impression share on qualified terms; and premium CTV when private marketplace deal fill rates drop
        below about 70% or frequency drifts above target because the buyer cannot find enough qualified inventory.
        Luxury portfolios hit these ceilings earlier than mass-market ones because the addressable audience is far
        smaller.
      </p>
      <h3>How much budget should a luxury brand put into upper-funnel channels?</h3>
      <p>
        For brands with sales cycles longer than 60 days, upper-funnel channels — premium CTV, streaming audio, DOOH,
        and YouTube Select — typically warrant 45–65% of working media, with retargeting held to 8–15% and branded
        search to 5–12%. The reason this looks aggressive relative to standard performance-marketing advice is that
        click-based attribution cannot see most of the upper-funnel contribution, so brands without incrementality
        calibration systematically under-fund it. The allocation is only defensible once holdout testing has established
        each channel&apos;s true incremental contribution.
      </p>
    </ArticleLayout>
  )
}
