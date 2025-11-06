'use client'

import { useState } from 'react'
import NavBar from '@/app/_components/NavBar'
import TitleBar from '@/app/_components/TitleBar'

export default function LayoutClientWrapper({ 
    children 
}: { 
    children: React.ReactNode 
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <TitleBar />
            <br />
            <NavBar isLoggedIn={isLoggedIn} />
            <br />
            <main>{children}</main>
        </>
    )
}