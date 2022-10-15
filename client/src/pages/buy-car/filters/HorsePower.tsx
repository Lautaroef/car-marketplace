import React from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { saveHorsepowers } from '../../../redux/carsInfo/filtersSlice';
import Slider from '@mui/material/Slider';

function RangeSlider() {
  const horsepowers = useAppSelector(
    (state) => state.filtersValues.sidebarFilters.horsepowers
  );
  const dispatch = useAppDispatch();

  const handleValues = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const min = target.value[0];
    const max = target.value[1];

    dispatch(saveHorsepowers([min, max]));
  };

  return (
    <div className='horsepowers' style={{ marginBottom: '0.5rem' }}>
      <h3>Horsepowers</h3>
      <Slider
        min={0}
        step={50}
        max={1100}
        disableSwap
        sx={{ mt: 5 }}
        value={horsepowers}
        valueLabelDisplay='on'
        getAriaLabel={() => 'Temperature range'}
        onChange={handleValues}
      />
    </div>
  );
}

export default RangeSlider;
