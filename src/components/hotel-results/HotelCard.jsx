import React from "react";
import { Star, MapPin, Heart, Wifi, Car, Utensils, Waves, Dumbbell, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const amenityIcons = {
  "Pool": Waves,
  "Free WiFi": Wifi,
  "WIFI": Wifi,
  "Luxury Spa": ShieldCheck,
  "Michelin Star Dining": Utensils,
  "Fitness Center": Dumbbell,
  "Private Beach": Waves,
  "Breakfast Included": Utensils,
  "Free Parking": Car,
  "Gym": Dumbbell,
  "Spa": ShieldCheck,
  "Beach Front": Waves,
};

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-border/40 hover:border-primary/20 transition-all flex flex-col md:flex-row group md:h-[280px]">
      {/* Image Section */}
      <div className="md:w-[320px] lg:w-[380px] h-[240px] md:h-full relative overflow-hidden shrink-0">
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {hotel.badge && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-border/20">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.15em]">
              {hotel.badge}
            </span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between border-r border-border/30">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3.5 h-3.5 ${i < hotel.rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`} 
                />
              ))}
            </div>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-foreground mb-2 leading-tight">
            {hotel.name}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4 shrink-0 text-primary" />
            <span className="text-[14px] font-medium">{hotel.location}</span>
          </div>

          <div className="flex flex-wrap gap-6 mt-auto">
            {hotel.amenities.map((amenity) => {
              const Icon = amenityIcons[amenity] || ShieldCheck;
              return (
                <div key={amenity} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-[13px] font-bold text-muted-foreground">{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="md:w-[220px] lg:w-[260px] bg-secondary/5 p-6 md:p-8 flex flex-col items-center justify-center gap-4 shrink-0 text-center">
        <div>
          <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
            Total for {hotel.totalNights} nights
          </p>
          <p className="text-3xl font-black text-foreground">
            £{hotel.price.toLocaleString()}
          </p>
          <p className="text-[12px] font-medium text-muted-foreground mt-1">
            Includes taxes & fees
          </p>
        </div>

        <Button 
          onClick={() => navigate(`/hotels/${hotel.id}`)}
          className="w-full h-14 rounded-xl text-lg font-black bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl shadow-secondary/10 transition-transform active:scale-95 mt-2"
        >
          View Deal
        </Button>

        {hotel.remainingRooms && (
          <p className="text-[12px] font-bold text-destructive">
            Only {hotel.remainingRooms} rooms left!
          </p>
        )}
        {hotel.freeCancellation && (
          <p className="text-[12px] font-bold text-success text-green-600">
            Free Cancellation
          </p>
        )}
        {hotel.tag && (
          <p className="text-[12px] font-bold text-primary">
            {hotel.tag}
          </p>
        )}
      </div>
    </div>
  );
}

export default HotelCard;
