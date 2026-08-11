export const advantages = [
  {
    title: "Proses Cepat",
    desc: "Website online dalam hitungan hari, bukan bulan. Alur kerja terukur dari briefing sampai launching.",
    icon: "clock" as const,
  },
  {
    title: "Desain Custom",
    desc: "Bukan template mentah — setiap desain disesuaikan dengan karakter dan brand bisnis Anda.",
    icon: "pen" as const,
  },
  {
    title: "Harga Transparan",
    desc: "Semua biaya dijelaskan di depan. Tanpa tagihan mengejutkan, tanpa biaya tersembunyi.",
    icon: "tag" as const,
  },
  {
    title: "Revisi Termasuk",
    desc: "Setiap paket sudah termasuk kuota revisi. Anda bisa request perubahan tanpa biaya ekstra.",
    icon: "refresh" as const,
  },
];

export const services = [
  {
    title: "Jasa Pembuatan Website",
    desc: "Website profesional yang membangun kepercayaan dan menarik pelanggan baru — landing page, company profile, toko online, hingga sistem custom.",
    features: [
      "Landing Page & Company Profile",
      "Toko Online (E-Commerce)",
      "Web Custom / Sistem",
      "Desain Responsif & SEO-Friendly",
    ],
    icon: "code",
    badge: null,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Layanan POS Berlangganan",
    desc: "Aplikasi kasir digital untuk UMKM — catat transaksi, kelola stok, dan pantau penjualan dari HP/tablet. Subscription bulanan yang terjangkau.",
    features: [
      "Kasir Digital (input & struk)",
      "Manajemen Stok Otomatis",
      "Laporan Penjualan Harian/Bulanan",
      "Multi-user & Multi-cabang",
      "Akses dari HP / Tablet",
    ],
    icon: "pos",
    badge: "Segera Hadir",
    image: "https://images.unsplash.com/photo-1556740738-ab6f43cc9b55?auto=format&fit=crop&w=900&q=80",
  },
];

export const webPricing = [
  {
    name: "LITE",
    price: "Rp 1.000.000",
    unit: "sekali bayar",
    features: [
      "1 halaman (landing page)",
      "Domain .my.id/.biz.id + Hosting 500MB-1GB",
      "Template standar (pilih dari katalog)",
      "Maksimal 2x revisi minor",
      "Floating WhatsApp + SSL gratis",
      "Estimasi 3-5 hari kerja",
    ],
    highlight: false,
  },
  {
    name: "PRO",
    price: "Rp 2.500.000",
    unit: "sekali bayar",
    features: [
      "Maksimal 5 halaman",
      "Domain .com/.id + Hosting 2-5GB",
      "Template premium + kustomisasi brand",
      "Maksimal 3x revisi",
      "Google Maps + form ke email + 1 email bisnis",
      "SEO dasar (meta title & description)",
      "Estimasi 1-2 minggu",
    ],
    highlight: true,
  },
  {
    name: "CORPORATE",
    price: "Rp 6.000.000",
    unit: "sekali bayar",
    features: [
      "10-15 halaman (termasuk blog/katalog)",
      "Domain .com/.co.id + Cloud Hosting/VPS",
      "Custom UI/UX (bukan template)",
      "Maksimal 5x revisi",
      "CMS + Google Analytics + 5 email bisnis",
      "Optimasi page speed",
      "Estimasi 3-4 minggu",
    ],
    highlight: false,
  },
  {
    name: "CUSTOM",
    price: "Hubungi Kami",
    unit: "sesuai kebutuhan",
    features: [
      "Halaman unlimited",
      "VPS/Server dedicated",
      "Full custom development",
      "Revisi fleksibel sampai sign-off",
      "Integrasi API & keamanan tingkat lanjut",
      "Maintenance prioritas 3-6 bulan",
    ],
    highlight: false,
  },
];

export const posPricing = [
  {
    name: "Standar",
    price: "Rp 49.000",
    unit: "/bulan (estimasi)",
    features: [
      "1 perangkat kasir",
      "Input transaksi & cetak struk",
      "Laporan penjualan harian",
      "Hingga 200 transaksi/bulan",
      "Tanpa AI Agent",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Menengah",
    price: "Rp 79.000",
    unit: "/bulan (estimasi)",
    features: [
      "Hingga 3 perangkat",
      "Manajemen stok otomatis",
      "Laporan lengkap + ekspor",
      "Transaksi tanpa batas",
      "Termasuk AI Agent",
    ],
    highlight: true,
    badge: "Termasuk AI Agent",
  },
];

export const portfolio = [
  {
    name: "Kafe Nusantara",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Toko Berkah",
    category: "Company Profile",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marketplace Lokal",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dashboard POS",
    category: "Sistem Custom",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Booking Online",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Restoran Citra",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
];

export const faqs = [
  {
    q: "Berapa lama pengerjaan website?",
    a: "Tergantung paket. LITE biasanya 3-5 hari kerja, PRO sekitar 1-2 minggu, CORPORATE 3-4 minggu. Estimasi pasti diberikan setelah briefing awal.",
  },
  {
    q: "Apakah termasuk domain dan hosting?",
    a: "Paket PRO ke atas sudah termasuk domain dan hosting sesuai tier. LITE menggunakan domain ekonomis (.my.id/.biz.id) + shared hosting standar.",
  },
  {
    q: "Bagaimana dengan aplikasi kasir (POS)?",
    a: "POS masih dalam tahap pengembangan (early access). Anda bisa daftar waitlist untuk harga spesial peluncuran dan akses lebih awal sebagai early adopter.",
  },
  {
    q: "Apakah ada biaya revisi?",
    a: "Setiap paket sudah termasuk kuota revisi (2-5x tergantung tier). Revisi di luar kuota akan dikomunikasikan di depan sebelum dikerjakan.",
  },
  {
    q: "Bisakah upgrade paket di tengah pengerjaan?",
    a: "Bisa. Selisih harga disesuaikan, dan estimasi waktu diperpanjang sesuai scope tambahan. Konsultasikan dengan kami kapan saja.",
  },
];

export const testimonials = [
  {
    name: "Rina Wijaya",
    role: "Pemilik Kafe Nusantara",
    quote: "Website kami jadi lebih dipercaya pelanggan. Prosesnya cepat dan komunikasinya jelas dari awal sampai launching.",
  },
  {
    name: "Andi Pratama",
    role: "Owner Toko Berkah",
    quote: "Desainnya modern tapi tetap sesuai karakter usaha kami. Timnya responsif dan harga transparan.",
  },
  {
    name: "Siti Marlina",
    role: "Founder Marketplace Lokal",
    quote: "Dari company profile sampai fitur katalog, semuanya rapi. Sangat membantu bisnis kami naik kelas.",
  },
];

export const contact = {
  whatsappNumber: "62895411828671",
  email: "admin@businesstoberkah.com",
  instagram: "@businesstoberkah",
};

export const renewalPlans = [
  {
    id: "lite",
    name: "LITE",
    price: 350000,
    duration: "1 Tahun",
    domain: ".my.id / .biz.id",
    hosting: "500MB - 1GB",
    support: "Email support",
    popular: false,
  },
  {
    id: "pro",
    name: "PRO",
    price: 750000,
    duration: "1 Tahun",
    domain: ".com / .id",
    hosting: "2 - 5GB",
    support: "WhatsApp + Email support",
    popular: true,
  },
  {
    id: "corporate",
    name: "CORPORATE",
    price: 1500000,
    duration: "1 Tahun",
    domain: ".com / .co.id",
    hosting: "Cloud Hosting / VPS",
    support: "Prioritas WhatsApp + Email",
    popular: false,
  },
];

export const paymentMethods = [
  { id: "qris", name: "QRIS", desc: "Scan & bayar via e-wallet apa saja", icon: "qris" },
  { id: "bca", name: "Bank BCA", desc: "Transfer manual via ATM/mobile banking", icon: "bank" },
  { id: "mandiri", name: "Bank Mandiri", desc: "Transfer manual via ATM/mobile banking", icon: "bank" },
  { id: "gopay", name: "GoPay / OVO", desc: "Transfer via e-wallet", icon: "wallet" },
];
