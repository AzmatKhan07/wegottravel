import React from "react";
import { Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

function HotelRoomSelector({ rooms, selectedRoom, onSelectRoom }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl md:text-2xl font-black text-foreground">
          Select Your Sanctuary
        </h2>
        <span className="bg-secondary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
          {rooms.length} Types Available
        </span>
      </div>
      <div className="space-y-6">
        {rooms.map((room) => (
          <div
            key={room.name}
            className={`bg-white border rounded-3xl overflow-hidden flex flex-col md:flex-row transition-all relative ${
              selectedRoom === room.name
                ? "border-primary ring-4 ring-primary/5 shadow-xl shadow-primary/5"
                : "border-border/60 hover:border-primary/20"
            }`}
          >
            {room.popular && (
              <div className="absolute top-4 left-4 z-10 bg-primary px-3 py-1 rounded-lg shadow-sm">
                <span className="text-[9px] font-black text-white uppercase tracking-widest">
                  Most Popular
                </span>
              </div>
            )}
            <div className="md:w-[240px] h-[200px] md:h-auto shrink-0 relative overflow-hidden">
              <img
                src={room.image}
                className="w-full h-full object-cover"
                alt={room.name}
              />
            </div>
            <div className="flex-1 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-md">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-xl font-extrabold text-foreground">
                    {room.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black text-primary">
                      £{room.price}
                    </span>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase">
                      /Night
                    </span>
                  </div>
                </div>
                <p className="text-[13px] font-medium text-muted-foreground leading-relaxed mb-4">
                  {room.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                  {room.specs.includes("WIFI") && (
                    <Wifi className="w-3.5 h-3.5" />
                  )}
                  {room.specs}
                </div>
              </div>
              <div className="shrink-0 w-full lg:w-auto">
                {selectedRoom === room.name ? (
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-[11px] font-black text-primary uppercase tracking-widest">
                      You've selected this sanctuary
                    </span>
                    <Button
                      disabled
                      className="w-full lg:w-[160px] h-12 rounded-xl bg-primary/40 text-white font-black"
                    >
                      Selected
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => onSelectRoom(room.name)}
                    variant="secondary"
                    className="w-full lg:w-[160px] h-12 rounded-xl bg-muted hover:bg-primary/5 text-foreground hover:text-primary font-black uppercase tracking-widest transition-all"
                  >
                    Select Room
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelRoomSelector;
