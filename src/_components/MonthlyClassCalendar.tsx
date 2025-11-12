"use client";

import Calendar from "react-calendar";
import React from "react";
import { CalendarProps } from "@/types";

export default function MonthlyClassCalendar({
  setCurrentDate,
  title,
}: CalendarProps) {
  const formatDateString = (date: Date): string => {
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed, so add 1
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const handleClickDay = (
    date: Date,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const formattedDateString = formatDateString(date);
    setCurrentDate?.(formattedDateString);
  };

  return (
    <div className="col-span-3 col-start-1 row-span-1 row-start-1 mx-8 rounded-lg border-4 border-blue-300 bg-blue-100 px-8 text-center text-blue-600">
      {/* TODO: Style calendar. */}
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2>
        Pick a date from the calendar to see the classes scheduled for any given
        day.
      </h2>
      <Calendar onClickDay={handleClickDay} />
    </div>
  );
}
