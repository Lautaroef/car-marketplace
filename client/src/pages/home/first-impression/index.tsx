import React from 'react';
import { Link } from 'react-router-dom';
import scrollDownImg from '../../../images/logos/Down Arrow.svg';

function FirstLook() {
  return (
    <div className='first-look'>
      <div>
        <section>
          <h1>Buy or Sell a car</h1>
          <h2>we make it</h2>
          <h4>I want to...</h4>
          <div className='buy-sell-buttons'>
            <button>
              <Link to='/buy-a-car'>
                Buy a car <i className='fas fa-caret-right' />
              </Link>
            </button>
            <button>
              <Link to='/sell-a-car'>
                Sell a car <i className='fas fa-caret-right' />
              </Link>
            </button>
          </div>
        </section>
      </div>
      <a href='/#bottom' className='center-image'>
        <img src={scrollDownImg} alt='Scroll Down' />
      </a>
    </div>
  );
}

export default FirstLook;
