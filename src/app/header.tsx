"use client"

import { useState } from "react"

const LOGO =
  "https://res.cloudinary.com/geecu3mo/image/upload/v1787617688/WhatsApp_Image_2026-08-25_at_05.25.00-removebg-preview.png"

const NAV_LINKS = [
  { label: "Services", href: "/#solutions" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/#industries" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[80px]"
      style={{
        backgroundColor: "rgba(245,242,236,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center gap-2.5">
          <div className="rounded-lg">
            <img
              src={LOGO}
              alt="Evolveris"
              style={{ height: 68, width: "auto", objectFit: "contain" }}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="ev-nav-link font-medium tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
        >
          Build Your Solution →
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#1a1826" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-[80px] left-0 right-0 py-6 px-6 flex flex-col gap-5"
          style={{
            backgroundColor: "#f5f2ec",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 8px 32px rgba(26,24,38,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "#4b5563" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{ backgroundColor: "#1a1826", color: "#ffffff" }}
            onClick={() => setMenuOpen(false)}
          >
            Build Your Solution →
          </a>
        </div>
      )}
    </header>
  )
}
