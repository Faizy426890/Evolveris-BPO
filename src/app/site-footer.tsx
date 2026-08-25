const LOGO =
  "https://res.cloudinary.com/geecu3mo/image/upload/v1787617688/WhatsApp_Image_2026-08-25_at_05.25.00-removebg-preview.png"

const SOLUTIONS_LINKS = [
  "Customer Experience",
  "Real-Time Analysts",
  "Technical Support",
  "Sales & Lead Gen",
  "AI & Automation",
]

const COMPANY_LINKS = [
  "About Us",
  "How It Works",
  "Industries",
  "Careers",
  "Contact",
]

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#1a1826" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <img
              src={LOGO}
              alt="Evolveris"
              className="h-22 w-auto object-contain mb-5"
            />
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
              Solutions
            </h4>
            <ul className="space-y-3">
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link}>
                  <a href="#solutions" className="ev-footer-link">
                    {link}
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
                <li key={link}>
                  <a href="#" className="ev-footer-link">
                    {link}
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
