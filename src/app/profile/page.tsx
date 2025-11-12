import React from "react";
import ProfileMetadata from "./_components/ProfileMetadata";
import Deals from "./_components/Deals";
import BookingCalendar from "./_components/BookingCalendar";

export default function Profile() {
  return (
    <div className="grid grid-cols-5 grid-rows-2 text-blue-600">
      <ProfileMetadata />
      <Deals />
      <BookingCalendar />
    </div>
  );
}
