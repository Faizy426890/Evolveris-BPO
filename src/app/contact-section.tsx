"use client"

import { useState } from "react"
import { toast } from "sonner"

const SERVICE_CHIPS = [
  "Customer Experience",
  "Technical Support",
  "Sales",
  "Back Office",
  "Multilingual Support",
  "RTA Services",
  "Workforce Solutions",
  "AI & Automation",
]

const WHY_US = [
  "Trained, multilingual specialists ready to scale",
  "Real-time analysts who control the operation live",
  "Workforce management and performance built in",
  "AI and automation that amplify people, not replace them",
  "Global reach with local cultural expertise",
]

export default function ContactSection() {
  const [selected, setSelected] = useState<string[]>(["Customer Experience"])
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [teamSize, setTeamSize] = useState("")
  const [launchDate, setLaunchDate] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function toggle(chip: string) {
    setSelected((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !company) {
      toast.error("Please fill in company and email.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: company,
          email,
          phone: teamSize,
          message: `Services: ${selected.join(", ")}\nTeam Size: ${teamSize}\nLaunch Date: ${launchDate}\n\n${message}`,
        }),
      })
      if (!res.ok) throw new Error("Failed")
      setSubmitted(true)
      toast.success("Request received! We'll be in touch within 24 hours.")
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    backgroundColor: "#f8f7f4",
    border: "1.5px solid rgba(0,0,0,0.1)",
    color: "#1a1826",
    borderRadius: "12px",
    outline: "none",
    width: "100%",
    padding: "12px 16px",
    fontSize: "0.875rem",
    transition: "border-color 0.2s",
  } as React.CSSProperties

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            Contact
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Tell us what's eating your{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>team's time.</span>
        </h2>
        <p className="text-center max-w-lg mx-auto mb-16" style={{ color: "#6b7280" }}>
          We'll map it against a queue we already run, and tell you honestly whether Evolveris is a fit before we talk numbers.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form card */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 8px 40px rgba(26,24,38,0.07)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#ede9fc" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7b6dc4" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1826" }}>Request Received!</h3>
                <p style={{ color: "#6b7280" }}>Our team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Service chips */}
                <div className="mb-6">
                  <div className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: "#7b6dc4" }}>
                    What are you looking for?
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_CHIPS.map((chip) => {
                      const isOn = selected.includes(chip)
                      return (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => toggle(chip)}
                          className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                          style={{
                            backgroundColor: isOn ? "#7b6dc4" : "#f5f2ec",
                            color: isOn ? "#ffffff" : "#6b7280",
                            border: isOn ? "1.5px solid #7b6dc4" : "1.5px solid rgba(0,0,0,0.1)",
                          }}
                        >
                          {isOn && "✓ "}{chip}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Fields */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>
                      Company
                    </label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company"
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#7b6dc4")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#7b6dc4")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>
                      Team Size
                    </label>
                    <input
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      placeholder="e.g. 50 agents"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#7b6dc4")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>
                      Launch Date
                    </label>
                    <input
                      type="date"
                      value={launchDate}
                      onChange={(e) => setLaunchDate(e.target.value)}
                      style={{ ...inputStyle, colorScheme: "light" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7b6dc4")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>
                    Tell Us About Your Operation
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your goals, challenges and timeline..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "#7b6dc4")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
                >
                  {loading ? "Sending…" : "Request a Consultation →"}
                </button>
              </form>
            )}
          </div>

          {/* Why Evolveris */}
          <div className="py-2">
            {/* Direct email card */}
            <div
              className="flex items-center gap-4 px-5 py-4 rounded-2xl mb-8"
              style={{
                backgroundColor: "#ede9fc",
                border: "1.5px solid rgba(123,109,196,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#7b6dc4" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest font-semibold mb-0.5" style={{ color: "#9b8dd4" }}>
                  Email us directly
                </div>
                <a
                  href="mailto:admin@evolverisbpo.com"
                  className="text-sm font-bold transition-colors duration-200 hover:underline"
                  style={{ color: "#1a1826" }}
                >
                  admin@evolverisbpo.com
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-extrabold mb-2" style={{ color: "#1a1826" }}>
              Why teams choose{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>Evolveris</span>
            </h3>
            <p className="mb-8" style={{ color: "#6b7280" }}>
              Over 90% of our clients stay with us after 12 months because results are real — and visible.
            </p>

            <div className="space-y-4 mb-10">
              {WHY_US.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#ede9fc" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7b6dc4" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-base leading-relaxed" style={{ color: "#4b5563" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 20px rgba(26,24,38,0.06)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill="#f0c540">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="text-xs ml-1 font-semibold" style={{ color: "#6b7280" }}>5.0</span>
              </div>
              <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "#4b5563" }}>
                "Evolveris transformed our customer support. We went from reactive to proactive — service levels jumped to 94% within 60 days of launch."
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: "#7b6dc4" }}
                >
                  S
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "#1a1826" }}>Sarah K.</div>
                  <div className="text-xs" style={{ color: "#9ca3af" }}>Head of Operations, SaaS Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
