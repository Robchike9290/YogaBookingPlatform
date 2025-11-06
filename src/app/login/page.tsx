'use client'
import React, { useState } from 'react'

export default function Login() {
    return (
        // TODO: Make styles be generic, this is insanely out of hand.
        <div className="bg-blue-100 justify-self-center border-4 border-blue-300 rounded-lg p-6">
            <LoginForm />
        </div>
    )
}

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handleSignup = () => {
        // navigate to signup page
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
                            <a className="text-purple-700 hover:text-black" onClick={handleSignup}>
                                Sign up here.
                            </a>
                        </h3>
                    </div>
                </>
            )
        }
        </>
    )
}