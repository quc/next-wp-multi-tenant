import type { MetadataRoute } from 'next'
import { headers } from "next/headers";
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hdrs = await headers();
  const host = hdrs.get("host");
  const site = host?.split('.')[0];
  return [
    {
      url: `http://${site}.localhost:3000`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `http://${site}.localhost:3000/posts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `http://${site}.localhost:3000/pages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}