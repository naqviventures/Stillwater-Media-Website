import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  alternates: {
    canonical: "https://www.stillwatermedia.io/insights/what-is-ctv-advertising-how-it-works",
  },
  title: "What Is CTV Advertising and How Does It Work? | Stillwater",
  description:
    "What is CTV advertising and how does it work? A plain-English guide to connected TV ads, how they are bought and targeted, formats, costs, and measurement.",
  openGraph: {
    title: "What Is CTV Advertising and How Does It Work? A Plain-English Guide",
    description:
      "A strategist's guide to connected TV advertising — what CTV is, how connected TV ads are bought and targeted, the formats and platforms involved, what it costs, how it differs from linear TV, and how brands measure it.",
    type: "article",
    url: "https://www.stillwatermedia.io/insights/what-is-ctv-advertising-how-it-works",
    images: [
      {
        url: "/images/what-is-ctv-advertising-how-it-works.png",
        width: 1200,
        height: 630,
        alt: "Stillwater Media guide to what CTV advertising is and how it works showing a large premium television glowing in a refined living room at dusk representing connected TV advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is CTV Advertising and How Does It Work?",
    description:
      "CTV advertising delivers TV commercials through internet-connected streaming, bought and targeted like digital. Here is exactly how connected TV advertising works.",
    images: ["/images/what-is-ctv-advertising-how-it-works.png"],
  },
}

export default function WhatIsCtvAdvertisingHowItWorksPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is CTV Advertising and How Does It Work? A Plain-English Guide",
    description:
      "A strategist's guide to connected TV advertising — what CTV advertising is, how connected TV ads are bought, targeted, and served, the platforms and formats involved, how CTV differs from linear TV and OTT, what it costs, common mistakes, and how brands measure CTV beyond the click.",
    image: {
      "@type": "ImageObject",
      url: "https://www.stillwatermedia.io/images/what-is-ctv-advertising-how-it-works.png",
      width: 1200,
      height: 630,
      caption: "What CTV advertising is and how it works — Stillwater Media",
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
    datePublished: "2026-08-02T08:00:00-05:00",
    dateModified: "2026-08-02T08:00:00-05:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.stillwatermedia.io/insights/what-is-ctv-advertising-how-it-works",
    },
    keywords:
      "what is CTV advertising and how does it work, connected TV advertising, what is CTV advertising, how does CTV advertising work, CTV vs linear TV advertising, premium CTV advertising agency, streaming TV advertising, OTT advertising luxury brands, programmatic CTV advertising, CTV advertising for high-net-worth consumers",
    articleSection: "CTV & Streaming",
    wordCount: 2180,
    inLanguage: "en-US",
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema,
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.stillwatermedia.io/insights/what-is-ctv-advertising-how-it-works#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stillwatermedia.io" },
          { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.stillwatermedia.io/insights" },
          {
            "@type": "ListItem",
            position: 3,
            name: "What Is CTV Advertising and How Does It Work? A Plain-English Guide",
            item: "https://www.stillwatermedia.io/insights/what-is-ctv-advertising-how-it-works",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.stillwatermedia.io/insights/what-is-ctv-advertising-how-it-works#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is CTV advertising?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "CTV (connected TV) advertising is the practice of delivering television commercials through internet-connected devices that stream video — smart TVs, Roku, Amazon Fire TV, Apple TV, and consoles — and buying them with the targeting, flexibility, and measurement of digital rather than the blunt demographics of broadcast. The ad travels over the internet to a specific device, so it can be targeted and measured for each household.",
            },
          },
          {
            "@type": "Question",
            name: "How does CTV advertising work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The advertiser defines a target audience, selects premium streaming inventory through private marketplace or direct deals, and — when a matching household starts or pauses a stream — wins the impression through a real-time programmatic auction or a negotiated deal. The winning ad is stitched into the stream and delivered full-screen to that specific device, then impressions, completions, and downstream outcomes are measured back to the exposed households.",
            },
          },
          {
            "@type": "Question",
            name: "How is CTV different from OTT and linear TV?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "CTV describes the device — an internet-connected television. OTT describes the delivery method — video delivered over the top of cable, on any device including phones and laptops. A CTV ad is always OTT, but an OTT ad is not always CTV. Linear TV is the traditional broadcast and cable schedule bought by network and daypart against broad demographics, without household-level targeting or precise frequency control.",
            },
          },
          {
            "@type": "Question",
            name: "What does CTV advertising cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Premium connected TV inventory typically runs $25–$50 CPM, with the most sought-after supply reaching $50 or higher. Minimum budgets for a serious CTV program generally start in the $10,000–$25,000 per month range. Linear can look cheaper on a raw CPM basis, but that buys waste; the honest metric is cost per relevant, completed view.",
            },
          },
          {
            "@type": "Question",
            name: "How is CTV advertising measured?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Because CTV is a lean-back, non-click channel, it is measured with view-through analysis, brand lift studies, incrementality and holdout testing, and completion and quality metrics rather than last-click clicks. For a high-consideration brand, the most important signal is often the rise in qualified inquiries and branded search in the weeks after exposure.",
            },
          },
        ],
      },
    ],
  }

  return (
    <ArticleLayout
      title="What Is CTV Advertising and How Does It Work? A Plain-English Guide"
      author="Stillwater Media"
      date="August 2, 2026"
      readingTime="12 min"
      category="CTV & Streaming"
      image="/images/what-is-ctv-advertising-how-it-works.png"
      imageAlt="Stillwater Media guide illustration explaining what CTV advertising is and how it works showing a large premium connected television glowing softly in a refined living room at dusk representing connected TV advertising for affluent households"
      imageCaption="CTV advertising delivers a full-screen television commercial through an internet-connected streaming device — bought, targeted, and measured with the precision of digital."
      schemaMarkup={schemaMarkup}
    >
      <p>
        CTV advertising — short for connected TV advertising — is the practice of delivering television commercials
        through internet-connected devices that stream video, such as smart TVs, Roku, Amazon Fire TV, Apple TV, and
        gaming consoles, and buying those commercials with the targeting, flexibility, and measurement of digital rather
        than the blunt demographics of broadcast. In plain terms, it is what happens when the thirty-second TV spot leaves
        the cable box and moves onto the big screen through apps like Disney+, Netflix, Hulu, Peacock, and Prime Video —
        and, in the move, becomes addressable to a specific household rather than sprayed at everyone watching a given
        channel at a given time. That single shift, from &quot;who happens to be watching this program&quot; to &quot;this
        specific household we chose,&quot; is the reason CTV advertising has become the fastest-growing premium video
        channel and the default answer to how modern brands reach audiences who no longer watch traditional TV.
      </p>

      <p>
        At Stillwater Media we build CTV programs for luxury and high-consideration brands, and the question we get most
        often from sophisticated marketers new to the channel is deceptively simple: what is CTV advertising, and how does
        it actually work under the hood? The concept is easy to state and easy to misunderstand, because CTV borrows
        vocabulary from both traditional television and digital advertising while behaving like neither. This guide answers
        the question completely — what CTV is, how a connected TV ad is bought and served, how it is targeted, what it
        costs, how it differs from linear TV and OTT, the mistakes that waste budget, and how the channel is measured.
      </p>

      <hr className="my-8" />

      <h2>What CTV Advertising Actually Is</h2>

      <p>
        Connected TV refers to any television set connected to the internet and capable of streaming video — either a
        smart TV with built-in apps or a conventional TV paired with a streaming device or console. CTV advertising is the
        video advertising served inside the streaming content on those devices. The defining characteristic is not the
        screen size but the delivery path: the ad travels over the internet to a specific device, which means it can be
        decided, targeted, and measured for each individual household rather than sold in bulk against a broadcast
        schedule.
      </p>

      <p>
        It helps to separate three terms that are often used interchangeably and shouldn&apos;t be. <strong>CTV</strong>{" "}
        describes the device — the internet-connected television. <strong>OTT</strong>, or over-the-top, describes the
        delivery method — video content delivered &quot;over the top&quot; of traditional cable and satellite, whether
        watched on a TV, laptop, tablet, or phone. <strong>Streaming</strong> is the everyday word for the experience. A
        CTV ad is always OTT, but an OTT ad is not always CTV; an ad shown in a streaming app on a phone is OTT but not
        connected TV. For a premium brand, the distinction matters because the CTV impression — full screen, in the living
        room, with the sound on and no ad-skipping — is the highest-attention video impression in the digital ecosystem.
      </p>

      <hr className="my-8" />

      <h2>How CTV Advertising Works, Step by Step</h2>

      <p>
        The mechanics of a connected TV ad look nothing like buying a cable spot and everything like buying digital video.
        Here is the full path, from budget to living room.
      </p>

      <ol>
        <li>
          <strong>Audience definition.</strong> Rather than choosing a network and daypart, the advertiser defines a
          target audience — for a luxury brand, typically an affluent household segment built from first-party data,
          deterministic wealth signals, and intent data.
        </li>
        <li>
          <strong>Inventory selection.</strong> The buyer chooses where the ads can run: specific streaming apps and
          publishers, bought through private marketplace deals or publisher-direct deals for premium supply, or across a
          curated set of ad-supported streaming services.
        </li>
        <li>
          <strong>The bid or deal.</strong> When a matching household starts or pauses a stream, an ad opportunity is
          created. Through programmatic CTV, that opportunity is auctioned in milliseconds; through a direct deal, it is
          fulfilled at a negotiated price.
        </li>
        <li>
          <strong>Ad decisioning and delivery.</strong> The winning ad is stitched into the stream and delivered to that
          specific device, so two households watching the same show can see two entirely different commercials — the
          essence of addressable television.
        </li>
        <li>
          <strong>Playback.</strong> The commercial plays full screen, typically as a non-skippable fifteen- or
          thirty-second spot, in a lean-back environment with the sound on.
        </li>
        <li>
          <strong>Measurement.</strong> The impression, completion, and downstream signals — site visits, branded search,
          inquiries, conversions — are captured and tied back to the exposed households, closing a measurement loop that
          linear TV never had.
        </li>
      </ol>

      <p>
        The engine behind steps three and four is the same programmatic infrastructure that powers digital display and
        video: demand-side platforms, supply-side platforms, and real-time decisioning. The difference is the canvas.
        Instead of a banner on a webpage, the buyer is placing a full-screen television commercial in front of a chosen
        household.
      </p>

      <hr className="my-8" />

      <h2>How CTV Targeting Works</h2>

      <p>
        Targeting is where connected TV advertising decisively separates itself from broadcast. Linear TV buys an
        approximation — &quot;adults 25–54 watching this network&quot; — and hopes the right people are in the room. CTV
        buys the household directly. The most valuable targeting layers for a premium brand are:
      </p>

      <ul>
        <li>
          <strong>First-party data.</strong> A brand&apos;s own customer and prospect lists, securely onboarded and matched
          to streaming households, so the campaign reaches known audiences and their close analogues.
        </li>
        <li>
          <strong>Deterministic wealth and demographic signals.</strong> Compliant data partnerships that identify affluent
          and high-net-worth households, allowing a brand to concentrate spend where customer lifetime value is highest.
        </li>
        <li>
          <strong>Behavioral and intent signals.</strong> Households showing in-market behavior for a relevant
          high-consideration category — private aviation, luxury real estate, wealth management — layered on top of the
          affluence filter.
        </li>
        <li>
          <strong>Geographic and contextual precision.</strong> Down to the ZIP-code or DMA level, aligned to specific
          premium content environments.
        </li>
        <li>
          <strong>Lookalike expansion.</strong> Modeled audiences that resemble a brand&apos;s best existing customers, used
          to scale reach without diluting quality.
        </li>
      </ul>

      <p>
        Because these layers combine, a luxury advertiser can do something impossible on cable: buy the intersection of
        &quot;affluent household,&quot; &quot;in-market for our category,&quot; and &quot;resembles our best customers&quot;
        — and then cap the number of times each household sees the ad. That precision is why CTV advertising for
        high-net-worth consumers has become a cornerstone of premium media plans.
      </p>

      <hr className="my-8" />

      <h2>CTV vs. Linear TV vs. OTT: How They Compare</h2>

      <p>
        The fastest way to understand CTV advertising is to place it beside the models it is replacing and the term it is
        confused with.
      </p>

      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Linear TV</th>
            <th>OTT (broad)</th>
            <th>CTV Advertising</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Delivery</td>
            <td>Broadcast/cable schedule</td>
            <td>Internet, any device</td>
            <td>Internet, television screen</td>
          </tr>
          <tr>
            <td>Targeting</td>
            <td>Network + daypart, demo estimates</td>
            <td>Digital audience targeting</td>
            <td>Household-level, addressable</td>
          </tr>
          <tr>
            <td>Screen</td>
            <td>Living-room TV</td>
            <td>Phone, tablet, laptop, or TV</td>
            <td>Living-room TV, full screen</td>
          </tr>
          <tr>
            <td>Buying</td>
            <td>Upfronts, insertion orders</td>
            <td>Programmatic + direct</td>
            <td>Programmatic + PMP/direct deals</td>
          </tr>
          <tr>
            <td>Skippable</td>
            <td>No</td>
            <td>Sometimes</td>
            <td>Usually non-skippable</td>
          </tr>
          <tr>
            <td>Measurement</td>
            <td>Panel-based ratings</td>
            <td>Digital, click-oriented</td>
            <td>Impression + outcome-based</td>
          </tr>
          <tr>
            <td>Frequency control</td>
            <td>Weak across buys</td>
            <td>Moderate</td>
            <td>Precise, cross-publisher</td>
          </tr>
          <tr>
            <td>Fit for luxury</td>
            <td>Broad, wasteful</td>
            <td>Variable</td>
            <td>Excellent</td>
          </tr>
        </tbody>
      </table>

      <p>
        The row that matters most for a high-consideration brand is targeting. Linear TV&apos;s waste — paying to reach
        millions of households that will never buy a $90,000 watch or charter a jet — is exactly what CTV eliminates by
        buying the household rather than the program. The second most important row is frequency control: CTV lets a brand
        cap exposure across every app and publisher in the plan, so the same affluent household is not bombarded.
      </p>

      <hr className="my-8" />

      <h2>What CTV Advertising Costs</h2>

      <p>
        CTV carries a premium CPM (cost per thousand impressions), and understanding why is essential to budgeting the
        channel honestly. Premium connected TV inventory typically runs <strong>$25–$50 CPM</strong>, with the most
        sought-after supply — major streaming platforms, live sports, and tightly targeted affluent audiences — reaching{" "}
        <strong>$50 or higher</strong>. Broader, less-curated ad-supported streaming inventory can be found at lower rates,
        but for a luxury brand the premium tiers are usually the right buy. By comparison, prime-time linear TV can look
        cheaper on a raw CPM basis, but that comparison is misleading: linear&apos;s low CPM buys enormous waste, while
        CTV&apos;s higher CPM buys near-total relevance. The honest metric is <strong>cost per relevant, completed view</strong>
        , where CTV frequently outperforms linear despite the higher sticker price. Minimum budgets for a serious CTV
        program generally start in the <strong>$10,000–$25,000 per month</strong> range.
      </p>

      <hr className="my-8" />

      <h2>Common Mistakes in CTV Advertising</h2>

      <p>Three mistakes account for most disappointing CTV results, and each is avoidable.</p>

      <ul>
        <li>
          <strong>Treating CTV like linear.</strong> Buying broad reach and ignoring the channel&apos;s targeting and
          frequency controls surrenders the entire advantage — a brand ends up paying premium CPMs for broadcast-style
          waste.
        </li>
        <li>
          <strong>Chasing the last click.</strong> CTV is a lean-back screen; households rarely click a TV. Judging it by
          direct-response clicks makes a genuinely effective channel look broken and starves it of budget.
        </li>
        <li>
          <strong>Ignoring supply quality.</strong> Not all CTV inventory is premium. Some cheap supply is device-graph
          guesswork, made-for-advertising channels, or non-TV screens mislabeled as CTV. Premium programs buy through
          private marketplace deals and publisher-direct deals with brand safety architected in.
        </li>
      </ul>

      <hr className="my-8" />

      <h2>How to Measure CTV Advertising</h2>

      <p>
        Because a connected TV ad is a lean-back, full-screen experience, it does its work on attention and consideration,
        not immediate clicks — so measuring it by last-click attribution guarantees it will look weaker than it is. Serious
        CTV measurement uses four methods in combination. <strong>View-through analysis</strong> connects households exposed
        to the CTV ad with subsequent site visits, branded searches, and conversions, capturing influence that never
        produced a click. <strong>Brand lift studies</strong> survey matched exposed and unexposed audiences to isolate
        shifts in awareness, consideration, and favorability. <strong>Incrementality and holdout testing</strong> withholds
        CTV from a matched control group or geography and measures the true causal lift in qualified inquiries and sales.
        And <strong>completion and quality metrics</strong> — video completion rate, verified household reach, frequency
        distribution, and invalid-traffic rates — confirm the impressions were genuine, full, and delivered to the right
        screens.
      </p>

      <hr className="my-8" />

      <h2>Why CTV Advertising Matters for Premium Brands</h2>

      <p>
        The strategic case for CTV is simple: the affluent audiences luxury brands most want to reach have largely
        abandoned traditional television, and CTV is where their attention went. Connected TV delivers the emotional power
        and full-screen impact of a television commercial — the medium best suited to building a premium brand — while
        adding the household-level targeting, frequency control, and measurement of digital. It is the rare channel that is
        simultaneously a brand-building medium and a measurable performance one, which is precisely what a high-consideration
        brand with long sales cycles and high lifetime value needs. Understood correctly, CTV advertising is not
        &quot;digital video&quot; and it is not &quot;TV on the internet&quot;; it is addressable television — the first
        version of TV a brand can aim, cap, and prove.
      </p>

      <hr className="my-8" />

      <h2>Work With Stillwater Media</h2>

      <p>
        Stillwater Media builds premium CTV advertising programs for luxury and high-consideration brands. We buy premium
        streaming inventory through private marketplace and publisher-direct deals across platforms including Disney+,
        Netflix, Prime Video, and Hulu, target affluent and high-net-worth households through engineered first-party and
        deterministic audiences, control frequency across every publisher in the plan, and measure CTV through view-through
        influence, brand lift, and incrementality rather than the last click. We take a limited number of engagements each
        quarter and work only with brands where premium CTV is a genuine fit.
      </p>
    </ArticleLayout>
  )
}
