import ProfileMetadata from "./ProfileMetadata";

export default function ProfileInfo() {
  return (
    <>
      <div className="col-span-5 grid bg-blue-100 p-4">
        <img className="col-span-1 col-start-1" src={"/DelcineMajeed.jpg"} />
        <ProfileMetadata />
      </div>
    </>
  );
}
