'use client';

import { useState, useEffect, useRef } from 'react';

export default function Promo() {
  const [showPromo, setShowPromo] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const promoEndsAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (!promoEndsAtRef.current) {
      promoEndsAtRef.current = Date.now() + 60 * 60 * 1000;
    }
    const updateCountdown = () => {
      const remainingMs = Math.max(0, (promoEndsAtRef.current as number) - Date.now());
      const totalSeconds = Math.floor(remainingMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setTimeLeft({ hours, minutes, seconds });
    };
    updateCountdown();
    const id = setInterval(updateCountdown, 1000);
    return () => clearInterval(id);
  }, []);

  if (!showPromo) {
    return null;
  }

  return (
    <div className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
        <div className="flex flex-1 items-center justify-center md:gap-3 gap-1 text-[11px] font-semibold whitespace-nowrap">
          <span 
            className="flex items-center md:gap-2 gap-1 bg-white/25 md:w-fit md:px-3 py-2 rounded-xl w-[70px]" 
            style={{ 
              background: `linear-gradient(to right, var(--header-glass-color), var(--header-glass-color)) padding-box, linear-gradient(to right, white, transparent) border-box`,
              border: '1px solid transparent',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" opacity="0.9" />
            </svg>
            <p className="flex flex-col md:flex-row md:gap-1 leading-tight">
              <span>3 SPOTS</span>
              <span className="md:inline">LEFT</span>
            </p>
          </span>
          <span className="md:block hidden">50% OFF</span>
          <span className="h-5 w-px bg-white/50 mx-1 hidden md:inline-block" />
          <div className="flex flex-col md:flex-row bg-white px-3 py-1 rounded-md md:gap-1 gap-0">
            <div className="flex flex-col md:flex-row md:hidden">
              <span className="gradient-text md:inline font-bold text-center">50% OFF</span>
            </div>
            <div className="flex flex-col md:flex-row md:gap-1 gap-0">
              <span className="gradient-text md:inline font-bold text-center">FLASH SALE </span>
              <span className="gradient-text md:inline hidden font-bold text-center">|</span>
              <span className="gradient-text md:inline font-bold text-center">ENDS IN 1 HOUR</span>
            </div>
          </div>
          <div className="flex items-center md:gap-2 gap-1 ml-1">
            {[{v: String(timeLeft.hours).padStart(2,'0'), l: 'HR'},{v: String(timeLeft.minutes).padStart(2,'0'), l:'MIN'},{v: String(timeLeft.seconds).padStart(2,'0'), l:'SEC'}].map((t, i) => (
              <div className="flex items-center justify-center bg-white rounded-md" key={i}>
                <div key={i} className="px-2 py-1 leading-none text-center">
                  <div className="text-[12px] text-black font-bold">{t.v}</div>
                  <div className="text-[10px] text-black font-semibold opacity-80 -mt-0.5">{t.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Close promo" onClick={() => setShowPromo(false)} className="text-white/90 hover:text-white text-lg leading-none">×</button>
        </div>
      </div>
    </div>
  );
}

