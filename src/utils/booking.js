export const randomNumber = (length) => {
  let num = 0;
  for (let i = 0; i < length; i++) {
    num += Math.floor(Math.random() * 10) * Math.pow(10, i);
  }

  return num;
};

export const randomLetter = () => {
  return String.fromCharCode(
    "A".charCodeAt(0) + Math.floor(Math.random() * 26)
  );
};

export const createSeatNumber = (row, seat) => {
  return `${row}-${seat}`;
};
