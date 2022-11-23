type Currencies = 'USD' | 'ARS';

type Car = {
  _id: string;
  img_url: string;
  make: string;
  model: string;
  price: number;
  year: number;
};

type FilterOptions = {
  searchValue: string;
  sidebarFilters: {
    years: [number, number];
    makers: string;
    price: [number, number];
    horsepowers: [number, number];
  };
  sortBySelectedOption: string;
  currentPage: number;
};

type HowItWorksStep = {
  img: string;
  title: string;
  info: string;
  borderRadius?: string;
};

type HamburgerMenuItem = {
  title: string;
  to: string;
};
