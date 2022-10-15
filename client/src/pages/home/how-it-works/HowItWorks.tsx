import React, { useState, useEffect, useRef } from 'react';
import SingleStep from './SingleStep';
import ToggleButtons from './ToggleButtons';
import {
  buySteps,
  sellSteps,
} from '../../../components/other-components/random-data/buyorsell-images-info';

function HowItWorks() {
  const [showBuySteps, setShowBuySteps] = useState<boolean>(true);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const buyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Move the container depending the selected option
    const stepsContainer = stepsContainerRef.current! as HTMLDivElement;
    const buyContainer = buyContainerRef.current! as HTMLDivElement;

    const buyWidth = buyContainer.getBoundingClientRect().width;

    if (stepsContainer && showBuySteps) {
      stepsContainer.style.transform = `translateX(${0}px)`;
    } else {
      stepsContainer.style.transform = `translateX(-${buyWidth + 20}px)`;
    }
  }, [showBuySteps]);

  return (
    <div className='how-it-works' id='bottom'>
      <h1>How It Works</h1>
      <ToggleButtons setShowBuySteps={setShowBuySteps} />
      <div className='steps-container-wrapper'>
        <div className='steps-container' ref={stepsContainerRef}>
          <div className='buy-carousel' ref={buyContainerRef}>
            {buySteps.map((step) => {
              return <SingleStep key={step.title} step={step} />;
            })}
          </div>
          <div className='sell-carousel'>
            {sellSteps.map((step) => {
              return <SingleStep key={step.title} step={step} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
