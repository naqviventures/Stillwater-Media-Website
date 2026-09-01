import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/programmatic-deal-types-compared"
const imagePath = "/images/programmatic-deal-types-compared.png"

export const metadata: Metadata = {
  title: "Programmatic Deal Types Compared: PG, Preferred, PMP, Open",
  description:
    "Programmatic deal types compared for luxury advertisers — PG vs preferred vs PMP vs open auction, with priority mechanics, CPM ranges and fill rate math.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Programmatic Deal Types Compared: PG, Preferred, PMP, Open",
    description:
      "A senior buyer's comparison of the four programmatic deal types — programmatic guaranteed, preferred deals, private marketplaces and the open auction — with priority mechanics, CPM and fill-rate ranges, a luxury allocation framework, and a diagnostic for deals that will not spend.",
    type: "article",
    url: canonicalUrl,
    images: [
      { url: imagePath, width: 1200, height: 630, alt: "Programmatic deal types compared — Stillwater Media" },
    ],
    locale: "en_US",
    siteName: "Stillwater Media",
    publishedTime: "2026-08-22",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programmatic Deal Types Compared: PG, Preferred, PMP, Open",
    description:
      "Four ways to buy the same impression, at four different prices, with four different guarantees. Priority mechanics, CPM ranges and fill math for luxury buyers.",
    images: [imagePath],
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Programmatic Deal Types Compared: PG, Preferred, PMP and Open Auction",
      description:
        "A working comparison of the four programmatic deal types for luxury advertisers — programmatic guaranteed, preferred deals, private marketplace auctions and the open auction. Covers ad-server priority mechanics, the OpenRTB deal object, realistic CPM and fill-rate ranges for premium CTV and display, the allocation that suits a limited luxury budget, the five most common structural mistakes, and a diagnostic sequence for deals that fail to spend.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${imagePath}`,
        width: 1200,
        height: 630,
        caption: "Programmatic deal types compared — Stillwater Media",
      },
      author: { "@type": "Organization", name: "Stillwater Media" },
      publisher: {
        "@type": "Organization",
        name: "Stillwater Media",
        logo: { "@type": "ImageObject", url: "https://www.stillwatermedia.io/logo.png" },
      },
      datePublished: "2026-08-22",
      dateModified: "2026-08-22",
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords:
        "programmatic deal types, programmatic guaranteed vs PMP, preferred deal advertising, private marketplace deals, open auction advertising, deal ID programmatic, premium CTV advertising inventory, programmatic CPM benchmarks, ad server line item priority, luxury brand media buying",
      articleSection: "Programmatic Strategy",
      wordCount: 2218,
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stillwatermedia.io" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.stillwatermedia.io/insights" },
        { "@type": "ListItem", position: 3, name: "Programmatic Deal Types Compared", item: canonicalUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the four programmatic deal types?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Programmatic guaranteed (fixed price, guaranteed impressions, no auction), preferred deals (fixed price, first look, no volume guarantee), private marketplace or PMP (floor price plus invite-only auction), and the open auction (fully open real-time bidding). The difference between them is not inventory quality — the same impression can be sold through all four — but the order in which the publisher's ad server considers your bid and what the publisher has promised in exchange.",
          },
        },
        {
          "@type": "Question",
          name: "Does a higher bid always win in programmatic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Publishers run a decision sequence in the ad server before the auction is consulted. In Google Ad Manager's numbering, sponsorship line items sit at priority 4, standard reservations at 6 through 10, and everything non-guaranteed — preferred deals, private auctions, open auction — sits at priority 12. Programmatic guaranteed is trafficked as a reservation, so it clears ahead of a higher-priced PMP bid because it competes on rank, not price. If you need a specific placement on a specific date, no PMP bid at any price reliably gets you there.",
          },
        },
        {
          "@type": "Question",
          name: "Why is preferred deal fill rate so low?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fill on a preferred deal is typically 15–40% of targeted impressions, because most bid requests that match the deal will not also match the buyer's audience and pacing filters at that moment. This is a structural property of first-look mechanics, not a signal of deal health — buyers who treat low fill as a broken deal and shut it down are misreading the format. Preferred deals are best used as a hedge for guaranteed access to a scarce high-index audience at a known price without committing to volume.",
          },
        },
        {
          "@type": "Question",
          name: "How should a luxury brand allocate across deal types?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A useful starting split for a brand spending $150K–$600K per quarter on upper-funnel media is 20–30% programmatic guaranteed for tentpole moments and first-position pods, 45–60% private marketplace as the core of premium reach, 5–15% preferred deals for first look at scarce publisher audiences, and 10–20% open auction for retargeting and reach extension. Shift toward PG for flights shorter than four weeks, and away from PG when the addressable audience is under roughly 400,000 households.",
          },
        },
        {
          "@type": "Question",
          name: "How do you diagnose a programmatic deal that is not spending?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Work in order: confirm the deal synced to the correct DSP seat, check the deal's status and flight dates, compare your bid to the floor including data and DSP fees, strip all targeting except the deal ID for two hours to isolate whether a targeting layer is the constraint, pull no-bid reason codes from the DSP, and ask the publisher for their sell-side view. Seat ID mismatches and bids set below the floor are the two most common causes.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <ArticleLayout
      title="Programmatic Deal Types Compared: PG, Preferred, PMP and Open Auction"
      author="Stillwater Media"
      date="August 22, 2026"
      readingTime="16 min read"
      category="Programmatic Strategy"
      image={imagePath}
      imageAlt="Stillwater Media illustration comparing programmatic deal types, showing four unmarked brass keys of descending size and polish arranged on dark honed slate"
      imageCaption="Four keys to the same room — each opens a different door, at a different price, with a different guarantee that it will open at all."
      schemaMarkup={schemaMarkup}
    >
      <p>
        There are four programmatic deal types, and the difference between them is not inventory quality — it is the
        order in which the publisher&apos;s ad server considers your bid, and what the publisher has promised you in
        exchange. The same mid-roll pod inside the same premium streaming app can be sold as programmatic guaranteed at a
        fixed $42 CPM, as a preferred deal at $34, inside a private marketplace at a $28 floor, or on the open auction
        where it clears at $17. The pixel is identical. The certainty is not.
      </p>
      <p>
        For a luxury advertiser with a defined flight, a limited budget and a media plan that has to hit specific
        households, that certainty is usually worth paying for — but not always, and not at every level. This is how we
        evaluate each of the four programmatic deal types at Stillwater Media, what each one actually costs, and how we
        mix them on a single plan.
      </p>

      <h2>The Four Programmatic Deal Types at a Glance</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Deal type</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Auction</th>
              <th>Typical premium CTV CPM</th>
              <th>Typical fill vs. booked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Programmatic guaranteed (PG)</td>
              <td>Fixed, negotiated</td>
              <td>Guaranteed impressions</td>
              <td>None — reservation</td>
              <td>$38–$65</td>
              <td>95–100%</td>
            </tr>
            <tr>
              <td>Preferred deal</td>
              <td>Fixed, negotiated</td>
              <td>Not guaranteed</td>
              <td>None — first look at fixed price</td>
              <td>$30–$48</td>
              <td>15–40%</td>
            </tr>
            <tr>
              <td>Private marketplace (PMP)</td>
              <td>Floor + auction</td>
              <td>Not guaranteed</td>
              <td>Invite-only auction</td>
              <td>$24–$45</td>
              <td>25–60%</td>
            </tr>
            <tr>
              <td>Open auction</td>
              <td>Auction only</td>
              <td>Not guaranteed</td>
              <td>Fully open RTB</td>
              <td>$14–$28</td>
              <td>Unbounded, uncurated</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Fill percentages are share of the impressions the buyer <em>targeted</em>, not share of a booked commitment —
        only PG carries a booked commitment. Ranges reflect premium streaming, publisher-direct video and high-index
        display in North America.
      </p>

      <h2>Priority, Not Price, Decides Which Ad Serves</h2>
      <p>
        The single most misunderstood mechanic in programmatic buying is that a higher bid does not automatically win.
        Publishers run a decision sequence in the ad server before the auction is ever consulted. In Google Ad
        Manager&apos;s numbering — where a lower number means higher priority — sponsorship line items sit at priority 4,
        standard reservations at 6 through 10, and everything non-guaranteed, including preferred deals, private auctions
        and the open auction, sits at priority 12. Programmatic guaranteed is trafficked as a reservation line item,
        which is why it clears ahead of a higher-priced PMP bid: it is competing on rank, not price. The practical
        implication for a luxury plan: if you need a specific pod position on a specific date, no PMP bid at any price
        will reliably get you there. You need a reservation.
      </p>

      <h2>Programmatic Guaranteed: Buying Certainty</h2>
      <p>
        Programmatic guaranteed is a directly negotiated insertion order executed through the pipes of the programmatic
        ecosystem. Impression volume, price, flight dates and placement are fixed in advance. It earns its premium for
        launch moments where a specific date and share of voice are the point, first-position pod placements in premium
        originals and live sport, sponsorship-adjacent formats, and any plan where delivery has been promised and the
        spend committed. What you give up is flexibility — PG impressions are non-cancellable inside a 14-to-30-day
        notice window, and you should expect a 25% to 60% CPM premium over the same publisher&apos;s PMP floor.
      </p>

      <h2>Preferred Deals: The First-Look Structure Nobody Uses Correctly</h2>
      <p>
        A preferred deal gives one buyer the right of first refusal on matching impressions at a fixed price, with no
        obligation to buy. Fill is typically 15% to 40% of targeted impressions, because most matching bid requests will
        not also match the buyer&apos;s audience and pacing filters at that moment. Buyers see low fill, conclude the
        deal is broken, and shut it down. Used correctly, a preferred deal is a hedge — the right structure when you want
        guaranteed access to a high-index audience at a known price without committing to volume you may not want. We use
        them most on wealth-indexed publisher supply where the addressable pool is small.
      </p>

      <h2>Private Marketplaces: The Workhorse</h2>
      <p>
        A private marketplace deal is an invite-only auction. The publisher assigns a deal ID, whitelists your DSP seat,
        sets a floor, and only bidders holding that deal ID compete. In the OpenRTB bid request this arrives as a{" "}
        <code>pmp</code> object containing a <code>deals</code> array — each deal carrying an <code>id</code>, a{" "}
        <code>bidfloor</code>, an auction type <code>at</code> (1 first price, 2 second price, 3 fixed price), and
        optional seat and domain restrictions.
      </p>
      <p>
        PMPs now carry the majority of premium video money — roughly 28% of all programmatic transactions but about 47%
        of connected TV spend, against roughly 15% of CTV spend on the open exchange. Across syndicated benchmarks, PMP
        inventory clears around a 2.1x CPM premium over open exchange while delivering roughly 92% viewability against
        71%, and invalid traffic near 1.2% against 8.7%. Adjusted for viewability and fraud, the effective cost per{" "}
        <em>usable</em> impression converges — which is the correct way to defend a PMP premium to a finance team.
      </p>

      <h2>Open Auction: The Honest Use Case</h2>
      <p>
        The open auction is not disreputable. It is unsuited to most of what a luxury brand is trying to do, which is a
        different claim. It is where an unbounded set of sellers compete, where made-for-advertising sites concentrate,
        and where the same impression is offered by four intermediaries at four prices. For a private aviation client,
        the open auction is where we retarget site visitors at $6 to $11 CPMs — a job it does well, because the audience
        is already qualified. What we do not do is run brand-defining video creative there.
      </p>

      <h2>How We Allocate Across the Four Deal Types</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Deal type</th>
              <th>Share of video budget</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Programmatic guaranteed</td>
              <td>20–30%</td>
              <td>Tentpole moments, first-position pods, guaranteed SOV</td>
            </tr>
            <tr>
              <td>Private marketplace</td>
              <td>45–60%</td>
              <td>Core premium reach, always-on curated supply</td>
            </tr>
            <tr>
              <td>Preferred deal</td>
              <td>5–15%</td>
              <td>First look at scarce high-index publisher audiences</td>
            </tr>
            <tr>
              <td>Open auction</td>
              <td>10–20%</td>
              <td>Retargeting, reach extension, frequency fill</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two constraints modify this. If the flight is shorter than four weeks, shift toward PG — auction-based deals need
        time to pace. If the addressable audience is under roughly 400,000 households, shift away from PG, because the
        guaranteed volume will force frequency past the point of diminishing return.
      </p>

      <h2>Five Structural Mistakes We See Repeatedly</h2>
      <ol>
        <li>
          <strong>Layering third-party audience segments on top of a curated PMP.</strong> The publisher already
          filtered the supply. Adding a $2.50 CPM data segment typically cuts deliverable scale by 60% to 80% while
          re-selecting for the same people.
        </li>
        <li>
          <strong>Setting a DSP bid below the deal floor.</strong> The deal shows zero spend and appears broken. Bid at
          or above the floor or the deal never enters the auction.
        </li>
        <li>
          <strong>Treating preferred deal fill rate as a performance metric.</strong> It is a structural property of
          first-look mechanics.
        </li>
        <li>
          <strong>Duplicating the same publisher across PG and PMP without a shared frequency strategy.</strong> Caps do
          not travel between deal types; households get hit twice.
        </li>
        <li>
          <strong>Accepting a deal ID without the seller&apos;s sellers.json entry and SupplyChain object.</strong> A
          deal ID confirms a handshake, not a direct path.
        </li>
      </ol>

      <h2>Diagnosing a Deal That Is Not Spending</h2>
      <ol>
        <li>Confirm the deal synced to the correct seat. Seat ID mismatches are the most common single cause.</li>
        <li>Check the deal&apos;s status in the DSP and confirm flight dates against the publisher&apos;s calendar.</li>
        <li>Compare your bid to the floor, including data and DSP fees that reduce the working bid the SSP receives.</li>
        <li>Remove all targeting layers except the deal ID for two hours. If spend appears, a targeting layer is the constraint.</li>
        <li>Pull no-bid reason codes — blocklists, brand safety pre-bid filters, creative format mismatches.</li>
        <li>Ask the publisher for their sell-side view; buy-side reporting cannot see impressions never sent.</li>
      </ol>

      <h2>Getting the Structure Right Before the Budget Moves</h2>
      <p>
        Choosing among programmatic deal types is a decision about how much of your outcome you want to guarantee in
        advance and what you are willing to pay for that guarantee, made per placement rather than per plan. A brand that
        puts 100% of its video budget into PG overpays for certainty it does not need; a brand that puts 100% into the
        open auction gets a plan that cannot be steered. If customer lifetime value exceeds $5,000, the deal structure
        behind your plan deserves the same scrutiny as the creative.
      </p>

      <h2>Work With Stillwater Media</h2>
      <p>
        Stillwater Media structures programmatic deals for luxury and high-consideration brands, matching reservation,
        private marketplace, preferred and open-auction supply to the job each placement actually has to do. We take a
        limited number of engagements each quarter. <a href="/apply">Apply to work with us →</a>
      </p>
    </ArticleLayout>
  )
}
