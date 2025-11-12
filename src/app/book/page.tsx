"use client";
// TODO: Use <Suspense /> component to optimize this and other
// client-side-rendered pages to render everything EXCEPT dynamic content.

import MonthlyClassCalendar from "../../_components/MonthlyClassCalendar";
import DailyClassCalendar from "../../_components/DailyClassCalendar";
import { useState, useEffect } from "react";
import { getDateParts } from "@/utils";

export default function Book() {
  const [currentDate, setCurrentDate] = useState(Date());

  useEffect(() => {
    const today = new Date();
    const [month, day, year] = getDateParts(today);

    setCurrentDate(`${month}/${day}/${year}`);
  }, []);

  return (
    <div className="grid grid-cols-6 grid-rows-2">
      <MonthlyClassCalendar
        setCurrentDate={setCurrentDate}
        title={"Class Schedule Date Picker"}
      />
      <DailyClassCalendar
        // TODO: remove unnecessary prop values that can be drawn out of the context.
        currentDate={currentDate}
        title={"Classes Available for "}
      />
    </div>
  );
}
