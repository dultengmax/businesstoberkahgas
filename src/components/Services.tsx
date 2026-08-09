import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="layanan" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Layanan Unggulan
          </h2>
          <p className="mt-3 text-ink-muted">
            Solusi digital yang disesuaikan untuk pertumbuhan bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="relative overflow-hidden rounded-[1.75rem] bg-brand-soft/60 p-8 md:p-10"
            >
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-brand-muted/40" aria-hidden />
              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-soft">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] text-white">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
