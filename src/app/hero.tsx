"use client"

import { useEffect, useState } from "react"

const HUBS = [
  { city: "Pakistan", zoneLabel: "Pakistan Standard Time", tz: "Asia/Karachi" },
  { city: "Accra", zoneLabel: "Greenwich Mean Time", tz: "Africa/Accra" },
]

const LIVE_ITEMS = [
  { icon: "💬", type: "CHAT", msg: "I need help with my order", time: "01s", cls: "op-item-1" },
  { icon: "📞", type: "CALL", msg: "Incoming call — Priority", time: "02s", cls: "op-item-2" },
  { icon: "✉️", type: "EMAIL", msg: "New ticket #4821 opened", time: "03s", cls: "op-item-3" },
  { icon: "📊", type: "LIVE", msg: "Service Level 96.4%", time: "04s", cls: "op-item-4" },
]

function useHubClocks() {
  const [times, setTimes] = useState<string[] | null>(null)

  useEffect(() => {
    function tick() {
      setTimes(
        HUBS.map((h) =>
          new Intl.DateTimeFormat("en-GB", {
            timeZone: h.tz,
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(new Date())
        )
      )
    }
    tick()
    const id = setInterval(tick, 1000 * 20)
    return () => clearInterval(id)
  }, [])

  return times
}

export default function Hero() {
  const times = useHubClocks()

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f5f2ec" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(123,109,196,0.09) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Large purple orb — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-12%", top: "-12%",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,109,196,0.11) 0%, transparent 60%)",
        }}
      />
      {/* Golden orb — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-8%", bottom: "-8%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,197,64,0.11) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* === Left: copy === */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold mb-7"
              style={{
                backgroundColor: "rgba(237,233,252,0.85)",
                color: "#7b6dc4",
                border: "1.5px solid rgba(123,109,196,0.22)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#7b6dc4" }} />
              Outsourced operations, run from two hubs
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.9rem] font-black leading-[1.06] tracking-tight mb-6"
              style={{ color: "#1a1826" }}
            >
              One team working across Pakistan and Accra, so your customers{" "}
              <span className="relative inline-block">
                <span className="font-serif italic" style={{ color: "#7b6dc4" }}>never</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 130 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5 C25 1 50 8 75 4 C100 1 120 8 130 4"
                    stroke="#7b6dc4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              &nbsp;hit a closed sign.
            </h1>

            <p className="text-lg leading-relaxed mb-9" style={{ color: "#6b7280", maxWidth: 560 }}>
              Evolveris runs support, back-office and collections work across medical intake,
              debt recovery, fintech and retail — staffed and trained the way an in-house team
              would be, at the cost structure that lets you scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 mb-9">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "#1a1826",
                  color: "#ffffff",
                  boxShadow: "0 6px 28px rgba(26,24,38,0.28)",
                }}
              >
                Talk to our team →
              </a>
              <a
                href="#sectors"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:bg-white"
                style={{
                  border: "1.5px solid rgba(26,24,38,0.2)",
                  color: "#1a1826",
                  backgroundColor: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(10px)",
                }}
              >
                See what we run
              </a>
              <a
                href="#how-we-work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  border: "1.5px solid rgba(123,109,196,0.35)",
                  color: "#7b6dc4",
                  backgroundColor: "rgba(237,233,252,0.6)",
                }}
              >
                How We Work
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex -space-x-2">
                {["#7b6dc4", "#f0c540", "#1a1826", "#9b8dd4"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: c, zIndex: 4 - i }}
                  >
                    {["S", "A", "M", "R"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map(n => (
                    <svg key={n} width="13" height="13" viewBox="0 0 24 24" fill="#f0c540">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs" style={{ color: "#6b7280" }}>
                  Trusted by <strong style={{ color: "#1a1826" }}>500+</strong> companies worldwide
                </p>
              </div>
              <div className="h-7 w-px hidden sm:block" style={{ backgroundColor: "rgba(26,24,38,0.12)" }} />
              {["SOC 2 Certified", "GDPR Compliant"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-xs font-semibold" style={{ color: "#4b5563" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* === Right: dual-hub clock card === */}
          <div className="lg:justify-self-end w-full" style={{ maxWidth: 460 }}>
            <div
              className="rounded-3xl overflow-hidden float-up"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 40px 100px rgba(26,24,38,0.13)",
              }}
            >
              {/* Card header */}
              <div
                className="px-6 py-3.5 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", backgroundColor: "#fafaf9" }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#6b7280" }}>
                  Delivery hubs
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: "#059669" }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#6b7280" }}>
                    Live
                  </span>
                </div>
              </div>

              {/* Clocks */}
              <div className="px-6 pt-5">
                {HUBS.map((hub, i) => (
                  <div
                    key={hub.city}
                    className="flex items-end justify-between py-4"
                    style={i === 0 ? { borderBottom: "1px solid rgba(0,0,0,0.07)" } : undefined}
                  >
                    <div>
                      <div className="text-base font-bold mb-0.5" style={{ color: "#1a1826" }}>
                        {hub.city}
                      </div>
                      <div className="text-xs" style={{ color: "#9ca3af" }}>{hub.zoneLabel}</div>
                    </div>
                    <div
                      className="text-3xl font-black tracking-tight"
                      style={{ color: "#1a1826", fontVariantNumeric: "tabular-nums" }}
                      suppressHydrationWarning
                    >
                      {times ? times[i] : "--:--"}
                    </div>
                  </div>
                ))}

                <p className="text-sm leading-relaxed py-5" style={{ color: "#6b7280", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                  Five hours apart, both hubs cover the working day across UK, EU and US time
                  zones without a night shift skeleton crew.
                </p>
              </div>

              {/* Live activity strip */}
              <div className="px-6 pb-6">
                <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: "#9ca3af" }}>
                  Activity feed
                </p>
                <div className="space-y-2">
                  {LIVE_ITEMS.map((item) => (
                    <div
                      key={item.type}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl ${item.cls}`}
                      style={{ backgroundColor: "#f8f7f4", border: "1px solid rgba(0,0,0,0.055)" }}
                    >
                      <span className="text-sm leading-none">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[9px] tracking-widest uppercase font-semibold" style={{ color: "#9ca3af" }}>
                          {item.type}
                        </div>
                        <div className="text-xs font-medium truncate" style={{ color: "#1a1826" }}>
                          {item.msg}
                        </div>
                      </div>
                      <span
                        className="text-[10px] flex-shrink-0 px-2 py-0.5 rounded-full font-semibold"
                        style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
