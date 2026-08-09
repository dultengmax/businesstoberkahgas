import { portfolio } from "@/lib/content";

export default function Portfolio() {
  return (
    <section id="portofolio" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Karya Unggulan
          </h2>
          <p className="mt-3 text-ink-muted">
            Beberapa hasil kerja yang membantu klien tampil lebih profesional
            secara digital.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {portfolio.map((p, i) => (
            <article
              key={p.name}
              className={`group overflow-hidden rounded-3xl bg-surface-alt shadow-soft ${
                i === 0 || i === 3 ? "sm:row-span-1" : ""
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {p.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-ink">{p.name}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#kontak"
            className="inline-flex rounded-full border border-brand/40 bg-white px-7 py-3 text-sm font-semibold text-brand transition hover:bg-brand-soft"
          >
            Lihat Semua Proyek
          </a>
        </div>
      </div>
    </section>
  );
}
