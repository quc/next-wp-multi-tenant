// app/favicon.ico/route.ts
import { NextResponse } from "next/server";
// import { getTenantFromHost } from "@/lib/tenants";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const iconOrigin = {
    tubemagnet: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_TUBEMAGNET,
    omgtok: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_OMGTOK,
    default: 'localhost:3000',
}

export async function GET(req: Request) {
  const hostname = req.headers.get("host");
  const host = new URL(`http://${hostname}`).hostname;
  const site = host?.split('.')[0];

  const origin = iconOrigin[site as keyof typeof iconOrigin] || iconOrigin.default;

  // Build an absolute URL to the static asset (served by Next/Vercel)
  const assetUrl = new URL(`/favicon.ico`, new URL(origin).origin).toString();

  // Proxy the asset; this preserves Content-Type and allows CDN caching
  const res = await fetch(assetUrl, { headers: { "x-forwarded-host": hostname ?? "" } });

  // Add a Vary so caches don't mix tenants
  const next = new NextResponse(res.body, {
    status: res.status,
    headers: res.headers,
  });
  next.headers.set("Vary", "Host");
  return next;
}
