"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { paymentMethods, contact } from "@/lib/content";
import Header from "@/components/Header";
import ActivityMarquee from "@/components/ActivityMarquee";

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

const PRICE = 550000;
const ADMIN_FEE = 2500;
const TOTAL = PRICE + ADMIN_FEE;

const bankAccounts: Record<string, { label: string; number: string; name: string }> = {
  qris: { label: "QRIS", number: "", name: "" },
  bca: { label: "Bank BCA", number: "1760351144", name: "Lilis W" },
  mandiri: { label: "Bank Mandiri", number: "1320021483756", name: "Abdul Aziz" },
  gopay: { label: "GoPay / OVO", number: "62895411828671", name: "Abdul Aziz" },
};

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

export default function SenapatidsRenewalPage() {
  const [method, setMethod] = useState("qris");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [modalCopied, setModalCopied] = useState(false);
  const [seconds, setSeconds] = useState(24 * 60 * 60);

  const account = bankAccounts[method];

  const copyNumber = () => {
    navigator.clipboard?.writeText(account.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyModalNumber = () => {
    navigator.clipboard?.writeText(account.number);
    setModalCopied(true);
    setTimeout(() => setModalCopied(false), 2000);
  };

  useEffect(() => {
    if (!submitted) return;
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  const waLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Halo, saya ingin perpanjang domain & email bisnis senapatids (${fmt(
      PRICE
    )}/tahun). Metode: ${paymentMethods.find((m) => m.id === method)?.name}.`
  )}`;

  return (<>
      <ActivityMarquee />
      <Header />
    <main className="relative min-h-screen overflow-hidden bg-surface-alt pt-14 pb-20 md:pt-22">
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
            Perpanjang <span className="text-gradient">Domain & Email Bisnis</span>
          </h1>
          <p className="mt-3 text-ink-muted">
            Perpanjangan tahunan untuk akun <strong className="text-ink">senapatids</strong>. Cepat, aman, transparan.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* Left: form steps */}
          <div className="space-y-6">
            {/* Step 1: Info paket (fixed) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft"
            >
              <div className="bg-gradient-navy p-6 text-white">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                    1
                  </span>
                  <h2 className="text-lg font-bold">Detail Perpanjangan</h2>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold">senapatids</p>
                      <p className="text-xs text-white/60">Domain & Email Bisnis</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-gradient">{fmt(PRICE)}</p>
                    <p className="text-xs text-white/60">/ 1 tahun</p>
                  </div>
                </div>
              </div>

              {/* Included items */}
              <div className="p-6">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Perpanjangan domain 1 tahun",
                    "Email bisnis (custom domain)",
                    "Hosting email tetap aktif",
                    "SSL certificate renew",
                    "Konfigurasi DNS",
                    "Support teknis",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-ink">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[10px] text-white">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft md:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                  2
                </span>
                <h2 className="text-lg font-bold text-ink">Data Pemilik</h2>
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
                    Email Aktif
                  </label>
                  <input
                    type="email"
                    placeholder="email@bisnis.com"
                    className="w-full rounded-xl border border-slate-200 bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold text-ink-muted">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    className="w-full rounded-xl border border-slate-200 bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold text-ink-muted">
                    Catatan (opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Misal: tambah akun email, ubah konfigurasi, dll."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
                  />
                </div>
              </div>
            </motion.div> */}

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

              {/* Account details for selected method */}
              {method === "qris" ? (
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-900">QRIS Sedang Diperbaiki</p>
                    <p className="mt-0.5 text-xs text-amber-700">
                      Ada gangguan sistem QRIS. Silakan pilih metode lain (BCA / Mandiri / GoPay).
                    </p>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={method}
                  className="mt-5 overflow-hidden rounded-2xl border border-brand/20 bg-surface-alt"
                >
                  <div className="flex items-center gap-2 border-b border-slate-100 bg-white px-4 py-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-brand text-[10px] font-bold text-white">
                      {account.label.charAt(0)}
                    </span>
                    <p className="text-xs font-bold text-ink">{account.label}</p>
                    <span className="ml-auto rounded-full bg-teal-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal-dark">
                      Transfer
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      Nomor {method === "gopay" ? "E-Wallet" : "Rekening"}
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-3">
                      <p className="select-all font-mono text-lg font-bold tracking-wider text-ink">
                        {account.number}
                      </p>
                      <button
                        type="button"
                        onClick={copyNumber}
                        className="flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1.5 text-[10px] font-bold text-white transition hover:scale-105"
                      >
                        {copied ? (
                          <>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Tersalin
                          </>
                        ) : (
                          <>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3" />
                            </svg>
                            Salin
                          </>
                        )}
                      </button>
                    </div>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      Atas Nama
                    </p>
                    <p className="mt-1 text-sm font-bold text-ink">{account.name}</p>
                  </div>
                </motion.div>
              )}
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
                    senapatids
                  </span>
                </div>
                <p className="mt-4 text-3xl font-extrabold">
                  {fmt(TOTAL)}
                </p>
                <p className="mt-1 text-xs text-white/50">Termasuk biaya admin</p>
              </div>

              {/* Detail */}
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Akun</span>
                    <span className="font-semibold text-ink">senapatids</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Layanan</span>
                    <span className="font-semibold text-ink">Domain + Email Bisnis</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Durasi</span>
                    <span className="font-semibold text-ink">1 Tahun</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">SSL</span>
                    <span className="font-semibold text-ink">Termasuk</span>
                  </div>
                </div>

                <div className="my-5 h-px bg-slate-100" />

                {/* Price breakdown */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Perpanjangan</span>
                    <span className="font-medium text-ink">{fmt(PRICE)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Biaya admin</span>
                    <span className="font-medium text-ink">{fmt(ADMIN_FEE)}</span>
                  </div>
                </div>

                <div className="my-5 h-px bg-slate-100" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-ink">Total</span>
                  <span className="text-xl font-extrabold text-gradient">{fmt(TOTAL)}</span>
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

            {/* Back link */}
            <a
              href="/"
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white p-3 text-xs font-medium text-ink-muted shadow-soft transition hover:text-brand"
            >
              ← Kembali ke Beranda
            </a>
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
              {/* Header — waiting status */}
              <div className="bg-gradient-navy p-6 text-center text-white">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10"
                >
                  <svg className="h-8 w-8 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="mt-4 text-xl font-bold">Menunggu Pembayaran</h3>
                <p className="mt-2 text-sm text-white/60">
                  Selesaikan pembayaran sebelum waktu habis. Konfirmasi via WhatsApp setelah transfer.
                </p>
              </div>

              <div className="p-6">
                {/* Countdown timer */}
                <div className="mb-5 flex items-center justify-center gap-2 rounded-2xl bg-surface-alt p-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                    Batas waktu
                  </span>
                  <span className="font-mono text-lg font-extrabold text-brand">
                    {hh}:{mm}:{ss}
                  </span>
                </div>

                {/* Amount to pay */}
                <div className="mb-4 rounded-2xl bg-gradient-brand-soft p-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                    Total yang harus dibayar
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-gradient">{fmt(TOTAL)}</p>
                </div>

                {/* Payment method details */}
                {method === "qris" ? (
                  <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber-900">QRIS Sedang Diperbaiki</p>
                      <p className="mt-0.5 text-xs text-amber-700">
                        Ada gangguan sistem QRIS. Silakan pilih metode lain (BCA / Mandiri / GoPay).
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-2 border-b border-slate-100 bg-surface-alt px-4 py-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-brand text-[10px] font-bold text-white">
                        {account.label.charAt(0)}
                      </span>
                      <p className="text-xs font-bold text-ink">{account.label}</p>
                    </div>
                    <div className="p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                        Nomor {method === "gopay" ? "E-Wallet" : "Rekening"}
                      </p>
                      <div className="mt-1 flex items-center justify-between gap-3">
                        <p className="select-all font-mono text-lg font-bold tracking-wider text-ink">
                          {account.number}
                        </p>
                        <button
                          type="button"
                          onClick={copyModalNumber}
                          className="flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1.5 text-[10px] font-bold text-white transition hover:scale-105"
                        >
                          {modalCopied ? (
                            <>
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              Tersalin
                            </>
                          ) : (
                            <>
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3" />
                              </svg>
                              Salin
                            </>
                          )}
                        </button>
                      </div>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                        Atas Nama
                      </p>
                      <p className="mt-1 text-sm font-bold text-ink">{account.name}</p>
                    </div>
                  </div>
                )}

                {/* Note */}
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-teal-soft/50 p-3 text-xs text-ink-muted">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Transfer sesuai nominal <strong className="text-ink">{fmt(TOTAL)}</strong>. Setelah transfer, konfirmasi via WhatsApp agar perpanjangan segera diproses.
                </p>

                {/* Actions */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-white shadow-glow"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konfirmasi via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSeconds(24 * 60 * 60);
                  }}
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
  </>
  );
}
