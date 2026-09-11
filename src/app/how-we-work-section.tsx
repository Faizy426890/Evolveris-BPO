const PILLARS = [
  {
    title: "Omni-Channel Convenience",
    desc: "We meet your customers wherever they are — phone, email, live chat, social channels — offering a seamless and consistent experience across all platforms.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Empathetic Interaction",
    desc: "Every touchpoint shows genuine understanding and respect. We don't just resolve issues — we connect with your customers emotionally.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Expert Resolution",
    desc: "Our agents are thoroughly trained, highly knowledgeable, and empowered to take ownership of issues from start to finish.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Proactive Support",
    desc: "Beyond troubleshooting, we anticipate needs — providing self-service resources, follow-ups, and forward-thinking solutions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            How We Work
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Strategic support built on speed,{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>empathy &amp; expertise.</span>
        </h2>
        <p className="text-center max-w-xl mx-auto mb-14" style={{ color: "#6b7280" }}>
          Four principles every Evolveris agent is trained and measured against, in Pakistan and Accra alike.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="ev-card p-7 rounded-2xl relative overflow-hidden">
              {/* Background number */}
              <span
                className="absolute top-4 right-5 text-7xl font-extrabold select-none pointer-events-none"
                style={{ color: "rgba(123,109,196,0.06)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10"
                style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
              >
                {p.icon}
              </div>

              <h3 className="font-bold text-lg mb-2.5 relative z-10" style={{ color: "#1a1826" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: "#6b7280" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
