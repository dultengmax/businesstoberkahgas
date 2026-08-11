"use client";

import { motion, type Variants } from "framer-motion";
import { portfolio } from "@/lib/content";

const bentoSpans = [
  "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2",
  "sm:col-span-2 lg:col-span-2 lg:row-span-1",
  "sm:col-span-1 lg:col-span-1 lg:row-span-1",
  "sm:col-span-1 lg:col-span-1 lg:row-span-1",
  "sm:col-span-2 lg:col-span-2 lg:row-span-1",
  "sm:col-span-2 lg:col-span-2 lg:row-span-1",
];

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
  rest: { scale: 1 },
  hover: { scale: 0.98, transition: { duration: 0.3 } },
};

export default function Portfolio() {
  return (
    <section id="portofolio" className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
      {/* Animated mesh blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { size: "h-72 w-72", pos: "left-[4%] top-[8%]", color: "bg-teal/12" },
          { size: "h-96 w-96", pos: "right-[6%] top-[12%]", color: "bg-brand/12" },
          { size: "h-80 w-80", pos: "left-[18%] bottom-[8%]", color: "bg-teal-light/10" },
          { size: "h-64 w-64", pos: "right-[14%] bottom-[12%]", color: "bg-brand/10" },
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
        <motion.div variants={shapeVariants} custom={0} animate="animate" className="absolute left-[7%] top-[16%]">
          <div className="h-20 w-20 rounded-full border-2 border-brand/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={1} animate="animate" className="absolute right-[9%] top-[14%]">
          <div className="h-14 w-14 rotate-45 rounded-2xl border-2 border-teal/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={2} animate="animate" className="absolute bottom-[16%] left-[11%]">
          <div className="h-16 w-16 rounded-full border-2 border-dashed border-brand/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={3} animate="animate" className="absolute bottom-[18%] right-[11%]">
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

        <div className="mt-14 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[200px] lg:grid-cols-4">
          {portfolio.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              variants={cardVariants}
              whileHover="hover"
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-soft ${bentoSpans[i]}`}
            >
              {/* Image */}
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay — always subtle, stronger on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition duration-500 group-hover:from-ink/85" />

              {/* Top gradient bar on hover */}
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-light">
                  {p.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">{p.name}</h3>
                {/* Reveal description on hover */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <p className="overflow-hidden text-xs text-white/0 transition-colors duration-300 group-hover:pt-1 group-hover:text-white/70">
                    Lihat detail proyek →
                  </p>
                </div>
              </div>

              {/* View link on hover */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-card transition duration-300 group-hover:opacity-100"
              >
                <span className="text-ink">↗</span>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.a
            href="#kontak"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-white shadow-glow transition"
          >
            Lihat Semua Proyek
            <span>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
