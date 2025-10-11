'use client';


import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { Ubuntu } from 'next/font/google';
import { resolveTheme, ThemeKey } from '@/themes';
import Trophy  from "@/icons/trophy.svg";
import Star  from "@/icons/star.svg";
import Visa  from "@/icons/visa.svg";
import Mastercard  from "@/icons/mastercard.svg";
import Discover  from "@/icons/discover.svg";
import AmericanExpress  from "@/icons/amex.svg";

interface CheckoutPageProps {
  theme: ThemeKey;
}

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300','400','500','700'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export default function CheckoutPage({ theme }: CheckoutPageProps) {
  
  const currentTheme = resolveTheme(theme);
  const { cssVars, brand } = currentTheme;

  // Define focus styles using CSS variables
  const focusStyles = {
    '--tw-ring-color': 'var(--gradient-primary)',
    '--tw-border-opacity': '1'
  } as React.CSSProperties;

  return (
    <div className={`${ubuntu.variable} min-h-screen bg-white`} style={cssVars as React.CSSProperties}>
      {/* Header Component */}
      <Header brand={brand} style="simple" />

      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Form */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Contact Information
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Josh L. Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none"
                      style={{
                        ...focusStyles,
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--gradient-primary)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none"
                      style={{ backgroundColor: 'white' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--gradient-primary)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Phone
                    </label>
                    <div className="flex">
                      <select className="px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                        <option>🇺🇸 +1</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg transition-all duration-200 outline-none"
                        style={{ backgroundColor: 'white' }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--gradient-primary)';
                          e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#d1d5db';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none"
                      style={{ backgroundColor: 'white' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--gradient-primary)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Zip Code"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none"
                      style={{ backgroundColor: 'white' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--gradient-primary)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
              </section>

              {/* Account Info */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {brand.platform} Account Info
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      {brand.platform} {brand.platformType === 'Channel' ? 'Channel' : 'Profile'} Link
                    </label>
                    <input
                      type="url"
                      placeholder={brand.platformType === 'Channel' ? "E.g https://www.youtube.com/watch?v=loremipsum" : "E.g https://www.facebook.com/yourusername"}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none"
                      style={{ backgroundColor: 'white' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--gradient-primary)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Describe Your Niche (Optional)
                    </label>
                    <textarea
                      placeholder="Tell us what interests/demographics we should target"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none resize-none"
                      style={{ backgroundColor: 'white' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--gradient-primary)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
              </section>

              {/* Payment Information */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Payment Information
                </h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Credit Card
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">We accept:</span>
                    <div className="flex items-center space-x-2">
                      <Visa className="w-[55px] h-[38px]"/>
                      <Mastercard className="w-[55px] h-[38px]"/>
                      <Discover className="w-[55px] h-[38px]"/>
                      <AmericanExpress className="w-[55px] h-[38px]"/>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none"
                      style={{ backgroundColor: 'white' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--gradient-primary)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Expiration (MM/YY)
                      </label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none"
                        style={{ backgroundColor: 'white' }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--gradient-primary)';
                          e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#d1d5db';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Card Security Code
                      </label>
                      <input
                        type="text"
                        placeholder="CSC"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 outline-none"
                        style={{ backgroundColor: 'white' }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--gradient-primary)';
                          e.target.style.boxShadow = '0 0 0 2px rgba(var(--gradient-primary), 0.2)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#d1d5db';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Order Summary
                </h2>
                
                {/* Product */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="min-w-[72px] min-h-[72px] rounded-lg flex items-center justify-center gradient-checkout-icon-bg">
                      <img
                        src={brand.headerImage} 
                        alt={brand.nameFirst} 
                      />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {brand.name} - Premium
                    </h3>
                    <p className="text-sm text-gray-600">
                      Then $99.00 per week beginning on September 22, 2025
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-lg line-through text-gray-500">
                      $99.00
                    </div>
                    <div className="text-2xl font-bold" style={{ color: 'var(--gradient-primary)' }}>
                      $0.00
                    </div>
                  </div>
                </div>

                {/* Billing Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex-col justify-between">
                    <span className="text-gray-600">Billing Frequency</span>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 gradient-checkout-icon-bg rounded-lg">
                        <span className="font-semibold color-secondary-font">Weekly</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Today&apos;s Charge</span>
                    </div>
                    <span className="font-semibold text-gray-800">$0.00</span>
                  </div>
                </div>

                {/* Feature Highlight */}
                <div className="bg-gray-50 rounded-lg mb-6">
                  <div className="flex items-start space-x-3 w-full">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center my-auto">
                     <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-800">
                        {brand.checkout?.summaryTitle || 'Premium Growth Package'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {brand.checkout?.summaryText || 'Professional growth services tailored to your content needs.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center space-x-2">
                  <Star className="w-[21px] h-[21px]" />
                  <span className="text-sm font-semibold gradient-text">
                    Trusted by 3.000+ {brand.platform.split('™')[0]} creators
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">

              {/* Payment Information */}
              <section>
                <div className="space-y-4">

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="mt-1"
                    />
                    <label className="text-sm text-gray-600">
                      I have read and agree to the website <Link href="/terms" className="underline">terms and conditions</Link>
                    </label>
                  </div>

                  {/* Confirm Order Button */}
                  <button className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors mt-6 mb-4">
                    Start Growing Now
                  </button>

                  {/* Money-back Guarantee */}
                  <div className="flex-col items-start space-x-3">
                      <p className="font-semibold text-sm mb-1 text-gray-800">
                       💰 30-Day Results-Driven Money-Back Guarantee
                      </p>
                      <p className="text-sm text-gray-600 ml-0">
                        If you don&apos;t see any positive results, just send us a message within 30 days and we will give you a full refund.
                      </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer brand={brand} />
    </div>
  );
}