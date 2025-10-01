'use client';

interface FeedbackCard {
  subscribers: string;
  videos: string;
  description: string;
  thumbnail: string;
  clientPhoto: string;
}

interface FeedbacksProps {
  brand: {
    feedbacks: {
      before: FeedbackCard;
      after: FeedbackCard;
    }[];
  };
}

export default function Feedbacks({ brand }: FeedbacksProps) {

  const FeedbackCard = ({ type, data, index }: { type: 'before' | 'after', data: FeedbackCard, index: number }) => (
    <div className="bg-white rounded-lg overflow-hidden border-none max-w-sm mx-auto">
      {/* Header */}
      <div 
        className={`px-3 py-2 text-center font-bold text-s ${type === 'after' ? 'gradient-text' : ''}`}
        
      >
        {type.toUpperCase()}
      </div>
      
      {/* Content */}
      <div>
        {/* Image Thumbnail */}
        <div className="relative mb-3">
          <div 
            className="w-full h-16 rounded-b-md relative overflow-hidden"
          >
            <img src={data.thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-start space-x-2 mb-2">
          {/* Profile Picture */}
            <div className="w-12 h-12 border-2 border-gray-300 rounded-full p-0.5 flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <img src={data.clientPhoto} alt="Client Photo" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          
          {/* Channel Info */}
          <div className="flex-1 min-w-0 flex-col">
            <div className="flex items-center space-x-1 mb-1 w-fit">
              <h3 className="font-bold text-sm truncate primary-textcolor">
                Lorem.Media{index + 1}00
              </h3>
              <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 truncate mb-0.5 w-fit">@Lorem.Media{index + 1}00</p>
            <p className="text-xs text-gray-500 w-fit ">
              {data.subscribers} subscribers • {data.videos} videos
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 text-left">
          {data.description.replace('...more', '...')}<span className="font-bold">more</span>
        </p>

        {/* Link */}
        <a 
          href="#" 
          className="text-xs text-blue-600 hover:text-blue-800 transition-colors underline truncate block w-fit mt-1"
        >
          loremipsumsamplelink.com
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">

        {/* Before/After Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 px-4">
          {/* Before Column */}
          <div className="space-y-4">
            {brand.feedbacks.map((feedback, index) => (
              <FeedbackCard 
                key={`before-${index}`}
                type="before" 
                data={feedback.before} 
                index={index} 
              />
            ))}
          </div>

          {/* After Column */}
          <div className="space-y-4">
            {brand.feedbacks.map((feedback, index) => (
              <FeedbackCard 
                key={`after-${index}`}
                type="after" 
                data={feedback.after} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
