import React from "react";
import assets from "@/assets/assets";
import SearchPanel from "@/components/common/SearchPanel";

function Hero() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] flex flex-col items-center justify-center bg-muted overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={assets.HeroSection}
          alt="Coastal town view"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 mt-8 md:mt-16">
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black text-white text-center mb-8 md:mb-12 tracking-tight drop-shadow-2xl">
          Arrive before you book.
        </h1>

        <SearchPanel />
      </div>
    </div>
  );
}

export default Hero;
