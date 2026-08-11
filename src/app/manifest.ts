import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Business To Berkah",
    short_name: "B2B Berkah",
    description:
      "Jasa pembuatan website profesional & aplikasi kasir (POS) berlangganan untuk UMKM.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#13A6E8",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
