import Image from 'next/image';
import qrImage from 'images/logos/qr.png';

function Index() {
  return (
    <section className='contact'>
      <h1>Contact Us</h1>
      <div className='contact-items'>
        <div>
          <i className='far fa-comments' />
          <h3>General Enquiries / Feedback</h3>
          <span />
          <h1>1-800-65-5366</h1>
          <div>8.00am - 5.00pm (Mon - Sat)</div>
          <a href='support@rumrumcarsmail.com'>support@rumrumcarsmail.com</a>
        </div>
        <div>
          <i className='fab fa-whatsapp' />
          <h3>Chat with us directly</h3>
          <span />
          <div className='scan-me'>
            <Image src={qrImage} alt='Scan Me' width={150} height={150} />
            <div>
              <h4>Whatsapp ID</h4>
              <a href='tel:+496170961709'>+496170961709</a>
            </div>
          </div>
        </div>
        <div>
          <i className='far fa-handshake' />
          <h3>Opportunity</h3>
          <span />
          <h4>DealerShip</h4>
          <a href='mailto:rumrumcarsmail@gmail.com'>rumrumcarsmail@gmail.com</a>
          <h4>Collaborations / Partnerships</h4>
          <a href='mailto:lautaroef@gmail.com'>mailto:lautaroef@gmail.com</a>
        </div>
        <div>
          <i className='fas fa-map-marker-alt' />
          <h3>Corporate Office Address</h3>
          <span />
          <h4>RumRumCars - Office</h4>
          <p>
            The lorem ipsus is a nice way to fill space so i don&apos;t think too much
            here.
          </p>
          <a href='tel:+54-525-436-5200'>+54-525-436-5200</a>
        </div>
      </div>
    </section>
  );
}

export default Index;
