'use client';

interface SimpleStepsPhoneProps {
  phoneScreen: string;
  phoneMockup: string;
}

export default function SimpleStepsPhone({ phoneScreen, phoneMockup }: SimpleStepsPhoneProps) {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Phone Mockup Frame - Defines the container size and acts as mask */}
      <div className="relative h-full w-fit flex items-center justify-center overflow-hidden lg:rounded-[48px] rounded-[2.3rem]">
        <img
          src={phoneMockup}
          alt="Phone frame"
          className="w-full h-full object-contain relative z-10 pointer-events-none"
        />

        <img
            src={phoneScreen}
            alt="Phone screen animation"
            className="absolute h-[110%] "
        />
        {/* Phone Screen GIF - Taller (110% height) but clipped by parent overflow-hidden
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={phoneScreen}
            alt="Phone screen animation"
            className="w-full object-contain"
            style={{
              height: '110%',
            }}
          />
        </div> */}
      </div>
    </div>
  );
}

