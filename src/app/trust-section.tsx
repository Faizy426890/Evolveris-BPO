const SECURITY_FEATURES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    label: "Data Security",
    desc: "End-to-end encryption and compliance with GDPR, HIPAA and SOC 2.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Access Control",
    desc: "Role-based permissions and multi-factor authentication across all systems.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    label: "Quality Assurance",
    desc: "Regular call monitoring, scoring, and calibration sessions with clients.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: "Workforce Management",
    desc: "Precision scheduling and real-time adherence monitoring across shifts.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "24/7 Monitoring",
    desc: "Continuous infrastructure and security monitoring around the clock.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    label: "Transparent Reporting",
    desc: "Real-time dashboards and weekly performance reports with full visibility.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Business Continuity",
    desc: "Redundant systems, disaster recovery plans and geographic distribution.",
  },
]

export default function TrustSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            Trust &amp; Security
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Your customers. Your data.{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>Our</span>
          <br />
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>responsibility.</span>
        </h2>
        <p className="text-center max-w-lg mx-auto mb-16" style={{ color: "#6b7280" }}>
          Enterprise-grade security, quality controls and compliance wrapped around every operation we run.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Agent image card */}
          <div className="flex items-center justify-center px-8 sm:px-0">
            <div className="relative w-full" style={{ maxWidth: 360 }}>
              {/* Background card */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #ede9fc 0%, #f5f2ec 55%, rgba(240,197,64,0.12) 100%)",
                  paddingTop: 32,
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingBottom: 0,
                  minHeight: 380,
                }}
              >
                {/* Top strip inside card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#7b6dc4" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.52 16l-.6.92z" />
                      </svg>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(123,109,196,0.12)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7b6dc4" strokeWidth="2.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "#fff", color: "#059669" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#059669" }} />
                    Online
                  </div>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(26,24,38,0.08)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>

                {/* Chat bubble — customer */}
                <div
                  className="absolute rounded-2xl p-3 text-xs"
                  style={{
                    top: 100,
                    left: -10,
                    backgroundColor: "#ffffff",
                    boxShadow: "0 8px 24px rgba(26,24,38,0.14)",
                    maxWidth: 170,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#9b8dd4" }} />
                    <span className="font-bold text-[11px]" style={{ color: "#1a1826" }}>Marie</span>
                    <span className="text-[9px]" style={{ color: "#9ca3af" }}>Sent just now</span>
                  </div>
                  <p style={{ color: "#4b5563", lineHeight: 1.5 }}>
                    Hi! Can you help me cancel my reservation?
                  </p>
                </div>

                {/* Agent 3D PNG image */}
                <div className="flex justify-center" style={{ marginBottom: -8 }}>
                  <img
                    src="https://res.cloudinary.com/geecu3mo/image/upload/v1787659673/pngtree-3d-customer-service-operator-png-illustration-png-image_10160271-removebg-preview.png"
                    alt="Customer service agent"
                    style={{
                      width: "88%",
                      height: 260,
                      objectFit: "contain",
                      objectPosition: "bottom",
                      filter: "drop-shadow(0 20px 40px rgba(123,109,196,0.22))",
                    }}
                  />
                </div>

                {/* Chat bubble — agent reply */}
                <div
                  className="absolute rounded-2xl p-3 text-xs"
                  style={{
                    bottom: 30,
                    right: -10,
                    backgroundColor: "#7b6dc4",
                    boxShadow: "0 8px 24px rgba(123,109,196,0.32)",
                    maxWidth: 170,
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm">🇺🇸</span>
                    <span className="font-bold text-[11px] text-white">Evolveris</span>
                    <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.6)" }}>Just now</span>
                  </div>
                  <p className="text-white" style={{ lineHeight: 1.5 }}>
                    Sure, I'll cancel that immediately for you!
                  </p>
                </div>

                {/* Decorative pink squiggle */}
                <svg
                  className="absolute pointer-events-none"
                  style={{ top: "45%", left: "38%", opacity: 0.55 }}
                  width="48"
                  height="32"
                  viewBox="0 0 48 32"
                  fill="none"
                >
                  <path d="M2 24 C10 4 20 28 30 12 C38 2 44 20 46 16" stroke="#f59e8b" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* SOC 2 floating badge */}
              <div
                className="absolute flex items-center gap-2 px-3.5 py-2 rounded-xl"
                style={{
                  top: 28,
                  right: -24,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 6px 20px rgba(26,24,38,0.14)",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <span className="text-sm font-extrabold" style={{ color: "#7b6dc4" }}>SOC 2</span>
                <span className="text-xs" style={{ color: "#6b7280" }}>Compliant</span>
              </div>

              {/* GDPR floating badge */}
              <div
                className="absolute flex items-center gap-2 px-3.5 py-2 rounded-xl"
                style={{
                  bottom: 28,
                  left: -24,
                  backgroundColor: "#fef9e7",
                  boxShadow: "0 6px 20px rgba(240,197,64,0.2)",
                  border: "1px solid rgba(240,197,64,0.25)",
                }}
              >
                <span className="text-sm font-extrabold" style={{ color: "#c8910a" }}>GDPR</span>
                <span className="text-xs" style={{ color: "#6b7280" }}>Ready</span>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SECURITY_FEATURES.map((f, i) => (
              <div key={i} className="ev-feat flex items-start gap-4 px-5 py-4 rounded-2xl">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {f.icon}
                </div>
                <div>
                  <div className="text-sm font-bold mb-1" style={{ color: "#1a1826" }}>
                    {f.label}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
