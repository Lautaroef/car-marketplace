import React from 'react';
import SingleStep from './SingleStep';
import ToggleButtons from './ToggleButtons';
import { buySteps, sellSteps } from '../../../components/data-images-buyorsell';

function HowItWorks() {
  return (
    <div className='how-it-works' id='bottom'>
      <h1>How It Works</h1>
      <ToggleButtons />
      <div className='steps-container'>
        <div className='buy-carousel'>
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
