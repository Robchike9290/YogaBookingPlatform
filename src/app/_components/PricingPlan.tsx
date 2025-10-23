interface PricingPlanPropTypes {
    pricingPlan: {
        name: string,
        price: string,
        valueStatement: string
    }
}

export default function PricingPlan(props: PricingPlanPropTypes) {
    return (
        <>
            <div className="bg-blue-300 p-4 m-4 rounded-md shadow-lg">
                <h2 className="text-xl font-bold">{props.pricingPlan.name}</h2>
                <div>{props.pricingPlan.price}</div>
            </div>
            <div className="text-red-700">**{props.pricingPlan.valueStatement}</div>
        </>
    )
}