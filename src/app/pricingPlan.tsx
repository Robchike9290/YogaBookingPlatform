interface PricingPlanPropTypes {
    pricingPlan: string
}

export default function PricingPlan(props: PricingPlanPropTypes) {
    return (
        <>
            <button className="bg-blue-300 p-4 m-4 rounded-md shadow-lg">{props.pricingPlan}</button>
        </>
    )
}