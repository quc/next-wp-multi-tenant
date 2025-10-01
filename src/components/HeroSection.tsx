'use client';

import Link from 'next/link';
import MobilePhone from './MobilePhone';

interface HeroSectionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  phoneTime?: string;
  phoneDate?: string;
  phoneNotifications?: Array<{
    title: string;
    subtitle: string;
  }>;
  buttonText?: string;
  buttonHref?: string;
  footerText?: string;
  backgroundClass?: string;
}

export default function HeroSection({
  title,
  description,
  features,
  image,
  phoneTime = "9:16",
  phoneDate = "Tuesday, July 7",
  phoneNotifications = [
    { title: "New Follower!", subtitle: "Sarah • 2m ago" },
    { title: "Stream Started!", subtitle: "Alex • 5m ago" }
  ],
  buttonText = "START MY FREE 3-DAY TRIAL",
  buttonHref = "/trial",
  footerText = "Serving content creators since 2024",
  backgroundClass = "secondary-bg"
}: HeroSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] relative mx-4 lg:mx-0">
          {/* Background Block */}
          <div 
            className={`absolute inset-0 rounded-2xl ${backgroundClass}`}
          ></div>
          
          {/* Left Section - Content */}
          <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12">
            {/* Main Heading */}
            <div className="mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold sans-serif-text text-white leading-tight">
                {title}
              </h2>
            </div>

            {/* Descriptive Text */}
            <div className="mb-8">
              <p className="text-lg sans-serif-text text-white leading-relaxed">
                {description}
              </p>
            </div>

            {/* Bullet Points */}
            <div className="mb-8 space-y-4">
              {features.map((feature, index) => (
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
                href={buttonHref}
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text uppercase tracking-wide"
              >
                {buttonText}
              </Link>
            </div>

            {/* Footer Text */}
            <div>
              <p className="text-sm sans-serif-text text-white opacity-80">
                {footerText}
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="lg:order-none z-10 max-w-[500px] rounded-2xl">
            <div className="h-full flex items-center">
              {/* Main Image Container */}
              <div className="overflow-hidden z-10 h-[110%] min-w-full">
                <div className="lg:aspect-auto h-full relative">
                  <img src={image} alt="Hero Image" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>

              {/* Smartphone Overlay */}
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-20">
                <MobilePhone 
                  time={phoneTime}
                  date={phoneDate}
                  notifications={phoneNotifications}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
