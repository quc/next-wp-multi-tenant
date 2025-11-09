'use client';

import Link from 'next/link';
import ImageWithPhone from './ImageWithPhone';

interface SmarterWayProps {
  brand: {
    image: string;
    smarterWay: {
      title: string;
      type: string;
      features: string[];
    };
    phoneImage: string;
    phoneImageAlt: string;
  };
}
export default function SmarterWay({ brand }: SmarterWayProps) {

  return (
    <section className="pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-0 min-h-[600px]  relative mx-4 lg:mx-0 rounded-2xl">
          <div className="absolute w-full h-full min-h-[600px] max-h-[1000px] mx-4 lg:mx-0 rounded-2xl secondary-bg"></div>
          {/* Single Green Background Block */}
          <div 
            className="absolute inset-0 rounded-2xl secondary-bg max-h-[1000px]"
          ></div>
          
          {/* Left Section - Content */}
          <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12">
            {/* Main Heading */}
            <div className="mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold serif-headline text-white leading-tight">
                Finally... A Smarter Way to Increase Your {brand.smarterWay.title} Visibility
              </h2>
            </div>

            {/* Descriptive Text */}
            <div className="mb-8">
              <p className="text-lg sans-serif-text text-white leading-relaxed">
                Done-for-you marketing support to get your {brand.smarterWay.type} in front of new audiences without the hassle
              </p>
            </div>

            {/* Bullet Points */}
            <div className="mb-8 space-y-4">
              {brand.smarterWay.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" style={{ color: '#10B981' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base sans-serif-text text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call-to-Action Button */}
            <div className="mb-6">
              <Link
                href="/checkout"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide"
              >
                START MY FREE 3-DAY TRIAL
              </Link>
            </div>

            {/* Footer Text */}
            <div>
              <p className="text-sm sans-serif-text text-white opacity-80">
                Serving content creators since 2024
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="min-w-fit w-fullrounded-2xl">
              <ImageWithPhone 
                image={brand.image}
                phonePosition="smarter-way"
                className="w-full h-full flex items-center"
                phoneImage={brand.phoneImage}
                phoneImageAlt={brand.phoneImageAlt}
              />
          </div>
        </div>
      </div>
    </section>
  );
}
