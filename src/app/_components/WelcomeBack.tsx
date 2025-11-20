import React from "react";
import { usePlatformContext } from "@/_components/PlatformContext";

export default function WeclomeBack() {
  let { currentUser } = usePlatformContext();

  return (
    <>
      <h1 className="col-span-2 col-start-1 row-span-1 row-start-1 mt-[10vh] flex h-[20vh] justify-center text-3xl font-bold text-white">
        Welcome Back, {currentUser}!
      </h1>
    </>
  );
}
