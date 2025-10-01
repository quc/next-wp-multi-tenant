'use client';

import Link from 'next/link';
import Audience from '@/icons/audience.svg';
import Device from '@/icons/device.svg';
import SeoReport from '@/icons/seo-report.svg';

interface SimpleStepsProps {
  brand: {
    platform: string;
    simpleSteps: {
      imgClass?: string;
      desctiption: string;
      image: string;
      firstStep: string;
      firstStepDescription: string;
      secondStep: string;
      secondStepDescription: string;
      thirdStep: string;
      thirdStepDescription: string;
    };
  };
}

export default function SimpleSteps({ brand }: SimpleStepsProps) {

  const steps = [
    {
      icon: (<Audience/>),
      title: brand.simpleSteps.firstStep,
      description: brand.simpleSteps.firstStepDescription
    },
    {
      icon: (<Device/>),
      title: brand.simpleSteps.secondStep,
      description: brand.simpleSteps.secondStepDescription
    },
    {
      icon: (<SeoReport/>),
      title: brand.simpleSteps.thirdStep,
      description: brand.simpleSteps.thirdStepDescription
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline mb-4 primary-textcolor">
            3 Simple Steps To Increase Your <span className='gradient-text'>{brand.simpleSteps.desctiption}</span>
          </h2>
          <p className="text-lg sans-serif-text secondary-textcolor">
            We handle the channel promotion so you can focus on creating content.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 px-4">
          {/* Left Column - Main Image */}
          <div className="order-2 lg:order-1 h-full">
            <div className="relative h-full">
              {/* Placeholder for the main image - you can replace this with the actual image */}
              <div 
                className="w-full h-full rounded-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={brand.simpleSteps.image} alt="simple steps" className={`w-full h-full object-cover ${brand.simpleSteps.imgClass}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="order-1 lg:order-2 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                {step.icon}
                
                {/* Content */}
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-bold mb-2 sans-serif-text" style={{ color: 'var(--color-text-primary)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm sans-serif-text leading-relaxed text-left" style={{ color: 'var(--color-text-secondary)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
          <Link
            href="/trial"
            className="inline-block text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide gradient-bg"
          >
            START MY FREE 3-DAY TRIAL
          </Link>
        </div>
      </div>
    </section>
  );
}
