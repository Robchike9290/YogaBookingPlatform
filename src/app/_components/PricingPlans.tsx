import { pricingPlans } from "@/data";
import PricingPlan from "./PricingPlan";

export default function PricingPlans() {
  return (
    <div className="col-span-2 col-start-1 row-span-1 row-start-1 m-8 h-[300px] overflow-scroll rounded-md border-4 border-blue-300 bg-blue-100 p-8 text-blue-600">
      <h2 className="text-xl font-bold">Select a Pricing Plan</h2>
      <p>
        If you're new to us, select the pricing plan that's best for you and
        sign up to continue your journey with us!
      </p>
      <div>
        {pricingPlans.map((plan) => (
          <PricingPlan pricingPlan={plan} />
        ))}
      </div>
    </div>
  );
}
