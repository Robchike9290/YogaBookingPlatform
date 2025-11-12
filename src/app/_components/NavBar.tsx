"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/_components/AuthContext";

export default function NavBar() {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="flex w-full rounded-lg border-4 border-blue-300 bg-blue-100 p-2">
      {isLoggedIn ? (
        <>
          <Link
            className="m-1 flex-1 text-center text-2xl font-bold text-blue-600 hover:text-purple-700"
            href="/"
          >
            Landing Page
          </Link>
          <Link
            className="m-1 flex-1 text-center text-2xl font-bold text-blue-600 hover:text-purple-700"
            href="/book"
          >
            Booking Page
          </Link>
          <Link
            className="m-1 flex-1 text-center text-2xl font-bold text-blue-600 hover:text-purple-700"
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className="m-1 flex-1 text-center text-2xl font-bold text-blue-600 hover:text-purple-700"
            href="/login"
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            className="m-1 w-1/4 flex-1 text-center text-2xl font-bold text-blue-600 hover:text-purple-700"
            href="/"
          >
            Landing Page
          </Link>
          <Link
            className="m-1 w-1/4 flex-1 text-center text-2xl font-bold text-blue-600 hover:text-purple-700"
            href="/login"
          >
            Login
          </Link>
        </>
      )}
    </nav>
  );
}
