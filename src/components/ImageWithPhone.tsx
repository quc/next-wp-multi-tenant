'use client';

import Image from 'next/image';
import MobilePhone from './MobilePhone';
import StarIcon from './StarIcon';

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
        return 'lg:mt-[50%] lg:ml-[50%] mt-[20%] ml-[55%] max-w-[132px] max-h-[245px] lg:max-w-[232px] lg:max-h-[437px]';
      case 'landing-page':
      default:
        return 'min-w-[132px] min-h-[245px] max-w-[200px] max-h-[369px] lg:w-[200px] lg:h-[369px]';
    }
  };

  const getImageClasses = () => {
    switch (phonePosition) {
      case 'smarter-way':
        return 'scale-105';
      default:
        return 'scale-125';
    }
  };

  const getSecondClasses = () => {
    switch (phonePosition) {
      case 'smarter-way':
        return 'relative flex w-[120%]';
      default:
        return 'relative flex w-full gap-2 justify-center lg:items-center items-end lg:mt-[40%] mt-[33%]';
    }
  };


  return (
    <div className={`relative flex flex-col lg:flex-row items-center ${className}`}>
      <div className="z-10 w-full flex flex-col">
        <div className={`lg:w-[538px] lg:h-[328px] h-[241px] flex items-center justify-center absolute`}>
          <img src={image} alt={imageAlt} className={`${getImageClasses()}`} />
        </div>
        <div className={`${getSecondClasses()}`}>
          
            {smarterWayReview && smarterWayReviewText && (
              <div className=" lg:max-h-[200px] max-w-[65%] max-h-[146px] flex flex-col lg:gap-4 gap-2">
                <p className="lg:text-sm text-[10px] leading-relaxed primary-textcolor sans-serif-text ">
                  {smarterWayReviewText}
                </p>
                <div className="flex items-center lg:gap-4 gap-2">
                  <div className="h-[1px] lg:w-[80px] w-[53px] secondary-bg"></div>
                  <div className="flex items-center lg:gap-3 gap-1">
                    <img 
                      src={smarterWayReview} 
                      alt="Reviewer profile" 
                      className="lg:w-10 lg:h-10 w-6 h-6 rounded-full object-cover" 
                    />
                    <div className="flex flex-col lg:gap-1 gap-0.5">
                      <span className="lg:text-sm text-xs font-medium primary-textcolor sans-serif-text">
                        Jason L.
                      </span>
                      <div className="flex items-center lg:gap-1 gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} filled={true} className="lg:w-3 lg:h-3 w-[8px] h-[8px]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} 
            {phoneImage && (
              <div className={`ml-auto ${getPhonePositionClasses()}`}>
                <img src={phoneImage} alt={phoneImageAlt || ''} className="w-full h-full" />
              </div>
            )}
          
        </div>
      </div> 
    </div>
  );
}
