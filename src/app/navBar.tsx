export default function NavBar() {
    return (
        <table className="rounded-lg w-full border-blue-300 border-4">
            <tr className="p-4 bg-blue-100">
                <td className="text-blue-600 font-bold mt-2 w-1/4 hover:text-purple-700 text-center">Landing Page</td>
                <td className="text-blue-600 font-bold mt-2 w-1/4 hover:text-purple-700 text-center">Booking Page</td>
                <td className="text-blue-600 font-bold mt-2 w-1/4 hover:text-purple-700 text-center">Profile</td>
                <td className="text-blue-600 font-bold mt-2 w-1/4 hover:text-purple-700 text-center">Login/Logout</td>
            </tr>
        </table>
    )
}