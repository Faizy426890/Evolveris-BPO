"use client"

import { useState } from "react"

const SECTORS = [
  {
    id: "medical",
    label: "Medical & healthcare",
    desc: "Patient intake, appointment scheduling, insurance verification and after-hours triage routing, staffed by agents trained on HIPAA-sensitive handling and escalation protocols set by your clinical team.",
    chips: ["Patient intake", "Scheduling", "Insurance verification", "After-hours triage routing"],
  },
  {
    id: "debt",
    label: "Debt collection",
    desc: "First-party and early-stage recovery handled under your brand, with call scripting reviewed against FDCPA and local collection rules, full call recording, and promise-to-pay tracking your finance team can audit.",
    chips: ["First-party recovery", "Promise-to-pay tracking", "Dispute handling", "Compliance-reviewed scripts"],
  },
  {
    id: "fintech",
    label: "Fintech & payments",
    desc: "Onboarding and KYC follow-ups, transaction disputes, chargeback paperwork and fraud-alert callbacks — run by agents who work inside your risk rules rather than guessing at them.",
    chips: ["KYC follow-up", "Disputes & chargebacks", "Fraud alerts", "Account recovery"],
  },
  {
    id: "retail",
    label: "E-commerce & retail",
    desc: "Order status, returns and refunds, WISMO deflection and peak-season surge capacity, with agents working directly in your helpdesk and order systems instead of a separate inbox.",
    chips: ["Order & WISMO", "Returns and refunds", "Peak surge cover", "Marketplace queues"],
  },
  {
    id: "travel",
    label: "Travel & hospitality",
    desc: "Bookings, changes and cancellations, disruption rebooking and loyalty servicing — including the irregular-operations spikes that a fixed in-house roster can never staff economically.",
    chips: ["Bookings & changes", "Disruption rebooking", "Loyalty servicing", "Post-stay feedback"],
  },
  {
    id: "telecom",
    label: "Telecom",
    desc: "Activations, billing queries, tier-one technical troubleshooting and retention saves, with tight handover rules so a customer never repeats themselves between your team and ours.",
    chips: ["Activations", "Billing queries", "Tier-one technical", "Retention saves"],
  },
]

export default function SectorsSection() {
  const [active, setActive] = useState(SECTORS[0])

  return (
    <section id="sectors" className="py-20 lg:py-28" style={{ backgroundColor: "#f5f2ec" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
            What we run
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: "#1a1826" }}>
          Every sector runs on the same discipline{" "}
          <span className="font-serif italic" style={{ color: "#7b6dc4" }}></span>
        </h2>
        <p className="text-center max-w-xl mx-auto mb-14" style={{ color: "#6b7280" }}>
          Pick a sector to see how a queue actually gets staffed, trained and measured.
        </p>

        {/* Tabs + panel */}
        <div
          className="grid md:grid-cols-[260px_1fr] rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 8px 40px rgba(26,24,38,0.07)",
          }}
        >
          {/* Tab rail */}
          <div style={{ backgroundColor: "#faf9f7", borderRight: "1px solid rgba(0,0,0,0.07)" }}>
            {SECTORS.map((s) => {
              const isActive = s.id === active.id
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  className="w-full text-left px-6 py-4 text-sm font-semibold transition-colors duration-200"
                  style={{
                    color: isActive ? "#1a1826" : "#6b7280",
                    backgroundColor: isActive ? "#ffffff" : "transparent",
                    borderLeft: `3px solid ${isActive ? "#7b6dc4" : "transparent"}`,
                  }}
                >
                  {s.label}
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div className="p-8 lg:p-10">
            <h3 className="text-xl lg:text-2xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
              {active.label}
            </h3>
            <p className="text-sm lg:text-base leading-relaxed mb-7" style={{ color: "#6b7280", maxWidth: 620 }}>
              {active.desc}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {active.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "#ede9fc",
                    color: "#7b6dc4",
                    border: "1px solid rgba(123,109,196,0.2)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
