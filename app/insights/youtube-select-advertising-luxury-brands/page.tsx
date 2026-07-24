import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  alternates: {
    canonical: "https://www.stillwatermedia.io/insights/youtube-select-advertising-luxury-brands",
  },
  title: "YouTube Select Advertising for Luxury Brands",
  description:
    "YouTube Select gives luxury brands premium, brand-safe video placements. Learn how Stillwater Media activates YouTube Select to reach affluent audiences at scale.",
  openGraph: {
    title: "YouTube Select Advertising for Luxury Brands | Stillwater Media",
    description:
      "YouTube Select gives luxury brands premium, brand-safe video placements. Learn how Stillwater Media activates YouTube Select to reach affluent audiences at scale.",
    type: "article",
    url: "https://www.stillwatermedia.io/insights/youtube-select-advertising-luxury-brands",
    images: [
      {
        url: "/images/youtube-select-advertising-luxury-brands.png",
        width: 1200,
        height: 630,
        alt: "A luxury brand video advertisement playing before premium YouTube content on a high-definition screen in an affluent home setting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Select Advertising for Luxury Brands | Stillwater Media",
    description:
      "YouTube Select gives luxury brands premium, brand-safe video placements. Learn how Stillwater Media activates YouTube Select to reach affluent audiences at scale.",
    images: ["/images/youtube-select-advertising-luxury-brands.png"],
  },
}

export default function YouTubeSelectAdvertisingLuxuryBrandsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "YouTube Select Advertising for Premium Brands: A Complete Guide",
    description:
      "YouTube Select gives luxury brands curated, brand-safe video inventory alongside premium creators and channels. This guide explains how YouTube Select works, how it compares to standard YouTube advertising, and how Stillwater Media activates it for affluent audience reach.",
    image: {
      "@type": "ImageObject",
      url: "https://www.stillwatermedia.io/images/youtube-select-advertising-luxury-brands.png",
      width: 1200,
      height: 630,
      caption: "Luxury brand video advertisement running in a YouTube Select premium content environment",
    },
    author: {
      "@type": "Organization",
      name: "Stillwater Media",
      url: "https://www.stillwatermedia.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Stillwater Media",
      url: "https://www.stillwatermedia.io",
      logo: {
        "@type": "ImageObject",
        url: "/stillwater-logo.png",
      },
    },
    datePublished: "2026-06-09T08:00:00-05:00",
    dateModified: "2026-06-09T08:00:00-05:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.stillwatermedia.io/insights/youtube-select-advertising-luxury-brands",
    },
    keywords:
      "YouTube Select advertising luxury brands, YouTube Select, YouTube premium advertising, luxury brand video advertising, affluent audience YouTube, ROAS luxury advertising, streaming video luxury brands",
    articleSection: "Streaming Video Advertising",
    wordCount: 2280,
    inLanguage: "en-US",
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, {"@type":"BreadcrumbList","@id":"https://www.stillwatermedia.io/insights/youtube-select-advertising-luxury-brands#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.stillwatermedia.io"},{"@type":"ListItem","position":2,"name":"Insights","item":"https://www.stillwatermedia.io/insights"},{"@type":"ListItem","position":3,"name":"YouTube Select Advertising for Premium Brands: A Complete Guide","item":"https://www.stillwatermedia.io/insights/youtube-select-advertising-luxury-brands"}]}, {"@type":"FAQPage","@id":"https://www.stillwatermedia.io/insights/youtube-select-advertising-luxury-brands#faq","mainEntity":[{"@type":"Question","name":"Q1: What is YouTube Select advertising?","acceptedAnswer":{"@type":"Answer","text":"A1: YouTube Select is Google's premium inventory program that gives advertisers access to the top 5% of YouTube content by viewership, engagement, and quality metrics, organized into curated content lineups by category (Entertainment, Fashion & Beauty, Sports, etc.). Unlike standard YouTube auction buying, YouTube Select operates on a reservation basis with guaranteed delivery, pre-vetted brand-safe content, and access to premium formats including the YouTube Masthead. It is the YouTube equivalent of a premium publisher direct deal — designed for brands that need content context and brand safety guarantees that open-auction YouTube cannot reliably provide."}},{"@type":"Question","name":"Q2: How does YouTube Select differ from standard YouTube advertising?","acceptedAnswer":{"@type":"Answer","text":"A2: Standard YouTube advertising uses an auction model where ads compete in real-time for placement across YouTube's full inventory — 800 million or more videos spanning every content category and quality level. YouTube Select reserves inventory against Google's curated premium lineups at a guaranteed CPM, with content pre-screened for quality and brand suitability. Select typically carries higher CPMs ($20–$45 versus $8–$18 on open auction) but delivers measurably better brand safety, audience quality, and content adjacency. For luxury brands, the higher CPM is routinely justified by the difference in audience composition and placement environment."}},{"@type":"Question","name":"Q3: What audience targeting options are available within YouTube Select?","acceptedAnswer":{"@type":"Answer","text":"A3: YouTube Select campaigns can layer Google's full audience targeting stack on top of lineup selection, including: Custom Intent Audiences (built from recent Google Search query data, targeting users who have actively searched for terms relevant to your product); Affinity Audiences (longer-term interest and behavioral segments like Luxury Travelers or Financial Decision Makers); Customer Match (targeting your own CRM email lists on YouTube); and Similar Audiences (Google's lookalike modeling built from Customer Match seed lists). This combination of premium content context and intent-signal targeting is what differentiates YouTube Select from standard CTV buys, which typically lack the search-data layer."}},{"@type":"Question","name":"Q4: How should luxury brands measure YouTube Select advertising ROI?","acceptedAnswer":{"@type":"Answer","text":"A4: Luxury brands should measure YouTube Select through a combination of Google Brand Lift Studies (which measure incremental lift in brand awareness, ad recall, and purchase intent using a holdout methodology), Search Lift tracking (measuring whether YouTube exposure drives increases in branded search volume), and incrementality testing to isolate YouTube's true contribution to downstream conversions. Standard video metrics — views, VTR, CPV — are necessary but insufficient for luxury advertisers with long sales cycles. Last-click attribution consistently undercounts YouTube's role in high-consideration purchase journeys; lift-based measurement frameworks are required to capture the full channel contribution."}},{"@type":"Question","name":"Q5: Is YouTube Select appropriate for luxury brands with smaller budgets?","acceptedAnswer":{"@type":"Answer","text":"A5: YouTube Select typically requires minimum spends of $25,000–$100,000 per lineup per quarter, depending on the specific lineup and market. For luxury brands below these thresholds, the most practical path is to run standard YouTube auction campaigns using TrueView In-Stream with tightly curated Custom Intent and Affinity audience targeting — which replicates some of the audience quality advantages of Select without the inventory guarantee. As budgets scale, transitioning to Select lineups dramatically improves brand safety and content adjacency. For the luxury verticals Stillwater Media serves — private aviation, wealth management, private clubs — the Select minimums are typically within range and represent a worthwhile investment in placement quality."}}]}],
  }

  return (
    <ArticleLayout
      title="YouTube Select Advertising for Premium Brands: A Complete Guide"
      author="Stillwater Media"
      date="June 9, 2026"
      readingTime="9 min"
      category="Streaming Video"
      image="/images/youtube-select-advertising-luxury-brands.png"
      imageAlt="Stillwater Media YouTube Select advertising — affluent consumer watching premium video content in a luxury home environment representing high-value digital video reach"
      imageCaption="YouTube Select advertising gives luxury brands something standard YouTube buying never delivers: curated, brand-safe video inventory alongside the content your best customers are already watching."
      schemaMarkup={schemaMarkup}
    >
      <p>
        YouTube Select advertising for luxury brands solves a problem that standard YouTube buying creates: you get the
        scale of 2+ billion monthly users, but without any meaningful control over the quality, context, or audience
        calibration of where your ads run. For a private aviation brand, a wealth management firm, or a luxury
        hospitality company, "2 billion users" is not the metric that matters. What matters is whether your video
        creative is running in front of the right 50,000 — and whether it's appearing in an editorial environment that
        doesn't contradict everything your brand stands for.
      </p>

      <p>
        YouTube Select is Google's answer to that tension. This guide explains exactly what it is, how it works, and how
        Stillwater Media uses it as part of a premium video strategy for brands where impression quality is
        non-negotiable.
      </p>

      <hr className="my-8" />

      <h2>What Is YouTube Select?</h2>

      <p>
        YouTube Select is a curated inventory program that gives advertisers access to the top 5% of YouTube content by
        viewership, engagement, and audience quality — across specific content lineups defined by Google's media team.
        Rather than bidding across YouTube's full open inventory (which spans everything from billion-view music videos
        to a teenager's gaming commentary to misinformation), YouTube Select concentrates your spend against premium,
        high-viewership content in pre-defined categories.
      </p>

      <p>
        Google positions YouTube Select as YouTube's equivalent of network TV upfront buys: premium inventory,
        guaranteed delivery, with audience guarantees that open auction cannot provide. The comparison is apt — with one
        critical addition. YouTube Select carries digital targeting precision that linear TV cannot match, including
        intent signals, search history correlation, and connected TV device targeting.
      </p>

      <p>
        YouTube Select lineups are organized around content verticals: Sports, Entertainment, Fashion &amp; Beauty, Food
        &amp; Cooking, Gaming, Music, Technology, and others. For luxury brands, the most relevant are typically
        Entertainment, Fashion &amp; Beauty, and in some cases Technology (which skews toward an affluent, early-adopter
        demographic). Custom lineup deals can be negotiated directly with Google's sales team for brands with sufficient
        budgets.
      </p>

      <h3>YouTube Select vs. Standard YouTube Buying</h3>

      <p>The distinction matters operationally, and most brands don't fully understand it:</p>

      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Standard YouTube (Auction)</th>
            <th>YouTube Select</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inventory quality</td>
            <td>Full YouTube — 800M+ videos</td>
            <td>Top 5% by viewership and quality score</td>
          </tr>
          <tr>
            <td>Brand safety controls</td>
            <td>Keyword blocklists, category exclusions</td>
            <td>Curated lineup, pre-vetted content</td>
          </tr>
          <tr>
            <td>Content context</td>
            <td>Algorithmic placement</td>
            <td>Defined content category lineups</td>
          </tr>
          <tr>
            <td>Pricing model</td>
            <td>Auction (CPM/CPV)</td>
            <td>Guaranteed CPM, reservation-based</td>
          </tr>
          <tr>
            <td>Audience targeting</td>
            <td>Full Google audience stack</td>
            <td>Google audience stack + lineup-specific context</td>
          </tr>
          <tr>
            <td>Delivery guarantee</td>
            <td>No guarantee</td>
            <td>Guaranteed impression delivery</td>
          </tr>
          <tr>
            <td>Minimum budget</td>
            <td>No minimum</td>
            <td>Typically $25,000–$100,000+ per lineup per quarter</td>
          </tr>
          <tr>
            <td>Ad format availability</td>
            <td>All formats</td>
            <td>TrueView, non-skippable 15s, Masthead</td>
          </tr>
          <tr>
            <td>Measurement</td>
            <td>Standard Google Ads metrics</td>
            <td>Google Brand Lift + third-party measurement available</td>
          </tr>
        </tbody>
      </table>

      <p>
        The tradeoff is price and commitment. YouTube Select carries higher CPMs — typically $20–$45 CPM for premium
        lineups versus $8–$18 CPM on open auction — and requires upfront commitments. For luxury brands with high
        customer LTV, these tradeoffs favor Select overwhelmingly.
      </p>

      <hr className="my-8" />

      <h2>Why YouTube Is Underused by Luxury Brands</h2>

      <p>
        Most luxury brands that run digital video are spending the majority of their video budget on Meta (Facebook and
        Instagram video) and programmatic pre-roll. YouTube — specifically YouTube Select — is systematically
        underutilized. The reasons are mostly organizational rather than strategic:
      </p>

      <p>
        <strong>Perception as a mass-market channel.</strong> YouTube's cultural association with user-generated
        content, viral videos, and a broad demographic makes it feel inconsistent with luxury brand positioning. This
        perception is outdated. YouTube's connected TV viewership — living room, large-screen viewing — now accounts for
        over 45% of total watch time (Google, 2024), and connected TV viewers skew significantly older and more affluent
        than mobile-first YouTube viewers.
      </p>

      <p>
        <strong>Preference for familiar platforms.</strong> Media buyers default to Meta because the self-serve
        infrastructure is familiar and results are easy to report. YouTube Select requires a managed buy — typically
        through Google's sales team or a certified partner — which adds a layer of process friction that agencies with
        volume-based incentives tend to avoid.
      </p>

      <p>
        <strong>Misunderstanding of the audience.</strong> Affluent consumers aged 35–64 — the core luxury buyer
        demographic — over-index significantly on YouTube compared to the platform's full user base. They are watching
        long-form documentary content, financial commentary, travel content, automotive reviews, and cooking shows.
        That is an audience, a mindset, and a content context that is highly compatible with luxury brand messaging.
      </p>

      <hr className="my-8" />

      <h2>The YouTube Select Lineup Architecture for Luxury Brands</h2>

      <p>
        Google organizes YouTube Select lineups hierarchically. Understanding the structure helps media planners build
        the right strategy:
      </p>

      <h3>YouTube Select Lineups (Curated Inventory Packages)</h3>

      <p>
        These are Google's pre-packaged premium inventory collections, organized by content category. Each lineup
        guarantees delivery against the top-performing channels in that category, with content quality standards
        enforced by Google's review team.
      </p>

      <p>For luxury brands, the most valuable lineups are typically:</p>

      <ul>
        <li>
          <strong>Entertainment Select</strong>: Long-form premium content, documentary-style video, cultural
          commentary
        </li>
        <li>
          <strong>Fashion &amp; Beauty Select</strong>: Reaches a high-income, style-conscious audience; relevant for
          luxury fashion, beauty, jewelry, and lifestyle brands
        </li>
        <li>
          <strong>News Select</strong>: Relevant for financial services and wealth management brands seeking a
          sophisticated, current-events engaged audience
        </li>
      </ul>

      <h3>YouTube Masthead</h3>

      <p>
        The Masthead is a takeover placement at the top of the YouTube homepage — the first thing every signed-in
        YouTube user sees when they open the app or website. It's sold on a 24-hour CPD (cost-per-day) basis or on a CPM
        basis for targeted versions, and it delivers massive reach within a single day.
      </p>

      <p>
        For luxury brands, the Masthead is most effective for event-driven campaigns: product launches, seasonal
        campaigns, or awareness initiatives that benefit from a concentrated burst of high-quality reach. It's not a
        performance channel — it's a brand statement channel. The audience can be narrowed using Google's demographic
        and interest targeting even within the Masthead format.
      </p>

      <h3>YouTube Sponsorships (Direct Creator Deals via Google)</h3>

      <p>
        Some YouTube Select engagements include the option to sponsor specific channels or creators within the premium
        lineup, giving the brand association with a specific content identity rather than a category. For brands where
        creator alignment matters — luxury automotive brands aligning with premium auto reviewers, for example — this
        can significantly amplify brand suitability beyond what standard lineup access provides.
      </p>

      <hr className="my-8" />

      <h2>YouTube Select Ad Formats: What Works for Luxury</h2>

      <p>
        Not all YouTube ad formats perform equally for luxury brand objectives. The format choice should be driven by
        where the audience is in the consideration cycle and what action the brand needs them to take.
      </p>

      <h3>Non-Skippable 15-Second Pre-Roll</h3>

      <p>
        The most brand-controlled format on YouTube. The viewer cannot skip; the ad plays in full. This format is best
        for brands with high-quality :15 creative — a cinematic shot, a single powerful message, a visual statement. For
        luxury brands with strong creative assets, this is frequently the highest-impact YouTube Select format because
        it demands attention in a way that skippable formats do not.
      </p>

      <p>
        <strong>Benchmark</strong>: Non-skippable pre-roll on YouTube Select typically delivers 100% view-through rates
        by definition, with video completion rates contributing to brand lift studies showing 5–12% aided recall lift
        depending on creative quality.
      </p>

      <h3>TrueView In-Stream (Skippable Pre-Roll)</h3>

      <p>
        The standard YouTube pre-roll format. Viewers can skip after 5 seconds; you pay only when the viewer watches 30+
        seconds or interacts. For luxury brands with longer creative narratives — 60 seconds, 90 seconds, or more —
        TrueView allows the interested viewer to self-select into the full story while non-engaged viewers opt out
        without cost.
      </p>

      <p>
        The first 5 seconds are critical for luxury brands in TrueView. The opening frames need to signal the brand's
        world — visual quality, music, tone — compellingly enough that a qualified viewer chooses to stay. Brands that
        front-load a product shot or a logo lose a high percentage of viewers who might have engaged with a story-led
        opening.
      </p>

      <p>
        <strong>Benchmark</strong>: Well-optimized luxury TrueView campaigns typically see view-through rates of 35–55%.
        View-through rates below 25% indicate either creative or audience targeting issues.
      </p>

      <h3>Bumpers (6-Second Non-Skippable)</h3>

      <p>
        Bumpers are designed for frequency and brand reinforcement, not storytelling. They work best as part of a
        creative sequencing strategy — reinforcing a message the audience has already seen in a longer format. For
        luxury brands running YouTube Select alongside CTV or longer-form pre-roll, bumpers can be highly efficient as a
        frequency layer at low CPMs.
      </p>

      <hr className="my-8" />

      <h2>Audience Targeting Strategy Within YouTube Select</h2>

      <p>
        YouTube Select's biggest advantage over connected TV and standard programmatic video is the depth of Google's
        audience intelligence. Within Select lineups, the following targeting layers can be activated:
      </p>

      <p>
        <strong>Custom Intent Audiences</strong>: Built from Google Search query data. If a user has searched for
        "private jet charter New York" or "luxury ski resort Aspen" in the past 30 days, Google can target them with
        video ads based on that demonstrated intent. For high-consideration luxury brands with long sales cycles, this
        is one of the most valuable targeting tools in digital advertising.
      </p>

      <p>
        <strong>Affinity Audiences</strong>: Longer-term interest-based segments. Google's "Luxury Travelers," "Frequent
        Flyers," "High-End Automobile Enthusiasts," and "Financial Decision Makers" affinity segments are built from
        sustained behavioral signals, not just recent search queries. They tend to be larger and less precise than
        intent audiences but are useful for upper-funnel awareness objectives.
      </p>

      <p>
        <strong>Customer Match</strong>: Upload your CRM data — email addresses of past customers, high-value prospects,
        or lapsed clients — and target them specifically within YouTube Select. For luxury brands with a defined
        prospect list, this is a highly efficient retargeting channel.
      </p>

      <p>
        <strong>Similar Audiences (Google's Equivalent of Lookalike Modeling)</strong>: Built from Customer Match seed
        audiences. Google identifies YouTube users whose behavioral profiles resemble your existing customers and
        extends reach to those most likely to convert. For luxury brands with small but high-value customer bases,
        Similar Audiences is how you scale beyond direct retargeting without sacrificing audience quality.
      </p>

      <hr className="my-8" />

      <h2>Measuring YouTube Select ROI for Luxury Brands</h2>

      <p>
        Standard YouTube metrics — views, VTR, CPV — are necessary but insufficient for luxury advertisers. The
        measurement framework we use for YouTube Select campaigns includes:
      </p>

      <p>
        <strong>Google Brand Lift Studies</strong>: Google can measure incremental lift in brand awareness, ad recall,
        brand consideration, and purchase intent among people exposed to YouTube Select campaigns versus a holdout
        group. This is the most direct measure of YouTube's contribution to brand health metrics, and it's available at
        no additional cost for campaigns that meet minimum spend thresholds.
      </p>

      <p>
        <strong>Search Lift</strong>: YouTube exposure drives measurable increases in branded search volume. Google
        measures this as a brand lift component — tracking whether users who saw your YouTube Select ad are more likely
        to search for your brand terms on Google.com in the days following exposure. For luxury brands with long
        consideration cycles, this is a leading indicator of downstream purchase intent.
      </p>

      <p>
        <strong>Incrementality Testing</strong>: For brands running YouTube Select alongside other digital channels, we
        run holdout tests to isolate YouTube's incremental contribution to conversions — distinguishing conversions
        YouTube actually influenced from conversions that would have happened anyway. Standard last-click attribution
        dramatically undercounts YouTube's contribution to luxury brand performance because it ignores the consideration
        phase entirely.
      </p>

      <p>
        <strong>Connected TV Reach Measurement</strong>: YouTube CTV viewing can be measured through cross-device graphs
        to understand the total household reach of a YouTube Select campaign and to deduplicate reach against other CTV
        buys (Disney+, Hulu, etc.).
      </p>

      <hr className="my-8" />

      <h2>What Luxury Brands Typically Get Wrong With YouTube</h2>

      <p>
        <strong>Using Standard Auction Buying Instead of Select</strong>: Running luxury creative on open-auction
        YouTube in order to minimize CPMs is a false economy. The inventory quality, adjacency environment, and audience
        composition of open auction YouTube are categorically different from YouTube Select. Lower CPMs with worse
        audiences and worse adjacency produce worse outcomes — they just look more efficient in the platform dashboard.
      </p>

      <p>
        <strong>Applying Mass-Market Creative to a Premium Channel</strong>: Luxury YouTube campaigns frequently
        underperform not because of the channel but because of the creative. YouTube is a lean-in medium — viewers are
        there for content they chose. Luxury creative that was designed for linear TV's passive viewing environment
        often fails to earn attention in the first 5 seconds. The creative brief for YouTube Select needs to be written
        specifically for the format.
      </p>

      <p>
        <strong>Treating YouTube as a Separate Channel Instead of Part of a Video Ecosystem</strong>: YouTube Select
        performs best as a component of a connected video strategy — working alongside CTV buys on premium streaming
        networks, programmatic pre-roll, and social video. Brands that run YouTube Select in isolation and measure it
        independently miss the compounding effect of coordinated video exposure across the consumer's day.
      </p>

      <p>
        <strong>Ignoring Connected TV Inventory Within YouTube</strong>: The fastest-growing YouTube Select opportunity
        is CTV — living-room, large-screen YouTube viewing. Advertisers who target YouTube Select but de-prioritize CTV
        placement within the buy are under-indexing against the highest-quality environment within the channel.
      </p>

      <hr className="my-8" />

      <h2>The Stillwater Media YouTube Select Playbook</h2>

      <p>
        For luxury clients where video is part of the media strategy, our YouTube Select approach follows a consistent
        framework:
      </p>

      <ul>
        <li>
          <strong>Audience Architecture First</strong>: We identify which Google audiences align with the client's ICP —
          custom intent, affinity, Customer Match, or Similar Audiences — before selecting content lineups.
        </li>
        <li>
          <strong>Lineup Selection Based on Audience, Not Category Intuition</strong>: We use Google's audience overlap
          data to identify which Select lineups over-index against the client's target audience, rather than selecting
          lineups based on category name alone.
        </li>
        <li>
          <strong>Creative Consultation</strong>: For YouTube Select buys, we provide creative guidance — specifically
          the first-5-second hook, :15 and :30 cut specifications, and CTV format requirements — to ensure the creative
          is built for the channel's mechanics.
        </li>
        <li>
          <strong>Measurement Infrastructure Before Launch</strong>: Brand Lift studies, Search Lift tracking, and
          incrementality holdout groups are configured before campaign launch. Measuring after the fact always produces
          worse data quality.
        </li>
        <li>
          <strong>Cross-Channel Integration</strong>: YouTube Select is integrated with the client's CTV buys and
          programmatic video for deduplication, frequency management, and sequencing.
        </li>
        <li>
          <strong>Quarterly Upfront Negotiations</strong>: We negotiate YouTube Select commitments on a quarterly
          upfront basis, which unlocks better CPMs, preferred lineup access, and Masthead priority for high-impact
          moments.
        </li>
      </ul>

      <hr className="my-8" />

      <h2>Ready to Build a YouTube Select Strategy for Your Brand?</h2>

      <p>
        YouTube Select advertising for luxury brands is one of the most underutilized premium video channels available —
        and the brands that move to it before their category competitors get there will hold a meaningful advantage in
        both reach quality and CPM efficiency.
      </p>

      <p>
        Stillwater Media builds and manages YouTube Select campaigns as part of integrated premium video strategies for
        luxury and high-consideration brands. If digital video is part of your media mix and you're not fully activating
        YouTube Select, that's a gap worth closing.
      </p>

      <hr className="my-8" />

      <p className="text-sm italic text-foreground/60">
        Ready to build a premium video strategy that reaches your best customers?{" "}
        <a href="/apply" className="underline hover:no-underline text-foreground">
          Apply to work with Stillwater Media
        </a>
      </p>
    </ArticleLayout>
  )
}
