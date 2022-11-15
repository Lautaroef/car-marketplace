// ie: 400000 to 400.000
const numberWithSeparator = (n: number = 0, separator: ',' | '.' = ',') => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export default numberWithSeparator;
