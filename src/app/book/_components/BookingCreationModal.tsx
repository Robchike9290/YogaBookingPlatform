import { BookingModalProps } from "@/types";
import React, { useState, useRef, useCallback } from "react";
import { Guest } from "@/types";

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
        id: i,
      });
    }

    setGuests(guests);
  };

  const handleNotBringingGuests = () => {
    setIsBringingGuests(false);
    setGuests([]);
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
    if (!event.target.checkValidity()) {
      return;
    }

    event.preventDefault();
    // TODO: Put in actual booking creation logic here.
    console.log("Creating booking...");
    setModalIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex bg-gray-600 bg-opacity-90">
      <div className="fixed left-1/2 top-[30vh] w-1/2 -translate-x-1/2 rounded-lg border-4 border-blue-300 bg-blue-100 p-4">
        <h2 className={"text-2xl font-bold"}>Book Class</h2>
        {/* TODO: Make the validations on this form actually work. */}
        <form className="pb-2" onSubmit={handleCreateBooking}>
          <p className="mr-4 inline-block pb-2">
            Will you be bringing any guests?
          </p>
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
            onChange={handleNotBringingGuests}
            className="mr-1 inline-block"
            required
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
                required
              />
              <br />
            </div>
          ) : null}
          {guests.length > 0 && isBringingGuests === true
            ? guests.map((guest) => {
                return (
                  <>
                    <div key={guest.id} className="py-2">
                      <strong className="m-2 pr-4">
                        Guest #{guest.id + 1}:
                      </strong>
                      <label htmlFor="firstName" className="pr-2">
                        First name:
                      </label>
                      <input
                        id={`firstName-guest${guest.id}`}
                        type="text"
                        className="mr-4"
                        pattern="[A-Za-z]+"
                        minLength={1}
                        maxLength={30}
                        required
                      />
                      <label htmlFor="lastName" className="pr-2">
                        Last name:
                      </label>
                      <input
                        id={`lastName-guest${guest.id}`}
                        type="text"
                        className="mr-4"
                        pattern="[A-Za-z]+"
                        minLength={1}
                        maxLength={30}
                        required
                      />
                      <label htmlFor="email" className="pr-2">
                        Email address:
                      </label>
                      <input
                        id={`email-guest${guest.id}`}
                        type="email"
                        className="mr-4"
                        // There are better, more complex ways to verify email by actually
                        // sending one and verifying the address is active, but this regex
                        // works for a personal app.
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        minLength={1}
                        maxLength={30}
                        required
                      />
                    </div>
                  </>
                );
              })
            : null}
          <button type="submit" className={"m-2 rounded-lg bg-blue-300 p-2"}>
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
