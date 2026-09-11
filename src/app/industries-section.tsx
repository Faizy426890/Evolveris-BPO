"use client"

import { useState } from "react"

// All images from Unsplash CDN — no hotlink restrictions
const INDUSTRIES = [
  {
    id: "medical",
    label: "Medical & Healthcare",
    icon: "🏥",
    flow: ["Patient Intake", "Scheduling", "Insurance Verification", "After-Hours Triage", "Follow-Up"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "debt",
    label: "Debt Collection",
    icon: "💰",
    flow: ["Outreach", "Verification", "Negotiation", "Promise-to-Pay", "Settlement"],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fintech",
    label: "Fintech & Payments",
    icon: "💳",
    flow: ["Onboarding", "KYC & Compliance", "Fraud Alerts", "Disputes", "Support"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ecommerce",
    label: "eCommerce & Retail",
    icon: "🛍️",
    flow: ["Orders", "Returns", "Customer Chat", "Delivery", "Refunds"],
    img: "https://wpmedia.teamsupport.com/wp-content/uploads/2025/02/21213754/Untitled-design-99.jpg",
  },
  {
    id: "travel",
    label: "Travel & Hospitality",
    icon: "✈️",
    flow: ["Bookings", "Cancellations", "Rebooking", "Loyalty", "Feedback"],
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "technology",
    label: "Technology",
    icon: "📱",
    flow: ["Onboarding", "Tech Support", "Renewals", "Escalations", "NPS"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: "📦",
    flow: ["Tracking", "Dispatch", "Claims", "Driver Support", "Delivery"],
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "telecom",
    label: "Telecommunications",
    icon: "📡",
    flow: ["Activation", "Billing", "Tech Support", "Upgrades", "Retention"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "professional",
    label: "Professional Services",
    icon: "🏢",
    flow: ["Intake", "Scheduling", "Follow-Up", "Reporting", "Client Care"],
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
]

export default function IndustriesSection() {
  const [active, setActive] = useState(INDUSTRIES[0])

  return (
    <section id="industries" className="py-16 lg:py-32" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            Industries
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Built for the way{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>your industry</span>
          <br />
          works.
        </h2>
        <p className="text-center max-w-lg mx-auto mb-12 lg:mb-16" style={{ color: "#6b7280" }}>
          Click an industry to see exactly how we handle its real-world workflow.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Industry tab buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            {INDUSTRIES.map((ind) => {
              const isActive = active.id === ind.id
              return (
                <button
                  key={ind.id}
                  onClick={() => setActive(ind)}
                  className="flex items-center gap-2.5 px-3 py-3.5 sm:px-4 sm:py-4 rounded-xl text-left transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? "#7b6dc4" : "#ffffff",
                    border: isActive ? "1.5px solid #7b6dc4" : "1.5px solid rgba(0,0,0,0.08)",
                    boxShadow: isActive ? "0 4px 20px rgba(123,109,196,0.25)" : "none",
                  }}
                >
                  <span className="text-lg leading-none flex-shrink-0">{ind.icon}</span>
                  <span
                    className="text-xs sm:text-sm font-semibold leading-tight"
                    style={{ color: isActive ? "#ffffff" : "#1a1826" }}
                  >
                    {ind.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Dynamic display card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 32px rgba(26,24,38,0.08)" }}
          >
            <div className="relative overflow-hidden" style={{ height: 220 }}>
              <img
                src={active.img}
                alt={active.label}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(26,24,38,0.65))" }}
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="text-2xl leading-none">{active.icon}</span>
                <span className="text-xl font-bold text-white">{active.label}</span>
              </div>
            </div>
            <div className="p-5 sm:p-6" style={{ backgroundColor: "#ffffff" }}>
              <div
                className="text-xs tracking-widest uppercase font-semibold mb-4"
                style={{ color: "#7b6dc4" }}
              >
                Typical Workflow
              </div>
              <div className="flex flex-wrap gap-2">
                {active.flow.map((step, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span
                      className="px-3 py-1.5 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: "#f5f2ec",
                        border: "1px solid rgba(0,0,0,0.08)",
                        color: "#1a1826",
                      }}
                    >
                      {step}
                    </span>
                    {i < active.flow.length - 1 && (
                      <span style={{ color: "#7b6dc4", fontSize: "0.8rem" }}>→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
