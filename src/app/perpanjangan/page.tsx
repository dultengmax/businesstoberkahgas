"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { renewalPlans, paymentMethods, contact } from "@/lib/content";

const blobVariants: Variants = {
  animate: (i: number) => ({
    x: [0, 30 * (i % 2 ? -1 : 1), 0],
    y: [0, -25 * (i % 2 ? 1 : -1), 0],
    scale: [1, 1.15, 1],
    transition: { duration: 12 + i * 3, repeat: Infinity, ease: "easeInOut" },
  }),
};

const shapeVariants: Variants = {
  animate: (i: number) => ({
    rotate: [0, 360],
    transition: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
  }),
};

const floatVariants: Variants = {
  animate: (i: number) => ({
    y: [0, -18, 0],
    transition: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
  }),
};

const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

const methodIcons: Record<string, React.ReactNode> = {
  qris: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2M18 14h2M14 18h2M18 18h2" />
    </svg>
  ),
  bank: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18" />
    </svg>
  ),
  wallet: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h12a2 2 0 012 2v2H5a2 2 0 00-2 2V7zm0 4v6a2 2 0 002 2h14a2 2 0 002-2v-6m0 0v-2a2 2 0 00-2-2M16 13h2" />
    </svg>
  ),
};

export default function PerpanjanganPage() {
  const [plan, setPlan] = useState("pro");
  const [method, setMethod] = useState("qris");
  const [submitted, setSubmitted] = useState(false);

  const selected = renewalPlans.find((p) => p.id === plan)!;
  const adminFee = 2500;
  const total = selected.price + adminFee;

  const waLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Halo, saya ingin perpanjang website paket ${selected.name} (${fmt(
      selected.price
    )}). Metode: ${paymentMethods.find((m) => m.id === method)?.name}.`
  )}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-surface-alt pt-28 pb-20 md:pt-32">
      {/* Animated mesh blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { size: "h-72 w-72", pos: "left-[3%] top-[8%]", color: "bg-teal/12" },
          { size: "h-96 w-96", pos: "right-[4%] top-[12%]", color: "bg-brand/12" },
          { size: "h-80 w-80", pos: "left-[18%] bottom-[6%]", color: "bg-teal-light/10" },
          { size: "h-64 w-64", pos: "right-[16%] bottom-[8%]", color: "bg-brand/10" },
        ].map((b, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={blobVariants}
            animate="animate"
            className={`absolute ${b.size} ${b.pos} ${b.color} rounded-full blur-3xl`}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div variants={shapeVariants} custom={0} animate="animate" className="absolute left-[6%] top-[16%]">
          <div className="h-20 w-20 rounded-full border-2 border-brand/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={1} animate="animate" className="absolute right-[8%] top-[14%]">
          <div className="h-14 w-14 rotate-45 rounded-2xl border-2 border-teal/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={2} animate="animate" className="absolute bottom-[16%] left-[10%]">
          <div className="h-16 w-16 rounded-full border-2 border-dashed border-brand/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={3} animate="animate" className="absolute bottom-[18%] right-[10%]">
          <svg width="56" height="50" viewBox="0 0 64 56" fill="none">
            <path d="M32 4L60 52H4L32 4Z" stroke="#13A6E8" strokeOpacity="0.2" strokeWidth="2" />
          </svg>
        </motion.div>

        {[
          { x: "24%", y: "20%" },
          { x: "76%", y: "30%" },
          { x: "16%", y: "66%" },
          { x: "84%", y: "70%" },
          { x: "48%", y: "10%" },
          { x: "54%", y: "88%" },
        ].map((d, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatVariants}
            animate="animate"
            className="absolute"
            style={{ left: d.x, top: d.y }}
          >
            <div className="h-2 w-2 rounded-full bg-brand/30" />
          </motion.div>
        ))}

        {[
          { x: "34%", y: "36%" },
          { x: "66%", y: "56%" },
          { x: "60%", y: "22%" },
        ].map((p, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            variants={floatVariants}
            animate="animate"
            className="absolute text-teal/30"
            style={{ left: p.x, top: p.y }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        ))}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#13A6E8 1px, transparent 1px), linear-gradient(90deg, #13A6E8 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold text-brand">PERPANJANGAN</span>
          <h1 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
            Perpanjang <span className="text-gradient">Website</span> Anda
          </h1>
          <p className="mt-3 text-ink-muted">
            Pilih paket perpanjangan domain & hosting. Cepat, transparan, tanpa biaya tersembunyi.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* Left: form steps */}
          <div className="space-y-6">
            {/* Step 1: Pilih paket */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft md:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                  1
                </span>
                <h2 className="text-lg font-bold text-ink">Pilih Paket Perpanjangan</h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {renewalPlans.map((p) => {
                  const active = plan === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlan(p.id)}
                      className={`relative rounded-2xl border p-4 text-left transition ${
                        active
                          ? "border-brand bg-brand-soft shadow-glow"
                          : "border-slate-200 bg-white hover:border-brand/40"
                      }`}
                    >
                      {p.popular && (
                        <span className="absolute -top-2 right-3 rounded-full bg-gradient-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                          Populer
                        </span>
                      )}
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold ${active ? "text-brand" : "text-ink"}`}>
                          {p.name}
                        </span>
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition ${
                            active ? "border-brand bg-brand" : "border-slate-300"
                          }`}
                        >
                          {active && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-2.5 w-2.5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="4"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </motion.svg>
                          )}
                        </span>
                      </div>
                      <p className="mt-2 text-lg font-extrabold text-ink">{fmt(p.price)}</p>
                      <p className="text-xs text-ink-muted">{p.duration}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Step 2: Data website */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft md:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                  2
                </span>
                <h2 className="text-lg font-bold text-ink">Data Website</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink-muted">
                    Nama Pemilik
                  </label>
                  <input
                    type="text"
                    placeholder="Nama lengkap"
                    className="w-full rounded-xl border border-slate-200 bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@bisnis.com"
                    className="w-full rounded-xl border border-slate-200 bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold text-ink-muted">
                    Domain Website
                  </label>
                  <input
                    type="text"
                    placeholder="bisnisanda.com"
                    className="w-full rounded-xl border border-slate-200 bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold text-ink-muted">
                    Catatan (opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Misal: perpanjang 2 tahun, ubah paket, dll."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 3: Metode pembayaran */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft md:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                  3
                </span>
                <h2 className="text-lg font-bold text-ink">Metode Pembayaran</h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {paymentMethods.map((m) => {
                  const active = method === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMethod(m.id)}
                      className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
                        active
                          ? "border-brand bg-brand-soft shadow-glow"
                          : "border-slate-200 bg-white hover:border-brand/40"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          active ? "bg-gradient-brand text-white" : "bg-surface-soft text-ink-muted"
                        }`}
                      >
                        {methodIcons[m.icon]}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-bold ${active ? "text-brand" : "text-ink"}`}>
                          {m.name}
                        </p>
                        <p className="truncate text-xs text-ink-muted">{m.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: summary (sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
              {/* Header */}
              <div className="bg-gradient-navy p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider">Ringkasan</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-light">
                    {selected.name}
                  </span>
                </div>
                <p className="mt-4 text-3xl font-extrabold">
                  {fmt(total)}
                </p>
                <p className="mt-1 text-xs text-white/50">Termasuk biaya admin</p>
              </div>

              {/* Detail */}
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Paket</span>
                    <span className="font-semibold text-ink">{selected.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Durasi</span>
                    <span className="font-semibold text-ink">{selected.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Domain</span>
                    <span className="font-semibold text-ink">{selected.domain}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Hosting</span>
                    <span className="font-semibold text-ink">{selected.hosting}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Support</span>
                    <span className="font-semibold text-ink">{selected.support}</span>
                  </div>
                </div>

                <div className="my-5 h-px bg-slate-100" />

                {/* Price breakdown */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Perpanjangan</span>
                    <span className="font-medium text-ink">{fmt(selected.price)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Biaya admin</span>
                    <span className="font-medium text-ink">{fmt(adminFee)}</span>
                  </div>
                </div>

                <div className="my-5 h-px bg-slate-100" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-ink">Total</span>
                  <span className="text-xl font-extrabold text-gradient">{fmt(total)}</span>
                </div>

                {/* Pay button */}
                <motion.button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-4 text-sm font-bold text-white shadow-glow"
                >
                  Bayar Sekarang
                  <span>→</span>
                </motion.button>

                {/* Trust badges */}
                <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-ink-light">
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pembayaran Aman
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Proses Cepat
                  </span>
                </div>
              </div>
            </div>

            {/* Help link */}
            <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white p-4 text-sm shadow-soft">
              <span className="text-ink-muted">Ada pertanyaan?</span>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand transition hover:gap-2"
              >
                Chat WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSubmitted(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-card"
            >
              <div className="bg-gradient-brand p-8 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="mt-4 text-xl font-bold">Pembayaran Diterima!</h3>
                <p className="mt-2 text-sm text-white/80">
                  Terima kasih. Tim kami akan memproses perpanjangan Anda dalam 1×24 jam.
                </p>
              </div>
              <div className="p-6">
                <div className="rounded-2xl bg-surface-alt p-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Paket</span>
                    <span className="font-semibold text-ink">{selected.name}</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="text-ink-muted">Total</span>
                    <span className="font-bold text-gradient">{fmt(total)}</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="text-ink-muted">Metode</span>
                    <span className="font-semibold text-ink">
                      {paymentMethods.find((m) => m.id === method)?.name}
                    </span>
                  </div>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow"
                >
                  Konfirmasi via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
