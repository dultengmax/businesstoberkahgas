const reports = [
  "📈 22 Juli 2026 — Website company profile baru diluncurkan untuk mitra kuliner.",
  "🛠️ 19 Juli 2026 — Modul laporan penjualan POS disempurnakan untuk pengalaman kasir lebih cepat.",
  "🎨 12 Juli 2026 — Desain UI/UX revisi dilakukan agar visual brand lebih konsisten.",
  "🚀 08 Juli 2026 — Paket website Pro mulai banyak dipilih oleh UMKM yang ingin tampil lebih profesional.",
];

export default function ActivityMarquee() {
  return (
    <section className="border-y border-slate-200 bg-sky-400/80">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3 sm:px-8">
        <span className="shrink-0 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Report Kegiatan
        </span>

        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-8">
            {[...reports, ...reports].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="whitespace-nowrap rounded-full border text-white border-sky-400/80 bg-sky-600/80 px-4 py-2 text-sm  shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
