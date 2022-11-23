import Image from 'next/image';
import Link from 'next/link';
import footerInfo from '../other/random-data/footer-info';
import Divider from '@mui/material/Divider';
import logo from 'images/logos/rumrum.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='logo-socials'>
        <Image src={logo} alt='RumRumCars' />

        <div className='socials'>
          <h4 style={{ marginRight: '0.65rem' }}>Follow us on</h4>
          <a href='www.twitter.com' target='_blank'>
            <i className='fab fa-twitter' />
          </a>
          <a href='www.instagram.com' target='_blank'>
            <i className='fab fa-instagram' />
          </a>
          <a href='www.youtube.com' target='_blank'>
            <i className='fab fa-youtube' />
          </a>
          <a href='www.discord.com' target='_blank'>
            <i className='fab fa-discord' />
          </a>
        </div>
      </div>
      <Divider sx={{ mt: '2rem', mb: '2rem' }} />
      <div className='container-lists'>
        {/* Footer info comes like [key:string]: {title: string, to: string}[] */}
        {/* Iterate through each key */}
        {footerInfo.map((item) => {
          const itemTitle = Object.keys(item)[0]; // grab object key
          const itemLinks = Object.values(item)[0]; // grab object value that contains an [] of "title" and "to"
          // Iterate through each link
          return (
            <ul key={itemTitle}>
              <h3>{itemTitle}</h3>
              {itemLinks.map((link) => (
                <ul key={link.title}>
                  <li key={link.title}>
                    <Link href={link.to}>{link.title}</Link>
                  </li>
                </ul>
              ))}
            </ul>
          );
        })}
      </div>
      <Divider sx={{ mt: '1.5rem', mb: '0.5rem' }} />
      <div className='end-information'>
        <div className='copyright'>
          <h4>
            Copyright &copy; {new Date().getFullYear()} <span>LF</span>
          </h4>
        </div>
        <ul>
          <li>Privacy Police</li>
          <li>Affiliate Notice</li>
          <li>
            Powered by <span>@LF</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
