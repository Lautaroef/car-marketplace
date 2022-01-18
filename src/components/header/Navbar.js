import React from 'react';
import logo from '../../images/logo/rumrum.png';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import scrollDown from '../../images/happyDriver/Down Arrow.svg';

function Navbar() {
  return (
    <div className='infinite-navbar'>
      <nav>
        <Link to='/'>
          <img src={logo} alt='RumRumCars' />
        </Link>
        <ul>
          <li>
            <Link to='/buy-a-car'>Best Sellers</Link>
          </li>
          <li>
            <Link to='/sell-a-car'>See Offers</Link>
          </li>
          <li>
            <a href='/v1#bottom'>FAQ</a>
          </li>
          <li>
            <Link to='/about'>Our Team</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <Divider orientation='vertical' variant='middle' flexItem />
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
