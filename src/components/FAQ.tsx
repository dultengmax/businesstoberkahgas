"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { faqs, contact } from "@/lib/content";

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

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const wa = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Halo Business To Berkah, saya punya pertanyaan."
  )}`;

  return (
    <section id="faq" className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
      {/* Animated mesh blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { size: "h-72 w-72", pos: "left-[4%] top-[10%]", color: "bg-teal/12" },
          { size: "h-96 w-96", pos: "right-[5%] top-[15%]", color: "bg-brand/12" },
          { size: "h-80 w-80", pos: "left-[20%] bottom-[8%]", color: "bg-teal-light/10" },
          { size: "h-64 w-64", pos: "right-[18%] bottom-[10%]", color: "bg-brand/10" },
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

        {/* Floating dots */}
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

        {/* Floating plus signs */}
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left: header + CTA (sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="text-sm font-semibold text-brand">FAQ</span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
              Pertanyaan <span className="text-gradient">Umum</span>
            </h2>
            <p className="mt-3 text-ink-muted">
              Jawaban singkat untuk pertanyaan yang sering diajukan.
            </p>

            {/* Help card */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.5A7.93 7.93 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-ink">Masih ada pertanyaan?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Tim kami siap membantu menjawab semua kebutuhan digital bisnis Anda.
              </p>
              <motion.a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
              >
                Tanya via WhatsApp
                <span>→</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: FAQ list */}
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-brand/30 bg-white shadow-card"
                      : "border-slate-100 bg-white shadow-soft"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-ink">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? "bg-gradient-brand text-white" : "bg-brand-soft text-brand"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-50 px-6 pb-5 pt-3 text-sm leading-relaxed text-ink-muted">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
