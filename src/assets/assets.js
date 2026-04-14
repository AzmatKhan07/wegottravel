import HeroSection from "./HeroSection.png";
import { BadgeCheck, Headset, CalendarCheck } from "lucide-react";
import Logo from "./logo.png";

export const assets = {
  Logo,
};

export const popularDestinations = [
  {
    region: "London Airports",
    airports: "London (LCY, LGW, LHR, LTN, SEN, STN)",
  },
  {
    region: "Midlands Airports",
    airports: "Birmingham (BHX), Nottingham (EMA)",
  },
  {
    region: "North West Airports",
    airports: "Liverpool (LPL), Manchester (MAN)",
  },
  {
    region: "Scotland Airports",
    airports: "Aberdeen (ABZ), Edinburgh (EDI), Glasgow (GLA, PIK)",
  },
  {
    region: "South West Airports",
    airports:
      "Bournemouth (BOH), Bristol (BRS), Cardiff (CWL), Cornwall (NQY), Exeter (EXT), Southampton (SOU)",
  },
  {
    region: "North East Airports",
    airports: "Leeds-Bradford (LBA), Newcastle (NCL)",
  },
];

export const deals = [
  {
    id: 1,
    title: "Santorini Escape",
    originalPrice: "£2,400",
    discountedPrice: "£1,440",
    description: "7 Nights • Flight + 5★ Hotel",
    badge: "-40% TODAY",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Maldives Serenity",
    originalPrice: "£4,100",
    discountedPrice: "£3,250",
    description: "5 Nights • All-Inclusive Luxury",
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Parisian Weekend",
    originalPrice: "£1,200",
    discountedPrice: "£850",
    description: "3 Nights • Boutique Experience",
    badge: "LAST MINUTE",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Swiss Alps Retreat",
    originalPrice: "£3,500",
    discountedPrice: "£2,800",
    description: "6 Nights • Ski Resort & Spa",
    badge: "WINTER SPECIAL",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=600",
  },
];

export const curatedCollections = [
  {
    id: 1,
    city: "Venice, Italy",
    properties: "128 Properties",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800",
    isLarge: true,
  },
  {
    id: 2,
    city: "Bali, Indonesia",
    properties: "94 Properties",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    isLarge: false,
  },
  {
    id: 3,
    city: "Reykjavík, Iceland",
    properties: "56 Properties",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800",
    isLarge: false,
  },
];

export const features = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "Best Price Guarantee",
    description:
      "Find a lower price elsewhere and we'll beat it by 10%. We ensure your journey starts with value.",
  },
  {
    id: 2,
    icon: Headset,
    title: "24/7 Digital Concierge",
    description:
      "Our premium support team is available around the clock to handle every detail of your itinerary.",
  },
  {
    id: 3,
    icon: CalendarCheck,
    title: "Flexible Booking",
    description:
      "Change your plans up to 48 hours before departure. Life happens—we understand.",
  },
];

export const flightResults = [
  {
    id: 1,
    airline: "Air France",
    airlineCode: "AF 007",
    logoUrl: "https://images.kiwi.com/airlines/64/AF.png",
    departure: {
      time: "19:30",
      airport: "JFK • NEW YORK",
    },
    arrival: {
      time: "08:15",
      airport: "CDG • PARIS",
    },
    duration: "7H 45M",
    stops: "NON-STOP",
    price: 842,
  },
  {
    id: 2,
    airline: "Delta",
    airlineCode: "DL 126",
    logoUrl: "https://images.kiwi.com/airlines/64/DL.png",
    departure: {
      time: "21:15",
      airport: "EWR • NEWARK",
    },
    arrival: {
      time: "10:25",
      airport: "ORY • PARIS",
    },
    duration: "8H 10M",
    stops: "NON-STOP",
    price: 785,
  },
  {
    id: 3,
    airline: "Lufthansa",
    airlineCode: "LH 400",
    logoUrl: "https://images.kiwi.com/airlines/64/LH.png",
    departure: {
      time: "15:45",
      airport: "JFK • NEW YORK",
    },
    arrival: {
      time: "05:00",
      airport: "FRA • FRANKFURT",
    },
    duration: "7H 15M",
    stops: "NON-STOP",
    price: 920,
  },
  {
    id: 4,
    airline: "Delta",
    airlineCode: "DL 190",
    logoUrl: "https://images.kiwi.com/airlines/64/DL.png",
    departure: {
      time: "08:15",
      airport: "JFK • NEW YORK",
    },
    arrival: {
      time: "20:45",
      airport: "CDG • PARIS",
    },
    duration: "11H 30M",
    stops: "1 STOP",
    price: 650,
  },
  {
    id: 5,
    airline: "Air France",
    airlineCode: "AF 010",
    logoUrl: "https://images.kiwi.com/airlines/64/AF.png",
    departure: {
      time: "23:30",
      airport: "JFK • NEW YORK",
    },
    arrival: {
      time: "12:50",
      airport: "CDG • PARIS",
    },
    duration: "8H 20M",
    stops: "NON-STOP",
    price: 800,
  },
];

export const flightFilters = {
  stops: [
    { id: "direct", label: "Direct", price: "£840" },
    { id: "1stop", label: "1 Stop", price: "£620" },
    { id: "2stops", label: "2+ Stops", price: "£450" },
  ],
  airlines: [
    { id: "af", label: "Air France" },
    { id: "dl", label: "Delta" },
    { id: "lh", label: "Lufthansa" },
  ],
};

export const hotelResults = [
  {
    id: 1,
    name: "Grand Hotel Convento di Amalfi",
    rating: 5,
    location: "Amalfi, Italy — 0.5 miles from center",
    price: 4820,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    badge: "ELITE CHOICE",
    amenities: ["Pool", "Luxury Spa", "Michelin Star Dining"],
    totalNights: 7,
    remainingRooms: 2,
  },
  {
    id: 2,
    name: "Casa Angelina Boutique",
    rating: 4,
    location: "Praiano, Italy — 2.1 miles from center",
    price: 3150,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    amenities: ["Free WiFi", "Fitness Center", "Private Beach"],
    totalNights: 7,
    freeCancellation: true,
  },
  {
    id: 3,
    name: "Villa Felice Relais",
    rating: 4,
    location: "Amalfi, Italy — 0.8 miles from center",
    price: 2410,
    image:
      "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800",
    amenities: ["Breakfast Included", "Free Parking"],
    totalNights: 7,
    tag: "Great Value",
  },
  {
    id: 4,
    name: "Le Sirenuse Positano",
    rating: 5,
    location: "Positano, Italy — 0.1 miles from center",
    price: 6200,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    badge: "LUXURY STAY",
    amenities: ["Pool", "Spa", "Gym", "WIFI"],
    totalNights: 5,
    remainingRooms: 1,
  },
  {
    id: 5,
    name: "Hotel Santa Caterina",
    rating: 5,
    location: "Amalfi, Italy — 1.2 miles from center",
    price: 4100,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    amenities: ["Private Beach", "Pool", "Gym"],
    totalNights: 6,
    freeCancellation: true,
  },
  {
    id: 6,
    name: "Monastero Santa Rosa",
    rating: 4,
    location: "Conca dei Marini — 3.0 miles from center",
    price: 1850,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    tag: "Editor's Choice",
    amenities: ["Spa", "WIFI", "Free Parking"],
    totalNights: 4,
  },
];

export const hotelFilters = {
  starRating: [
    { id: "5", label: "5 Stars" },
    { id: "4plus", label: "4+ Stars" },
    { id: "3plus", label: "3+ Stars" },
  ],
  amenities: ["Pool", "WIFI", "Gym", "Spa", "Beach Front"],
};

export const hotelRoomTypes = [
  {
    name: "Atelier Standard",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    description:
      "Minimalist haven with caldera side-views. Includes private balcony and artisan coffee station.",
    specs: "1 KING • 35 M² • FREE WIFI",
  },
  {
    name: "Aegean Deluxe",
    price: 720,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    description:
      "Uninterrupted panoramic views of the Caldera. Featuring a private heated plunge pool and indoor fireplace.",
    specs: "1 KING • PRIVATE POOL • FREE BREAKFAST",
    popular: true,
  },
  {
    name: "Infinity Penthouse",
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800",
    description:
      "The pinnacle of luxury. 120m² of space with private chef services and 360-degree sunset views.",
    specs: "2 KING • PRIVATE CHEF • ALL-INCLUSIVE",
  },
];

export const hotelDetailAmenities = [
  { label: "Signature Spa", icon: "ShieldCheck" },
  { label: "Infinity Pool", icon: "Waves" },
  { label: "High-Speed WIFI", icon: "Wifi" },
  { label: "Fine Dining", icon: "Utensils" },
  { label: "Gym Loft", icon: "Dumbbell" },
  { label: "Sunset Bar", icon: "Utensils" },
  { label: "Concierge", icon: "User" },
  { label: "Transfer", icon: "Car" },
];

export const packageResults = [
  {
    id: 1,
    name: "Amalfi Coast Retreat",
    subtitle: "7 Nights • Positano & Capri",
    rating: 4.9,
    price: 3450,
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
    badge: "BEST SELLER",
    type: "Beach",
    class: "4star",
    amenities: [
      { label: "Flights", icon: "Plane" },
      { label: "Hotel", icon: "Hotel" },
      { label: "Breakfast", icon: "Utensils" },
    ],
  },
  {
    id: 2,
    name: "Golden Triangle Heritage",
    subtitle: "10 Nights • Delhi, Agra & Jaipur",
    rating: 4.8,
    price: 2890,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    type: "City",
    class: "5star",
    amenities: [
      { label: "Flights", icon: "Plane" },
      { label: "Chauffeur", icon: "Car" },
      { label: "Guide", icon: "User" },
    ],
  },
  {
    id: 3,
    name: "Swiss Alpine Odyssey",
    subtitle: "5 Nights • Zermatt & Interlaken",
    rating: 5.0,
    price: 4100,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
    type: "Mountains",
    class: "boutique",
    amenities: [
      { label: "Rail Pass", icon: "Train" },
      { label: "Boutique Spa", icon: "ShieldCheck" },
      { label: "Glacier Tour", icon: "Mountain" },
    ],
  },
  {
    id: 4,
    name: "Kenyan Safari Expedition",
    subtitle: "6 Nights • Masai Mara & Amboseli",
    rating: 4.9,
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    badge: "LIMITED SLOTS",
    type: "Safari",
    class: "5star",
    amenities: [
      { label: "Flights", icon: "Plane" },
      { label: "All Meals", icon: "Utensils" },
      { label: "Guided Safari", icon: "Car" },
    ],
  },
  {
    id: 5,
    name: "Kyoto Zen Discovery",
    subtitle: "8 Nights • Temples & Tea Houses",
    rating: 4.7,
    price: 3100,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    type: "City",
    class: "boutique",
    amenities: [
      { label: "Hotel", icon: "Hotel" },
      { label: "Guide", icon: "User" },
      { label: "Wellness", icon: "ShieldCheck" },
    ],
  },
  {
    id: 6,
    name: "Maldives Island Escape",
    subtitle: "5 Nights • Private Water Villa",
    rating: 5.0,
    price: 7800,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
    badge: "ELITE STAY",
    type: "Beach",
    class: "5star",
    amenities: [
      { label: "Flights", icon: "Plane" },
      { label: "Resort", icon: "Hotel" },
      { label: "Spa", icon: "ShieldCheck" },
    ],
  },
  {
    id: 7,
    name: "Patagonia Peaks Trek",
    subtitle: "12 Nights • Torres del Paine",
    rating: 4.8,
    price: 4950,
    image:
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=800",
    type: "Mountains",
    class: "4star",
    amenities: [
      { label: "Trek Guide", icon: "User" },
      { label: "Gear", icon: "Mountain" },
      { label: "Eco Lodge", icon: "Hotel" },
    ],
  },
  {
    id: 8,
    name: "Iceland Northern Lights",
    subtitle: "7 Nights • Reykjavik & Vik",
    rating: 4.9,
    price: 3600,
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800",
    type: "Mountains",
    class: "4star",
    amenities: [
      { label: "Chauffeur", icon: "Car" },
      { label: "Tours", icon: "Mountain" },
      { label: "Hotel", icon: "Hotel" },
    ],
  },
  {
    id: 9,
    name: "Dubai Luxury Weekend",
    subtitle: "3 Nights • Downtown & Desert",
    rating: 4.6,
    price: 1950,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    type: "City",
    class: "5star",
    amenities: [
      { label: "Flights", icon: "Plane" },
      { label: "Luxury Hotel", icon: "Hotel" },
      { label: "Safari", icon: "Car" },
    ],
  },
];

export const packageFilters = {
  types: ["Beach", "City", "Mountains", "Safari"],
  classes: [
    { id: "5star", label: "5 Star Excellence" },
    { id: "4star", label: "4 Star Premium" },
    { id: "boutique", label: "Boutique Stays" },
  ],
};

export default {
  HeroSection,
  popularDestinations,
  deals,
  curatedCollections,
  features,
  flightResults,
  flightFilters,
  hotelResults,
  hotelFilters,
  hotelRoomTypes,
  hotelDetailAmenities,
  packageResults,
  packageFilters,
  assets,
};
