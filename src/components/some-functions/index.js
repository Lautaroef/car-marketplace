const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const numberWithSeparator = (n, separator = ',') => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
const randomMiles = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { capitalizeFirstLetter, randomMiles, numberWithSeparator };
