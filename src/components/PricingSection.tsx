'use client';

import Link from 'next/link';
import CheckMark from '@/icons/check-mark.svg';

interface PricingSectionProps {
  brand: {
    nameFirst: string;
    platform: string;
    platformType: string;
    pricing: {
      title: string;
      subtitle: string;
      packages: Array<{
        name: string;
        price: string;
        description: string;
        features: Array<{
          text: string;
          highlight?: string;
        }>;
        isPopular?: boolean;
      }>;
      disclaimer: string;
    };
  };
}

export default function PricingSection({ brand }: PricingSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline primary-textcolor mb-4">
            Choose Your {brand.platform} <span className="gradient-text">{brand.pricing.title}</span>
          </h2>
          <p className="text-lg sans-serif-text secondary-textcolor">
            {brand.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {brand.pricing.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                pkg.isPopular
                  ? 'secondary-bg text-white transform scale-105 shadow-2xl'
                  : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold sans-serif-text border-2 border-[var(--secondary-color)]">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Package Name */}
              <h3 className={`text-2xl font-bold mb-4 sans-serif-text ${
                pkg.isPopular ? 'text-white' : 'primary-textcolor'
              }`}>
                {pkg.name}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-6 leading-relaxed ${
                pkg.isPopular ? 'text-white' : 'secondary-textcolor'
              }`}>
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-4xl font-bold ${
                  pkg.isPopular ? 'text-white' : 'color-secondary-font'
                }`}>
                  {pkg.price}
                </span>
                <span className={`text-sm ml-2 ${
                  pkg.isPopular ? 'text-white' : 'secondary-textcolor'
                }`}>
                  /Weekly
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                     <div className="mr-3 mt-0.5">
                       <CheckMark 
                         className="w-5 h-5" 
                         style={{ 
                           color: pkg.isPopular ? 'white' : 'var(--secondary-color)' 
                         }}
                       />
                     </div>
                    <span className={`text-sm ${
                      pkg.isPopular ? 'text-white' : 'secondary-textcolor'
                    }`}>
                      {feature.highlight ? (
                        <>
                          <strong>{feature.highlight}</strong> {feature.text.replace(feature.highlight, '')}
                        </>
                      ) : (
                        feature.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/trial"
                className={`block w-full text-center py-4 px-6 rounded-lg font-bold text-lg transition-opacity hover:opacity-90 sans-serif-text uppercase tracking-wide ${
                  pkg.isPopular
                    ? 'bg-white color-secondary-font  hover:bg-gray-100'
                    : 'secondary-bg text-white hover:opacity-90'
                }`}
              >
                START MY FREE 3-DAY TRIAL
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm sans-serif-text secondary-textcolor max-w-4xl mx-auto leading-relaxed">
            {brand.pricing.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
