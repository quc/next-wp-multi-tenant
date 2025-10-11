'use client';

import Link from 'next/link';
import Cube from '@/icons/cube.svg';

interface PromotionToolkitProps {
  brand: {
    promotionToolkit: {
      type: string;
      image: string;
      tool: string;
      leftFeatures: {
        title: string;
        description: string;
      }[];
      rightFeatures: {
        title: string;
        description: string;
      }[];
    };
  };
}

export default function PromotionToolkit({ brand }: PromotionToolkitProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline primary-textcolor">
            {brand.promotionToolkit.tool} is Your Complete {brand.promotionToolkit.type} Promotion Toolkit
          </h2>
        </div>

        {/* Main Content - Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12 px-4">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {brand.promotionToolkit.leftFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-start justify-start">
                {/* Dark Cube Icon */}
                <Cube className="w-12 h-12" />
                
                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold mb-2 sans-serif-text primary-textcolor w-fit text-start">
                    {feature.title}:
                  </h3>
                  <p className="text-sm sans-serif-text leading-relaxed secondary-textcolor w-fit text-start">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="order-first lg:order-none">
            <div className="relative max-w-sm mx-auto">
               {/* Background Rectangle - Behind the image */}
               <div 
                 className="absolute w-[70%] h-[60%] gradient-bg rounded-2xl -translate-x-1/2 -translate-y-1/2"
                 style={{ 
                   left: 'calc(50% - 60px)',
                   top: 'calc(50% + 80px)'
                 }}
               ></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-lg overflow-hidden bg-gray-100 z-10">
                <div className="relative">
                  <img src={brand.promotionToolkit.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {brand.promotionToolkit.rightFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-start justify-start">
                <Cube className="w-12 h-12" />
                
                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold mb-2 sans-serif-text primary-textcolor w-fit text-start">
                    {feature.title}:
                  </h3>
                  <p className="text-sm sans-serif-text leading-relaxed secondary-textcolor w-fit text-start">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
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
