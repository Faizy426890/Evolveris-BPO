"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const PORTFOLIOS = [
  { name: "Corporate Debts",  type: "B2B Collections",    pct: 91, color: "#7b6dc4", bg: "#ede9fc", initial: "C" },
  { name: "Retail Accounts",  type: "Consumer Recovery",  pct: 78, color: "#c8910a", bg: "#fef9e7", initial: "R" },
  { name: "Medical Billing",  type: "Healthcare AR",       pct: 85, color: "#7b6dc4", bg: "#ede9fc", initial: "M" },
  { name: "Financial Loans",  type: "Banking & Fintech",  pct: 96, color: "#c8910a", bg: "#fef9e7", initial: "F" },
  { name: "Telecom & Utility",type: "Service Recovery",   pct: 72, color: "#7b6dc4", bg: "#ede9fc", initial: "T" },
]

const BOTTOM_STATS = [
  { v: "18,500+", l: "Accounts Managed" },
  { v: "$2.4B",   l: "Total Recovered"  },
  { v: "96.8%",   l: "Recovery Rate"    },
  { v: "500+",    l: "Enterprise Clients" },
]

export default function CollectionRateSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [entered,      setEntered]      = useState(false)
  const [wordsIn,      setWordsIn]      = useState(false)
  const [rateDisplay,  setRateDisplay]  = useState("0.0")
  const [barsIn,       setBarsIn]       = useState(false)

  /* Headline word animation — fires on mount */
  useEffect(() => {
    const t = setTimeout(() => setWordsIn(true), 180)
    return () => clearTimeout(t)
  }, [])

  /* Intersection observer for counter + bars */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setEntered(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  /* Counter animation */
  useEffect(() => {
    if (!entered) return
    const target = 96.8
    const duration = 2200
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setRateDisplay((eased * target).toFixed(1))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    setTimeout(() => setBarsIn(true), 400)
  }, [entered])

  /* Shared word-slide transition factory */
  const word = (delay: number): React.CSSProperties => ({
    display: "inline-block",
    transform: wordsIn ? "translateY(0)" : "translateY(90%)",
    opacity:   wordsIn ? 1 : 0,
    transition: `transform 0.72s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.5s ease ${delay}ms`,
  })

  /* Fade-in helper for subordinate elements */
  const fadeIn = (delay: number): React.CSSProperties => ({
    opacity:   entered ? 1 : 0,
    transform: entered ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
  })

  return (
    <section
      ref={sectionRef}
      id="collection"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#f8f7f4" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Eyebrow ─────────────────────────────────────────── */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
          style={{ backgroundColor: "#ede9fc", color: "#7b6dc4", border: "1px solid rgba(123,109,196,0.2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#7b6dc4" }} />
          Debt Recovery Engine
        </div>

        {/* ── Header row ──────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <h2
            className="font-black leading-[1.05]"
            style={{ color: "#1a1826", fontSize: "clamp(38px,5.5vw,64px)", letterSpacing: "-0.03em", maxWidth: 680 }}
          >
            {/* Line 1 */}
            <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
              <span style={word(100)}>Recover every dollar,</span>
            </span>
            {" "}<br className="hidden lg:block" />
            {/* Line 2 — serif italic accent */}
            <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
              <span className="font-serif italic" style={{ ...word(280), color: "#7b6dc4" }}>
                relentlessly.
              </span>
            </span>
          </h2>

          <p
            className="text-base leading-relaxed lg:max-w-[300px]"
            style={{
              color: "#6b7280",
              opacity:   wordsIn ? 1 : 0,
              transform: wordsIn ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease 500ms, transform 0.6s ease 500ms",
            }}
          >
            AI-driven collection workflows that recover more — without compromising compliance or a single client relationship.
          </p>
        </div>

        {/* ── Main grid ───────────────────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-5 mb-8">

          {/* Left: rate card + mini stats */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Rate hero */}
            <div
              className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
              style={{
                backgroundColor: "#1a1826",
                backgroundImage:
                  "radial-gradient(ellipse at 88% 12%, rgba(123,109,196,0.35) 0%, transparent 52%), " +
                  "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "auto, 22px 22px",
                minHeight: 230,
              }}
            >
              {/* Gradient top border */}
              <div
                className="absolute top-0 inset-x-0 h-px rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, #7b6dc4, #f0c540)" }}
              />

              <div
                className="text-xs tracking-widest uppercase font-semibold mb-4"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                Overall Collection Rate
              </div>

              <div
                className="font-black leading-none mb-4 tabular-nums"
                style={{
                  fontSize: "clamp(60px,8.5vw,96px)",
                  color: "#ffffff",
                  letterSpacing: "-0.05em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {rateDisplay}%
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span style={{ color: "rgba(255,255,255,0.32)", fontSize: 13 }}>
                  Industry avg: 48%
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "rgba(240,197,64,0.16)", color: "#f0c540" }}
                >
                  ↑ 2× better
                </span>
              </div>
            </div>

            {/* Mini stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "$2.4B",  l: "Recovered",   t: "↑ 34% YoY",       c: "#7b6dc4" },
                { v: "12d",    l: "Resolution",   t: "8 days faster",    c: "#c8910a" },
                { v: "99.2%",  l: "Compliance",  t: "Zero violations",  c: "#7b6dc4" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    ...fadeIn(400 + i * 80),
                  }}
                >
                  <div
                    className="font-black text-xl leading-none mb-1.5 tabular-nums"
                    style={{ color: "#1a1826", letterSpacing: "-0.02em" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#9ca3af" }}>
                    {s.l}
                  </div>
                  <div className="text-xs font-semibold" style={{ color: s.c }}>{s.t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard card */}
          <div
            className="lg:col-span-3 rounded-3xl relative overflow-hidden"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0,0,0,0.07)",
              padding: "clamp(24px,4vw,40px)",
            }}
          >
            {/* Floating image — desktop only */}
            <div
              className="absolute bottom-0 right-0 pointer-events-none select-none hidden lg:block"
              style={fadeIn(700)}
            >
              <Image
                src="https://res.cloudinary.com/geecu3mo/image/upload/v1787666326/28638-removebg-preview.png"
                alt=""
                width={188}
                height={264}
                className="object-contain float-up"
                style={{ filter: "drop-shadow(0 12px 28px rgba(123,109,196,0.22))" }}
                priority
              />
            </div>

            {/* Content — padded right to clear image on desktop */}
            <div className="relative z-10 h-full flex flex-col pr-0 lg:pr-48">

              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-0.5" style={{ color: "#1a1826" }}>
                    Active Portfolios
                  </h3>
                  <p className="text-sm" style={{ color: "#9ca3af" }}>
                    Q3 2024 · Recovery in progress
                  </p>
                </div>
                <span
                  className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ml-4"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#7b6dc4" }} />
                  Live
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {PORTFOLIOS.map((p, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                          style={{ backgroundColor: p.color }}
                        >
                          {p.initial}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate" style={{ color: "#1a1826" }}>
                            {p.name}
                          </div>
                          <div className="text-xs truncate" style={{ color: "#9ca3af" }}>
                            {p.type}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-bold tabular-nums ml-4 flex-shrink-0" style={{ color: "#1a1826" }}>
                        {p.pct}%
                      </div>
                    </div>

                    <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: p.bg }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: p.color,
                          width: barsIn ? `${p.pct}%` : "0%",
                          transition: `width 1.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.11}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom stats strip ──────────────────────────────── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.07)",
            ...fadeIn(650),
          }}
        >
          {BOTTOM_STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="font-black text-3xl tabular-nums mb-1"
                style={{ color: "#1a1826", letterSpacing: "-0.03em" }}
              >
                {s.v}
              </div>
              <div className="text-sm font-medium" style={{ color: "#9ca3af" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
