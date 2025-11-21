import React from "react";
import { profileData } from "@/data";
import { addSpaceBetweenAndCapitalizeEachWord } from "@/utils";

// TODO: Make this match up with the profile signed in as once the back end is hooked up.
export default function ProfileMetadata() {
  const targetObject = profileData[0];

  return (
    <div className="align-center m-4 grid h-[600px] grid-cols-2 gap-4 rounded-lg border-4 border-blue-300 bg-blue-100">
      <div className="col-start-1 overflow-hidden bg-blue-100">
        <img className="overflow-hidden shadow-lg" src={"/DelcineMajeed.jpg"} />
      </div>
      <div className="col-start-2 m-4 overflow-scroll rounded-lg bg-blue-300 p-4 text-blue-600 shadow-lg">
        <h1 className="pb-4 text-center text-xl font-bold">User Info</h1>
        <table className="table-auto border-collapse overflow-x-scroll border-2 border-blue-600">
          {Object.keys(targetObject).map((key) => {
            return (
              <tr key={key}>
                <td className="border-2 border-blue-600 p-2 pr-4 font-bold">
                  {addSpaceBetweenAndCapitalizeEachWord(key)}:{" "}
                </td>
                <td className="border-2 border-blue-600 p-2">
                  {targetObject[key as keyof typeof targetObject]}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
