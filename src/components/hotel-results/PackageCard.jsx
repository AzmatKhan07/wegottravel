import React from "react";
import { Star, Plane, Hotel, Utensils, Car, User, Train, ShieldCheck, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const amenityIcons = {
  "Plane": Plane,
  "Hotel": Hotel,
  "Utensils": Utensils,
  "Car": Car,
  "User": User,
  "Train": Train,
  "ShieldCheck": ShieldCheck,
  "Mountain": Mountain,
};

function PackageCard({ pkg }) {
  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-border/40 hover:border-primary/20 transition-all flex flex-col md:flex-row group md:h-[340px]">
      {/* Image Section */}
      <div className="md:w-[340px] lg:w-[400px] h-[260px] md:h-full relative overflow-hidden shrink-0">
        <img 
          src={pkg.image} 
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {pkg.badge && (
          <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
            <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">
              {pkg.badge}
            </span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="flex-1 p-8 md:p-10 flex flex-col relative">
        <div className="absolute top-10 right-10 flex items-center gap-1.5 bg-primary/5 px-3 py-1.5 rounded-full">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span className="text-[13px] font-black text-primary">{pkg.rating}</span>
        </div>

        <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3 leading-tight tracking-tight">
                {pkg.name}
            </h3>
            <p className="text-[15px] font-bold text-muted-foreground uppercase tracking-widest">
                {pkg.subtitle}
            </p>
        </div>

        <div className="mt-4">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">
                Included Amenities
            </p>
            <div className="flex flex-wrap gap-8">
                {pkg.amenities.map((item) => {
                    const Icon = amenityIcons[item.icon] || User;
                    return (
                        <div key={item.label} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-[13px] font-black text-muted-foreground">{item.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>

        <div className="mt-auto pt-8 flex items-end justify-between border-t border-border/30">
            <div className="flex flex-col">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                    From Total
                </span>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-foreground">${pkg.price.toLocaleString()}</span>
                    <span className="text-[14px] font-bold text-muted-foreground">/ person</span>
                </div>
            </div>

            <Button className="h-14 px-10 rounded-2xl text-lg font-black bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-transform active:scale-95">
                View Package
            </Button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
