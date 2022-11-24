import { useState, useEffect, useRef } from 'react';
import SingleStep from './SingleStep';
import ToggleButtons from './ToggleButtons';
import { buySteps, sellSteps } from 'components/other/random-data/buyorsell-images-info';

function HowItWorks() {
  const [showBuySteps, setShowBuySteps] = useState<boolean>(true);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const buyContainerRef = useRef<HTMLDivElement>(null);
  const sellContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showBuySteps) {
      stepsContainerRef.current?.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      stepsContainerRef.current?.scrollTo({
        left: sellContainerRef.current?.offsetLeft,
        behavior: 'smooth',
      });
    }
  }, [showBuySteps]);

  // Old method
  /*
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
  */

  return (
    <div className='how-it-works' id='how-it-works'>
      <h1>How It Works</h1>
      <ToggleButtons setShowBuySteps={setShowBuySteps} />
      <div className='steps-container-wrapper' ref={stepsContainerRef}>
        <div className='buy-carousel' ref={buyContainerRef}>
          {buySteps.map((step) => (
            <SingleStep key={step.title} step={step} />
          ))}
        </div>
        <div className='sell-carousel' ref={sellContainerRef}>
          {sellSteps.map((step) => (
            <SingleStep key={step.title} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
