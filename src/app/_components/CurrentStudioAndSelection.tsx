"use client";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/_components/AuthContext";

type Studio = {
  id: string;
  name: string;
};

interface CurrentStudioAndSelectionProps {
  allStudios: Studio[];
  setCurrentStudioName: Function;
}

// TODO: Move this to the back end.  Make pricing plans populate at load on front end based upon location, have them randomly update on backend and on a button click, see the new deals.
const pricingPlans = ["Plan 1", "Plan 2", "Plan 3"];

export default function CurrentStudioAndSelection({
  allStudios,
  setCurrentStudioName,
}: CurrentStudioAndSelectionProps) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleClickBookingButton = () => {
    if (isLoggedIn) {
      router.push("/book");
    } else if (!isLoggedIn) {
      router.push("/login");
    }
  };

  const handleChangeStudioName = (event: any) => {
    const studioName = event.target.value;
    setCurrentStudioName(studioName);
  };

  return (
    <div className="col-span-2 col-start-1 row-span-1 row-start-1 m-8 rounded-lg border-4 border-blue-300 bg-blue-100 p-8 text-blue-600">
      <h2 className="text-xl font-bold">Wanna sign up for a class?</h2>
      <p>
        Select a studio location from the dropdown bar to learn more about a
        studio!
      </p>
      <br />
      <p>Click the button to book if you like what you see!</p>
      <div className="grid-cols-2 grid">
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
    </div>
  );
}
