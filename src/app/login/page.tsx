'use client'

export default function Login() {
    return (
        // TODO: Make styles be generic, this is insanely out of hand.
        <div className="bg-blue-100 justify-self-center border-4 border-blue-300 rounded-lg p-6">
            <LoginForm />
        </div>
    )
}

function LoginForm() {
    return (
        <>
            <h1 className="flex-1 text-blue-600 font-bold mt-2 hover:text-purple-700 text-center">Login</h1>
            <form className="justify-self-center py-4 pb-8">
                <div className="py-2">
                    <label className="text-blue-700 text-center" htmlFor="Username">Username </label>
                    <input type="text" />
                </div>
                <div className="py-2">
                    <label className="text-blue-700 text-center" htmlFor="Username">Password </label>
                    <input type="text" />
                </div>
                <div className="flex justify-end">
                <button className="text-blue-600 font-bold hover:text-purple-700 rounded-md p-2 mt-2 bg-blue-300">Login</button>
                </div>
            </form>
            <div>
                <h3 className="flex justify-end gap-2 text-blue-600">Not a member?<a className="text-purple-700">Sign up here.</a></h3>
            </div>
        </>
    )
}