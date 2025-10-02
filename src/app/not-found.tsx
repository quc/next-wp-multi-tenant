// 'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resolveTheme } from "@/themes";
import { headers } from "next/headers";

export default async function NotFound() {
  // const resolvedParams = await params;
  const hdrs = await headers();
  const host = hdrs.get("host");
  const site = host?.split('.')[0];
  
  // const site = 'tubemagnet';
  const currentTheme = resolveTheme(site);
  const { cssVars, brand } = currentTheme;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', ...cssVars }}>

      {/* Header */}
      <Header brand={brand} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 serif-headline primary-textcolor">
            404 - Page Not Found
          </h1>
          <p className="text-lg mb-8 sans-serif-text primary-textcolor">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            href={'home'}
            className="gradient-bg text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text"
          >
            Return Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer brand={brand} />
    </div>
  );
}
