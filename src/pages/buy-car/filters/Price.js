import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePrices } from '../../../redux/carsInfo/filtersSlice';
// Components
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

function Price() {
  const [minPrice, maxPrice] = useSelector(
    (state) => state.filtersValues.sidebarFilters.price
  );
  const dispatch = useDispatch();

  const handlePrices = (min, max) => dispatch(savePrices([min, max]));

  return (
    <div className='price'>
      <h3>Price</h3>
      <label htmlFor='minium-price'>Minium Price</label>
      <label htmlFor='maximum-price'>Maximum Price</label>

      <OutlinedInput
        fullWidth
        size='small'
        variant='outlined'
        id='outlined-basic'
        placeholder='15000'
        sx={{ paddingTop: '3.5px' }}
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        onChange={(e) => handlePrices(e.target.value, maxPrice)}
      />
      <OutlinedInput
        fullWidth
        size='small'
        variant='outlined'
        id='outlined-basic'
        placeholder='30000'
        sx={{ paddingTop: '3.5px' }}
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        onChange={(e) => handlePrices(minPrice, e.target.value)}
      />
    </div>
  );
}

export default Price;
