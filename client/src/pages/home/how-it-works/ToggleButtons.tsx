import React from 'react';

function ToggleButtons({
  setShowBuySteps,
}: {
  setShowBuySteps: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className='wrapper'>
      <input
        type='radio'
        name='slider'
        defaultChecked
        id='toggle-buy'
        onClick={() => setShowBuySteps(true)}
      />
      <input
        type='radio'
        name='slider'
        id='toggle-sell'
        onClick={() => setShowBuySteps(false)}
      />
      <nav>
        <label htmlFor='toggle-buy' className='toggle-buy'>
          How to <span>Buy</span>
        </label>
        <label htmlFor='toggle-sell' className='toggle-sell'>
          How to <span>Sell</span>
        </label>
        <div className='slider'></div>
      </nav>
    </div>
  );
}

export default ToggleButtons;
