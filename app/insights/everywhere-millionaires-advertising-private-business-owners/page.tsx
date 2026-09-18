import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/everywhere-millionaires-advertising-private-business-owners"
const title = "Everywhere Millionaires: The Wealthy Buyers Ads Miss"
const description = "The Atlantic's \"everywhere millionaires\" research shows most $10M+ Americans are private business owners, not tech or finance. Here is how to reach them."
const image = "/images/everywhere-millionaires-advertising-private-business-owners.png"
const imageAlt = "An unmarked industrial headquarters at golden hour with a private jet on a distant airfield, illustrating Stillwater Media's analysis of everywhere millionaires and how luxury brands can reach private business owners."
const publishedTime = "2026-09-17T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Everywhere Millionaires: The Wealthy Buyers Your Affluent Targeting Is Missing",
    description: "New research in The Atlantic finds 1.7 million Americans built $10M+ fortunes owning private businesses - in car dealerships, lumber, distribution and scrap metal, all over the country. Most luxury media plans are not built to find them.",
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everywhere Millionaires: The Wealthy Buyers Ads Miss",
    description: "For every public-company CEO there are 1,000+ private-business owners worth $25M+. Your affluent audience segments were built for the CEO. A media strategist's read of The Atlantic's research.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "What are \"everywhere millionaires\"?",
    answer: "\"Everywhere millionaires\" is the term economists Owen Zidar and Eric Zwick use, in a September 2026 essay in The Atlantic, for the roughly 1.7 million Americans who have built a net worth of at least $10 million by owning a private business. Unlike tech founders or Wall Street executives, they are spread across the entire country and across unglamorous industries such as car dealerships, lumber, food distribution, scrap metal and equipment manufacturing, and their wealth is largely invisible in public records because privately held businesses do not have to disclose ownership or compensation.",
  },
  {
    question: "Why do affluent audience segments miss private business owners?",
    answer: "Most affluent segments are built from modeled income, coastal ZIP-code home values, employee-oriented occupation data and aspirational digital behavior, all of which systematically under-count business owners. A pass-through business owner may draw a modest salary from a company generating millions in profit, live in a secondary metro where a large home does not register on value models, and consume little of the financial and luxury media that behavioral segments key on. The result is an \"HNW\" audience that over-represents salaried coastal professionals and under-represents the largest population of Americans who can actually afford a luxury purchase.",
  },
  {
    question: "How can luxury brands target wealthy business owners?",
    answer: "Start from business-registration and firmographic data to identify privately held pass-through companies above roughly $10 million in revenue, resolve the registered principals to households through an identity partner, verify wealth with asset signals such as commercial real estate, aircraft and vessel ownership rather than income, and add a trigger layer that watches for liquidity events like recapitalizations and ownership transfers. Deliver through household-level channels such as premium CTV and live sports, business and sports podcasts, DOOH at regional private aviation terminals, and contextual placements in trade and regional business media, with geographic weighting toward secondary metros.",
  },
  {
    question: "Which channels reach everywhere millionaires most effectively?",
    answer: "Premium CTV and live sports on streaming are the anchor because business-owner households in secondary markets are heavy streaming and sports viewers and the household-level delivery reaches the spouse involved in every major purchase. Podcasts and streaming audio reach owners during long drives between locations, DOOH at regional FBOs reaches them at the airport, and contextual programmatic in trade publications and regional business journals reaches them in a professional context at low CPMs. Financial-news display, luxury-retail retargeting and metro-focused paid social can be de-weighted because they over-index to aspirational coastal audiences.",
  },
  {
    question: "What creative works for private business owners?",
    answer: "Creative that leads with utility, time and discretion rather than status. Business owners in this cohort tend to avoid publicity, distrust overtly salesy messaging, and respond to creative set in their own world, such as a distribution center or a family-owned manufacturing floor, rather than skylines and trading floors. Wealth-management and insurance messaging performs better when it acknowledges the owner's existing advisors instead of positioning against them, and privacy or unlisted service should be presented as a feature rather than an afterthought.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Everywhere Millionaires: The Wealthy Buyers Your Affluent Targeting Is Missing",
      description: "A media strategist's analysis of economists Owen Zidar and Eric Zwick's 'everywhere millionaires' research, published in The Atlantic, and what it means for luxury advertisers: why standard affluent audience segments over-index on coastal tech and finance wealth, how to rebuild targeting around private-business ownership signals, which channels and geographies reach this cohort, and how to measure it.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption: "The most common $25 million American does not work in a tower. He owns the building - and eleven others like it.",
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
      keywords: "everywhere millionaires, advertising to private business owners, pass-through business owner audience targeting, hidden wealth audience segmentation, high-net-worth business owner marketing, affluent targeting beyond coastal metros, Zidar Zwick everywhere millionaires research, reaching wealthy entrepreneurs with CTV, business owner wealth signals programmatic, luxury advertising secondary markets",
      articleSection: "Affluent Audience Strategy",
      wordCount: 2470,
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
      readingTime="12 min read"
      category="Affluent Audience Strategy (Special Insight)"
      image={image}
      imageAlt={imageAlt}
      imageCaption="The most common $25 million American does not work in a tower. He owns the building - and eleven others like it."
      schemaMarkup={schemaMarkup}
    >
      <p>This week The Atlantic published a piece by the economists Owen Zidar and Eric Zwick, <a href="https://www.theatlantic.com/ideas/2026/09/everywhere-millionaires-tax-code/688584/" target="_blank" rel="noopener noreferrer">"Americans Don&apos;t Understand Who&apos;s Rich,"</a> that every CMO of a luxury or high-consideration brand should read twice. The article is about tax policy. Its findings, though, are about audience, and they describe a cohort the authors call "everywhere millionaires": roughly 1.7 million Americans who have each built a net worth of at least $10 million by owning a private business. By their count, for every CEO of a public company there are more than 1,000 private-business owners worth more than $25 million.</p>
      <p>Stillwater Media has spent years building affluent audiences for private aviation, wealth management, luxury real estate and premium automotive clients, and the article puts hard numbers on something we see in every clean-room match: the standard picture of the American rich, on which most affluent audience segments are built, is wrong about where the money is. This post is our read of the research and a practical plan for advertising to the people it describes.</p>
      <h2>What the everywhere millionaires research actually found</h2>
      <p>The article opens with Terry Taylor, a Florida-based owner of car dealerships worth about $2 billion who avoids publicity so thoroughly that Forbes titled its profile of him "The Car Dealership Billionaire No One Knows." He is presented not as an anomaly but as the archetype. The authors&apos; central claims, drawn from a decade of work with anonymized Treasury and IRS records:</p>
      <ul>
        <li>About 1.7 million Americans have a net worth of $10 million or more built through private-business ownership.</li>
        <li>The 65,000 US households worth more than $100 million, per their analysis of the 2022 Survey of Consumer Finances, consist almost entirely of business owners, and fewer than half hold graduate degrees.</li>
        <li>These owners are distributed across the country and across industries that almost never appear in a luxury brand&apos;s persona deck: a repo business in Henderson, Nevada; a Milwaukee car-wash operator; a treated-lumber company in Alabama; a boat-cover manufacturer in the Ozarks; a regional distributor of garbage trucks and street sweepers; a Long Island scrap-metal recycler; a forklift manufacturer in New Bremen, Ohio.</li>
        <li>What unites them structurally is that they own pass-through businesses, whose profits flow to the owners&apos; individual returns rather than through a corporate entity.</li>
        <li>Their wealth is largely invisible to the public record. Public-company executives must disclose holdings and compensation; private owners do not, and the authors note that even Forbes&apos; own editors concede the list can miss someone who quietly sold a stake for $250 million and invested well.</li>
      </ul>
      <p>The authors&apos; own line summarizes it: "Owning, it turns out, often beats earning."</p>
      <p>The article goes on to argue about the tax code, and we will leave that debate where it belongs. The audience implication is what concerns us.</p>
      <h2>Why standard affluent segments miss this cohort</h2>
      <p>Most affluent and high-net-worth audience segments available in a DSP, and most of the persona work that luxury brands commission, are assembled from a handful of signal families: modeled household income, ZIP-level home value, occupation and employer data, premium-card transaction panels, and digital behavior such as visits to financial news, luxury retail and travel sites. Each of these has a systematic bias against the everywhere millionaire.</p>
      <p><strong>Income signals under-count business owners.</strong> Pass-through income is lumpy, often deliberately managed, and frequently reported at a level far below the owner&apos;s economic reality. A dealership owner may draw a $400,000 salary from a business generating $12 million in annual profit that is reinvested, distributed irregularly, or held in the entity. Modeled income segments see the salary.</p>
      <p><strong>Occupation and employer signals are built for employees.</strong> The taxonomies that feed B2B and affluent segments code people by title and employer. "President, Tri-County Lumber" is not a signal most models weight the way they weight "Managing Director, Goldman Sachs," though the first is, on the authors&apos; numbers, far more likely to be worth $25 million.</p>
      <p><strong>Geography is over-weighted to a dozen metros.</strong> Affluent targeting leans heavily on ZIP codes in Manhattan, the Bay Area, Greenwich, Beverly Hills, Palm Beach and the like. The everywhere millionaire lives in Henderson, Milwaukee, Tuscaloosa, Springfield, New Bremen. Their ZIP codes look upper-middle-class on a home-value model because a $2.5 million house in Ohio does not register the way a $2.5 million condo in San Francisco does, even though the Ohio owner has far more of his net worth free.</p>
      <p><strong>Digital behavior indexes to the aspirational, not the wealthy.</strong> Visits to luxury retail sites, financial media and travel content skew toward people who research wealth, not people who have it. The owner of a scrap-metal business is not reading Bloomberg at his desk; he is at the yard.</p>
      <p><strong>The wealthiest are the least visible by design.</strong> As the article makes clear, private owners guard their financial details. They are the least likely to appear on prospect lists, the least likely to respond to surveys, and the least likely to have a public profile that a data vendor can scrape.</p>
      <p>The result is that a luxury brand buying a standard "HNW $5M+" segment is buying an audience that over-represents salaried coastal professionals with high incomes and comparatively modest net worth, and under-represents the largest single population of Americans who can actually write the check.</p>
      <h2>What the everywhere millionaire looks like as a buyer</h2>
      <p>From Stillwater Media&apos;s client work in private aviation, luxury automotive and wealth management, where a large share of closed customers turn out to be exactly this profile, some consistent traits are worth planning around:</p>
      <table>
        <thead>
          <tr>
            <th>Trait</th>
            <th>Typical coastal HNW professional</th>
            <th>Everywhere millionaire (private-business owner)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary wealth form</td>
            <td>Liquid securities, deferred comp, home equity</td>
            <td>Operating business equity, commercial real estate, retained earnings</td>
          </tr>
          <tr>
            <td>Reported income vs. economic wealth</td>
            <td>Closely aligned</td>
            <td>Income often understates wealth by 3 to 10x</td>
          </tr>
          <tr>
            <td>Liquidity events</td>
            <td>Bonus cycles, vesting</td>
            <td>Business sale, recapitalization, dividend recaps, PE minority sale</td>
          </tr>
          <tr>
            <td>Home market</td>
            <td>Top-12 metro</td>
            <td>Secondary and tertiary metros, often the market where the business operates</td>
          </tr>
          <tr>
            <td>Media consumption</td>
            <td>Heavy digital, financial news, premium streaming</td>
            <td>Heavy CTV and live sports, talk and business radio, regional news, podcasts during long drives</td>
          </tr>
          <tr>
            <td>Purchase triggers</td>
            <td>Career milestone, relocation</td>
            <td>Business milestone, liquidity event, succession planning, second-generation transition</td>
          </tr>
          <tr>
            <td>Decision style</td>
            <td>Research-heavy, brand-conscious</td>
            <td>Relationship-driven, referral-driven, distrustful of "salesy" creative, values discretion</td>
          </tr>
          <tr>
            <td>Sales-cycle involvement</td>
            <td>Individual, sometimes spouse</td>
            <td>Spouse, CFO or controller, family office if one exists, often a trusted advisor</td>
          </tr>
        </tbody>
      </table>
      <p>Two points from that table deserve emphasis. First, the liquidity-event trigger is the single most valuable moment in this cohort&apos;s life for a luxury or wealth-management brand, and it is visible in data: a change in ownership filed with a Secretary of State, a PE transaction reported in trade press, a Form D filing, a UCC lien release. Second, discretion is a product feature. The article&apos;s subject attends conferences only if nobody announces who he is; creative that celebrates conspicuous status will repel exactly the buyer it is trying to attract.</p>
      <h2>Rebuilding affluent targeting around business ownership</h2>
      <p>The correction is not to abandon wealth-based segmentation but to add a signal family that most plans leave out: private-business ownership itself. Here is how Stillwater Media builds it.</p>
      <h3>Step 1: Start from the business, not the household</h3>
      <p>Business-registration and firmographic data, the same sources the article&apos;s authors used to find their subjects, identify privately held companies by revenue band, employee count, industry, ownership structure and years in operation. Filter for pass-through entities (S-corps, LLCs, partnerships) with estimated revenue above $10 million and at least ten years of operation. That set is roughly 350,000 to 450,000 US companies, and the owners of the ones with revenue above $25 million are the core of the 1.7 million.</p>
      <h3>Step 2: Resolve the owner to a household</h3>
      <p>Identity-resolution partners can match a business&apos;s registered principals to a residential household with 55 to 70 percent accuracy, and to a CTV-addressable household with 40 to 55 percent. That match rate is lower than a consumer file, but the audience quality is far higher: every matched household is a verified private-business owner, not a modeled guess.</p>
      <h3>Step 3: Layer wealth verification, not income</h3>
      <p>Use wealth-screening signals that see assets rather than salary: commercial real estate ownership, aircraft and vessel registrations, multiple property holdings across states, and philanthropic giving records. A household that owns a $15 million revenue business and three commercial properties is HNW regardless of what its modeled income says.</p>
      <h3>Step 4: Add the trigger layer</h3>
      <p>Monitor for liquidity and transition events: ownership changes, PE minority investments, ESOP formations, succession announcements in trade publications. These are the moments the article describes as the point at which the wealth becomes real and spendable. A wealth manager or private aviation brand that reaches the household within 90 days of a recapitalization is talking to a buyer with a fresh eight-figure balance and a new set of problems.</p>
      <h3>Step 5: Rebalance geography</h3>
      <p>Build the plan&apos;s geographic weighting from where the businesses are, not from where affluent ZIP codes are. That means meaningful budget in markets like Nashville, Indianapolis, Columbus, Kansas City, Birmingham, Greenville, Omaha, Boise and Tulsa, and a smaller share in the top-12 metros than a conventional affluent plan would carry. Stillwater Media&apos;s private aviation clients have seen incremental jet-card conversions from this cohort cluster in secondary metros at 1.4 to 1.9 times the rate of the coastal HNW segments, at a materially lower media cost because premium CTV inventory in those DMAs prices 15 to 30 percent below the national average.</p>
      <h2>Channels that reach the everywhere millionaire</h2>
      <p>This buyer is reachable, but through a different channel mix than a coastal professional.</p>
      <p><strong>Premium CTV and live sports.</strong> Business owners in secondary markets are heavy streaming households and disproportionately heavy consumers of live sports on streaming: NFL on Prime Video and Peacock, college football and basketball on ESPN+ and streaming ad tiers, golf and NASCAR. Household-level CTV delivery reaches the owner and the spouse who is part of every decision, and it does so in a living room, not a boardroom. Bought through private marketplace deals with the business-owner audience layered on, planning CPMs of $38 to $58 apply.</p>
      <p><strong>Podcasts and streaming audio.</strong> Business, industry and sports podcasts consumed during long drives between locations index heavily for this profile. Host-read placements in operator-oriented business podcasts and regional sports talk deliver the message with the credibility of a recommendation, which is how this buyer prefers to learn about things.</p>
      <p><strong>DOOH at regional private aviation terminals and business airports.</strong> The article&apos;s authors found their subjects through private-jet and yacht registries. The FBOs at Wilmington, Chattanooga, Fort Wayne and dozens of similar fields see a steady flow of exactly this cohort.</p>
      <p><strong>Contextual programmatic in trade and regional business media.</strong> Industry trade publications, regional business journals and manufacturing and distribution media reach the owner in a professional context at CPMs of $10 to $20, and they are almost entirely absent from conventional luxury plans.</p>
      <p><strong>YouTube Select.</strong> Equipment, agriculture, automotive, construction and business-operations content on YouTube reaches this cohort with extraordinary precision, and YouTube Select lineups allow the buy to stay in brand-safe, high-reach channels.</p>
      <p><strong>What to de-weight.</strong> Financial-news display, luxury-retail retargeting, and metro-focused paid social all over-index to the aspirational coastal segment and can be reduced substantially.</p>
      <h2>Creative for a buyer who does not want to be seen</h2>
      <p>The article&apos;s defining detail about its subjects is discretion, and creative should respect it. Guidance from our brand-lift testing with this cohort:</p>
      <ol>
        <li><strong>Lead with utility and time, not status.</strong> A private aviation ad that shows a founder reaching three plants in one day outperforms one that shows champagne on the tarmac by a wide margin with this audience.</li>
        <li><strong>Show their world.</strong> Creative set in a distribution center, a dealership, a family-owned manufacturing floor signals that the brand knows who it is talking to.</li>
        <li><strong>Respect the advisor.</strong> Wealth-management and insurance creative that acknowledges the owner&apos;s existing CPA and attorney, rather than positioning against them, converts better in this relationship-driven cohort.</li>
        <li><strong>Avoid coastal shorthand.</strong> Skylines, trading floors, and Silicon Valley references code the ad as "not for me."</li>
        <li><strong>Make discretion a feature.</strong> Privacy, unlisted service, no public recognition: these are selling points, not afterthoughts.</li>
      </ol>
      <h2>Measuring a cohort that hides</h2>
      <p>Because this audience is deliberately low-profile, measurement needs to be built for it.</p>
      <ul>
        <li><strong>Clean-room matching of business-owner households to conversions</strong>, with exposed-versus-holdout lift as the primary KPI. Expect match rates of 40 to 55 percent and plan holdout sizes accordingly.</li>
        <li><strong>Geo experiments weighted to secondary metros</strong>, where the cohort is dense and media costs are lower, so the test is cheaper to run and easier to read.</li>
        <li><strong>CRM enrichment at inquiry.</strong> Append business-ownership and firmographic data to every inbound inquiry so the sales team and the media team both learn what share of closed customers are private-business owners. In our experience, brands are routinely surprised to find it is the majority.</li>
        <li><strong>Incremental cost per acquisition by cohort</strong>, so the business-owner segment can be compared directly to the coastal professional segment on the number that matters.</li>
      </ul>
      <h2>What this means for luxury brands right now</h2>
      <p>The largest, wealthiest and least-served audience in American luxury is not in Manhattan or Menlo Park. It is running a treated-lumber company in Alabama, and it has never once been targeted by an ad that understood that. Zidar and Zwick have put the numbers on the table: 1.7 million households with $10 million or more, most of them invisible to the segments luxury brands currently buy.</p>
      <p>Stillwater Media builds business-ownership-based affluent audiences for private aviation, wealth management, luxury real estate and premium automotive brands, delivered through premium CTV, audio, DOOH and programmatic in the markets where these buyers actually live, and measured with clean-room lift and geo holdouts. We accept a limited number of new engagements each quarter. If your affluent targeting was built for the CEO instead of the owner, we should talk. <a href="/apply">Apply to work with Stillwater Media</a>.</p>
      <p><em>Source and further reading: Owen Zidar and Eric Zwick, "Americans Don&apos;t Understand Who&apos;s Rich," The Atlantic, September 14, 2026. <a href="https://www.theatlantic.com/ideas/2026/09/everywhere-millionaires-tax-code/688584/" target="_blank" rel="noopener noreferrer">Read the full article</a>.</em></p>
    </ArticleLayout>
  )
}
