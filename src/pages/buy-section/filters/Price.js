import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

function Price() {
  const [price, setPrice] = useState([15000, 25000]);

  return (
    <div className='price'>
      <h3>Price</h3>
      <label htmlFor='minium-price'>Minium Price</label>
      <label htmlFor='maximum-price'>Maximum Price</label>

      <OutlinedInput
        id='outlined-basic'
        variant='outlined'
        placeholder='10000'
        size='small'
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        sx={{ width: '90%', paddingTop: '3.5px' }}
        onChange={(e) => setPrice([Number(e.target.value), price[1]])}
      />
      <OutlinedInput
        id='outlined-basic'
        variant='outlined'
        placeholder='20000'
        size='small'
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        sx={{ width: '90%', paddingTop: '3.5px' }}
        onChange={(e) => setPrice([price[0], Number(e.target.value)])}
      />
    </div>
  );
}

export default Price;
