import PricingPlan from '../app/_components/PricingPlan'

const pricingPlans = [
    { name: "Plan 1", price: "$29/month", valueStatement: "Basic yoga classes" },
    { name: "Plan 2", price: "$49/month", valueStatement: "Unlimited classes" },
    { name: "Plan 3", price: "$79/month", valueStatement: "Premium with personal training" }
]

export default function PricingPlans() {
    return (
        <div className="col-start-1 col-span-2 row-start-2 row-span-2 bg-blue-100 text-blue-600 border-blue-300 border-4 p-8 m-8 rounded-md">
            <h2 className="text-xl font-bold">Select a Pricing Plan</h2>
            <div>
                {pricingPlans.map((plan, index) => (
                    <PricingPlan key={index} pricingPlan={plan} />
                ))}
            </div>
        </div>
    )
}