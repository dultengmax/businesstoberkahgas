import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perpanjangan Domain & Email Bisnis — senapatids",
  description:
    "Perpanjangan tahunan domain & email bisnis senapatids. Rp 550.000/tahun, termasuk SSL & support. Bayar via BCA, Mandiri, atau GoPay/OVO.",
  alternates: { canonical: "/perpanjangan/senapatids" },
  openGraph: {
    title: "Perpanjangan senapatids — Business To Berkah",
    description:
      "Perpanjangan domain & email bisnis senapatids. Rp 550.000/tahun.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: false, follow: false },
};

export default function SenapatidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
