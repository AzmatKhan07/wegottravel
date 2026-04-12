import React, { useState, useEffect, useMemo } from "react";
import HotelCard from "./HotelCard";
import { hotelResults } from "@/assets/assets";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function HotelList({ filters }) {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSort, setActiveSort] = useState("Recommended");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [filters, activeSort]);

  const filteredHotels = useMemo(() => {
    let list = [...hotelResults];

    // 1. Filtering Logic
    list = list.filter((hotel) => {
      // Price range
      if (hotel.price > filters.maxPrice) return false;

      // Stars
      if (filters.stars.length > 0) {
        if (filters.stars.includes("5") && hotel.rating !== 5) return false;
        if (filters.stars.includes("4plus") && hotel.rating < 4) return false;
        if (filters.stars.includes("3plus") && hotel.rating < 3) return false;
      }

      // Amenities
      if (filters.amenities.length > 0) {
        const hasAll = filters.amenities.every(a => hotel.amenities.some(ha => ha.toUpperCase().includes(a.toUpperCase())));
        if (!hasAll) return false;
      }

      return true;
    });

    // 2. Sorting Logic
    if (activeSort === "Price: Low to High") {
      list.sort((a, b) => a.price - b.price);
    } else if (activeSort === "Price: High to Low") {
      list.sort((a, b) => b.price - a.price);
    } else if (activeSort === "Rating: High to Low") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [filters, activeSort]);

  return (
    <div className="flex flex-col flex-1 w-full gap-8">
      {/* Header Info & Sort */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-black text-foreground">
          {filteredHotels.length} Stays Found
        </h2>
        <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold text-muted-foreground">Sort by:</span>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 text-[14px] font-bold text-primary outline-none">
                        {activeSort}
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px] rounded-xl shadow-xl border-border/40 p-1">
                    {[
                        "Recommended",
                        "Price: Low to High",
                        "Price: High to Low",
                        "Rating: High to Low"
                    ].map((option) => (
                        <DropdownMenuItem 
                            key={option}
                            onClick={() => setActiveSort(option)}
                            className={`px-4 py-3 rounded-lg text-[13px] font-bold cursor-pointer transition-colors ${
                                activeSort === option ? 'bg-primary/5 text-primary' : 'hover:bg-muted'
                            }`}
                        >
                            {option}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {isLoading ? (
          <>
            {[1, 2].map((i) => (
              <div key={i} className="w-full bg-white rounded-2xl h-[300px] shadow-sm flex flex-col md:flex-row gap-6 p-4">
                <Skeleton className="w-full md:w-[320px] h-full rounded-xl" />
                <div className="flex-1 flex flex-col gap-4 py-4">
                  <Skeleton className="h-8 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                  <div className="mt-auto flex gap-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
                <Skeleton className="w-full md:w-[240px] h-full rounded-xl" />
              </div>
            ))}
          </>
        ) : filteredHotels.length > 0 ? (
          <>
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-border text-center px-6">
            <div className="bg-muted p-6 rounded-full mb-4">
              <Search className="w-10 h-10 text-muted-foreground opacity-20" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">No hotels found</h3>
            <p className="text-muted-foreground max-w-sm">
              Adjust your filters to see more accommodation options in this area.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HotelList;
