import React from "react";
import ProfileMetadata from "./_components/ProfileMetadata";
import Deals from "./_components/Deals";
import BookingCalendar from "../../_components/BookingCalendar";

export default function Profile() {
  return (
    <>
      <div className="flex text-blue-600">
        <div className="flex-1">
          <ProfileMetadata />
        </div>
        <div className="flex-1">
          <Deals />
        </div>
      </div>
      <div className="m-4">
        {/* TODO: Pass the name of the user and studio to the booking calendar as a prop or via context */}
        <BookingCalendar
          dailyTitle={"My Booked Classes for "}
          dailySubtitle={`Below are the classes you have booked for the selected day.`}
          monthlyTitle={"Booked Class Schedule Date Picker"}
          monthlySubtitle={
            "Pick a date from the calendar to see the classes you have booked for any given day."
          }
        />
      </div>
    </>
  );
}
