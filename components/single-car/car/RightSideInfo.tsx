import Paypal from '../paypal/Main';
import { Button } from '@mui/material';
import numberWithSeparator from 'functions/numberWithSeparator';

type Props = {
  car: Car;
  isLoading: boolean;
  handleBuyCar: () => void;
  showPaymentMethods: boolean;
  setShowPaymentMethods: React.Dispatch<React.SetStateAction<boolean>>;
};

function RightSideBoxes({
  car,
  handleBuyCar,
  isLoading,
  showPaymentMethods,
  setShowPaymentMethods,
}: Props) {
  const prettyPrice = numberWithSeparator(car?.price, '.');

  return (
    <div className='right-side-boxes'>
      <div className='price-and-others'>
        <div>
          <h2>$ {prettyPrice}</h2>
          <div>
            <i className='fas fa-share' />
            <i className='fas fa-heart' />
          </div>
        </div>
        <span>
          {car?.year} - {5450} miles
        </span>
        <span style={{ textTransform: 'capitalize' }}>
          {car?.make} {car?.model}
        </span>
      </div>
      <div className='vendor-info'>
        <h3>Seller description</h3>
        <div className='icon-name-arrow'>
          <i className='fas fa-user-circle' />
          <b>Vitalik Buterin</b>
          <i className='fas fa-caret-right' />
        </div>
        <Button variant='contained' disableElevation>
          Chat with the seller
        </Button>
        <div style={{ textAlign: 'center' }}>
          <i className='fas fa-phone' style={{ transform: 'rotate(90deg)' }}></i>
          <span> ** *** ****</span>
          <Button sx={{ ml: '0.25rem', fontSize: '0.75rem' }}>Show number</Button>
        </div>
      </div>
      <div className='propaganda'>
        <h3>Advertisements</h3>
      </div>
      <Button
        fullWidth
        disableElevation
        variant='contained'
        className='buy-button'
        onClick={() => setShowPaymentMethods(true)}
      >
        Buy Car
      </Button>
      {showPaymentMethods && <Paypal car={car} />}
    </div>
  );
}

export default RightSideBoxes;
