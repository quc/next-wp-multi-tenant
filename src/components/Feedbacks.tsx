'use client';

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

  const TextFeedbackCard = ({ feedback, index }: { feedback: TextFeedback, index: number }) => (
    <div className="bg-gray-50 rounded-lg p-4 max-w-lg mx-auto">
      {/* Name and Verification */}
      <div className="flex items-center mb-2">
        <h3 className="font-semibold text-gray-900 mr-2">{feedback.name}</h3>
        <div className="w-4 h-4 rounded-full flex items-center justify-center">
          <Verified />
        </div>
      </div>
      
      {/* Role and Company */}
      <p className="text-sm text-gray-600 mb-3">
        {feedback.role}, {feedback.company}
      </p>
      
      {/* Testimonial */}
      <p className="text-sm text-gray-700 leading-relaxed">
        &ldquo;{feedback.testimonial}&rdquo;
      </p>
    </div>
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

        {/* Text Feedbacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brand.feedback.textFeedbacks.map((feedback, index) => (
            <TextFeedbackCard 
              key={`text-${index}`}
              feedback={feedback} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
