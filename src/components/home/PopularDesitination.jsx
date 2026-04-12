import React from "react";
import { curatedCollections } from "@/assets/assets";

function PopularDesitination() {
  const largeDest = curatedCollections.find((c) => c.isLarge);
  const smallDests = curatedCollections.filter((c) => !c.isLarge);

  return (
    <section className="w-full bg-secondary/5 dark:bg-muted/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h3 className="text-primary font-black text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4">
            Curated Collections
          </h3>
          <h2 className="text-3xl md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-foreground tracking-tight max-w-sm md:max-w-lg lg:max-w-xl">
            Where the world meets the horizon.
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 h-auto md:h-[550px] xl:h-[650px]">
          {/* Left Large Card */}
          {largeDest && (
            <div className="relative w-full h-[450px] md:h-full rounded-[24px] overflow-hidden group cursor-pointer shadow-xl">
              <img
                src={largeDest.image}
                alt={largeDest.city}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2ff2] via-[#0e1c2f4d] to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                <h4 className="text-2xl md:text-[32px] font-black text-white mb-1.5 md:mb-2 tracking-tight">
                  {largeDest.city}
                </h4>
                {largeDest.properties && (
                  <p className="text-sm md:text-[15px] font-medium text-white/80">
                    {largeDest.properties}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Right Small Cards Stacking */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 h-[600px] md:h-full">
            {smallDests.map((dest) => (
              <div
                key={dest.id}
                className="relative w-full flex-1 min-h-0 rounded-[24px] overflow-hidden group cursor-pointer shadow-xl"
              >
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2ff2] via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute bottom-5 left-6 md:bottom-8 md:left-8 z-10">
                  <h4 className="text-xl md:text-[22px] font-black text-white tracking-tight">
                    {dest.city}
                  </h4>
                  {dest.isLarge && dest.properties && (
                    <p className="text-sm font-medium text-white/80 mt-1">
                      {dest.properties}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularDesitination;
