// Convert first letter to uppercase
const capitalizeFirstLetter = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Convert for ex: 400000 to 400.000
const numberWithSeparator = (n = 0, separator = ',') => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

// Generate random number between 2 numbers
const randomMiles = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { capitalizeFirstLetter, randomMiles, numberWithSeparator };
