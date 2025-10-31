'use client';

import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import TrustedBySection from "./TrustedBySection";
import ChannelMarketing from "./ChannelMarketing";
import WhyGrowing from "./WhyGrowing";
import Feedbacks from "./Feedbacks";
import BeforeAfter from "./BeforeAfter";
import SimpleSteps from "./SimpleSteps";
import EveryDay from "./EveryDay";
import PromotionToolkit from "./PromotionToolkit";
import WhatHappens from "./WhatHappens";
import TransparentPrice from "./TransparentPrice";
import FAQ from "./FAQ";
import SmarterWay from "./SmarterWay";
import ContactUs from "./ContactUs";
import ImageWithPhone from "./ImageWithPhone";
import PricingSection from "./PricingSection";
import StarIcon from "./StarIcon";
import { Ubuntu } from 'next/font/google';
import { resolveTheme, ThemeKey } from '@/themes';
import CheckMark from '@/icons/check-mark.svg';

interface LandingPageProps {
  theme: ThemeKey;
}


const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300','400','500','700'], // pick the weights you actually use
  display: 'swap',
  variable: '--font-ubuntu',         // exposes a CSS variable
});

export default function LandingPage({ theme }: LandingPageProps) {

  const currentTheme = resolveTheme(theme);
  const { cssVars, brand } = currentTheme;

  // const [url, setUrl] = useState("");
  // const [selector, setSelector] = useState("");
  // const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  // const [screenshot, setScreenshot] = useState<string | null>(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  // const handleScreenshot = async () => {
  //   if (!url) {
  //     setError("Please enter a valid URL.");
  //     return;
  //   }
  //   // Client-side URL validation: must start with http:// or https:// and be a valid URL
  //   if (!/^https?:\/\//i.test(url.trim())) {
  //     setError("URL must start with http:// or https://");
  //     return;
  //   }
  //   try {
  //     new URL(url.trim());
  //   } catch {
  //     setError("Invalid URL format. Please enter a valid URL.");
  //     return;
  //   }
  //   setLoading(true);
  //   setError(null);
  //   setScreenshot(null);

  //   try {
  //     const params = new URLSearchParams({
  //       url: url.trim(),
  //       viewport: viewport
  //     });
      
  //     if (selector.trim()) {
  //       params.append('selector', selector.trim());
  //     }
      
  //     const response = await fetch(
  //       `/api/screenshot?${params.toString()}`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to capture screenshot.");
  //     }
  //     const blob = await response.blob();
  //     setScreenshot(URL.createObjectURL(blob));
  //   } catch (err) {
  //     setError(
  //       err instanceof Error ? err.message : "An unknown error occurred."
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className={`${ubuntu.variable} min-h-screen`} style={{ backgroundColor: 'var(--color-background)', ...cssVars }}>
      
      <Header brand={brand} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Main Content */}
      <div className=" py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          <div className="space-y-8">

            {/* Rating Block */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => {
                  if (star <= 4) {
                    return <StarIcon key={star} filled={true} />;
                  } else {
                    return (
                      <div key={star} className="relative inline-block">
                        <StarIcon filled={false} />
                        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '80%' }}>
                          <StarIcon filled={true} />
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <span className="text-lg font-bold sans-serif-text primary-textcolor">
                {brand.reviewRating}
              </span>
              <span className="text-sm sans-serif-text" style={{ color: 'var(--color-text-secondary)' }}>
                ({brand.reviewsCount})
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight serif-headline primary-textcolor">
                Use Our Influencer Army To
                <span className="solid-gradient-text serif-headline">Gain Thousands</span>
                {" "}of {brand.platformName} {brand.platformTarget}{" "}
                <span className="solid-gradient-text serif-headline">Every Month</span>
              </h1>
              
              <p className="text-lg leading-relaxed sans-serif-text" style={{ color: 'var(--color-text-secondary)' }}>
                {brand.platformDescription}
              </p>
            </div>


            <div className="space-y-4">

              {brand.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckMark 
                    className={'w-5 h-5 checkmark-icon checkmark-secondary'}
                  />
                  <span className="sans-serif-text" style={{ color: 'var(--color-text-primary)' }}>{feature}</span>
                </div>
              ))}
            </div>


            <div className="pt-4">
              <Link
                href="/checkout"
                className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text"
              >
                START MY FREE 3-DAY TRIAL
              </Link>
            </div>
          </div>


          <div className="relative h-full">
            <ImageWithPhone
                image={brand.image}
                phonePosition="landing-page"
                phoneImage={brand.phoneImage}
                phoneImageAlt={brand.phoneImageAlt}
                smarterWayReview={brand.smarterWayReview}
                smarterWayReviewText={brand.smarterWayReviewText}
            />
          </div>
        </div>
      </div>

      {/* Trusted by Section */}
      <TrustedBySection />

      {/* Channel Marketing Showcase Section */}
      <ChannelMarketing brand={brand} />

      {/* Why Growing Section */}
      <WhyGrowing brand={brand} />

      {/* Simple Steps Section */}
      <SimpleSteps brand={brand} />

      {/* Feedbacks Section */}
      <Feedbacks brand={brand} />

      {/* Before/After Section */}
      <BeforeAfter brand={brand} />

      {/* New Audience Section */}
      <EveryDay brand={brand} />

      {/* Promotion Toolkit Section */}
      <PromotionToolkit brand={brand}/>

      {/* What Happens Section */}
      <WhatHappens brand={brand} />

      {/* Transparent Price Section */}
      {/* <TransparentPrice brand={brand} /> */}


      {/* Pricing Section */}
      <PricingSection brand={brand} />

      {/* Smarter Way Section */}
      <SmarterWay brand={brand} />

      {/* FAQ Section */}
      <FAQ brand={brand} />

      {/* Contact Us Section */}
      <ContactUs brand={brand} />

      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Screenshot Preview
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Enter a URL below to generate a screenshot
        </p>
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://vercel.com"
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black focus:outline-none"
            />
            <select
              value={viewport}
              onChange={(e) => setViewport(e.target.value as "desktop" | "mobile")}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black focus:outline-none bg-white"
            >
              <option value="desktop">Desktop</option>
              <option value="mobile">Mobile</option>
            </select>
            <button
              onClick={handleScreenshot}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {loading ? "Capturing..." : "Capture"}
            </button>
          </div>
          <div>
            <input
              type="text"
              value={selector}
              onChange={(e) => setSelector(e.target.value)}
              placeholder="CSS Selector (optional) - e.g., h1, main, #page-content"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black focus:outline-none"
            />
            <p className="text-sm text-gray-500 mt-1">
              Leave empty to capture the full page, or specify a CSS selector (h1, main, header)
            </p>
          </div>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {screenshot && (
          <div className="mt-8 border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-2xl font-semibold p-4 bg-gray-100 border-b text-black">
              Screenshot Preview
            </h2>
            <img
              src={screenshot || "/placeholder.svg"}
              alt="Website screenshot"
              className="w-full"
            />
          </div>
        )}
      </div>
    </main> */}
    </div>

      {/* Footer */}
      <Footer brand={brand} />
    </div>
  );
}
