import React, { useState } from 'react';
//Components
import PaypalComponent from './PaypalComponent';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

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
        </>
      )}
    </div>
  );
}

export default Main;
