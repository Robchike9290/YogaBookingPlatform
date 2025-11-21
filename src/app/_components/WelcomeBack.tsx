import React, { useState, useEffect } from "react";
import { usePlatformContext } from "@/_components/PlatformContext";
import { profileData } from "@/data";

export default function WeclomeBack() {
  let { currentUser } = usePlatformContext();
  let [firstName, setFirstName] = useState("");

  useEffect(() => {
    profileData.forEach((profile) => {
      console.log(profile.firstName);
      if (profile.userName === currentUser) {
        setFirstName("test");
      }
    });
  });

  return (
    <>
      <h1 className="col-span-2 col-start-1 row-span-1 row-start-1 mt-[10vh] flex h-[20vh] justify-center text-3xl font-bold text-white">
        Welcome Back, {firstName}!
      </h1>
    </>
  );
}
