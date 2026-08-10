"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-white">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal-soft/60 blur-3xl" />
        <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-brand-soft/50 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-gradient-brand/5 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal-soft/50 px-4 py-1.5 text-xs font-semibold text-teal-dark"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse" />
            Solusi Digital Untuk Bisnis Anda
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl lg:text-[3.5rem]"
          >
            Wujudkan Website
            <br />
            Bisnis Impian,
            <br />
            <span className="text-gradient-shine">Cepat & Profesional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg"
          >
            Jasa pembuatan website profesional dan aplikasi kasir (POS) berlangganan
            untuk UMKM naik kelas. Harga transparan, hasil berkualitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#kontak"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
            >
              Konsultasi Gratis
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#portofolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              Lihat Portofolio
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex gap-8"
          >
            {[
              { num: "50+", label: "Proyek Selesai" },
              { num: "100%", label: "Klien Puas" },
              { num: "3-5", label: "Hari Kerja" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-gradient">{s.num}</p>
                <p className="text-xs text-ink-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient frame */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-2xl" />

          {/* Main image card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/40 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard digital dan perangkat transaksi untuk bisnis"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge — POS */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card md:-left-8"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-ink">POS Berlangganan</p>
              <p className="text-[10px] text-ink-muted">Mulai Rp 49rb/bln</p>
            </div>
            <span className="rounded-full bg-teal-soft px-2 py-0.5 text-[9px] font-bold text-teal-dark">
              SOON
            </span>
          </motion.div>

          {/* Floating badge — delivery time */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-card md:-right-8"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-soft text-teal-dark">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-ink">3-5 Hari</p>
              <p className="text-[10px] text-ink-muted">Launch cepat</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient divider */}
      <div className="divider-gradient mx-auto max-w-6xl" />
    </section>
  );
}
