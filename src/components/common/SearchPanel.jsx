import React from "react";
import assets from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  MapPin,
  Calendar,
  User,
  Plus,
  Minus,
  Plane,
  Building,
  Compass,
} from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const tabData = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Building },
  { id: "packages", label: "Packages", icon: Compass },
];

export function DestinationPickerField({ placeholder = "Where to?" }) {
  const [destination, setDestination] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex items-center w-full bg-transparent px-1 relative">
        <MapPin
          className="w-5 h-5 mr-2 text-primary shrink-0"
          strokeWidth={2.5}
        />

        <PopoverTrigger asChild>
          <input
            type="text"
            placeholder={placeholder}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onFocus={() => setOpen(true)}
            className="bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/70 w-full font-semibold focus:ring-0"
          />
        </PopoverTrigger>
      </div>

      <PopoverContent
        className="w-[380px] p-3 z-50 rounded-[20px] shadow-2xl"
        align="start"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <h4 className="font-bold text-foreground mb-3 px-2">
          Select a popular airport/region
        </h4>
        <div className="flex flex-col max-h-[320px] overflow-y-auto">
          {assets.popularDestinations.map((dest, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDestination(dest.region);
                setOpen(false);
              }}
              className="flex items-center w-full text-left p-2.5 rounded-xl hover:bg-secondary/10 transition-colors group"
            >
              <div className="bg-muted group-hover:bg-background border border-transparent group-hover:border-border/50 rounded-xl p-3 mr-4 shadow-sm transition-colors flex shrink-0 items-center justify-center">
                <MapPin className="w-5 h-5 text-foreground" strokeWidth={2} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="font-semibold text-foreground text-[15px] truncate">
                  {dest.region}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5 truncate">
                  {dest.airports}
                </span>
              </div>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function DatePickerField({ placeholder = "Add dates" }) {
  const [date, setDate] = React.useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center w-full bg-transparent border-none outline-none text-left focus:ring-0 px-1 hover:bg-transparent">
          <Calendar
            className="w-5 h-5 mr-2 text-primary shrink-0"
            strokeWidth={2.5}
          />
          <span
            className={`font-semibold truncate w-full ${date ? "text-foreground" : "text-muted-foreground/70"}`}
          >
            {date ? format(date, "PPP") : placeholder}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <CalendarUI
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export function DateRangePickerField({ placeholder = "Add dates" }) {
  const [date, setDate] = React.useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center w-full bg-transparent border-none outline-none text-left focus:ring-0 px-1 hover:bg-transparent">
          <Calendar
            className="w-5 h-5 mr-2 text-primary shrink-0"
            strokeWidth={2.5}
          />
          <span
            className={`font-semibold truncate w-full ${date?.from ? "text-foreground" : "text-muted-foreground/70"}`}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
                </>
              ) : (
                format(date.from, "LLL dd")
              )
            ) : (
              placeholder
            )}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-50" align="start">
        <CalendarUI
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}

export function TravelerPickerField({ showFlightClass = false }) {
  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [rooms, setRooms] = React.useState(1);
  const [flightClass, setFlightClass] = React.useState("Any class");

  const classes = [
    "Any class",
    "Economy",
    "Premium economy",
    "Business",
    "First class",
  ];
  const summary = `${adults + children} Traveler${adults + children > 1 ? "s" : ""}, ${rooms} Room`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center w-full bg-transparent border-none outline-none text-left focus:ring-0 px-1 hover:bg-transparent">
          <User
            className="w-5 h-5 mr-2 text-primary shrink-0"
            strokeWidth={2.5}
          />
          <span className="font-semibold truncate w-full text-foreground">
            {summary}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[340px] p-5 z-50 rounded-[28px] shadow-2xl"
        align="start"
      >
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold text-lg text-foreground tracking-tight">
                Room 1
              </h4>
            </div>

            {/* Adults */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm font-bold text-foreground">Adults</p>
                <p className="text-xs text-muted-foreground font-medium">
                  12+ years
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  disabled={adults <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-base font-bold w-4 text-center">
                  {adults}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                  onClick={() => setAdults(adults + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-bold text-foreground">Children</p>
                <p className="text-xs text-muted-foreground font-medium">
                  0-11 years
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  disabled={children === 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-base font-bold w-4 text-center">
                  {children}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                  onClick={() => setChildren(children + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full h-12 rounded-xl text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold transition-all duration-300"
              onClick={() => setRooms(rooms + 1)}
            >
              Add a room
            </Button>
          </div>

          {showFlightClass && (
            <>
              <div className="h-px w-full bg-border" />
              <div>
                <h4 className="font-bold text-lg text-foreground mb-4 tracking-tight">
                  Flight class
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {classes.map((cls) => (
                    <button
                      key={cls}
                      onClick={() => setFlightClass(cls)}
                      className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
                        flightClass === cls
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105 border border-primary"
                          : "bg-transparent border border-border text-foreground hover:border-primary/50 hover:bg-secondary/5"
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function SearchPanel() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto bg-card p-4 md:p-6 rounded-[32px] shadow-2xl w-full">
      <Tabs defaultValue="flights" className="w-full">
        {/* Tabs List */}
        <div className="flex justify-center w-full mb-8">
          <TabsList className="bg-background border border-border/50 p-1.5 rounded-full h-auto min-h-[56px] flex flex-wrap justify-center items-center shadow-sm">
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-2.5 capitalize rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-[15px] font-bold data-[state=active]:shadow-md text-muted-foreground hover:text-foreground hover:bg-muted/50 data-[state=active]:hover:bg-primary transition-all duration-300 mx-1"
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Flights Content */}
        <TabsContent value="flights" className="mt-0 outline-none">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-secondary/10 dark:bg-muted p-3 md:p-4 rounded-2xl flex flex-col justify-center border border-transparent hover:border-border transition-colors">
              <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                Destination
              </label>
              <DestinationPickerField placeholder="Where to?" />
            </div>

            <div className="bg-secondary/10 dark:bg-muted p-3 md:p-4 rounded-2xl flex flex-col justify-center border border-transparent hover:border-border transition-colors">
              <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                Dates
              </label>
              <DatePickerField placeholder="Add dates" />
            </div>

            <div className="bg-secondary/10 dark:bg-muted p-3 md:p-4 rounded-2xl flex flex-col justify-center border border-transparent hover:border-border transition-colors">
              <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                Travelers
              </label>
              <TravelerPickerField showFlightClass={true} />
            </div>

            <div className="flex md:block pt-2 md:pt-0 h-full">
              <Button 
                onClick={() => navigate('/flights')}
                className="w-full h-[68px] md:h-full rounded-2xl text-lg md:text-xl font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl shadow-secondary/20 transition-transform active:scale-95"
              >
                Search Flights
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Hotels Content */}
        <TabsContent value="hotels" className="mt-0 outline-none">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-secondary/10 dark:bg-muted p-3 md:p-4 rounded-2xl flex flex-col justify-center border border-transparent hover:border-border transition-colors">
              <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                Location
              </label>
              <DestinationPickerField placeholder="Where are you staying?" />
            </div>

            <div className="bg-secondary/10 dark:bg-muted p-3 md:p-4 rounded-2xl flex flex-col justify-center border border-transparent hover:border-border transition-colors">
              <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                Check in - Check out
              </label>
              <DateRangePickerField placeholder="Add dates" />
            </div>

            <div className="bg-secondary/10 dark:bg-muted p-3 md:p-4 rounded-2xl flex flex-col justify-center border border-transparent hover:border-border transition-colors">
              <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                Guests
              </label>
              <TravelerPickerField showFlightClass={false} />
            </div>

            <div className="flex md:block pt-2 md:pt-0 h-full">
              <Button className="w-full h-[68px] md:h-full rounded-2xl text-lg md:text-xl font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl shadow-secondary/20 transition-transform active:scale-95">
                Search Hotels
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Packages Content */}
        <TabsContent value="packages" className="mt-0 outline-none">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-secondary/10 dark:bg-muted p-3 md:p-4 rounded-2xl flex flex-col justify-center border border-transparent hover:border-border transition-colors col-span-1 md:col-span-2">
              <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                Tour Destination
              </label>
              <DestinationPickerField placeholder="Where do you want to explore?" />
            </div>

            <div className="bg-secondary/10 dark:bg-muted p-3 md:p-4 rounded-2xl flex flex-col justify-center border border-transparent hover:border-border transition-colors">
              <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                Travel Month
              </label>
              <DatePickerField placeholder="Add dates" />
            </div>

            <div className="flex md:block pt-2 md:pt-0 h-full">
              <Button className="w-full h-[68px] md:h-full rounded-2xl text-lg md:text-xl font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl shadow-secondary/20 transition-transform active:scale-95">
                Find Packages
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
