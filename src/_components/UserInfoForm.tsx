'use client'

import Link from 'next/link'
import React from 'react'

interface UserInfoFormProps {
    handleUsernameChange: React.ChangeEventHandler<HTMLInputElement>,
    handlePasswordChange: React.ChangeEventHandler<HTMLInputElement>,
    handleSubmit: React.MouseEventHandler<HTMLButtonElement>
}

export default function UserInfoForm({ handleUsernameChange, handlePasswordChange, handleSubmit }: UserInfoFormProps) {
    return (
        <>
            <h1 className="flex-1 text-blue-600 font-bold mt-2 hover:text-purple-700 text-center text-2xl">Login</h1>
            <form className="justify-self-center py-4 pb-8">
                <div className="py-2">
                    <label className="text-blue-700 text-center text-lg" htmlFor="Username">Username </label>
                    <input 
                        className="text-blue-700"
                        type="text" 
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="py-2">
                    <label className="text-blue-700 text-center text-lg" htmlFor="Username">Password </label>
                    <input 
                        className="text-blue-700"
                        type="text" 
                        onChange={handlePasswordChange} 
                        required
                    />
                </div>
                <div className="flex justify-end">
                <button 
                    type="submit" 
                    onClick={handleSubmit} 
                    className="text-blue-600 font-bold hover:text-purple-700 rounded-md p-2 mt-2 bg-blue-300 shadow-xl"
                >
                    Login
                </button>
                </div>
            </form>
            <div>
                <h3 className="flex justify-end gap-2 text-blue-600">
                    Not a member?
                    <Link className="text-purple-700 hover:text-black" href="/signup">
                        Sign up here.
                    </Link>
                </h3>
            </div>
        </>
    )
}