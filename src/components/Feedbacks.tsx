'use client';

import { useState } from 'react';
import Verified from '@/icons/verified.svg';

interface VideoFeedback {
  video: string;
  thumbnail: string;
  headline: string;
  description: string;
}

interface TextFeedback {
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

interface FeedbacksProps {
  brand: {
    feedback: {
      videoFeedbacks: VideoFeedback[];
      textFeedbacks: TextFeedback[];
    };
  };
}

export default function Feedbacks({ brand }: FeedbacksProps) {
  const [currentTextFeedbackIndex, setCurrentTextFeedbackIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const VideoFeedbackCard = ({ feedback, index }: { feedback: VideoFeedback, index: number }) => (
    <div className="bg-gray-50 rounded-lg p-4 max-w-lg mx-auto">
      {/* Video Thumbnail */}
      <div className="relative mb-4">
        <div className="w-full h-64 rounded-md relative overflow-hidden">
          <img src={feedback.thumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
              <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          {/* Video Controls */}
          <div className="absolute bottom-2 left-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
            0:00
          </div>
          <div className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
            8:24
          </div>
        </div>
      </div>
      
      {/* Headline */}
      <h3 className="font-bold text-lg mb-2 text-gray-900">
        {feedback.headline}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {feedback.description}
      </p>
    </div>
  );

  const nextTextFeedback = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentTextFeedbackIndex((prev) => 
        (prev + 1) % brand.feedback.textFeedbacks.length
      );
      setTimeout(() => setSlideDirection(null), 100);
    }, 250);
  };

  const prevTextFeedback = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentTextFeedbackIndex((prev) => 
        prev === 0 ? brand.feedback.textFeedbacks.length - 1 : prev - 1
      );
      setTimeout(() => setSlideDirection(null), 100);
    }, 250);
  };

  const goToTextFeedback = (index: number) => {
    if (index === currentTextFeedbackIndex) return;
    const direction = index > currentTextFeedbackIndex ? 'right' : 'left';
    setSlideDirection(direction);
    setTimeout(() => {
      setCurrentTextFeedbackIndex(index);
      setTimeout(() => setSlideDirection(null), 100);
    }, 250);
  };

  const currentTextFeedback = brand.feedback.textFeedbacks[currentTextFeedbackIndex];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg 
      className={`w-5 h-5 ${filled ? 'color-secondary-font' : 'text-gray-300'}`} 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Are Saying</h2>
        </div>

        {/* Video Feedbacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {brand.feedback.videoFeedbacks.map((feedback, index) => (
            <VideoFeedbackCard 
              key={`video-${index}`}
              feedback={feedback} 
              index={index} 
            />
          ))}
        </div>

        {/* Text Feedbacks Carousel */}
        <div className="mt-12">
          {/* Feedback Card Container with Sliding Animation */}
          <div className="overflow-hidden max-w-4xl mx-auto">
            <div 
              key={currentTextFeedbackIndex}
              className={`bg-white rounded-lg p-6 border-2 shadow-lg transition-all duration-500 ease-in-out ${
                slideDirection === 'right' 
                  ? 'translate-x-8 opacity-0' 
                  : slideDirection === 'left'
                  ? '-translate-x-8 opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
              style={{ borderColor: 'var(--gradient-primary-checkout-icon-bg)' }}
            >
              {/* Name and Verification */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900 mr-2">
                  {currentTextFeedback.name.split(' ')[0]} {currentTextFeedback.name.split(' ')[1]?.[0]}.
                </h3>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center">
                    <Verified />
                  </div>
                  <span className="text-sm ml-2" style={{ color: 'var(--secondary-color)' }}>Verified Buyer</span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={true} />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-base text-gray-700 leading-relaxed">
                {currentTextFeedback.testimonial}
              </p>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {brand.feedback.textFeedbacks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTextFeedback(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTextFeedbackIndex
                      ? 'w-8'
                      : 'w-2.5 bg-gray-300'
                  }`}
                  style={index === currentTextFeedbackIndex ? { background: 'var(--gradient-primary)' } : {}}
                  aria-label={`Go to feedback ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={prevTextFeedback}
                className="w-10 h-10 rounded-full border-2 border-blue-300 flex items-center justify-center hover:border-blue-400 transition-colors"
                aria-label="Previous feedback"
              >
                <svg className="w-5 h-5 color-secondary-font" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTextFeedback}
                className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Next feedback"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
