import { BookingModalProps } from "@/types";
import React, { useState, useRef, useCallback } from "react";
import { Guest } from "@/types";
import { v4 } from "uuid";

export default function BookingCreationModal({
  setModalIsOpen,
}: BookingModalProps) {
  const [isBringingGuests, setIsBringingGuests] = useState(false);
  const [guests, setGuests] = useState<Guest[]>([]);
  const debounceRef = useRef<NodeJS.Timeout>();

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleNumberOfGuests = (number: number) => {
    let guests: Guest[] = [];

    for (let i = 0; i < number; i++) {
      guests.push({
        // TODO: Make these real names later.
        name: "",
        email: "",
        id: v4(),
      });
    }

    setGuests(guests);
  };

  const debouncedOnChange = useCallback(
    (e: any) => {
      const value = e.target.value;

      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        handleNumberOfGuests(value);
      }, 300);
    },
    [handleNumberOfGuests],
  );

  const handleCreateBooking = (event: any) => {
    event.preventDefault();
    // TODO: Put in actual booking creation logic here.
    console.log("Creating booking...");
    setModalIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-90">
      <div className="rounded-lg border-4 border-blue-300 bg-blue-100 p-4">
        <h2 className={"text-2xl font-bold"}>Book Class</h2>
        <form className="pb-2">
          <p className="mr-4 inline-block">Will you be bringing any guests?</p>
          <input
            type="radio"
            id="yes"
            name="guestsBoolean"
            onChange={() => setIsBringingGuests(true)}
            className="mr-1 inline-block"
          />
          <label htmlFor="yes" className="mr-2 inline-block">
            Yes
          </label>
          <input
            type="radio"
            id="no"
            name="guestsBoolean"
            onChange={() => setIsBringingGuests(false)}
            className="mr-1 inline-block"
          />
          <label htmlFor="no">No</label>
          <br />
          {isBringingGuests ? (
            <div className="pb-2">
              <label htmlFor="quantity" className="mr-4 inline-block">
                How many guests are you bringing?
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                /* TODO: Put in logic to set a maximum number of guests at 4 OR the number of places left in the class. */
                max="4"
                onChange={debouncedOnChange}
              />
              <br />
            </div>
          ) : null}
          {guests.length > 0
            ? guests.map((guest) => {
                return (
                  <>
                    {/* TODO: Make this a "real" <form> element, fix layout shift via debounce and/or grow-down */}
                    <div key={guest.id}>Test</div>
                  </>
                );
              })
            : null}
          <button
            type="submit"
            className={"rounded-lg bg-blue-300 p-2"}
            onClick={handleCreateBooking}
          >
            Book Class
          </button>
        </form>
        <button onClick={handleClose} className={"rounded-lg bg-blue-300 p-2"}>
          Close
        </button>
      </div>
    </div>
  );
}
