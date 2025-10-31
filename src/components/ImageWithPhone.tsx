'use client';

import Image from 'next/image';
import MobilePhone from './MobilePhone';

interface ImageWithPhoneProps {
  image: string;
  imageAlt?: string;
  phoneTime?: string;
  phoneDate?: string;
  phoneNotifications?: Array<{
    title: string;
    subtitle: string;
  }>;
  phonePosition?: 'smarter-way' | 'landing-page';
  className?: string;
  phoneImage?: string;
  phoneImageAlt?: string;
  smarterWayReview?: string;
  smarterWayReviewText?: string;
}

export default function ImageWithPhone(brand: ImageWithPhoneProps) {
  const { image, imageAlt, phonePosition, className, phoneImage, phoneImageAlt, smarterWayReview, smarterWayReviewText } = brand;
  const getPhonePositionClasses = () => {
    switch (phonePosition) {
      case 'smarter-way':
        return 'mt-[20%] lg:mt-auto right-[45%] lg:right-[25%] top-[10%] lg:min-w-[232px] lg:h-[437px] min-w-[155px] h-[288px]';
      case 'landing-page':
      default:
        return 'mt-[50%] lg:mt-auto mr-auto lg:min-w-[232px] lg:h-[437px] min-w-[155px] h-[288px]';
    }
  };

  const getImageClasses = () => {
    switch (phonePosition) {
      case 'smarter-way':
        return 'lg:w-[662px] lg:h-[456px] w-[389px] h-[268px] flex items-center justify-center scale-[0.7]';
      case 'landing-page':
        return 'lg:w-[680px] lg:h-[468px] flex items-center justify-center';
      default:
        return '';
    }
  };


  return (
    <div className={`relative w-full h-[457px] lg:h-full flex items-center ${className}`}>
      <div className="overflow-hidden z-10 h-full lg:h-[110%] min-w-full">
        <div className={`h-full relative ${getImageClasses()}`}>
          <img src={image} alt={imageAlt} className="w-full h-full object-cover scale-[0.7] rounded-[2.5rem]" />
        </div>
        {smarterWayReview && smarterWayReviewText&& (
          <div className="review-container">
            <div className="review flex flex-col w-[68%] gap-y-4">
              <p>{smarterWayReviewText}</p>
              <div className="review-image flex gap-x-8 items-center">
                <div className="h-[4px] w-[80px] rounded-full gradient-bg">
                </div>
                <img src={smarterWayReview} alt="Smarter Way Review" className="object-contain" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`relative ${getPhonePositionClasses()} z-20 hidden`}>
        <img src={phoneImage || ''} alt={phoneImageAlt || ''} className="w-full h-full" />
      </div>
    </div>
  );
}
