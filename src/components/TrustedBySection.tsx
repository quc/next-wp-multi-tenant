'use client';

import Link from 'next/link';

export default function TrustedBySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline primary-textcolor">
            Trusted by <span className="color-secondary-text">17,000+</span> <br />Influencers and Brands
          </h2>
          <p className="text-lg sans-serif-text" style={{ color: 'var(--color-text-secondary)' }}>
            Trusted and used for external marketing and promotion by leading influencers and brands.
          </p>
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <div className="text-gray-400 text-lg font-medium sans-serif-text">TechCrunch</div>
          <div className="text-gray-400 text-lg font-bold serif-headline">TIME</div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <span className="text-lg font-medium sans-serif-text">USA TODAY</span>
          </div>
          <div className="text-gray-400 text-lg font-bold serif-headline">VANITY FAIR</div>
          <div className="text-gray-400 text-lg font-medium sans-serif-text">WIRED</div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link
            href="/trial"
            className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide"
          >
            START MY FREE 3-DAY TRIAL
          </Link>
        </div>
      </div>
    </section>
  );
}
