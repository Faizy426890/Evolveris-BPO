import { notFound } from "next/navigation"
import { SERVICES, getService } from "../data"
import Header from "../../header"
import { SiteFooter } from "../../site-footer"

const BUDDY_SLEEP = "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697b12bdb2e57d4b982d7af9_helper-lp_mobile-buddy-04.avif"
const BUDDY_PENCIL = "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697b12bd5c6c6bd8ea3ac7dc_helper-lp_mobile-buddy-02.avif"
const BUDDY_PHONE = "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697feddc28a2c98e526f6ff2_Buddy%20Talking%20with%20Phone%202.avif"

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

  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <Header />

      {/* ── HERO ── */}
      <section className="pt-[80px]" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 pt-10 pb-8 text-sm" style={{ color: "#6b7280" }}>
            <a href="/" className="hover:text-[#7b6dc4] transition-colors">Home</a>
            <span>/</span>
            <a href="/#solutions" className="hover:text-[#7b6dc4] transition-colors">Services</a>
            <span>/</span>
            <span style={{ color: "#1a1826" }} className="font-medium">{svc.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end pb-0">
            {/* Left — text */}
            <div className="pb-16">
              <span
                className="inline-flex text-[11px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full mb-6"
                style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
              >
                {svc.tag}
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5" style={{ color: "#1a1826" }}>
                {svc.title}
              </h1>
              <p className="text-xl font-medium mb-5" style={{ color: "#7b6dc4" }}>
                {svc.subtitle}
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                {svc.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
                >
                  Get Started →
                </a>
                <a
                  href="/#solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all hover:border-[#7b6dc4] hover:text-[#7b6dc4]"
                  style={{ borderColor: "rgba(0,0,0,0.15)", color: "#4b5563" }}
                >
                  All Services
                </a>
              </div>
            </div>

            {/* Right — image card */}
            <div className="flex justify-center">
              <div
                className="relative w-full rounded-t-3xl overflow-hidden flex items-end justify-center"
                style={{
                  background: `linear-gradient(160deg, ${svc.color} 0%, #e8e3f8 100%)`,
                  minHeight: 460,
                }}
              >
                <span
                  className="absolute top-5 right-5 text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.85)", color: "#7b6dc4", backdropFilter: "blur(8px)" }}
                >
                  {svc.tag}
                </span>
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="object-contain"
                  style={{ maxHeight: 440, width: "auto", maxWidth: "85%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: "#1a1826" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {svc.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-extrabold mb-1" style={{ color: "#c8f000" }}>
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES — Sintra-style ── */}
      <section className="py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
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
                style={{ backgroundColor: "#f5f2ec", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-sm font-bold"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1a1826" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE DO IT — with buddy images ── */}
      <section className="py-28" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
              Get started{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>within weeks</span>
            </h2>
            <p className="text-base" style={{ color: "#6b7280" }}>Our proven launch process gets your program live fast.</p>
          </div>

          {/* Buddy image row above steps */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
            {[BUDDY_PHONE, BUDDY_PENCIL, BUDDY_SLEEP].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden flex items-end justify-center"
                style={{
                  background: "linear-gradient(160deg, #ede9fc 0%, #f5f0ff 100%)",
                  height: 200,
                }}
              >
                <img src={img} alt="" className="object-contain" style={{ maxHeight: 190, width: "auto" }} />
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {svc.process.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="text-4xl font-extrabold mb-4"
                  style={{ color: "#ede9fc", WebkitTextStroke: "1px #c4b8f4" }}
                >
                  {p.step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1a1826" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EVOLVERIS ── */}
      <section className="py-28" style={{ backgroundColor: "#1a1826" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Why Evolveris for {svc.title}?
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              The details that separate good from exceptional
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {svc.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(200,240,0,0.15)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
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
            style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
          >
            Contact Our Team →
          </a>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="pb-28" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold mb-8" style={{ color: "#1a1826" }}>
            Explore More Services
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((rel) => (
              <a
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-6 rounded-2xl block transition-all"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xs font-bold"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {rel.tag}
                </div>
                <h4 className="font-bold mb-1" style={{ color: "#1a1826" }}>{rel.title}</h4>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                  {rel.subtitle}
                </p>
                <span className="text-xs font-semibold" style={{ color: "#7b6dc4" }}>
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
