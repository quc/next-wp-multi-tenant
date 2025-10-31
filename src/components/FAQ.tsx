'use client';

import { useState } from 'react';

interface FAQProps {
  brand: {
    faq: {
      question: string;
      answer: string;
    }[];
  };
}
export default function FAQ({ brand }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };


  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold serif-headline mb-4 primary-textcolor">
            Frequently Asked <span className='gradient-text'>Questions</span>
          </h2>
          <p className="text-lg sans-serif-text secondary-textcolor">
            Need more info about how StreamerEdge works? You can find it here
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 px-4">
          {brand.faq.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium sans-serif-text pr-4 primary-textcolor">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${openItems.includes(index) ? 'rotate-180' : ''} secondary-textcolor`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 ">
                    <p className="text-base sans-serif-text leading-relaxed secondary-textcolor text-start">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
