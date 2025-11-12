"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { PlatformContextType } from "@/types";

const PlatformContext = createContext<PlatformContextType | undefined>(
  undefined,
);

export function PlatformContextProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentDate, setCurrentDate] = useState(Date());

  return (
    <PlatformContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentDate,
        setCurrentDate,
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
