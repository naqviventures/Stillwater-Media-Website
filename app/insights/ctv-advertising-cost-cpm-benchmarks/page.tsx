import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const title = "CTV Advertising Cost: 2026 CPM Benchmarks by Platform"
const description =
  "What CTV advertising cost looks like in 2026 — CPM benchmarks by platform, the fee stack between budget and screen, and what luxury brands pay."
const slug = "ctv-advertising-cost-cpm-benchmarks"
const canonical = `https://www.stillwatermedia.io/insights/${slug}`
const image = `/images/${slug}.png`
const publishedTime = "2026-08-24T08:00:00-05:00"

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
      headline: "CTV Advertising Cost in 2026: CPM Benchmarks by Platform",
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
        "CTV advertising cost, CTV CPM benchmarks, connected TV advertising rates, streaming TV ad cost, Netflix advertising CPM, Prime Video ad rates, programmatic CTV pricing, premium CTV advertising, private marketplace deal pricing, working media ratio, affluent audience targeting cost",
      articleSection: "Media Buying & Benchmarks",
      wordCount: 2080,
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
          name: "What is the average CPM for CTV advertising in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The blended average CTV CPM in 2026 is approximately $26, with most campaigns transacting between $25 and $35 and the full market ranging from about $15 to $45. That average conceals a sharp split: commodity FAST and open-exchange inventory has fallen to $14–25, while premium streaming environments with affluent audience targeting hold at $40–65. Luxury advertisers should expect to buy in the upper portion of that range.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to advertise on Netflix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Netflix advertising costs roughly $20–30 CPM through programmatic private marketplace and programmatic guaranteed deals, and $45–65 CPM for direct buys negotiated with Netflix's sales team. The direct premium buys placement control, tentpole and launch-window access, and first-position pods. Programmatic access to Netflix inventory broadened substantially in 2025 and 2026, which narrowed the gap but did not close it.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my CTV CPM higher than the rate the publisher quoted?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Four fee layers sit between an advertiser's budget and the publisher's payout: agency fees of 8–20%, DSP fees of 6–15%, audience data fees of $1.50–6.00 CPM, and SSP take rates of 10–20%. Stacked, these can mean a $50 gross CPM delivers only $30–34 to the publisher. Track your working media ratio — the share of budget reaching publishers as paid inventory — and target 70–80% for a premium CTV program.",
          },
        },
        {
          "@type": "Question",
          name: "How much should a luxury brand budget for connected TV advertising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A meaningful market test runs $75,000 to $150,000 over a quarter, a sustained always-on program runs $40,000 to $100,000 per month, and a share-of-voice leadership position typically requires $150,000+ monthly across two DSPs. The right level depends on customer lifetime value: at an effective $45 CPM, $100,000 reaches roughly 550,000 affluent households at a 4x frequency, which is efficient for a six-figure-LTV category and expensive for a $600 AOV one.",
          },
        },
        {
          "@type": "Question",
          name: "Is a higher CTV CPM worth paying for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Frequently, yes — price in connected TV tracks how well a publisher can prove who is watching and how scarce the viewing moment is. A $68 CPM against a live golf broadcast reaching verified high-net-worth households will often deliver lower cost per incremental conversion than a $29 CPM against undisclosed general-entertainment supply. Judge inventory on cost per outcome rather than on media price, and never let CPM be the optimization target.",
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
      date="August 24, 2026"
      readingTime="16 min read"
      category="Media Buying & Benchmarks"
      image={image}
      imageAlt="Stillwater Media illustration of CTV advertising cost — a brass balance scale on slate weighing many small discs against one larger smoked-glass disc"
      imageCaption="The cheapest thousand impressions in connected TV and the most expensive thousand are rarely bought by the same advertiser for the same reason."
      schemaMarkup={articleSchema}
    >
      <p>
        Ask five vendors what CTV advertising cost looks like and you will get five numbers between $14 and $70, all of
        them defensible and none of them comparable. The spread is not vendor dishonesty. Connected TV advertising cost
        is a function of four independent variables — the publisher, the deal type, the audience layer and the fee stack
        — and most quotes disclose only one of them. This piece unpacks all four, gives current CPM benchmark ranges by
        platform, and offers a way to judge whether a $52 premium CTV buy is expensive or the cheapest thing on your
        plan.
      </p>
      <p>
        We buy connected TV for brands where customer lifetime value exceeds $5,000 — private aviation, wealth
        management, luxury real estate, private clubs, premium DTC. At those economics the question is never &quot;what
        is the lowest CPM available.&quot; It is &quot;what is the lowest CPM at which I still reach the household I need,
        in an environment I would be willing to appear in, with a signal clean enough to measure.&quot; Those are
        different questions with different answers, and the gap between them is often 3x.
      </p>

      <h2>What is the average CTV advertising cost in 2026?</h2>
      <p>
        The blended average CTV CPM across the US market currently sits near <strong>$26</strong>, with the bulk of
        campaigns transacting between <strong>$25 and $35</strong> and the full market spanning roughly{" "}
        <strong>$15 to $45</strong>. That blended figure is directionally useful and practically useless — it averages a
        Tubi FAST channel impression against a Netflix premium pod, which is like averaging the price of a hotel room in
        Charlotte with one in Aspen at Christmas.
      </p>
      <p>
        More useful is the segmentation that has emerged over the past eighteen months. As ad-supported tiers scaled
        across every major streamer, supply expanded faster than demand, and prices bifurcated rather than falling
        uniformly:
      </p>
      <ul>
        <li>
          <strong>Commodity streaming inventory</strong> — long-tail FAST channels, unnamed app supply, remnant
          open-exchange impressions — has settled at <strong>$14 to $25</strong> and is still under downward pressure.
        </li>
        <li>
          <strong>Mid-tier named-app inventory</strong> — the standard programmatic buy on Hulu, Peacock, Roku Channel,
          Paramount+ — transacts at <strong>$25 to $35</strong>.
        </li>
        <li>
          <strong>Premium and audience-targeted inventory</strong> — direct or curated access to Netflix, Disney+, Prime
          Video's higher tiers, live sport, and anything with a validated affluent overlay — holds firm at{" "}
          <strong>$40 to $65</strong>.
        </li>
      </ul>
      <p>
        The middle of that market is where most advertisers land by default and where the least strategic thinking
        usually happens.
      </p>

      <h2>CTV CPM benchmarks by platform</h2>
      <p>
        The table below reflects ranges we see in live negotiations and in delivered campaign reporting during 2026.
        Programmatic figures assume a private marketplace or programmatic guaranteed deal executed through a DSP; direct
        figures assume an insertion order negotiated with the publisher's sales team, typically with a minimum
        commitment.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Programmatic CPM</th>
              <th>Direct / premium CPM</th>
              <th>Notes for luxury advertisers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Netflix</td>
              <td>$20–30</td>
              <td>$45–65</td>
              <td>Programmatic access broadened materially in 2025–26; direct still commands the premium for launch and tentpole placement</td>
            </tr>
            <tr>
              <td>Disney+</td>
              <td>$28–40</td>
              <td>$45–60</td>
              <td>Strongest brand-safety posture of the major streamers; limited pod load protects attention</td>
            </tr>
            <tr>
              <td>Hulu</td>
              <td>$25–35</td>
              <td>$40–65</td>
              <td>Deepest audience-targeting toolkit in the Disney stack; wide quality range within the same app</td>
            </tr>
            <tr>
              <td>Prime Video</td>
              <td>$22–32</td>
              <td>$38–55</td>
              <td>CPMs compressed from roughly $35 to $28 within a year as the ad tier scaled by default</td>
            </tr>
            <tr>
              <td>Max</td>
              <td>$24–34</td>
              <td>$38–52</td>
              <td>Low ad load and prestige-drama adjacency suit heritage luxury positioning</td>
            </tr>
            <tr>
              <td>Peacock</td>
              <td>$20–30</td>
              <td>$35–50</td>
              <td>Live sport and Premier League inventory prices well above the app average</td>
            </tr>
            <tr>
              <td>Roku Channel</td>
              <td>$18–28</td>
              <td>$30–42</td>
              <td>Device-graph targeting is the real asset; content quality is uneven</td>
            </tr>
            <tr>
              <td>Paramount+</td>
              <td>$20–30</td>
              <td>$32–48</td>
              <td>NFL and UEFA inventory is a separate, much higher-priced market</td>
            </tr>
            <tr>
              <td>Tubi / FAST</td>
              <td>$12–22</td>
              <td>$22–32</td>
              <td>Reach at a price; rarely appropriate as a primary luxury environment</td>
            </tr>
            <tr>
              <td>Live sport (premium)</td>
              <td>$45–70</td>
              <td>$60–95</td>
              <td>The only CTV segment where scarcity, not supply, still sets the price</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two cautions on reading this table. First, <strong>a platform name is not an inventory guarantee.</strong>{" "}
        &quot;Hulu&quot; on a line item can mean a mid-roll inside a marquee original or a pre-roll on a library title at
        2 a.m.; the CPM often does not distinguish. Ask for content-level or genre-level reporting before you accept a
        rate as fair. Second, <strong>the sport line is real and it is where luxury dollars are increasingly going</strong>{" "}
        — a private aviation brand reaching a golf broadcast household at $68 is frequently outperforming the same brand
        reaching a general entertainment household at $29.
      </p>

      <h2>The four-layer fee stack: why your CTV advertising cost is not what the publisher receives</h2>
      <p>
        The single most consequential fact about CTV advertising cost is that the number you are quoted and the number
        the publisher is paid are different, sometimes by 40%. Four layers sit between them.
      </p>
      <ol>
        <li>
          <strong>Agency fee.</strong> Typically 8% to 20% of media, or a flat retainer. Retainers are more honest for
          luxury programs because they remove the incentive to spend more.
        </li>
        <li>
          <strong>DSP fee.</strong> Platform charges of 6% to 15% of media, plus, on some platforms, separate line items
          for data usage, bid shading or supply-path access.
        </li>
        <li>
          <strong>Data and audience fees.</strong> Third-party affluent or high-net-worth segments add{" "}
          <strong>$1.50 to $6.00 CPM</strong>. Modeled wealth segments sit at the low end; verified financial-behavior
          or property-value segments sit at the top.
        </li>
        <li>
          <strong>SSP and publisher-side take.</strong> Sell-side platforms retain 10% to 20% of what the DSP pays,
          before the publisher sees anything.
        </li>
      </ol>
      <p>
        Stacked, a $50 gross CPM can deliver $30 to $34 of value to the publisher. That difference does not vanish into
        fraud — it pays for real infrastructure — but it does mean two campaigns quoted at the same CPM can put wildly
        different amounts of money in front of an actual viewer.
      </p>
      <p>
        The metric worth tracking is the <strong>working media ratio</strong>: the share of total budget that reaches a
        publisher as paid inventory. For luxury CTV programs, a healthy ratio is <strong>70% to 80%</strong>. Below 65%,
        something in the chain needs renegotiating, and the usual culprit is a redundant reseller hop rather than the
        agency fee. Our analysis of{" "}
        <a href="/insights/supply-path-optimization-premium-advertising">supply path optimization</a> covers how to find
        and remove those hops.
      </p>

      <h2>How deal type changes the price</h2>
      <p>
        The same impression prices differently depending on how it is transacted, and the differences are structural
        rather than negotiable-on-the-day.
      </p>
      <ul>
        <li>
          <strong>Open exchange:</strong> cheapest headline CPM, weakest guarantees. Content-level transparency is often
          absent, and made-for-advertising supply is a persistent risk. Appropriate for broad reach extension;
          inappropriate as the core of a luxury plan.
        </li>
        <li>
          <strong>Private marketplace (PMP):</strong> an invite-only deal with a defined publisher and defined
          inventory, priced at a <strong>15% to 30% premium</strong> over open exchange for equivalent-looking supply.
          What you are buying is knowledge of where the ad ran.
        </li>
        <li>
          <strong>Programmatic guaranteed (PG):</strong> fixed volume, fixed price, no auction. Prices near direct rates
          but keeps DSP-side frequency management and measurement intact. For most luxury CTV programs this is the right
          default.
        </li>
        <li>
          <strong>Direct insertion order:</strong> highest price, best placement access, worst cross-platform frequency
          control. Justified for tentpoles, first-position pods and sponsorship formats that never reach the
          programmatic market.
        </li>
      </ul>
      <p>
        A useful discipline: hold PMP and PG deals to a <strong>content-report requirement</strong> as a condition of
        the buy. If a seller will not tell you which shows your ad ran against, the discount you thought you were getting
        is a discount on transparency. Deal-type mechanics in detail are in our breakdown of{" "}
        <a href="/insights/programmatic-deal-types-compared">programmatic deal types</a>.
      </p>

      <h2>What affluent audience targeting adds to CTV advertising cost</h2>
      <p>
        Every wealth-targeting layer narrows delivery and raises effective CPM twice — once through the data fee, once
        through the auction density created by other bidders chasing the same 4 million households.
      </p>
      <p>Rough incremental costs on top of a base CTV CPM:</p>
      <ul>
        <li>
          <strong>Modeled household income $250K+:</strong> +$1.50 to $2.50 CPM. Cheap, broad, and only moderately
          accurate — modeled income at the household level carries meaningful error.
        </li>
        <li>
          <strong>Verified investable assets $1M+:</strong> +$3.00 to $5.00 CPM. Substantially better precision, sourced
          from financial-behavior panels rather than census inference.
        </li>
        <li>
          <strong>Property-value and ownership signals:</strong> +$2.50 to $4.50 CPM. Strong for luxury real estate,
          private clubs and second-home categories.
        </li>
        <li>
          <strong>First-party customer match or CRM onboarding:</strong> +$0.50 to $1.50 CPM. Almost always the best
          value per dollar available, and the most under-used.
        </li>
        <li>
          <strong>Custom modeled seed audiences built from a first-party file:</strong> +$2.00 to $4.00 CPM, and
          typically the highest-performing layer for brands with 5,000+ known customers.
        </li>
      </ul>
      <p>
        The pattern is consistent across our client base: the cheapest audience layer to buy is the one you already own.
        Brands that arrive convinced they need to license expensive third-party wealth data usually find that a
        well-built <a href="/insights/wealth-based-audience-segmentation">wealth-based audience segmentation</a> model
        seeded on their own customer file outperforms it at a third of the cost.
      </p>
      <p>
        There is also a floor effect worth naming. Stacking four targeting layers onto a $2 million-household base can
        shrink addressable reach to 300,000 households, at which point CPMs rise, frequency becomes unmanageable and
        delivery stalls. We generally stop adding layers when projected reach falls below roughly 800,000 households for
        a national program.
      </p>

      <h2>What should a luxury brand actually budget?</h2>
      <p>
        Practical planning ranges for a national US connected TV program, assuming premium environments and an affluent
        audience layer:
      </p>
      <ul>
        <li>
          <strong>Market test, single quarter:</strong> $75,000 to $150,000. Enough to read directional lift in a
          defined geography, not enough to prove national incrementality.
        </li>
        <li>
          <strong>Sustained always-on program:</strong> $40,000 to $100,000 per month. This is the level at which
          frequency management, creative rotation and clean measurement all become possible simultaneously.
        </li>
        <li>
          <strong>Category-leading share of voice:</strong> $150,000+ per month, typically split across two DSPs with an
          independent measurement layer.
        </li>
      </ul>
      <p>
        At an effective $45 CPM, $100,000 buys about 2.2 million impressions. Against an affluent target at a 4x
        effective frequency, that is roughly 550,000 households reached. For a private aviation brand where a single
        membership conversion is worth six figures, the arithmetic is forgiving. For a $600 AOV premium DTC brand, it is
        not — and that brand should be buying mid-tier inventory with a broader audience definition and far more
        aggressive frequency discipline.
      </p>

      <h2>Four costly mistakes in CTV advertising cost management</h2>
      <ol>
        <li>
          <strong>Optimizing to CPM instead of cost per outcome.</strong> The lowest CPM on a plan is almost always the
          least valuable inventory on it. Judge lines on cost per incremental conversion, not on media price.
        </li>
        <li>
          <strong>Accepting undisclosed inventory to hit a CPM target.</strong> If a partner cannot name the app and
          content category, you are buying an average, and averages in CTV hide a long tail of very poor supply.
        </li>
        <li>
          <strong>Ignoring the fee stack while negotiating the rate card.</strong> A 12% saving on gross CPM is smaller
          than the 18% you can often recover by removing one reseller hop.
        </li>
        <li>
          <strong>Treating platform-reported performance as measurement.</strong> A walled garden grading its own
          delivery produces flattering numbers. Keep an independent read — the design principles are in our comparison
          of <a href="/insights/incrementality-vs-attribution-advertising">incrementality versus attribution</a>.
        </li>
      </ol>

      <h2>The honest answer to &quot;what does CTV cost&quot;</h2>
      <p>
        CTV advertising cost is best understood as a spectrum from roughly $14 to $95, where price tracks three things:
        how well the publisher can prove who is watching, how scarce the moment is, and how many intermediaries are
        standing between your budget and the screen. Luxury brands should expect to transact at the upper-middle of that
        range — <strong>$38 to $55 effective CPM</strong> for premium environments with a verified affluent layer — and
        should be far more concerned with their working media ratio and their measurement design than with shaving three
        dollars off a rate card.
      </p>
      <p>
        If you are building or auditing a connected TV program for a brand where customer lifetime value exceeds $5,000
        and the sales cycle runs beyond 30 days, <a href="/apply">apply to work with Stillwater Media</a>. We take a
        limited number of engagements each quarter, and the first thing we do on a CTV audit is rebuild the fee stack
        from the invoice up.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the average CPM for CTV advertising in 2026?</h3>
      <p>
        The blended average CTV CPM in 2026 is approximately $26, with most campaigns transacting between $25 and $35 and
        the full market ranging from about $15 to $45. That average conceals a sharp split: commodity FAST and
        open-exchange inventory has fallen to $14–25, while premium streaming environments with affluent audience
        targeting hold at $40–65. Luxury advertisers should expect to buy in the upper portion of that range.
      </p>
      <h3>How much does it cost to advertise on Netflix?</h3>
      <p>
        Netflix advertising costs roughly $20–30 CPM through programmatic private marketplace and programmatic guaranteed
        deals, and $45–65 CPM for direct buys negotiated with Netflix's sales team. The direct premium buys placement
        control, tentpole and launch-window access, and first-position pods. Programmatic access to Netflix inventory
        broadened substantially in 2025 and 2026, which narrowed the gap but did not close it.
      </p>
      <h3>Why is my CTV CPM higher than the rate the publisher quoted?</h3>
      <p>
        Four fee layers sit between an advertiser's budget and the publisher's payout: agency fees of 8–20%, DSP fees of
        6–15%, audience data fees of $1.50–6.00 CPM, and SSP take rates of 10–20%. Stacked, these can mean a $50 gross
        CPM delivers only $30–34 to the publisher. Track your working media ratio — the share of budget reaching
        publishers as paid inventory — and target 70–80% for a premium CTV program.
      </p>
      <h3>How much should a luxury brand budget for connected TV advertising?</h3>
      <p>
        A meaningful market test runs $75,000 to $150,000 over a quarter, a sustained always-on program runs $40,000 to
        $100,000 per month, and a share-of-voice leadership position typically requires $150,000+ monthly across two
        DSPs. The right level depends on customer lifetime value: at an effective $45 CPM, $100,000 reaches roughly
        550,000 affluent households at a 4x frequency, which is efficient for a six-figure-LTV category and expensive for
        a $600 AOV one.
      </p>
      <h3>Is a higher CTV CPM worth paying for?</h3>
      <p>
        Frequently, yes — price in connected TV tracks how well a publisher can prove who is watching and how scarce the
        viewing moment is. A $68 CPM against a live golf broadcast reaching verified high-net-worth households will often
        deliver lower cost per incremental conversion than a $29 CPM against undisclosed general-entertainment supply.
        Judge inventory on cost per outcome rather than on media price, and never let CPM be the optimization target.
      </p>
    </ArticleLayout>
  )
}
