import { BookingModalProps } from "@/types";
import React from "react";

export default function BookingModificationModal({
  setModalIsOpen,
}: BookingModalProps) {
  const handleClose = () => {
    setModalIsOpen(false);
    // TODO: Put actual booking modification logic here.
    console.log("Modifying booking...");
  };

  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-90"
      }
    >
      <div className="rounded-lg border-4 border-blue-300 bg-blue-100">
        <h2>Modify Booking</h2>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
