import React from "react";
import { Star, ChevronRight, Heart, Share2, Image as ImageIcon } from "lucide-react";

function HotelHero({ hotel }) {
  return (
    <>
      {/* Top Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
          <span>Greece</span>
          <ChevronRight className="w-3 h-3" />
          <span>Santorini</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">{hotel.name}</span>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Title & Gallery */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter mb-2">
            {hotel.name}
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-[13px] font-bold text-muted-foreground">
              {hotel.location.split(" — ")[0]}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src={hotel.image}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              alt="Main"
            />
          </div>
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover"
              alt="Gallery"
            />
          </div>
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover"
              alt="Gallery"
            />
          </div>
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover"
              alt="Gallery"
            />
          </div>
          <div className="rounded-2xl overflow-hidden relative bg-primary">
            <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center text-white cursor-pointer hover:bg-primary transition-colors">
              <ImageIcon className="w-8 h-8 mb-2" />
              <span className="text-[11px] font-black uppercase tracking-widest">
                See All Photos
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelHero;
