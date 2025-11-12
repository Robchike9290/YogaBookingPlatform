"use client";

import DailyClassCalendar from "@/_components/DailyClassCalendar";
import MonthlyClassCalendar from "@/_components/MonthlyClassCalendar";
import { formatDateString, getDateParts } from "@/utils";
import React, { useState, useEffect } from "react";

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(Date());

  useEffect(() => {
    const today = new Date();
    const [month, day, year] = getDateParts(today);

    setCurrentDate(`${month}/${day}/${year}`);
  }, []);

  const handleClickDay = (
    date: Date,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const formattedDateString = formatDateString(date);
    setCurrentDate?.(formattedDateString);
  };

  return (
    // TODO: Get rid of giant gap above this element.
    <div className="col-span-5 col-start-1 row-span-1 row-start-2 m-4 rounded-lg border-4 border-blue-300 bg-blue-100 text-blue-600">
      <MonthlyClassCalendar title={"Booking Calendar"} />
      {/* TODO: Make this actually populate classe on calendar click */}
      <DailyClassCalendar
        title={"Classes Available For: "}
        currentDate={currentDate}
      />
    </div>
  );
}
