import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveHorsepowers } from '../../../redux/carsInfo/filtersSlice';
// Components
import Slider from '@mui/material/Slider';

export default function RangeSlider() {
  const horsepowers = useSelector(
    (state) => state.filtersValues.sidebarFilters.horsepowers
  );
  const dispatch = useDispatch();

  const handleValues = (e) => {
    const min = e.target.value[0];
    const max = e.target.value[1];

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
        onChange={(e) => handleValues(e)}
      />
    </div>
  );
}
