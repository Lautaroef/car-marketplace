import React from 'react';
import Header from './header/Header';
// Filters
import Years from './filters/Years';
import Makers from './filters/Makers';
import Price from './filters/Price';
import HorsePower from './filters/HorsePower';
import Cars from './cars';

function Main() {
  return (
    <div className='buy-a-car'>
      <div className='infinite-header'>
        <Header />
      </div>
      <div className='cars'>
        <main>
          <form className='filters'>
            <Years />
            <Makers />
            <Price />
            <HorsePower />
          </form>
          <div className='cars-list'>
            <Cars />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;
