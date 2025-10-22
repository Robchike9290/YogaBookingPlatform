const pricingPlans = ["Plan 1", "Plan 2", "Plan 3"]

export default function PricingPlans() {
    return (
        <div className="w-full">
            {pricingPlans.map((plan) => (
                <div>{plan}</div>
            ))}
        </div>
    )
}