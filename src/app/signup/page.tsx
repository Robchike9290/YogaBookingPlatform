"use client";

import { usePlatformContext } from "@/_components/PlatformContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const { allStudios } = usePlatformContext();

  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [preferredStudio, setPreferredStudio] = useState(allStudios[0].name);
  const [username, setUsername] = useState("");

  const router = useRouter();

  const handleBioChange = (event: any) => {
    setBio(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  // TODO: Make this actually save info to the DB once the back end is up.
  const handleFinalSubmit = (event: any) => {
    event.preventDefault();
    router.push("/");
    console.log("Signed up!");
  };

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleInitialSubmit = (e: any) => {
    e.preventDefault();
    // check whether login/password combo is valid
    // if so, navigate to profile page
    // if not, navigate to signup screen with error message displayed.
    console.log("submit handled!");
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleStudioNameChange = (event: any) => {
    setPreferredStudio(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div className="fixed left-1/2 top-[30vh] -translate-x-1/2 rounded-lg border-4 border-blue-300 bg-blue-100 p-4 text-blue-600">
      <h1 className={"text-center text-2xl font-bold"}>Sign Up</h1>
      <p className="mr-4 pb-2 text-center">
        Tell us a few things about yourself.
      </p>
      <form className="space-y-3">
        <div className="my-4 grid grid-cols-2 gap-x-4 gap-y-3">
          <label htmlFor="firstName">First Name:</label>
          {/* TODO: Have placeholder here equal to state */}
          <input
            id="firstName"
            pattern="[A-Za-z]+"
            minLength={1}
            maxLength={30}
            required
            onChange={handleFirstNameChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          {/* TODO: Have placeholder here equal to state */}
          <input
            id="lastName"
            pattern="[A-Za-z]+"
            minLength={1}
            maxLength={30}
            required
            onChange={handleLastNameChange}
          />
          <label htmlFor="userName">Username:</label>
          <input
            id="userName"
            pattern="[A-Za-z0-9]+"
            minLength={1}
            maxLength={30}
            required
            onChange={handleUsernameChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="passWord"
            // TODO: Put a good password regex here.
            pattern="[A-Za-z0-9]+"
            minLength={9}
            maxLength={30}
            required
            onChange={handleUsernameChange}
          />
          <label htmlFor="bio">Bio (tell us about yourself!):</label>
          <textarea
            id="bio"
            minLength={25}
            maxLength={200}
            required
            onChange={handleBioChange}
          ></textarea>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            // There are better, more complex ways to verify email by actually
            // sending one and verifying the address is active, but this regex
            // works for a personal app.
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            minLength={1}
            maxLength={30}
            required
            onChange={handleEmailChange}
          />
          <label htmlFor="preferredLocation">Preferred Location:</label>
          <select
            id="preferredLocation"
            onChange={() => handleStudioNameChange(event)}
          >
            {allStudios.map((studio) => {
              return <option key={studio.id}>{studio.name}</option>;
            })}
          </select>
        </div>
        <button
          type="submit"
          className={"mx-auto my-4 block rounded-lg bg-blue-300 p-2"}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
