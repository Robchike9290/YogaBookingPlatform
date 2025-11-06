import React from 'react';

interface AboutStudioPropTypes {
    studioName: string
}

interface StudioBioProps {
    bio: string
}

interface StudioNameProps {
    name: string
}

// TODO: Move to DB.
const studioBios = [
    {
        name: "Crestview",
        neighborhoodBio: "A chill studio in north Austin for central Austin neighborhood dwellers.",
        studioImageURL: "/Crestview Studio.jpg",
        studioBio: "A bright, light-filled studio with a clean, polished, and serene look.",
        neighborhoodImageURL: "/Crestview.jpg"
    },
    {
        name: "Bouldin",
        neighborhoodBio: "Old-school Austin nieghborhood vibes with shopping and parks nearby.",
        studioImageURL: "/Bouldin Studio.jpg",
        studioBio: "Beautiful views of the skyline from large windows will add energy to your flow.",
        neighborhoodImageURL: "/Bouldin.jpeg"
    },
    {
        name: "Riata",
        neighborhoodBio: "A chill studio in north Austin that satisfies those of us the like being further from the center of it all.",
        studioImageURL: "/Riata Yoga Studio.jpg",
        studioBio: "Quiet, cozy, and full of greenery, this studio will feel like a warm embrace.",
        neighborhoodImageURL: "/Riata.jpg"
    },
    {
        name: "Downtown",
        neighborhoodBio: "For those of us that love hustle and bustle with the most modern spaces.",
        studioImageURL: "/Downtown Studio.jpg",
        studioBio: "Bright sunlight and green plants make this studio feel like an oasis in the midst of so much hustle and bustle.",
        neighborhoodImageURL: "/Downtown.jpg"
    },
    {
        name: "Mueller",
        neighborhoodBio: "Perfect if you love a little post-yoga farmer's market shopping or brunch on weekends.",
        studioImageURL: "/Mueller Yoga Studio.jpg",
        studioBio: "Mellow colors and tony wood floors bring a sense of calm to your flow.",
        neighborhoodImageURL: "/Mueller.jpg"
    }
]

export default function AboutStudio(props: AboutStudioPropTypes) {
    return (
        <div className="col-start-3 col-span-3 row-start-1 row-span-3 p-8 m-8 border-blue-300 border-4 bg-blue-100 rounded-lg text-center text-blue-600 max-h-screen overflow-auto">
            <h1 className="font-bold text-3xl mb-8">{props.studioName}</h1>
            <div>{studioBios.map((studioBio) => {
                if (props.studioName === studioBio.name) {
                    return (
                        <div className="flex-auto">
                            <div className="bg-blue-300 rounded-md pt-6 shadow-xl">
                                <h2 className="font-bold text-xl">Our Studio</h2>
                                <p>{studioBio.studioBio}</p>
                                <img className="m-8 pt-10 pb-20 mx-auto block scale-125" src={studioBio.studioImageURL} aria-label="photo of the interior of the yoga studio"></img>
                            </div>
                            <div className="bg-blue-300 rounded-md mt-16 shadow-xl">
                                <h2 className="font-bold text-xl pt-8">Our Neighborhood</h2>
                                <p>{studioBio.neighborhoodBio}</p>
                                <img className="m-4 mx-auto block pb-8" src={studioBio.neighborhoodImageURL} aria-label="photo of the neighborhood"></img>
                            </div>
                        </div>
                    )
                }
            })}</div>
        </div>
    )
}
