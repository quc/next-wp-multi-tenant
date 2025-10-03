'use client';

import Link from 'next/link';

interface WhyGrowingProps {
  brand: {
    nameFirst: string;
    nameSecond: string;
    platform: string;
    description: string;
    whyGrowing: {
      challenges: string[];
    };
  };
}

export default function WhyGrowing({ brand }: WhyGrowingProps) {

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline mb-4 primary-textcolor">
            Why Growing on {brand.platform} Can Feel <span className='gradient-text'>Like a Grind</span>
          </h2>
          <p className="text-lg sans-serif-text secondary-textcolor">
            And How Our &apos;Cross-Platform Promotion Framework&apos; helps address these obstacles
          </p>
        </div>

        {/* Four Challenge Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 px-4">
          {brand.whyGrowing.challenges.map((challenge, index) => (
            <div 
              key={index}
              className="relative p-1 rounded-xl hover:shadow-lg transition-shadow duration-200"
              style={{ 
                background: ('var(--gradient-primary)'),
                padding: '3px'
              }}
            >
              <div className="bg-white p-6 rounded-lg h-full">
                <p className="text-sm sans-serif-text leading-relaxed primary-textcolor">
                  {challenge}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div>
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
