"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { PlatformContextType } from "@/types";
import { studios } from "@/data";

const PlatformContext = createContext<PlatformContextType | undefined>(
  undefined,
);

export function PlatformContextProvider({ children }: { children: ReactNode }) {
  // TODO: Update this to be actual DB data.  Have it update upon page load by withdrawing it from the DB.
  const [allStudios, setAllStudios] = useState(studios);
  // TODO: Remove this state, currentUser can express whather someone is logged in too.
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // TODO: Set this as a unique ID, not a name in order to improve security.
  const [currentUser, setCurrentUser] = useState("Delcine Majeed");
  // const [currentUser, setCurrentUser] = useState("");
  const [currentDate, setCurrentDate] = useState(Date());
  const [currentStudioName, setCurrentStudioName] = useState(
    allStudios[0].name,
  );

  return (
    <PlatformContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
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
