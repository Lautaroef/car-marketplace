// Buy Images
import FirstStepB from 'images/steps-buy-sell/buy/findYourCar.svg';
import SecondStepB from 'images/steps-buy-sell/buy/testDrive.svg';
import ThirdStepB from 'images/steps-buy-sell/buy/doorstepDelivery.svg';
import FourthStepB from 'images/steps-buy-sell/buy/purchase.svg';
// Sell Images
import FirstStepS from 'images/steps-buy-sell/sell/appointment.jpg';
import SecondStepS from 'images/steps-buy-sell/sell/inspection.jpg';
import ThirdStepS from 'images/steps-buy-sell/sell/sell.jpg';
import FourthStepS from 'images/steps-buy-sell/sell/getPaid.jpg';

export const buySteps: HowItWorksStep[] = [
  {
    img: FirstStepB,
    title: 'Find Your Car',
    info: 'Browse our cars online.',
  },
  {
    img: SecondStepB,
    title: 'Test Drive',
    info: 'All our cars are sanitized before and after the test drive, making your experience safe.',
  },
  {
    img: ThirdStepB,
    title: 'Doorstep Delivery',
    info: 'Choose to pick up your car from our center or let us deliver it to your doorstep.',
  },
  {
    img: FourthStepB,
    title: 'Worry-free Purchase',
    info: 'Enjoy 5 days money back guarantee when you buy a car from RumRum.',
  },
];

export const sellSteps: HowItWorksStep[] = [
  {
    img: FirstStepS.src,
    title: 'Book An Appointment',
    info: 'It only takes 2 minutes to book an inspection.',
    borderRadius: '0px',
  },
  {
    img: SecondStepS.src,
    title: 'Free Car Inspection',
    info: 'Our professionals will inspect your car in just 30 minutes!',
    borderRadius: '0px',
  },
  {
    img: ThirdStepS.src,
    title: 'Sell Your Car',
    info: 'Accept our offer on the spot, or opt for bidding with RumRum network of dealers!',
    borderRadius: '0px',
  },
  {
    img: FourthStepS.src,
    title: 'Get Paid in 1 Hour',
    info: 'Plus, leave all the paperwork to us for a hassle-free experience.',
    borderRadius: '0px',
  },
];
