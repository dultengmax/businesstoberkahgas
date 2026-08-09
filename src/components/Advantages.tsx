import { advantages } from "@/lib/content";

const icons = {
  clock: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  pen: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.1 2.1 0 113 3L7.5 18.85 3 20l1.15-4.5L16.862 3.487z" />
    </svg>
  ),
  tag: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12l-8.5 8.5a2 2 0 01-2.8 0L3 15V4h11l6 8z" />
      <circle cx="7.5" cy="8.5" r="1.2" fill="currentColor" />
    </svg>
  ),
};

export default function Advantages() {
  return (
    <section className="bg-surface-alt py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Mengapa Memilih Kami?
          </h2>
          <p className="mt-3 text-ink-muted">
            Tiga alasan utama kenapa UMKM mempercayakan transformasi digitalnya
            kepada Bisnis To Berkah.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {advantages.map((a) => (
            <article
              key={a.title}
              className="rounded-3xl bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                {icons[a.icon]}
              </div>
              <h3 className="text-lg font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {a.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
