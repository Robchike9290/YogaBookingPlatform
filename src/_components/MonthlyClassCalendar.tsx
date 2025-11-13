"use client";

import Calendar from "react-calendar";
import React from "react";
import { SubcalendarProps } from "@/types";
import { formatDateString } from "@/utils";

export default function MonthlyClassCalendar({
  setCurrentDate,
  title,
  subtitle,
}: SubcalendarProps) {
  const handleClickDay = (date: Date) => {
    const formattedDateString = formatDateString(date);
    setCurrentDate?.(formattedDateString);
  };

  return (
    <div className="mx-8 my-4 rounded-lg bg-blue-300 text-center text-blue-600">
      {/* TODO: Style calendar to show dots on days with classes. */}
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="font-bold">{subtitle}</h2>
      <div className="py-8">
        <Calendar onClickDay={handleClickDay} />
      </div>
    </div>
  );
}
