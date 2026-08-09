export const advantages = [
  {
    title: "Proses Cepat",
    desc: "Website Anda bisa online dalam hitungan hari, bukan bulan. Alur kerja kami ringkas dan terukur.",
    icon: "clock" as const,
  },
  {
    title: "Desain Modern",
    desc: "Dirancang sesuai karakter usaha Anda — tampilan profesional yang membangun kepercayaan pelanggan.",
    icon: "pen" as const,
  },
  {
    title: "Harga Terjangkau",
    desc: "Semua biaya dijelaskan di depan, tanpa tagihan mengejutkan. Cocok untuk UMKM yang baru naik kelas.",
    icon: "tag" as const,
  },
];

export const services = [
  {
    title: "Landing Page & Company Profile",
    desc: "Website yang menampilkan brand Anda secara profesional, siap menarik pelanggan baru.",
    features: ["Desain Responsif", "Integrasi Analytics", "Optimasi SEO Dasar"],
  },
  {
    title: "Toko Online (E-Commerce)",
    desc: "Jualan online dengan katalog, keranjang, dan pembayaran yang mudah dikelola.",
    features: ["Payment Gateway", "Manajemen Stok", "Laporan Pesanan"],
  },
];

export const webPricing = [
  {
    name: "Starter",
    price: "Rp 1.500.000",
    unit: "sekali bayar",
    features: [
      "1 halaman (landing page)",
      "Desain responsif (HP & desktop)",
      "1x revisi",
      "Estimasi 5 hari kerja",
    ],
    highlight: false,
  },
  {
    name: "Bisnis",
    price: "Rp 3.500.000",
    unit: "sekali bayar",
    features: [
      "Hingga 5 halaman",
      "Desain custom sesuai brand",
      "3x revisi",
      "Setup domain & hosting",
      "Estimasi 10 hari kerja",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "Rp 5.500.000",
    unit: "sekali bayar",
    features: [
      "Hingga 10 halaman",
      "Integrasi form & WhatsApp",
      "Optimasi performa",
      "5x revisi",
      "Estimasi 14 hari kerja",
    ],
    highlight: false,
  },
  {
    name: "Custom",
    price: "Mulai Rp 7jt",
    unit: "sekali bayar",
    features: [
      "Sistem sesuai kebutuhan",
      "Revisi selama pengerjaan",
      "Konsultasi arsitektur",
      "Estimasi disesuaikan",
    ],
    highlight: false,
  },
];

export const posPricing = [
  {
    name: "Starter",
    price: "Rp 49.000",
    unit: "/bulan (estimasi)",
    features: ["1 perangkat kasir", "Laporan penjualan harian", "Hingga 200 transaksi/bulan"],
    highlight: false,
  },
  {
    name: "Bisnis",
    price: "Rp 99.000",
    unit: "/bulan (estimasi)",
    features: ["Hingga 3 perangkat", "Manajemen stok otomatis", "Transaksi tanpa batas"],
    highlight: true,
  },
  {
    name: "Pro",
    price: "Rp 199.000",
    unit: "/bulan (estimasi)",
    features: ["Multi-cabang", "Multi-user dengan hak akses", "Laporan & ekspor lengkap"],
    highlight: false,
  },
];

export const portfolio = [
  {
    name: "Kafe Nusantara",
    category: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Toko Berkah",
    category: "Company Profile",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marketplace Lokal",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dashboard POS",
    category: "Sistem Custom",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
  },
];

export const faqs = [
  {
    q: "Berapa lama pengerjaan website?",
    a: "Tergantung paket. Starter biasanya 5 hari kerja, Bisnis sekitar 10 hari kerja. Kami informasikan estimasi pasti setelah briefing.",
  },
  {
    q: "Apakah termasuk domain dan hosting?",
    a: "Paket Bisnis ke atas sudah termasuk bantuan setup domain & hosting. Untuk Starter, kami bisa bantu dengan biaya tambahan.",
  },
  {
    q: "Bagaimana dengan aplikasi kasir (POS)?",
    a: "POS masih early access. Anda bisa daftar waitlist untuk harga spesial peluncuran dan akses lebih awal.",
  },
  {
    q: "Apakah ada biaya revisi?",
    a: "Setiap paket sudah termasuk kuota revisi. Revisi di luar kuota akan dikomunikasikan di depan sebelum dikerjakan.",
  },
];

export const testimonials = [
  {
    name: "Rina Wijaya",
    role: "Pemilik Kafe Nusantara",
    quote:
      "Website kami jadi lebih dipercaya pelanggan. Prosesnya cepat dan komunikasinya jelas dari awal sampai launching.",
  },
  {
    name: "Andi Pratama",
    role: "Owner Toko Berkah",
    quote:
      "Desainnya modern tapi tetap sesuai karakter usaha kami. Timnya responsif dan harga transparan.",
  },
  {
    name: "Siti Marlina",
    role: "Founder Marketplace Lokal",
    quote:
      "Dari company profile sampai fitur katalog, semuanya rapi. Sangat membantu bisnis kami naik kelas.",
  },
];

export const contact = {
  whatsappNumber: "6281234567890",
  email: "halo@bisnistoberkah.id",
  instagram: "@bisnistoberkah",
};
