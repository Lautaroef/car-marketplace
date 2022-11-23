import React from 'react';
import Paypal from '../paypal/Main';
import { Button } from '@mui/material';
import { numberWithSeparator } from '../../../functions';

type Props = {
  carInfo: CarProps;
  isLoading: boolean;
  handleBuyCar: () => void;
  showPaymentMethods: boolean;
  setShowPaymentMethods: React.Dispatch<React.SetStateAction<boolean>>;
};

function RightSideBoxes({
  carInfo,
  handleBuyCar,
  isLoading,
  showPaymentMethods,
  setShowPaymentMethods,
}: Props) {
  const { year, price, model, make } = carInfo;
  const prettyPrice = numberWithSeparator(price, '.');

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
          {year} - {5450} miles
        </span>
        <span style={{ textTransform: 'capitalize' }}>
          {make} {model}
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
      {showPaymentMethods && <Paypal carInfo={carInfo} />}
    </div>
  );
}

export default RightSideBoxes;
