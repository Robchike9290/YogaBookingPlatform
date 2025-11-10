import { StudioBioProps } from "./AboutStudio"

interface StudioBioComponentProps {
    studioBio: StudioBioProps
}

export default function StudioBio({ studioBio }: StudioBioComponentProps) {
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