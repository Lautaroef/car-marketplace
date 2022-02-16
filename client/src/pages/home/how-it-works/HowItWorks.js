import React, { useState, useEffect, useRef } from 'react';
import SingleStep from './SingleStep';
import ToggleButtons from './ToggleButtons';
import {
  buySteps,
  sellSteps,
} from '../../../components/other-components/random-data/buyorsell-images-info';

function HowItWorks() {
  const [showBuySteps, setShowBuySteps] = useState(true);
  const stepsContainerRef = useRef();
  const buyRef = useRef();

  useEffect(() => {
    // Move the container depending the selected option
    const stepsContainer = stepsContainerRef.current;
    const buyContainer = buyRef.current;

    const buyWidth = buyContainer.getBoundingClientRect().width;

    if (showBuySteps) {
      return (stepsContainer.style.transform = `translateX(${0}px)`);
    } else {
      stepsContainer.style.transform = `translateX(-${buyWidth + 20}px)`;
    }
  }, [showBuySteps]);

  return (
    <div className='how-it-works' id='bottom'>
      <h1>How It Works</h1>
      <ToggleButtons setShowBuySteps={setShowBuySteps} />
      <div className='steps-container' ref={stepsContainerRef}>
        <div className='buy-carousel' ref={buyRef}>
          {buySteps.map((step) => {
            return <SingleStep key={step.title} {...step} />;
          })}
        </div>
        <div className='sell-carousel'>
          {sellSteps.map((step) => {
            return <SingleStep key={step.title} {...step} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
