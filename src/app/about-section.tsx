const PROOF = [
  { value: "2", label: "Delivery hubs", sub: "Pakistan & Accra" },
  { value: "6", label: "Sectors served", sub: "Medical to telecom" },
  { value: "20+", label: "Trained specialists", sub: "On the floor today" },
  { value: "24/7", label: "Escalation line", sub: "A human, every hour" },
]

const PRINCIPLES = [
  {
    title: "Staffed like an in-house team",
    desc: "Named agents who sit on your queue, learn your product and stay on it — not a rotating pool that treats your brand as one account among forty.",
  },
  {
    title: "Trained before the first live call",
    desc: "Sector-specific onboarding, your escalation rules, your tone. An agent takes a real customer only once they've proven they can handle one.",
  },
  {
    title: "Priced so you can actually scale",
    desc: "The cost structure of two delivery hubs, without the quality trade-off that usually comes attached to that sentence.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            About Us
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-12 lg:mb-16" style={{ color: "#1a1826" }}>
          Who{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>Evolveris</span>
          {" "}is.
        </h2>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* Left: the statement */}
          <div>
            <div
              className="rounded-2xl p-8 lg:p-10 mb-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderLeft: "4px solid #7b6dc4",
              }}
            >
              <p
                className="text-xl lg:text-2xl leading-relaxed font-medium"
                style={{ color: "#1a1826" }}
              >
                Evolveris runs support, back-office and collections work across medical intake,
                debt recovery, fintech and retail — staffed and trained the way an in-house team
                would be, at the cost structure that lets you scale.
              </p>
            </div>

            <p className="text-base leading-relaxed mb-5" style={{ color: "#6b7280" }}>
              That sentence is the whole company. We are not a call centre renting you seats by
              the hour, and we are not a consultancy that hands over a deck and leaves. We take
              a queue that is currently eating your team's time, staff it with people who are
              trained on your business, and run it alongside you from Pakistan and Accra.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>
              Two hubs, five hours apart, means your customers reach a fully staffed team across
              the UK, EU and US working day — with the same discipline applied to a HIPAA-sensitive
              patient intake queue as to a peak-season retail inbox.
            </p>
          </div>

          {/* Right: principles + proof */}
          <div>
            <div className="space-y-4 mb-8">
              {PRINCIPLES.map((p, i) => (
                <div key={p.title} className="ev-feat rounded-2xl p-6 flex gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-extrabold"
                    style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1.5" style={{ color: "#1a1826" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Proof strip */}
            <div
              className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid #1a1826" }}
            >
              {PROOF.map((s) => (
                <div key={s.label} className="p-6" style={{ backgroundColor: "#1a1826" }}>
                  <div className="text-2xl font-black mb-1" style={{ color: "#9b8dd4" }}>
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-white mb-0.5">{s.label}</div>
                  <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.42)" }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
