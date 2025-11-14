'use client'

import { LocationPickerProps } from "@/types";
import { usePlatformContext } from "./PlatformContext";
import React from 'react'

export default function LocationPicker({
    handleClickBookingButton,
    handleChangeStudioName
}: LocationPickerProps) {
    const { allStudios } = usePlatformContext()
    return (
      <div className="grid grid-cols-2">
        <select
          className="col-start-1 row-start-1 m-8"
          onChange={() => handleChangeStudioName(event)}
        >
          <option value="">Select a studio location</option>
          {allStudios.map((studio) => {
            return <option key={studio.id}>{studio.name}</option>;
          })}
        </select>
        <button
          className="col-start-2 m-4 rounded-md bg-blue-300 p-4 shadow-lg"
          onClick={handleClickBookingButton}
        >
          Book class at this location
        </button>
      </div>
    )
}