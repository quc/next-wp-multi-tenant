'use client';

import Link from 'next/link';

interface NewAudienceProps {
  brand: {
    newAudience: {
      description: string;
      features: {
        title: string;
        description: string;
      }[];
    };
  };
}

export default function NewAudience({ brand }: NewAudienceProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Container with Light Green Background */}
        <div 
          className="rounded-2xl p-8 lg:p-12"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold serif-headline mb-4 primary-textcolor">
              Get Your {brand.newAudience.description} in Front of <span className='gradient-text'>New Audiences</span>
            </h2>
            <p className="text-lg sans-serif-text mb-8 secondary-textcolor">
              Make sure your stream reaches new audiences
            </p>
            
            {/* Call-to-Action Button */}
            <Link
              href="/checkout"
              className="inline-block text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide gradient-bg"
            >
              START MY FREE 3-DAY TRIAL
            </Link>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {brand.newAudience.features.map((feature, index) => (
              <div 
                key={index}
                className="relative p-1 rounded-xl hover:shadow-md transition-shadow duration-200 gradient-bg"
              >
                <div className="bg-white p-6 rounded-lg h-full">
                  {/* Checkmark Icon */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-green-600"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-3 sans-serif-text primary-textcolor">
                        {feature.title}
                      </h3>
                      <p className="text-sm sans-serif-text leading-relaxed secondary-textcolor">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
