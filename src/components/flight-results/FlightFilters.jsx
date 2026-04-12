import React, { useState } from "react";
import { Sunrise, Sun } from "lucide-react";
import { flightFilters } from "@/assets/assets";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RotateCcw } from "lucide-react";

function FlightFilters({ filters, updateFilters, clearFilters }) {
  const toggleStop = (id) => {
    const newStops = filters.stops.includes(id)
      ? filters.stops.filter((item) => item !== id)
      : [...filters.stops, id];
    updateFilters({ stops: newStops });
  };

  const toggleAirline = (id) => {
    const newAirlines = filters.airlines.includes(id)
      ? filters.airlines.filter((item) => item !== id)
      : [...filters.airlines, id];
    updateFilters({ airlines: newAirlines });
  };

  return (
    <div className="w-full bg-[#f8f9fa] rounded-2xl p-6 md:p-8 shrink-0">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest">
            Refine Results
        </h3>
        <button 
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-primary/70 transition-colors uppercase tracking-wider"
        >
            <RotateCcw className="w-3 h-3" />
            Clear All
        </button>
      </div>

      {/* Max Price */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[15px] font-bold text-foreground">
            Max Price
          </span>
          <span className="text-[15px] font-bold text-primary">
            ${filters.maxPrice}
          </span>
        </div>
        <Slider
          defaultValue={[filters.maxPrice]}
          max={5000}
          step={50}
          value={[filters.maxPrice]}
          onValueChange={(val) => updateFilters({ maxPrice: val[0] })}
          className="py-4"
        />
      </div>

      {/* Stops */}
      <div className="mb-8">
        <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
          Stops
        </h4>
        <div className="flex flex-col gap-3.5">
          {flightFilters.stops.map((stop) => (
            <div
              key={stop.id}
              className="flex items-center justify-between group"
            >
              <label
                htmlFor={stop.id}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Checkbox
                  id={stop.id}
                  checked={filters.stops.includes(stop.id)}
                  onCheckedChange={() => toggleStop(stop.id)}
                  className="w-5 h-5 rounded-[4px] border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <span className="text-[14px] text-foreground font-medium">
                  {stop.label}
                </span>
              </label>
              <span className="text-[13px] text-muted-foreground font-medium">
                {stop.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Airlines */}
      <div className="mb-10">
        <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
          Airlines
        </h4>
        <div className="flex flex-col gap-3.5">
          {flightFilters.airlines.map((airline) => (
            <div key={airline.id} className="flex items-center gap-3 group">
              <Checkbox
                id={airline.id}
                checked={filters.airlines.includes(airline.id)}
                onCheckedChange={() => toggleAirline(airline.id)}
                className="w-5 h-5 rounded-[4px] border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label
                htmlFor={airline.id}
                className="text-[14px] text-foreground font-medium cursor-pointer"
              >
                {airline.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Departure */}
      <div>
        <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
          Departure
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => updateFilters({ departure: "morning" })}
            className={`flex flex-col items-center justify-center gap-2 border rounded-xl py-4 transition-all cursor-pointer ${
              filters.departure === "morning"
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white border-border text-foreground hover:border-primary/50"
            }`}
          >
            <Sunrise
              className={`w-6 h-6 ${filters.departure === "morning" ? "text-white" : "text-primary"}`}
            />
            <span
              className={`text-[11px] font-bold uppercase tracking-widest ${filters.departure === "morning" ? "text-white" : "text-foreground"}`}
            >
              Morning
            </span>
          </button>
          <button
            onClick={() => updateFilters({ departure: "afternoon" })}
            className={`flex flex-col items-center justify-center gap-2 border rounded-xl py-4 transition-all cursor-pointer ${
              filters.departure === "afternoon"
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white border-border text-foreground hover:border-primary/50"
            }`}
          >
            <Sun
              className={`w-6 h-6 ${filters.departure === "afternoon" ? "text-white" : "text-primary"}`}
            />
            <span
              className={`text-[11px] font-bold uppercase tracking-widest ${filters.departure === "afternoon" ? "text-white" : "text-foreground"}`}
            >
              Afternoon
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightFilters;
