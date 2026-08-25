const KPI = [
  { label: "Service Level", value: "95", unit: "%", color: "#7b6dc4", bg: "#ede9fc" },
  { label: "Quality Score", value: "96", unit: "%", color: "#c8910a", bg: "#fef9e7" },
  { label: "CSAT", value: "4.7", unit: "/5", color: "#7b6dc4", bg: "#ede9fc" },
  { label: "Resolution Rate", value: "92", unit: "%", color: "#c8910a", bg: "#fef9e7" },
]

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
const SL_DATA = [88, 90, 91, 93, 94, 95]
const CSAT_DATA = [90, 91, 90, 93, 95, 96]

function toSvgY(val: number, min = 80, max = 100, height = 120) {
  return height - ((val - min) / (max - min)) * height
}

function buildPath(data: number[], width: number, height: number, min = 80, max = 100) {
  const step = width / (data.length - 1)
  const points = data.map((v, i) => `${i * step},${toSvgY(v, min, max, height)}`)
  return `M${points.join(" L")}`
}

export default function PerformanceSection() {
  const W = 500
  const H = 120

  const slPath = buildPath(SL_DATA, W, H)
  const csatPath = buildPath(CSAT_DATA, W, H)
  const slArea = `${slPath} L${W},${H} L0,${H} Z`
  const csatArea = `${csatPath} L${W},${H} L0,${H} Z`

  return (
    <section id="performance" className="py-24 lg:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            Performance
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          We don't just manage operations.
          <br />
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>We measure them.</span>
        </h2>
        <p className="text-center max-w-xl mx-auto mb-16" style={{ color: "#6b7280" }}>
          Live performance dashboards, continuous improvement loops and transparent reporting across every operation.
        </p>

        {/* KPI tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {KPI.map((k, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: k.bg, border: "none" }}
            >
              <div className="text-xs tracking-widest uppercase mb-3 font-semibold" style={{ color: k.color }}>
                {k.label}
              </div>
              <div className="flex items-end gap-0.5">
                <span className="text-5xl font-extrabold leading-none" style={{ color: k.color }}>
                  {k.value}
                </span>
                <span className="text-xl font-bold mb-1" style={{ color: k.color, opacity: 0.7 }}>
                  {k.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Area chart */}
          <div
            className="lg:col-span-2 p-6 rounded-2xl"
            style={{ backgroundColor: "#f8f7f4", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold" style={{ color: "#1a1826" }}>
                Service Level vs CSAT
              </h3>
              <span
                className="text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
              >
                6 MONTHS
              </span>
            </div>
            <div className="overflow-hidden">
              <svg
                viewBox={`0 0 ${W} ${H + 30}`}
                width="100%"
                preserveAspectRatio="none"
                style={{ display: "block" }}
              >
                <defs>
                  <linearGradient id="slGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7b6dc4" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#7b6dc4" stopOpacity="0.01" />
                  </linearGradient>
                  <linearGradient id="csatGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f0c540" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#f0c540" stopOpacity="0.01" />
                  </linearGradient>
                </defs>
                <path d={slArea} fill="url(#slGrad)" />
                <path d={csatArea} fill="url(#csatGrad)" />
                <path d={slPath} fill="none" stroke="#7b6dc4" strokeWidth="2.5" strokeLinecap="round" />
                <path d={csatPath} fill="none" stroke="#f0c540" strokeWidth="2.5" strokeLinecap="round" />
                {MONTHS.map((m, i) => (
                  <text
                    key={m}
                    x={(i * W) / (MONTHS.length - 1)}
                    y={H + 22}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#9ca3af"
                    fontFamily="var(--font-sans)"
                  >
                    {m}
                  </text>
                ))}
              </svg>
            </div>
            <div className="flex gap-6 mt-2">
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "#6b7280" }}>
                <span className="w-4 h-0.5 rounded" style={{ backgroundColor: "#7b6dc4" }} />
                Service Level
              </div>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "#6b7280" }}>
                <span className="w-4 h-0.5 rounded" style={{ backgroundColor: "#f0c540" }} />
                CSAT
              </div>
            </div>
          </div>

          {/* Radar chart */}
          <div
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "#f8f7f4", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <h3 className="font-bold mb-4" style={{ color: "#1a1826" }}>
              Operational Radar
            </h3>
            <RadarChart />
          </div>
        </div>
      </div>
    </section>
  )
}

function RadarChart() {
  const labels = ["Quality", "AHT", "Occupancy", "Adherence", "Productivity", "Resolution"]
  const values = [0.96, 0.88, 0.84, 0.91, 0.87, 0.92]
  const cx = 100
  const cy = 100
  const r = 72

  function polarToXY(angle: number, radius: number) {
    const rad = (angle - 90) * (Math.PI / 180)
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
  }

  const angleStep = 360 / labels.length
  const dataPoints = values.map((v, i) => polarToXY(i * angleStep, v * r))
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z"
  const gridPoints = Array.from({ length: labels.length }, (_, i) => polarToXY(i * angleStep, r))

  return (
    <svg viewBox="0 0 200 200" width="100%" className="block mx-auto">
      <defs>
        <linearGradient id="radarGradLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7b6dc4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7b6dc4" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((scale) => {
        const pts = Array.from({ length: labels.length }, (_, i) => polarToXY(i * angleStep, scale * r))
        const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z"
        return <path key={scale} d={path} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      })}
      {gridPoints.map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      ))}
      <path d={dataPath} fill="url(#radarGradLight)" stroke="#7b6dc4" strokeWidth="2" />
      {labels.map((label, i) => {
        const pos = polarToXY(i * angleStep, r + 16)
        return (
          <text
            key={i}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8"
            fill="#6b7280"
            fontFamily="var(--font-sans)"
            fontWeight="600"
          >
            {label}
          </text>
        )
      })}
    </svg>
  )
}
