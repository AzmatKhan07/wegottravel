import React, { useState, useEffect, useMemo } from "react";
import FlightCard from "./FlightCard";
import { flightResults } from "@/assets/assets";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

function FlightList({ filters }) {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("best");

  useEffect(() => {
    // Simulate network delay on tab change or filter change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [activeTab, filters]);

  const sortedFlights = useMemo(() => {
    let list = [...flightResults];

    // 1. Apply Filters
    list = list.filter((flight) => {
      // Price Filter
      if (flight.price > filters.maxPrice) return false;

      // Stops Filter
      const stopMap = {
        "NON-STOP": "direct",
        "1 STOP": "1stop",
        "2 STOP": "2stops",
      };
      if (!filters.stops.includes(stopMap[flight.stops])) return false;

      // Airline Filter
      const airlineMap = {
        "Air France": "af",
        "Delta": "dl",
        "Lufthansa": "lh",
      };
      if (!filters.airlines.includes(airlineMap[flight.airline])) return false;

      // Departure Filter
      if (filters.departure !== "any") {
        const hour = parseInt(flight.departure.time.split(":")[0]);
        if (filters.departure === "morning" && hour >= 12) return false;
        if (filters.departure === "afternoon" && (hour < 12 || hour >= 18))
          return false;
      }

      return true;
    });

    // 2. Apply Sorting (Tabs)
    if (activeTab === "cheapest") {
      list.sort((a, b) => a.price - b.price);
    } else if (activeTab === "fastest") {
      const parseDurationStr = (str) => {
        const hMatch = str.match(/(\d+)H/);
        const mMatch = str.match(/(\d+)M/);
        const h = hMatch ? parseInt(hMatch[1]) : 0;
        const m = mMatch ? parseInt(mMatch[1]) : 0;
        return h * 60 + m;
      };
      list.sort(
        (a, b) => parseDurationStr(a.duration) - parseDurationStr(b.duration),
      );
    }

    return list;
  }, [activeTab, filters]);

  return (
    <div className="flex flex-col flex-1 w-full relative">
      <Tabs defaultValue="best" onValueChange={setActiveTab} className="w-full">
        {/* Tabs */}
        <div className="flex w-max mb-8">
          <TabsList className="bg-[#f8f9fa] border border-border/20 rounded-full h-auto p-1.5 py-6 flex shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            {["best", "cheapest", "fastest"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="px-8 py-6 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Flight Content Container */}
        <div className="flex flex-col gap-6">
          {isLoading ? (
            // Shadcn Skeleton state
            <>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-border/40 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
                >
                  {/* Airline Skeleton */}
                  <div className="flex items-center gap-4 w-full md:w-[220px]">
                    <Skeleton className="w-14 h-14 rounded-full" />
                    <div className="flex flex-col gap-2 w-full">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>

                  {/* Flight Timeline Skeleton */}
                  <div className="flex items-center justify-between w-full flex-1 md:px-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-3 w-20" />
                    </div>

                    <div className="flex-1 px-8">
                      <Skeleton className="h-0.5 w-full" />
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </div>

                  {/* Price Skeleton */}
                  <div className="flex flex-col items-center w-full md:w-[140px] border-t md:border-t-0 md:border-l border-border/30 pt-6 md:pt-0 pl-0 md:pl-8 gap-4">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </>
          ) : sortedFlights.length > 0 ? (
            // Actual Flight Cards
            <>
              {sortedFlights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </>
          ) : (
            // No Results State
            <div className="w-full py-20 flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-border text-center px-6">
              <div className="bg-muted p-6 rounded-full mb-4">
                <Search className="w-10 h-10 text-muted-foreground opacity-20" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                No flights found
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Try adjusting your filters (price, airlines, or stops) to see
                more options for your trip.
              </p>
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
}

export default FlightList;
