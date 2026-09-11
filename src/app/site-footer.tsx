const LOGO =
  "https://res.cloudinary.com/geecu3mo/image/upload/v1789086577/WhatsApp_Image_2026-09-11_at_05.26.26-removebg-preview.png"

const SOLUTIONS_LINKS = [
  { label: "Customer Experience", href: "/services/customer-experience" },
  { label: "Technical Support", href: "/services/technical-support" },
  { label: "Sales & Lead Generation", href: "/services/sales-lead-generation" },
  { label: "Back Office", href: "/services/back-office" },
  { label: "Multilingual Support", href: "/services/multilingual-support" },
  { label: "Real-Time Analysts", href: "/services/real-time-analyst" },
  { label: "Workforce & Performance", href: "/services/workforce-performance" },
  { label: "AI & Automation", href: "/services/ai-automation" },
]

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
]

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#1a1826" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="/">
              <img
                src={LOGO}
                alt="Evolveris"
                className="h-16 w-auto object-contain mb-5"
              />
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              The global operating system for modern customer experience. People powered.
              Technology enabled. Connected globally.
            </p>

            {/* Accent bar */}
            <div className="flex gap-1.5 mt-8">
              <div className="h-1 w-8 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
              <div className="h-1 w-4 rounded-full" style={{ backgroundColor: "#f0c540" }} />
              <div className="h-1 w-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-5 font-semibold"
              style={{ color: "#7b6dc4" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="ev-footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-5 font-semibold"
              style={{ color: "#7b6dc4" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="ev-footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Evolveris. All rights reserved.
          </p>
          <p
            className="text-xs tracking-widest uppercase font-semibold"
            style={{ color: "rgba(123,109,196,0.6)" }}
          >
            People. Technology. Performance.
          </p>
        </div>
      </div>
    </footer>
  )
}
