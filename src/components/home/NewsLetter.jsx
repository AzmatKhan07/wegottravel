import React from "react";

function NewsLetter() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full bg-primary rounded-[24px] md:rounded-[32px] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 bg-gradient-to-r from-primary to-[#0061e3] shadow-xl overflow-hidden relative">
          {/* Subtle Lighting Decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

          {/* Text Area */}
          <div className="flex-1 w-full relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-[44px] lg:text-[52px] font-black text-white leading-[1.1] mb-4 tracking-tight max-w-xl mx-auto lg:mx-0">
              The Horizon awaits in
              <br className="hidden lg:block" /> your inbox.
            </h2>
            <p className="text-[15px] md:text-lg text-white/90 font-medium max-w-md mx-auto lg:mx-0">
              Curated itineraries and exclusive member deals, delivered weekly.
            </p>
          </div>

          {/* Form Area */}
          <div className="w-full lg:w-[480px] shrink-0 relative z-10">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center w-full bg-white rounded-xl md:rounded-full p-2 shadow-lg hover:shadow-xl focus-within:ring-[4px] focus-within:ring-white/20 transition-all duration-300"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border-none outline-none px-4 md:px-6 py-3 md:py-4 text-foreground placeholder:text-muted-foreground font-medium text-[15px]"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-[#004bb5] text-white font-bold rounded-lg md:rounded-full px-8 py-3.5 md:py-4 transition-colors shadow-sm ml-2 whitespace-nowrap active:scale-95"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
