const links = [
  { href: "#tentang", label: "About" },
  { href: "#layanan", label: "Services" },
  { href: "#harga", label: "Pricing" },
  { href: "#portofolio", label: "Portofolio" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-ink">
          <span className="text-brand">busi</span>ness
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
        >
          Konsultasi Gratis
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
            +
          </span>
        </a>
      </div>
    </header>
  );
}
