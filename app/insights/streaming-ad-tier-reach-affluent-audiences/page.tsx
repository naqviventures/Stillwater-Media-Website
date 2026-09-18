import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/streaming-ad-tier-reach-affluent-audiences"
const title = "Streaming Ad-Tier Reach: Affluent Audiences by Platform"
const description = "Streaming ad-tier reach by platform: ad-supported subscriber scale, affluent household composition, the ad-free leakage problem, and how to size HNW reach."
const image = "/images/streaming-ad-tier-reach-affluent-audiences.png"
const imageAlt = "A television glowing in an elegant living room at night, illustrating Stillwater Media's guide to streaming ad-tier reach among affluent households."
const publishedTime = "2026-09-16T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Streaming Ad-Tier Reach and Affluent Composition by Platform",
    description: "How many affluent households can a luxury brand actually reach on the ad tiers of Netflix, Disney+, Prime Video, Max, Peacock, Paramount+ and Hulu - and how much of the target has bought its way out of ads entirely.",
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streaming Ad-Tier Reach: Affluent Audiences by Platform",
    description: "Ad-tier scale, affluent composition, and the ad-free leakage math every luxury brand needs before committing a CTV budget.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "What is streaming ad-tier reach?",
    answer: "Streaming ad-tier reach is the number of active households an advertiser can actually serve ads to on a streaming service, after removing ad-free subscribers, households outside the target geography, and dormant accounts. It is typically a third or less of a service's headline subscriber count in the United States, and for luxury advertisers it must be reduced further to the share of ad-tier households that meet an affluent or high-net-worth definition.",
  },
  {
    question: "Which streaming platform has the most affluent ad-supported audience?",
    answer: "Max carries the highest affluent index among the major services on its ad tier, but its ad-supported base is relatively small. Prime Video delivers the largest raw count of affluent ad-tier households because advertising is on by default and most subscribers, including wealthy ones, never pay to opt out. Live sports on streaming - golf, tennis, and Formula 1 in particular - deliver the highest affluent concentration per impression of any streaming inventory.",
  },
  {
    question: "What is ad-free subscription leakage?",
    answer: "Ad-free leakage is the share of a brand's target audience that cannot be reached on a platform because those households pay for the tier without advertising. Because willingness to pay for ad removal correlates with income, affluent households choose ad-free tiers at roughly 1.4 to 1.8 times the general rate on services where ad-free is an upgrade, which means a luxury brand's reachable audience on any single entertainment platform is often 15 to 20 percent of its target universe rather than the 60-plus percent that platform penetration implies.",
  },
  {
    question: "How do you size CTV reach for high-net-worth households?",
    answer: "Start by counting target households using wealth-based segmentation, then match that file against each platform through a clean room to get true penetration. Apply an ad-tier adjustment and an affluent ad-free leakage ratio, discount to households active at least weekly, deduplicate across platforms, and convert the result into impressions and budget at a planning frequency of three to five per month. If the required budget exceeds what is available, narrow the geography or the audience definition rather than cutting frequency.",
  },
  {
    question: "Should luxury brands advertise on Prime Video?",
    answer: "In most cases, yes, and often as the largest single allocation. Because Prime Video shows ads by default and charges extra to remove them, it has the largest ad-supported audience in US streaming and an affluent composition that indexes well above the national average, since inertia keeps wealthy households on the ad tier. Buying through private marketplace deals with audience verification, and using live properties like Thursday Night Football where relevant, lets luxury brands access that reach with the brand-safety and composition controls they require.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Streaming Ad-Tier Reach and Affluent Composition by Platform",
      description: "A planning guide to streaming ad-tier reach for luxury advertisers: ad-supported subscriber scale by platform, the affluent and high-net-worth composition of each ad tier, the ad-free subscription leakage problem, and a step-by-step method for sizing reachable affluent households before committing a premium CTV budget.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption: "The affluent household is watching - the planning question is whether it is watching a tier that carries ads.",
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
      keywords: "streaming ad-tier reach, ad-supported streaming subscribers by platform, affluent audience composition streaming, ad-free subscription leakage, CTV reach for high-net-worth households, Netflix ad tier affluent reach, Disney Plus ad-supported audience, Prime Video ads reach, streaming audience sizing luxury brands, premium CTV media planning",
      articleSection: "Premium CTV & Streaming",
      wordCount: 2230,
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
      date="2026-09-16"
      readingTime="12 min read"
      category="Premium CTV & Streaming"
      image={image}
      imageAlt={imageAlt}
      imageCaption="The affluent household is watching - the planning question is whether it is watching a tier that carries ads."
      schemaMarkup={schemaMarkup}
    >
      <p>Streaming ad-tier reach is the number of households a brand can actually put an ad in front of on a given service - not the service&apos;s total subscriber count, and not the size of its content library&apos;s cultural footprint. For luxury and high-consideration brands, that distinction is the entire plan. Every major streamer now sells advertising, but every one of them also sells an ad-free tier, and the households most able to afford the upgrade are disproportionately the ones a luxury brand is trying to reach.</p>
      <p>At Stillwater Media we size streaming ad-tier reach for affluent households before we commit a dollar of CTV budget, and we have found that brands who skip this step routinely overestimate their reachable audience by two to three times. This is the method, the platform-by-platform picture as we plan against it today, and the leakage arithmetic that changes what a premium CTV plan should look like.</p>
      <h2>Why Total Subscribers Is the Wrong Streaming Ad-Tier Reach Number</h2>
      <p>A streaming service&apos;s headline subscriber figure includes three groups that an advertiser cannot reach: subscribers on the ad-free tier, subscribers outside the advertiser&apos;s geography, and subscribers who are dormant or who watch so little that frequency cannot be achieved. What remains is the ad-tier active base, and it is often a third or less of the headline number in the United States.</p>
      <p>Then a second filter applies for luxury advertisers: of the reachable ad-tier households, how many are affluent? Ad-tier audiences skew younger and less affluent than ad-free audiences on every platform where the data has been published, precisely because the ad tier is the cheaper product. The effect is not catastrophic - affluent households are on ad tiers in large numbers, and many high-net-worth households deliberately choose the cheaper option - but it means that a platform&apos;s overall affluent index cannot be applied to its ad tier without adjustment.</p>
      <p>The planning question is therefore not "how big is Netflix" but "how many households with $250,000-plus income or $1 million-plus investable assets are on Netflix&apos;s ad tier in my target markets, active enough to reach three times a month?"</p>
      <h2>Streaming Ad-Tier Reach by Platform: The Planning Picture</h2>
      <p>The figures below are planning ranges we use, built from platform disclosures, third-party measurement, and our own campaign delivery data. Platforms update their numbers on their own cadence and definitions differ (monthly active users versus subscribers versus "ad-tier viewers"), so treat these as ranges for planning rather than as audited counts, and verify current figures with each platform&apos;s sales team at the time of buying.</p>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>US ad-tier reach (households, planning range)</th>
            <th>Approx. share of US base on ad tier</th>
            <th>Affluent index vs. US avg ($200K+ HHI, ad tier)</th>
            <th>HNW composition notes</th>
            <th>Typical PMP CPM (luxury-suitable)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prime Video</td>
            <td>55–70M+ (ads on by default)</td>
            <td>Majority; ad-free is a paid opt-out</td>
            <td>115–130</td>
            <td>Strongest raw HNW count because default-on captures affluent who never opt out</td>
            <td>$35–$60</td>
          </tr>
          <tr>
            <td>Netflix (ads)</td>
            <td>25–40M</td>
            <td>Roughly 40–55% of new sign-ups; lower share of legacy base</td>
            <td>105–120</td>
            <td>Fastest-growing affluent ad-tier base; strong 35–54 skew</td>
            <td>$40–$65</td>
          </tr>
          <tr>
            <td>Disney+ (ads)</td>
            <td>20–30M</td>
            <td>Roughly half of US base</td>
            <td>110–125</td>
            <td>Family-skewed; strong among affluent parents 35–50</td>
            <td>$40–$70</td>
          </tr>
          <tr>
            <td>Hulu (ads)</td>
            <td>30–40M</td>
            <td>Majority of base</td>
            <td>100–115</td>
            <td>Broad; affluent reach through news, prestige drama</td>
            <td>$30–$50</td>
          </tr>
          <tr>
            <td>Max (ads)</td>
            <td>12–20M</td>
            <td>Minority of base</td>
            <td>120–140</td>
            <td>Highest affluent index among the majors; prestige content, sports</td>
            <td>$45–$75</td>
          </tr>
          <tr>
            <td>Peacock (Premium w/ ads)</td>
            <td>20–30M</td>
            <td>Majority of base</td>
            <td>95–110</td>
            <td>Sports-driven affluent spikes (golf, Premier League, Olympics)</td>
            <td>$30–$55</td>
          </tr>
          <tr>
            <td>Paramount+ (Essential)</td>
            <td>15–25M</td>
            <td>Majority of base</td>
            <td>95–105</td>
            <td>Broad; live sports (golf, NFL, soccer) carry affluent reach</td>
            <td>$28–$50</td>
          </tr>
          <tr>
            <td>Live sports on streaming (cross-platform)</td>
            <td>Event-dependent</td>
            <td>n/a</td>
            <td>125–160 for golf, tennis, F1</td>
            <td>Highest affluent concentration per impression in streaming</td>
            <td>$60–$120+</td>
          </tr>
        </tbody>
      </table>
      <p>Four points stand out.</p>
      <p>Prime Video changed the planning math more than any other platform. When Amazon made advertising the default in early 2024 and required an additional monthly fee to remove it, it created the largest ad-supported premium video audience in the United States by a wide margin, and one where affluent households are heavily represented because default-on captures everyone who does not bother to opt out - which is a large fraction of even very wealthy households.</p>
      <p>Max carries the highest affluent index of the majors, but its ad-tier base is the smallest among the big services because its subscribers skew toward the ad-free product. High composition, modest scale: it is a precision layer, not a reach layer.</p>
      <p>Netflix&apos;s ad tier has grown fast and its affluent composition has improved as the tier matured, but planners should still model it as an audience that under-indexes Netflix&apos;s overall subscriber base on income.</p>
      <p>Live sports on streaming is a category of its own. Golf on Peacock or Paramount+, Formula 1 and tennis on ESPN+ or their respective rights holders, and the NFL on Prime Video&apos;s Thursday Night Football and Peacock deliver affluent concentrations that no entertainment ad tier matches, at CPMs that reflect it.</p>
      <h2>The Ad-Free Leakage Problem</h2>
      <p>Ad-free leakage is the share of a brand&apos;s target households that cannot be reached on a given platform because they pay for the tier without advertising. For mass-market brands it is a nuisance. For luxury brands it is a structural constraint, because willingness to pay an extra $4 to $10 a month to remove ads correlates with income.</p>
      <p>Our planning assumption, supported by subscriber surveys and our own match-rate data, is that affluent households ($200,000-plus income) choose the ad-free tier at roughly 1.4 to 1.8 times the rate of the general population on services where ad-free is the upgrade (Netflix, Disney+, Hulu, Max, Peacock, Paramount+). On Prime Video, where ad-free is the opt-out, the ratio is far lower - closer to 1.1 to 1.3 - because inertia works in the advertiser&apos;s favor.</p>
      <h3>Leakage arithmetic for a luxury plan</h3>
      <p>Suppose a wealth management firm wants to reach households in its 20 target DMAs with investable assets above $1 million - call it 1.6 million households. Plan the reach on a single platform whose overall US penetration among those households is 65 percent, with 45 percent of its base on the ad tier in general and an ad-free selection rate 1.6 times higher among affluent households.</p>
      <ol>
        <li>Households subscribing: 1.6M × 0.65 = 1.04M</li>
        <li>General ad-tier share: 45%. Affluent ad-free selection is 1.6x the general rate of 55%, so affluent ad-free share ≈ 55% × 1.6 = 88% - capped in practice; real-world observed figures land closer to 65–72% ad-free among this cohort on upgrade-model platforms.</li>
        <li>Using 68% ad-free: affluent ad-tier households ≈ 1.04M × 0.32 = ~333,000</li>
        <li>Active enough to reach at effective frequency (watching at least weekly): typically 70–80% of the ad tier → ~240,000–265,000 households</li>
      </ol>
      <p>The firm&apos;s reachable audience on that platform is roughly 15 to 17 percent of its target universe, not the 65 percent the penetration figure implied. That is not a reason to skip the platform. It is the reason a luxury CTV plan must be multi-platform, and why Prime Video and live sports carry disproportionate weight in it.</p>
      <h3>Cross-platform reach recovers most of the leakage</h3>
      <p>Ad-free selection is not perfectly correlated across services. A household that pays for ad-free Netflix is often on the ad tier of Disney+ or Hulu, and almost always on the default ad tier of Prime Video. Across a five-platform plan built through private marketplace deals, we typically recover reach to 55 to 70 percent of the affluent target universe, with the deduplicated household count verified through a clean-room match against the brand&apos;s own first-party data or a wealth-based audience file.</p>
      <h2>How to Size Streaming Ad-Tier Reach for Affluent Households</h2>
      <p>This is the sizing method we run on every luxury CTV plan. It takes a week and it prevents the most common failure in the category, which is buying a "reach" that was never there.</p>
      <ol>
        <li><strong>Define the target universe in households.</strong> Use wealth-based segmentation (verified income and asset indicators, not luxury-interest proxies) to count target households in the geography. Get to a number: 1.6 million, 400,000, 90,000.</li>
        <li><strong>Pull platform penetration for that universe.</strong> Match the target file against each platform&apos;s audience through a clean room or a verified data partner. The output is the share of your households on each platform, not the platform&apos;s general penetration.</li>
        <li><strong>Apply the ad-tier and leakage adjustment.</strong> Use platform-provided ad-tier composition where available; otherwise apply the affluent ad-free selection ratios above.</li>
        <li><strong>Apply the activity filter.</strong> Discount to households active at least weekly. Platforms will supply this on request for PMP buyers.</li>
        <li><strong>Deduplicate across platforms.</strong> Estimate overlap through the same clean-room match or through a reach-curve model built from the platform-level numbers.</li>
        <li><strong>Convert to impressions and budget at planning frequency.</strong> Reachable households × target monthly frequency (typically 3 to 5 for luxury) × CPM ÷ 1,000 gives the budget required to achieve the reach. If the budget exceeds what the plan allows, the constraint is reach, and the honest response is to narrow the geography or the target definition rather than to accept lower frequency across an audience that will not remember the brand.</li>
      </ol>
      <p>Run this exercise and the plan changes shape. Most luxury brands find that the reachable affluent audience is a fraction of what they assumed, that Prime Video and live sports are larger than their instinctive allocation, and that a plan built on two "prestige" entertainment services would have missed most of its target.</p>
      <h2>Platform Selection by Luxury Vertical</h2>
      <p>Affluent composition varies enough across platforms that vertical matters.</p>
      <table>
        <thead>
          <tr>
            <th>Vertical</th>
            <th>Lead platforms for affluent reach</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Private aviation, yachting</td>
            <td>Prime Video, live golf/F1/tennis, Max</td>
            <td>Highest raw HNW count on Prime; sport properties index 125–160 on $500K+ HHI</td>
          </tr>
          <tr>
            <td>Wealth management, private banking</td>
            <td>Prime Video, Max, Peacock (golf, news), Netflix</td>
            <td>Older-skewing affluent; news and prestige drama; golf audiences</td>
          </tr>
          <tr>
            <td>Luxury real estate, home builders</td>
            <td>Disney+, Hulu, Prime Video, Max</td>
            <td>Affluent parents 35–55 relocating; home and lifestyle content adjacency</td>
          </tr>
          <tr>
            <td>Luxury automotive</td>
            <td>Prime Video (TNF), live sports, Netflix</td>
            <td>Male 35–64 affluent skew; F1 and golf over-index on luxury vehicle intent</td>
          </tr>
          <tr>
            <td>Luxury hospitality, cruise</td>
            <td>Disney+, Hulu, Netflix, Peacock</td>
            <td>Family and couples travel decision-makers; broad affluent reach</td>
          </tr>
          <tr>
            <td>Premium DTC, luxury goods</td>
            <td>Netflix, Disney+, Hulu, Prime Video</td>
            <td>Younger affluent and HENRY households; scale matters for DTC economics</td>
          </tr>
        </tbody>
      </table>
      <p>The pattern is consistent: Prime Video appears in almost every row because of scale, live sports appear wherever the target is UHNW, and the entertainment services are chosen by audience age and household composition rather than by brand prestige.</p>
      <h2>Common Mistakes in Streaming Ad-Tier Reach Planning for Luxury Brands</h2>
      <ul>
        <li><strong>Planning against total subscribers.</strong> The most common error and the most expensive. Always plan against the ad-tier active base for your target, not the headline number.</li>
        <li><strong>Applying platform affluent indices to the ad tier.</strong> The ad tier under-indexes the platform&apos;s overall base on income. Adjust or ask the platform for tier-specific composition.</li>
        <li><strong>Ignoring Prime Video because it feels less "premium."</strong> Default-on advertising made it the largest affluent ad-tier audience in the country. Excluding it forfeits reach that cannot be recovered elsewhere.</li>
        <li><strong>Buying open-exchange "CTV" to make up reach.</strong> Open-exchange inventory labelled CTV frequently resolves to mobile in-app video, FAST channels with unverified composition, or outright fraud. Reach acquired this way is not reach against the target.</li>
        <li><strong>Accepting frequency below three.</strong> When reach is constrained, some planners spread budget thin to claim a larger reach number. Luxury purchase cycles run months; a household exposed once does not remember the brand. Narrow the audience and hold frequency.</li>
        <li><strong>Skipping the clean-room verification.</strong> Without a match against a wealth-based file, every composition figure is the platform&apos;s claim. Verify.</li>
      </ul>
      <h2>How Streaming Ad-Tier Reach Shifts Over Time</h2>
      <p>Ad-tier reach is not a fixed quantity, and a plan sized once and never revisited drifts out of date within two quarters. Three forces are moving the numbers, all of them in the advertiser&apos;s favor.</p>
      <p>The first is pricing. Every major service has raised ad-free prices repeatedly since 2023, and each increase widens the gap between the ad-supported and ad-free tiers. When that gap crosses roughly $6 to $8 a month per service, we observe measurable migration toward ad tiers even among households that could easily afford the difference - not because the money matters, but because the number of subscriptions has grown to a point where households are consolidating and rationalizing. Affluent households with six or seven streaming subscriptions are increasingly willing to accept ads on the two or three they watch least.</p>
      <p>The second is bundling. The Disney+, Hulu, and Max bundle, the Peacock and Apple TV+ pairings with mobile carriers, and Prime Video&apos;s integration into a broader membership all push subscribers toward ad-supported configurations by default, because the bundle economics only work at the ad-tier price. Bundled households are frequently on ad tiers they did not consciously choose, and they include a great many affluent households.</p>
      <p>The third is account-sharing enforcement. When Netflix and later Disney+ began restricting password sharing, the displaced viewers who re-subscribed did so at the cheapest available price point, which is the ad tier. That cohort skews younger and includes a meaningful HENRY (high earner, not rich yet) population that luxury DTC and premium hospitality brands care about.</p>
      <p>The practical implication is that the sizing exercise above should be re-run at least twice a year, and the platform allocation adjusted as ad-tier composition improves. Brands that sized their affluent reach in 2024 and never updated it are underinvesting in Netflix and Disney+ today relative to what those tiers now deliver, and will underinvest in Max as its ad tier scales. Ad-tier reach is the one dimension of streaming that reliably gets better for the luxury advertiser over time; the plan should be built to capture that.</p>
      <h2>What This Means for a Premium CTV Budget</h2>
      <p>The practical consequence of ad-tier reach and affluent leakage is that luxury CTV is a multi-platform, PMP-driven, verification-heavy discipline. A plan that respects the constraints typically allocates 25 to 35 percent to Prime Video, 15 to 25 percent to live sports on streaming, and the remainder across Netflix, Disney+, Hulu, Max, Peacock, and Paramount+ weighted by the vertical&apos;s audience - with every platform bought through private marketplace deals carrying audience verification, and with reach and frequency reported at the deduplicated household level against the wealth-based target.</p>
      <p>Executed this way, a luxury brand can reach 55 to 70 percent of its affluent universe on ad-supported streaming at effective frequency. Planned against headline subscriber counts, the same budget reaches a fraction of that and reports a number nobody can defend.</p>
      <p>If your brand needs a streaming plan sized against the households that actually matter - with the private marketplace access and the clean-room verification to prove it - <a href="/apply">apply to work with Stillwater Media</a>. We take a limited number of engagements per quarter.</p>
    </ArticleLayout>
  )
}
