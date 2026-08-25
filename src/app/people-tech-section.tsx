const HIGHLIGHTS = [
  { stat: "97%", label: "AHT Score", bg: "#ede9fc", text: "#7b6dc4" },
  { stat: "4.8★", label: "Agent Rating", bg: "#fef9e7", text: "#c8910a" },
  { stat: "30+", label: "Languages", bg: "#ede9fc", text: "#7b6dc4" },
]

const BENEFITS = [
  "Rigorous 8-week onboarding for every specialist",
  "Real-time coaching from on-floor analysts",
  "AI tools that amplify human performance",
  "Workforce management built into every operation",
  "Continuous quality calibration and feedback loops",
]

export default function PeopleTechSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            People + Technology
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          People powered.{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>Technology</span>
          <br />
          enabled.
        </h2>
        <p className="text-center max-w-lg mx-auto mb-16" style={{ color: "#6b7280" }}>
          Human empathy and intelligent technology merge into one seamless engine for better customer experiences.
        </p>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Image grid with stat overlays */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large left image */}
            <div className="relative rounded-2xl overflow-hidden col-span-1 row-span-2" style={{ height: 420 }}>
              <img
                src="https://voiptimecloud.com/blog_img/agent-satisfaction-header.jpg"
                alt="Customer support agent"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(26,24,38,0.5) 0%, transparent 60%)" }}
              />
              {/* Overlay tag */}
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#7b6dc4" }}>
                  People First
                </div>
                <div className="text-sm font-bold" style={{ color: "#1a1826" }}>
                  Human Empathy
                </div>
              </div>
            </div>

            {/* Right: second image + stat cards */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 200 }}>
                <img
                  src="https://www.telecominc.com/wp-content/uploads/man-at-desk-scaled.jpg"
                  alt="Technology workspace"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(26,24,38,0.4) 0%, transparent 50%)" }}
                />
                <div
                  className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)" }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#7b6dc4" }}>
                    Tech Enabled
                  </div>
                  <div className="text-sm font-bold" style={{ color: "#1a1826" }}>
                    AI + Automation
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              {HIGHLIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-4 py-3 flex items-center gap-3"
                  style={{ backgroundColor: h.bg }}
                >
                  <span className="text-2xl font-extrabold" style={{ color: h.text }}>
                    {h.stat}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#4b5563" }}>
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: benefits list */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-extrabold mb-2" style={{ color: "#1a1826" }}>
              Why{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>our team</span>{" "}
              performs better.
            </h3>
            <p className="mb-8" style={{ color: "#6b7280" }}>
              Over 90% of our clients continue to work with Evolveris after 12 months — because results speak.
            </p>

            <div className="space-y-4">
              {BENEFITS.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#ede9fc" }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7b6dc4" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-base leading-relaxed" style={{ color: "#4b5563" }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#7b6dc4", color: "#ffffff" }}
            >
              Meet Our Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
