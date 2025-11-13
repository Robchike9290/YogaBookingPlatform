"use client";

import DailyClassCalendar from "@/_components/DailyClassCalendar";
import MonthlyClassCalendar from "@/_components/MonthlyClassCalendar";
import { usePlatformContext } from "@/_components/PlatformContext";
import { MasterCalendarProps } from "@/types";
import { getDateParts } from "@/utils";
import React, { useEffect } from "react";

export default function BookingCalendar({
  dailyTitle,
  monthlyTitle,
}: MasterCalendarProps) {
  const { currentDate, setCurrentDate } = usePlatformContext();

  useEffect(() => {
    const today = new Date();
    const [month, day, year] = getDateParts(today);

    setCurrentDate(`${month}/${day}/${year}`);
  }, []);

  return (
    <div className="flex rounded-lg bg-blue-100">
      <div className="m-4 flex-1">
        <MonthlyClassCalendar
          title={monthlyTitle}
          setCurrentDate={setCurrentDate}
        />
      </div>
      <div className="m-4 flex-1">
        {/* TODO: Make this actually populate classes on calendar click */}
        <DailyClassCalendar title={dailyTitle} currentDate={currentDate} />
      </div>
    </div>
  );
}
