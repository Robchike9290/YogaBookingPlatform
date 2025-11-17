import { BookingModalProps } from "@/types";
import React from "react";

export default function BookingModal({ setModalIsOpen }: BookingModalProps) {
  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div>Modify Booking</div>
      <div onClick={handleClose}>X</div>
    </>
  );
}
