import { Button, Icon } from '@mui/material';
import React from 'react';
import { numberWithSeparator } from '../../../components/Hooks&Functions/Functions';

function RightSideBoxes({ year, price, model, make, setShowPaymentMethods }) {
  price = numberWithSeparator(price, '.');

  return (
    <div className='right-side-boxes'>
      <div className='price-and-others'>
        <div>
          <h2>$ {price}</h2>
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
          <i
            className='fas fa-phone'
            style={{ transform: 'rotate(90deg)' }}
          ></i>
          <span> ** *** ****</span>
          <Button sx={{ ml: '0.25rem', fontSize: '0.75rem' }}>
            Show number
          </Button>
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
        See More ...
      </Button>
    </div>
  );
}

export default RightSideBoxes;
