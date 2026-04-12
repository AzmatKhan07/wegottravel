import React from "react";
import { Button } from "@/components/ui/button";

function HotelOverview({ hotelName }) {
  return (
    <section className="mb-16">
      <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-6">
        Overview
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Perched on the rim of the volcanic caldera, {hotelName} offers an
        ethereal escape into the heart of Oia. Our architectural
        philosophy blends traditional Cycladic craftsmanship with modern
        minimalist elegance. Each suite serves as a private balcony to the
        world's most famous sunsets, providing a breathable journey
        through light, air, and salt.
      </p>
      <div className="mt-8 rounded-3xl overflow-hidden border border-border h-[280px] relative group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12668.614838320436!2d25.3698068!3d36.4619711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cc8c76049a4f%3A0xe67bc561fae7f951!2sOia%2C%20Santorini!5e0!3m2!1sen!2sgr!4v1712836200000!5m2!1sen!2sgr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-6 left-6 pointer-events-none">
          <Button
            variant="secondary"
            className="bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest pointer-events-auto"
          >
            Explore Neighborhood
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HotelOverview;
