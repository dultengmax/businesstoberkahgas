import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bisnis To Berkah — Jasa Website & POS Langganan untuk UMKM",
  description:
    "Bisnis To Berkah membantu UMKM naik kelas: jasa pembuatan website profesional dan aplikasi kasir (POS) berlangganan yang mudah dipakai.",
  openGraph: {
    title: "Bisnis To Berkah",
    description:
      "Jasa pembuatan website & POS langganan untuk UMKM naik kelas.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
