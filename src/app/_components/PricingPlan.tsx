import { PricingPlanPropTypes } from "@/types";

export default function PricingPlan(props: PricingPlanPropTypes) {
  return (
    <>
      <div className="m-4 rounded-md bg-blue-300 p-4 shadow-lg">
        <h2 className="text-xl font-bold">{props.pricingPlan.name}</h2>
        <div>{props.pricingPlan.price}</div>
      </div>
      <div className="text-red-700">**{props.pricingPlan.valueStatement}</div>
    </>
  );
}
