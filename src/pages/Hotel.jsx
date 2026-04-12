import React, { useState } from "react";
import HotelSearchSummaryBar from "@/components/hotel-results/HotelSearchSummaryBar";
import HotelFilters from "@/components/hotel-results/HotelFilters";
import HotelList from "@/components/hotel-results/HotelList";

function Hotel() {
  const [filters, setFilters] = useState({
    maxPrice: 5000,
    stars: ["4plus"],
    amenities: ["Pool"],
  });

  const clearFilters = () => {
    setFilters({
      maxPrice: 5000,
      stars: [],
      amenities: [],
    });
  };

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="w-full min-h-screen bg-background pb-20">
      <HotelSearchSummaryBar />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-8 md:mt-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-12 w-full">
        {/* Left Sidebar - Filters */}
        <div className="w-full lg:w-[320px] shrink-0 sticky top-24">
          <HotelFilters
            filters={filters}
            updateFilters={updateFilters}
            clearFilters={clearFilters}
          />
        </div>

        {/* Right Content - Results */}
        <HotelList filters={filters} />
      </div>
    </div>
  );
}

export default Hotel;
