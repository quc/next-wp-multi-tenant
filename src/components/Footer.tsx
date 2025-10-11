'use client';

import Link from 'next/link';

interface FooterProps {
  brand: {
    nameFirst: string;
    nameSecond: string;
    footerLogo: string;
  };
}

export default function Footer({ brand }: FooterProps) {
  return (
    <footer className="bg-[#242424] text-white">
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
            <div className="flex items-center justify-center">
              <img src={brand.footerLogo} alt="footer logo" />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-white text-sm">
            © 2025 <span className="font-bold">{brand.nameFirst}{brand.nameSecond}</span>. All Rights Reserved.
          </div>
        </div>


        {/* Disclaimer Section */}
        <div className="py-6">
          <p className="text-gray-400 text-xs leading-relaxed text-center">
            DISCLAIMER: Results vary significantly based on multiple factors including content quality, market demand, niche relevance, and audience response. No specific outcomes, metrics, or performance levels are guaranteed. Success depends on many variables outside our control. Past performance or examples do not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
