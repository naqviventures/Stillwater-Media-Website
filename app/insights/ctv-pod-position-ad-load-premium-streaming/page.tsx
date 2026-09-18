import type { Metadata } from "next"
import { ArticleLayout } from "@/components/article-layout"

const canonicalUrl = "https://www.stillwatermedia.io/insights/ctv-pod-position-ad-load-premium-streaming"
const title = "CTV Pod Position and Ad Load: What Luxury Brands Pay For"
const description = "CTV pod position and ad load shape attention more than CPM does. First-in-pod premiums, ad-load benchmarks by platform, and how luxury brands should buy them."
const image = "/images/ctv-pod-position-ad-load-premium-streaming.png"
const imageAlt = "A luxury living room at dusk with a television showing one bright segment in a four-part bar, illustrating Stillwater Media's guide to CTV pod position and ad load on premium streaming platforms for luxury brands."
const publishedTime = "2026-09-18T09:00:00-04:00"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "CTV Pod Position and Ad Load: What Luxury Brands Should Actually Pay For on Premium Streaming",
    description: "The same $45 CPM buys a solo pre-roll on one platform and the third slot in a four-ad break on another. Ad-load and pod-position benchmarks for Disney+, Netflix, Prime Video, Peacock, Max and Hulu, and how to buy the good ones.",
    type: "article",
    url: canonicalUrl,
    siteName: "Stillwater Media",
    locale: "en_US",
    publishedTime,
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTV Pod Position and Ad Load: What Luxury Brands Pay For",
    description: "First position in a streaming ad pod carries 15 to 35 percent more attention than third. Ad loads range from under 4 minutes an hour to over 8. Benchmarks and buying tactics for luxury brands.",
    images: [{ url: image, alt: imageAlt }],
  },
}

const faqs = [
  {
    question: "What is CTV pod position and why does it matter?",
    answer: "CTV pod position is where an ad sits within a streaming commercial break, or \"pod,\" which on ad-supported streaming typically contains one to three ads on platforms like Netflix, Disney+ and Max and up to five or more on Hulu and FAST services. Because streaming pods are short, position concentrates the attention effect: attention studies put second position at roughly 85 to 95 percent of first position, third at 70 to 85 percent and fourth or later at 55 to 75 percent, driven largely by second-screen pickup after the first spot. For luxury brands whose creative needs to be watched in full, a plan that lands most impressions late in the pod is effectively running at a fraction of its planned frequency.",
  },
  {
    question: "How much do first-in-pod and solo ad pods cost on streaming?",
    answer: "Position products are priced as a premium over the platform's base CPM for the same audience and content tier. First-in-pod guarantees typically add 10 to 25 percent, solo-pod or single-ad-break formats add 25 to 50 percent, sponsored ad-free episodes add 50 to 100 percent, and category exclusion adds 5 to 15 percent, putting affluent-targeted all-in CPMs in the roughly $48 to $90 range outside Q4. Given that first position carries 15 to 30 percent more attention and recall than third, a first-in-pod premium is usually accretive on an attention-adjusted basis, while solo-pod premiums are best reserved for long-form narrative creative on reach-led plans.",
  },
  {
    question: "Which streaming platforms have the lightest ad loads?",
    answer: "Netflix, Disney+ and Max run the lightest loads among major ad-supported tiers, at roughly four to five minutes of ads per hour with pods of one to three ads. Prime Video runs about four to six minutes on originals and more on licensed content, Peacock about five to seven, and Hulu about eight to ten with pods of up to five ads. FAST platforms such as Tubi, Pluto TV and The Roku Channel run roughly nine to fourteen minutes per hour in pods of three to seven ads, which places them closer to linear television than to the SVOD ad tiers, and pod position there is rarely guaranteed.",
  },
  {
    question: "How do you guarantee first position in a CTV ad pod?",
    answer: "Pod position is a deal term negotiated with the publisher, not a setting in the DSP. Request the platform's ad-load figure and pod-length distribution before agreeing a rate, write first-in-pod or solo-pod into the deal terms under a separate deal ID, require competitive separation with named excluded categories, and verify delivery using the OpenRTB pod fields (`slotinpod` and `podseq`) or monthly publisher ad-server logs. Where position cannot be guaranteed, most publishers can still exclude pods above a given length, which removes the worst inventory at no premium.",
  },
  {
    question: "Does DSP competitive separation stop competitors from running in my pod?",
    answer: "No. A competitive-separation setting in a DSP only prevents your own line items from serving in the same pod; it has no control over other advertisers because only the publisher's ad server assembles the pod. To keep competitors and off-tone categories out, competitive separation and category exclusion must be written into a direct, programmatic-guaranteed or private-marketplace deal with the publisher, which is one of the main reasons luxury brands should buy premium CTV through publisher-side deals rather than the open exchange.",
  },
]

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "CTV Pod Position and Ad Load: What Luxury Brands Should Actually Pay For on Premium Streaming",
      description: "A buyer's guide to CTV pod position and ad load for luxury and high-consideration advertisers: how ad-pod structure differs across Disney+, Netflix, Prime Video, Peacock, Max, Hulu and FAST platforms, measured attention and recall differences by pod position, first-in-pod and solo-pod premiums, competitive separation, the ad-load figures that define premium inventory, and how to specify pod position in private marketplace deals.",
      image: {
        "@type": "ImageObject",
        url: `https://www.stillwatermedia.io${image}`,
        width: 1200,
        height: 630,
        caption: "Two impressions, same CPM, same show. One is the first thing the viewer sees. The other is the third thing they wait through.",
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
      keywords: "CTV pod position, first in pod premium CTV, streaming ad load by platform, ad pod structure connected TV, pod position attention lift, ad clutter streaming platforms, solo ad pod luxury brands, competitive separation CTV pods, premium CTV inventory quality, CTV pod length benchmarks, how to buy first position in ad pod",
      articleSection: "Premium CTV Strategy",
      wordCount: 2320,
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
      date="2026-09-18"
      readingTime="12 min read"
      category="Premium CTV Strategy"
      image={image}
      imageAlt={imageAlt}
      imageCaption="Two impressions, same CPM, same show. One is the first thing the viewer sees. The other is the third thing they wait through."
      schemaMarkup={schemaMarkup}
    >
      <p>Two impressions can carry the same $45 CPM, run in the same episode of the same prestige drama, reach the same $500K-income household, and be worth very different amounts of money. One is the only ad in a 30-second pre-roll before the episode starts. The other is the third of four spots in a mid-roll break, after a pharmaceutical ad and a fast-food ad, delivered to a viewer who has already reached for their phone. CTV pod position and ad load are the two variables that separate those impressions, and most luxury media plans do not specify either.</p>
      <p>This post is Stillwater Media&apos;s guide to how pod structure and ad load work on the major streaming platforms, what the attention and recall differences by position actually look like, what first-in-pod and solo-pod premiums cost, and how to write pod requirements into private marketplace deals so that a premium CPM buys a premium placement.</p>
      <h2>Ad pods and ad load on streaming: the basics</h2>
      <p>A pod is a commercial break. Its two defining properties are length (how many ads and how many seconds) and position (where a given ad sits within it). Ad load is the aggregate: minutes of advertising per hour of content, which determines both how many pods a viewer sees and how long each one runs.</p>
      <p>Linear television runs 14 to 18 minutes of ads per hour in pods of six to nine spots. Ad-supported streaming, by design, runs far lighter, and the differences between platforms are large enough to matter more than the CPM difference between them.</p>
      <table>
        <thead>
          <tr>
            <th>Platform (ad tier)</th>
            <th>Typical ad load (min/hour)</th>
            <th>Typical pod length</th>
            <th>Pre-roll structure</th>
            <th>Solo / first-position availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Netflix (Standard with ads)</td>
            <td>~4–5</td>
            <td>1–3 ads, 15–60 sec</td>
            <td>Short pre-roll, mid-rolls; frequent solo pre-rolls</td>
            <td>Yes, via PMP/PG; premiums apply</td>
          </tr>
          <tr>
            <td>Disney+ (Basic)</td>
            <td>~4–5</td>
            <td>1–3 ads</td>
            <td>Pre-roll plus limited mid-rolls</td>
            <td>Yes, through Disney Advertising deals</td>
          </tr>
          <tr>
            <td>Prime Video (default ad tier)</td>
            <td>~4–6 on originals, higher on licensed</td>
            <td>1–4 ads</td>
            <td>Pre-roll standard; mid-roll on longer content</td>
            <td>Yes, via Amazon DSP PG and guaranteed first-in-pod products</td>
          </tr>
          <tr>
            <td>Hulu (with ads)</td>
            <td>~8–10</td>
            <td>2–5 ads</td>
            <td>Pre-roll plus multiple mid-rolls</td>
            <td>Yes, including sponsored ad-free episode formats</td>
          </tr>
          <tr>
            <td>Peacock (Premium)</td>
            <td>~5–7</td>
            <td>2–4 ads</td>
            <td>Pre-roll plus mid-rolls; "Solo Ad" format</td>
            <td>Yes, named product</td>
          </tr>
          <tr>
            <td>Max (Basic with ads)</td>
            <td>~4</td>
            <td>1–3 ads</td>
            <td>Limited pre-roll, light mid-roll</td>
            <td>Yes, through Warner Bros. Discovery direct</td>
          </tr>
          <tr>
            <td>FAST (Tubi, Pluto TV, Roku Channel)</td>
            <td>~9–14</td>
            <td>3–7 ads</td>
            <td>Pre-roll plus dense mid-rolls</td>
            <td>Limited; position rarely guaranteed</td>
          </tr>
        </tbody>
      </table>
      <p>Two things stand out. The three platforms with the lightest loads - Netflix, Disney+ and Max - are also the ones most luxury buyers already pay a premium for, which means part of that premium is buying lower clutter whether the plan says so or not. And FAST inventory, which has become the volume play in many "premium CTV" plans, carries ad loads approaching linear television, with pod lengths that make position a lottery.</p>
      <h2>Why pod position matters more on streaming than it did on linear</h2>
      <p>On linear, a nine-spot pod diffuses the position effect: the difference between position two and position five is real but small, because the viewer has usually disengaged by either. On streaming, pods of one to three spots concentrate it. First position in a two-ad pod is, effectively, the pod.</p>
      <p>Attention measurement makes this concrete. Across the eye-tracking and attention-panel studies we have reviewed from TVision, Adelaide and platform-run research, and in our own attention-weighted lift reads, the pattern for streaming pods is consistent:</p>
      <table>
        <thead>
          <tr>
            <th>Pod position</th>
            <th>Attention index vs. first position</th>
            <th>Unaided recall delta vs. first position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Solo pod (only ad)</td>
            <td>105–120</td>
            <td>+10 to +25 percent</td>
          </tr>
          <tr>
            <td>First in pod (2+ ads)</td>
            <td>100 (baseline)</td>
            <td>Baseline</td>
          </tr>
          <tr>
            <td>Second in pod</td>
            <td>85–95</td>
            <td>–5 to –15 percent</td>
          </tr>
          <tr>
            <td>Third in pod</td>
            <td>70–85</td>
            <td>–15 to –30 percent</td>
          </tr>
          <tr>
            <td>Fourth or later</td>
            <td>55–75</td>
            <td>–25 to –45 percent</td>
          </tr>
        </tbody>
      </table>
      <p>The mechanism is partly attention decay within the break and partly device behavior: second-screen pickup on streaming breaks rises sharply after the first spot, and by the third spot a meaningful share of the room is looking at a phone. The ad is still "viewable" by any measurement standard; the viewer simply is not viewing it.</p>
      <p>For a luxury brand this matters twice over. The category&apos;s creative depends on being watched in full with some attention; a private aviation or luxury real estate film that is glanced at for four seconds has not done its job. And the household-level frequency plan assumes each exposure carries a certain weight. Pod position quietly reweights every exposure, and a plan that lands 60 percent of its impressions at position three or later is running at something like three-quarters of its planned effective frequency.</p>
      <h2>Pre-roll, mid-roll and the "first thing you see" problem</h2>
      <p>Position within the pod is one axis; position within the content is another. Pre-roll pods run before the episode, mid-rolls interrupt it, and on a few platforms post-roll follows it.</p>
      <p>Pre-roll on streaming has a specific advantage: the viewer has just chosen to watch something and is at peak intent to sit down and pay attention. Solo pre-rolls - a single 15- or 30-second spot before the content - are the highest-attention placement on any ad-supported platform, and Netflix and Disney+ both run them regularly. Mid-roll pods, by contrast, interrupt engaged viewing, which raises attention at the moment of interruption and then drops it fast; the first mid-roll spot performs well, later ones poorly.</p>
      <p>The practical hierarchy we use for luxury creative, best to worst, is solo pre-roll, first-in-pod pre-roll, first-in-pod mid-roll, solo mid-roll on short pods, then everything else. Post-roll is not bought.</p>
      <h2>Competitive separation and category adjacency</h2>
      <p>A pod&apos;s <em>contents</em> matter alongside its length. Luxury brands are unusually sensitive to adjacency: a $400 tasting-menu restaurant following a discount-mattress ad is a mismatch the viewer notices, and a wealth-management ad running immediately after a competitor&apos;s is a gift to the competitor. Two protections exist:</p>
      <ul>
        <li><strong>Competitive separation</strong> ensures no two advertisers in the same category run in the same pod. Most premium publishers offer it as standard on direct and PG deals and as a negotiable on PMP; it is rarely available on open-exchange CTV.</li>
        <li><strong>Category exclusion</strong> goes further, blocking specific categories from the pod entirely. This is a direct-deal term and typically carries a premium of 5 to 15 percent, which for luxury brands is nearly always worth paying on the small share of inventory where it is available.</li>
      </ul>
      <p>Neither is enforced automatically across platforms. A DSP-level competitive-separation setting protects against your own line items colliding, not against another advertiser&apos;s; only the publisher&apos;s ad server can enforce it at the pod level. This is one of the reasons we buy premium CTV predominantly through publisher-side deals rather than open auction, a topic covered in our comparison of <a href="/insights/programmatic-deal-types-compared">programmatic deal types</a>.</p>
      <h2>What first-in-pod and solo pods cost</h2>
      <p>Position products are priced as a premium over the platform&apos;s base CPM for the same audience and content tier. Benchmarks from the deals we have negotiated and seen across the affluent-targeted market:</p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Premium over base CPM</th>
            <th>Typical all-in CPM range (affluent targeting, Q1–Q3)</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First-in-pod guarantee</td>
            <td>+10 to +25 percent</td>
            <td>$48–$70</td>
            <td>Broad on PG/direct; selective on PMP</td>
          </tr>
          <tr>
            <td>Solo pod / single-ad break</td>
            <td>+25 to +50 percent</td>
            <td>$55–$90</td>
            <td>Named products on Peacock, Hulu, Disney+, Netflix; scarce</td>
          </tr>
          <tr>
            <td>Sponsored ad-free episode / "brought to you by"</td>
            <td>+50 to +100 percent</td>
            <td>$75–$120 effective</td>
            <td>Hulu, Peacock, Max, select Disney+ titles</td>
          </tr>
          <tr>
            <td>Pre-roll only (no mid-roll)</td>
            <td>+5 to +15 percent</td>
            <td>$45–$65</td>
            <td>Broad</td>
          </tr>
          <tr>
            <td>Competitive separation</td>
            <td>+0 to +10 percent</td>
            <td>Base to $60</td>
            <td>Standard on direct/PG</td>
          </tr>
          <tr>
            <td>Category exclusion</td>
            <td>+5 to +15 percent</td>
            <td>$48–$70</td>
            <td>Direct only</td>
          </tr>
        </tbody>
      </table>
      <p>Q4 pricing runs 20 to 40 percent higher across all rows, and solo-pod products in particular sell out in upfront and early scatter. Our note on <a href="/insights/luxury-holiday-advertising-q4-cpm">luxury holiday advertising and Q4 CPMs</a> covers the seasonal math.</p>
      <p>Whether the premium is worth it is an arithmetic question. If first position carries roughly 15 to 30 percent more attention and recall than position three, a first-in-pod premium of 10 to 25 percent is at worst neutral and usually accretive on an attention-adjusted or lift-adjusted cost basis. Solo-pod premiums of 25 to 50 percent are justified when the creative is long-form narrative that needs full attention and when the plan is reach-led rather than frequency-led; they are harder to justify for :15 cutdowns at high frequency.</p>
      <h2>How to specify pod position in a PMP or PG deal</h2>
      <p>Pod position is a deal term, not a DSP setting. The steps we follow:</p>
      <ol>
        <li><strong>Ask for the pod structure before the rate.</strong> Get the publisher&apos;s ad-load figure, average and maximum pod length, and the share of impressions that are pre-roll versus mid-roll for the content tier you are buying. A publisher that will not disclose pod length is telling you something.</li>
        <li><strong>Specify position in the deal ID.</strong> First-in-pod or solo-pod should be written into the deal terms and reflected in a separate deal ID so delivery can be verified. A verbal "we&apos;ll prioritize you" is not a guarantee.</li>
        <li><strong>Require competitive separation and name the excluded categories.</strong> For most luxury clients this list is short: direct competitors, discount retail, gambling, and a handful of adjacencies the brand considers off-tone.</li>
        <li><strong>Verify with the pod-position signal.</strong> OpenRTB carries pod position and pod length fields (the `slotinpod` and `podseq` signals in the video object) that the publisher can pass and the DSP can log. Insist on it. Where the field is not passed, ad-server logs from the publisher can substitute monthly.</li>
        <li><strong>Cap exposure to long pods.</strong> Even on platforms where position cannot be guaranteed, most publishers can exclude pods above a given length (for example, no pods of more than three ads). This alone removes the worst inventory at no premium.</li>
        <li><strong>Weight the plan toward the pod, not just the platform.</strong> A first-in-pod PMP on Peacock is often a better luxury placement than an unguaranteed position on a lighter-load platform. Buy the placement, not the logo.</li>
      </ol>
      <p>The negotiation leverage here is the same as it is throughout premium CTV: publishers value affluent-targeted, brand-safe, long-flight advertisers, and pod-level terms are one of the concessions they can offer without cutting rate. Our overview of <a href="/insights/private-marketplace-deals-luxury-advertising">private marketplace deals for luxury advertisers</a> covers the broader negotiation.</p>
      <h2>Measuring the effect of pod position</h2>
      <p>Pod position is one of the easier CTV variables to measure because the publisher logs it. The protocol is a matched comparison: hold audience, creative, platform and daypart constant, split by logged pod position, and compare attention (where an attention vendor is on the plan), brand-lift survey response and incremental site visits from a clean-room match. Sample sizes are usually adequate within a quarter on any plan above roughly $250,000 per platform.</p>
      <p>Three findings from running this on luxury plans:</p>
      <ul>
        <li>First-in-pod on prestige drama and documentary content outperforms position three or later by 20 to 35 percent on unaided recall and by 10 to 20 percent on incremental site visits, with the larger deltas on longer creative.</li>
        <li>Solo pre-rolls on Netflix and Disney+ originals produce the highest attention-per-dollar of any CTV placement we buy, even after the premium, for :30 and :60 narrative creative.</li>
        <li>Pod-length caps (no pods over three ads) on mixed-inventory PMPs recover 8 to 15 percent of effective frequency at zero premium, which is often the single cheapest improvement available on a plan.</li>
      </ul>
      <p>Our post on <a href="/insights/advertising-attention-metrics-luxury-brands">attention metrics for luxury video</a> goes deeper on the measurement side.</p>
      <h2>Common mistakes</h2>
      <ul>
        <li><strong>Buying "premium CTV" by platform name and ignoring pod terms.</strong> The platform logo does not guarantee position.</li>
        <li><strong>Treating FAST as interchangeable with SVOD ad tiers.</strong> Ad loads of 9 to 14 minutes and pods of up to seven ads put FAST closer to linear than to Netflix, and the CPM discount rarely covers the attention gap for luxury creative.</li>
        <li><strong>Relying on DSP competitive separation.</strong> It protects against your own line items, not other advertisers.</li>
        <li><strong>Paying solo-pod premiums for :15 cutdowns.</strong> The premium is for attention on creative that needs it.</li>
        <li><strong>Never asking for the pod-position log.</strong> If it is not logged, it cannot be verified, and unverified guarantees drift.</li>
        <li><strong>Ignoring pod length caps because position cannot be guaranteed.</strong> Excluding long pods is available almost everywhere and costs nothing.</li>
      </ul>
      <h2>Where Stillwater Media fits</h2>
      <p>Stillwater Media buys premium CTV on Disney+, Netflix, Prime Video, Hulu, Peacock and Max through publisher-side PMP and programmatic-guaranteed deals with pod position, pod-length caps and competitive separation written into the terms and verified against logs. We plan affluent household reach on the pod, not the platform, and measure it with attention data and clean-room lift. We accept a limited number of new engagements each quarter. If your CTV plan pays a premium CPM without specifying what position it buys, we should talk. <a href="/apply">Apply to work with Stillwater Media</a>.</p>
    </ArticleLayout>
  )
}
