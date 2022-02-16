import React, { useState } from 'react';
//Components
import Button from '@mui/material/Button';
import PaypalComponent from './PaypalComponent';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import CircularProgress from '@mui/material/CircularProgress';

function Main({ carInfo, showPaymentMethods, handleBuyCar, isLoading }) {
  const [newCurrency, setNewCurrency] = useState('USD');
  console.log(newCurrency);

  const initialPaypalOptions = {
    'client-id':
      'AVTxpm7bLnQ1DmB1N-C41uBC7DGPjeylPevVJOdnoCBF65_LwloR6e5aYlaozPwk85mLBLbm2DVoDPJN',
    currency: newCurrency,
    intent: 'capture',
  };

  return (
    <div>
      {showPaymentMethods && (
        <>
          <PayPalScriptProvider options={initialPaypalOptions}>
            <PaypalComponent
              carInfo={carInfo}
              newCurrency={newCurrency}
              setCurrency={setNewCurrency}
            />
          </PayPalScriptProvider>
          <Button
            disableElevation
            variant='contained'
            className='buy-button'
            disabled={isLoading}
            onClick={handleBuyCar}
          >
            {isLoading ? <CircularProgress size='1.5rem' /> : 'Buy car'}
          </Button>
        </>
      )}
    </div>
  );
}

export default Main;
