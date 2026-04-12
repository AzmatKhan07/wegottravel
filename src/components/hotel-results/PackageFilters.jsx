import React from "react";
import { packageFilters } from "@/assets/assets";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RotateCcw } from "lucide-react";

function PackageFilters({ filters, updateFilters, clearFilters }) {
  const toggleType = (type) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((item) => item !== type)
      : [...filters.types, type];
    updateFilters({ types: newTypes });
  };

  const toggleClass = (id) => {
    const newClasses = filters.classes.includes(id)
      ? filters.classes.filter((item) => item !== id)
      : [...filters.classes, id];
    updateFilters({ classes: newClasses });
  };

  return (
    <div className="w-full bg-[#f1f1f1]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shrink-0">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
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

      {/* Destination Type */}
      <div className="mb-10">
        <h4 className="text-[11px] font-black text-muted-foreground uppercase tracking-wider mb-6">
          Destination Type
        </h4>
        <div className="flex flex-wrap gap-2">
          {packageFilters.types.map((type) => (
            <button
                key={type}
                onClick={() => toggleType(type)}
                className={`px-5 py-2.5 rounded-xl text-[12px] font-bold border transition-all ${
                    filters.types.includes(type)
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-border text-muted-foreground hover:border-primary/50'
                }`}
            >
                {type}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Range */}
      <div className="mb-10">
        <h4 className="text-[11px] font-black text-muted-foreground uppercase tracking-wider mb-6">
          Budget Range
        </h4>
        <div className="flex justify-between items-center mb-4">
          <span className="text-[14px] font-bold text-foreground">$1,000</span>
          <span className="text-[14px] font-black text-primary">${filters.maxBudget.toLocaleString()}+</span>
        </div>
        <Slider
          defaultValue={[filters.maxBudget]}
          max={20000}
          min={1000}
          step={500}
          value={[filters.maxBudget]}
          onValueChange={(val) => updateFilters({ maxBudget: val[0] })}
          className="py-4"
        />
      </div>

      {/* Resort Class */}
      <div>
        <h4 className="text-[11px] font-black text-muted-foreground uppercase tracking-wider mb-6">
          Resort Class
        </h4>
        <div className="flex flex-col gap-4">
          {packageFilters.classes.map((cls) => (
            <div key={cls.id} className="flex items-center gap-3 group px-1">
              <Checkbox 
                id={cls.id}
                checked={filters.classes.includes(cls.id)}
                onCheckedChange={() => toggleClass(cls.id)}
                className="w-5 h-5 rounded-[6px] border-2 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label 
                htmlFor={cls.id}
                className="text-[14px] text-foreground font-black cursor-pointer"
              >
                {cls.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default PackageFilters;
