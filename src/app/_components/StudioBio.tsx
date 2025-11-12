import { StudioBioProps } from "./AboutStudio";

interface StudioBioComponentProps {
  studioBio: StudioBioProps;
}

export default function StudioBio({ studioBio }: StudioBioComponentProps) {
  return (
    <div className="flex-auto">
      <div className="rounded-md bg-blue-300 pt-6 shadow-xl">
        <h2 className="text-xl font-bold">Our Studio</h2>
        <p>{studioBio.studioBio}</p>
        <img
          className="m-4 mx-auto block h-auto w-11/12 max-w-full object-contain pb-8"
          src={studioBio.studioImageURL}
          aria-label="photo of the interior of the yoga studio"
        ></img>
      </div>
      <div className="mt-16 rounded-md bg-blue-300 shadow-xl">
        <h2 className="pt-8 text-xl font-bold">Our Neighborhood</h2>
        <p>{studioBio.neighborhoodBio}</p>
        <img
          className="m-4 mx-auto block h-auto w-11/12 max-w-full object-contain pb-8"
          src={studioBio.neighborhoodImageURL}
          aria-label="photo of the neighborhood"
        ></img>
      </div>
    </div>
  );
}
