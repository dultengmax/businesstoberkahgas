"use client";

import { motion } from "framer-motion";
import { advantages } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
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
  refresh: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M20 10A8 8 0 006 5.3M4 14a8 8 0 0014 4.7" />
    </svg>
  ),
  support: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a6 6 0 00-12 0v4a2 2 0 002 2h2v-6H6m12 0v6h-2a2 2 0 01-2-2" />
    </svg>
  ),
  rocket: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4M12.5 3l8.5 8.5-5 5L8 8.5l4.5-5.5zM7 17l-3 3M9 15l-2 2M14 6l4 4" />
    </svg>
  ),
};

export default function Advantages() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold text-brand">KEUNGGULAN</span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
            Mengapa Memilih <span className="text-gradient">Business To Berkah?</span>
          </h2>
          <p className="mt-3 text-ink-muted">
            Enam alasan utama kenapa UMKM mempercayakan transformasi digitalnya kepada kami.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card"
            >
              {/* Gradient glow on hover */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition group-hover:opacity-10" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-brand transition group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-glow">
                {icons[a.icon]}
              </div>
              <h3 className="text-lg font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
