"use client";

import { usePlatformContext } from "@/_components/PlatformContext";
import UserInfoForm from "@/_components/UserInfoForm";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const { allStudios } = usePlatformContext();

  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(false);
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
    setIsModalOpen(true);
    console.log("submit handled!");
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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
    <div className="justify-self-center rounded-lg border-4 border-blue-300 bg-blue-100 p-6">
      <UserInfoForm
        formTitle={"Sign Up"}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleInitialSubmit}
        formCta={"Continue Sign Up"}
      />
      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex bg-gray-600 bg-opacity-90">
          <div className="fixed left-1/2 top-[30vh] w-1/2 -translate-x-1/2 rounded-lg border-4 border-blue-300 bg-blue-100 p-4 text-blue-600">
            <h2 className={"text-2xl font-bold"}>
              Additional User Information
            </h2>
            <p className="mr-4 inline-block pb-2">
              Almost there! Tell us a few things about yourself.
            </p>
            <form className="pb-2">
              <div className="py-2">
                <label className="mr-2 inline-block" htmlFor="firstName">
                  First Name:
                </label>
                {/* TODO: Have placeholder here equal to state */}
                <input
                  id="firstName"
                  pattern="[A-Za-z]+"
                  minLength={1}
                  maxLength={30}
                  required
                  className="mr-1 inline-block"
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="py-2">
                <label className="mr-2 inline-block" htmlFor="lastName">
                  Last Name:
                </label>
                {/* TODO: Have placeholder here equal to state */}
                <input
                  className="mr-1 inline-block"
                  id="lastName"
                  pattern="[A-Za-z]+"
                  minLength={1}
                  maxLength={30}
                  required
                  onChange={handleLastNameChange}
                />
              </div>
              <div className="py-2">
                <label className="mr-2 inline-block" htmlFor="userName">
                  Username:
                </label>
                <input
                  className="mr-1 inline-block"
                  id="userName"
                  pattern="[A-Za-z0-9]+"
                  minLength={1}
                  maxLength={30}
                  required
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="py-2">
                <label className="mr-2 inline-block" htmlFor="password">
                  Password:
                </label>
                <input
                  className="mr-1 inline-block"
                  id="passWord"
                  // TODO: Put a good password regex here.
                  pattern="[A-Za-z0-9]+"
                  minLength={9}
                  maxLength={30}
                  required
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="py-2">
                <label className="mr-2 inline-block" htmlFor="bio">
                  Bio (tell us about yourself!):
                </label>
                <textarea
                  className="mr-1 inline-block"
                  id="bio"
                  minLength={25}
                  maxLength={200}
                  required
                  onChange={handleBioChange}
                ></textarea>
              </div>
              <div className="py-2">
                <label className="mr-2 inline-block" htmlFor="email">
                  Email:
                </label>
                <input
                  className="mr-1 inline-block"
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
              </div>
              <div className="py-2">
                <label
                  className="mr-2 inline-block"
                  htmlFor="preferredLocation"
                >
                  Preferred Location:
                </label>
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
                className={"m-2 rounded-lg bg-blue-300 p-2"}
              >
                Finish Sign Up!
              </button>
            </form>
            <button
              onClick={handleModalClose}
              className={"rounded-lg bg-blue-300 p-2"}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
