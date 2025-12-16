import React, { useState } from "react";
import { SubcalendarProps } from "@/types";
import { dummyClassData } from "@/lib/dummyData";
import BookingCreationModal from "@/app/book/_components/BookingCreationModal";
import BookingModificationModal from "@/app/profile/_components/BookingModificationModal";

// TODO: Make this page unreachable if not logged in, redirect in this case.
// TODO: Update render behavior to not flash an out-of-format date on initial load.
export default function DailyClassCalendar(props: SubcalendarProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="mx-8 my-4 rounded-lg bg-blue-300 text-center text-blue-600">
      <h1 className="text-3xl font-bold">
        {props.title} {props.currentDate}:
      </h1>
      <h2 className="text-2xl font-bold">{props.subtitle}</h2>
      <div className="max-h-72 overflow-auto">
        {dummyClassData.map((classData) => {
          if (props.currentDate === classData.date) {
            return (
              <div
                key={classData.id}
                className="m-6 grid grid-cols-6 grid-rows-1 rounded-md bg-blue-600 p-6 font-bold text-black shadow-xl"
              >
                <div className="col-span-5 col-start-1 row-start-1">
                  <h3>{classData.name}</h3>
                  <h4>Instructor: {classData.instructor}</h4>
                  <div>Start time: {classData.startTime}</div>
                  <div>Length: {classData.length} minutes</div>
                </div>
                {/* TODO: Add functionality to add class to profile */}
                <button
                  className="col-start-6 row-start-1 m-2 rounded-md bg-blue-300 p-2 shadow-xl"
                  onClick={handleClick}
                >
                  {props.isOnProfilePage ? "Modify" : "Book"}
                </button>
              </div>
            );
          }
        })}
      </div>
      {modalIsOpen ? (
        props.isOnProfilePage ? (
          <BookingModificationModal setModalIsOpen={setModalIsOpen} />
        ) : (
          <BookingCreationModal setModalIsOpen={setModalIsOpen} />
        )
      ) : null}
    </div>
  );
}
