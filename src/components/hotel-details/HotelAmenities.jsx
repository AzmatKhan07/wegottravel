import React from "react";
import { 
  ShieldCheck, 
  Waves, 
  Wifi, 
  Utensils, 
  Dumbbell, 
  User, 
  Car 
} from "lucide-react";

const iconMap = {
  ShieldCheck,
  Waves,
  Wifi,
  Utensils,
  Dumbbell,
  User,
  Car
};

function HotelAmenities({ amenities }) {
  return (
    <section className="mb-16">
      <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-8">
        World-Class Amenities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.label}
              className="bg-muted/30 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center group hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10"
            >
              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HotelAmenities;
