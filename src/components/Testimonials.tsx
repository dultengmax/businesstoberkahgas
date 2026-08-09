import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Apa Kata Klien
          </h2>
          <p className="mt-3 text-ink-muted">
            Pengalaman nyata dari pemilik usaha yang sudah bekerja sama dengan
            kami.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-soft"
            >
              <span className="text-4xl font-serif leading-none text-brand">
                “
              </span>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink-muted">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
