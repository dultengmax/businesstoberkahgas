import { contact } from "@/lib/content";

export default function Contact() {
  const wa = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Halo Bisnis To Berkah, saya ingin konsultasi gratis."
  )}`;

  return (
    <section id="kontak" className="bg-brand py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center text-white">
        <h2 className="text-3xl font-bold leading-tight md:text-5xl">
          Siap Transformasi Bisnis Anda ke Era Digital?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
          Ceritakan kebutuhan usaha Anda. Kami bantu susun solusi website atau
          POS yang tepat — mulai dari konsultasi gratis.
        </p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand shadow-card transition hover:bg-brand-soft"
        >
          Konsultasi Gratis Sekarang
          <span aria-hidden>→</span>
        </a>
        <p className="mt-6 text-sm text-white/70">
          Atau email ke{" "}
          <a href={`mailto:${contact.email}`} className="underline">
            {contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
