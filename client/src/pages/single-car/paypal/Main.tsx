import React, { useState } from 'react';
import PaypalComponent from './PaypalComponent';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

type Props = {
  carInfo: CarProps;
};

function Main({ carInfo }: Props) {
  const [newCurrency, setNewCurrency] = useState<Currencies>('USD');
  console.log(newCurrency);

  const initialPaypalOptions = {
    'client-id':
      'AVTxpm7bLnQ1DmB1N-C41uBC7DGPjeylPevVJOdnoCBF65_LwloR6e5aYlaozPwk85mLBLbm2DVoDPJN',
    currency: newCurrency,
    intent: 'capture',
  };

  return (
    <PayPalScriptProvider options={initialPaypalOptions}>
      <PaypalComponent
        carInfo={carInfo}
        newCurrency={newCurrency}
        setCurrency={setNewCurrency}
      />
    </PayPalScriptProvider>
  );
}

export default Main;
