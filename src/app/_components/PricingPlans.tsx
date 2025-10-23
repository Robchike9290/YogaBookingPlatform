import PricingPlan from './PricingPlan'

const pricingPlans = ["Plan 1", "Plan 2", "Plan 3"]

export default function PricingPlans() {
    return (
        <div className="col-start-1 col-span-2 row-start-2 row-span-2 bg-blue-100 text-blue-600 border-blue-300 border-4 p-8 m-8 rounded-md">
            <h2 className="text-xl font-bold">Select a Pricing Plan</h2>
            <div>
                {pricingPlans.map((plan) => (
                    <PricingPlan pricingPlan={plan} />
                ))}
            </div>
        </div>
    )
}