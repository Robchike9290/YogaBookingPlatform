import ProfileMetadata from "./ProfileMetadata"

export default function ProfileInfo() {
    return (
        <>
            <div className="grid col-span-2 border-blue-300 border-4 bg-blue-100 rounded-lg">
                <img className="col-start-1 col-span-1" src={"/DelcineMajeed.jpg"} />
                <ProfileMetadata />
            </div>
        </>
    )
}