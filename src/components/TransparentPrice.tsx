'use client';

import Link from 'next/link';

interface TransparentPriceProps {
  brand: {
    transparentPrice: {
      platform: string;
      tool: string;
    }
  };
}

export default function TransparentPrice({ brand }: TransparentPriceProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Light Green Background Container */}
      <div 
        className="rounded-2xl p-8 lg:p-12 max-w-5xl mx-auto text-center px-4"
      >
        {/* White Pricing Card with Gradient Border */}
        <div 
          className="relative mx-auto text-center flex flex-col rounded-2xl shadow-lg gradient-bg p-1 w-full max-w-[465px] min-h-[523px]"
        >
          <div 
            className="bg-white rounded-2xl flex flex-col h-full"
            style={{ 
              padding: '40px 30px'
            }}
          >
          {/* Main Heading */}
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold serif-headline leading-tight primary-textcolor">
              Our Complete {brand.transparentPrice.platform}<br />
              Promotion Service At One<br />
              Transparent Price:
            </h2>
          </div>

          {/* Service Tier */}
          <div className="mb-6">
            <h3 className="text-xl lg:text-2xl font-bold serif-headline primary-textcolor">
              {brand.transparentPrice.tool} Premium
            </h3>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-base lg:text-lg sans-serif-text leading-relaxed secondary-textcolor">
              Strategic, hands-off cross-platform marketing for streamers, influencers, and brands who want to expand their channel reach the right way.
            </p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="text-5xl lg:text-6xl font-bold color-secondary-text">
              $99/Weekly
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="mb-8">
            <Link
              href="/checkout"
              className="inline-block text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide secondary-bg"
            >
              START MY FREE 3-DAY TRIAL
            </Link>
          </div>

          {/* Footer Text */}
          <div className="space-y-4 mt-auto">
            <p className="text-sm sans-serif-text secondary-textcolor">
              Serving content creators since 2024
            </p>
            
            {/* Disclaimer */}
            <p className="text-xs sans-serif-text leading-relaxed secondary-textcolor">
              Cancel Anytime. Try our professional promotion risk-free. If you&apos;re not completely satisfied with our service quality, cancel within 3 days with zero charge. No complicated cancellation process - one simple step and you&apos;re done.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
