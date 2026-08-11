"use client";

import { motion, type Variants } from "framer-motion";
import { contact } from "@/lib/content";

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
    y: [0, -20, 0],
    transition: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
  }),
};

export default function Contact() {
  const wa = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Halo Business To Berkah, saya ingin konsultasi gratis."
  )}`;

  return (
    <section id="kontak" className="relative overflow-hidden py-20 md:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-brand" />

      {/* Animated mesh blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { size: "h-72 w-72", pos: "left-[5%] top-[10%]", color: "bg-white/10" },
          { size: "h-96 w-96", pos: "right-[5%] top-[20%]", color: "bg-teal-light/20" },
          { size: "h-80 w-80", pos: "left-[15%] bottom-[10%]", color: "bg-brand-dark/15" },
          { size: "h-64 w-64", pos: "right-[20%] bottom-[5%]", color: "bg-white/10" },
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
        {/* Rotating ring - top left */}
        <motion.div
          variants={shapeVariants}
          custom={0}
          animate="animate"
          className="absolute left-[8%] top-[15%]"
        >
          <div className="h-24 w-24 rounded-full border-2 border-white/20" />
        </motion.div>

        {/* Rotating square - top right */}
        <motion.div
          variants={shapeVariants}
          custom={1}
          animate="animate"
          className="absolute right-[10%] top-[12%]"
        >
          <div className="h-16 w-16 rotate-45 rounded-2xl border-2 border-white/15" />
        </motion.div>

        {/* Rotating dashed circle - bottom left */}
        <motion.div
          variants={shapeVariants}
          custom={2}
          animate="animate"
          className="absolute bottom-[12%] left-[12%]"
        >
          <div className="h-20 w-20 rounded-full border-2 border-dashed border-white/20" />
        </motion.div>

        {/* Rotating triangle - bottom right */}
        <motion.div
          variants={shapeVariants}
          custom={3}
          animate="animate"
          className="absolute bottom-[15%] right-[12%]"
        >
          <svg width="64" height="56" viewBox="0 0 64 56" fill="none">
            <path d="M32 4L60 52H4L32 4Z" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Floating dots */}
        {[
          { x: "20%", y: "25%" },
          { x: "75%", y: "35%" },
          { x: "15%", y: "70%" },
          { x: "85%", y: "75%" },
          { x: "50%", y: "15%" },
          { x: "45%", y: "85%" },
        ].map((d, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatVariants}
            animate="animate"
            className="absolute"
            style={{ left: d.x, top: d.y }}
          >
            <div className="h-2 w-2 rounded-full bg-white/40" />
          </motion.div>
        ))}

        {/* Floating plus signs */}
        {[
          { x: "30%", y: "40%" },
          { x: "70%", y: "60%" },
          { x: "60%", y: "25%" },
        ].map((p, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            variants={floatVariants}
            animate="animate"
            className="absolute text-white/30"
            style={{ left: p.x, top: p.y }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-white">
              <span className="h-full w-full animate-ping rounded-full bg-white opacity-75" />
            </span>
            Respons Cepat via WhatsApp
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl"
          >
            Siap Transformasi Bisnis
            <br />
            ke Era <span className="relative inline-block">
              Digital?
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-white/50"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg"
          >
            Ceritakan kebutuhan usaha Anda. Kami bantu susun solusi website atau POS
            yang tepat — mulai dari konsultasi gratis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand shadow-card"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Konsultasi Gratis via WhatsApp
              <motion.span className="inline-block" whileHover={{ x: 4 }}>→</motion.span>
            </motion.a>

            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Kami
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-white/60"
          >
            Atau kirim email ke{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-white underline">
              {contact.email}
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
