"use client";

import Calendar from "react-calendar";
import React from "react";
import { SubcalendarProps } from "@/types";
import { formatDateString } from "@/utils";

export default function MonthlyClassCalendar({
  setCurrentDate,
  title,
}: SubcalendarProps) {
  const handleClickDay = (date: Date) => {
    const formattedDateString = formatDateString(date);
    setCurrentDate?.(formattedDateString);
  };

  return (
    <div className="mx-8 rounded-lg bg-blue-100 px-8 text-center text-blue-600">
      {/* TODO: Style calendar to show dots on days with classes. */}
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2>
        Pick a date from the calendar to see the classes scheduled for any given
        day.
      </h2>
      <Calendar onClickDay={handleClickDay} />
    </div>
  );
}
