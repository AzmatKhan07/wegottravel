import React from "react";
import { Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FlightCard({ flight }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-border/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        
        {/* Airlines Info */}
        <div className="flex items-center gap-4 w-full md:w-[220px] shrink-0">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary/10 flex items-center justify-center shrink-0 border border-border/50">
            {flight.logoUrl ? (
              <img src={flight.logoUrl} alt={flight.airline} className="w-full h-full object-cover" />
            ) : (
              <Plane className="w-6 h-6 text-primary" />
            )}
          </div>
          <div className="flex flex-col">
            <h4 className="text-[17px] font-bold text-foreground">{flight.airline}</h4>
            <span className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">{flight.airlineCode}</span>
          </div>
        </div>

        {/* Flight Timeline */}
        <div className="flex items-center justify-between w-full flex-1 md:px-8">
          {/* Departure */}
          <div className="flex flex-col items-center md:items-start shrink-0 min-w-[100px]">
            <span className="text-2xl md:text-3xl font-black text-foreground tracking-tight">{flight.departure.time}</span>
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{flight.departure.airport}</span>
          </div>

          {/* Duration Line */}
          <div className="flex flex-col items-center flex-1 px-4 md:px-8">
            <span className="text-[11px] font-bold text-primary uppercase tracking-widest mb-2">{flight.duration}</span>
            <div className="w-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full border border-primary shrink-0" />
              <div className="h-px bg-primary/30 flex-1 relative">
                <Plane className="w-4 h-4 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            </div>
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-2">{flight.stops}</span>
          </div>

          {/* Arrival */}
          <div className="flex flex-col items-center md:items-end shrink-0 min-w-[100px]">
            <span className="text-2xl md:text-3xl font-black text-foreground tracking-tight">{flight.arrival.time}</span>
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{flight.arrival.airport}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex flex-col items-center justify-center w-full md:w-[140px] shrink-0 border-t md:border-t-0 md:border-l border-border/50 pt-6 md:pt-0 pl-0 md:pl-8 mt-2 md:mt-0">
          <span className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-4">£{flight.price}</span>
          <button 
            onClick={() => navigate(`/flights/${flight.id}`)}
            className="w-full bg-primary hover:bg-[#004dc9] text-white font-bold text-[13px] uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md active:scale-95"
          >
            Select
          </button>
        </div>

      </div>
    </div>
  );
}

export default FlightCard;
