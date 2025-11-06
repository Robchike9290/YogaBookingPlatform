'use client'
import Link from 'next/link'
import React from 'react'

interface NavBarProps {
    isLoggedIn: boolean
}

export default function NavBar({ isLoggedIn }: NavBarProps) {
    return (
        <nav className="flex w-full rounded-lg w-full border-blue-300 border-4 p-2 bg-blue-100">
            {
                isLoggedIn ? (
                    <>
                        <Link className="flex-1 text-blue-600 font-bold m-1 w-1/4 hover:text-purple-700 text-center text-2xl" href="/login">Logout</Link>
                        <Link className="flex-1 text-blue-600 font-bold m-1 w-1/4 hover:text-purple-700 text-center text-2xl" href="/">Landing Page</Link>
                        <Link className="flex-1 text-blue-600 font-bold m-1 w-1/4 hover:text-purple-700 text-center text-2xl" href="/book">Booking Page</Link>
                        <Link className="flex-1 text-blue-600 font-bold m-1 w-1/4 hover:text-purple-700 text-center text-2xl" href="/profile">Profile</Link>
                    </>
                ) : (
                    <>
                        <Link className="flex-1 text-blue-600 font-bold m-1 w-1/4 hover:text-purple-700 text-center text-2xl" href="/">Landing Page</Link>
                        <Link 
                            className="flex-1 text-blue-600 font-bold m-1 w-1/4 hover:text-purple-700 text-center text-2xl" 
                            href="/login"
                        >
                            Login
                        </Link>
                    </>
                )
            }
        </nav>
    )
}