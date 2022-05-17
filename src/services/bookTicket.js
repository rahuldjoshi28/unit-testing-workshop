import { fakeRequest } from "../utils";
import { createSeatNumber, randomLetter, randomNumber } from "../utils/booking";

export function bookTicket(details) {
  return fakeRequest(
    "resolve",
    {
      ticketNumber: randomNumber(5),
      seatNumber: createSeatNumber(randomLetter(), randomNumber(2)),
    },
    2000
  );
}
