import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  PlaneTakeoff,
  PlaneLanding,
  Clock,
  Info,
  ShieldCheck,
  ChevronRight,
  Briefcase,
  Check,
  X,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { flightResults } from "@/assets/assets";

function FlightDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedFare, setSelectedFare] = useState("Standard");

  // Find flight by ID (in a real app, you'd fetch this)
  const flight =
    flightResults.find((f) => f.id === parseInt(id)) || flightResults[0];

  const farePrices = {
    Light: flight.price - 140,
    Standard: flight.price,
    Flex: flight.price + 260,
  };

  const currentPrice = farePrices[selectedFare];

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] pb-20">
      {/* Top Header Section */}
      <div className="bg-white border-b border-border/40 pt-12 pb-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2 block">
                Flight {flight.airlineCode} • Boeing 787 Dreamliner
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                {flight.departure.airport.split(" • ")[1]} to{" "}
                {flight.arrival.airport.split(" • ")[1]}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content Area */}
          <div className="flex-1 space-y-10">
            {/* Flight Timeline Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40">
              <h2 className="text-xl font-black text-foreground mb-10">
                Flight Timeline
              </h2>

              <div className="relative space-y-0">
                {/* Vertical Line */}
                <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-border/40" />

                {/* Departure */}
                <div className="relative flex items-start gap-8 pb-12">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white z-10 shrink-0 shadow-lg shadow-primary/20">
                    <PlaneTakeoff className="w-6 h-6" />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-4">
                    <div>
                      <p className="text-3xl font-black text-foreground mb-1">
                        10:45
                      </p>
                      <p className="text-lg font-black text-foreground">
                        {flight.departure.airport}
                      </p>
                      <p className="text-[13px] font-bold text-muted-foreground mt-1">
                        Terminal 5, Gate B42
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-1">
                        Departure
                      </p>
                      <p className="text-[14px] font-bold text-foreground">
                        Oct 24, 2024
                      </p>
                    </div>
                  </div>
                </div>

                {/* Layover (Simulated) */}
                <div className="relative flex items-center gap-8 py-8 ml-[14px]">
                  <div className="w-[28px] h-[28px] rounded-full bg-muted flex items-center justify-center text-muted-foreground z-10 border-4 border-white">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 bg-secondary/5 border border-secondary/10 rounded-2xl p-6 flex items-center justify-between">
                    <div>
                      <p className="font-black text-foreground leading-tight">
                        Layover in Doha (DOH)
                      </p>
                      <p className="text-[13px] font-bold text-muted-foreground">
                        2h 15m connection time
                      </p>
                    </div>
                    <span className="bg-white px-3 py-1 rounded-lg text-[10px] font-black text-muted-foreground uppercase tracking-wider border border-border/40">
                      Self-Transfer
                    </span>
                  </div>
                </div>

                {/* Arrival */}
                <div className="relative flex items-start gap-8 pt-12">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white z-10 shrink-0 shadow-lg shadow-secondary/10">
                    <PlaneLanding className="w-6 h-6" />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-4">
                    <div>
                      <p className="text-3xl font-black text-foreground mb-1">
                        09:30{" "}
                        <span className="text-primary text-sm align-top">
                          +1 Day
                        </span>
                      </p>
                      <p className="text-lg font-black text-foreground">
                        {flight.arrival.airport}
                      </p>
                      <p className="text-[13px] font-bold text-muted-foreground mt-1">
                        Terminal 3
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-1">
                        Arrival
                      </p>
                      <p className="text-[14px] font-bold text-foreground">
                        Oct 25, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fare Options */}
            <div>
              <h2 className="text-xl font-black text-foreground mb-8">
                Fare Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Light */}
                <button
                  onClick={() => setSelectedFare("Light")}
                  className={`bg-white rounded-3xl p-8 border transition-all flex flex-col items-start text-left cursor-pointer active:scale-[0.98] ${
                    selectedFare === "Light"
                      ? "border-primary ring-4 ring-primary/5 shadow-xl shadow-primary/5"
                      : "border-border/40 hover:border-primary/20"
                  }`}
                >
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${selectedFare === "Light" ? "text-primary" : "text-muted-foreground"}`}
                  >
                    Light
                  </span>
                  <p className="text-3xl font-black text-foreground mb-8">
                    £{farePrices.Light}
                  </p>
                  <ul className="space-y-4 mb-2 text-left w-full">
                    <li className="flex items-center gap-3 text-[13px] font-bold text-foreground">
                      <Check className="w-4 h-4 text-primary" />1 Personal Item
                    </li>
                    <li className="flex items-center gap-3 text-[13px] font-bold text-muted-foreground/50">
                      <X className="w-4 h-4" />
                      No Checked Bag
                    </li>
                    <li className="flex items-center gap-3 text-[13px] font-bold text-muted-foreground/50">
                      <X className="w-4 h-4" />
                      Non-refundable
                    </li>
                  </ul>
                </button>

                {/* Standard */}
                <button
                  onClick={() => setSelectedFare("Standard")}
                  className={`bg-white rounded-3xl p-8 border transition-all flex flex-col items-start text-left relative cursor-pointer active:scale-[0.98] ${
                    selectedFare === "Standard"
                      ? "border-primary ring-4 ring-primary/5 shadow-xl shadow-primary/5 scale-[1.02]"
                      : "border-border/40 hover:border-primary/20 hover:scale-[1.01]"
                  }`}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1.5 rounded-full shadow-lg z-20">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">
                      Most Popular
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${selectedFare === "Standard" ? "text-primary" : "text-muted-foreground"}`}
                  >
                    Standard
                  </span>
                  <p className="text-3xl font-black text-foreground mb-8">
                    £{farePrices.Standard}
                  </p>
                  <ul className="space-y-4 mb-2 text-left w-full">
                    <li className="flex items-center gap-3 text-[13px] font-bold text-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      23kg Checked Bag
                    </li>
                    <li className="flex items-center gap-3 text-[13px] font-bold text-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Standard Seat Selection
                    </li>
                    <li className="flex items-center gap-3 text-[13px] font-bold text-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Partial Refundable
                    </li>
                  </ul>
                </button>

                {/* Flex */}
                <button
                  onClick={() => setSelectedFare("Flex")}
                  className={`bg-white rounded-3xl p-8 border transition-all flex flex-col items-start text-left cursor-pointer active:scale-[0.98] ${
                    selectedFare === "Flex"
                      ? "border-primary ring-4 ring-primary/5 shadow-xl shadow-primary/5"
                      : "border-border/40 hover:border-primary/20"
                  }`}
                >
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${selectedFare === "Flex" ? "text-primary" : "text-muted-foreground"}`}
                  >
                    Flex
                  </span>
                  <p className="text-3xl font-black text-foreground mb-8">
                    £{farePrices.Flex}
                  </p>
                  <ul className="space-y-4 mb-2 text-left w-full">
                    <li className="flex items-center gap-3 text-[13px] font-bold text-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      2x 23kg Checked Bags
                    </li>
                    <li className="flex items-center gap-3 text-[13px] font-bold text-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Premium Seat Selection
                    </li>
                    <li className="flex items-center gap-3 text-[13px] font-bold text-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Fully Refundable
                    </li>
                  </ul>
                </button>
              </div>
            </div>

            {/* Baggage Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-10 border border-border/40 shadow-sm">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-8">
                  <Briefcase className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-4">
                  Carry-on Allowance
                </h3>
                <p className="text-sm font-bold text-muted-foreground leading-relaxed mb-6">
                  Included for all fares. Must fit in the overhead bin or under
                  the seat in front of you.
                </p>
                <div className="flex gap-2">
                  <span className="bg-muted px-2 py-1 rounded text-[10px] font-black uppercase text-muted-foreground">
                    Max 8kg
                  </span>
                  <span className="bg-muted px-2 py-1 rounded text-[10px] font-black uppercase text-muted-foreground">
                    55 × 40 × 23 cm
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-10 border border-border/40 shadow-sm">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-8">
                  <Briefcase className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-4">
                  Checked Baggage
                </h3>
                <p className="text-sm font-bold text-muted-foreground leading-relaxed mb-6">
                  Standard and Flex fares include checked baggage. Additional
                  bags can be added at checkout.
                </p>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-black uppercase">
                    Included
                  </span>
                  <span className="bg-muted px-2 py-1 rounded text-[10px] font-black uppercase text-muted-foreground">
                    Max 23kg
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Pricing */}
          <div className="lg:w-[400px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-3xl p-10 border border-border/40 shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
                <h3 className="text-xl font-black text-foreground mb-8 tracking-tight">
                  Price Breakdown
                </h3>

                <div className="space-y-5 pb-8 border-b border-border/40">
                  <div className="flex justify-between items-center text-[14px] font-bold">
                    <span className="text-muted-foreground">
                      Base Fare ({selectedFare})
                    </span>
                    <span className="text-foreground">
                      £{currentPrice - 156}.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[14px] font-bold">
                    <span className="text-muted-foreground">Taxes & Fees</span>
                    <span className="text-foreground">$156.00</span>
                  </div>
                  <div className="flex justify-between items-center text-[14px] font-bold">
                    <span className="text-muted-foreground">
                      Booking Service
                    </span>
                    <span className="text-foreground">$0.00</span>
                  </div>
                </div>

                <div className="py-10">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">
                    Total Price
                  </p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-5xl font-black text-foreground tracking-tighter">
                      £{currentPrice}.00
                    </p>
                    <span className="text-[11px] font-bold text-muted-foreground">
                      All taxes included
                    </span>
                  </div>
                </div>

                <Button className="w-full h-16 rounded-2xl text-lg font-black bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl shadow-secondary/20 transition-all active:scale-95">
                  Continue to Booking
                </Button>

                <p className="text-[10px] text-center text-muted-foreground mt-6 leading-relaxed px-4">
                  By clicking "Continue to Booking", you agree to our{" "}
                  <span className="underline cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>

              {/* Travel Insurance Banner */}
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 flex items-start gap-4">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[13px] font-black text-foreground mb-1 uppercase tracking-tight">
                    Travel Insurance
                  </p>
                  <p className="text-[12px] font-bold text-muted-foreground leading-relaxed">
                    Protected by Aerial Safeguard. Guaranteed compensation for
                    delays over 2 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetails;
