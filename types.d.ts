type Currencies = 'USD' | 'ARS';

type HowItWorksStep = {
  src: any;
  title: string;
  info: string;
  width?: string | number;
  borderRadius?: string;
};

type CarProps = {
  _id: string;
  img_url: string;
  make: string;
  model: string;
  price: number;
  year: number;
};

type HamburgerMenuItem = {
  title: string;
  to: string;
};
