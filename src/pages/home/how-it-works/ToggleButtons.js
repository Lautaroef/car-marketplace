import React, { useState, useEffect } from 'react';

function ToggleButtons() {
  const [showBuySteps, setShowBuySteps] = useState(true);

  // useEffect(() => {
  //   const stepsContainer = document.querySelector('.steps-container');
  //   const buyButton = document.querySelector('#toggle-buy');
  //   const sellButton = document.querySelector('#toggle-sell');

  //   buyButton.addEventListener('click', (e) => {
  //     const buySlide = stepsContainer.firstElementChild.style;
  //     const sellSlide = buySlide.nextElementSibling;

  //     console.log(buySlide);
  //   });
  // }, []);

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
