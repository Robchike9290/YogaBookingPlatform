"use client";

import React, { useState } from "react";
import ProfileMetadata from "./_components/ProfileMetadata";
import Deals from "./_components/Deals";
import BookingCalendar from "../../_components/BookingCalendar";
import { usePlatformContext } from "@/_components/PlatformContext";
import LocationPicker from "@/_components/LocationPicker";
import { dummyClassData } from "@/lib/dummyData";
import { ClassData } from "@/types";

export default function Profile() {
  const { setCurrentStudioName, currentStudioName, currentUser } =
    usePlatformContext();
  const [bookedClasses, setBookedClasses] = useState<ClassData[]>([]);

  // TODO: Calculate bookings for location once backend is hooked up for real.
  const handleClickButton = () => {
    console.log("Pulling bookings for location...");
    const userClasses: ClassData[] = [];
    // TODO: Refine this function to only handle classes in current month once
    // data is real, this will blow up BIG TIME as classes are added.
    dummyClassData.forEach((bookableClass) => {
      if (
        bookableClass.participants.has(currentUser) &&
        bookableClass.location === currentStudioName
      ) {
        userClasses.push(bookableClass);
      }
    });

    setBookedClasses(userClasses);
  };

  const handleChangeStudioName = (event: any) => {
    const studioName = event.target.value;
    setCurrentStudioName(studioName);
  };

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
      {/* TODO: Update component to take custom string for button label */}
      <div className="text-blue-600 font-bold bg-blue-100 m-4 border-4 border-blue-300 rounded-lg">
        <LocationPicker
          handleClickButton={handleClickButton}
          handleChangeStudioName={handleChangeStudioName}
          buttonCta={"See classes booked at this location"}
        />
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
