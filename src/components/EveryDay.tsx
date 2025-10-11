'use client';

import Link from 'next/link';

interface EveryDayProps {
  brand: {
    everyDay: {
      description: string;
      features: {
        title: string;
        description: string;
      }[];
    };
  };
}

export default function EveryDay({ brand }: EveryDayProps) {
  return (
    <section className="py-16">
      <div className="text-center">
        {/* Main Container with Light Green Background */}
        <div 
          className="rounded-2xl py-8 lg:py-12"
        >
          {/* Header Section */}
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl lg:text-4xl font-bold serif-headline mb-4 primary-textcolor max-w-[650px] mx-auto">
              {brand.everyDay.description} <span className='gradient-text'>Every Day</span>
            </h2>
            <p className="text-lg sans-serif-text mb-8 secondary-textcolor">
              Make sure your content reaches those who want to see it.
            </p>
            
            {/* Call-to-Action Button */}
            {/* <Link
              href="/checkout"
              className="inline-block text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide gradient-bg"
            >
              START MY FREE 3-DAY TRIAL
            </Link> */}
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-12">
            {brand.everyDay.features.map((feature, index) => (
              <div 
                key={index}
                className="relative p-0.5 rounded-[10px] hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-white p-6 rounded-lg h-full border-2 border-transparent
         [background:linear-gradient(#fff,_#fff)_padding-box,var(--gradient-primary)_border-box]">
                  {/* Checkmark Icon */}
                  <div className="flex-col items-start">
                    <div className="flex items-center justify-start gap-x-2">
                      <div 
                        className="w-4 h-4 rounded-full flex items-center justify-center bg-green-900"
                      >
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold sans-serif-text primary-textcolor">
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Content */}
                    <div className="">
                      <p className="text-sm sans-serif-text leading-relaxed secondary-textcolor text-start">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
