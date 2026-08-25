import { notFound } from "next/navigation"
import { SERVICES, getService } from "../data"
import Header from "../../header"
import { SiteFooter } from "../../site-footer"

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const svc = getService(slug)
  if (!svc) return {}
  return {
    title: `${svc.title} — Evolveris`,
    description: svc.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const svc = getService(slug)
  if (!svc) notFound()

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug)
  const related = SERVICES.filter((_, i) => i !== currentIndex).slice(0, 3)

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
            <a href="/#solutions" className="hover:text-[#7b6dc4] transition-colors">Services</a>
            <span>/</span>
            <span style={{ color: "#1a1826" }} className="font-medium">{svc.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span
                  className="text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {svc.tag}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ color: "#1a1826" }}>
                {svc.title}
              </h1>
              <p className="text-xl font-medium mb-6" style={{ color: "#7b6dc4" }}>
                {svc.subtitle}
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                {svc.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
                >
                  Get Started →
                </a>
                <a
                  href="/#solutions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-200 hover:border-[#7b6dc4] hover:text-[#7b6dc4]"
                  style={{ borderColor: "rgba(0,0,0,0.15)", color: "#1a1826" }}
                >
                  All Services
                </a>
              </div>
            </div>

            {/* Right — image card */}
            <div className="relative flex items-center justify-center">
              <div
                className="relative w-full rounded-3xl overflow-hidden flex items-end justify-center"
                style={{
                  background: `linear-gradient(135deg, ${svc.color} 0%, #f5f2ec 100%)`,
                  minHeight: 420,
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 32px 80px rgba(26,24,38,0.12)",
                }}
              >
                {/* Tag badge */}
                <div
                  className="absolute top-5 right-5 text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.85)", color: "#7b6dc4", backdropFilter: "blur(8px)" }}
                >
                  {svc.tag}
                </div>
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="object-contain"
                  style={{ maxHeight: 400, width: "auto", maxWidth: "90%", position: "relative", zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ backgroundColor: "#1a1826" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {svc.stats.map((stat, i) => (
              <div key={i} className="text-center">
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

      {/* ── Features ── */}
      <section className="py-24" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
              <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
                What We Deliver
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: "#1a1826" }}>
              Capabilities built to{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>perform</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {svc.features.map((f, i) => (
              <div key={i} className="ev-feat p-6 rounded-2xl">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-sm font-bold"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1a1826" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
              <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: "#1a1826" }}>
              How we{" "}
              <span className="font-serif italic" style={{ color: "#7b6dc4" }}>get it done</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.process.map((p, i) => (
              <div key={i} className="relative p-6 rounded-2xl" style={{ backgroundColor: "#f5f2ec", border: "1px solid rgba(0,0,0,0.06)" }}>
                {/* connector line */}
                {i < svc.process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-6 z-10"
                    style={{ height: 2, backgroundColor: "#ede9fc" }}
                  />
                )}
                <div
                  className="text-3xl font-extrabold mb-4"
                  style={{ color: "#ede9fc", WebkitTextStroke: "1px #c4b8f4" }}
                >
                  {p.step}
                </div>
                <h3 className="font-bold mb-2 text-base" style={{ color: "#1a1826" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="py-20" style={{ backgroundColor: "#1a1826" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
              Why Evolveris for {svc.title}?
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
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
      <section className="py-24" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b6dc4" }} />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7b6dc4" }}>
              Ready to Start?
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: "#1a1826" }}>
            Let&apos;s build your{" "}
            <span className="font-serif italic" style={{ color: "#7b6dc4" }}>{svc.title.toLowerCase()}</span>
            <br />solution today.
          </h2>
          <p className="text-base mb-8" style={{ color: "#6b7280" }}>
            Tell us about your goals and we&apos;ll design a program around your exact needs.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
          >
            Contact Our Team →
          </a>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="pb-24" style={{ backgroundColor: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-xl font-bold mb-8" style={{ color: "#1a1826" }}>Explore More Services</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((rel) => (
              <a
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group ev-card p-6 rounded-2xl block"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xs font-bold"
                  style={{ backgroundColor: "#ede9fc", color: "#7b6dc4" }}
                >
                  {rel.tag}
                </div>
                <h4 className="font-bold mb-1" style={{ color: "#1a1826" }}>{rel.title}</h4>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b7280" }}>
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
