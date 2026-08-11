import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://businesstoberkah.com";
const SITE_NAME = "Business To Berkah";
const SITE_DESC =
  "Jasa pembuatan website profesional & aplikasi kasir (POS) berlangganan untuk UMKM. Desain custom, harga transparan, online dalam 3-5 hari. Transformasi digital bisnis Anda bersama Business To Berkah.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Jasa Website & POS Langganan untuk UMKM`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    "jasa pembuatan website",
    "jasa website UMKM",
    "website profesional",
    "aplikasi kasir",
    "POS berlangganan",
    "toko online",
    "company profile",
    "landing page",
    "jasa website murah",
    "website bisnis",
    "digitalisasi UMKM",
    "jasa website indonesia",
    "aplikasi kasir UMKM",
    "POS kasir digital",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Technology",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: { "id-ID": "/" },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Jasa Website & POS untuk UMKM`,
    description: SITE_DESC,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Jasa Website & POS Langganan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Jasa Website & POS untuk UMKM`,
    description: SITE_DESC,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#16142E" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESC,
  email: "admin@businesstoberkah.com",
  sameAs: [
    "https://instagram.com/businesstoberkah",
    "https://wa.me/62895411828671",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62895411828671",
    contactType: "customer service",
    availableLanguage: ["Indonesian"],
  },
  offers: {
    "@type": "AggregateOffer",
    name: "Jasa Pembuatan Website & POS",
    lowPrice: "1000000",
    highPrice: "6000000",
    priceCurrency: "IDR",
    offerCount: "4",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
