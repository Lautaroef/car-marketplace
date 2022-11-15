// Generate random number between 2 numbers
const randomMiles = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default randomMiles;
