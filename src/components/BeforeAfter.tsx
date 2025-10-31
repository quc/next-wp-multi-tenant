'use client';

import React from 'react';

type BeforeAfterItem = {
  title: string;
  image: string; // path to the combined before/after image
};

interface BeforeAfterProps {
  // Allow passing the full brand object; only beforeAfter is used and optional
  brand: {
    beforeAfter?: {before: BeforeAfterItem, after: BeforeAfterItem}[];
  } & Record<string, unknown>;
}

// Split one tall image into two cards: top half = Before, bottom half = After
function BeforeAfterCard({ item }: { item: {before: BeforeAfterItem, after: BeforeAfterItem} }) {
  return (
    <div className="min-w-[380px] flex flex-col justify-between">
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center gap-4  max-h-[170px]">
        <div className="flex">
          <div className="text-xl font-bold secondary-textcolor">Before</div>
        </div>
        <div className="rounded-md overflow-hidden h-[90px]">
          <img
            src={item.before.image}
            alt={item.before.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center gap-4  max-h-[170px]">
        <div className="flex-1">
          <div className="text-xl font-bold color-secondary-font">After</div>
        </div>
        <div className="rounded-md overflow-hidden shrink-0">
          <img
            src={item.after.image}
            alt={item.after.title}
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter({ brand }: BeforeAfterProps) {
  const items = brand.beforeAfter ?? [];
  if (!items.length) return null;

  // Duplicate the list to achieve seamless marquee effect
  const marqueeItems = [...items, ...items];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
        {/* animate-marquee-left will-change-transform */}
          <div className="flex gap-6 animate-marquee-left will-change-transform ">
            {marqueeItems.map((item, idx) => (
              <BeforeAfterCard key={`${item.before.title}-${item.after.title}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


