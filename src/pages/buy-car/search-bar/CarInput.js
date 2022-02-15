import React from 'react';
// Components
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

function SoloInput({ searchValueRef }) {
  return (
    <FormControl variant='filled' sx={{ mt: '0.25rem', width: '100%' }}>
      <TextField
        placeholder='Search by Model i.e: "Corolla"... Improvements coming in alpha-version'
        InputProps={{
          inputRef: searchValueRef,
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton type='submit' sx={{ mt: 0.5 }}>
                <i className='fas fa-search' />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant='outlined'
      />
    </FormControl>
  );
}

export default SoloInput;
