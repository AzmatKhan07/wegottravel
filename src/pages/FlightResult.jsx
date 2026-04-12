import React, { useState } from "react";
import SearchSummaryBar from "@/components/flight-results/SearchSummaryBar";
import FlightFilters from "@/components/flight-results/FlightFilters";
import FlightList from "@/components/flight-results/FlightList";

function FlightResult() {
  const [filters, setFilters] = useState({
    maxPrice: 3000,
    stops: ["direct", "1stop", "2stops"],
    airlines: ["af", "dl", "lh"],
    departure: "any",
  });

  const clearFilters = () => {
    setFilters({
      maxPrice: 3000,
      stops: ["direct", "1stop", "2stops"],
      airlines: ["af", "dl", "lh"],
      departure: "any",
    });
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };
  return (
    <div className="w-full min-h-screen bg-background pb-20">
      <SearchSummaryBar />
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-8 md:mt-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-12 w-full">
        {/* Left Sidebar - Filters */}
        <div className="w-full lg:w-[320px] shrink-0 sticky top-24">
          <FlightFilters 
            filters={filters} 
            updateFilters={updateFilters} 
            clearFilters={clearFilters}
          />
        </div>

        {/* Right Content - Results */}
        <FlightList filters={filters} />
      </div>

    </div>
  );
}

export default FlightResult;
