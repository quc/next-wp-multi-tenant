'use client';

import Link from "next/link";

interface HeaderProps {
  theme: 'tubemagnet' | 'omgtok';
  brand: {
    nameFirst: string;
    nameSecond: string;
  };
}

export default function Header({ theme, brand }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href={`/`} className="flex items-center space-x-2">
            {/* Triangle Icon for omgtok, simple square for tubemagnet */}
            {theme === 'omgtok' ? (
              <div className="triangle-icon"></div>
            ) : (
              <div className="w-6 h-6 gradient-bg rounded-sm"></div>
            )}
            <span className="text-2xl font-bold sans-serif-text">
              <span className="gradient-text">{brand.nameFirst}</span>
              <span style={{ color: 'var(--color-text-primary)' }}>{brand.nameSecond}</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href={`/`} className="sans-serif-text hover:opacity-75 transition-opacity" style={{ color: 'var(--color-text-primary)' }}>
              Home
            </Link>
            <Link href="/#how-it-works" className="sans-serif-text hover:opacity-75 transition-opacity" style={{ color: 'var(--color-text-primary)' }}>
              How it Works
            </Link>
            <Link href="/#pricing" className="sans-serif-text hover:opacity-75 transition-opacity" style={{ color: 'var(--color-text-primary)' }}>
              Pricing
            </Link>
            <Link href="/#contact" className="sans-serif-text hover:opacity-75 transition-opacity" style={{ color: 'var(--color-text-primary)' }}>
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/checkout"
            className="gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity sans-serif-text"
          >
            START MY FREE 3-DAY TRIAL
          </Link>
        </div>
      </div>
    </header>
  );
}
