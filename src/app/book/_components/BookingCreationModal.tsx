import { BookingModalProps } from "@/types";
import React from "react";

export default function BookingCreationModal({
  setModalIsOpen,
}: BookingModalProps) {
  const handleClose = () => {
    setModalIsOpen(false);
    // TODO: Put in actual booking creation logic here.
    console.log("Creating booking...");
  };

  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-90"
      }
    >
      <div className="rounded-lg border-4 border-blue-300 bg-blue-100">
        <h2>Book Class</h2>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
