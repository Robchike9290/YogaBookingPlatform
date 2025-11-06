'use client'

import NavBar from '@/app/_components/NavBar'
import TitleBar from '@/app/_components/TitleBar'
import { AuthProvider } from '@/_components/AuthContext'

export default function LayoutClientWrapper({ 
    children 
}: { 
    children: React.ReactNode 
}) {
    return (
        <AuthProvider>
            <TitleBar />
            <br />
            <NavBar />
            <br />
            <main>{children}</main>
        </AuthProvider>
    )
}