import Image from 'next/image';
import Link from 'next/link';
import carRoad from 'images/car-road.jpg';
import scrollDownImg from 'images/logos/Down Arrow.svg';

function FirstLook() {
  return (
    <div className='first-look'>
      <div className='image-container'>
        <Image fill src={carRoad} alt='RumRum cars' />
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
      <Link href='/#how-it-works' className='center-image'>
        <Image src={scrollDownImg} alt='Scroll Down' width={35} height={37} />
      </Link>
    </div>
  );
}

export default FirstLook;
