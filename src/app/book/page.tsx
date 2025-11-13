"use client";
// TODO: Use <Suspense /> component to optimize this and other
// client-side-rendered pages to render everything EXCEPT dynamic content.

import MonthlyClassCalendar from "../../_components/MonthlyClassCalendar";
import DailyClassCalendar from "../../_components/DailyClassCalendar";
import { useState, useEffect } from "react";
import { getDateParts } from "@/utils";
import BookingCalendar from "../../_components/BookingCalendar";

export default function Book() {
  const [currentDate, setCurrentDate] = useState(Date());

  useEffect(() => {
    const today = new Date();
    const [month, day, year] = getDateParts(today);

    setCurrentDate(`${month}/${day}/${year}`);
  }, []);

  return (
    <div className="m-4">
      <BookingCalendar
        dailyTitle={"Classes Available for "}
        monthlyTitle={"Class Schedule Date Picker"}
      />
    </div>
  );
}
