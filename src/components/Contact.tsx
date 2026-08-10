"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function Contact() {
  const wa = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Halo Business To Berkah, saya ingin konsultasi gratis."
  )}`;

  return (
    <section id="kontak" className="relative overflow-hidden py-20 md:py-28">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-brand" />

      {/* Decorative pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
            Respons Cepat via WhatsApp
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl">
            Siap Transformasi Bisnis
            <br />
            ke Era Digital?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
            Ceritakan kebutuhan usaha Anda. Kami bantu susun solusi website atau POS
            yang tepat — mulai dari konsultasi gratis.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand shadow-card transition hover:scale-105"
            >
              {/* WhatsApp icon */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Gratis via WhatsApp
              <span className="transition group-hover:translate-x-1">→</span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Kami
            </a>
          </div>

          <p className="mt-8 text-sm text-white/60">
            Atau kirim email ke{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-white underline">
              {contact.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
