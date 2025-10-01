'use client';

import Link from 'next/link';

interface WhatHappensProps {
  brand: {
    whatHappens: {
      benefits: string[];
      type: string;
    };
  };
}

export default function WhatHappens({ brand }: WhatHappensProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline mb-4 primary-textcolor">
            What Happens When You Expand Your <span className='gradient-text'>{brand.whatHappens.type} Reach</span>
          </h2>
        </div>

        {/* Descriptive Text */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg sans-serif-text leading-relaxed secondary-textcolor">
            We provide marketing services to help expand your content&apos;s reach. Results depend on many factors, including content quality, market demand, and audience response. No specific outcomes are guaranteed.
          </p>
        </div>

        {/* Three Benefit Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 px-4">
          {brand.whatHappens.benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center justify-start space-x-3">
              {/* Green Checkmark Icon */}
              <div className="flex-shrink-0">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center gradient-bg"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Benefit Text */}
              <p className="text-base sans-serif-text leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mb-6">
          <Link
            href="/trial"
            className="inline-block text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide gradient-bg"
          >
            START MY FREE 3-DAY TRIAL
          </Link>
        </div>

        {/* Footer Text */}
        <div>
          <p className="text-sm sans-serif-text" style={{ color: 'var(--color-text-secondary)' }}>
            Serving content creators since 2024
          </p>
        </div>
      </div>
    </section>
  );
}
