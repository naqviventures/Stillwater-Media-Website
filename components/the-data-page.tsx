// @ts-nocheck
"use client"

import { useEffect } from "react"
import "./the-data.css"

/**
 * The Data — Stillwater Media
 * Scroll-driven, black/white data narrative. All graphics are inline SVG built
 * imperatively in the effect below so the timings match the approved preview exactly.
 * Fonts: Instrument Serif, Instrument Sans, IBM Plex Mono (loaded via next/font on the route).
 */
export function TheData() {
  useEffect(() => {
    /* eslint-disable */
    const ac = new AbortController()
    const signal = ac.signal
    // reset anything a previous run (React strict-mode double mount) left behind
    document.querySelectorAll(".td svg[id]").forEach((x) => {
      x.innerHTML = ""
    })
    const feedEl = document.getElementById("feed")
    if (feedEl) feedEl.innerHTML = ""
    document.querySelectorAll(".td .chip.on,.td .row.off,.td section.in").forEach((x) => x.classList.remove("on", "off", "in"))
    let feedTimer = null

    const NS = "http://www.w3.org/2000/svg"
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
    const el = (t, a = {}) => {
      const e = document.createElementNS(NS, t)
      for (const k in a) e.setAttribute(k, a[k])
      return e
    }
    const ease = (t) => 1 - Math.pow(1 - t, 3)
    function countTo(node, from, to, dur, fmt) {
      if (reduce) {
        node.textContent = fmt(to)
        return
      }
      const t0 = performance.now()
      ;(function f(n) {
        const p = Math.min(1, (n - t0) / dur)
        node.textContent = fmt(from + (to - from) * ease(p))
        if (p < 1) requestAnimationFrame(f)
      })(t0)
    }
    const f1 = (v) => v.toFixed(1),
      fi = (v) => Math.round(v).toLocaleString()

    // dot grid helper: cols x rows grid of r=5 dots in a 300-wide box
    function grid(svg, count, cols, opts = {}) {
      const gap = 300 / cols
      const dots = []
      for (let i = 0; i < count; i++) {
        const c = i % cols,
          r = Math.floor(i / cols)
        const d = el("circle", { cx: gap * c + gap / 2, cy: gap * r + gap / 2, r: opts.r || 5.2, class: "dot" })
        d.style.transitionDelay = (opts.delay ? opts.delay(i, c, r) : (c + r) * 22) + "ms"
        svg.appendChild(d)
        dots.push(d)
      }
      return dots
    }

    // S0
    const d0 = grid(document.getElementById("g0"), 236, 12, { delay: (i, c, r) => (c + r) * 40 })
    // hero: kick off after first paint so the dot wave and count-up are visible
    document.getElementById("n0").textContent = "0.0"
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document.getElementById("s0").classList.add("in")
        setTimeout(() => countTo(document.getElementById("n0"), 0, 23.6, 1800, f1), 150)
      }),
    )

    // S1 house + dim 90 (from bottom up)
    const g1 = document.getElementById("g1")
    const d1 = grid(g1, 236, 12, { delay: () => 0 })
    const house = el("path", { d: "M110 250 L150 212 L190 250 M120 240 V292 H180 V240", class: "draw", pathLength: 1 })
    house.style.strokeWidth = 2
    house.style.filter = "drop-shadow(0 0 8px rgba(255,255,255,.5))"
    const bg1 = el("rect", { x: 98, y: 200, width: 104, height: 104, fill: "#000", opacity: 0.92, rx: 4 })
    g1.appendChild(bg1)
    g1.appendChild(house)
    g1.appendChild(el("line", { x1: 104, y1: 298, x2: 196, y2: 206, class: "strike", pathLength: 1 }))
    for (let i = 0; i < 90; i++) {
      const d = d1[235 - i]
      d.classList.add("off")
      d.style.transitionDelay = 1300 + i * 12 + "ms"
    }

    // S2 block of 146 with frame
    const g2 = document.getElementById("g2")
    const d2 = grid(g2, 146, 12, { delay: (i) => i * 7 })
    g2.appendChild(el("rect", { x: 2, y: 2, width: 296, height: 325, class: "frame", pathLength: 1 }))
    const type2 = document.getElementById("type2"),
      txt2 = "14.6M addressable households"

    // S3 split block
    const g3 = document.getElementById("g3")
    const cols3 = 12
    const d3 = []
    for (let i = 0; i < 146; i++) {
      const c = i % cols3,
        r = Math.floor(i / cols3)
      const x = c < 6 ? c * 23 + 12 : c * 23 + 30
      const y = r * 25 + 14
      const d = el("circle", { cx: x, cy: y, r: 5, class: "dot" })
      d.style.transitionDelay = i * 6 + "ms"
      g3.appendChild(d)
      d3.push(d)
    }
    g3.appendChild(el("line", { x1: 159, y1: 0, x2: 159, y2: 320, class: "draw", pathLength: 1 }))
    ;[
      ["35–44", 60],
      ["45–54", 135],
      ["55–64", 210],
      ["65+", 285],
    ].forEach(([t, y]) => {
      const tx = el("text", {
        x: 300,
        y: y + 4,
        "text-anchor": "end",
        "font-family": "IBM Plex Mono, monospace",
        "font-size": "9",
        "letter-spacing": "1.5",
        fill: "rgba(255,255,255,.55)",
      })
      tx.textContent = t.toUpperCase()
      g3.appendChild(tx)
      g3.appendChild(el("line", { x1: 0, y1: y + 22, x2: 245, y2: y + 22, class: "frame", pathLength: 1 }))
    })

    // S4 US dot map
    const US = [
      "........................................",
      "..........................xx............",
      "xxxxxxx...................xxxxx.........",
      "xxxxxxxxxxxxxxxxxxx.......xxxxxxxx......",
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...",
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx..",
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx....",
      ".xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.....",
      ".xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......",
      "..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.......",
      "..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx........",
      "...xxxxxxxxxxxxxxxxxxxxxxxxxxxx.........",
      "....xxxxxxxxxxxxxxxxxxxxxxxxxx..........",
      ".....xxxxxxxxxxxxxxxxxxxxxxxxx..........",
      "......xxxxxxxxxxxxxxxxxxxxxxxxx.........",
      ".......xxxxxxx...xxxxxxxxxxxxxxx........",
      "..........xxxx.....xxxxx.....xxx........",
      "...........xx..............xxx..........",
      "...........x................xx..........",
      ".............................x..........",
    ]
    const g4 = document.getElementById("g4")
    const cell = 10
    US.forEach((row, r) =>
      [...row].forEach((ch, c) => {
        if (ch === "x") {
          const d = el("circle", { cx: c * cell + 5, cy: r * cell + 5, r: 2.6, class: "dot map" })
          d.style.transitionDelay = (c + r) * 10 + "ms"
          g4.appendChild(d)
        }
      }),
    )
    const DMAS = [
      ["New York", 33, 6],
      ["Charlotte", 31, 10],
      ["Palm Beach", 30, 17],
      ["Dallas–Fort Worth", 20, 13],
      ["Scottsdale", 9, 12],
      ["Naples", 29, 18],
      ["Bay Area", 2, 9],
    ]
    const dmaNodes = DMAS.map(([n, c, r]) => {
      const g = el("g", { opacity: 0 })
      const x = c * cell + 5,
        y = r * cell + 5
      g.appendChild(el("circle", { cx: x, cy: y, r: 3.2, fill: "#fff", class: "glow" }))
      const ring = el("circle", { cx: x, cy: y, r: 4, fill: "none", stroke: "#fff", "stroke-width": 1 })
      g.appendChild(ring)
      const t = el("text", { x: x + 8, y: y - 6, "font-family": "IBM Plex Mono, monospace", "font-size": "8", "letter-spacing": "1", fill: "#fff" })
      t.textContent = n.toUpperCase()
      g.appendChild(t)
      g4.appendChild(g)
      return { g, ring, x, y }
    })
    const radius = el("circle", {
      cx: 31 * cell + 5,
      cy: 10 * cell + 5,
      r: 26,
      fill: "none",
      stroke: "rgba(255,255,255,.6)",
      "stroke-width": 1,
      "stroke-dasharray": "3 3",
      opacity: 0,
    })
    g4.appendChild(radius)
    const rl = el("text", {
      x: 31 * cell + 5,
      y: 10 * cell + 5 + 38,
      "text-anchor": "middle",
      "font-family": "IBM Plex Mono, monospace",
      "font-size": "8",
      "letter-spacing": "1.5",
      fill: "rgba(255,255,255,.7)",
      opacity: 0,
    })
    rl.textContent = "30 MI RADIUS"
    g4.appendChild(rl)

    // S6 radar
    const g6 = document.getElementById("g6")
    ;[40, 85, 130].forEach((r) =>
      g6.appendChild(el("circle", { cx: 150, cy: 150, r, fill: "none", stroke: "rgba(255,255,255,.18)", "stroke-width": 1 })),
    )
    g6.appendChild(el("line", { x1: 20, y1: 150, x2: 280, y2: 150, stroke: "rgba(255,255,255,.12)" }))
    g6.appendChild(el("line", { x1: 150, y1: 20, x2: 150, y2: 280, stroke: "rgba(255,255,255,.12)" }))
    const sw = el("g", { class: "sweep" })
    sw.appendChild(el("path", { d: "M150 150 L150 20 A130 130 0 0 1 215 37 Z", fill: "rgba(255,255,255,.12)" }))
    sw.appendChild(el("line", { x1: 150, y1: 150, x2: 150, y2: 20, stroke: "#fff", "stroke-width": 1.2 }))
    g6.appendChild(sw)
    const INTENT = [
      ["Wealth mgmt", 40, -70],
      ["Private aviation", 70, -40],
      ["Golf", 30, 60],
      ["Luxury retail", -45, 80],
      ["Real estate", -100, -20],
      ["Auto", -30, -105],
      ["Travel", 60, 100],
    ]
    const intentNodes = INTENT.map(([n, dx, dy]) => {
      const g = el("g", { opacity: 0 })
      g.appendChild(el("circle", { cx: 150 + dx, cy: 150 + dy, r: 3, fill: "#fff", class: "glow" }))
      const t = el("text", {
        x: 150 + dx + 7,
        y: 150 + dy + 3,
        "font-family": "IBM Plex Mono, monospace",
        "font-size": "8.5",
        "letter-spacing": "1.2",
        fill: "#fff",
      })
      t.textContent = n.toUpperCase()
      g.appendChild(t)
      g6.appendChild(g)
      return g
    })
    const FEED = [
      "hash:7f3a91… → in-market: <b>private aviation</b> ↑",
      "hash:c04e2b… → in-market: <b>wealth management</b> ↑",
      "hash:19bd7c… → in-market: <b>golf equipment</b> →",
      "hash:e8a1f0… → in-market: <b>luxury retail</b> ↑",
      "hash:52c9d4… → in-market: <b>real estate</b> ↑",
      "hash:b7e33a… → in-market: <b>travel</b> →",
      "hash:3d6f8e… → in-market: <b>auto</b> ↑",
    ]

    // S7 funnel lines
    const g7 = document.getElementById("g7")
    g7.appendChild(el("path", { d: "M0 2 L300 2 L200 58 L100 58 Z", class: "draw", pathLength: 1 }))

    // observer + per-section scripts
    const ran = {}
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return
          const s = e.target
          s.classList.add("in")
          const id = s.id
          if (ran[id]) return
          ran[id] = 1
          if (id === "s1") setTimeout(() => countTo(document.getElementById("n1"), 23.6, 14.6, 1400, f1), 1300)
          if (id === "s2") {
            let i = 0
            const tick = () => {
              type2.textContent = txt2.slice(0, ++i).toUpperCase()
              if (i < txt2.length) setTimeout(tick, reduce ? 0 : 32)
            }
            setTimeout(tick, 800)
          }
          if (id === "s3") {
            const chips = [...document.querySelectorAll("#chips3 .chip[data-g]")]
            const seq = [0, 3, 4, 6]
            seq.forEach((ci, k) =>
              setTimeout(() => {
                chips[ci].classList.add("on")
                recalc3()
              }, 1200 + k * 800),
            )
          }
          if (id === "s4") {
            const chips = [...document.querySelectorAll("#chips4 .chip[data-d]")]
            dmaNodes.forEach((d, k) =>
              setTimeout(() => {
                chips[k].classList.add("on")
                setDMA(k, true)
              }, 900 + k * 550),
            )
            setTimeout(
              () => {
                setRadius(true)
                chips[7].classList.add("on")
              },
              900 + 7 * 550 + 300,
            )
          }
          if (id === "s5") {
            const rows = [...document.querySelectorAll("#ledger .row")]
            rows.forEach((r, k) =>
              setTimeout(() => {
                n5.textContent = k + 1 + " / 6"
              }, 400 + k * 220),
            )
          }
          if (id === "s6") {
            const n6 = document.getElementById("n6")
            intentNodes.forEach((g, k) =>
              setTimeout(
                () => {
                  g.setAttribute("opacity", 1)
                  countTo(n6, k * 1180, (k + 1) * 1180, 500, fi)
                },
                600 + k * 520,
              ),
            )
            const feed = document.getElementById("feed")
            let k = 0
            const push = () => {
              const d = document.createElement("div")
              d.innerHTML = FEED[k++ % FEED.length]
              feed.prepend(d)
              while (feed.children.length > 8) feed.lastChild.remove()
            }
            push()
            push()
            push()
            feedTimer = setInterval(push, reduce ? 4000 : 1400)
          }
          if (id === "s7") setTimeout(() => countTo(document.getElementById("n7"), 0, 41200, 1600, (v) => Math.round(v / 100) / 10 + "K"), 400)
        }),
      { threshold: 0.35 },
    )
    document.querySelectorAll(".td section").forEach((s) => io.observe(s))
    // ledger row stagger via CSS var
    document.querySelectorAll("#ledger .row").forEach((r, k) => {
      r.style.setProperty("--d", k)
      r.querySelector("span").style.transitionDelay = k * 120 + "ms"
    })
    // Layer 1 interactive model
    let v3 = 14.6
    const n3 = document.getElementById("n3")
    function recalc3() {
      const groups = {}
      document.querySelectorAll("#chips3 .chip[data-g].on").forEach((c) => {
        const g = c.dataset.g
        groups[g] = (groups[g] || 0) + Number.parseFloat(c.dataset.w)
      })
      let f = 1
      for (const g in groups) f *= Math.min(1, groups[g])
      const nv = 14.6 * f
      countTo(n3, v3, nv, 600, (x) => (x < 1 ? Math.round(x * 1000) + "K" : x.toFixed(1) + "M"))
      v3 = nv
      const keep = Math.round(146 * f)
      d3.forEach((d, i) => d.classList.toggle("off", i >= keep))
    }
    document.querySelectorAll("#chips3 .chip[data-g]").forEach((c) =>
      c.addEventListener(
        "click",
        () => {
          c.classList.toggle("on")
          recalc3()
        },
        { signal },
      ),
    )
    // Layer 2 interactive map
    const n4 = document.getElementById("n4")
    function pulse(d) {
      if (reduce) return
      const r = d.ring
      const t0 = performance.now()
      ;(function p(n) {
        const q = Math.min(1, (n - t0) / 900)
        r.setAttribute("r", 4 + 18 * q)
        r.setAttribute("opacity", 1 - q)
        if (q < 1) requestAnimationFrame(p)
      })(t0)
    }
    function setDMA(k, on) {
      dmaNodes[k].g.setAttribute("opacity", on ? 1 : 0)
      if (on) pulse(dmaNodes[k])
      n4.textContent = String(dmaNodes.filter((d) => d.g.getAttribute("opacity") === "1").length).padStart(2, "0")
    }
    function setRadius(on) {
      radius.setAttribute("opacity", on ? 1 : 0)
      rl.setAttribute("opacity", on ? 1 : 0)
    }
    document.querySelectorAll("#chips4 .chip[data-d]").forEach((c) =>
      c.addEventListener(
        "click",
        () => {
          const on = c.classList.toggle("on")
          c.dataset.d === "r" ? setRadius(on) : setDMA(+c.dataset.d, on)
        },
        { signal },
      ),
    )
    // Layer 3 toggle rows
    const n5 = document.getElementById("n5")
    document.querySelectorAll("#ledger .row").forEach((r) =>
      r.addEventListener(
        "click",
        () => {
          r.classList.toggle("off")
          n5.textContent = document.querySelectorAll("#ledger .row:not(.off)").length + " / 6"
        },
        { signal },
      ),
    )
    // spine
    const sd = document.getElementById("spineDot")
    const onScroll = () => {
      const h = document.documentElement
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight)
      sd.style.transform = `translateY(${p * (innerHeight - 8)}px)`
    }
    addEventListener("scroll", onScroll, { passive: true, signal })

    return () => {
      io.disconnect()
      ac.abort()
      if (feedTimer) clearInterval(feedTimer)
    }
    /* eslint-enable */
  }, [])

  return (
    <div className="td">
      <div className="spine" aria-hidden="true">
        <i id="spineDot"></i>
      </div>

      <section className="hero wrap" id="s0" aria-labelledby="h0">
        <div className="beat">
          <div className="copy">
            <p className="eyebrow">The Stillwater data stack</p>
            <h1 id="h0">
              <span className="num" id="n0">
                0.0
              </span>{" "}
              million Americans are <em>millionaires.</em>
            </h1>
            <p className="sub">
              One in ten adults. More than <strong>40%</strong> of every millionaire on Earth lives here, and the country minted{" "}
              <strong>440,000</strong> more of them last year.
            </p>
            <p className="fn">
              <sup>1</sup> UBS Global Wealth Report 2026. Net worth $1M+, including primary residence, year-end 2025.
            </p>
          </div>
          <div className="gfx">
            <svg id="g0" viewBox="0 0 300 500" aria-label="236 dots, each representing 100,000 American millionaires"></svg>
            <div className="cap">
              <span>Each dot = 100,000 people</span>
              <b>236 dots</b>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" id="s1" aria-labelledby="h1">
        <div className="beat">
          <div className="copy">
            <p className="eyebrow">Minus the house</p>
            <h2 id="h1">
              Take away the house.{" "}
              <span className="num" id="n1">
                23.6
              </span>{" "}
              million are <em>still</em> millionaires.
            </h2>
            <p className="sub">
              Strip out primary residences and more than 14 million households still hold seven figures in liquid, investable wealth. These
              are not paper-rich homeowners. They are <strong>decision makers and purchasers</strong> with money that moves.
            </p>
            <p className="fn">
              <sup>2</sup> Spectrem Group Market Insights, households with $1M+ net worth excluding primary residence. Capgemini&apos;s
              stricter investable-assets definition still counts 8.7 million individuals.
            </p>
          </div>
          <div className="gfx">
            <svg id="g1" viewBox="0 0 300 500" aria-label="House icon struck through; 90 of 236 dots dim"></svg>
            <div className="cap">
              <span>Primary residence removed</span>
              <b>146 dots remain</b>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" id="s2" aria-labelledby="h2">
        <div className="beat">
          <div className="copy">
            <p className="eyebrow">Addressable</p>
            <h2 id="h2">
              We can <em>reach</em> them.
            </h2>
            <p className="sub">
              Through our data partners, the entire liquid-millionaire tier is addressable across CTV, streaming audio, display, and native.
              Not a lookalike model. Not a &quot;high income&quot; checkbox. <strong>The actual households, individuals, and devices.</strong>
            </p>
          </div>
          <div className="gfx">
            <svg id="g2" viewBox="0 0 300 420" aria-label="146 dots gathered into a solid block"></svg>
            <div className="cap">
              <span id="type2"></span>
              <b>100% addressable</b>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" id="s3" aria-labelledby="h3">
        <div className="beat">
          <div className="copy">
            <p className="eyebrow">Layer 1 — Demographic</p>
            <h2 id="h3">
              Who they <em>are.</em>
            </h2>
            <p className="sub">
              Gender. Age band. Household composition. Occupation and business ownership. Start wide, then narrow to the people who actually
              sign the check. The filters below are examples. <strong>Click any of them</strong> and watch the audience resize.
            </p>
            <div className="chips" id="chips3">
              <button className="chip" data-g="sex" data-w=".52">
                Male
              </button>
              <button className="chip" data-g="sex" data-w=".48">
                Female
              </button>
              <button className="chip" data-g="age" data-w=".12">
                35–44
              </button>
              <button className="chip" data-g="age" data-w=".20">
                45–54
              </button>
              <button className="chip" data-g="age" data-w=".28">
                55–64
              </button>
              <button className="chip" data-g="age" data-w=".36">
                65+
              </button>
              <button className="chip" data-g="occ" data-w=".30">
                Business owner
              </button>
              <button className="chip" data-g="occ" data-w=".08">
                C-suite
              </button>
              <button className="chip" data-g="occ" data-w=".05">
                Physician
              </button>
              <button className="chip" data-g="occ" data-w=".04">
                Attorney
              </button>
              <span className="chip more">+ and more</span>
            </div>
          </div>
          <div className="gfx">
            <svg id="g3" viewBox="0 0 300 420" aria-label="Dot block split by gender and age band"></svg>
            <div className="cap">
              <span>Households in segment (illustrative)</span>
              <b className="num" id="n3">
                14.6M
              </b>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" id="s4" aria-labelledby="h4">
        <div className="beat">
          <div className="copy">
            <p className="eyebrow">Layer 2 — Geographic</p>
            <h2 id="h4">
              Where they <em>are.</em>
            </h2>
            <p className="sub">
              Lock in on a single DMA or stack a dozen. A state, a metro, a ZIP cluster, a 30-mile radius around a dealership or a private
              terminal. Wealth is not evenly distributed, and neither is your media.{" "}
              <strong>The markets below are examples — we can target anywhere in the country.</strong> Click to add or remove one.
            </p>
            <div className="chips" id="chips4">
              <button className="chip" data-d="0">
                New York
              </button>
              <button className="chip" data-d="1">
                Charlotte
              </button>
              <button className="chip" data-d="2">
                Palm Beach
              </button>
              <button className="chip" data-d="3">
                Dallas–Fort Worth
              </button>
              <button className="chip" data-d="4">
                Scottsdale
              </button>
              <button className="chip" data-d="5">
                Naples
              </button>
              <button className="chip" data-d="6">
                Bay Area
              </button>
              <button className="chip" data-d="r">
                30-mi radius
              </button>
              <span className="chip more">+ any DMA, state, or ZIP</span>
            </div>
          </div>
          <div className="gfx">
            <svg id="g4" viewBox="0 0 400 240" aria-label="Dot map of the United States with selected DMAs lighting up"></svg>
            <div className="cap">
              <span>DMAs selected</span>
              <b className="num" id="n4">
                00
              </b>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" id="s5" aria-labelledby="h5">
        <div className="beat">
          <div className="copy">
            <p className="eyebrow">Layer 3 — Purchase history</p>
            <h2 id="h5">
              What they <em>buy.</em>
            </h2>
            <p className="sub">
              Transaction-level signals from our data partners: the golf clubs they belong to, the FBOs they fly out of, the vehicles
              registered to the household, and the categories that recur on their cards. <strong>Behavior, not claims.</strong> A few examples
              below — click a row to remove it from the build.
            </p>
          </div>
          <div className="gfx">
            <div className="ledger" id="ledger">
              <div className="row">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path className="ic" d="M6 21V4l10 3-10 3M4 21h6" />
                </svg>
                <span>Private golf club membership</span>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path className="tick" d="M4 12l5 5 11-11" />
                </svg>
              </div>
              <div className="row">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path className="ic" d="M3 13l7-1 4-8h2l-2 8h5l2 2-2 2h-5l2 8h-2l-4-8-7-1z" />
                </svg>
                <span>FBO departures and charter activity</span>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path className="tick" d="M4 12l5 5 11-11" />
                </svg>
              </div>
              <div className="row">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path className="ic" d="M3 14l2-6h14l2 6v5H3zM3 14h18M7 19v2M17 19v2M7 16h.5M16.5 16h.5" />
                </svg>
                <span>Luxury vehicle registrations</span>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path className="tick" d="M4 12l5 5 11-11" />
                </svg>
              </div>
              <div className="row">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path className="ic" d="M3 6h18v12H3zM3 10h18M6 15h4" />
                </svg>
                <span>Card spend: travel, dining, jewelry, art</span>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path className="tick" d="M4 12l5 5 11-11" />
                </svg>
              </div>
              <div className="row">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path className="ic" d="M12 21s-8-5-8-11a4 4 0 018-1 4 4 0 018 1c0 6-8 11-8 11z" />
                </svg>
                <span>Charitable giving and board affiliations</span>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path className="tick" d="M4 12l5 5 11-11" />
                </svg>
              </div>
              <div className="row">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path className="ic" d="M3 17h18l-2 3H5zM12 3v14M12 3c5 3 6 8 6 11H12M12 8c-3 2-4 4-4 6h4" />
                </svg>
                <span>Boat, second home, aircraft share</span>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path className="tick" d="M4 12l5 5 11-11" />
                </svg>
              </div>
            </div>
            <div className="more-line">+ and more — we work across far more verticals than shown</div>
            <div className="cap">
              <span>Signals matched</span>
              <b className="num" id="n5">
                0 / 6
              </b>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" id="s6" aria-labelledby="h6">
        <div className="beat">
          <div className="copy">
            <p className="eyebrow">Layer 4 — Psychographic &amp; intent</p>
            <h2 id="h6">
              What they want <em>next.</em>
            </h2>
            <p className="sub">
              Anonymized, hashed browsing signals tell us who is in market right now — for wealth management, private aviation, golf, luxury
              retail, real estate. <strong>We see the intent, not the individual.</strong> The audience updates as behavior changes.
              Categories shown are examples; <strong>intent signals exist for every vertical we work in, and more.</strong>
            </p>
            <div className="feed" id="feed" aria-hidden="true"></div>
          </div>
          <div className="gfx">
            <svg id="g6" viewBox="0 0 300 300" aria-label="Radar sweep revealing in-market intent categories"></svg>
            <div className="cap">
              <span>Live intent signals</span>
              <b className="num" id="n6">
                0
              </b>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" id="s7" aria-labelledby="h7">
        <div className="beat">
          <div className="copy">
            <p className="eyebrow">The solution</p>
            <h2 id="h7">
              Identify the target. Build the <em>right-size</em> audience.
            </h2>
            <p className="sub">
              Four layers turn 14.6 million households into the exact number of people who should see your brand — not more, not fewer. Solve
              that, and the rest of marketing gets simple: <strong>the right message, at the right frequency, to people who can actually buy.</strong>
            </p>
          </div>
          <div className="gfx">
            <div className="stage">
              <div className="v num">23.6M</div>
              <div className="l">Millionaires</div>
            </div>
            <div className="stage">
              <div className="v num">14.6M</div>
              <div className="l">Liquid millionaires</div>
            </div>
            <div className="stage">
              <div className="v num" id="n7">
                0
              </div>
              <div className="l">Your audience (example)</div>
            </div>
            <svg id="g7" viewBox="0 0 300 60" style={{ marginTop: 18 }} aria-hidden="true"></svg>
          </div>
        </div>
        <div className="three">
          <div>
            <h3>Right audience</h3>
            <p>Built from verified wealth, behavior, and intent. Not a proxy.</p>
          </div>
          <div>
            <h3>Right message</h3>
            <p>Creative written for the segment, not the median.</p>
          </div>
          <div>
            <h3>Right frequency</h3>
            <p>Enough to be remembered. Never enough to be resented.</p>
          </div>
        </div>
      </section>

      <section className="wrap cta" id="s8" aria-labelledby="h8">
        <div className="copy">
          <h2 id="h8">
            Show us who you sell to. We&apos;ll show you how many of them <em>exist.</em>
          </h2>
          <a className="btn" href="/contact">
            Build my audience
          </a>
          <a className="link" href="/contact">
            See a sample audience count
          </a>
        </div>
      </section>

      <div className="sources">
        <p>
          Sources: 1. UBS Global Wealth Report 2026 — 23.6M US-dollar millionaires in the United States at year-end 2025, more than 40% of
          57.5M worldwide; ~440,000 added in 2025. 2. Spectrem Group Market Insights 2022 — 14.6M US households with $1M+ net worth excluding
          primary residence (12.55M at $1–5M, 1.8M at $5–25M, 252K at $25M+). 3. Capgemini World Wealth Report 2026 — 8.7M US individuals with
          $1M+ investable assets.
        </p>
        <p>
          Audience capabilities via Stillwater Media data partners. All browsing signals anonymized and hashed. Audience counts shown are
          illustrative.
        </p>
      </div>
    </div>
  )
}
