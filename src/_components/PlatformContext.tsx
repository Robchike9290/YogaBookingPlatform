"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { PlatformContextType } from "@/types";
import { v4 } from "uuid";

const PlatformContext = createContext<PlatformContextType | undefined>(
  undefined,
);

export function PlatformContextProvider({ children }: { children: ReactNode }) {
  // TODO: Update this to be actual DB data.  Have it update upon page load by withdrawing it from the DB.
  const [allStudios, setAllStudios] = useState([
    {
      id: v4(),
      name: "Crestview",
    },
    {
      id: v4(),
      name: "Bouldin",
    },
    {
      id: v4(),
      name: "Riata",
    },
    {
      id: v4(),
      name: "Downtown",
    },
    {
      id: v4(),
      name: "Mueller",
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentDate, setCurrentDate] = useState(Date());
  const [currentStudioName, setCurrentStudioName] = useState(
    allStudios[0].name,
  );

  return (
    <PlatformContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentDate,
        setCurrentDate,
        currentStudioName,
        setCurrentStudioName,
        allStudios,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatformContext() {
  const context = useContext(PlatformContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
