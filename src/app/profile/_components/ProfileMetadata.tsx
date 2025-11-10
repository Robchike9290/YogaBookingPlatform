import React from 'react'
import { v4 } from 'uuid'
import { StudioLocation, FitnessRank, ProfileData } from '../types'

// TODO: Make this REAL data randoly populated and pulled from the back end.
const dummyData: ProfileData[] = [
    {
        id: v4(),
        firstName: "Delcine",
        lastName: "Majeed",
        bio: "Meow moew headpats biscuits meew ow mow",
        email: "churu4life@gmail.com",
        preferredLocation: StudioLocation.Crestview,
        classesTaken: 14,
        // TODO: Create some fancy backend calculation to do this
        fitnessRank: FitnessRank.Intermediate
    },
    {
        id: v4(),
        firstName: "Patan",
        lastName: "Jali",
        bio: "Yoga stura blah blah ashtanga blah blah blah",
        email: "namaste@gmail.com",
        preferredLocation: StudioLocation.Bouldin,
        classesTaken: 8000000,
        fitnessRank: FitnessRank.Supreme
    },
    {
        id: v4(),
        firstName: "Bud",
        lastName: "Light",
        bio: "I don't know why I signed up",
        email: "anhueserbusch@gmail.com",
        preferredLocation: StudioLocation.Riata,
        classesTaken: 0,
        fitnessRank: FitnessRank.New
    },
]

const formatString = (str: string) => {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, s => s.toUpperCase());
}

// TODO: Make this match up with the profile signed in as once the back end is hooked up.
export default function ProfileMetadata() {
    const targetObject = dummyData[0]

    return (
        <div className="col-start-2 col-end-3 rounded-lg bg-blue-300 m-4 p-4 text-blue-600 shadow-lg">
            <h1 className="text-xl font-bold">User Info</h1>
            <ul>
                {Object.keys(targetObject).map((key) => {
                    return <li key={key}>{formatString(key)}: {targetObject[key as keyof typeof targetObject]}</li>
                })}
            </ul>
        </div>
    )
}
