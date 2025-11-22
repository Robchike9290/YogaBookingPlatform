import { PricingPlanPropTypes } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";

export default function PricingPlan(props: PricingPlanPropTypes) {
  const router = useRouter();
  // TODO: Move to route.
  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <>
      <div className="m-4 flex items-center justify-between rounded-md bg-blue-300 p-4 shadow-lg">
        <h2 className="text-xl font-bold">{props.pricingPlan.name}</h2>
        <div>{props.pricingPlan.price}</div>
        <button
          className="rounded-lg bg-blue-600 p-4 font-bold text-black"
          onClick={handleSignUp}
        >
          Sign Up!
        </button>
      </div>
      <div className="text-red-700">**{props.pricingPlan.valueStatement}</div>
    </>
  );
}
