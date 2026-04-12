import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  hotelResults,
  hotelRoomTypes,
  hotelDetailAmenities,
} from "@/assets/assets";
import HotelHero from "@/components/hotel-details/HotelHero";
import HotelOverview from "@/components/hotel-details/HotelOverview";
import HotelAmenities from "@/components/hotel-details/HotelAmenities";
import HotelRoomSelector from "@/components/hotel-details/HotelRoomSelector";
import BookingSidebar from "@/components/hotel-details/BookingSidebar";

function HotelDetails() {
  const { id } = useParams();
  const [selectedRoom, setSelectedRoom] = useState("Aegean Deluxe");

  // Find hotel by ID
  const hotel =
    hotelResults.find((h) => h.id === parseInt(id)) || hotelResults[0];

  const selectedRoomData =
    hotelRoomTypes.find((r) => r.name === selectedRoom) || hotelRoomTypes[1];
  const roomPriceTotal = selectedRoomData.price * 5;
  const totalPrice = roomPriceTotal + 120 + 45;

  return (
    <div className="w-full min-h-screen bg-white pb-20">
      <HotelHero hotel={hotel} />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-16 flex flex-col lg:flex-row gap-16">
        {/* Left Column */}
        <div className="flex-1">
          <HotelOverview hotelName={hotel.name} />
          <HotelAmenities amenities={hotelDetailAmenities} />
          <HotelRoomSelector
            rooms={hotelRoomTypes}
            selectedRoom={selectedRoom}
            onSelectRoom={setSelectedRoom}
          />
        </div>

        {/* Right Column / Sidebar */}
        <BookingSidebar
          selectedRoom={selectedRoom}
          roomPrice={roomPriceTotal}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default HotelDetails;
