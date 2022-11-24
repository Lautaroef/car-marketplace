import Image from 'next/image';
import Link from 'next/link';
import logo from 'images/logos/rumrumglobe.jpg';
import happyDriver1 from 'images/happyDriver/white-driver.png';
import happyDriver0 from 'images/happyDriver/white-couple-with-key.png';

function Index() {
  return (
    <section className='our-team'>
      <h1>About Us</h1>
      <div>
        <div>
          <h2>Who We Are</h2>
          <b>
            RumRumCars is Latin America’s largest integrated car e-commerce platform. With
            presence across Argentina, Uruguay, Brasil and Chile, we aim to digitalize the
            region’s used car industry by reshaping and elevating the car buying and
            selling experience.
          </b>
          <p>
            RumRumCars provides end-to-end solutions to consumers and used car dealers,
            from car inspection to ownership transfer to financing, promising a service
            that is trusted, convenient and efficient.
          </p>
        </div>
        <div className='image-container'>
          <Image fill src={logo} alt='RumRumCars' />
        </div>
      </div>
      <div className='our-vision'>
        <h2>Our Vision</h2>
        <b>
          To drive Latin America’s automotive industry forward in the used car ecosystem
        </b>
      </div>
      <div>
        <div>
          <h2>What We Do</h2>
          <b>
            We first started as a used car selling platform where we help customers sell
            their used cars through a trusted, convenient and fast process.
          </b>
          <p>
            This simple process starts with booking an appointment online. Our extensive
            175-point inspection process is free and takes only 30 minutes at a RumRumCars
            Inspection Center.
          </p>
          <p>
            Our highly-trained inspectors are well-equipped to provide a complete car
            condition report before an on-the-spot offer is given. Alternatively,
            customers can proceed with bidding where our network of dealers will have the
            chance to place a bid. After the sale is confirmed, all paperwork will be
            handled by us.
          </p>
        </div>
        <div className='image-container'>
          <Image fill src={happyDriver0} alt='Happy Driver' />
        </div>
      </div>
      <div>
        <div className='image-container'>
          <Image fill src={happyDriver1} alt='Happy Driver' />
        </div>
        <div>
          <b>
            In August 2020, we launched ‘The New Way of Buying Cars’, a brand new service
            that offers consumers a seamless car buying experience.
          </b>
          <p>
            Enter www.RumRumCars.com, click on the Buy a Car tab, and consumers can browse
            for their dream cars to fit their lifestyle. All RumRumCars Certified cars
            have a 360-degree view of the car’s interior and exterior, a list of the
            current imperfections, a professional reconditioning report, as well as a
            fixed price with no hidden fees. Booking a test drive can be easily done
            anytime and anywhere on the website.
          </p>
        </div>
      </div>
      <div className='currently-in'>
        <i className='fas fa-map-marker-alt' />
        <h2>RumRumCars is currently in:</h2>
        <ul>
          <li>Argentina</li>
          <li>Uruguay</li>
          <li>Brasil</li>
          <li>Chile</li>
        </ul>
        <b>With 35+ RumRumCars centers across 35+ cities</b>
      </div>
      <div className='ready-to-start'>
        <h2>Ready to Start</h2>
        <h4>
          Whether it’s selling your used car or buying your next ride, we can do it all.
        </h4>
        <div>
          <button>
            <Link href='/buy-a-car'>
              Buy A Car <i className='fas fa-caret-right' />
            </Link>
          </button>
          <button className='sell-button'>
            <Link href='/sell-a-car'>
              Sell Your Car <i className='fas fa-caret-right' />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Index;
