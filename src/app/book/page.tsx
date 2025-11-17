"use client";
import { usePlatformContext } from "@/_components/PlatformContext";
// TODO: Use <Suspense /> component to optimize this and other
// client-side-rendered pages to render everything EXCEPT dynamic content.

import BookingCalendar from "../../_components/BookingCalendar";

export default function Book() {
  const { currentStudioName } = usePlatformContext();

  return (
    <div className="m-4">
      {/* Add another location selector here */}
      <BookingCalendar
        dailyTitle={`Classes Available to Book at ${currentStudioName} on `}
        dailySubtitle={`Below are the classes you can book at the ${currentStudioName} location for the chosen day.`}
        monthlyTitle={`${currentStudioName} Location Class Schedule Date Picker`}
        monthlySubtitle={`Pick a date from the calendar to see the classes scheduled at the ${currentStudioName} location for any given day.`}
        isOnProfilePage={false}
      />
    </div>
  );
}
