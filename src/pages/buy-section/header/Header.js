import React, { useState } from 'react';
import ChipsFilters from './ChipFilter';
import Paper from '@mui/material/Paper';
//
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

function Header() {
  const [carValue, setCarValue] = useState('Audi');
  const [show, setShow] = useState(true);

  const handleShow = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carValue);
  };

  return (
    <div onSubmit={handleSubmit} className='header'>
      <small>Cars for Sale</small>
      <div className='title-marker'>
        <h3>Cars for Sale</h3>
        <i className='fas fa-map-marker-alt' />
      </div>
      <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
        <InputLabel htmlFor='filled-adornment-password'>Password</InputLabel>
        <FilledInput
          id='filled-adornment-password'
          value=''
          onChange={handleShow}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                edge='end'
              ></IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Paper component='ul'>
        <ChipsFilters />
      </Paper>
    </div>
  );
}

export default Header;
