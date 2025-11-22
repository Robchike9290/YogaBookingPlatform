"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePlatformContext } from "@/_components/PlatformContext";
import { CurrentStudioAndSelectionProps } from "@/types";
import LocationPicker from "@/_components/LocationPicker";

export default function CurrentStudioAndSelection({
  setCurrentStudioName,
}: CurrentStudioAndSelectionProps) {
  const router = useRouter();
  const { isLoggedIn } = usePlatformContext();

  const handleClickButton = () => {
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
    // TODO: Add in testimonials to fill in blank square
    <div className="col-span-2 col-start-1 row-span-1 row-start-2 mx-auto w-1/2 rounded-lg border-4 border-blue-300 bg-blue-100 p-8 text-blue-600">
      <LocationPicker
        handleClickButton={handleClickButton}
        handleChangeStudioName={handleChangeStudioName}
        buttonCta={"Book class at this location"}
        title={"Wanna sign up for a class?"}
        description={
          "Select a studio location from the dropdown bar to learn more about a studio!"
        }
        selectCta={"Click the button to book if you like what you see!"}
      />
    </div>
  );
}
