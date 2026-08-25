const REVIEWS = [
  {
    title: "A step-change in our CX quality",
    body: "Evolveris transformed how we handle customer interactions. Within the first 90 days our CSAT climbed 18 points and repeat contacts dropped significantly. They genuinely function as part of our team.",
    name: "Sarah K.",
    role: "CX Director",
    country: "United Kingdom",
    date: "March 2025",
    initials: "SK",
    color: "#7b6dc4",
  },
  {
    title: "Seamless integration with our operations",
    body: "The onboarding was faster than anything I've experienced with a BPO. Within two weeks agents were handling our queues independently. The RTA service has been a game-changer for live performance.",
    name: "Michael T.",
    role: "Chief Operating Officer",
    country: "United States",
    date: "January 2025",
    initials: "MT",
    color: "#1a1826",
  },
  {
    title: "Finally, a BPO that actually delivers",
    body: "We had bad experiences with outsourcing before Evolveris. They are different — proactive, data-driven, and genuinely invested in outcomes. Their multilingual team covers markets we could never have staffed ourselves.",
    name: "Amanda R.",
    role: "Head of Operations",
    country: "Australia",
    date: "February 2025",
    initials: "AR",
    color: "#f0c540",
  },
  {
    title: "30+ languages, consistent quality",
    body: "We needed native-speaker support across DACH, LATAM, and Southeast Asia simultaneously. Evolveris stood up all three markets without a dip in quality. The cultural localization is something most BPOs just don't do.",
    name: "David L.",
    role: "Global Head of Support",
    country: "Germany",
    date: "April 2025",
    initials: "DL",
    color: "#7b6dc4",
  },
  {
    title: "AI & Automation done right",
    body: "Their human-plus-AI model is exactly what we needed. Chatbots handle tier-1 overnight, agents take over anything complex during the day. 40% cost reduction in the first quarter and quality actually improved.",
    name: "Jennifer M.",
    role: "VP of Operations",
    country: "Canada",
    date: "May 2025",
    initials: "JM",
    color: "#1a1826",
  },
  {
    title: "Back office processing at scale",
    body: "99.9% accuracy on our claims processing is not a target we thought was achievable with an external partner. Evolveris proved us wrong. The turnaround times and audit trail are exactly what our compliance team needed.",
    name: "Robert S.",
    role: "Operations Lead",
    country: "Singapore",
    date: "June 2025",
    initials: "RS",
    color: "#c8a000",
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f0c540">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#ede9fc" stroke="#7b6dc4" strokeWidth="1.5" />
            </svg>
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
              Client Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
            What our clients{" "}
            <span className="font-serif italic" style={{ color: "#7b6dc4" }}>say</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#6b7280" }}>
            Real results from businesses that chose Evolveris as their CX partner.
          </p>
        </div>

        {/* Review grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl"
              style={{
                backgroundColor: "#f5f2ec",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <StarRating />
              <h4 className="font-bold mt-3 mb-2 text-base" style={{ color: "#1a1826" }}>
                {r.title}
              </h4>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#4b5563" }}>
                {r.body}
              </p>
              <div className="flex items-center gap-3 mt-5 pt-5" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#1a1826" }}>
                    {r.name}
                  </div>
                  <div className="text-xs" style={{ color: "#9b8dd4" }}>
                    {r.role} · {r.country}
                  </div>
                </div>
                <div className="ml-auto text-xs" style={{ color: "#9ca3af" }}>{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <div className="flex -space-x-2">
            {["#7b6dc4","#1a1826","#f0c540","#c8f000"].map((c, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                style={{ backgroundColor: c }}
              >
                {["SK","MT","AR","DL"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm font-medium" style={{ color: "#1a1826" }}>
            Rated <strong>4.9 / 5</strong> based on client feedback
          </p>
        </div>
      </div>
    </section>
  )
}
