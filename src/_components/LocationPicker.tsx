"use client";

import { LocationPickerProps } from "@/types";
import { usePlatformContext } from "./PlatformContext";
import React from "react";

export default function LocationPicker({
  handleClickButton,
  handleChangeStudioName,
  buttonCta
}: LocationPickerProps) {
  const { allStudios } = usePlatformContext();
  return (
    <div className="grid grid-cols-2">
      <div className="col-start-1 row-start-1 m-8">
        <h2 className="text-2xl font-bold">Wanna sign up for a class?</h2>
        <p className="font-bold">
          Select a studio location from the dropdown bar to learn more about a
          studio!
        </p>
        <br />
        <p className="font-bold">Click the button to book if you like what you see!</p>
        <select
          onChange={() => handleChangeStudioName(event)}
        >
          <option value="">Select a studio location</option>
          {allStudios.map((studio) => {
            return <option key={studio.id}>{studio.name}</option>;
          })}
            {/* TODO: find out how to display generic option for just when on 
            profile and you want to see ALL your classes. */}
        </select>
      </div>
      <button
        className="col-start-2 m-4 rounded-md bg-blue-300 p-4 shadow-lg"
        onClick={handleClickButton}
      >
        {buttonCta}
      </button>
    </div>
  );
}
