import React from "react";
import { v4 } from "uuid";
import { StudioLocation, FitnessRank, ProfileData } from "@/types";

// TODO: Make this REAL data randoly populated and pulled from the back end.
const dummyData: ProfileData[] = [
  {
    id: v4(),
    firstName: "Delcine",
    lastName: "Majeed",
    bio: "Meow moew headpats biscuits meew ow mow",
    email: "churu4life@gmail.com",
    preferredLocation: StudioLocation.Crestview,
    classesTaken: 14,
    // TODO: Create some fancy backend calculation to do this
    fitnessRank: FitnessRank.Intermediate,
  },
  {
    id: v4(),
    firstName: "Patan",
    lastName: "Jali",
    bio: "Yoga stura blah blah ashtanga blah blah blah",
    email: "namaste@gmail.com",
    preferredLocation: StudioLocation.Bouldin,
    classesTaken: 8000000,
    fitnessRank: FitnessRank.Supreme,
  },
  {
    id: v4(),
    firstName: "Bud",
    lastName: "Light",
    bio: "I don't know why I signed up",
    email: "anhueserbusch@gmail.com",
    preferredLocation: StudioLocation.Riata,
    classesTaken: 0,
    fitnessRank: FitnessRank.New,
  },
];

const formatString = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (s) => s.toUpperCase());
};

// TODO: Make this match up with the profile signed in as once the back end is hooked up.
export default function ProfileMetadata() {
  const targetObject = dummyData[0];

  return (
    <div className="align-center m-4 grid h-[600px] grid-cols-2 gap-4 rounded-lg border-4 border-blue-300 bg-blue-100">
      <div className="col-start-1 overflow-hidden bg-blue-100">
        <img className="overflow-hidden shadow-lg" src={"/DelcineMajeed.jpg"} />
      </div>
      <div className="col-start-2 m-4 overflow-scroll rounded-lg bg-blue-300 p-4 text-blue-600 shadow-lg">
        <h1 className="pb-4 text-center text-xl font-bold">User Info</h1>
        {/* TODO: Update table to have scrollable text on overflow of each row */}
        <table className="table-auto border-collapse overflow-x-scroll">
          {Object.keys(targetObject).map((key) => {
            return (
              <tr key={key}>
                <td className="border border-blue-600 p-2 pr-4 font-bold">
                  {formatString(key)}:{" "}
                </td>
                <td className="border border-blue-600 p-2">
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
