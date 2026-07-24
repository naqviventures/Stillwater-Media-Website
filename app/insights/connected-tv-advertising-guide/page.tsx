import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  alternates: {
    canonical: "https://www.stillwatermedia.io/insights/connected-tv-advertising-guide",
  },
  title: "Connected TV Advertising: Complete Guide to CTV Campaign Success",
  description:
    "Master Connected TV advertising with proven strategies for audience targeting, creative optimization, and performance measurement across streaming platforms.",
  openGraph: {
    title: "Connected TV Advertising: The Complete Guide to CTV Campaign Success",
    description:
      "Over 80% of US households have CTV devices. Learn how to build successful campaigns across Netflix, Disney+, and premium streaming platforms.",
    type: "article",
    url: "https://www.stillwatermedia.io/insights/connected-tv-advertising-guide",
    images: [
      {
        url: "/connected-tv-streaming-devices-and-smart-tv-interf.jpg",
        width: 1200,
        height: 630,
        alt: "Connected TV devices and smart TV interface showing streaming content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connected TV Advertising: The Complete Guide to CTV Campaign Success",
    description:
      "Strategies for audience targeting, creative optimization, and measurement across premium streaming platforms.",
    images: ["/connected-tv-streaming-devices-and-smart-tv-interf.jpg"],
  },
}

export default function ConnectedTVAdvertisingGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Connected TV Advertising: The Complete Guide to CTV Campaign Success",
    description:
      "A comprehensive guide to Connected TV advertising covering audience targeting, ad formats, creative best practices, and measurement strategies.",
    image: {
      "@type": "ImageObject",
      url: "/connected-tv-streaming-devices-and-smart-tv-interf.jpg",
      width: 1200,
      height: 630,
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
    datePublished: "2025-11-15T08:00:00-05:00",
    dateModified: "2025-11-15T08:00:00-05:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.stillwatermedia.io/insights/connected-tv-advertising-guide",
    },
    keywords:
      "connected TV advertising, CTV advertising, streaming TV ads, OTT advertising, smart TV advertising, programmatic CTV",
    articleSection: "CTV",
    wordCount: 2200,
    inLanguage: "en-US",
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, {"@type":"BreadcrumbList","@id":"https://www.stillwatermedia.io/insights/connected-tv-advertising-guide#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.stillwatermedia.io"},{"@type":"ListItem","position":2,"name":"Insights","item":"https://www.stillwatermedia.io/insights"},{"@type":"ListItem","position":3,"name":"Connected TV Advertising: The Complete Guide to CTV Campaign Success","item":"https://www.stillwatermedia.io/insights/connected-tv-advertising-guide"}]}],
  }

  return (
    <ArticleLayout
      title="Connected TV Advertising: The Complete Guide to CTV Campaign Success"
      subtitle="Master the art of Connected TV advertising with proven strategies for audience targeting, creative optimization, and performance measurement across streaming platforms."
      category="CTV"
      image="/connected-tv-streaming-devices-and-smart-tv-interf.jpg"
      imageAlt="Connected TV devices and smart TV interface showing streaming content"
      schemaMarkup={schemaMarkup}
    >
      <p>
        Connected TV (CTV) advertising has emerged as one of the most powerful channels in digital marketing. As traditional linear TV viewership continues to decline and streaming services proliferate, advertisers are shifting significant portions of their budgets to CTV platforms.
      </p>

      <p>
        Over 80% of US households now have at least one connected TV device, and streaming viewership has surpassed traditional cable in many demographics. This guide covers everything you need to know to build successful CTV campaigns.
      </p>

      <hr />

      <h2>Understanding the Connected TV Landscape</h2>

      <p>
        Connected TV refers to any television that can connect to the internet and stream digital content:
      </p>

      <h3>CTV Device Types</h3>

      <ul>
        <li><strong>Smart TVs</strong> — Television sets with built-in streaming capabilities</li>
        <li><strong>Streaming devices</strong> — Roku, Apple TV, Fire Stick, Chromecast</li>
        <li><strong>Gaming consoles</strong> — PlayStation, Xbox, Nintendo Switch</li>
        <li><strong>Casting devices</strong> — Mobile devices mirroring to TV screens</li>
      </ul>

      <h3>Major Streaming Platforms</h3>

      <ol>
        <li><strong>Netflix</strong> — Ad-supported tier launched 2024, affluent audience</li>
        <li><strong>Disney+</strong> — Family and entertainment focus, premium brand safety</li>
        <li><strong>Prime Video</strong> — Amazon's intent data overlay, purchase behavior</li>
        <li><strong>Hulu</strong> — Established ad-supported model, strong targeting</li>
        <li><strong>Max (HBO)</strong> — Premium content, affluent subscribers</li>
        <li><strong>Peacock</strong> — Live sports, news, NBC content library</li>
      </ol>

      <hr />

      <h2>CTV Advertising Formats and Opportunities</h2>

      <h3>Standard Ad Formats</h3>

      <ul>
        <li><strong>Pre-roll</strong> — Ads before content begins; highest attention and completion rates</li>
        <li><strong>Mid-roll</strong> — Inserted during natural breaks; similar to traditional TV</li>
        <li><strong>Post-roll</strong> — After content ends; ideal for direct response CTAs</li>
        <li><strong>Pause ads</strong> — Display when viewer pauses; non-intrusive brand exposure</li>
      </ul>

      <h3>Interactive CTV Formats</h3>

      <p>
        Advanced formats that drive engagement beyond passive viewing:
      </p>

      <ol>
        <li><strong>QR code overlays</strong> — Connect TV viewing to mobile actions</li>
        <li><strong>Clickable elements</strong> — Remote-navigable calls to action</li>
        <li><strong>Shoppable ads</strong> — Direct purchase paths from ad exposure</li>
        <li><strong>Companion experiences</strong> — Synchronized content on second screens</li>
      </ol>

      <hr />

      <h2>Advanced Audience Targeting Strategies</h2>

      <p>
        CTV's greatest advantage over linear TV is sophisticated targeting capabilities:
      </p>

      <h3>Targeting Dimensions</h3>

      <ul>
        <li><strong>Demographic</strong> — Age, gender, income, education, household composition</li>
        <li><strong>Behavioral</strong> — Viewing patterns, content preferences, engagement history</li>
        <li><strong>First-party data</strong> — CRM onboarding, website visitors, customer lookalikes</li>
        <li><strong>Intent signals</strong> — Purchase research, competitive brand interest</li>
        <li><strong>Contextual</strong> — Content genre, show-level targeting, daypart</li>
      </ul>

      <h3>Household-Level Precision</h3>

      <p>
        Unlike linear TV's broad demographic assumptions, CTV enables:
      </p>

      <ol>
        <li>Deterministic matching to known households</li>
        <li>Cross-device identity resolution within households</li>
        <li>Frequency capping at the household level</li>
        <li>Sequential messaging across family members</li>
      </ol>

      <hr />

      <h2>Creative Best Practices for CTV Success</h2>

      <h3>Environment Considerations</h3>

      <p>
        CTV viewing differs fundamentally from mobile and desktop:
      </p>

      <ul>
        <li><strong>Large screen</strong> — Cinematic, high-production-value creative works best</li>
        <li><strong>Lean-back experience</strong> — Viewers are relaxed, distraction-free</li>
        <li><strong>Sound on</strong> — Audio is primary, not optional</li>
        <li><strong>Shared viewing</strong> — Multiple household members often watch together</li>
      </ul>

      <h3>Creative Guidelines</h3>

      <ol>
        <li><strong>Strong opening</strong> — First 3 seconds must capture attention and establish relevance</li>
        <li><strong>Clear value proposition</strong> — Communicate benefit quickly and memorably</li>
        <li><strong>Visual quality</strong> — HD/4K production standards expected</li>
        <li><strong>Brand consistency</strong> — Maintain premium positioning throughout</li>
        <li><strong>Clear CTA</strong> — Simple, memorable action for viewers to take</li>
      </ol>

      <h3>Optimal Ad Lengths</h3>

      <ul>
        <li><strong>15 seconds</strong> — Efficient reach, good for awareness and frequency</li>
        <li><strong>30 seconds</strong> — Standard format, balanced storytelling and efficiency</li>
        <li><strong>60+ seconds</strong> — Premium placements, complex messaging, consideration stage</li>
      </ul>

      <hr />

      <h2>Measurement and Attribution in CTV</h2>

      <h3>Key Performance Metrics</h3>

      <ul>
        <li><strong>Completion rate</strong> — Percentage of viewers watching full ad (target 95%+)</li>
        <li><strong>Reach</strong> — Unique households exposed to campaign</li>
        <li><strong>Frequency</strong> — Average exposures per household (typically cap at 3-5/week)</li>
        <li><strong>Brand lift</strong> — Survey-measured awareness and consideration impact</li>
        <li><strong>Search lift</strong> — Increase in branded search following exposure</li>
        <li><strong>Website visits</strong> — Trackable visits attributed to CTV exposure</li>
      </ul>

      <h3>Attribution Methodologies</h3>

      <ol>
        <li><strong>Incrementality testing</strong> — Holdout groups measuring true causal impact</li>
        <li><strong>Cross-device tracking</strong> — Connect CTV exposure to mobile/desktop actions</li>
        <li><strong>Foot traffic attribution</strong> — Link ad exposure to store visits</li>
        <li><strong>Conversion tracking</strong> — Match exposed households to conversion events</li>
      </ol>

      <hr />

      <h2>Common CTV Campaign Mistakes</h2>

      <h3>Avoid These Pitfalls</h3>

      <ol>
        <li><strong>Buying open exchange CTV</strong> — Fraud risk is high; use PMPs with named publishers</li>
        <li><strong>No frequency caps</strong> — Without limits, households see ads 40+ times weekly</li>
        <li><strong>Repurposed digital creative</strong> — Mobile/banner creative fails on TV screens</li>
        <li><strong>Last-click attribution</strong> — Undervalues CTV's awareness contribution</li>
        <li><strong>Treating CTV as direct response</strong> — Primary value is brand building and consideration</li>
      </ol>

      <h3>Best Practice Checklist</h3>

      <ul>
        <li>Private marketplace deals with premium publishers</li>
        <li>Frequency caps at 3-5 exposures per household per week</li>
        <li>TV-quality creative (not repurposed digital)</li>
        <li>Incrementality measurement framework</li>
        <li>Cross-channel integration with digital campaigns</li>
      </ul>

      <hr />

      <h2>Key Takeaways</h2>

      <p>
        Connected TV advertising represents a fundamental shift in how brands reach and engage audiences:
      </p>

      <ul>
        <li><strong>Precision meets scale</strong> — Household-level targeting at television reach</li>
        <li><strong>Premium environments</strong> — Brand-safe content from trusted publishers</li>
        <li><strong>Measurable impact</strong> — Attribution capabilities beyond traditional TV</li>
        <li><strong>Engaged audiences</strong> — Non-skippable, sound-on, lean-back viewing</li>
      </ul>

      <p>
        The key to CTV success lies in treating it not as a replacement for traditional TV, but as a powerful new channel that combines the best aspects of television and digital advertising.
      </p>

      <hr />

      <p className="text-sm italic text-foreground/60">
        Stillwater Media builds premium CTV campaigns for luxury and high-consideration brands. We combine household-level targeting with brand-safe inventory and rigorous measurement.{" "}
        <a href="/apply" className="underline hover:no-underline text-foreground">
          Apply to work with us
        </a>
      </p>
    </ArticleLayout>
  )
}
