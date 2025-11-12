import React from "react";
import ProfileMetadata from "./_components/ProfileMetadata";
import Deals from "./_components/Deals";
import BookingCalendar from "./_components/BookingCalendar";

export default function Profile() {
  return (
    <div className="grid grid-cols-5 grid-rows-2 text-blue-600">
      <ProfileMetadata />
      <Deals />
      {/* TODO: Pass the name of the user and studio to the booking calendar as a prop or via context */}
      <BookingCalendar />
    </div>
  );
}
