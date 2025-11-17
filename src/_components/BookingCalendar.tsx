"use client";

import DailyClassCalendar from "@/_components/DailyClassCalendar";
import MonthlyClassCalendar from "@/_components/MonthlyClassCalendar";
import { usePlatformContext } from "@/_components/PlatformContext";
import { MasterCalendarProps } from "@/types";
import { getDateParts } from "@/utils";
import React, { useEffect } from "react";

export default function BookingCalendar({
  dailyTitle,
  dailySubtitle,
  monthlyTitle,
  monthlySubtitle,
  isOnProfilePage,
}: MasterCalendarProps) {
  const { currentDate, setCurrentDate } = usePlatformContext();

  useEffect(() => {
    const today = new Date();
    const [month, day, year] = getDateParts(today);

    setCurrentDate(`${month}/${day}/${year}`);
  }, []);

  return (
    <div className="flex rounded-lg border-4 border-blue-300 bg-blue-100">
      <div className="m-4 flex-1 rounded-lg bg-blue-300 shadow-lg">
        <MonthlyClassCalendar
          title={monthlyTitle}
          subtitle={monthlySubtitle}
          setCurrentDate={setCurrentDate}
        />
      </div>
      <div className="m-4 flex-1 rounded-lg bg-blue-300 shadow-lg">
        {/* TODO: Make this actually populate classes on calendar click */}
        <DailyClassCalendar
          title={dailyTitle}
          subtitle={dailySubtitle}
          currentDate={currentDate}
          isOnProfilePage={isOnProfilePage}
        />
      </div>
    </div>
  );
}
