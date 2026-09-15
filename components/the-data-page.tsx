"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion"

/* ------------------------------------------------------------------ */
/*  Scoped styling: fonts + tabular numerals + chip base              */
/* ------------------------------------------------------------------ */

const SCOPED_CSS = `
.td-serif{font-family:var(--font-instrument-serif),Georgia,serif;}
.td-sans{font-family:var(--font-instrument-sans),system-ui,sans-serif;}
.td-mono{font-family:var(--font-ibm-plex-mono),ui-monospace,monospace;}
.td-tnum{font-variant-numeric:tabular-nums;}
.td-glow{filter:drop-shadow(0 0 10px rgba(255,255,255,.55));}
.td-chip{font-size:11px;line-height:1;letter-spacing:0.18em;text-transform:uppercase;padding:0.5rem 0.75rem;border-width:1px;border-style:solid;border-radius:9999px;transition:all .35s ease;}
`

/* ------------------------------------------------------------------ */
/*  Hooks                                                             */
/* ------------------------------------------------------------------ */

function useInViewOnce(amount = 0.35) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount })
  return [ref, inView] as const
}

// Count from `from` to `target` once `start` flips true (ease-out cubic).
function useCountUp(
  target: number,
  { start = true, duration = 1500, from = 0, reduced = false } = {},
) {
  const [val, setVal] = useState(from)
  useEffect(() => {
    if (!start) {
      setVal(from)
      return
    }
    if (reduced) {
      setVal(target)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const e = 1 - Math.pow(1 - p, 3)
      setVal(from + (target - from) * e)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, target, duration, from, reduced])
  return val
}

// Tween toward `target` whenever it changes (used for interactive recount).
function useTween(target: number, duration = 600, reduced = false) {
  const [val, setVal] = useState(target)
  const fromRef = useRef(target)
  useEffect(() => {
    if (reduced) {
      setVal(target)
      fromRef.current = target
      return
    }
    const from = fromRef.current
    const t0 = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const e = 1 - Math.pow(1 - p, 3)
      const cur = from + (target - from) * e
      setVal(cur)
      if (p < 1) raf = requestAnimationFrame(tick)
      else fromRef.current = target
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, reduced])
  return val
}

function useTypewriter(
  text: string,
  { start = false, delay = 800, cps = 32, reduced = false } = {},
) {
  const [out, setOut] = useState("")
  useEffect(() => {
    if (!start) {
      setOut("")
      return
    }
    if (reduced) {
      setOut(text)
      return
    }
    let i = 0
    let interval = 0
    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1
        setOut(text.slice(0, i))
        if (i >= text.length) window.clearInterval(interval)
      }, cps)
    }, delay)
    return () => {
      window.clearTimeout(timeout)
      window.clearInterval(interval)
    }
  }, [start, text, delay, cps, reduced])
  return out
}

/* ------------------------------------------------------------------ */
/*  Formatting helpers                                                */
/* ------------------------------------------------------------------ */

const fmtAudience = (n: number) =>
  n >= 1_000_000
    ? `${(n / 1_000_000).toFixed(1)}M`
    : `${Math.round(n / 1000)}K`

const fmtInt = (n: number) => Math.round(n).toLocaleString("en-US")

/* ------------------------------------------------------------------ */
/*  Shared presentational pieces                                      */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="block h-px w-7 bg-white"
      />
      <span className="td-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
        {children}
      </span>
    </div>
  )
}

function Beat({
  id,
  eyebrow,
  copy,
  graphic,
}: {
  id: string
  eyebrow: string
  copy: React.ReactNode
  graphic: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative flex min-h-[100svh] items-center border-t border-white/[0.18] px-6 py-24 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">{copy}</div>
        <div className="order-1 flex justify-center lg:order-2">{graphic}</div>
      </div>
    </section>
  )
}

function CaptionRow({ left, right }: { left: string; right: string }) {
  return (
    <div className="mt-6 flex items-center justify-between td-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
      <span>{left}</span>
      <span className="td-tnum">{right}</span>
    </div>
  )
}

function Chip({
  active,
  dashed,
  onClick,
  children,
}: {
  active?: boolean
  dashed?: boolean
  onClick?: () => void
  children: React.ReactNode
}) {
  if (dashed) {
    return (
      <span className="td-chip td-mono cursor-default border-dashed border-white/25 text-white/30">
        {children}
      </span>
    )
  }
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`td-chip td-mono ${
        active
          ? "border-white bg-white text-black"
          : "border-white/[0.18] text-white/70 hover:border-white/40 hover:text-white"
      }`}
    >
      {children}
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  DotField — the reusable matrix                                    */
/* ------------------------------------------------------------------ */

type DotState = { opacity: number; scale?: number; y?: number; delay?: number }

function DotField({
  count,
  cols,
  r,
  cell,
  play,
  dotState,
  className,
}: {
  count: number
  cols: number
  r: number
  cell: number
  play: boolean
  dotState: (i: number, row: number, col: number) => DotState
  className?: string
}) {
  const rows = Math.ceil(count / cols)
  const w = cols * cell
  const h = rows * cell
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      style={{ overflow: "visible", maxWidth: "100%" }}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => {
        const row = Math.floor(i / cols)
        const col = i % cols
        const cx = col * cell + cell / 2
        const cy = row * cell + cell / 2
        const s = dotState(i, row, col)
        return (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="#fff"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            initial={play ? { opacity: 0, scale: 0.2 } : false}
            animate={{ opacity: s.opacity, scale: s.scale ?? 1, y: s.y ?? 0 }}
            transition={{
              duration: 0.35,
              delay: s.delay ?? 0,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        )
      })}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 1 — Hero                                                  */
/* ------------------------------------------------------------------ */

const HERO_COLS = 12
const HERO_COUNT = 236

function Hero({ reduced }: { reduced: boolean }) {
  const [play, setPlay] = useState(false)
  useEffect(() => setPlay(true), [])
  const n = useCountUp(23.6, { start: play, duration: 1800, reduced })

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center px-6 pt-28 pb-24 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <Eyebrow>The Stillwater Data Stack</Eyebrow>
          <h1
            id="hero-title"
            className="td-serif text-white text-[clamp(44px,7vw,104px)] leading-[0.98] [text-wrap:balance]"
          >
            <span className="td-tnum">{n.toFixed(1)}</span> million Americans are{" "}
            <em className="italic">millionaires.</em>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={play ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: reduced ? 0 : 1.9 }}
            className="td-sans mt-6 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-white/70"
          >
            One in ten adults. More than{" "}
            <strong className="font-medium text-white">40%</strong> of every
            millionaire on Earth lives here, and the country minted{" "}
            <strong className="font-medium text-white">440,000</strong> more of
            them last year.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={play ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: reduced ? 0 : 2.2 }}
            className="td-mono mt-8 max-w-[58ch] text-[11px] leading-relaxed text-white/30"
          >
            <a href="#sources" className="align-super text-[9px]">
              1
            </a>{" "}
            UBS Global Wealth Report 2026. Net worth $1M+, including primary
            residence, year-end 2025.
          </motion.p>
        </div>

        <div className="order-1 flex flex-col items-center lg:order-2">
          <DotField
            count={HERO_COUNT}
            cols={HERO_COLS}
            r={5.2}
            cell={18}
            play={!reduced}
            dotState={(_i, row, col) => ({
              opacity: play ? 1 : reduced ? 1 : 0,
              scale: 1,
              delay: reduced ? 0 : (row + col) * 0.04,
            })}
          />
          <div className="mt-6 flex w-full items-center justify-between td-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            <span>Each dot = 100,000 people</span>
            <span className="td-tnum">236 dots</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 2 — Minus the house                                       */
/* ------------------------------------------------------------------ */

function MinusHouse({ reduced }: { reduced: boolean }) {
  const [ref, inView] = useInViewOnce(0.4)
  const [dim, setDim] = useState(false)
  useEffect(() => {
    if (!inView) return
    const t = window.setTimeout(() => setDim(true), reduced ? 0 : 1300)
    return () => window.clearTimeout(t)
  }, [inView, reduced])

  const n = useCountUp(14.6, {
    start: dim,
    from: 23.6,
    duration: 1400,
    reduced,
  })

  const brightCount = 146

  return (
    <section
      id="minus-house"
      aria-labelledby="minus-house-title"
      ref={ref}
      className="relative flex min-h-[100svh] items-center border-t border-white/[0.18] px-6 py-24 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <Eyebrow>Minus the House</Eyebrow>
          <h2
            id="minus-house-title"
            className="td-serif text-white text-[clamp(38px,5.6vw,84px)] leading-[0.98] [text-wrap:balance]"
          >
            Take away the house.{" "}
            <span className="td-tnum">{n.toFixed(1)}</span> million are{" "}
            <em className="italic">still</em> millionaires.
          </h2>
          <p className="td-sans mt-6 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-white/70">
            Strip out primary residences and more than 14 million households
            still hold seven figures in liquid, investable wealth. These are not
            paper-rich homeowners. They are{" "}
            <strong className="font-medium text-white">
              decision makers and purchasers
            </strong>{" "}
            with money that moves.
          </p>
          <p className="td-mono mt-8 max-w-[58ch] text-[11px] leading-relaxed text-white/30">
            <a href="#sources" className="align-super text-[9px]">
              2
            </a>{" "}
            Spectrem Group Market Insights, households with $1M+ net worth
            excluding primary residence. Capgemini&apos;s stricter
            investable-assets definition still counts 8.7 million individuals.
          </p>
        </div>

        <div className="order-1 flex flex-col items-center lg:order-2">
          <div className="relative">
            <DotField
              count={HERO_COUNT}
              cols={HERO_COLS}
              r={5.2}
              cell={18}
              play={false}
              dotState={(i) => {
                const isBottom = i >= brightCount
                if (dim && isBottom) {
                  return {
                    opacity: 0.12,
                    y: 6,
                    delay: reduced ? 0 : (HERO_COUNT - 1 - i) * 0.012,
                  }
                }
                return { opacity: 1, y: 0 }
              }}
            />
            <HouseStrike inView={inView} reduced={reduced} />
          </div>
          <div className="mt-6 flex w-full items-center justify-between td-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            <span>Primary residence removed</span>
            <span className="td-tnum">146 dots remain</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function HouseStrike({ inView, reduced }: { inView: boolean; reduced: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      <motion.path
        d="M20 46 L50 22 L80 46 L80 82 L20 82 Z M42 82 L42 60 L58 60 L58 82"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: reduced ? 0.01 : 0.8 }}
      />
      <motion.line
        x1="14"
        y1="86"
        x2="86"
        y2="14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: reduced ? 0.01 : 0.35, delay: reduced ? 0 : 0.8 }}
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 3 — We can reach them                                     */
/* ------------------------------------------------------------------ */

function Addressable({ reduced }: { reduced: boolean }) {
  const [ref, inView] = useInViewOnce(0.4)
  const typed = useTypewriter("14.6M ADDRESSABLE HOUSEHOLDS", {
    start: inView,
    delay: 800,
    reduced,
  })
  const cols = 12
  const count = 146
  const rows = Math.ceil(count / cols)
  const cell = 18
  const w = cols * cell
  const h = rows * cell

  return (
    <section
      id="addressable"
      aria-labelledby="addressable-title"
      ref={ref}
      className="relative flex min-h-[100svh] items-center border-t border-white/[0.18] px-6 py-24 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <Eyebrow>Addressable</Eyebrow>
          <h2
            id="addressable-title"
            className="td-serif text-white text-[clamp(38px,5.6vw,84px)] leading-[0.98] [text-wrap:balance]"
          >
            We can <em className="italic">reach</em> them.
          </h2>
          <p className="td-sans mt-6 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-white/70">
            Through our data partners, the entire liquid-millionaire tier is
            addressable across CTV, streaming audio, display, and native. Not a
            lookalike model. Not a &quot;high income&quot; checkbox.{" "}
            <strong className="font-medium text-white">
              The actual households, individuals, and devices.
            </strong>
          </p>
        </div>

        <div className="order-1 flex flex-col items-center lg:order-2">
          <div className="relative" style={{ width: w, maxWidth: "100%" }}>
            <DotField
              count={count}
              cols={cols}
              r={5.2}
              cell={cell}
              play={!reduced}
              dotState={(i) => ({
                opacity: 1,
                delay: reduced ? 0 : i * 0.007,
              })}
            />
            <svg
              className="pointer-events-none absolute inset-0"
              width={w}
              height={h}
              viewBox={`0 0 ${w} ${h}`}
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <motion.rect
                x="-8"
                y="-8"
                width={w + 16}
                height={h + 16}
                fill="none"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{
                  duration: reduced ? 0.01 : 1.2,
                  delay: reduced ? 0 : 0.6,
                }}
              />
            </svg>
          </div>
          <div className="mt-6 flex w-full items-center justify-between td-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            <span className="td-tnum">{typed}</span>
            <span>100% addressable</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 4 — Layer 1, Demographic                                  */
/* ------------------------------------------------------------------ */

type DemoChip = { label: string; group: "sex" | "age" | "occ"; weight: number }

const DEMO_CHIPS: DemoChip[] = [
  { label: "Male", group: "sex", weight: 0.52 },
  { label: "Female", group: "sex", weight: 0.48 },
  { label: "35–44", group: "age", weight: 0.12 },
  { label: "45–54", group: "age", weight: 0.2 },
  { label: "55–64", group: "age", weight: 0.28 },
  { label: "65+", group: "age", weight: 0.36 },
  { label: "Business owner", group: "occ", weight: 0.3 },
  { label: "C-suite", group: "occ", weight: 0.08 },
  { label: "Physician", group: "occ", weight: 0.05 },
  { label: "Attorney", group: "occ", weight: 0.04 },
]

const BASE_HOUSEHOLDS = 14_600_000

function computeFraction(selected: Set<string>) {
  const groups: Record<string, number> = { sex: 0, age: 0, occ: 0 }
  const hasGroup: Record<string, boolean> = { sex: false, age: false, occ: false }
  for (const chip of DEMO_CHIPS) {
    if (selected.has(chip.label)) {
      groups[chip.group] += chip.weight
      hasGroup[chip.group] = true
    }
  }
  let fraction = 1
  for (const g of ["sex", "age", "occ"]) {
    if (hasGroup[g]) fraction *= Math.min(1, groups[g])
  }
  return fraction
}

function DemographicLayer({ reduced }: { reduced: boolean }) {
  const [ref, inView] = useInViewOnce(0.4)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [autoDone, setAutoDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setSelected(new Set(["Male", "45–54", "55–64", "Business owner"]))
      setAutoDone(true)
      return
    }
    const seq = ["Male", "45–54", "55–64", "Business owner"]
    const timers = seq.map((label, idx) =>
      window.setTimeout(() => {
        setSelected((prev) => new Set(prev).add(label))
        if (idx === seq.length - 1) setAutoDone(true)
      }, 800 * (idx + 1)),
    )
    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [inView, reduced])

  const toggle = (label: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  const fraction = computeFraction(selected)
  const audience = useTween(BASE_HOUSEHOLDS * fraction, 600, reduced)
  const brightCount = Math.round(146 * fraction)

  const cols = 12
  const count = 146
  const cell = 16
  const rows = Math.ceil(count / cols)
  const w = cols * cell
  const h = rows * cell
  const ageLabels = ["35–44", "45–54", "55–64", "65+"]

  return (
    <section
      id="layer-demographic"
      aria-labelledby="layer-demographic-title"
      ref={ref}
      className="relative flex min-h-[100svh] items-center border-t border-white/[0.18] px-6 py-24 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <Eyebrow>Layer 1 — Demographic</Eyebrow>
          <h2
            id="layer-demographic-title"
            className="td-serif text-white text-[clamp(38px,5.6vw,84px)] leading-[0.98] [text-wrap:balance]"
          >
            Who they <em className="italic">are.</em>
          </h2>
          <p className="td-sans mt-6 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-white/70">
            Gender. Age band. Household composition. Occupation and business
            ownership. Start wide, then narrow to the people who actually sign
            the check. The filters below are examples.{" "}
            <strong className="font-medium text-white">Click any of them</strong>{" "}
            and watch the audience resize.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {DEMO_CHIPS.map((chip) => (
              <Chip
                key={chip.label}
                active={selected.has(chip.label)}
                onClick={() => toggle(chip.label)}
              >
                {chip.label}
              </Chip>
            ))}
            <Chip dashed>+ and more</Chip>
          </div>
        </div>

        <div className="order-1 flex flex-col items-center lg:order-2">
          <div className="relative" style={{ width: w, maxWidth: "100%" }}>
            <DotField
              count={count}
              cols={cols}
              r={4.6}
              cell={cell}
              play={!reduced}
              dotState={(i) => ({
                opacity: i < brightCount ? 1 : 0.12,
                delay: reduced ? 0 : Math.min(i * 0.004, 0.4),
              })}
            />
            <svg
              className="pointer-events-none absolute inset-0"
              width={w}
              height={h}
              viewBox={`0 0 ${w} ${h}`}
              aria-hidden="true"
            >
              <motion.line
                x1={w / 2}
                y1={0}
                x2={w / 2}
                y2={h}
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: reduced ? 0.01 : 0.9 }}
              />
              {[1, 2, 3].map((b) => (
                <motion.line
                  key={b}
                  x1={0}
                  y1={(h / 4) * b}
                  x2={w}
                  y2={(h / 4) * b}
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{
                    duration: reduced ? 0.01 : 0.9,
                    delay: reduced ? 0 : 0.2 * b,
                  }}
                  style={{ originX: 0 }}
                />
              ))}
            </svg>
            <div className="pointer-events-none absolute -right-2 top-0 flex h-full translate-x-full flex-col justify-around pl-3">
              {ageLabels.map((a) => (
                <span
                  key={a}
                  className="td-mono td-tnum text-[10px] uppercase tracking-[0.18em] text-white/40"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex w-full items-center justify-between td-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            <span>Households in segment (illustrative)</span>
            <span className="td-tnum text-white/55">{fmtAudience(audience)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 5 — Layer 2, Geographic                                   */
/* ------------------------------------------------------------------ */

const MAP_COLS = 40
const MAP_ROWS = 20
const MAP_CELL = 11

// Per-row [start,end] land bands approximating the lower-48 silhouette.
const MAP_BANDS: Record<number, [number, number]> = {
  0: [7, 32],
  1: [5, 34],
  2: [3, 36],
  3: [2, 37],
  4: [1, 38],
  5: [1, 38],
  6: [1, 38],
  7: [1, 38],
  8: [2, 37],
  9: [2, 37],
  10: [3, 36],
  11: [3, 35],
  12: [4, 34],
  13: [5, 33],
  14: [7, 31],
  15: [9, 29],
  16: [11, 27],
  17: [13, 25],
  18: [16, 22],
  19: [18, 21],
}

// Florida peninsula cells appended to the SE.
const FLORIDA = new Set([
  "30,14",
  "30,15",
  "31,15",
  "31,16",
  "32,16",
  "32,17",
  "33,17",
  "31,17",
  "31,18",
  "32,18",
  "33,18",
])

function isLand(col: number, row: number) {
  const band = MAP_BANDS[row]
  if (band && col >= band[0] && col <= band[1]) return true
  return FLORIDA.has(`${col},${row}`)
}

type City = { label: string; col: number; row: number }
const CITIES: City[] = [
  { label: "New York", col: 34, row: 6 },
  { label: "Charlotte", col: 30, row: 11 },
  { label: "Palm Beach", col: 33, row: 18 },
  { label: "Dallas–Fort Worth", col: 19, row: 14 },
  { label: "Scottsdale", col: 9, row: 13 },
  { label: "Naples", col: 31, row: 18 },
  { label: "Bay Area", col: 3, row: 9 },
]

function GeographicLayer({ reduced }: { reduced: boolean }) {
  const [ref, inView] = useInViewOnce(0.4)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [radius, setRadius] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setSelected(new Set(CITIES.map((c) => c.label)))
      setRadius(true)
      return
    }
    const timers = CITIES.map((c, idx) =>
      window.setTimeout(() => {
        setSelected((prev) => new Set(prev).add(c.label))
      }, 550 * (idx + 1)),
    )
    const radiusTimer = window.setTimeout(
      () => setRadius(true),
      550 * (CITIES.length + 1),
    )
    return () => {
      timers.forEach((t) => window.clearTimeout(t))
      window.clearTimeout(radiusTimer)
    }
  }, [inView, reduced])

  const toggleCity = (label: string) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })

  const w = MAP_COLS * MAP_CELL
  const h = MAP_ROWS * MAP_CELL
  const charlotte = CITIES.find((c) => c.label === "Charlotte")!

  const landDots: { cx: number; cy: number; key: string; delay: number }[] = []
  for (let row = 0; row < MAP_ROWS; row++) {
    for (let col = 0; col < MAP_COLS; col++) {
      if (isLand(col, row)) {
        landDots.push({
          key: `${col},${row}`,
          cx: col * MAP_CELL + MAP_CELL / 2,
          cy: row * MAP_CELL + MAP_CELL / 2,
          delay: reduced ? 0 : (col + row) * 0.02,
        })
      }
    }
  }

  return (
    <section
      id="layer-geographic"
      aria-labelledby="layer-geographic-title"
      ref={ref}
      className="relative flex min-h-[100svh] items-center border-t border-white/[0.18] px-6 py-24 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <Eyebrow>Layer 2 — Geographic</Eyebrow>
          <h2
            id="layer-geographic-title"
            className="td-serif text-white text-[clamp(38px,5.6vw,84px)] leading-[0.98] [text-wrap:balance]"
          >
            Where they <em className="italic">are.</em>
          </h2>
          <p className="td-sans mt-6 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-white/70">
            Lock in on a single DMA or stack a dozen. A state, a metro, a ZIP
            cluster, a 30-mile radius around a dealership or a private terminal.
            Wealth is not evenly distributed, and neither is your media.{" "}
            <strong className="font-medium text-white">
              The markets below are examples — we can target anywhere in the
              country.
            </strong>{" "}
            Click to add or remove one.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Chip
                key={c.label}
                active={selected.has(c.label)}
                onClick={() => toggleCity(c.label)}
              >
                {c.label}
              </Chip>
            ))}
            <Chip active={radius} onClick={() => setRadius((v) => !v)}>
              30-mi radius
            </Chip>
            <Chip dashed>+ any DMA, state, or ZIP</Chip>
          </div>
        </div>

        <div className="order-1 flex flex-col items-center lg:order-2">
          <svg
            width={w}
            height={h}
            viewBox={`0 0 ${w} ${h}`}
            style={{ maxWidth: "100%", overflow: "visible" }}
            aria-hidden="true"
          >
            {landDots.map((d) => (
              <motion.circle
                key={d.key}
                cx={d.cx}
                cy={d.cy}
                r={2.6}
                fill="#fff"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.32 } : {}}
                transition={{ duration: 0.4, delay: d.delay }}
              />
            ))}
            {CITIES.map((c) => {
              const on = selected.has(c.label)
              const cx = c.col * MAP_CELL + MAP_CELL / 2
              const cy = c.row * MAP_CELL + MAP_CELL / 2
              return (
                <g key={c.label}>
                  {on && !reduced && (
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1"
                      initial={{ r: 4, opacity: 0.8 }}
                      animate={{ r: 22, opacity: 0 }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        repeatDelay: 0.6,
                      }}
                    />
                  )}
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={3.2}
                    fill="#fff"
                    animate={{ opacity: on ? 1 : 0.12 }}
                    transition={{ duration: 0.4 }}
                    className={on ? "td-glow" : ""}
                  />
                  {on && (
                    <text
                      x={cx + 8}
                      y={cy + 3}
                      fill="rgba(255,255,255,0.7)"
                      className="td-mono"
                      style={{
                        fontSize: 8,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      {c.label}
                    </text>
                  )}
                </g>
              )
            })}
            {radius && (
              <motion.circle
                cx={charlotte.col * MAP_CELL + MAP_CELL / 2}
                cy={charlotte.row * MAP_CELL + MAP_CELL / 2}
                r={28}
                fill="none"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: reduced ? 0.01 : 0.8 }}
              />
            )}
          </svg>
          <div className="mt-6 flex w-full items-center justify-between td-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            <span>DMAs selected</span>
            <span className="td-tnum text-white/55">
              {String(selected.size).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 6 — Layer 3, Purchase history                             */
/* ------------------------------------------------------------------ */

const LEDGER: { label: string; icon: React.ReactNode }[] = [
  {
    label: "Private golf club membership",
    icon: (
      <path
        d="M6 3 L6 21 M6 4 L17 7 L6 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "FBO departures and charter activity",
    icon: (
      <path
        d="M2 13 L22 8 L18 12 L20 20 L16 13 L9 15 L7 19 L6 15 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Luxury vehicle registrations",
    icon: (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 13 L5 8 L19 8 L21 13 L21 17 L3 17 Z" />
        <circle cx="7" cy="17" r="1.6" />
        <circle cx="17" cy="17" r="1.6" />
      </g>
    ),
  },
  {
    label: "Card spend: travel, dining, jewelry, art",
    icon: (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="6" width="18" height="12" rx="1" />
        <path d="M3 10 L21 10" />
      </g>
    ),
  },
  {
    label: "Charitable giving and board affiliations",
    icon: (
      <path
        d="M12 20 C12 20 4 14.5 4 9 C4 6.5 6 5 8 5 C10 5 12 7 12 7 C12 7 14 5 16 5 C18 5 20 6.5 20 9 C20 14.5 12 20 12 20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Boat, second home, aircraft share",
    icon: (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 17 L20 17 L17 21 L7 21 Z" />
        <path d="M12 3 L12 14 M12 5 L18 13 L12 13" />
      </g>
    ),
  },
]

function Checkmark({ on, delay, reduced }: { on: boolean; delay: number; reduced: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <motion.path
        d="M5 12 L10 17 L19 7"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: on ? 1 : 0 }}
        transition={{
          duration: on ? (reduced ? 0.01 : 0.35) : 0,
          delay: on ? delay : 0,
        }}
      />
    </svg>
  )
}

function PurchaseLayer({ reduced }: { reduced: boolean }) {
  const [ref, inView] = useInViewOnce(0.4)
  const [off, setOff] = useState<Set<number>>(new Set())
  const matched = LEDGER.length - off.size
  const matchedCount = useCountUp(LEDGER.length, {
    start: inView,
    duration: 1000,
    reduced,
  })
  const displayMatched = off.size === 0 ? Math.round(matchedCount) : matched

  const toggle = (i: number) =>
    setOff((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <section
      id="layer-purchase"
      aria-labelledby="layer-purchase-title"
      ref={ref}
      className="relative flex min-h-[100svh] items-center border-t border-white/[0.18] px-6 py-24 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <Eyebrow>Layer 3 — Purchase History</Eyebrow>
          <h2
            id="layer-purchase-title"
            className="td-serif text-white text-[clamp(38px,5.6vw,84px)] leading-[0.98] [text-wrap:balance]"
          >
            What they <em className="italic">buy.</em>
          </h2>
          <p className="td-sans mt-6 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-white/70">
            Transaction-level signals from our data partners: the golf clubs
            they belong to, the FBOs they fly out of, the vehicles registered to
            the household, and the categories that recur on their cards.{" "}
            <strong className="font-medium text-white">
              Behavior, not claims.
            </strong>{" "}
            A few examples below — click a row to remove it from the build.
          </p>
        </div>

        <div className="order-1 w-full lg:order-2">
          <ul className="w-full">
            {LEDGER.map((row, i) => {
              const isOff = off.has(i)
              return (
                <li key={row.label}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-pressed={!isOff}
                    className="group relative flex w-full items-center gap-4 py-4 text-left"
                  >
                    <span
                      className={`shrink-0 transition-opacity duration-300 ${
                        isOff ? "opacity-35" : "opacity-100"
                      } text-white`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        {row.icon}
                      </svg>
                    </span>
                    <span
                      className={`td-sans flex-1 text-[15px] transition-all duration-300 ${
                        isOff
                          ? "text-white/30 line-through"
                          : "text-white"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span className="shrink-0">
                      <Checkmark
                        on={!isOff}
                        delay={reduced ? 0 : 0.22 * i}
                        reduced={reduced}
                      />
                    </span>
                    <motion.span
                      className="absolute bottom-0 left-0 block h-px w-full bg-white/[0.18]"
                      style={{ originX: 0 }}
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{
                        duration: reduced ? 0.01 : 0.5,
                        delay: reduced ? 0 : 0.12 * i,
                      }}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="td-mono mt-6 text-[11px] uppercase tracking-[0.18em] text-white/30">
            + and more — we work across far more verticals than shown
          </p>
          <div className="mt-6 flex w-full items-center justify-between td-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            <span>Signals matched</span>
            <span className="td-tnum text-white/55">{displayMatched} / 6</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 7 — Layer 4, Psychographic & intent                       */
/* ------------------------------------------------------------------ */

const RADAR_LABELS = [
  "Wealth Mgmt",
  "Private Aviation",
  "Golf",
  "Luxury Retail",
  "Real Estate",
  "Auto",
  "Travel",
]

const FEED_LINES = [
  "hash:7f3a91… → in-market: private aviation ↑",
  "hash:2b9e04… → intent: wealth mgmt ↑",
  "hash:c14d77… → segment: luxury retail ↑",
  "hash:9a02f5… → in-market: real estate ↑",
  "hash:5e7b30… → intent: golf ↑",
  "hash:d38c1a… → segment: auto ↑",
  "hash:41f6b8… → in-market: travel ↑",
]

function IntentLayer({ reduced }: { reduced: boolean }) {
  const [ref, inView] = useInViewOnce(0.4)
  const [lit, setLit] = useState(0)
  const [feed, setFeed] = useState<string[]>([])

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setLit(RADAR_LABELS.length)
      setFeed(FEED_LINES.slice(0, 4))
      return
    }
    const litInterval = window.setInterval(() => {
      setLit((n) => {
        if (n >= RADAR_LABELS.length) {
          window.clearInterval(litInterval)
          return n
        }
        return n + 1
      })
    }, 520)
    let fi = 0
    const feedInterval = window.setInterval(() => {
      setFeed((prev) => [FEED_LINES[fi % FEED_LINES.length], ...prev].slice(0, 6))
      fi += 1
    }, 1400)
    return () => {
      window.clearInterval(litInterval)
      window.clearInterval(feedInterval)
    }
  }, [inView, reduced])

  const signals = lit * 1180
  const cx = 150
  const cy = 150

  return (
    <section
      id="layer-intent"
      aria-labelledby="layer-intent-title"
      ref={ref}
      className="relative flex min-h-[100svh] items-center border-t border-white/[0.18] px-6 py-24 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <Eyebrow>Layer 4 — Psychographic &amp; Intent</Eyebrow>
          <h2
            id="layer-intent-title"
            className="td-serif text-white text-[clamp(38px,5.6vw,84px)] leading-[0.98] [text-wrap:balance]"
          >
            What they want <em className="italic">next.</em>
          </h2>
          <p className="td-sans mt-6 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-white/70">
            Anonymized, hashed browsing signals tell us who is in market right
            now — for wealth management, private aviation, golf, luxury retail,
            real estate.{" "}
            <strong className="font-medium text-white">
              We see the intent, not the individual.
            </strong>{" "}
            The audience updates as behavior changes. Categories shown are
            examples; intent signals exist for every vertical we work in, and
            more.
          </p>
          <div
            className="relative mt-8 overflow-hidden td-mono text-[11px] leading-relaxed text-white/40"
            style={{
              height: 132,
              maskImage: "linear-gradient(to bottom, #000 40%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 40%, transparent)",
            }}
            aria-hidden="true"
          >
            {feed.map((line, i) => (
              <div key={`${line}-${i}`} className="td-tnum">
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex flex-col items-center lg:order-2">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            style={{ maxWidth: "100%" }}
            aria-hidden="true"
          >
            {[40, 85, 130].map((r) => (
              <circle
                key={r}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
              />
            ))}
            <line
              x1={cx}
              y1={cy - 130}
              x2={cx}
              y2={cy + 130}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <line
              x1={cx - 130}
              y1={cy}
              x2={cx + 130}
              y2={cy}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <motion.g
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={inView && !reduced ? { rotate: 360 } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <path
                d={`M${cx} ${cy} L${cx} ${cy - 130} A130 130 0 0 1 ${
                  cx + 130 * Math.sin((30 * Math.PI) / 180)
                } ${cy - 130 * Math.cos((30 * Math.PI) / 180)} Z`}
                fill="rgba(255,255,255,0.12)"
              />
              <line
                x1={cx}
                y1={cy}
                x2={cx}
                y2={cy - 130}
                stroke="#fff"
                strokeWidth="1.2"
              />
            </motion.g>
            {RADAR_LABELS.map((label, i) => {
              const angle = (i / RADAR_LABELS.length) * Math.PI * 2 - Math.PI / 2
              const rr = 40 + ((i % 3) + 1) * 28
              const px = cx + rr * Math.cos(angle)
              const py = cy + rr * Math.sin(angle)
              const on = i < lit
              return (
                <g key={label}>
                  <motion.circle
                    cx={px}
                    cy={py}
                    r={3.4}
                    fill="#fff"
                    animate={{ opacity: on ? 1 : 0.12 }}
                    transition={{ duration: 0.4 }}
                    className={on ? "td-glow" : ""}
                  />
                  {on && (
                    <text
                      x={px + 6}
                      y={py - 6}
                      fill="rgba(255,255,255,0.7)"
                      className="td-mono"
                      style={{
                        fontSize: 8,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>
          <div className="mt-6 flex w-full items-center justify-between td-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            <span>Live intent signals</span>
            <span className="td-tnum text-white/55">{fmtInt(signals)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 8 — The solution                                          */
/* ------------------------------------------------------------------ */

function Solution({ reduced }: { reduced: boolean }) {
  const [ref, inView] = useInViewOnce(0.35)
  const audience = useCountUp(41.2, {
    start: inView,
    duration: 1600,
    reduced,
  })

  const stages = [
    { num: "23.6M", label: "Millionaires", rule: false },
    { num: "14.6M", label: "Liquid millionaires", rule: false },
    { num: `${audience.toFixed(1)}K`, label: "Your audience (example)", rule: true },
  ]

  const columns = [
    {
      title: "Right audience",
      body: "Built from verified wealth, behavior, and intent. Not a proxy.",
    },
    {
      title: "Right message",
      body: "Creative written for the segment, not the median.",
    },
    {
      title: "Right frequency",
      body: "Enough to be remembered. Never enough to be resented.",
    },
  ]

  return (
    <section
      id="solution"
      aria-labelledby="solution-title"
      ref={ref}
      className="relative min-h-[100svh] border-t border-white/[0.18] px-6 py-24 md:px-16"
    >
      <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 lg:order-1">
            <Eyebrow>The Solution</Eyebrow>
            <h2
              id="solution-title"
              className="td-serif text-white text-[clamp(38px,5.6vw,84px)] leading-[0.98] [text-wrap:balance]"
            >
              Identify the target. Build the{" "}
              <em className="italic">right-size</em> audience.
            </h2>
            <p className="td-sans mt-6 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-white/70">
              Four layers turn 14.6 million households into the exact number of
              people who should see your brand — not more, not fewer. Solve
              that, and the rest of marketing gets simple:{" "}
              <strong className="font-medium text-white">
                the right message, at the right frequency, to people who can
                actually buy.
              </strong>
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8">
              {stages.map((s) => (
                <div
                  key={s.label}
                  className={`flex items-baseline justify-between py-4 ${
                    s.rule
                      ? "border-b-2 border-white"
                      : "border-b border-white/[0.18]"
                  }`}
                >
                  <span className="td-serif td-tnum text-white text-[clamp(34px,4vw,56px)] leading-none">
                    {s.num}
                  </span>
                  <span className="td-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <svg
              width="100%"
              height="120"
              viewBox="0 0 300 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M10 10 L290 10 L200 110 L100 110 Z"
                fill="none"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: reduced ? 0.01 : 1.4 }}
              />
            </svg>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {columns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: reduced ? 0 : 0.15 * i,
              }}
              className="border-t border-white pt-5"
            >
              <h3 className="td-serif text-white text-[28px] leading-tight">
                {c.title}
              </h3>
              <p className="td-sans mt-3 text-[15px] leading-[1.55] text-white/55">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 9 — CTA + sources                                         */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="relative flex min-h-[100svh] flex-col items-center justify-center border-t border-white/[0.18] px-6 py-24 text-center md:px-16"
    >
      <h2
        id="cta-title"
        className="td-serif mx-auto max-w-[18ch] text-white text-[clamp(38px,5.6vw,84px)] leading-[0.98] [text-wrap:balance]"
      >
        Show us who you sell to. We&apos;ll show you how many of them{" "}
        <em className="italic">exist.</em>
      </h2>

      <Link
        href="/contact"
        className="td-mono group mt-12 inline-block border border-white/70 px-8 py-4 text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-white hover:text-black"
      >
        Build my audience
      </Link>

      <Link
        href="/contact"
        className="td-mono mt-6 inline-block text-[11px] uppercase tracking-[0.18em] text-white/55 underline underline-offset-4 transition-colors duration-200 hover:text-white"
      >
        See a sample audience count
      </Link>

      <div
        id="sources"
        className="td-mono mt-20 max-w-3xl text-[11px] leading-relaxed text-white/30"
      >
        <p>
          Sources: 1. UBS Global Wealth Report 2026 — 23.6M US-dollar
          millionaires in the United States at year-end 2025, more than 40% of
          57.5M worldwide; ~440,000 added in 2025. 2. Spectrem Group Market
          Insights 2022 — 14.6M US households with $1M+ net worth excluding
          primary residence (12.55M at $1–5M, 1.8M at $5–25M, 252K at $25M+). 3.
          Capgemini World Wealth Report 2026 — 8.7M US individuals with $1M+
          investable assets.
        </p>
        <p className="mt-4">
          Audience capabilities via Stillwater Media data partners. All browsing
          signals anonymized and hashed. Audience counts shown are illustrative.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Scroll spine                                                      */
/* ------------------------------------------------------------------ */

function Spine({ progress }: { progress: MotionValue<number> }) {
  const [vh, setVh] = useState(0)
  useEffect(() => {
    const update = () => setVh(window.innerHeight)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])
  const y = useTransform(progress, [0, 1], [0, Math.max(0, vh - 7)])
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-px bg-white/[0.18] md:block">
      <motion.span
        style={{ y }}
        className="td-glow absolute left-1/2 top-0 block h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-white"
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Root                                                              */
/* ------------------------------------------------------------------ */

export function TheData() {
  const reduced = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll()

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCOPED_CSS }} />
      <main className="td-sans relative bg-black text-white">
        <Spine progress={scrollYProgress} />
        <Hero reduced={reduced} />
        <MinusHouse reduced={reduced} />
        <Addressable reduced={reduced} />
        <DemographicLayer reduced={reduced} />
        <GeographicLayer reduced={reduced} />
        <PurchaseLayer reduced={reduced} />
        <IntentLayer reduced={reduced} />
        <Solution reduced={reduced} />
        <CTA />
      </main>
    </>
  )
}
