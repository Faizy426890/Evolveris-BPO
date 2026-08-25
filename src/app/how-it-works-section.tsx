const STEPS = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Discover",
    desc: "We learn your business inside out — your customers, goals and pain points.",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Design",
    desc: "We blueprint your operation end-to-end: workflows, KPIs, staffing model.",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Build",
    desc: "We recruit, train and certify the perfect team for your brand and culture.",
  },
  {
    num: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    title: "Launch",
    desc: "We go live with a controlled rollout and real-time supervision from day one.",
  },
  {
    num: "05",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2.5 12a9.5 9.5 0 1 0 9.5-9.5" /><polyline points="2.5 3 2.5 9 8.5 9" />
      </svg>
    ),
    title: "Optimize",
    desc: "We monitor every metric, coach every agent and tighten every process continuously.",
  },
  {
    num: "06",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Scale",
    desc: "We grow with you — adding capacity, channels and geographies as you expand.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            How Evolveris Works
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          From idea to{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>operation.</span>
        </h2>
        <p className="text-center max-w-xl mx-auto mb-16" style={{ color: "#6b7280" }}>
          A six-stage journey from your first conversation to a fully scaling global operation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div key={step.num} className="ev-card p-7 rounded-2xl relative overflow-hidden">
              {/* Background number */}
              <span
                className="absolute top-4 right-5 text-7xl font-extrabold select-none pointer-events-none"
                style={{ color: "rgba(123,109,196,0.06)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}
              >
                {step.num}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10"
                style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
              >
                {step.icon}
              </div>

              {/* Step number badge */}
              <div
                className="text-xs font-bold tracking-widest uppercase mb-2 relative z-10"
                style={{ color: "#7b6dc4" }}
              >
                Step {step.num}
              </div>

              <h3 className="font-bold text-lg mb-2 relative z-10" style={{ color: "#1a1826" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: "#6b7280" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
