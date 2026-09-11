const BASELINE = [
  {
    title: "Data handling",
    desc: "Role-based access, encrypted storage and call-level audit trails, scoped to each client's own compliance requirements.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Agent training",
    desc: "Sector-specific onboarding before an agent takes a live call, not a generic script read from a shared playbook.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
      </svg>
    ),
  },
  {
    title: "Reporting",
    desc: "Direct visibility into queue performance, not a monthly PDF — you see what we see, when we see it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
]

export default function BaselineSection() {
  return (
    <section id="baseline" className="py-20 lg:py-28" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            The baseline
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Built for the sectors that{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>can't afford a bad call.</span>
        </h2>
        <p className="text-center max-w-xl mx-auto mb-14" style={{ color: "#6b7280" }}>
          Every queue we run inherits the same baseline, regardless of size.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BASELINE.map((b) => (
            <div key={b.title} className="ev-card p-8 rounded-2xl">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
              >
                {b.icon}
              </div>
              <h3 className="font-bold text-lg mb-2.5" style={{ color: "#1a1826" }}>
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
