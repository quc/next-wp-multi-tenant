import { NextRequest } from "next/server";

export const runtime = "edge";
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const urlParam = searchParams.get("url");
  const viewport = searchParams.get("viewport") || "desktop";

  if (!urlParam) {
    return new Response("Please provide a URL.", { status: 400 });
  }

  // Call the Node.js API (puppeteer renderer)
  const nodeApiUrl = `${request.nextUrl.origin}/api/convert?url=${encodeURIComponent(
    urlParam
  )}&viewport=${viewport}`;

  const res = await fetch(nodeApiUrl);

  if (!res.ok) {
    return new Response("Failed to render page.", { status: res.status });
  }

  const html = await res.text();

  // Cache at the edge
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=60",
    },
  });
}
