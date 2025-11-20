"use client";
import React from "react";
import { usePlatformContext } from "@/_components/PlatformContext";
import NavLink from "@/app/_components/NavLink";

export default function NavBar() {
  const { isLoggedIn } = usePlatformContext();

  return (
    <nav className="flex w-full rounded-lg border-4 border-blue-300 bg-blue-100 p-2">
      {isLoggedIn ? (
        <>
          <NavLink className="nav-link" href="/">
            Home
          </NavLink>
          <NavLink className="nav-link" href="/book">
            Book
          </NavLink>
          <NavLink className="nav-link" href="/profile">
            My Profile
          </NavLink>
          <NavLink className="nav-link" href="/login">
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="nav-link" href="/">
            Landing Page
          </NavLink>
          <NavLink className="nav-link" href="/login">
            Log In or Sign Up
          </NavLink>
        </>
      )}
    </nav>
  );
}
