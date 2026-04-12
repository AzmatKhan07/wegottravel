import React from "react";
import { features } from "@/assets/assets";

function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mb-6 md:mb-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-secondary/20 group-hover:shadow-lg shadow-secondary/10">
                <feature.icon
                  className="w-7 h-7 md:w-8 md:h-8 text-primary transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="text-xl md:text-[22px] font-black text-foreground mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[14px] md:text-[15px] font-medium text-muted-foreground leading-relaxed px-2 md:px-0 lg:px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
