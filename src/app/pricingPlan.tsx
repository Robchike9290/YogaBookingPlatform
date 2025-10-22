interface PricingPlan {
    pricingPlan: string
}

export default function PricingPlan(props: PricingPlan) {
    return (
        <>
            <button className="bg-blue-300 p-4 m-4 rounded-md">{props.pricingPlan}</button>
        </>
    )
}