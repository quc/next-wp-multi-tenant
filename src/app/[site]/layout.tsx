import "../globals.css";

// import { Section, Container } from "@/components/craft";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
// import { MobileNav } from "@/components/nav/mobile-nav";
import { Analytics } from "@vercel/analytics/react";
// import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import Balancer from "react-wrap-balancer";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";
import { generateBaseMetadata } from "@/lib/metadata";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Generate dynamic metadata from WordPress
export async function generateMetadata({
  params,
}: {
  params: Promise<{ site: string }>;
}): Promise<Metadata> {
  const { site } = await params;
  return generateBaseMetadata(site);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}