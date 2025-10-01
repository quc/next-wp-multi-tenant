'use client';

interface MobilePhoneProps {
  time?: string;
  date?: string;
  notifications?: Array<{
    title: string;
    subtitle: string;
  }>;
  className?: string;
}

export default function MobilePhone({ 
  time = "9:16", 
  date = "Tuesday, July 7",
  notifications = [
    { title: "New Follower!", subtitle: "Sarah • 2m ago" },
    { title: "Stream Started!", subtitle: "Alex • 5m ago" }
  ],
  className = ""
}: MobilePhoneProps) {
  return (
    <div className={`w-[150px] h-[280px] lg:w-[240px] lg:h-[460px] bg-black rounded-[2rem] p-[3px] lg:p-1 shadow-2xl ${className}`}>
      <div className="w-full h-full bg-gray-900 rounded-[1.8rem] relative overflow-hidden">
        {/* Lock Screen */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
          {/* Time */}
          <div className="absolute top-12 lg:top-16 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-white text-2xl lg:text-4xl font-light">{time}</div>
            <div className="text-gray-300 text-xs lg:text-sm mt-1 lg:mt-2">{date}</div>
          </div>
          
          {/* Lock Icon */}
          <div className="absolute top-6 lg:top-8 left-1/2 transform -translate-x-1/2">
            <svg className="w-4 h-4 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Notifications */}
          <div className="absolute top-24 lg:top-32 left-2 right-2 lg:left-4 lg:right-4 space-y-1 lg:space-y-2">
            {notifications.map((notification, index) => (
              <div key={index} className="bg-black/80 backdrop-blur-sm rounded p-2 lg:p-3">
                <div className="text-white text-xs lg:text-sm font-medium">{notification.title}</div>
                <div className="text-gray-300 text-xs">{notification.subtitle}</div>
              </div>
            ))}
          </div>
          
          {/* Bottom Icons */}
          <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 lg:space-x-8">
            <svg className="w-4 h-4 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <svg className="w-4 h-4 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
