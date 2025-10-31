'use client';

import Link from 'next/link';

interface WhatHappensProps {
  brand: {
    whatHappens: {
      benefits: { title: string; text: string }[];
      type: string;
      cloloredText: string;
      title: string;
    };
  };
}

export default function WhatHappens({ brand }: WhatHappensProps) {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline mb-4 primary-textcolor">
            {brand.whatHappens.title} <span className='gradient-text'>{brand.whatHappens.cloloredText}</span>
          </h2>
        </div>

        {/* Benefit Sections */}
        <div className="flex justify-center mb-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
            {brand.whatHappens.benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center  space-y-2 max-w-[350px]">
                {/* Checkmark Icon with Gradient */}
                <div className="flex-shrink-0">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center gradient-bg"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Benefit Title */}
                <h3 className="text-lg font-bold sans-serif-text gradient-text">
                  {benefit.title}
                </h3>
                
                {/* Benefit Text */}
                <p className="text-md sans-serif-text leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Text */}
        <div className="mb-6">
          <p className="text-md sans-serif-text" style={{ color: 'var(--color-text-primary)' }}>
            The growth explosion starts NOW.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className="mb-6">
          <Link
            href="/checkout"
            className="inline-block text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide gradient-bg"
          >
            START MY FREE 3-DAY TRIAL
          </Link>
        </div>

      </div>
    </section>
  );
}
