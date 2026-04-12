import React, { useState } from "react";
import assets from "@/assets/assets";
import {
  DestinationPickerField,
  DatePickerField,
  TravelerPickerField,
} from "@/components/common/SearchPanel";
import { Search, X } from "lucide-react";

function SearchSummaryBar() {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    // Logic to fetch new results would go here
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-white shadow-sm border-b border-border/40 py-4 mb-6 md:mb-10 rounded-b-xl lg:rounded-b-2xl sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:w-auto flex-1">
          {/* Destination */}
          <div className={`${isEditing ? 'bg-secondary/10' : ''} p-2 rounded-xl flex flex-col justify-center transition-colors min-w-[200px]`}>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1 mb-1">
              Destination
            </span>
            {isEditing ? (
              <DestinationPickerField placeholder="Where to?" />
            ) : (
              <span className="text-sm font-bold text-foreground px-1 truncate">
                NYC to PAR
              </span>
            )}
          </div>

          {/* Dates */}
          <div className={`${isEditing ? 'bg-secondary/10' : ''} p-2 rounded-xl flex flex-col justify-center transition-colors min-w-[180px]`}>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1 mb-1">
              Dates
            </span>
            {isEditing ? (
              <DatePickerField placeholder="Add dates" />
            ) : (
              <span className="text-sm font-bold text-foreground px-1 truncate">
                12 May - 20 May
              </span>
            )}
          </div>

          {/* Travelers */}
          <div className={`${isEditing ? 'bg-secondary/10' : ''} p-2 rounded-xl flex flex-col justify-center transition-colors min-w-[160px]`}>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1 mb-1">
              Travelers
            </span>
            {isEditing ? (
              <TravelerPickerField showFlightClass={true} />
            ) : (
              <span className="text-sm font-bold text-foreground px-1 truncate">
                1 Adult
              </span>
            )}
          </div>

        {/* Modify Search Button */}
        <div className="flex items-center gap-3 w-full md:w-auto pr-4">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95"
              >
                <Search className="w-3.5 h-3.5" />
                Update
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-secondary/20 hover:bg-secondary/30 text-foreground p-4 rounded-xl transition-colors"
                aria-label="Cancel"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsEditing(true)}
              className="w-full md:w-auto bg-secondary/10 hover:bg-secondary/20 text-primary font-extrabold text-[12px] uppercase tracking-[0.1em] px-8 py-4 rounded-xl transition-all active:scale-95 border border-primary/10 shadow-sm"
            >
              Modify Search
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSummaryBar;
