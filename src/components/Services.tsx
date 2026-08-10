"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  code: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" />
    </svg>
  ),
  pos: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="layanan" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold text-brand">LAYANAN</span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
            Dua Lini, <span className="text-gradient">Satu Solusi</span>
          </h2>
          <p className="mt-3 text-ink-muted">
            Dari website profesional hingga aplikasi kasir berlangganan — semua untuk UMKM naik kelas.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-8 shadow-soft transition hover:shadow-card md:p-10"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-5 blur-2xl transition group-hover:opacity-10" />

              {/* Badge */}
              {s.badge && (
                <span className="absolute right-6 top-6 rounded-full bg-teal-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-dark">
                  {s.badge}
                </span>
              )}

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  {icons[s.icon]}
                </div>

                <h3 className="text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.desc}</p>

                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium text-ink">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-[10px] text-white">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontak"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
                >
                  {s.badge ? "Daftar Waitlist" : "Konsultasi Sekarang"}
                  <span>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
