import ProfileMetadata from "./ProfileMetadata"

export default function ProfileInfo() {
    return (
        <>
            <div className="grid col-span-5 bg-blue-100 p-4">
                <img className="col-start-1 col-span-1" src={"/DelcineMajeed.jpg"} />
                <ProfileMetadata />
            </div>
        </>
    )
}