const pricingPlans = ["Plan 1", "Plan 2", "Plan 3"]

export default function CurrentStudioAndSelection() {
    return (
        <div className="w-2/5 bg-blue-100 text-blue-600 border-blue-300 border-4 p-8 m-8 rounded-lg">
            <h2 className="text-xl font-bold">Wanna sign up for a class?</h2>
            <p>Select a studio location from the dropdown bar!</p>
            <select className="m-8">
                <option value="">Select a studio location</option>
                <option>Studio 1</option>
                <option>Studio 2</option>
                <option>Studio 3</option>
                <option>Studio 4</option>
                <option>Studio 5</option>
            </select>
            <button className="bg-blue-300 p-4 m-4 rounded-md">Book class here</button>
        </div>
    )
}