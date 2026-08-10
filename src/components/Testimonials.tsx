"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 text-white md:py-28">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
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

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10"
            >
              {/* Quote mark */}
              <div className="mb-4 text-5xl font-bold leading-none text-gradient">
                "
              </div>

              <p className="flex-1 text-sm leading-relaxed text-white/80">
                {t.quote}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
