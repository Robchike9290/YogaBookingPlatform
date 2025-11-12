import React from "react";
import { v4 } from "uuid";
import StudioBio from "./StudioBio";
import { AboutStudioPropTypes, StudioBioProps } from "@/types";

// TODO: Move to DB.
const studioBios: StudioBioProps[] = [
  {
    id: v4(),
    name: "Crestview",
    neighborhoodBio:
      "A chill studio in north Austin for central Austin neighborhood dwellers.",
    studioImageURL: "/Crestview Studio.jpg",
    studioBio:
      "A bright, light-filled studio with a clean, polished, and serene look.",
    neighborhoodImageURL: "/Crestview.jpg",
  },
  {
    id: v4(),
    name: "Bouldin",
    neighborhoodBio:
      "Old-school Austin nieghborhood vibes with shopping and parks nearby.",
    studioImageURL: "/Bouldin Studio.jpg",
    studioBio:
      "Beautiful views of the skyline from large windows will add energy to your flow.",
    neighborhoodImageURL: "/Bouldin.jpeg",
  },
  {
    id: v4(),
    name: "Riata",
    neighborhoodBio:
      "A chill studio in north Austin that satisfies those of us the like being further from the center of it all.",
    studioImageURL: "/Riata Yoga Studio.jpg",
    studioBio:
      "Quiet, cozy, and full of greenery, this studio will feel like a warm embrace.",
    neighborhoodImageURL: "/Riata.jpg",
  },
  {
    id: v4(),
    name: "Downtown",
    neighborhoodBio:
      "For those of us that love hustle and bustle with the most modern spaces.",
    studioImageURL: "/Downtown Studio.jpg",
    studioBio:
      "Bright sunlight and green plants make this studio feel like an oasis in the midst of so much hustle and bustle.",
    neighborhoodImageURL: "/Downtown.jpg",
  },
  {
    id: v4(),
    name: "Mueller",
    neighborhoodBio:
      "Perfect if you love a little post-yoga farmer's market shopping or brunch on weekends.",
    studioImageURL: "/Mueller Yoga Studio.jpg",
    studioBio:
      "Mellow colors and tony wood floors bring a sense of calm to your flow.",
    // TODO: Fix up image dimensions to grow/shrink with containing element (typ)
    neighborhoodImageURL: "/Mueller.jpg",
  },
];

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
