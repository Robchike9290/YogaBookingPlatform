"use client";

import { LocationPickerProps } from "@/types";
import { usePlatformContext } from "./PlatformContext";
import React from "react";

export default function LocationPicker({
  handleClickButton,
  handleChangeStudioName,
  buttonCta,
  title,
  description,
  selectCta,
}: LocationPickerProps) {
  const { allStudios } = usePlatformContext();

  return (
    <div className="m-8 w-fit">
      <h2 className="text-2xl font-bold">{title}</h2>
      <br />
      <p>{description}</p>
      <br />
      {selectCta ? (
        <>
          <p>{selectCta}</p>
          <br />
        </>
      ) : null}
      <select onChange={() => handleChangeStudioName(event)}>
        <option value="">Select a studio location</option>
        {allStudios.map((studio) => {
          return <option key={studio.id}>{studio.name}</option>;
        })}
        {/* TODO: find out how to display generic option for just when on 
          profile and you want to see ALL your classes. */}
      </select>
      <button
        className="m-4 h-min rounded-md bg-blue-300 p-2 font-bold shadow-lg"
        onClick={handleClickButton}
      >
        {buttonCta}
      </button>
    </div>
  );
}
