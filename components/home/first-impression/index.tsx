import Image from 'next/image';
import Link from 'next/link';
import scrollDownImg from 'images/logos/Down Arrow.svg';

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
              <Link href='/buy-a-car'>
                Buy a car <i className='fas fa-caret-right' />
              </Link>
            </button>
            <button>
              <Link href='/sell-a-car'>
                Sell a car <i className='fas fa-caret-right' />
              </Link>
            </button>
          </div>
        </section>
      </div>
      <a href='/#bottom' className='center-image'>
        <Image src={scrollDownImg} alt='Scroll Down' priority />
      </a>
    </div>
  );
}

export default FirstLook;
