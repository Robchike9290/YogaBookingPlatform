"use client";

import Calendar from "react-calendar";
import React, { useState } from "react";
import { SubcalendarProps } from "@/types";
import { formatDateString } from "@/utils";

export default function MonthlyClassCalendar({
  setCurrentDate,
  title,
  subtitle,
  currentDate,
}: SubcalendarProps) {
  const handleClickDay = (date: Date) => {
    const formattedDateString = formatDateString(date);
    setCurrentDate?.(formattedDateString);
  };

  return (
    <div className="mx-8 my-4 rounded-lg bg-blue-300 text-center text-blue-600">
      {/* TODO: Style calendar to show dots on days with classes. */}
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-2xl font-bold">{subtitle}</h2>
      <div className="py-8">
        <Calendar
          className="rounded-lg bg-blue-600 py-4 text-2xl font-bold text-black shadow-lg"
          nextLabel="&nbsp;->&nbsp;"
          next2Label=""
          onClickDay={handleClickDay}
          prevLabel="&nbsp;<-&nbsp;"
          prev2Label=""
          tileClassName={({ date, view }) => {
            if (view === "month" && currentDate) {
              const isSelected = formatDateString(date) === currentDate;

              return isSelected ? "bg-black text-white rounded-lg" : null;
            }
            return null;
          }}
        />
      </div>
    </div>
  );
}
