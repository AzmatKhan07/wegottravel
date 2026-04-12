import React from "react";
import { Calendar, Users, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function BookingSidebar({ selectedRoom, pricePerHour, roomPrice, totalPrice }) {
  return (
    <div className="lg:w-[400px]">
      <div className="sticky top-24 space-y-6">
        <div className="bg-white rounded-3xl overflow-hidden border border-border/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]">
          <div className="h-1.5 bg-primary" />
          <div className="p-10">
            <h3 className="text-[13px] font-black text-primary uppercase tracking-[0.2em] mb-10">
              Booking Details
            </h3>

            <div className="space-y-6 mb-10">
              <div>
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2 block">
                  Stay Dates
                </label>
                <div className="bg-muted/40 p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-muted transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-black text-foreground uppercase">
                      Sep 14 - Sep 19
                    </span>
                    <span className="text-[11px] font-bold text-muted-foreground">
                      5 Nights
                    </span>
                  </div>
                  <Calendar className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2 block">
                  Guests
                </label>
                <div className="bg-muted/40 p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-muted transition-colors">
                  <span className="text-[13px] font-black text-foreground uppercase">
                    2 Adults
                  </span>
                  <Users className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>

            <div className="space-y-4 pb-8 border-b border-border/40">
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest">
                  {selectedRoom} (5 nights)
                </span>
                <span className="text-[15px] font-black text-foreground">
                  ${roomPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest">
                  Service Fee
                </span>
                <span className="text-[15px] font-black text-foreground">
                  $120
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest">
                  Local Taxes
                </span>
                <span className="text-[15px] font-black text-foreground">
                  $45
                </span>
              </div>
            </div>

            <div className="py-10 flex items-center justify-between">
              <h4 className="text-3xl font-black text-foreground uppercase tracking-tighter">
                Total
              </h4>
              <div className="text-right">
                <p className="text-3xl font-black text-primary">
                  ${totalPrice.toLocaleString()}
                </p>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">
                  Fully refundable until Sep 10
                </p>
              </div>
            </div>

            <Button className="w-full h-16 rounded-2xl text-lg font-black bg-primary hover:bg-[#004dc9] text-white shadow-2xl shadow-primary/20 transition-all active:scale-95">
              Book Now
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.1em]">
                Best Price Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* Help Banner */}
        <div className="bg-muted/40 rounded-3xl p-8 flex items-center gap-5 border border-border group cursor-pointer hover:bg-muted transition-all">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
              Need help?
            </p>
            <p className="text-[13px] font-black text-foreground uppercase group-hover:text-primary transition-colors">
              Contact our Concierge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSidebar;
