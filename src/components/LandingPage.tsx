'use client';

import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import TrustedBySection from "./TrustedBySection";
import ChannelMarketing from "./ChannelMarketing";
import WhyGrowing from "./WhyGrowing";
import Feedbacks from "./Feedbacks";
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
import { Ubuntu } from 'next/font/google';
import { resolveTheme, ThemeKey } from '@/themes';

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
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight serif-headline primary-textcolor">
                Finally... A Smarter Way to Increase Your{" "}
                <span className="solid-gradient-text serif-headline">{brand.platform} {brand.description}</span>
              </h1>
              
              <p className="text-lg leading-relaxed sans-serif-text" style={{ color: 'var(--color-text-secondary)' }}>
                Done-for-you marketing support to get your account in front of new audiences without the hassle.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {/* @ts-ignore */}
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
                href="/checkout"
                className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text"
              >
                START MY FREE 3-DAY TRIAL
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-full">
            <ImageWithPhone
                image={brand.image}
                phonePosition="landing-page"
                phoneImage={brand.phoneImage}
                phoneImageAlt={brand.phoneImageAlt}
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
