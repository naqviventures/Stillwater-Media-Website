import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const title = "CTV Ad Fraud Prevention: 2026 Benchmarks & Playbook"
const description =
  "CTV ad fraud prevention separates 0.1% and 9.1% invalid traffic on identical inventory. Here are the 2026 benchmarks and the buying controls that close it."
const slug = "ctv-ad-fraud-prevention"
const canonical = `https://www.stillwatermedia.io/insights/${slug}`
const image = `/images/${slug}.png`
const publishedTime = "2026-08-25T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    url: canonical,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: `Stillwater Media — ${title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "CTV Ad Fraud Prevention: 2026 Benchmarks & Playbook",
      description,
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
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
          url: "https://www.stillwatermedia.io/images/stillwater-media-logo.png",
          width: 600,
          height: 60,
        },
      },
      datePublished: publishedTime,
      dateModified: publishedTime,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonical,
      },
      keywords:
        "CTV ad fraud prevention, connected TV invalid traffic rate, CTV fraud benchmarks 2026, programmatic ad verification, app spoofing CTV, server-side ad insertion fraud, ads.txt app-ads.txt validation, premium CTV inventory quality, supply path optimization CTV, made-for-advertising inventory",
      articleSection: "Media Quality & Measurement",
      wordCount: 2312,
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stillwatermedia.io" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.stillwatermedia.io/insights" },
        { "@type": "ListItem", position: 3, name: title, item: canonical },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is CTV ad fraud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CTV ad fraud is the generation of connected TV advertising impressions that are never delivered to a real household viewer, or that are delivered to lower-value inventory misrepresented as premium CTV. The most common forms are app spoofing, where a low-value app declares itself as a premium publisher's bundle ID; device spoofing, where bots in data centers imitate Roku, Fire TV, or Apple TV devices; and abuse of server-side ad insertion to manufacture phantom impressions. Because connected TV has no browser and most identifying signals are self-declared by the seller, it is structurally harder to verify than web or mobile inventory.",
          },
        },
        {
          "@type": "Question",
          name: "What is a normal invalid traffic rate for CTV campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A well-run premium CTV campaign should hold post-bid invalid traffic at or below 0.5%, and industry measurement shows optimized CTV campaigns averaging roughly 0.1%. Anything between 0.5% and 1.5% is acceptable but worth monitoring, and anything above 2% should be investigated immediately. For context, non-optimized CTV campaigns — those without pre-bid filtering, curated supply, and active verification — average 9.1% invalid traffic, which is roughly 91 times the optimized rate on the same channel.",
          },
        },
        {
          "@type": "Question",
          name: "How do you prevent CTV ad fraud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The single most effective control is buying through curated supply — private marketplace deals and programmatic guaranteed arrangements with named publishers — rather than the open exchange, because forged app bundle IDs cannot enter a direct relationship. Layer on enforcement of app-ads.txt and sellers.json so the DSP only bids on authorized paths, run pre-bid and post-bid verification in parallel, maintain a vetted inclusion list rather than relying on blocklists, cap supply path length, and write invalid-traffic clawback thresholds into insertion orders. These are configuration decisions, not software purchases.",
          },
        },
        {
          "@type": "Question",
          name: "Is CTV ad fraud getting worse?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DoubleVerify's 2026 research documented a 140% year-over-year increase in CTV fraud schemes and variants in the first quarter of 2026, along with a tenfold increase in fraudulent applications and an estimated $1.8 million in loss per billion unprotected impressions. Generative AI has sharply reduced the cost of building convincing fake apps and synthetic viewing behavior, which means blocklist-based defenses are structurally behind and inclusion-list approaches have become the more reliable posture.",
          },
        },
        {
          "@type": "Question",
          name: "Why does CTV ad fraud cost luxury advertisers more?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three factors compound. Premium CTV CPMs run roughly three to five times mass-market rates, so each fraudulent impression destroys several times more value. Affluent target audiences are small — often a few million households rather than tens of millions — so wasted impressions consume a finite reach pool rather than a renewable one. And invalid traffic inflates impression counts, which understates true frequency and contaminates incrementality and brand lift measurement, meaning the campaign is also being optimized against corrupted data.",
          },
        },
        {
          "@type": "Question",
          name: "Does a high video completion rate mean CTV inventory is high quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — a completion rate above 99% is usually a warning sign. Genuine premium CTV completion rates fall between roughly 93% and 98% because real viewers leave the room, change channels, or skip where the platform permits it. Fraudulent inventory reports near-perfect completion precisely because no human is present to interrupt playback, so buyers who treat completion rate as a quality proxy tend to optimize budget toward their worst supply.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <ArticleLayout
      title={title}
      author="Stillwater Media"
      date="August 25, 2026"
      readingTime="11 min read"
      category="Media Quality & Measurement"
      image={image}
      imageAlt="Stillwater Media illustration of CTV ad fraud prevention — a darkened luxury living room lit only by a large blank screen casting cool blue light"
      imageCaption="On the same connected TV inventory, one buying posture delivers 0.1% invalid traffic and another delivers 9.1% — the screen looks identical either way."
      schemaMarkup={articleSchema}
    >
      <p>
        CTV ad fraud prevention is now the single largest source of avoidable waste in premium video budgets, and the gap
        between advertisers who do it well and advertisers who assume their DSP handles it is enormous. Industry
        measurement in 2026 puts non-optimized connected TV campaigns at a 9.1% invalid traffic rate while optimized
        campaigns on the same channel run at 0.1% — roughly a 91x difference produced entirely by buying posture, not by
        inventory availability. For a brand spending $2 million a year in CTV, that spread is about $180,000 in
        impressions delivered to something that is not a household.
      </p>
      <p>
        The problem is getting worse, not better. DoubleVerify's 2026 global research documented a 140% year-over-year
        increase in CTV fraud schemes and variants in Q1 2026, a tenfold rise in fraudulent applications, and an
        estimated $1.8 million lost per billion unprotected impressions. Generative AI has substantially lowered the cost
        of producing convincing fake apps, spoofed device signatures, and synthetic viewing patterns.
      </p>
      <p>
        This is a practical guide for advertisers in luxury and high-consideration categories, where CPMs are high,
        audiences are small, and a wasted impression costs several multiples of what it costs a mass-market brand.
      </p>

      <h2>Why CTV Is Structurally Easier to Defraud Than Web or Mobile</h2>
      <p>
        Connected TV lacks the forensic surface that browser and in-app environments provide. Three structural
        properties explain most of it.
      </p>
      <p>
        <strong>There is no browser, so there are no cookies, no user agent to interrogate, and no rendered page to
        inspect.</strong> Verification has to rely on bid-stream signals — IP address, device ID, app bundle ID,
        publisher ID, content object — all of which are self-declared by the seller and all of which can be fabricated.
      </p>
      <p>
        <strong>Server-side ad insertion (SSAI) is the norm, not the exception.</strong> SSAI stitches ads into a video
        stream on a server before it reaches the device, which is what makes CTV ad experiences feel like broadcast. It
        also means the ad call originates from a data center rather than a household, and the true device signals have to
        be passed along faithfully by the SSAI vendor. A malicious or compromised SSAI implementation can generate
        limitless impressions that look structurally identical to legitimate ones.
      </p>
      <p>
        <strong>Impression volume is decoupled from human attention by design.</strong> Long-form content, autoplay, and
        continuous playback mean a single &quot;session&quot; can generate dozens of ad opportunities without a human
        action ever occurring. Distinguishing a household that fell asleep from a farm of virtual devices is genuinely
        hard.
      </p>

      <h2>The Six CTV Ad Fraud Types Worth Knowing</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Fraud type</th>
              <th>What happens</th>
              <th>Typical detection signal</th>
              <th>Relative prevalence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>App spoofing</td>
              <td>A low-value or fake app declares itself as a premium publisher's bundle ID</td>
              <td>app-ads.txt mismatch, seller ID inconsistency</td>
              <td>High — most common</td>
            </tr>
            <tr>
              <td>Device spoofing</td>
              <td>Bots declare premium CTV device IDs (Roku, Fire TV, Apple TV) from data center IPs</td>
              <td>IP-to-device implausibility, ASN analysis</td>
              <td>High</td>
            </tr>
            <tr>
              <td>SSAI abuse</td>
              <td>Compromised or fraudulent server-side insertion generates phantom impressions</td>
              <td>Impossible impression density, IP concentration</td>
              <td>Medium, growing fast</td>
            </tr>
            <tr>
              <td>Fake / cloned apps</td>
              <td>Purpose-built apps that exist only to generate ad calls; tenfold increase in 2026</td>
              <td>New bundle IDs with implausible scale ramps</td>
              <td>Medium, growing fast</td>
            </tr>
            <tr>
              <td>Ad stacking / hidden video</td>
              <td>Multiple ads served in one slot, or video rendered off-screen</td>
              <td>Viewability anomalies, duplicate impression IDs</td>
              <td>Low in true CTV, higher in &quot;CTV-labeled&quot; mobile</td>
            </tr>
            <tr>
              <td>Misrepresented inventory</td>
              <td>Mobile or web video sold as CTV at CTV CPMs</td>
              <td>Device type inconsistency in bid stream</td>
              <td>Medium — often not technically fraud, always waste</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        That last row deserves emphasis. A meaningful share of what luxury brands buy as &quot;CTV&quot; is mobile
        in-app video relabeled to command a $40 CPM instead of a $9 one. It is frequently not fraudulent in a legal
        sense. It is a total loss for a brand that bought CTV to be on a living room screen.
      </p>

      <h2>CTV Ad Fraud Benchmarks for 2026: What to Measure Against</h2>
      <p>
        Hold your campaigns to these ranges. If your verification vendor reports numbers outside them, that is a finding,
        not a rounding error.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Target (well-run premium buy)</th>
              <th>Acceptable</th>
              <th>Investigate immediately</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CTV invalid traffic rate (post-bid)</td>
              <td>≤ 0.5%</td>
              <td>0.5%–1.5%</td>
              <td>&gt; 2.0%</td>
            </tr>
            <tr>
              <td>Overall digital IVT (all channels)</td>
              <td>~1.0%</td>
              <td>1.0%–2.0%</td>
              <td>&gt; 3.0%</td>
            </tr>
            <tr>
              <td>Video completion rate (premium CTV)</td>
              <td>93%–98%</td>
              <td>88%–93%</td>
              <td>&gt; 99% or &lt; 85%</td>
            </tr>
            <tr>
              <td>App-ads.txt authorized share</td>
              <td>100%</td>
              <td>98%–100%</td>
              <td>&lt; 98%</td>
            </tr>
            <tr>
              <td>Unique app bundles per campaign</td>
              <td>Fewer than 150</td>
              <td>150–400</td>
              <td>&gt; 1,000</td>
            </tr>
            <tr>
              <td>Share of spend in top 20 apps</td>
              <td>70%–90%</td>
              <td>50%–70%</td>
              <td>&lt; 40%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two counterintuitive notes. A video completion rate above 99% is a red flag, not a triumph — real households
        leave the room, change channels, and hit skip on the platforms that allow it. And an unusually long tail of app
        bundles is the most reliable early warning sign available to a buyer without specialist tooling; legitimate
        premium CTV supply is concentrated, and a campaign touching 3,000 apps is not buying premium CTV regardless of
        what the line item is called.
      </p>

      <h2>The CTV Ad Fraud Prevention Playbook</h2>
      <p>
        The 0.1% versus 9.1% gap is not produced by better fraud detection software. Both cohorts have verification
        enabled. It is produced by how the media is bought.
      </p>
      <h3>1. Buy through curated supply, not the open exchange</h3>
      <p>
        The most effective CTV ad fraud prevention control is refusing to transact with sellers you cannot name.{" "}
        <a href="/insights/private-marketplace-deals-luxury-advertising">Private marketplace deals</a> and programmatic
        guaranteed arrangements with named publishers — Disney+, Netflix, Prime Video, Hulu, Peacock, Roku Channel,
        Samsung TV Plus — remove the app-spoofing and fake-app vectors almost entirely, because the inventory never
        enters an open auction where a bundle ID can be forged. Open-exchange CTV should be a small, closely monitored
        share of any premium plan, if it appears at all.
      </p>
      <h3>2. Enforce app-ads.txt and sellers.json programmatically</h3>
      <p>
        Every legitimate CTV publisher maintains an app-ads.txt file declaring which sellers may resell its inventory,
        and every legitimate SSP publishes a sellers.json. Require your DSP to bid only on <code>DIRECT</code> or
        explicitly authorized <code>RESELLER</code> paths, and audit the mismatch report monthly. This is a
        settings-level control most advertisers never turn on. It is free.
      </p>
      <h3>3. Cap the supply path</h3>
      <p>
        Multi-hop resale is where spoofed inventory launders itself into a premium-looking bid. Limit the number of
        intermediaries between your DSP and the publisher, prefer direct SSP integrations, and review your{" "}
        <a href="/insights/supply-path-optimization-premium-advertising">supply path</a> quarterly. The ANA's
        programmatic transparency work found that only about $0.36 of every dollar entering a DSP reaches a consumer,
        with roughly $0.29 going to intermediary fees and $0.35 lost to low-quality media including invalid traffic and
        made-for-advertising inventory. Path length is the mechanism.
      </p>
      <h3>4. Run pre-bid and post-bid verification, not one or the other</h3>
      <p>
        Pre-bid segments (IAS, DoubleVerify, HUMAN) block known-bad inventory before the impression is bought. Post-bid
        measurement tells you what actually got through, including novel schemes the pre-bid list has not caught yet.
        Advertisers who run only pre-bid have no ability to detect new fraud types; advertisers who run only post-bid are
        paying for fraud and requesting refunds later. Budget roughly $0.08–$0.15 CPM for verification and treat it as
        non-optional.
      </p>
      <h3>5. Maintain an inclusion list, not just an exclusion list</h3>
      <p>
        Blocklists are permanently behind — a tenfold increase in fraudulent apps means the list is stale the day it is
        published. An allowlist of vetted app bundles, refreshed quarterly, inverts the problem: new supply must earn its
        way in rather than being blocked after it has already taken budget. For most luxury brands, a 100–200 app
        inclusion list captures the great majority of legitimate reach.
      </p>
      <h3>6. Reconcile impressions against a second source</h3>
      <p>
        Compare DSP-reported delivery against your verification vendor's measured impressions and, where available, the
        publisher's own reporting. Discrepancies above 3–5% warrant investigation. Systematic over-delivery from a single
        seller is one of the clearest fraud signatures available.
      </p>
      <h3>7. Make make-goods and clawbacks contractual</h3>
      <p>
        Insert IVT thresholds into your insertion orders — a common structure is full credit on any impressions measured
        as invalid above 1%, verified by a named third party. Sellers who resist this clause are pricing the risk into
        your rate without telling you.
      </p>

      <h2>A 30-Day CTV Supply Quality Audit</h2>
      <p>Most advertisers do not need a new vendor to find out where they stand. They need one focused month.</p>
      <p>
        <strong>Week 1 — Pull the raw app-level delivery report.</strong> Not the top-25 summary the platform surfaces
        by default; the full list of every app bundle ID that received an impression, with spend, impressions, and
        completion rate against each. Sort by impression volume descending and by completion rate descending. The first
        list tells you whether your supply is concentrated. The second surfaces the near-100% completion outliers that
        warrant scrutiny.
      </p>
      <p>
        <strong>Week 2 — Validate the top 200 bundles against app-ads.txt.</strong> For each bundle, confirm the
        publisher's app-ads.txt file authorizes the seller ID that delivered the impression, and confirm that seller's
        sellers.json entry resolves to a real, named business. Every mismatch is either a misconfiguration or a spoof,
        and both are reasons to pause the path. Advertisers running this exercise for the first time typically find
        2%–8% of spend on unauthorized paths.
      </p>
      <p>
        <strong>Week 3 — Reconcile three impression counts.</strong> DSP-reported delivery, verification vendor measured
        impressions, and — for direct and PMP deals — publisher-side reporting. Flag any seller with a discrepancy above
        3%–5%, and any seller whose discrepancy is consistently one-directional. Random variance is normal; systematic
        over-delivery is not.
      </p>
      <p>
        <strong>Week 4 — Map the supply path for your ten largest sellers.</strong> For each, document the number of
        intermediaries between your DSP and the publisher, the disclosed take rate at each hop, and whether a direct or
        programmatic guaranteed alternative exists at a comparable effective CPM. In most audits, at least three of the
        ten can be replaced with a shorter path at a lower net cost, because the fees stripped out of the chain exceed
        the rate premium on the direct deal.
      </p>
      <p>
        The output is a one-page finding: percentage of spend on unauthorized paths, measured IVT by seller, the
        concentration of legitimate reach, and a prioritized list of paths to cut. That document is also the strongest
        negotiating position a buyer can hold going into an annual upfront conversation.
      </p>

      <h2>What This Costs a Luxury Advertiser Specifically</h2>
      <p>Fraud economics are worse in premium categories for three compounding reasons.</p>
      <ul>
        <li>
          <strong>CPMs are 3–5x mass-market rates.</strong> A fraudulent impression on a $45 luxury CTV buy destroys
          five times the value of one on a $9 mass-market buy.
        </li>
        <li>
          <strong>Addressable audiences are small.</strong> When the target is 2.8 million affluent households rather
          than 90 million adults, every wasted impression is a lost opportunity against a finite pool. Frequency capping
          calculations, reach curves, and budget pacing all degrade.
        </li>
        <li>
          <strong>Measurement is corrupted, not just the delivery.</strong> This is the underrated cost. Invalid traffic
          inflates impression counts, which deflates measured frequency, which distorts{" "}
          <a href="/insights/true-incremental-lift-measurement">incrementality and brand lift readouts</a>. A brand with
          6% IVT is not only wasting 6% of budget — it is optimizing the other 94% against contaminated signal. We
          routinely find that cleaning supply improves measured campaign performance by more than the fraud rate alone
          would predict, because the optimization loop starts working on real data.
        </li>
      </ul>

      <h2>Common CTV Ad Fraud Prevention Mistakes We See</h2>
      <ul>
        <li>
          <strong>Assuming the DSP handles it.</strong> Every major DSP offers fraud protection, and the default
          settings on most are permissive. Protection is a configuration, not a feature.
        </li>
        <li>
          <strong>Treating high completion rates as a quality signal.</strong> Fraudulent inventory reports
          near-perfect completion because no human is present to stop it.
        </li>
        <li>
          <strong>Buying &quot;CTV&quot; without device-type enforcement.</strong> Require CTV device type in the bid
          request and reject anything that does not declare it. This single filter eliminates most misrepresented mobile
          video.
        </li>
        <li>
          <strong>Reviewing verification reports quarterly instead of weekly.</strong> Fraud schemes ramp in days. A
          quarterly review means a scheme runs for six to twelve weeks before anyone notices.
        </li>
        <li>
          <strong>Optimizing toward the cheapest CTV CPM.</strong> In connected TV, an unusually low CPM is a warning,
          not a win. If a seller is offering $12 CPM inventory on a platform whose direct rate is $38, you are not
          getting a deal.
        </li>
      </ul>

      <h2>The Standard We Hold</h2>
      <p>
        For <a href="/capabilities">premium CTV campaigns</a> we run for luxury clients, the operating standard is
        straightforward: named publishers only, app-ads.txt authorized paths enforced at the DSP, pre-bid and post-bid
        verification running in parallel, an inclusion list reviewed quarterly, weekly IVT reporting, and contractual
        clawback rights. Campaigns run under that configuration hold below 0.5% invalid traffic consistently. It is not
        exotic. It is a checklist that most media plans have simply never had applied to them.
      </p>
      <p>
        The 91x gap between optimized and non-optimized CTV buying is, in the end, an argument for{" "}
        <a href="/capabilities">buying premium inventory deliberately</a> rather than efficiently. In a channel where the
        seller controls nearly every signal a buyer can verify, knowing exactly who you are buying from is the control
        that does the most work.
      </p>
      <p>
        <strong>Want an independent read on how much of your CTV budget is reaching real households?</strong> Stillwater
        Media takes a limited number of new engagements each quarter, and a supply quality audit is where most of them
        start. <a href="/apply">Apply to work with us</a>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is CTV ad fraud?</h3>
      <p>
        CTV ad fraud is the generation of connected TV advertising impressions that are never delivered to a real
        household viewer, or that are delivered to lower-value inventory misrepresented as premium CTV. The most common
        forms are app spoofing, where a low-value app declares itself as a premium publisher's bundle ID; device
        spoofing, where bots in data centers imitate Roku, Fire TV, or Apple TV devices; and abuse of server-side ad
        insertion to manufacture phantom impressions. Because connected TV has no browser and most identifying signals
        are self-declared by the seller, it is structurally harder to verify than web or mobile inventory.
      </p>
      <h3>What is a normal invalid traffic rate for CTV campaigns?</h3>
      <p>
        A well-run premium CTV campaign should hold post-bid invalid traffic at or below 0.5%, and industry measurement
        shows optimized CTV campaigns averaging roughly 0.1%. Anything between 0.5% and 1.5% is acceptable but worth
        monitoring, and anything above 2% should be investigated immediately. For context, non-optimized CTV campaigns —
        those without pre-bid filtering, curated supply, and active verification — average 9.1% invalid traffic, which is
        roughly 91 times the optimized rate on the same channel.
      </p>
      <h3>How do you prevent CTV ad fraud?</h3>
      <p>
        The single most effective control is buying through curated supply — private marketplace deals and programmatic
        guaranteed arrangements with named publishers — rather than the open exchange, because forged app bundle IDs
        cannot enter a direct relationship. Layer on enforcement of app-ads.txt and sellers.json so the DSP only bids on
        authorized paths, run pre-bid and post-bid verification in parallel, maintain a vetted inclusion list rather than
        relying on blocklists, cap supply path length, and write invalid-traffic clawback thresholds into insertion
        orders. These are configuration decisions, not software purchases.
      </p>
      <h3>Is CTV ad fraud getting worse?</h3>
      <p>
        Yes. DoubleVerify's 2026 research documented a 140% year-over-year increase in CTV fraud schemes and variants in
        the first quarter of 2026, along with a tenfold increase in fraudulent applications and an estimated $1.8 million
        in loss per billion unprotected impressions. Generative AI has sharply reduced the cost of building convincing
        fake apps and synthetic viewing behavior, which means blocklist-based defenses are structurally behind and
        inclusion-list approaches have become the more reliable posture.
      </p>
      <h3>Why does CTV ad fraud cost luxury advertisers more?</h3>
      <p>
        Three factors compound. Premium CTV CPMs run roughly three to five times mass-market rates, so each fraudulent
        impression destroys several times more value. Affluent target audiences are small — often a few million
        households rather than tens of millions — so wasted impressions consume a finite reach pool rather than a
        renewable one. And invalid traffic inflates impression counts, which understates true frequency and contaminates
        incrementality and brand lift measurement, meaning the campaign is also being optimized against corrupted data.
      </p>
      <h3>Does a high video completion rate mean CTV inventory is high quality?</h3>
      <p>
        No — a completion rate above 99% is usually a warning sign. Genuine premium CTV completion rates fall between
        roughly 93% and 98% because real viewers leave the room, change channels, or skip where the platform permits it.
        Fraudulent inventory reports near-perfect completion precisely because no human is present to interrupt playback,
        so buyers who treat completion rate as a quality proxy tend to optimize budget toward their worst supply.
      </p>
    </ArticleLayout>
  )
}
