import React from "react";
import { ArrowRight } from "lucide-react";
import { deals } from "@/assets/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function DealsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
        <div>
          <h3 className="text-primary font-black text-[11px] md:text-xs tracking-[0.2em] uppercase mb-3">
            Limited Availability
          </h3>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
            Unmissable Deals
          </h2>
        </div>
        <a
          href="#"
          className="group inline-flex items-center text-primary font-bold text-[15px] hover:text-primary/80 transition-colors"
        >
          View all offers
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {deals.map((deal) => (
            <CarouselItem
              key={deal.id}
              className="pl-4 md:pl-6 basis-[85%] md:basis-1/2 lg:basis-1/3"
            >
              <div className="group cursor-pointer flex flex-col gap-5 h-full">
                {/* Image Wrapper */}
                <div className="relative w-full overflow-hidden rounded-[24px] aspect-[4/3] shadow-md">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] md:text-[11px] font-black text-primary uppercase tracking-wider shadow-sm">
                    {deal.badge}
                  </div>
                </div>

                {/* Info Content */}
                <div className="flex flex-col px-1">
                  {/* Top Row: Title & Old Price */}
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[19px] md:text-xl font-bold text-foreground">
                      {deal.title}
                    </h3>
                    <span className="text-xs md:text-sm font-bold text-muted-foreground line-through decoration-muted-foreground/60 shrink-0">
                      {deal.originalPrice}
                    </span>
                  </div>

                  {/* Bottom Row: Subtitle & New Price */}
                  <div className="flex justify-between items-end">
                    <p className="text-[13px] md:text-sm text-muted-foreground font-medium pr-4">
                      {deal.description}
                    </p>
                    <span className="text-2xl md:text-[28px] font-black text-primary leading-none shrink-0">
                      {deal.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Overlays (Desktop Only) */}
        <div className="hidden lg:block">
          <CarouselPrevious className="-left-6 xl:-left-12 !top-[40%] w-14 h-14 bg-background border-border/50 shadow-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-0" />
          <CarouselNext className="-right-6 xl:-right-12 !top-[40%] w-14 h-14 bg-background border-border/50 shadow-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-0" />
        </div>
      </Carousel>
    </section>
  );
}

export default DealsSection;
