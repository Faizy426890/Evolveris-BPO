const HUB_STATS = [
  { value: "6", label: "Sectors served" },
  { value: "2", label: "Delivery hubs" },
  { value: "18h", label: "Combined daily coverage" },
  { value: "24/7", label: "Client escalation line" },
]

const HUBS = [
  {
    city: "Pakistan",
    zone: "PKT · UTC+5",
    note: "Opens the day with EU and UK mornings, carries the full APAC-to-Europe overlap.",
    // shift window as % of a 24h bar
    start: 4,
    end: 16,
    color: "#7b6dc4",
  },
  {
    city: "Accra",
    zone: "GMT · UTC+0",
    note: "Picks the queue up mid-morning GMT and stays live through the US working day.",
    start: 9,
    end: 22,
    color: "#f0c540",
  },
]

const MARKETS = [
  { label: "United Kingdom", window: "09:00 – 18:00 GMT" },
  { label: "European Union", window: "09:00 – 18:00 CET" },
  { label: "United States", window: "09:00 – 18:00 ET" },
]

export default function HubsSection() {
  return (
    <section id="hubs" className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            Coverage
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Two hubs, deliberately,{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>not by accident.</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-14" style={{ color: "#6b7280" }}>
          Pakistan and Accra weren't picked for cost alone — together they give overlapping
          working hours with London, most of the US working day, and a five-hour offset that
          shortens the overnight gap most single-hub BPOs can't avoid.
        </p>

        {/* Stat strip */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 rounded-2xl px-6 py-9 mb-12"
          style={{ backgroundColor: "#f8f7f4", border: "1px solid rgba(0,0,0,0.06)" }}
        >
          {HUB_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black mb-1.5 tracking-tight" style={{ color: "#7b6dc4" }}>
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "#6b7280" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Coverage map */}
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5">
          {/* Timeline card */}
          <div className="rounded-2xl p-7 lg:p-9" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 8px 40px rgba(26,24,38,0.06)" }}>
            <p className="text-[10px] uppercase tracking-widest font-semibold mb-7" style={{ color: "#9ca3af" }}>
              A day across both hubs (UTC)
            </p>

            <div className="space-y-7">
              {HUBS.map((hub) => (
                <div key={hub.city}>
                  <div className="flex items-baseline justify-between mb-2.5">
                    <span className="text-sm font-bold" style={{ color: "#1a1826" }}>{hub.city}</span>
                    <span className="text-xs font-semibold" style={{ color: "#9ca3af" }}>{hub.zone}</span>
                  </div>
                  <div
                    className="relative h-3 rounded-full overflow-hidden mb-2.5"
                    style={{ backgroundColor: "#f0ede8" }}
                  >
                    <div
                      className="absolute top-0 bottom-0 rounded-full"
                      style={{
                        left: `${(hub.start / 24) * 100}%`,
                        width: `${((hub.end - hub.start) / 24) * 100}%`,
                        backgroundColor: hub.color,
                      }}
                    />
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{hub.note}</p>
                </div>
              ))}
            </div>

            {/* Hour ruler */}
            <div
              className="flex justify-between mt-7 pt-4 text-[10px] font-semibold"
              style={{ color: "#9ca3af", borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              {["00", "06", "12", "18", "24"].map((h) => <span key={h}>{h}:00</span>)}
            </div>
          </div>

          {/* Markets card */}
          <div className="rounded-2xl p-7 lg:p-9" style={{ backgroundColor: "#1a1826", boxShadow: "0 20px 56px rgba(26,24,38,0.22)" }}>
            <p className="text-[10px] uppercase tracking-widest font-semibold mb-6" style={{ color: "rgba(255,255,255,0.42)" }}>
              Markets covered live
            </p>
            <div className="space-y-5 mb-7">
              {MARKETS.map((m) => (
                <div key={m.label} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#9b8dd4" }} />
                  <div>
                    <div className="text-sm font-semibold text-white">{m.label}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{m.window}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed pt-6" style={{ color: "rgba(255,255,255,0.6)", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              No night shift skeleton crew — every hour of your customers' day is covered by a
              hub that is fully staffed at the time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
