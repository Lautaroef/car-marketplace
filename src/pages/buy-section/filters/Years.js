import React, { useState } from 'react';
import { yearsArray, minimumYear, currentYear } from './schema';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Years() {
  const [years, setYears] = useState([minimumYear, currentYear]);
  console.log(years);

  const yearsToString = yearsArray.map((year) => year.toString());

  return (
    <div className='years'>
      <h3>Years</h3>
      <label htmlFor='min-year'>Minium Year</label>
      <label htmlFor='max-year'>Maximum Year</label>
      <Autocomplete
        disablePortal
        id='min-year'
        size='small'
        sx={{ width: '90%' }}
        options={yearsToString}
        defaultValue={minimumYear.toString()} // expects string
        renderInput={(params) => <TextField {...params} />}
        onChange={(e) => setYears([Number(e.target.innerHTML), years[1]])}
      />
      <Autocomplete
        disablePortal
        id='max-year'
        size='small'
        sx={{ width: '90%' }}
        options={yearsToString}
        defaultValue={currentYear.toString()} // expects string
        renderInput={(params) => <TextField {...params} />}
        onChange={(e) => setYears([years[0], Number(e.target.innerHTML)])}
      />
    </div>
  );
}

export default Years;
