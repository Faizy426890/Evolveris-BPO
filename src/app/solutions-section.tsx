const SERVICES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    title: "Customer Experience",
    desc: "Specialists handling customer interactions with empathy and precision across every channel.",
    tag: "CX",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Technical Support",
    desc: "Troubleshooting complex technical issues with trained, certified agents who resolve on first contact.",
    tag: "TECH",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Sales & Lead Generation",
    desc: "Driving revenue through high-converting outbound and inbound sales engines.",
    tag: "SALES",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Back Office",
    desc: "Processing documents and data efficiently so your front office can stay focused.",
    tag: "OPS",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Multilingual Support",
    desc: "Communicating with international customers in their own language across 30+ languages.",
    tag: "MULTI",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Real-Time Analyst Services",
    desc: "On-floor RTAs monitoring performance and responding to deviations as they happen.",
    tag: "RTA",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Workforce & Performance",
    desc: "Monitoring operational analytics to keep your customer engine running at peak efficiency.",
    tag: "WFM",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "AI & Automation",
    desc: "Working alongside AI assistants to scale operations without losing the human touch.",
    tag: "AI",
  },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 lg:py-32" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            What We Do
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Solutions built around{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>your</span>
          <br />
          business.
        </h2>
        <p className="text-center max-w-xl mx-auto mb-16 text-base" style={{ color: "#6b7280" }}>
          Eight specialized services, one connected operation — designed to scale as you grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((svc, i) => (
            <div key={i} className="group ev-card p-6 rounded-2xl cursor-pointer">
              {/* Tag + icon row */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {svc.icon}
                </div>
                <span
                  className="text-[10px] tracking-widest uppercase font-semibold px-2 py-1 rounded-md"
                  style={{ backgroundColor: "#f5f2ec", color: "#9b8dd4" }}
                >
                  {svc.tag}
                </span>
              </div>
              <h3 className="font-bold mb-2.5 text-base" style={{ color: "#1a1826" }}>
                {svc.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {svc.desc}
              </p>
              <div
                className="mt-4 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "#7b6dc4" }}
              >
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
