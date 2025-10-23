const pricingPlans = ["Plan 1", "Plan 2", "Plan 3"]

export default function CurrentStudioAndSelection() {
    return (
        <div className="col-start-1 col-span-2 row-start-1 row-span-1 bg-blue-100 text-blue-600 border-blue-300 border-4 p-8 m-8 rounded-lg">
            <h2 className="text-xl font-bold">Wanna sign up for a class?</h2>
            <p>Select a studio location from the dropdown bar to learn more about a studio!</p>
            <br />
            <p>Click the button to book if you like what you see!</p>
            <div className="grid grid-columns-2 grid-rows-1">
                <select className="m-8 col-start-1 row-start-1">
                    <option value="">Select a studio location</option>
                    <option>Crestview</option>
                    <option>Bouldin</option>
                    <option>Riata</option>
                    <option>Downtown</option>
                    <option>Mueller</option>
                </select>
                <button className="bg-blue-300 p-4 m-4 rounded-md shadow-lg col-start-2 row-start-1">Book class at this location</button>
            </div>
        </div>
    )
}