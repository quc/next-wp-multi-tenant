'use client';

import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import TrustedBySection from "./TrustedBySection";

interface LandingPageProps {
  theme: 'tubemagnet' | 'omgtok';
}

export default function LandingPage({ theme }: LandingPageProps) {
  // Theme configurations
  const themes = {
    tubemagnet: {
      cssVars: {
        '--gradient-primary': 'linear-gradient(to right, #6A35D9, #5A2BC7)',
        '--color-text-primary': '#333333',
        '--color-text-secondary': '#555555',
        '--color-background': '#FFFFFF',
        '--color-background-secondary': '#F5F5F5',
        '--color-button-text': '#FFFFFF',
        '--color-border': '#E0E0E0',
        '--font-family-serif': 'Georgia, serif',
        '--font-family-sans-serif': 'Inter, sans-serif'
      },
      brand: {
        nameFirst: 'TUBE',
        nameSecond: 'MAGNET',
        platform: 'YouTube™',
        description: 'Channel Growth',
        features: [
          'Strategic personalized YouTube™ channel promotion',
          'Respect platform compliance guidelines',
          'For beginners or experienced content creators'
        ],
        notifications: [
          { name: 'Claire', time: '1m ago' },
          { name: 'Bill', time: '2m ago' },
          { name: 'Andrew', time: '3m ago' }
        ]
      }
    },
    omgtok: {
      cssVars: {
        '--gradient-primary': 'linear-gradient(to right, #FFD700, #FFA500, #FF6347, #DA70D6)',
        '--color-text-primary': '#333333',
        '--color-text-secondary': '#555555',
        '--color-background': '#FFFFFF',
        '--color-background-secondary': '#F5F5F5',
        '--color-button-text': '#FFFFFF',
        '--color-border': '#E0E0E0',
        '--font-family-serif': 'Georgia, serif',
        '--font-family-sans-serif': 'Inter, sans-serif'
      },
      brand: {
        nameFirst: 'OMG',
        nameSecond: 'TOK',
        platform: 'TikTok™',
        description: 'Account Visibility',
        features: [
          'Strategic personalized TikTok™ account promotion',
          'Respect platform compliance guidelines',
          'For beginners or experienced content creators'
        ],
        notifications: [
          { name: 'Claire', time: '1m ago' },
          { name: 'Bill', time: '2m ago' },
          { name: 'Andrew', time: '3m ago' }
        ]
      }
    }
  };

  const currentTheme = themes[theme];
  const { cssVars, brand } = currentTheme;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', ...cssVars }}>
      <style jsx>{`
        .gradient-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-bg {
          background: var(--gradient-primary);
        }
        .serif-headline {
          font-family: var(--font-family-serif);
        }
        .sans-serif-text {
          font-family: var(--font-family-sans-serif);
        }
        .triangle-icon {
          width: 24px;
          height: 24px;
          background: var(--gradient-primary);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>

      {/* Header */}
      <Header theme={theme} brand={brand} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight serif-headline" style={{ color: 'var(--color-text-primary)' }}>
                Finally... A Smarter Way to Increase Your{" "}
                <span className="gradient-text sans-serif-text">{brand.platform} {brand.description}</span>
              </h1>
              
              <p className="text-lg leading-relaxed sans-serif-text" style={{ color: 'var(--color-text-secondary)' }}>
                Done-for-you marketing support to get your account in front of new audiences without the hassle.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {brand.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="sans-serif-text" style={{ color: 'var(--color-text-primary)' }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/trial"
                className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text"
              >
                START MY FREE 3-DAY TRIAL
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="w-full h-[600px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm sans-serif-text">Hero Image Placeholder</p>
                  <p className="text-gray-400 text-xs sans-serif-text">Replace with actual image</p>
                </div>
              </div>
              
              {/* Phone with Notifications Overlay */}
              <div className="absolute top-8 right-8 bg-black rounded-3xl p-2 shadow-2xl">
                <div className="w-64 h-96 bg-gray-900 rounded-2xl relative overflow-hidden">
                  {/* Lock Screen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
                    {/* Time */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-white text-4xl font-light">9:16</div>
                      <div className="text-gray-300 text-sm mt-2">Tuesday, July 7</div>
                    </div>
                    
                    {/* Lock Icon */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Notifications */}
                    <div className="absolute top-32 left-4 right-4 space-y-2">
                      {brand.notifications.map((notification, index) => (
                        <div key={index} className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-white text-sm font-medium">New Follower!</div>
                          <div className="text-gray-300 text-xs">{notification.name} • {notification.time}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom Icons */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-8">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Confetti */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-40 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-60 right-10 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-80 left-16 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trusted by Section */}
      <TrustedBySection />

      {/* Footer */}
      <Footer brand={brand} />
    </div>
  );
}
