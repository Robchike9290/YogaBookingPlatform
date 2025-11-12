import React from "react";
import { v4 } from "uuid";
import { DailyClassCalendarProps } from "@/types";

// TODO: Move this to a "real" database
const dummyClassData = [
  {
    id: v4(),
    name: "Vinyasa II",
    instructor: "Jaden",
    startTime: "1:00 PM",
    date: "10/20/2025",
    length: 75,
  },
  {
    id: v4(),
    name: "Candlelight Yin",
    instructor: "Darren",
    startTime: "8:00 PM",
    date: "10/19/2025",
    length: 60,
  },
  {
    id: v4(),
    name: "Slow Vinyasa",
    instructor: "Alyssa",
    startTime: "7:30 AM",
    date: "10/19/2025",
    length: 60,
  },
  {
    id: v4(),
    name: "Hatha",
    instructor: "Alyssa",
    startTime: "7:30 AM",
    date: "10/23/2025",
    length: 60,
  },
];

// TODO: Make this page unreachable if not logged in, redirect in this case.
// TODO: Update render behavior to not flash an out-of-format date on initial load.
export default function DailyClassCalendar(props: DailyClassCalendarProps) {
  return (
    <div className="col-span-3 col-start-4 row-span-2 row-start-1 mx-8 max-h-96 overflow-auto rounded-lg border-4 border-blue-300 bg-blue-100 px-8 text-center text-blue-600">
      <h1 className="text-3xl font-bold">
        Classes Available for {props.currentDate}:
      </h1>
      <div>
        {dummyClassData.map((classData) => {
          if (props.currentDate === classData.date) {
            return (
              <div
                key={classData.id}
                className="m-6 grid grid-cols-6 grid-rows-1 rounded-md bg-blue-300 p-6 shadow-xl"
              >
                <div className="col-span-5 col-start-1 row-start-1">
                  <h3>{classData.name}</h3>
                  <h4>Instructor: {classData.instructor}</h4>
                  <div>Start time: {classData.startTime}</div>
                  <div>Length: {classData.length} minutes</div>
                </div>
                {/* TODO: Add functionality to add class to profile */}
                <button className="col-start-6 row-start-1 m-2 rounded-md bg-blue-100 p-2 shadow-xl">
                  Book
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
