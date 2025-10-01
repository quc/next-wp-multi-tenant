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
}

export default function ImageWithPhone(brand: ImageWithPhoneProps) {
  const { image, imageAlt, phonePosition, className, phoneImage, phoneImageAlt } = brand;
  const getPhonePositionClasses = () => {
    switch (phonePosition) {
      case 'smarter-way':
        return 'mt-[20%] lg:mt-auto right-[45%] lg:right-[25%] top-[10%] lg:min-w-[232px] lg:h-[437px] min-w-[155px] h-[288px]';
      case 'landing-page':
      default:
        return 'mt-[50%] lg:mt-auto right-[40%] lg:right-[25%] lg:min-w-[232px] lg:h-[437px] min-w-[155px] h-[288px]';
    }
  };

  const getImageClasses = () => {
    switch (phonePosition) {
      case 'smarter-way':
        return 'lg:w-[662px] lg:h-[456px] w-[389px] h-[268px] flex items-center justify-center scale-[0.7]';
      case 'landing-page':
        return 'lg:w-[680px] lg:h-[468px] w-[400px] h-[276px] flex items-center justify-center';
      default:
        return '';
    }
  };

  return (
    <div className={`relative lg:w-full h-[457px] lg:h-full flex items-center ${className}`}>
      <div className="overflow-hidden z-10 h-full lg:h-[110%] min-w-full">
        <div className={` h-full relative ${getImageClasses()}`}>
          <img src={image} alt={imageAlt} className="w-full h-full object-cover scale-[0.7] rounded-[2.5rem]" />
        </div>
      </div>

      <div className={`relative ${getPhonePositionClasses()} z-20`}>
        <img src={phoneImage || ''} alt={phoneImageAlt || ''} className="w-full h-full" />
      </div>
    </div>
  );
}
