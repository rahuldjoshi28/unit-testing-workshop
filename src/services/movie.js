import { createPromiseWithDelay } from "./login";

const MOVIES = [
  {
    name: "K.G.F. Chapter 2",
    id: "kgf_2",
  },
  {
    name: "Gangubai Kathiawadi",
    id: "gangubai_kathiawadi",
  },
  {
    name: "Radhe Shyam",
    id: "radhe_shyam",
  },
];

export function findMatchingMovies(searchKeyword) {
  let value = MOVIES.filter(({ name }) =>
    name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  return createPromiseWithDelay("resolve", value, 100);
}

const randomNumber = (length) => {
  let num = 0;
  for (let i = 0; i < length; i++) {
    num += Math.floor(Math.random() * 10) * Math.pow(10, i);
  }

  return num;
};

const randomLetter = () => {
  return String.fromCharCode(
    "A".charCodeAt(0) + Math.floor(Math.random() * 26)
  );
};

export function bookTicket(details) {
  return createPromiseWithDelay(
    "resolve",
    {
      ticketNumber: randomNumber(5),
      seatNumber: `${randomLetter()}-${randomNumber(2)}`,
    },
    2000
  );
}
