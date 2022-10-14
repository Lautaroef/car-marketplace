import React from 'react';
import { Link } from 'react-router-dom';
import footerInfo from '../other-components/random-data/footer-info';
// Components
import Divider from '@mui/material/Divider';
import logo from '../../images/logos/rumrum.png';

function Footer() {
  const { company, service, resources, policies } = footerInfo;

  return (
    <div className='footer'>
      <div className='logo-socials'>
        <img src={logo} alt='RumRumCars' />

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
        <ul>
          <h3>Service</h3>
          {company.map((link) => (
            <li key={link.title}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <h3>Company</h3>
          {service.map((link) => (
            <li key={link.title}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <h3>Resources</h3>
          {resources.map((link) => (
            <li key={link.title}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <h3>Policies</h3>
          {policies.map((link) => (
            <li key={link.title}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
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
