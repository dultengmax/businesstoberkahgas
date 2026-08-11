"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { advantages } from "@/lib/content";

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

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    badge: "Tim Profesional",
    title: "Dedicated team untuk setiap proyek Anda",
    desc: "Desainer, developer, dan support yang fokus pada hasil berkualitas.",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    badge: "Kolaborasi Klien",
    title: "Proses transparan dari awal sampai launch",
    desc: "Briefing, revisi, dan delivery yang terukur — tanpa kejutan.",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    badge: "Hasil Berkualitas",
    title: "Website modern siap berkembang",
    desc: "Dibangun dengan stack terkini, cepat, dan SEO-friendly.",
  },
];

function useAutoCarousel(length: number, intervalMs = 3500) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(t);
  }, [length, intervalMs]);
  return [index, setIndex] as const;
}

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

function trackCursor(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function Advantages() {
  const [index, setIndex] = useAutoCarousel(carouselImages.length);
  const img = carouselImages[index];

  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
      {/* Animated mesh blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { size: "h-96 w-96", pos: "left-[3%] top-[5%]", color: "bg-teal/15" },
          { size: "h-[28rem] w-[28rem]", pos: "right-[2%] top-[30%]", color: "bg-brand/15" },
          { size: "h-80 w-80", pos: "left-[30%] bottom-[5%]", color: "bg-teal-light/12" },
          { size: "h-72 w-72", pos: "right-[25%] bottom-[8%]", color: "bg-brand/10" },
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
        <motion.div variants={shapeVariants} custom={0} animate="animate" className="absolute left-[6%] top-[12%]">
          <div className="h-24 w-24 rounded-full border-2 border-brand/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={1} animate="animate" className="absolute right-[8%] top-[10%]">
          <div className="h-16 w-16 rotate-45 rounded-2xl border-2 border-teal/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={2} animate="animate" className="absolute bottom-[14%] left-[9%]">
          <div className="h-20 w-20 rounded-full border-2 border-dashed border-brand/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={3} animate="animate" className="absolute bottom-[16%] right-[9%]">
          <svg width="60" height="52" viewBox="0 0 64 56" fill="none">
            <path d="M32 4L60 52H4L32 4Z" stroke="#13A6E8" strokeOpacity="0.2" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Floating dots */}
        {[
          { x: "22%", y: "18%" },
          { x: "78%", y: "24%" },
          { x: "14%", y: "64%" },
          { x: "86%", y: "68%" },
          { x: "46%", y: "8%" },
          { x: "52%", y: "90%" },
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

        {/* Floating plus signs */}
        {[
          { x: "32%", y: "34%" },
          { x: "68%", y: "54%" },
          { x: "58%", y: "20%" },
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

        {/* Grid pattern overlay */}
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

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: auto carousel showcase (sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-brand opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/40 shadow-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={img.src}
                  src={img.src}
                  alt={img.title}
                  className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/5]"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={img.title}
                  className="absolute inset-0 flex flex-col justify-end gap-2 p-6 md:p-7"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {img.badge}
                  </span>
                  <p className="max-w-xs text-lg font-bold leading-snug text-white md:text-xl">
                    {img.title}
                  </p>
                  <p className="max-w-xs text-sm text-white/70">{img.desc}</p>
                </motion.div>
              </AnimatePresence>

              {/* Indicator dots */}
              <div className="absolute right-5 top-5 flex gap-1.5">
                {carouselImages.map((_, d) => (
                  <button
                    key={d}
                    aria-label={`Slide ${d + 1}`}
                    onClick={() => setIndex(d)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      d === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-card md:-left-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4M12.5 3l8.5 8.5-5 5L8 8.5l4.5-5.5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-extrabold text-ink">50+ Proyek</p>
                <p className="text-[10px] text-ink-muted">Selesai tepat waktu</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: list of advantages */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {advantages.map((a, i) => (
              <motion.article
                key={a.title}
                onMouseMove={trackCursor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card sm:p-7"
              >
                {/* Cursor spotlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(200px circle at var(--mx) var(--my), rgba(19,166,232,0.10), transparent 60%)",
                  }}
                />
                {/* Top gradient bar */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100"
                />
                {/* Ghost index */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-3 text-5xl font-extrabold leading-none text-surface-soft transition-colors duration-300 group-hover:text-brand-soft sm:text-6xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-brand transition duration-300 group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-glow">
                    {icons[a.icon]}
                  </div>
                  <h3 className="text-base font-bold text-ink sm:text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
