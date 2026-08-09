export default function Hero() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-white">
      {/* Soft decorative circle */}
      <div
        className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-brand-soft/70 blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="animate-fade-up inline-flex rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand-dark">
            Solusi Digital Untuk Bisnis Anda
          </span>

          <h1 className="animate-fade-up animate-delay-1 mt-6 text-4xl font-bold leading-[1.15] text-ink md:text-5xl lg:text-[3.25rem]">
            Agensi digital yang mengutamakan pengembangan web
          </h1>

          <p className="animate-fade-up animate-delay-2 mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
            Kami memberikan solusi digital terbaik untuk kesuksesan bisnis Anda —
            dari website profesional hingga sistem kasir modern.
          </p>

          <div className="animate-fade-up animate-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
            >
              Konsultasi Gratis
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                →
              </span>
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/30 bg-white px-7 py-3.5 text-sm font-semibold text-brand transition hover:bg-brand-soft"
            >
              Pelajari Layanan Kami
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-2 relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-soft via-brand-muted/40 to-brand-soft md:-inset-6 md:rounded-[2.5rem]" />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-card md:rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard digital dan perangkat transaksi untuk bisnis"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
