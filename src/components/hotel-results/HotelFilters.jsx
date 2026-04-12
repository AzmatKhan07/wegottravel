import React from "react";
import { hotelFilters } from "@/assets/assets";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RotateCcw, Star } from "lucide-react";

function HotelFilters({ filters, updateFilters, clearFilters }) {
  const toggleStar = (id) => {
    const newStars = filters.stars.includes(id)
      ? filters.stars.filter((item) => item !== id)
      : [...filters.stars, id];
    updateFilters({ stars: newStars });
  };

  const toggleAmenity = (amenity) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((item) => item !== amenity)
      : [...filters.amenities, amenity];
    updateFilters({ amenities: newAmenities });
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

      {/* Price Range */}
      <div className="mb-10">
        <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-6">
          Price Range
        </h4>
        <div className="flex justify-between items-center mb-4">
          <span className="text-[14px] font-bold text-foreground">$200</span>
          <span className="text-[14px] font-bold text-primary">${filters.maxPrice}+</span>
        </div>
        <Slider
          defaultValue={[filters.maxPrice]}
          max={5000}
          min={200}
          step={100}
          value={[filters.maxPrice]}
          onValueChange={(val) => updateFilters({ maxPrice: val[0] })}
          className="py-4"
        />
      </div>

      {/* Star Rating */}
      <div className="mb-10">
        <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-6">
          Star Rating
        </h4>
        <div className="flex flex-col gap-4">
          {hotelFilters.starRating.map((star) => (
            <div key={star.id} className="flex items-center gap-3 group px-1">
              <Checkbox 
                id={star.id}
                checked={filters.stars.includes(star.id)}
                onCheckedChange={() => toggleStar(star.id)}
                className="w-5 h-5 rounded-[4px] border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label 
                htmlFor={star.id}
                className="text-[14px] text-foreground font-semibold cursor-pointer flex items-center gap-1"
              >
                {star.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-6">
          Amenities
        </h4>
        <div className="flex flex-wrap gap-2">
          {hotelFilters.amenities.map((amenity) => (
            <button
                key={amenity}
                onClick={() => toggleAmenity(amenity)}
                className={`px-4 py-2 rounded-full text-[12px] font-bold border transition-all ${
                    filters.amenities.includes(amenity)
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-border text-muted-foreground hover:border-primary/50'
                }`}
            >
                {amenity}
            </button>
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default HotelFilters;
