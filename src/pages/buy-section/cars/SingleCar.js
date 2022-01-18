import React from 'react';
import Divider from '@mui/material/Divider';
import {
  randomMiles,
  capitalizeFirstLetter,
  numberWithSeparator,
} from '../../../components/some-functions';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function SingleCar({ id, img_url, make, model, price, year }) {
  const monthlyPayment = Number((price / 36).toFixed(0));
  const miles = numberWithSeparator(randomMiles(1500, 100000), ',');
  price = numberWithSeparator(price, '.');
  make = capitalizeFirstLetter(make);
  model = capitalizeFirstLetter(model);

  return (
    <Link to={`/${id}`} className='single-car'>
      <img src={img_url} alt={(make, model)} />
      <div className='grid-info'>
        <h3>
          New {year} {make} {model}
        </h3>
        <span>{price}</span>
        <b>{miles} Miles</b>
        <small className='monthly-pay'>{monthlyPayment}/mo.</small>
        <Divider sx={{ mb: 3 }} />
        <small className='availability'>
          (123) 456-7890 |
          <Button variant='text' size='small'>
            Confirm availability
          </Button>
        </small>
        <ul>
          <li>Video Walkaround</li>
          <li>Test Drive</li>
          <li>Delivery</li>
        </ul>
        <Button variant='contained' disableElevation>
          BUY
        </Button>
      </div>
    </Link>
  );
}

export default SingleCar;
