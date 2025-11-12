import Link from "next/link";

export default function SignupCTA() {
  return (
    <div>
      <h3 className="flex justify-end gap-2 text-blue-600">
        Not a member?
        <Link className="text-purple-700 hover:text-black" href="/signup">
          Sign up here.
        </Link>
      </h3>
    </div>
  );
}
