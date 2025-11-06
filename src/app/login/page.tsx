'use client'
import React, { useState } from 'react'
import Link from 'next/link'

interface LoginProps {
    isLoggedIn: boolean
}

export default function Login({ isLoggedIn }: LoginProps) {
    return (
        // TODO: Make styles be generic, this is insanely out of hand.
        <div className="bg-blue-100 justify-self-center border-4 border-blue-300 rounded-lg p-6">
            <LoginForm isLoggedIn={isLoggedIn}/>
        </div>
    )
}

function LoginForm({ isLoggedIn }: LoginProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handleSubmit = () => {
        // check whether login/password combo is valid
        // if so, navigate to profile page
        // if not, navigate to signup screen with error message displayed.
        console.log('submit handled!')
    }

    return (
        <>
        {
            isLoggedIn ?
            (
                // TODO: Add loading state for logout process, have a logout function 
                // automatically run and on completion or after 2 seconds, whichever is
                // first, return to the landing page.
                <h1>Logging out, please be patient...</h1>
            ) : (
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
        </>
    )
}