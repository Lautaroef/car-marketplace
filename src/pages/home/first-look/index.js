import React from 'react';
import happyDriver1 from '../../../images/happyDriver/black-woman-with-key.jpg';
import scrollDown from '../../../images/happyDriver/Down Arrow.svg';
import { Link } from 'react-router-dom';

function FirstLook() {
  return (
    <>
      <div className='first-look'>
        <div>
          <h1>Buy or Sell a car</h1>
          <h2>we make it</h2>
          <h4>I want to...</h4>
          <div className='buy-sell-buttons'>
            <button>
              <Link to='/buy-a-car'>
                Buy <i className='fas fa-car-side' />
              </Link>
            </button>
            <button>
              <Link to='/sell-a-car'>
                Sell <i className='fas fa-car-side' />
              </Link>
            </button>
          </div>
        </div>
        <img src={happyDriver1} alt='Happy Driver' />
      </div>
      <a href='/v1'>
        <img src={scrollDown} alt='Scroll Down' className='scroll-down' />
      </a>
    </>
  );
}

export default FirstLook;
