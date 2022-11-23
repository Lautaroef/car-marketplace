import React from 'react';
import AboutBuying from './AboutBuying';
import AboutSelling from './AboutSelling';

function CustomizedAccordions() {
  return (
    <section className='faqs'>
      <div>
        <h1>Frequently Asked Questions</h1>
        <h2>
          About <span>Buying a Car</span>
        </h2>
        <AboutBuying />
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>
          About <span>Selling your Car</span>
        </h2>
        <AboutSelling />
      </div>
    </section>
  );
}

export default CustomizedAccordions;
