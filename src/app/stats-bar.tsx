const STATS = [
  { value: ">1K", label: "Leads generated monthly", badge: "Monthly" },
  { value: "$1M+", label: "Revenue brought to clients", badge: "Revenue" },
  { value: "20+", label: "Trained specialists", badge: "Team" },
  { value: "95%", label: "Average service level", badge: "SLA" },
  { value: "24/7", label: "Round-the-clock coverage", badge: "Hours" },
]

export default function StatsBar() {
  return (
    <div style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="text-center group">
              <div
                className="text-3xl lg:text-4xl font-extrabold mb-1.5 tracking-tight"
                style={{ color: "#1a1826" }}
              >
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "#6b7280" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
