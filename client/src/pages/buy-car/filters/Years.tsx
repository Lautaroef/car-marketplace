import React from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { saveYears } from '../../../redux/carsInfo/filtersSlice';
import { yearsArray, currentYear } from './schema';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Years() {
  const [minYear, maxYear] = useAppSelector(
    (state) => state.filtersValues.sidebarFilters.years
  );
  const dispatch = useAppDispatch();

  const handleYears = (min: number, max: number) => dispatch(saveYears([min, max]));

  const yearsToString = yearsArray.map((year) => year.toString());

  return (
    <div className='years'>
      <h3>Years</h3>
      <label htmlFor='min-year'>Minium Year</label>
      <label htmlFor='max-year'>Maximum Year</label>
      <Autocomplete
        fullWidth
        size='small'
        id='min-year'
        disablePortal
        defaultValue={'2015'}
        options={yearsToString}
        renderInput={(params) => <TextField {...params} />} // @ts-ignore
        onChange={(e) => handleYears(e.target.textContent, maxYear)}
      />
      <Autocomplete
        fullWidth
        size='small'
        id='max-year'
        disablePortal
        options={yearsToString}
        defaultValue={currentYear.toString()}
        renderInput={(params) => <TextField {...params} />} // @ts-ignore
        onChange={(e) => handleYears(minYear, e.target.textContent)}
      />
    </div>
  );
}

export default Years;
