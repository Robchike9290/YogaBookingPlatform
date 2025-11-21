import React from "react";
import StudioBio from "./StudioBio";
import { AboutStudioPropTypes } from "@/types";
import { studioBios } from "@/data";

export default function AboutStudio({
  currentStudioName,
}: AboutStudioPropTypes) {
  console.log(currentStudioName);
  return (
    <div className="col-span-3 col-start-3 row-span-3 row-start-1 m-8 max-h-screen overflow-auto rounded-lg border-4 border-blue-300 bg-blue-100 p-8 text-center text-blue-600">
      <h1 className="mb-8 text-3xl font-bold">{currentStudioName}</h1>
      <div>
        {studioBios.map((studioBio) => {
          if (currentStudioName === studioBio.name) {
            console.log(
              { currentStudioName },
              "studioBio.name: ",
              studioBio.name,
            );
            return <StudioBio studioBio={studioBio} />;
          }
        })}
      </div>
    </div>
  );
}
