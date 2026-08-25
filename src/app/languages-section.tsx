const FEATURED_LANGUAGES = [
  { name: "English", flag: "🇺🇸", native: "English" },
  { name: "Spanish", flag: "🇪🇸", native: "Español" },
  { name: "Portuguese", flag: "🇧🇷", native: "Português" },
  { name: "Italian", flag: "🇮🇹", native: "Italiano" },
  { name: "Arabic", flag: "🇸🇦", native: "العربية" },
  { name: "Hindi", flag: "🇮🇳", native: "हिन्दी" },
  { name: "Urdu", flag: "🇵🇰", native: "اردو" },
  { name: "Punjabi", flag: "🇮🇳", native: "ਪੰਜਾਬੀ" },
]

const AFRICAN_LANGUAGES = [
  { name: "Swahili", flag: "🇰🇪", native: "Kiswahili" },
  { name: "Amharic", flag: "🇪🇹", native: "አማርኛ" },
  { name: "Yoruba", flag: "🇳🇬", native: "Yorùbá" },
  { name: "Hausa", flag: "🇳🇬", native: "هَوْسَ" },
  { name: "Zulu", flag: "🇿🇦", native: "isiZulu" },
  { name: "Igbo", flag: "🇳🇬", native: "Igbo" },
  { name: "Somali", flag: "🇸🇴", native: "Soomaali" },
  { name: "Afrikaans", flag: "🇿🇦", native: "Afrikaans" },
  { name: "Oromo", flag: "🇪🇹", native: "Oromoo" },
  { name: "Tigrinya", flag: "🇪🇷", native: "ትግርኛ" },
  { name: "Shona", flag: "🇿🇼", native: "chiShona" },
  { name: "Wolof", flag: "🇸🇳", native: "Wolof" },
]

const STATS = [
  { value: "20+", label: "Languages Supported" },
  { value: "14", label: "Regions Covered" },
  { value: "100%", label: "Native Fluency" },
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
          From English to Arabic to Swahili — our teams deliver culturally fluent, locally relevant customer experiences across every market you serve.
        </p>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-16"
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

        {/* African languages */}
        <div
          className="rounded-3xl p-8"
          style={{
            background: "linear-gradient(135deg, rgba(123,109,196,0.08) 0%, rgba(240,197,64,0.06) 100%)",
            border: "1.5px solid rgba(123,109,196,0.14)",
          }}
        >
          <div className="flex items-center gap-3 mb-7">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#ede9fc" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7b6dc4" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-extrabold" style={{ color: "#1a1826" }}>
                African Languages &amp; Beyond
              </div>
              <div className="text-xs" style={{ color: "#6b7280" }}>
                Covering all major African markets and dialects
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {AFRICAN_LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 2px 8px rgba(26,24,38,0.06)",
                }}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="text-sm font-semibold" style={{ color: "#1a1826" }}>{lang.name}</span>
                <span className="text-xs" style={{ color: "#9ca3af" }}>{lang.native}</span>
              </div>
            ))}
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full"
              style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
            >
              <span className="text-sm font-bold">+ Many more</span>
            </div>
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
