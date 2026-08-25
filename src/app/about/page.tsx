import Header from "../header"
import { SiteFooter } from "../site-footer"

const LOGO =
  "https://res.cloudinary.com/geecu3mo/image/upload/v1787617688/WhatsApp_Image_2026-08-25_at_05.25.00-removebg-preview.png"

const IMAGES = {
  hero: "https://res.cloudinary.com/geecu3mo/image/upload/v1787678993/637a7387-f603-4412-b3f7-a49192640e5b-removebg-preview.png",
  agent1: "https://png.pngtree.com/png-clipart/20250423/original/pngtree-call-center-operator-beautiful-woman-png-image_20866444.png",
  agent2: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-smart-business-man-png-image_13371408.png",
  aiAgent: "https://res.cloudinary.com/geecu3mo/image/upload/v1787678994/AI_agent_utilities.webp",
  robot: "https://res.cloudinary.com/geecu3mo/image/upload/v1787679937/robot-blank-sign-removebg-preview.png",
}

const VALUES = [
  {
    title: "People First",
    desc: "We believe exceptional customer experiences begin with exceptional people. Every agent is trained, coached, and invested in — because when they succeed, your customers do too.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Relentless Quality",
    desc: "We hold ourselves to the highest standards — every interaction, every shift, every day. Quality is not a checklist; it is embedded into our culture and systems.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    desc: "We report the truth — the good and the bad. Our clients have full visibility into performance data, and we surface issues proactively so nothing is ever a surprise.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Technology-Enabled",
    desc: "We combine human expertise with intelligent technology — AI tools, real-time analytics, and automation — to deliver outcomes that neither people nor machines could achieve alone.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Partnership Mindset",
    desc: "We do not see ourselves as a vendor — we are an extension of your team. Your goals are our goals, and we build programs designed to evolve as your business grows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    desc: "With multilingual capabilities and around-the-clock operations, we serve businesses and their customers across every time zone and every major language.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

const MILESTONES = [
  { year: "Founded", event: "Evolveris was established with a singular mission: to deliver world-class customer experience operations that scale with our clients." },
  { year: "Expansion", event: "Expanded service offerings to include AI & Automation, Real-Time Analyst Services, and Workforce Management alongside our core CX programs." },
  { year: "Global", event: "Built out multilingual capabilities spanning 30+ languages, enabling clients to serve customers in every major global market." },
  { year: "Today", event: "A full-service customer experience partner trusted by growth-stage businesses and established enterprises across multiple industries." },
]

export const metadata = {
  title: "About Us — Evolveris",
  description: "Evolveris is a customer experience company built around exceptional people, intelligent technology, and real-time expertise.",
}

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#f5f2ec" }}>
      <Header />

      {/* ── Hero ── */}
      <section className="pt-[80px]" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 pt-10 pb-6 text-sm" style={{ color: "#6b7280" }}>
            <a href="/" className="hover:text-[#7b6dc4] transition-colors">Home</a>
            <span>/</span>
            <span style={{ color: "#1a1826" }} className="font-medium">About Us</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20">
            {/* Left — text */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
                <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
                  Who We Are
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#1a1826" }}>
                The people behind{" "}
                <span className="font-serif italic" style={{ color: "#7b6dc4" }}>better</span>
                <br />
                customer experiences.
              </h1>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                Evolveris is a customer experience company built around one belief: that exceptional outcomes come from exceptional people, empowered by the right technology. We operate as a strategic partner — not just a service provider — designing programs that integrate seamlessly with your brand and scale with your ambitions.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                From front-line customer experience to back-office operations, real-time analytics to AI-powered automation, Evolveris delivers the full operational stack that modern businesses need to compete and grow.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
              >
                Work With Us →
              </a>
            </div>

            {/* Right — image collage */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden flex items-end justify-center"
                style={{
                  background: "linear-gradient(135deg, #ede9fc 0%, #f5f2ec 100%)",
                  minHeight: 460,
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 32px 80px rgba(26,24,38,0.12)",
                }}
              >
                <img
                  src={IMAGES.hero}
                  alt="Evolveris Agent"
                  className="object-contain"
                  style={{ maxHeight: 420, width: "auto", maxWidth: "85%" }}
                />
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-5 -left-5 p-4 rounded-2xl hidden lg:block"
                style={{
                  backgroundColor: "#1a1826",
                  boxShadow: "0 16px 48px rgba(26,24,38,0.2)",
                }}
              >
                <div className="text-2xl font-extrabold mb-0.5" style={{ color: "#c8f000" }}>30+</div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>Languages</div>
              </div>
              {/* Floating card 2 */}
              <div
                className="absolute -top-5 -right-5 p-4 rounded-2xl hidden lg:block"
                style={{
                  backgroundColor: "#7b6dc4",
                  boxShadow: "0 16px 48px rgba(123,109,196,0.3)",
                }}
              >
                <div className="text-2xl font-extrabold mb-0.5 text-white">8</div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ backgroundColor: "#1a1826" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "8", label: "Specialized Services" },
              { value: "30+", label: "Languages Supported" },
              { value: "95%+", label: "Client CSAT Avg" },
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

      {/* ── Mission ── */}
      <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl overflow-hidden flex items-end justify-center col-span-1"
                style={{ background: "linear-gradient(135deg, #fef3e0 0%, #fff8ed 100%)", minHeight: 220 }}
              >
                <img src={IMAGES.agent2} alt="Business Professional" className="object-contain" style={{ maxHeight: 200, width: "auto" }} />
              </div>
              <div
                className="rounded-2xl overflow-hidden flex items-end justify-center col-span-1"
                style={{ background: "linear-gradient(135deg, #fff0f5 0%, #fdf5f8 100%)", minHeight: 220 }}
              >
                <img src={IMAGES.agent1} alt="Customer Experience Agent" className="object-contain" style={{ maxHeight: 200, width: "auto" }} />
              </div>
              <div
                className="rounded-2xl overflow-hidden flex items-end justify-center col-span-2"
                style={{ background: "linear-gradient(135deg, #f3eeff 0%, #f5f2ec 100%)", minHeight: 180 }}
              >
                <img src={IMAGES.aiAgent} alt="AI Technology" className="object-contain" style={{ maxHeight: 160, width: "auto" }} />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
                <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-5" style={{ color: "#1a1826" }}>
                Powering the operations that{" "}
                <span className="font-serif italic" style={{ color: "#7b6dc4" }}>matter most</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                Our mission is to help businesses deliver outstanding customer experiences at every touchpoint — with the consistency, quality, and scalability that builds lasting loyalty. We do this by combining world-class talent, intelligent systems, and a genuine partnership approach.
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

      {/* ── Values ── */}
      <section className="py-24" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
              <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
                What We Stand For
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: "#1a1826" }}>
              The values that{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>guide everything</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="ev-feat p-6 rounded-2xl">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {v.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1a1826" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
              <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: "#1a1826" }}>
              Built to{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>evolve</span>
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-[19px] top-0 bottom-0 w-0.5 hidden sm:block"
              style={{ backgroundColor: "#ede9fc" }}
            />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{ backgroundColor: "#7b6dc4" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <div
                    className="flex-1 p-5 rounded-2xl"
                    style={{ backgroundColor: "#f5f2ec", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="text-xs tracking-widest uppercase font-bold mb-2"
                      style={{ color: "#7b6dc4" }}
                    >
                      {m.year}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI / Technology ── */}
      <section className="py-24" style={{ backgroundColor: "#1a1826" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#c8f000" }} />
                <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#c8f000" }}>
                  Technology
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5">
                Human intelligence,{" "}
                <span className="font-serif italic" style={{ color: "#c8f000" }}>amplified by AI</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                We deploy AI not as a replacement for people but as a force multiplier. Real-time guidance tools, automated QA, predictive analytics, and intelligent chatbots work alongside our agents — so your customers always get the best of both worlds.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Every tool we use is purposefully selected and configured for your specific environment, integrated with your existing stack, and continuously optimized based on real performance data.
              </p>
              <a
                href="/services/ai-automation"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "#c8f000" }}
              >
                Explore AI & Automation →
              </a>
            </div>
            <div
              className="rounded-3xl overflow-hidden flex items-end justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(200,240,0,0.1) 0%, rgba(123,109,196,0.15) 100%)",
                minHeight: 380,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={IMAGES.robot}
                alt="AI Technology"
                className="object-contain"
                style={{ maxHeight: 340, width: "auto", maxWidth: "85%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
              Ready to Partner?
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
            Let&apos;s build something{" "}
            <span className="font-serif italic" style={{ color: "#7b6dc4" }}>exceptional</span>
            <br />together.
          </h2>
          <p className="text-base mb-8" style={{ color: "#6b7280" }}>
            Tell us about your business and what you want to achieve — we&apos;ll design a solution that fits.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
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
