interface AboutStudioPropTypes {
    studioName: string
}

interface StudioBioProps {
    bio: string
}

interface StudioNameProps {
    name: string
}

const studioBios = [
    {
        name: "Crestview",
        bio: "A chill studio in north Austin for central Austin neighborhood dwellers."
    },
    {
        name: "Bouldin",
        bio: "Old-school Austin nieghborhood vibes with shopping and parks nearby."
    },
    {
        name: "Riata",
        bio: "A chill studio in north Austin that satisfies those of us the like being further from the center of it all."
    },
    {
        name: "Downtown",
        bio: "For those of us that love hustle and bustle with the most modern spaces."
    },
    {
        name: "Mueller",
        bio: "Perfect if you love a little post-yoga farmer's market shopping or brunch on weekends."
    }
]

export default function AboutStudio(props: AboutStudioPropTypes) {
    return (
        <div className="col-start-3 col-span-3 row-start-1 row-span-3 p-8 m-8 border-blue-300 bg-blue-100 rounded-lg text-blue-600 border-4">
            <h1 className="text-center font-bold text-xl">{props.studioName}</h1>
            <img></img>
            <div>{studioBios.map((studioBio) => {
                if (props.studioName === studioBio.name) {
                    return (
                        <>
                            <StudioBio bio={studioBio.bio} />
                            <StudioName name={studioBio.name} />
                        </>
                    )
                }
            })}</div>
        </div>
    )
}

function StudioBio(props: StudioBioProps) {
    return (
        <div>{props.bio}</div>
    )
}

function StudioName(props: StudioNameProps) {
    return (
        <div>{props.name}</div>
    )
}
