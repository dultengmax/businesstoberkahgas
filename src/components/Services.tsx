"use client";

import { motion, type Variants } from "framer-motion";
import { services } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  code: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" />
    </svg>
  ),
  pos: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } },
};

const iconVariants: Variants = {
  visible: { rotate: 0, scale: 1 },
  hover: { rotate: 8, scale: 1.12, transition: { duration: 0.3 } },
};

const glowVariants: Variants = {
  visible: { opacity: 0, scale: 0.8 },
  hover: { opacity: 0.25, scale: 1.2, transition: { duration: 0.4 } },
};

const borderVariants: Variants = {
  visible: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.4 } },
};

const listVariants: Variants = {
  visible: {},
  hover: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const featureVariants: Variants = {
  visible: { opacity: 0.5, x: -4 },
  hover: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const arrowVariants: Variants = {
  visible: { x: 0 },
  hover: { x: 4, transition: { duration: 0.25 } },
};

export default function Services() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-gradient-navy py-20 text-white md:py-28">
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold text-teal-light">LAYANAN</span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Dua Lini, <span className="text-gradient">Satu Solusi</span>
          </h2>
          <p className="mt-3 text-white/60">
            Dari website profesional hingga aplikasi kasir berlangganan — semua untuk UMKM naik kelas.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {/* Hover glow */}
              <motion.div
                aria-hidden
                variants={glowVariants}
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-brand blur-3xl"
              />
              {/* Animated top border */}
              <motion.span
                aria-hidden
                variants={borderVariants}
                style={{ originX: 0 }}
                className="absolute inset-x-0 top-0 h-px bg-gradient-brand"
              />

              <div className="relative flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    variants={iconVariants}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow"
                  >
                    {icons[s.icon]}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  {s.badge && (
                    <motion.span
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="ml-auto rounded-full bg-teal-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-dark"
                    >
                      {s.badge}
                    </motion.span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>

                <motion.ul variants={listVariants} className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <motion.li
                      key={f}
                      variants={featureVariants}
                      className="flex items-center gap-2 text-xs font-medium text-white/80"
                    >
                      <span className="text-teal-light">✓</span>
                      {f}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.a
                  href="#kontak"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-light hover:text-white"
                >
                  {s.badge ? "Daftar Waitlist" : "Konsultasi Sekarang"}
                  <motion.span variants={arrowVariants}>→</motion.span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
