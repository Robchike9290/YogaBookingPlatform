import React from "react";
import { Deal, Restriction } from "@/types";
import { deals } from "@/data";

export default function Deals() {
  return (
    <div className="m-4 rounded-lg border-4 border-blue-300 bg-blue-100 text-blue-600">
      <h1 className="pt-4 text-center text-2xl font-bold">Deals</h1>
      <div className="h-[545px] overflow-scroll">
        {deals.map((deal: Deal) => {
          return (
            <div
              key={deal.id}
              className="m-4 rounded-lg bg-blue-300 p-4 shadow-lg"
            >
              <div className="text-xl font-bold text-blue-600">{deal.name}</div>
              {deal.expirationDate ? (
                <div className="font-bold">
                  Expiration Date: {deal.expirationDate.toLocaleDateString()}
                </div>
              ) : (
                <div className="font-bold">No Expiration Date</div>
              )}
              {deal.restrictions && deal.restrictions.length > 0 ? (
                <div className="rounded-md bg-blue-500 p-4 font-bold text-black shadow-lg">
                  <div>*Restrictions:</div>
                  <ul className="list-disc pl-6">
                    {deal.restrictions.map((restriction: Restriction) => {
                      return (
                        <li key={restriction.id}>
                          <span>{restriction.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div className="font-bold">No Restrictions</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
