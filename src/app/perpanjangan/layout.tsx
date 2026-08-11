import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perpanjangan Website — Domain & Hosting",
  description:
    "Perpanjang domain & hosting website Anda dengan mudah. Pilih paket perpanjangan tahunan, bayar via QRIS/Bank/e-Wallet. Proses cepat & transparan.",
  alternates: { canonical: "/perpanjangan" },
  openGraph: {
    title: "Perpanjangan Website — Business To Berkah",
    description:
      "Perpanjang domain & hosting website Anda dengan mudah dan transparan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function PerpanjanganLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
