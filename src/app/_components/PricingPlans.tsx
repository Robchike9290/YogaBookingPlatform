import PricingPlan from './PricingPlan'

const pricingPlans = [
    {
        name: "Yearly prepaid membership",
        price: "$999/year",
        valueStatement: "Save 20% off of monthly rate!"
    }, 
    {
        name: "Monthly prepaid membership",
        price: "$100/month",
        valueStatement: "Save 40% off of weekly rate!"
    }, 
    {
        name: "Weekly prepraid membership",
        price: "$35/week",
        valueStatement: "Great to try us out for a week or two!"
    }
]

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