import type { MetadataRoute } from "next";

const SITE_URL = "https://businesstoberkah.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/perpanjangan`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/perpanjangan/senapatids`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
