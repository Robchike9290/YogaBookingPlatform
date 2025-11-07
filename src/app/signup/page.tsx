'use client' 

import UserInfoForm from "@/_components/UserInfoForm";
import React, { useState } from 'react'

export default function Signup() {
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
        <div className="bg-blue-100 justify-self-center border-4 border-blue-300 rounded-lg p-6">
            <UserInfoForm 
                formTitle={'Sign Up'}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleSubmit}
                formCta={'Sign Up'}
            />
        </div>
    )
}