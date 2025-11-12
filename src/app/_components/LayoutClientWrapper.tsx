"use client";

import NavBar from "@/app/_components/NavBar";
import TitleBar from "@/app/_components/TitleBar";
import { PlatformContextProvider } from "@/_components/PlatformContext";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlatformContextProvider>
      <TitleBar />
      <br />
      <NavBar />
      <br />
      <main>{children}</main>
    </PlatformContextProvider>
  );
}
