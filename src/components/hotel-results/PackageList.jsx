import React, { useState, useEffect, useMemo } from "react";
import PackageCard from "./PackageCard";
import { packageResults } from "@/assets/assets";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, ChevronDown } from "lucide-react";

function PackageList({ filters }) {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSort, setActiveSort] = useState("Recommended");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [filters]);

  const filteredPackages = useMemo(() => {
    let list = [...packageResults];

    // 1. Filtering Logic
    list = list.filter((pkg) => {
      // Budget range
      if (pkg.price > filters.maxBudget) return false;

      // Type
      if (filters.types.length > 0) {
        if (!filters.types.includes(pkg.type)) return false;
      }

      // Class
      if (filters.classes.length > 0) {
        if (!filters.classes.includes(pkg.class)) return false;
      }

      return true;
    });

    return list;
  }, [filters]);

  return (
    <div className="flex flex-col flex-1 w-full gap-8">
      <div className="flex flex-col gap-8">
        {isLoading ? (
          <>
            {[1, 2].map((i) => (
              <div key={i} className="w-full bg-white rounded-3xl h-[340px] shadow-sm flex flex-col md:flex-row gap-6 p-4">
                <Skeleton className="w-full md:w-[340px] h-full rounded-2xl" />
                <div className="flex-1 flex flex-col gap-6 py-8 px-4">
                  <Skeleton className="h-10 w-2/3" />
                  <Skeleton className="h-6 w-1/3" />
                  <div className="flex gap-4 mt-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <Skeleton className="h-12 w-12 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : filteredPackages.length > 0 ? (
          <>
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
            
            {/* Discover More Button */}
            <div className="flex justify-center mt-12 mb-8">
                <button className="flex items-center gap-2 bg-[#f1f1f1] hover:bg-muted text-muted-foreground font-black text-sm uppercase tracking-widest px-10 py-5 rounded-2xl transition-all active:scale-95 group">
                    Discover More Journeys
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </button>
            </div>
          </>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-border text-center px-6">
            <div className="bg-muted p-6 rounded-full mb-4">
              <Search className="w-10 h-10 text-muted-foreground opacity-20" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">No packages found</h3>
            <p className="text-muted-foreground max-w-sm">
              Try adjusting your budget or destination types to find the perfect curated experience.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PackageList;
