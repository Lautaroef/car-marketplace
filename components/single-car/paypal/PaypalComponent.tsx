import React, { useEffect, useRef } from 'react';
import {
  usePayPalScriptReducer,
  PayPalButtons,
  PayPalMarks,
  PayPalMessages,
} from '@paypal/react-paypal-js';

type Props = {
  carInfo: CarProps;
  newCurrency: Currencies;
  setCurrency: React.Dispatch<React.SetStateAction<Currencies>>;
};
function PaypalComponent({ carInfo, newCurrency, setCurrency }: Props) {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const paypalElement = useRef<HTMLDivElement>(null);
  const { make, model, price } = carInfo;

  const onCurrencyChange = (e: any) => {
    const target = e.target as HTMLInputElement;
    const newCurrency = target.value as Currencies;
    setCurrency(newCurrency);
    dispatch({
      type: 'resetOptions', // reset the options to trigger the scriptProvider to load a new script
      value: {
        ...options,
        currency: newCurrency,
      },
    });
  };

  useEffect(() => {
    if (paypalElement.current) {
      // don't know what it does, just got recommended by github copilot
      paypalElement.current.scrollIntoView({ behavior: 'smooth' });
    }
    window.paypal?.Buttons!({
      createOrder: (data: Record<string, unknown>, actions: any) => {
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
        if (actions.order) {
          const order = await actions.order.capture();
          console.log(order);
        }
      },
      onError: async (err) => {
        console.log(err);
      },
    }).render(paypalElement.current as HTMLDivElement);
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
          <div ref={paypalElement}></div>
        </div>
      )}
    </div>
  );
}

export default PaypalComponent;
