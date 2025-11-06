'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/_components/AuthContext'

// TODO: Move this to the back end.  Make pricing plans populate at load on front end, have them randomly update on backend and on a button click, see the new deals.
const pricingPlans = ["Plan 1", "Plan 2", "Plan 3"]

export default function CurrentStudioAndSelection() {
    const router = useRouter()
    const { isLoggedIn } = useAuth()

    const handleClick = () => {
        if (isLoggedIn) {
            // TODO: Implement function to go to booking page for this studio
            console.log('Logged in, going to studio booking page!')
        } else if (!isLoggedIn) {
            // TODO: Redirect to login page if not logged in.
            console.log('Redirecting to login page')
            router.push('/login')
        }
    }

    return (
        <div className="col-start-1 col-span-2 row-start-1 row-span-1 bg-blue-100 text-blue-600 border-blue-300 border-4 p-8 m-8 rounded-lg">
            <h2 className="text-xl font-bold">Wanna sign up for a class?</h2>
            <p>Select a studio location from the dropdown bar to learn more about a studio!</p>
            <br />
            <p>Click the button to book if you like what you see!</p>
            <div className="grid grid-columns-2 grid-rows-1">
                <select className="m-8 col-start-1 row-start-1">
                    <option value="">Select a studio location</option>
                    <option>Crestview</option>
                    <option>Bouldin</option>
                    <option>Riata</option>
                    <option>Downtown</option>
                    <option>Mueller</option>
                </select>
                <button className="bg-blue-300 p-4 m-4 rounded-md shadow-lg col-start-2 row-start-1" onClick={handleClick}>Book class at this location</button>
            </div>
        </div>
    )
}