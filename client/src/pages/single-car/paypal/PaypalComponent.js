import React, { useEffect, useRef } from 'react';
import {
  usePayPalScriptReducer,
  PayPalButtons,
  PayPalMarks,
  PayPalMessages,
} from '@paypal/react-paypal-js';

function PaypalComponent({ carInfo, newCurrency, setCurrency }) {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const paypal = useRef();
  const { make, model, price } = carInfo;

  function onCurrencyChange({ target: { value } }) {
    setCurrency(value);
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: value,
      },
    });
  }

  useEffect(() => {
    window.paypal
      ?.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'capture',
            purchase_units: [
              {
                description: `Make: <b>${make}</b>, Model: <b>${model}</b>. Total: ${price}`,
                amount: {
                  currency_code: options.currency,
                  value: 5.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: async (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      {isPending ? (
        'Loading...'
      ) : (
        <div className='paypal-custom'>
          <PayPalButtons></PayPalButtons>
          <select value={newCurrency} onChange={onCurrencyChange}>
            <option value='USD'>United States dollar</option>
            <option value='EUR'>Euro</option>
          </select>
          <div ref={paypal}></div>
        </div>
      )}
    </div>
  );
}

export default PaypalComponent;
