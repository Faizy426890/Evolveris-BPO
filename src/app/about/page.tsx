import Header from "../header"
import { SiteFooter } from "../site-footer"

const LOGO =
  "https://res.cloudinary.com/geecu3mo/image/upload/v1789086577/WhatsApp_Image_2026-09-11_at_05.26.26-removebg-preview.png"

const BUDDY = {
  phone: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697feddc28a2c98e526f6ff2_Buddy%20Talking%20with%20Phone%202.avif",
  gift: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697feddc9db9a2717c3e6d42_Buddy%20Gift%20from%20Google%20Drive%201.avif",
  books: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697b12bd678ca0ba703b647b_helper-lp_mobile-buddy-01.avif",
  pencil: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697b12bd5c6c6bd8ea3ac7dc_helper-lp_mobile-buddy-02.avif",
  sleep: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697b12bdb2e57d4b982d7af9_helper-lp_mobile-buddy-04.avif",
}

const AGENT_HERO = "https://res.cloudinary.com/geecu3mo/image/upload/v1787678993/637a7387-f603-4412-b3f7-a49192640e5b-removebg-preview.png"

const CAPABILITIES = [
  {
    img: BUDDY.books,
    title: "People trained to understand your brand",
    desc: "Every agent goes through deep brand immersion — learning your product, voice, policies, and customers before taking a single interaction.",
  },
  {
    img: BUDDY.pencil,
    title: "Turns every interaction into an insight",
    desc: "We capture, analyse, and surface patterns from every customer touchpoint — giving you the intelligence to make smarter business decisions.",
  },
  {
    img: BUDDY.phone,
    title: "Real-time monitoring, always responsive",
    desc: "Our on-floor RTAs and live analytics mean deviations are caught in minutes, not hours — keeping your SLAs intact around the clock.",
  },
  {
    img: BUDDY.sleep,
    title: "Operating 24/7, even while you sleep",
    desc: "Follow-the-sun operations ensure your customers are served at the highest quality at any hour, in any time zone, in any language.",
  },
]

const VALUES = [
  {
    title: "People First",
    desc: "Exceptional experiences begin with exceptional people. Every agent is trained, coached, and invested in.",
    icon: "👥",
  },
  {
    title: "Relentless Quality",
    desc: "Quality is not a checklist — it is embedded into our culture, systems, and every shift we run.",
    icon: "⭐",
  },
  {
    title: "Full Transparency",
    desc: "We report the truth, surface issues proactively, and give you complete visibility into performance data.",
    icon: "👁",
  },
  {
    title: "Technology-Enabled",
    desc: "Human expertise amplified by AI tools, real-time analytics, and intelligent automation.",
    icon: "⚡",
  },
  {
    title: "Partnership Mindset",
    desc: "We are an extension of your team — your goals are our goals, and we build programs that evolve with you.",
    icon: "🤝",
  },
  {
    title: "Global Reach",
    desc: "30+ languages, 50+ countries, around-the-clock operations serving every major market.",
    icon: "🌍",
  },
]

export const metadata = {
  title: "About Us — Evolveris",
  description: "Evolveris is a customer experience company built around exceptional people, intelligent technology, and real-time expertise.",
}

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <Header />

      {/* ── HERO ── */}
      <section className="pt-[80px]" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-10" style={{ color: "#6b7280" }}>
            <a href="/" className="hover:text-[#7b6dc4] transition-colors">Home</a>
            <span>/</span>
            <span style={{ color: "#1a1826" }} className="font-medium">About Us</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            {/* Left — text */}
            <div className="pb-16">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold mb-6 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
              >
                Who We Are
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6" style={{ color: "#1a1826" }}>
                The people behind{" "}
                <em className="font-serif not-italic" style={{ color: "#7b6dc4" }}>better</em>
                {" "}customer experiences.
              </h1>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                Evolveris is a customer experience company built around one belief: exceptional outcomes come from exceptional people, empowered by the right technology.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                We operate as a true strategic partner — not a vendor — designing programs that integrate seamlessly with your brand and scale with your ambitions. From front-line CX to back-office operations, real-time analytics to AI automation, we deliver the full operational stack that modern businesses need to compete.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
                >
                  Work With Us →
                </a>
                <a
                  href="/#solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:border-[#7b6dc4] hover:text-[#7b6dc4]"
                  style={{ borderColor: "rgba(0,0,0,0.15)", color: "#4b5563" }}
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Right — agent image */}
            <div className="relative flex justify-center">
              <div
                className="w-full rounded-t-3xl overflow-hidden flex items-end justify-center"
                style={{
                  background: "linear-gradient(160deg, #ede9fc 0%, #ddd5f8 60%, #c8b8f4 100%)",
                  minHeight: 480,
                }}
              >
                {/* Floating stats */}
                <div
                  className="absolute top-8 left-4 lg:-left-6 px-4 py-3 rounded-2xl shadow-xl hidden sm:block"
                  style={{ backgroundColor: "#1a1826" }}
                >
                  <div className="text-2xl font-extrabold" style={{ color: "#c8f000" }}>30+</div>
                  <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>Languages</div>
                </div>
                <div
                  className="absolute top-8 right-4 lg:-right-6 px-4 py-3 rounded-2xl shadow-xl hidden sm:block"
                  style={{ backgroundColor: "#7b6dc4" }}
                >
                  <div className="text-2xl font-extrabold text-white">8</div>
                  <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>Services</div>
                </div>
                <img
                  src={AGENT_HERO}
                  alt="Evolveris Agent"
                  className="object-contain"
                  style={{ maxHeight: 460, width: "auto", maxWidth: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#1a1826" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "8", label: "Specialized Services" },
              { value: "30+", label: "Languages Supported" },
              { value: "95%+", label: "Client CSAT Average" },
              { value: "24 / 7", label: "Global Operations" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-extrabold mb-1" style={{ color: "#c8f000" }}>
                  {s.value}
                </div>
                <div className="text-xs tracking-widest uppercase font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK — Sintra-style 4-column ── */}
      <section className="py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
              Get exceptional CX{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>within weeks</span>
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: "#6b7280" }}>
              Deploying world-class operations is intentionally fast. We onboard, train, and launch — then continuously improve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="text-center">
                {/* Image */}
                <div
                  className="mx-auto mb-5 rounded-2xl overflow-hidden flex items-end justify-center"
                  style={{
                    background: "linear-gradient(160deg, #f5f0ff 0%, #ede9fc 100%)",
                    height: 220,
                  }}
                >
                  <img
                    src={cap.img}
                    alt={cap.title}
                    className="object-contain"
                    style={{ maxHeight: 210, width: "auto" }}
                  />
                </div>
                <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: "#1a1826" }}>
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-28" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl flex items-end justify-center overflow-hidden col-span-1"
                style={{ background: "linear-gradient(135deg, #fff8e6 0%, #fffbf0 100%)", height: 240 }}
              >
                <img src={BUDDY.gift} alt="Partnership" className="object-contain" style={{ maxHeight: 220, width: "auto" }} />
              </div>
              <div
                className="rounded-2xl flex items-end justify-center overflow-hidden col-span-1"
                style={{ background: "linear-gradient(135deg, #e8faf0 0%, #f0fdf4 100%)", height: 240 }}
              >
                <img src={BUDDY.pencil} alt="Analytics" className="object-contain" style={{ maxHeight: 220, width: "auto" }} />
              </div>
              <div
                className="rounded-2xl flex items-end justify-center overflow-hidden col-span-2"
                style={{ background: "linear-gradient(135deg, #f3eeff 0%, #f8f5ff 100%)", height: 160 }}
              >
                <img src={BUDDY.phone} alt="Communication" className="object-contain" style={{ maxHeight: 150, width: "auto" }} />
              </div>
            </div>

            {/* Text */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold mb-6 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
              >
                Our Mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-5" style={{ color: "#1a1826" }}>
                Powering the operations that{" "}
                <span className="font-serif italic" style={{ color: "#7b6dc4" }}>matter most</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                Our mission is to help businesses deliver outstanding customer experiences at every touchpoint — with the consistency, quality, and scalability that builds lasting loyalty. We combine world-class talent, intelligent systems, and genuine partnership.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                Everything we do is designed to extend your team, amplify your brand, and create measurable outcomes that drive real business growth.
              </p>
              <div className="space-y-3">
                {[
                  "Aligned to your brand, your values, and your customers",
                  "Built for scale — from startup to enterprise",
                  "Data-first approach to every program and metric",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#ede9fc" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#7b6dc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: "#1a1826" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-3" style={{ color: "#1a1826" }}>
              The values that{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>guide everything</span>
            </h2>
            <p className="text-base" style={{ color: "#6b7280" }}>What we stand for — in every program, every shift, every interaction.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "#f5f2ec", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="text-2xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1a1826" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className="py-28" style={{ backgroundColor: "#1a1826" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-flex text-xs tracking-widest uppercase font-semibold mb-5 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(200,240,0,0.15)", color: "#c8f000" }}
            >
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Built to{" "}
              <span className="font-serif italic" style={{ color: "#c8f000" }}>evolve</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { label: "Founded", text: "Evolveris was established with a singular mission: to deliver world-class customer experience operations that scale with our clients.", icon: "🚀" },
              { label: "Expansion", text: "Expanded service offerings to include AI & Automation, Real-Time Analyst Services, and Workforce Management alongside our core CX programs.", icon: "📈" },
              { label: "Global Reach", text: "Built out multilingual capabilities spanning 30+ languages, enabling clients to serve customers in every major global market.", icon: "🌍" },
              { label: "Today", text: "A full-service CX partner trusted by growth-stage businesses and enterprises across multiple industries and geographies.", icon: "⭐" },
            ].map((m, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-2xl mb-3">{m.icon}</div>
                <div className="text-xs tracking-widest uppercase font-bold mb-2" style={{ color: "#c8f000" }}>
                  {m.label}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
            Let&apos;s build something{" "}
            <span className="font-serif italic" style={{ color: "#7b6dc4" }}>exceptional</span>
            {" "}together.
          </h2>
          <p className="text-base mb-10" style={{ color: "#6b7280" }}>
            Tell us about your business and what you want to achieve — we&apos;ll design a solution that fits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
            >
              Contact Our Team →
            </a>
            <a
              href="/#solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-all duration-200 hover:border-[#7b6dc4] hover:text-[#7b6dc4]"
              style={{ borderColor: "rgba(0,0,0,0.15)", color: "#1a1826" }}
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
