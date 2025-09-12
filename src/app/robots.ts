import type { MetadataRoute } from 'next'
import { headers } from "next/headers";
 
export default async function robots(): Promise<MetadataRoute.Robots> {
    const hdrs = await headers();
    const host = hdrs.get("host");
    const site = host?.split('.')[0];
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `http://${site}.localhost:3000/sitemap.xml`,
  }
}