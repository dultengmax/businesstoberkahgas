"use client";

import { motion, type Variants } from "framer-motion";
import { testimonials } from "@/lib/content";

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

const cardVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } },
};

const quoteVariants: Variants = {
  rest: { scale: 1, color: "rgba(22,224,179,0.9)" },
  hover: { scale: 1.15, transition: { duration: 0.3 } },
};

export default function Testimonials() {
  // Duplicate for seamless marquee loop on mobile
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 text-white md:py-28">
      {/* Animated mesh blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { size: "h-72 w-72", pos: "left-[3%] top-[8%]", color: "bg-teal/10" },
          { size: "h-96 w-96", pos: "right-[5%] top-[15%]", color: "bg-brand/10" },
          { size: "h-80 w-80", pos: "left-[20%] bottom-[8%]", color: "bg-teal-light/8" },
          { size: "h-64 w-64", pos: "right-[15%] bottom-[12%]", color: "bg-brand/8" },
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
        <motion.div variants={shapeVariants} custom={0} animate="animate" className="absolute left-[6%] top-[18%]">
          <div className="h-20 w-20 rounded-full border-2 border-white/15" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={1} animate="animate" className="absolute right-[8%] top-[14%]">
          <div className="h-14 w-14 rotate-45 rounded-2xl border-2 border-white/12" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={2} animate="animate" className="absolute bottom-[15%] left-[10%]">
          <div className="h-16 w-16 rounded-full border-2 border-dashed border-white/15" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={3} animate="animate" className="absolute bottom-[18%] right-[10%]">
          <svg width="56" height="50" viewBox="0 0 64 56" fill="none">
            <path d="M32 4L60 52H4L32 4Z" stroke="white" strokeOpacity="0.12" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Floating dots */}
        {[
          { x: "22%", y: "22%" },
          { x: "78%", y: "32%" },
          { x: "18%", y: "68%" },
          { x: "82%", y: "72%" },
          { x: "48%", y: "12%" },
          { x: "52%", y: "88%" },
        ].map((d, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatVariants}
            animate="animate"
            className="absolute"
            style={{ left: d.x, top: d.y }}
          >
            <div className="h-2 w-2 rounded-full bg-white/35" />
          </motion.div>
        ))}

        {/* Floating plus signs */}
        {[
          { x: "32%", y: "38%" },
          { x: "68%", y: "58%" },
          { x: "62%", y: "22%" },
        ].map((p, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            variants={floatVariants}
            animate="animate"
            className="absolute text-white/25"
            style={{ left: p.x, top: p.y }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold text-teal-light">TESTIMONI</span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Apa Kata <span className="text-gradient">Klien</span>
          </h2>
          <p className="mt-3 text-white/60">
            Pengalaman nyata dari pemilik usaha yang sudah bekerja sama dengan kami.
          </p>
        </motion.div>

        {/* Mobile: horizontal marquee */}
        <div className="mt-12 -mx-6 overflow-hidden md:hidden">
          <div className="marquee-track flex w-max gap-4 px-6">
            {loop.map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                className="flex w-72 shrink-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 text-4xl font-bold leading-none text-gradient">"</div>
                <p className="flex-1 text-sm leading-relaxed text-white/80">{t.quote}</p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop: interactive grid */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1, y: { duration: 0 } }}
              variants={cardVariants}
              whileHover="hover"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition duration-500 group-hover:opacity-20" />
              {/* Top border on hover */}
              <motion.span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-brand"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0 }}
              />

              <motion.div variants={quoteVariants} className="mb-4 text-5xl font-bold leading-none text-gradient">
                "
              </motion.div>

              <p className="flex-1 text-sm leading-relaxed text-white/80">{t.quote}</p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
