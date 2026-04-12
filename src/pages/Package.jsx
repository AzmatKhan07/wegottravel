import React, { useState } from "react";
import PackageFilters from "@/components/hotel-results/PackageFilters";
import PackageList from "@/components/hotel-results/PackageList";

function Package() {
  const [filters, setFilters] = useState({
    maxBudget: 20000,
    types: [],
    classes: [],
  });

  const clearFilters = () => {
    setFilters({
      maxBudget: 15000,
      types: [],
      classes: [],
    });
  };

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="w-full min-h-screen bg-white pb-20">
      {/* Header Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <span className="text-[12px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">
            Curated Experiences
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight tracking-tighter">
            Holiday Packages
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            Bespoke journeys designed for the discerning traveler. Everything curated, nothing overlooked.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 w-full">
        {/* Left Sidebar - Filters */}
        <div className="w-full lg:w-[320px] shrink-0 sticky top-24">
          <PackageFilters
            filters={filters}
            updateFilters={updateFilters}
            clearFilters={clearFilters}
          />
        </div>

        {/* Right Content - Results */}
        <PackageList filters={filters} />
      </div>
    </div>
  );
}

export default Package;
