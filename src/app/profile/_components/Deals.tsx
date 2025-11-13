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
        name: "Only eligible to be used by a student taking their first class at any location.",
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
      {
        id: v4(),
        name: "Cannot be applied on top of any existing membership discount.",
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
      {
        id: v4(),
        name: "Cannot be applied on top of any existing membership discount.",
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
    <div className="m-4 rounded-lg border-4 border-blue-300 bg-blue-100 text-blue-600">
      <h1 className="pt-4 text-center text-2xl font-bold">Deals</h1>
      <div className="h-[545px] overflow-scroll">
        {dummyDeals.map((deal) => {
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
