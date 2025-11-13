"use client";

import DailyClassCalendar from "@/_components/DailyClassCalendar";
import MonthlyClassCalendar from "@/_components/MonthlyClassCalendar";
import { usePlatformContext } from "@/_components/PlatformContext";
import { formatDateString, getDateParts } from "@/utils";
import React, { useEffect } from "react";

export default function BookingCalendar() {
  const { currentDate, setCurrentDate } = usePlatformContext();

  useEffect(() => {
    const today = new Date();
    const [month, day, year] = getDateParts(today);

    setCurrentDate(`${month}/${day}/${year}`);
  }, []);

  return (
    <div className="m-4 grid grid-cols-6 rounded-lg border-4 border-blue-300 bg-blue-100 text-blue-600">
      <MonthlyClassCalendar
        title={"Booking Calendar"}
        setCurrentDate={setCurrentDate}
      />
      {/* TODO: Make this actually populate classes on calendar click */}
      <DailyClassCalendar
        title={"Classes Available For: "}
        currentDate={currentDate}
      />
    </div>
  );
}
