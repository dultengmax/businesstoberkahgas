"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/#harga", label: "Pricing" },
  { href: "/#portofolio", label: "Portofolio" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-slate-100/50 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={120}
            loading="lazy"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-muted lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-brand after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#kontak"
          className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105 hover:shadow-lg lg:inline-flex"
        >
          Konsultasi Gratis
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-ink transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-50 py-3 text-sm font-medium text-ink-muted transition hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
