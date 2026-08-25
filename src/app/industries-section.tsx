"use client"

import { useState } from "react"

const INDUSTRIES = [
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: "🛍️",
    flow: ["Orders", "Returns", "Customer Chat", "Delivery", "Refunds"],
    img: "https://voiptimecloud.com/blog_img/agent-satisfaction-header.jpg",
  },
  {
    id: "fintech",
    label: "Fintech",
    icon: "💳",
    flow: ["Onboarding", "Compliance", "Fraud Alerts", "Payments", "Support"],
    img: "https://www.telecominc.com/wp-content/uploads/man-at-desk-scaled.jpg",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "🏥",
    flow: ["Appointments", "Patient Care", "Billing", "Insurance", "Follow-Up"],
    img: "https://outsource-philippines.com/wp-content/uploads/2026/04/call-center-agent-taking-calls.jpg",
  },
  {
    id: "travel",
    label: "Travel & Hospitality",
    icon: "✈️",
    flow: ["Bookings", "Cancellations", "Rebooking", "Loyalty", "Feedback"],
    img: "https://www.openaccessbpo.com/wp-content/webp-express/webp-images/uploads/2017/03/Proactive-and-Solution-Oriented-Agent-High-Performing-Customer-Support-Agents.jpg.webp",
  },
  {
    id: "technology",
    label: "Technology",
    icon: "📱",
    flow: ["Onboarding", "Tech Support", "Renewals", "Escalations", "NPS"],
    img: "https://voiptimecloud.com/blog_img/agent-satisfaction-header.jpg",
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: "📦",
    flow: ["Tracking", "Dispatch", "Claims", "Driver Support", "Delivery"],
    img: "https://www.telecominc.com/wp-content/uploads/man-at-desk-scaled.jpg",
  },
  {
    id: "telecom",
    label: "Telecommunications",
    icon: "📡",
    flow: ["Activation", "Billing", "Tech Support", "Upgrades", "Retention"],
    img: "https://outsource-philippines.com/wp-content/uploads/2026/04/call-center-agent-taking-calls.jpg",
  },
  {
    id: "professional",
    label: "Professional Services",
    icon: "🏢",
    flow: ["Intake", "Scheduling", "Follow-Up", "Reporting", "Client Care"],
    img: "https://www.openaccessbpo.com/wp-content/webp-express/webp-images/uploads/2017/03/Proactive-and-Solution-Oriented-Agent-High-Performing-Customer-Support-Agents.jpg.webp",
  },
]

export default function IndustriesSection() {
  const [active, setActive] = useState(INDUSTRIES[0])

  return (
    <section id="industries" className="py-24 lg:py-32" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            Industries
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Built for the way{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}>your industry</span>
          <br />
          works.
        </h2>
        <p className="text-center max-w-lg mx-auto mb-16" style={{ color: "#6b7280" }}>
          Click an industry to see exactly how we handle its real-world workflow.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Industry buttons */}
          <div className="grid grid-cols-2 gap-3">
            {INDUSTRIES.map((ind) => {
              const isActive = active.id === ind.id
              return (
                <button
                  key={ind.id}
                  onClick={() => setActive(ind)}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? "#7b6dc4" : "#ffffff",
                    border: isActive ? "1.5px solid #7b6dc4" : "1.5px solid rgba(0,0,0,0.08)",
                    boxShadow: isActive ? "0 4px 20px rgba(123,109,196,0.25)" : "none",
                  }}
                >
                  <span className="text-xl">{ind.icon}</span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: isActive ? "#ffffff" : "#1a1826" }}
                  >
                    {ind.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Dynamic display */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 32px rgba(26,24,38,0.08)" }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={active.img}
                alt={active.label}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(26,24,38,0.6))" }}
              />
              {/* Industry label on image */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="text-2xl">{active.icon}</span>
                <span className="text-xl font-bold text-white">{active.label}</span>
              </div>
            </div>
            <div className="p-6" style={{ backgroundColor: "#ffffff" }}>
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
                      className="px-4 py-2 rounded-full text-sm font-medium"
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
