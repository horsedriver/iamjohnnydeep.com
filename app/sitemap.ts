import type { MetadataRoute } from "next";
import { pages, site } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: site.domain,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pages.map((page) => ({
      url: `${site.domain}/${page.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
