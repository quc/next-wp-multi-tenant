'use client';

import Link from 'next/link';

interface FooterProps {
  brand: {
    nameFirst: string;
    nameSecond: string;
  };
}

export default function Footer({ brand }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links Section */}
        <div className="py-6">
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors sans-serif-text">
              Home
            </Link>
            <Link href="/#contact" className="text-white hover:text-gray-300 transition-colors sans-serif-text">
              Contact
            </Link>
            <Link href="/privacy" className="text-white hover:text-gray-300 transition-colors sans-serif-text">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white hover:text-gray-300 transition-colors sans-serif-text">
              Terms and Conditions
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600"></div>

        {/* Logo and Copyright Section */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            {/* Triangular Logo */}
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-white font-bold serif-headline text-xl">
              {brand.nameFirst.toLowerCase()}{brand.nameSecond.toLowerCase()}
            </span>
          </div>

          {/* Copyright */}
          <div className="text-white text-sm">
            © 2025 <span className="font-bold">{brand.nameFirst}{brand.nameSecond}</span>. All Rights Reserved.
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600"></div>

        {/* Disclaimer Section */}
        <div className="py-6">
          <p className="text-gray-400 text-xs leading-relaxed">
            DISCLAIMER: Results vary significantly based on multiple factors including content quality, market demand, niche relevance, and audience response. No specific outcomes, metrics, or performance levels are guaranteed. Success depends on many variables outside our control. Past performance or examples do not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
