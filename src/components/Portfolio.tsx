"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/content";

export default function Portfolio() {
  return (
    <section id="portofolio" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold text-brand">PORTOFOLIO</span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
            Karya <span className="text-gradient">Unggulan</span>
          </h2>
          <p className="mt-3 text-ink-muted">
            Beberapa hasil kerja yang membantu klien tampil lebih profesional secara digital.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {portfolio.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-surface-alt shadow-soft"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Content — always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="translate-y-0 transition duration-500 group-hover:translate-y-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-ink transition group-hover:text-white">
                    {p.name}
                  </h3>
                </div>
              </div>

              {/* View link on hover */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-card transition duration-300 group-hover:opacity-100">
                <span className="text-ink">↗</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            Lihat Semua Proyek
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
