'use client';

import { useState } from 'react';

interface ChannelMarketingProps {
  brand: {
    nameFirst: string;
    nameSecond: string;
    platform: string;
    platformType: string;
    description: string;
    video: string;
    videoThumbnail: string;
  };
}

export default function ChannelMarketing({ brand }: ChannelMarketingProps) {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Professional {brand.platform} {brand.platformType} Marketing:
          </h2>
           <h3 className="text-3xl lg:text-4xl font-bold gradient-text sans-serif-text">
             Safe, External Promotion Process
           </h3>
        </div>

        {/* Video Player Container */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Background Rectangle - Behind the video */}
          <div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl gradient-bg w-full h-[70%]"
          ></div>
          
          <div className="relative rounded-lg overflow-hidden bg-black z-10">
            {/* YouTube Video Embed */}
            <div className="aspect-video relative">
              {isVideoPlaying ? (
                <iframe
                  src={brand.video}
                  title={`Professional ${brand.platform} Channel Marketing`}
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 cursor-pointer group" onClick={handleVideoClick}>
                    <img
                      src={brand.videoThumbnail}
                      alt={`Professional ${brand.platform} Channel Marketing Video`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-12 rounded-lg flex items-center justify-center bg-gray-300 bg-opacity-80 hover:bg-opacity-90 transition-all duration-200">
                        <svg 
                          className="w-6 h-6 text-gray-700 ml-1" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
