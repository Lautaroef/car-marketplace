import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function ImageAndDetails({ img_url = '', make, model, year }: CarProps) {
  return (
    <div className='image-and-details'>
      <div className='slider'>
        <img src={img_url} alt={'bugatti'} />
      </div>
      <div className='slider-images'>
        <div>📷</div>
        <div>📷</div>
        <div>📷</div>
        <div>📷</div>
        <div>📷</div>
        <div>📷</div>
      </div>
      <div className='buttons-options'>
        <Button disableElevation variant='contained'>
          Gallery
        </Button>
        <Button disableElevation variant='contained'>
          360° Exterior
        </Button>
        <Button disableElevation variant='contained'>
          360° Interior
        </Button>
      </div>
      <h5>
        Please refer to the <Link to='/contact'>Terms of Sale</Link> for{' '}
        <Link to='/contact'>additional fees and charges</Link> that might apply.
      </h5>
      <div className='car-details'>
        <div className='description'>
          <h3>Description</h3>
          <span className='single-detail'>Make</span>
          <span className='single-value'>{make}</span>
          <span className='single-detail'>Year</span>
          <span className='single-value'>{year}</span>
          <span className='single-detail'>Miles</span>
          <span className='single-value'>5.450 mi</span>
          <span className='single-detail'>Fuel type</span>
          <span className='single-value'>Diesel</span>
          <span className='single-detail'>Transmission</span>
          <span className='single-value'>Automatic</span>
          <span className='single-detail'>Model</span>
          <span className='single-value'>{model}</span>
          <span className='single-detail'>Condition</span>
          <span className='single-value'>Used</span>
          <span className='single-detail'>Exterior Color</span>
          <span className='single-value'>Blue</span>
          <span className='single-detail'>Doors</span>
          <span className='single-value'>5</span>
          <span className='single-detail'>Seller Type</span>
          <span className='single-value'>Private Seller</span>
        </div>
      </div>
    </div>
  );
}

export default ImageAndDetails;
