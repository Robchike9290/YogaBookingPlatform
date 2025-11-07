'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import UserInfoForm from '@/_components/UserInfoForm'

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
                <UserInfoForm 
                    handleUsernameChange={handleUsernameChange}
                    handlePasswordChange={handlePasswordChange}
                    handleSubmit={handleSubmit}
                />
            )
        }
        </>
    )
}