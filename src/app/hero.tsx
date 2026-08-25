const LIVE_ITEMS = [
  { icon: "💬", type: "CHAT", msg: "I need help with my order", time: "01s", cls: "op-item-1" },
  { icon: "📞", type: "CALL", msg: "Incoming call — Priority", time: "02s", cls: "op-item-2" },
  { icon: "✉️", type: "EMAIL", msg: "New ticket #4821 opened", time: "03s", cls: "op-item-3" },
  { icon: "📊", type: "LIVE", msg: "Service Level 96.4%", time: "04s", cls: "op-item-4" },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f5f2ec", minHeight: "100vh" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(123,109,196,0.09) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Large purple orb — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-12%", top: "-12%",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,109,196,0.11) 0%, transparent 60%)",
        }}
      />
      {/* Golden orb — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-8%", bottom: "-8%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,197,64,0.11) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16 md:pb-20">
        {/* Announcement strip */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: "rgba(237,233,252,0.85)",
              color: "#7b6dc4",
              border: "1.5px solid rgba(123,109,196,0.22)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#7b6dc4" }} />
            Serving 500+ global brands across 14 industries
            <span style={{ opacity: 0.4 }}>•</span>
            <a href="#solutions" className="underline underline-offset-2">Explore our services →</a>
          </div>
        </div>

        {/* Hero headline — centered */}
        <div className="text-center mb-10">
          <h1
            className="text-5xl md:text-6xl lg:text-[4.75rem] font-black leading-[1.03] tracking-tight mb-6 mx-auto"
            style={{ color: "#1a1826", maxWidth: 820 }}
          >
            The People Behind
            <br />
            <span className="relative inline-block">
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>Better</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 130 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 5 C25 1 50 8 75 4 C100 1 120 8 130 4"
                  stroke="#7b6dc4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {" "}Customer
            <br />
            Experiences.
          </h1>
          <p
            className="text-xl leading-relaxed mx-auto"
            style={{ color: "#6b7280", maxWidth: 580 }}
          >
            Evolveris connects exceptional people, intelligent technology and real‑time expertise to deliver CX that makes businesses grow.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-7">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "#1a1826",
              color: "#ffffff",
              boxShadow: "0 6px 28px rgba(26,24,38,0.28)",
            }}
          >
            Build Your Solution →
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-200 hover:bg-white"
            style={{
              border: "1.5px solid rgba(26,24,38,0.2)",
              color: "#1a1826",
              backgroundColor: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(10px)",
            }}
          >
            See How It Works
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
          <div className="flex -space-x-2">
            {["#7b6dc4", "#f0c540", "#1a1826", "#9b8dd4"].map((c, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: c, zIndex: 4 - i }}
              >
                {["S", "A", "M", "R"][i]}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map(n => (
                <svg key={n} width="13" height="13" viewBox="0 0 24 24" fill="#f0c540">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-xs" style={{ color: "#6b7280" }}>
              Trusted by <strong style={{ color: "#1a1826" }}>500+</strong> companies worldwide
            </p>
          </div>
          <div
            className="h-7 w-px hidden sm:block"
            style={{ backgroundColor: "rgba(26,24,38,0.12)" }}
          />
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="text-xs font-semibold" style={{ color: "#4b5563" }}>SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="text-xs font-semibold" style={{ color: "#4b5563" }}>GDPR Compliant</span>
          </div>
        </div>

        {/* === Dashboard showcase === */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Main live operation panel */}
          <div
            className="md:col-span-2 rounded-3xl overflow-hidden float-up"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 40px 100px rgba(26,24,38,0.13)",
            }}
          >
            {/* Mac-style top bar */}
            <div
              className="px-6 py-3.5 flex items-center justify-between"
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.07)",
                backgroundColor: "#fafaf9",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: "#059669" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b7280" }}>
                  Live Operation Center
                </span>
              </div>
              <div style={{ width: 52 }} />
            </div>

            <div className="p-4 sm:p-6 grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Left: live activity feed */}
              <div>
                <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: "#9ca3af" }}>
                  Activity Feed
                </p>
                <div className="space-y-2.5">
                  {LIVE_ITEMS.map(item => (
                    <div
                      key={item.type}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl ${item.cls}`}
                      style={{
                        backgroundColor: "#f8f7f4",
                        border: "1px solid rgba(0,0,0,0.055)",
                      }}
                    >
                      <span className="text-base leading-none">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] tracking-widest uppercase font-semibold mb-0.5" style={{ color: "#9ca3af" }}>
                          {item.type}
                        </div>
                        <div className="text-sm font-medium truncate" style={{ color: "#1a1826" }}>
                          {item.msg}
                        </div>
                      </div>
                      <span
                        className="text-xs flex-shrink-0 px-2 py-0.5 rounded-full font-semibold"
                        style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: chat + stats */}
              <div className="flex flex-col gap-3">
                <p className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "#9ca3af" }}>
                  Live Chat
                </p>
                <div className="flex justify-end">
                  <span
                    className="px-4 py-2.5 rounded-2xl rounded-br-sm text-sm font-medium"
                    style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
                  >
                    I need help with my order.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: "#7b6dc4" }}
                  >
                    E
                  </div>
                  <span
                    className="px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm"
                    style={{
                      backgroundColor: "#f0ede8",
                      color: "#1a1826",
                      border: "1px solid rgba(0,0,0,0.07)",
                    }}
                  >
                    We're here to help! Let me look into that right now.
                  </span>
                </div>

                {/* Metric strip */}
                <div
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl mt-auto"
                  style={{ backgroundColor: "#ede9fc" }}
                >
                  {[
                    { val: "96%", label: "CSAT" },
                    { val: "24/7", label: "Coverage" },
                    { val: "200+", label: "Agents" },
                  ].map((m, i, arr) => (
                    <div key={m.label} className="flex items-center gap-3">
                      <div className="text-center">
                        <div className="text-lg font-extrabold" style={{ color: "#7b6dc4" }}>{m.val}</div>
                        <div className="text-[10px] uppercase tracking-wide" style={{ color: "#9b8dd4" }}>{m.label}</div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-px h-8" style={{ backgroundColor: "rgba(123,109,196,0.2)" }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column: 3 stat cards — row on mobile, stacked on desktop */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-5">
            {/* Dark card */}
            <div
              className="rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col justify-between"
              style={{
                backgroundColor: "#1a1826",
                boxShadow: "0 20px 56px rgba(26,24,38,0.28)",
              }}
            >
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-2 md:mb-3"
                style={{ backgroundColor: "rgba(123,109,196,0.2)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9b8dd4" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black text-white mb-0.5 md:mb-1">200+</div>
                <div className="text-[9px] md:text-xs uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.42)" }}>
                  Expert Agents
                </div>
              </div>
            </div>

            {/* Purple card */}
            <div
              className="rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col justify-between"
              style={{
                backgroundColor: "#7b6dc4",
                boxShadow: "0 20px 56px rgba(123,109,196,0.38)",
              }}
            >
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-2 md:mb-3"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black text-white mb-0.5 md:mb-1">$180M+</div>
                <div className="text-[9px] md:text-xs uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.58)" }}>
                  Revenue Driven
                </div>
              </div>
            </div>

            {/* White card */}
            <div
              className="rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col justify-between"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 20px 56px rgba(26,24,38,0.09)",
              }}
            >
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-2 md:mb-3"
                style={{ backgroundColor: "#ede9fc" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7b6dc4" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black mb-0.5 md:mb-1" style={{ color: "#1a1826" }}>95%</div>
                <div className="text-[9px] md:text-xs uppercase tracking-widest font-semibold" style={{ color: "#9ca3af" }}>
                  Avg CSAT Score
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
