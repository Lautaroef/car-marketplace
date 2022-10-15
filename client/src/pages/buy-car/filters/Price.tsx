import React from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { savePrices } from '../../../redux/carsInfo/filtersSlice';
import DebouncedInput from 'components/other-components/DebouncedInput';

function Price() {
  const [minPrice, maxPrice] = useAppSelector(
    (state) => state.filtersValues.sidebarFilters.price
  );
  const dispatch = useAppDispatch();

  const handlePrices = (min: number, max: number) => dispatch(savePrices([min, max]));

  return (
    <div className='price'>
      <h3>Price</h3>
      <label htmlFor='minium-price'>Minium Price</label>
      <label htmlFor='maximum-price'>Maximum Price</label>
      <DebouncedInput
        type={'number'}
        value={minPrice || ''}
        placeholder='15000'
        id='minium-price'
        onChange={(value) => handlePrices(value as number, maxPrice)}
      />
      <DebouncedInput
        type={'number'}
        value={maxPrice || ''}
        placeholder='30000'
        id='maximum-price'
        onChange={(value) => handlePrices(minPrice, value as number)}
      />
      {/* <OutlinedInput
        fullWidth
        size='small'
        // variant='outlined'
        id='outlined-basic'
        placeholder='15000'
        sx={{ paddingTop: '3.5px' }}
        // startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        onChange={(e) => handlePrices(parseInt(e.target.value), maxPrice)}
      /> */}
      {/* <OutlinedInput
        fullWidth
        size='small'
        // variant='outlined'
        id='outlined-basic'
        placeholder='30000'
        sx={{ paddingTop: '3.5px' }}
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        onChange={(e) => handlePrices(minPrice, parseInt(e.target.value))}
      /> */}
    </div>
  );
}

export default Price;
