import { notFound } from "next/navigation"
import { SERVICES, getService } from "../data"
import Header from "../../header"
import { SiteFooter } from "../../site-footer"

const BUDDY_LECTURE = "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697feec51fa0e662b4e43564_buddy-lecture_img.avif"
const BUDDY_PENCIL = "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697b12bd5c6c6bd8ea3ac7dc_helper-lp_mobile-buddy-02.avif"
const BUDDY_PHONE = "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697feddc28a2c98e526f6ff2_Buddy%20Talking%20with%20Phone%202.avif"
const BUDDY_SLEEP = "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697b12bdb2e57d4b982d7af9_helper-lp_mobile-buddy-04.avif"

const STATS_HEADLINES: Record<string, string> = {
  "customer-experience": "Our CX specialists handle every customer touchpoint to keep your brand's reputation exceptional.",
  "technical-support": "Our certified agents resolve complex technical issues at the speed your customers demand.",
  "sales-lead-generation": "Our sales teams drive qualified pipeline and real revenue that scales with your ambition.",
  "back-office": "Our processing teams handle critical documents with near-perfect accuracy at enterprise scale.",
  "multilingual-support": "Our multilingual agents communicate in 30+ languages, giving your brand a genuinely local voice.",
  "real-time-analyst": "Our RTAs watch every metric live and act in minutes to keep your operation on target.",
  "workforce-performance": "Our WFM experts build the schedules and systems that keep your workforce performing at its peak.",
  "ai-automation": "Our AI programs automate the routine so your people can focus on the moments that matter most.",
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const svc = getService(slug)
  if (!svc) return {}
  return { title: `${svc.title} — Evolveris`, description: svc.description }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const svc = getService(slug)
  if (!svc) notFound()

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug)
  const related = SERVICES.filter((_, i) => i !== currentIndex).slice(0, 3)
  const headline = STATS_HEADLINES[slug] ?? `Our ${svc.title} program delivers results that speak for themselves.`

  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <Header />

      {/* ── HERO ── premium floating PNG ── */}
      <section
        className="pt-[80px] overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f5f2ec 0%, #ede9fc 55%, #f5f2ec 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 pt-10 pb-10 text-sm" style={{ color: "#6b7280" }}>
            <a href="/" className="hover:text-[#7b6dc4] transition-colors">Home</a>
            <span style={{ color: "#c4b8f4" }}>/</span>
            <a href="/#solutions" className="hover:text-[#7b6dc4] transition-colors">Services</a>
            <span style={{ color: "#c4b8f4" }}>/</span>
            <span style={{ color: "#1a1826" }} className="font-medium">{svc.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-end">
            {/* Left — text */}
            <div className="pb-20 lg:pr-12">
              <span
                className="inline-flex text-[10px] tracking-[0.15em] uppercase font-bold px-3 py-1.5 rounded-full mb-7"
                style={{ backgroundColor: "rgba(123,109,196,0.12)", color: "#7b6dc4" }}
              >
                {svc.tag}
              </span>
              <h1
                className="font-extrabold leading-[1.05] mb-6"
                style={{ color: "#0d0c14", fontSize: "clamp(2.6rem, 5vw, 4rem)" }}
              >
                {svc.title}
              </h1>
              <p className="text-xl font-semibold mb-5" style={{ color: "#7b6dc4" }}>
                {svc.subtitle}
              </p>
              <p className="text-base leading-[1.75] mb-10" style={{ color: "#5a6272", maxWidth: 480 }}>
                {svc.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.03]"
                  style={{ backgroundColor: "#1a1826", color: "#ffffff", boxShadow: "0 8px 30px rgba(26,24,38,0.25)" }}
                >
                  Get Started →
                </a>
                <a
                  href="/#solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:bg-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.6)", color: "#1a1826", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(8px)" }}
                >
                  All Services
                </a>
              </div>
            </div>

            {/* Right — floating PNG on transparent-feel background */}
            <div className="relative flex items-end justify-center lg:justify-end">
              {/* Soft glow blob behind character */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 60% 80%, rgba(123,109,196,0.18) 0%, transparent 70%)",
                }}
              />
              {/* Tag chip */}
              <div
                className="absolute top-4 right-4 text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full z-10"
                style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#7b6dc4", backdropFilter: "blur(12px)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
              >
                {svc.tag}
              </div>
              {/* Character image — PNG floats, no card border */}
              <img
                src={svc.image}
                alt={svc.title}
                style={{
                  maxHeight: 520,
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                  filter: "drop-shadow(0 40px 60px rgba(26,24,38,0.18))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SINTRA-STYLE STATS BLOCK ── */}
      <section className="py-24 lg:py-28 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — headline + 2×2 stats */}
            <div>
              <h2
                className="font-extrabold leading-[1.15] mb-14"
                style={{ color: "#0d0c14", fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)" }}
              >
                {headline}
              </h2>

              <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                {svc.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-sm mb-1" style={{ color: "#9ca3af" }}>
                      {i < 2 ? "More than" : i === 3 ? "Over" : "Delivering"}
                    </p>
                    <p
                      className="font-extrabold leading-none mb-1"
                      style={{ color: "#0d0c14", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm" style={{ color: "#6b7280" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — buddy lecture image */}
            <div className="relative flex items-end justify-center">
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: "linear-gradient(160deg, #f0edfa 0%, #e8e3f8 100%)" }}
              />
              <img
                src={BUDDY_LECTURE}
                alt="Evolveris stats"
                className="relative z-10"
                style={{
                  maxHeight: 460,
                  width: "auto",
                  maxWidth: "90%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 40px rgba(26,24,38,0.12))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0d0c14" }}>
              Everything you need,{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>built in</span>
            </h2>
            <p className="text-base max-w-md mx-auto" style={{ color: "#6b7280" }}>
              Six core capabilities working together in one integrated program.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {svc.features.map((f, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-sm font-bold"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#0d0c14" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE DO IT ── */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Buddy image trio */}
            <div className="grid grid-cols-3 gap-3">
              {[BUDDY_PHONE, BUDDY_PENCIL, BUDDY_SLEEP].map((img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden flex items-end justify-center"
                  style={{
                    background: "linear-gradient(160deg, #f0edfa 0%, #e8e3f8 100%)",
                    height: 180,
                  }}
                >
                  <img src={img} alt="" className="object-contain" style={{ maxHeight: 170 }} />
                </div>
              ))}
            </div>

            {/* Process steps */}
            <div>
              <span
                className="inline-flex text-[10px] tracking-[0.15em] uppercase font-bold px-3 py-1.5 rounded-full mb-7"
                style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
              >
                Our Process
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-10" style={{ color: "#0d0c14" }}>
                Get started{" "}
                <span className="font-serif italic" style={{ color: "#7b6dc4" }}>within weeks</span>
              </h2>
              <div className="space-y-6">
                {svc.process.map((p, i) => (
                  <div key={i} className="flex gap-5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
                      style={{ backgroundColor: "#7b6dc4" }}
                    >
                      {p.step}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: "#0d0c14" }}>{p.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EVOLVERIS ── */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#1a1826" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Why Evolveris for {svc.title}?
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              The details that separate good from exceptional
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {svc.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(200,240,0,0.15)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28" style={{ background: "linear-gradient(160deg, #f5f2ec 0%, #ede9fc 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5" style={{ color: "#0d0c14" }}>
            Ready to launch your{" "}
            <span className="font-serif italic" style={{ color: "#7b6dc4" }}>{svc.title.toLowerCase()}</span>
            {" "}program?
          </h2>
          <p className="text-base mb-10" style={{ color: "#6b7280" }}>
            Tell us about your goals and we&apos;ll design a program built around your exact needs.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#1a1826", color: "#ffffff", boxShadow: "0 8px 30px rgba(26,24,38,0.25)" }}
          >
            Contact Our Team →
          </a>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold mb-8" style={{ color: "#0d0c14" }}>
            Explore More Services
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((rel) => (
              <a
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-6 rounded-2xl block transition-all hover:-translate-y-1"
                style={{ backgroundColor: "#f5f2ec", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xs font-bold"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {rel.tag}
                </div>
                <h4 className="font-bold mb-1" style={{ color: "#0d0c14" }}>{rel.title}</h4>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                  {rel.subtitle}
                </p>
                <span className="text-xs font-semibold" style={{ color: "#7b6dc4" }}>Learn more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
