import Link from 'next/link';
import Image from 'next/image';
import numberWithSeparator from 'functions/numberWithSeparator';
import capitalizeFirstLetter from 'functions/capitalizeFirstLetter';
import randomNumber from 'functions/randomNumber';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function SingleCar({ _id, img_url, make, model, price, year }: Car) {
  const monthlyPayment = (price / 48).toFixed(0);
  const miles = numberWithSeparator(randomNumber(1, 3500), ',');
  const prettyPrice = numberWithSeparator(price, '.');
  const prettyMake = capitalizeFirstLetter(make);
  const prettyModel = capitalizeFirstLetter(model);

  return (
    <div className='single-car'>
      <Link href={`/buy-a-car/${_id}`} className='single-car-image-container'>
        <Image fill src={img_url} alt={`${prettyMake}, ${prettyModel}`} />
      </Link>
      <div className='grid-info'>
        <h3>
          Used {year} {prettyMake} {prettyModel}
        </h3>
        <span>{prettyPrice}</span>
        <b>{miles} Miles</b>
        <small className='monthly-pay'>{monthlyPayment}/mo.</small>
        <Divider sx={{ mb: 2 }} />
        <small className='availability'>
          (123) 456-7890 |
          <Button size='small'>
            <a href='tel:555-666-7777'>Confirm Availability</a>
          </Button>
        </small>
        <ul>
          <li>Video Walkaround</li>
          <li>Test Drive</li>
          <li>Delivery</li>
        </ul>
      </div>
    </div>
  );
}

export default SingleCar;
