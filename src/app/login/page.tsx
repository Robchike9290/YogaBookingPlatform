"use client";
import React, { useState } from "react";
import UserInfoForm from "@/_components/UserInfoForm";
import SignupCTA from "./_components/signupCta";
import { LoginProps } from "@/types";
import { usePlatformContext } from "@/_components/PlatformContext";
import { useRouter } from "next/navigation";

const dummyLogin = {
  username: "meow",
  password: "biscuits@gmail.com",
};

export default function Login({ isLoggedIn }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser, setIsLoggedIn } = usePlatformContext();
  const router = useRouter();

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (e: any) => {
    // TODO: Update this function to do REAL validation from a db and a JWT.
    // check whether login/password combo is valid
    // if so, navigate to profile page
    // if not, navigate to signup screen with error message displayed.
    e.preventDefault();
    console.log("submit handled!", username, password);
    if (username === dummyLogin.username && password === dummyLogin.password) {
      setCurrentUser(username);
      setIsLoggedIn(true);
      router.push("/");
    } else {
      alert("Insert the name and password for the one true user!");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        // TODO: Add loading state for logout process, have a logout function
        // automatically run and on completion or after 2 seconds, whichever is
        // first, return to the landing page.
        <h1>Logging out, please be patient...</h1>
      ) : (
        // TODO: Make these styles more generic, this is insanely out of hand
        // and the components have a base styling to them most of the time.
        <div className="justify-self-center rounded-lg border-4 border-blue-300 bg-blue-100 p-6">
          <UserInfoForm
            formTitle={"Log In"}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
            handleSubmit={handleSubmit}
            formCta={"Log In"}
          />
          <SignupCTA />
        </div>
      )}
    </>
  );
}
