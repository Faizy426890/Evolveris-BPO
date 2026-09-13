const FEATURED_LANGUAGES = [
  { name: "English", flag: "🇬🇧", native: "English" },
  { name: "Arabic", flag: "🇸🇦", native: "العربية" },
  { name: "Urdu", flag: "🇵🇰", native: "اردو" },
  { name: "French", flag: "🇫🇷", native: "Français" },
  { name: "Hindi", flag: "🇮🇳", native: "हिन्दी" },
]

const STATS = [
  { value: "5+", label: "Languages Supported" },
  { value: "3", label: "Regions Covered" },
  { value: "24/7", label: "Multilingual Coverage" },
]

export default function LanguagesSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            Multilingual Support
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-4"
          style={{ color: "#1a1826" }}
        >
          We Speak Your{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>Language.</span>
        </h2>
        <p className="text-center max-w-xl mx-auto mb-16" style={{ color: "#6b7280" }}>
          From English to Arabic — our teams deliver culturally fluent, locally relevant customer experiences across every market you serve.
        </p>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden mb-16"
          style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-7 px-4"
              style={{ backgroundColor: "#f5f2ec" }}
            >
              <div className="text-3xl font-black mb-1" style={{ color: "#7b6dc4" }}>{s.value}</div>
              <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#9ca3af" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Featured languages */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: "#9ca3af" }}>
            Core Languages
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {FEATURED_LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="ev-card flex items-center gap-4 px-5 py-4 rounded-2xl"
              >
                <span className="text-2xl leading-none flex-shrink-0">{lang.flag}</span>
                <div>
                  <div className="text-sm font-bold" style={{ color: "#1a1826" }}>{lang.name}</div>
                  <div
                    className="text-xs mt-0.5"
                    style={{
                      color: "#9ca3af",
                      direction: ["Arabic", "Urdu"].includes(lang.name) ? "rtl" : "ltr",
                      fontFamily: ["Arabic", "Urdu"].includes(lang.name) ? "system-ui" : "inherit",
                    }}
                  >
                    {lang.native}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "#1a1826",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(26,24,38,0.22)",
            }}
          >
            Discuss Your Language Needs →
          </a>
        </div>
      </div>
    </section>
  )
}
