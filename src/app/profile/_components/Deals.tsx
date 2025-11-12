import React from "react";
import { v4 } from "uuid";
import { Deal, Restriction } from "@/types";

const addWeeks = function (date: Date, weeks: number) {
  date.setDate(date.getDate() + 7 * weeks);
  return date;
};

const dummyDeals: Deal[] = [
  {
    id: v4(),
    name: "Take one class, get a second class 50% off!",
    expirationDate: addWeeks(new Date(), 2),
  },
  {
    id: v4(),
    name: "Bring a friend to a class for free!",
    expirationDate: addWeeks(new Date(), 4),
    restrictions: [
      {
        id: v4(),
        name: "Only eligible to be used by a student taking their first class at any location",
      },
    ],
  },
  {
    id: v4(),
    name: "Get 10% off a yearly membership!",
    expirationDate: addWeeks(new Date(), 12),
    restrictions: [
      {
        id: v4(),
        name: "Only for use by students that have not yet had any kind of membership.",
      },
    ],
  },
  {
    id: v4(),
    name: "Get 20% off a monthly membership!",
    expirationDate: addWeeks(new Date(), 12),
    restrictions: [
      {
        id: v4(),
        name: "Only for use by students that have not yet had any kind of membership.",
      },
    ],
  },
  {
    id: v4(),
    name: "Get 20% off a merchandise purchase of $30 or more!",
  },
];

export default function Deals() {
  return (
    <div className="col-span-3 col-start-3 row-span-1 row-start-1 m-4 h-3/5 overflow-scroll rounded-lg border-4 border-blue-300 bg-blue-100 text-blue-600">
      <h1 className="pt-4 text-center text-2xl font-bold">Deals</h1>
      <div>
        {dummyDeals.map((deal) => {
          return (
            <div key={deal.id} className="m-4 bg-blue-300 p-4 shadow-lg">
              <div className="text-xl font-bold text-blue-600">{deal.name}</div>
              {deal.expirationDate ? (
                <div className="text-md font-bold">
                  Expiration Date: {deal.expirationDate.toLocaleDateString()}
                </div>
              ) : null}
              {deal.restrictions && deal.restrictions.length > 0 ? (
                <div className="text-md bg-blue-500 p-4 font-bold text-black">
                  <div>*Restrictions:</div>
                  {deal.restrictions.map((restriction: Restriction) => {
                    return (
                      <div key={restriction.id}>
                        <div>{restriction.name}</div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
