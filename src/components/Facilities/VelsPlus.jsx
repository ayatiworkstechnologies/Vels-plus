import React from 'react';

const VelsHero = () => {
  return (
    <section className="relative min-h-[600px] flex flex-col items-center justify-center px-8 py-5 overflow-hidden">
      
      {/* 1. YOUR CUSTOM BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/assets/paper-1.png")` }} // <-- PUT YOUR IMAGE PATH HERE
      />

      {/* 2. TEXTURE & COLOR OVERLAY */}
      {/* This ensures the 'plaster' effect stays on top of your image and keeps text legible */}
      <div className="absolute inset-0 z-[1] bg-white/40 backdrop-blur-[2px] pointer-events-none">
        <svg className="h-full w-full opacity-30 mix-blend-multiply">
          <filter id="plasterGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#plasterGrain)" />
        </svg>
      </div>

      {/* 3. CONTENT CONTAINER */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        
        {/* SPARKLE ICON */}
        <div className="relative w-16 h-16 mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5C67F2] via-[#4852D9] to-[#2D3494] 
            [clip-path:polygon(50%_0%,_63%_37%,_100%_50%,_63%_63%,_50%_100%,_37%_63%,_0%_50%,_37%_37%)]" 
          />
          <div className="absolute -top-3 -right-2 w-3.5 h-3.5 bg-[#7C87FF] [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]" />
          <div className="absolute top-1 -right-5 w-2.5 h-2.5 bg-[#A1ABFF] [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]" />
        </div>

        {/* TYPOGRAPHY */}
        <div className="space-y-3">
          <h1 className="text-[28px] md:text-[32px] font-bold text-[#1A1A1A] font-serif leading-tight">
            VELS Plus provides a well-structured academic environment designed
          </h1>
          
          <p className="text-[20px] md:text-[22px] text-[#6B7280] font-serif font-normal leading-relaxed max-w-[850px] mx-auto">
            to support focused learning and student success. Our facilities include 
            modern classrooms, digital learning tools, and dedicated study spaces 
            that help students build strong conceptual understanding and excel in 
            Mathematics, Science, and competitive examinations.
          </p>
        </div>
      </div>

    </section>
  );
};

export default VelsHero;