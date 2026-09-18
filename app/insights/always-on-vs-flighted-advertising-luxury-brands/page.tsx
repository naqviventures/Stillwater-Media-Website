import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/always-on-vs-flighted-advertising-luxury-brands"
const title = "Always-On vs Flighted Advertising for Luxury Brands"
const description = "Always-on vs flighted advertising for luxury brands: how sales-cycle length, ad-effect decay, CPM seasonality and holdout data decide the pacing model."
const image = "/images/always-on-vs-flighted-advertising-luxury-brands.png"
const imageAlt = "Blank monthly calendar pages laid across a walnut desk in a limestone study, illustrating Stillwater Media's guide to always-on vs flighted advertising for luxury brands."
const publishedTime = "2026-09-17T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Always-On vs. Flighted Advertising: The Pacing Decision for Luxury Brands",
    description: "Continuous, flighted, or pulsed? A planning framework for high-consideration brands built on sales-cycle length, ad-effect decay, CPM seasonality and holdout evidence.",
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Always-On vs Flighted Advertising for Luxury Brands",
    description: "The pacing model should follow the sales cycle, not the fiscal calendar. Here is the math that decides continuous vs flighted vs pulsed.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "What is the difference between always-on and flighted advertising?",
    answer: "Always-on advertising spends at a roughly even weekly rate for the entire planning period so the brand is never absent from the market, while flighted advertising concentrates spend into bursts of two to eight weeks separated by hiatus periods with no paid media. A third model, pulsing, runs a continuous base layer with heavier bursts on top. The right choice depends on the length of the sales cycle, how quickly each channel's ad effect decays, and how demand and media prices vary across the year.",
  },
  {
    question: "Should luxury brands use always-on or flighted media schedules?",
    answer: "Most luxury and high-consideration brands with a sales cycle over 60 days and an annual media budget above roughly $1 million should use a pulsed schedule rather than pure flighting, because any hiatus longer than the sales cycle means a meaningful share of in-market prospects never see the brand while deciding. Flighting is the better choice for short-cycle categories, hard seasonal demand such as gifting or ski properties, product launches, and budgets too small to sustain a meaningful weekly weight.",
  },
  {
    question: "How long can a brand go dark before ad effects disappear?",
    answer: "It depends on the channel's adstock half-life. Premium CTV effects typically have a half-life of three to six weeks, so a hiatus of three to four weeks retains much of the prior exposure's effect, while programmatic display, native and paid social decay within days and contribute nothing during any hiatus. A practical rule is to never let a channel go dark for longer than its half-life, and to keep fast-decay channels running continuously even when CTV is flighted.",
  },
  {
    question: "What is a pulsed media schedule?",
    answer: "A pulsed schedule combines a continuous base layer, usually 30 to 50 percent of average weekly spend, with heavier bursts timed to demand peaks, competitor hiatus periods, or moments of favorable media pricing. It keeps the brand present throughout long sales cycles while still achieving the concentrated weight that launches and seasonal peaks require. For luxury brands in private aviation, wealth management and real estate, pulsing has produced 12 to 28 percent more incremental conversions than six-on, six-off flighting at equal annual budgets in Stillwater Media's holdout tests.",
  },
  {
    question: "When are premium CTV CPMs lowest?",
    answer: "Premium CTV private marketplace CPMs are typically lowest in January and February, indexing around 82 to 88 against the annual average, and highest from mid-November through December, when they index 130 to 165 and can reach $55 to $85 on top-tier streaming inventory. Because many luxury categories see strong demand in January from bonuses and liquidity events, and because many competitors go dark after Q4, the first quarter is often the most efficient period for a luxury brand to carry heavier CTV weight.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Always-On vs. Flighted Advertising: The Pacing Decision for Luxury Brands",
      description: "A planning framework for choosing between always-on, flighted and pulsed media schedules for luxury and high-consideration brands, covering sales-cycle coverage, ad-effect decay rates by channel, CPM seasonality on premium CTV inventory, share-of-voice dynamics, and how to test the pacing decision with a holdout.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption: "A 90-day sales cycle does not care which quarter the budget was approved in.",
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
      keywords: "always-on vs flighted advertising, media flighting strategy luxury brands, continuous advertising vs pulsing, advertising pacing high-consideration purchases, adstock decay rate CTV, recency planning long sales cycle, burst vs continuity media scheduling, CPM seasonality Q4 premium inventory, share of voice luxury advertising, pulsing media plan holdout test",
      articleSection: "Media Strategy & Planning",
      wordCount: 2700,
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
      date="2026-09-17"
      readingTime="13 min read"
      category="Media Strategy & Planning"
      image={image}
      imageAlt={imageAlt}
      imageCaption="A 90-day sales cycle does not care which quarter the budget was approved in."
      schemaMarkup={schemaMarkup}
    >
      <p>The always-on vs flighted advertising question is usually settled by the finance calendar rather than by the customer. A budget arrives in quarterly tranches, so the media runs in quarterly bursts, and the brand ends up dark for the exact weeks in which a $40,000 jet card buyer or a $3 million home buyer finally decides. For high-consideration brands, where the sales cycle runs 30 to 180 days and the customer is worth $5,000 to $500,000 in lifetime value, the pacing model is not an operational detail. It determines how much of the sales cycle the brand is actually present for, and that number, more than creative or targeting, explains a large share of the difference between campaigns that produce measurable lift and campaigns that do not.</p>
      <p>This guide lays out how Stillwater Media decides between continuous, flighted and pulsed schedules for luxury clients, the data points that drive the decision, and how to test it rather than argue about it.</p>
      <h2>Always-on vs flighted advertising: what the three pacing models actually mean</h2>
      <p>The terms get used loosely, so precise definitions first.</p>
      <p><strong>Always-on (continuity)</strong> spends at a roughly even weekly rate for the full planning period, usually with a floor level of reach and frequency that never drops to zero. Adjustments are made for seasonality, but the brand is never dark.</p>
      <p><strong>Flighted (burst)</strong> concentrates spend into discrete periods of two to eight weeks separated by hiatus periods with no paid media at all. A classic pattern is six weeks on, six weeks off.</p>
      <p><strong>Pulsed</strong> is the hybrid: a continuous base layer, typically 30 to 50 percent of the average weekly spend, with heavier bursts layered on top at moments of peak demand, peak inventory quality, or competitive pressure.</p>
      <p>The debate is old. Continuity advocates cite recency theory, which holds that the ad most likely to influence a purchase is the one seen closest to the purchase moment, so the goal is to be present every week someone is in market. Flighting advocates cite threshold effects: that a brand needs to exceed a certain weekly weight to be noticed at all, and that spreading a limited budget thinly buys nothing. Both are right in different conditions, and the conditions are measurable.</p>
      <h2>The sales cycle is the first input</h2>
      <p>For the categories Stillwater Media works in, the sales cycle is the dominant variable. Typical ranges from our client planning work and from category research:</p>
      <ul>
        <li>Private aviation (jet card, on-demand charter): 30 to 90 days from first research to first flight; fractional and whole aircraft, 90 to 270 days.</li>
        <li>Luxury real estate ($2M+): 60 to 180 days from first search to contract; new-development pre-sales often longer.</li>
        <li>Wealth management and RIA onboarding ($1M+ investable): 90 to 240 days, frequently triggered by a liquidity event that has its own timing.</li>
        <li>Private club membership: 60 to 180 days, seasonal around board admission cycles.</li>
        <li>Luxury automotive ($100K+): 45 to 120 days, shortened when inventory is constrained.</li>
        <li>Premium DTC ($1,000 to $10,000 AOV): 7 to 45 days.</li>
      </ul>
      <p>Here is the arithmetic that makes flighting dangerous in long-cycle categories. Assume a 90-day average cycle and a six-on, six-off flight pattern. A prospect who enters the market at a random point in the year will, on average, overlap with paid media for about half of their 90-day window, and roughly 8 to 12 percent of prospects, those whose entire window falls inside a hiatus, will never see the brand at all during the period they were deciding. In a category where the brand is one of three or four serious options and the prospect is doing active research, being absent for the decision window is not a small inefficiency. It is a lost customer worth five or six figures.</p>
      <p>When the cycle is short, the math flips. A premium DTC brand with a 14-day cycle can run three-week flights around known demand moments and lose very little, because most prospects enter and exit the market inside a single flight.</p>
      <p>The rule of thumb Stillwater Media applies: <strong>when the average sales cycle exceeds the planned hiatus length, flighting is destroying reach among in-market prospects, and the plan should move to pulsed or always-on.</strong></p>
      <h2>Ad-effect decay decides how long a hiatus can be</h2>
      <p>The second input is how quickly the effect of an impression fades, usually expressed as an adstock decay rate or half-life. Marketing mix models estimate this per channel, and while every brand&apos;s coefficients differ, the ranges we see across luxury and high-consideration modelling work are consistent enough to plan with:</p>
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Typical half-life (weeks)</th>
            <th>Practical implication for hiatus length</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Premium CTV (Disney+, Netflix, Prime Video PMPs)</td>
            <td>3 to 6</td>
            <td>Effect persists across a short hiatus; 3 to 4 dark weeks tolerable</td>
          </tr>
          <tr>
            <td>Linear TV</td>
            <td>2 to 5</td>
            <td>Similar to CTV, slightly faster decay</td>
          </tr>
          <tr>
            <td>YouTube Select / online video</td>
            <td>1.5 to 3</td>
            <td>Two dark weeks is the ceiling</td>
          </tr>
          <tr>
            <td>Streaming audio and podcasts</td>
            <td>2 to 4</td>
            <td>Host-read podcast effects persist longer than programmatic audio</td>
          </tr>
          <tr>
            <td>DOOH</td>
            <td>1 to 2</td>
            <td>Effect is largely gone within a fortnight</td>
          </tr>
          <tr>
            <td>Programmatic display and native</td>
            <td>0.5 to 1.5</td>
            <td>Effect disappears within days; hiatus equals zero</td>
          </tr>
          <tr>
            <td>Paid social</td>
            <td>0.5 to 1</td>
            <td>Near-immediate decay</td>
          </tr>
        </tbody>
      </table>
      <p>Two conclusions follow. First, the channels that carry the most persistent effect, premium CTV and audio, are the ones that can safely be flighted for short periods. The channels with fast decay, display, native and social, have to run continuously or they contribute nothing during the hiatus. Second, the total effect of a flight does not vanish at the flight&apos;s end. A six-week CTV flight with a four-week half-life still delivers about 25 percent of its peak effect four weeks after it stops, which is why brand-lift and holdout studies that close their measurement window on the last day of media routinely understate what the flight did.</p>
      <p>For long-cycle luxury categories, the practical schedule that comes out of this is usually a pulsed model: an always-on base of fast-decay, lower-cost channels that keep the brand present in research moments (contextual display in premium editorial, native, search), with premium CTV and audio running in heavier waves timed to the demand calendar, but never with a hiatus longer than roughly one half-life.</p>
      <h2>CPM seasonality changes the cost of each option</h2>
      <p>Premium inventory does not cost the same every month, and this affects the always-on vs flighted advertising calculation more than most planners account for.</p>
      <p>On premium CTV private marketplace deals, Stillwater Media&apos;s planning ranges over the past two years look roughly like this:</p>
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Premium CTV PMP CPM range</th>
            <th>Index vs annual average</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January to February</td>
            <td>$32 to $45</td>
            <td>82 to 88</td>
          </tr>
          <tr>
            <td>March to May</td>
            <td>$38 to $52</td>
            <td>95 to 100</td>
          </tr>
          <tr>
            <td>June to August</td>
            <td>$35 to $48</td>
            <td>88 to 95</td>
          </tr>
          <tr>
            <td>September to mid-November</td>
            <td>$42 to $60</td>
            <td>105 to 115</td>
          </tr>
          <tr>
            <td>Mid-November to December</td>
            <td>$55 to $85</td>
            <td>130 to 165</td>
          </tr>
        </tbody>
      </table>
      <p>A brand that flights heavily into Q4 because that is when the budget is released is paying a 30 to 65 percent premium per impression for the privilege, while the same impression in January, when many luxury categories see strong post-bonus and post-liquidity-event demand, is available at a discount. Always-on plans naturally average across these prices; flighted plans concentrate exposure to whatever the price happens to be during the flight.</p>
      <p>The correct response is not to avoid Q4. For luxury gifting categories, jewelry, timepieces, wine and spirits, Q4 demand justifies the CPM. It is to make the flighting decision on demand-per-dollar rather than on budget-release timing, and to negotiate PMP rates on an annual commitment so the Q4 premium is capped.</p>
      <h2>Share of voice and the competitive-hiatus effect</h2>
      <p>The third input is competitive. In categories with three to six serious competitors, most of them also flighting, the cheapest reach a brand will ever buy is during a competitor&apos;s hiatus. Auction pressure on affluent-audience PMP deals drops, and the brand&apos;s share of voice among in-market prospects rises without spending more.</p>
      <p>Research on excess share of voice, the gap between a brand&apos;s share of category advertising and its share of category sales, has consistently found that sustained positive ESOV precedes share growth, with a frequently cited relationship of roughly 0.5 points of share growth per year for every 10 points of ESOV, though the coefficient varies substantially by category. The word that matters is sustained. A brand that achieves 60 percent share of voice for six weeks and zero for the next six has an average ESOV that may be positive but a competitive presence that is highly volatile, and volatility in presence is what lets a competitor own the research moments in between.</p>
      <p>For luxury brands, the practical implication is that continuity is a competitive strategy, not just an efficiency one. Being the only private aviation brand a prospect sees in a Netflix ad break in February, when three competitors have gone dark until spring, is a structural advantage that no amount of Q4 weight recovers.</p>
      <h2>When flighting is the right answer</h2>
      <p>Always-on is not universally correct, and the cases where flighting wins are clear enough to list:</p>
      <ol>
        <li><strong>Short sales cycles.</strong> Below roughly 30 days, flights aligned to demand moments lose little reach and gain the threshold benefits of concentrated weight.</li>
        <li><strong>Hard seasonal demand.</strong> Ski properties, yacht charter in the Mediterranean, private-school admissions, and gifting categories have demand curves that make off-season spend inefficient regardless of decay.</li>
        <li><strong>Launch and news moments.</strong> A new aircraft type, a new development release, a fund launch, a redesigned flagship product: these justify concentrated weight above the base layer to achieve the reach and frequency a launch needs in a short window.</li>
        <li><strong>Budgets below the continuity floor.</strong> If the annual budget cannot sustain a meaningful weekly weight, typically at least 15 to 20 percent reach of the target audience per week on the primary channel, then spreading it thin buys frequency of one against everyone and threshold against no one. Flighting concentrates it into weeks where it can work.</li>
        <li><strong>Measurement requirements.</strong> A planned dark period in a subset of markets is, in effect, a geo holdout, and some brands deliberately flight to create clean measurement windows.</li>
      </ol>
      <p>The mistake is treating any of these as a default. Most luxury brands with $1 million or more in annual media and a cycle over 60 days should be pulsed, not flighted, and the base layer should never go to zero.</p>
      <h2>Choosing between always-on and flighted advertising: a six-step methodology</h2>
      <p>This is the process Stillwater Media runs when setting the pacing model for a client, whether in the initial plan or at an annual reset.</p>
      <ol>
        <li><strong>Quantify the sales cycle distribution, not the average.</strong> Pull first-touch to close dates from the CRM for the last 12 to 24 months. The median and the 80th percentile matter more than the mean, because the long tail is where high-value customers cluster.</li>
        <li><strong>Map demand by month.</strong> Use CRM inquiry timing, site search and organic traffic, and category search interest to build a demand index by month. Weight the spend curve to demand, not to budget release.</li>
        <li><strong>Estimate decay by channel.</strong> If a marketing mix model exists, use its adstock coefficients. If not, use the ranges in the table above as priors and plan to tighten them from holdout results.</li>
        <li><strong>Set the continuity floor.</strong> Determine the minimum weekly weight on the primary channel at which the brand is meaningfully present, then check whether the annual budget sustains it. If yes, always-on or pulsed; if no, flighted around the highest-demand months with the fastest-decay channels cut entirely.</li>
        <li><strong>Layer the bursts.</strong> Place additional weight where demand index, competitor hiatus and CPM efficiency intersect. January, for many luxury categories, scores well on all three.</li>
        <li><strong>Design the test before launch.</strong> The pacing decision is testable. Hold out a set of matched markets from the base layer, or run continuous in one region and flighted in another with equal annual budgets, and read the incremental difference. A geo experiment with 8 to 12 treatment markets over 16 to 24 weeks is typically sufficient to detect a 10 to 15 percent difference in incremental conversions at the spend levels luxury brands run.</li>
      </ol>
      <h2>What the holdout data usually shows</h2>
      <p>Stillwater Media has run pacing comparisons across private aviation, wealth management and luxury real estate clients, and while every result is specific to its category and budget, the pattern is consistent enough to state. With annual budget held equal, moving from a six-on, six-off flighted schedule to a pulsed schedule with a continuous base layer has produced incremental lead and application volume increases in the range of 12 to 28 percent, with the larger gains in the longest-cycle categories. Incremental cost per acquisition improved in every case, in part because the pulsed schedules bought a larger share of impressions outside the Q4 CPM peak.</p>
      <p>The reverse test, moving from always-on to flighted, has been favorable in exactly one case: a premium DTC client with a 12-day cycle whose demand was overwhelmingly concentrated in two gifting windows. There, flighting improved efficiency by roughly 18 percent because the off-season spend had been buying reach among people who were nowhere near a purchase.</p>
      <p>The lesson is that neither model is right in the abstract. The sales cycle, the decay profile and the demand curve are right, and the pacing model follows from them.</p>
      <h2>Common mistakes</h2>
      <ul>
        <li><strong>Letting the budget release schedule set the flight schedule.</strong> Quarterly tranches should be pooled and paced against the demand curve, not spent as they arrive.</li>
        <li><strong>Going dark on fast-decay channels during a CTV hiatus.</strong> If the plan is flighted at all, the contextual display and native layer in premium editorial should stay on; it is inexpensive and it is what the prospect sees while researching.</li>
        <li><strong>Closing the measurement window when the flight ends.</strong> With a four-week CTV half-life, at least four to six weeks of post-flight reading are required, or the flight&apos;s true effect is understated.</li>
        <li><strong>Ignoring the ad-free leakage problem when sizing the continuity floor.</strong> Reach among affluent households on any single streaming platform is smaller than headline penetration suggests, so the weekly weight needed for meaningful presence is higher than a general-market plan would assume.</li>
        <li><strong>Treating January as off-season.</strong> For private aviation, wealth management and luxury real estate, January and February combine strong demand, competitor hiatus and the lowest premium CTV CPMs of the year.</li>
        <li><strong>Never testing the pacing decision.</strong> It is one of the largest controllable variables in the plan and one of the cheapest to test with a geo holdout.</li>
      </ul>
      <h2>The planning answer for most luxury brands</h2>
      <p>If the sales cycle is over 60 days, the annual budget is above the continuity floor, and the category has identifiable demand peaks, the answer is a pulsed schedule: a continuous base layer of 30 to 50 percent of average weekly spend, concentrated in fast-decay channels and a modest premium CTV presence, with two to four bursts per year timed to demand, competitor hiatus and CPM efficiency, and no hiatus on any channel longer than that channel&apos;s effect half-life.</p>
      <p>Stillwater Media builds the pacing model into every media plan we run for luxury and high-consideration brands, and we test it with holdouts rather than assume it. If your brand has a long sales cycle and a media schedule that was set by the fiscal calendar, we should talk. We accept a limited number of new engagements each quarter. <a href="/apply">Apply to work with Stillwater Media</a>.</p>
    </ArticleLayout>
  )
}
