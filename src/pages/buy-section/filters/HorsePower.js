import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

export default function RangeSlider() {
  const [horsepowers, setHorsepowers] = useState([250, 500]);

  const handleValues = (e) => {
    setHorsepowers(e.target.value);
    console.log(horsepowers);
  };

  return (
    <div className='horsepowers' style={{ marginBottom: '0.5rem' }}>
      <h3>Horsepowers</h3>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        valueLabelDisplay='auto'
        valueLabelDisplay='on'
        disableSwap
        sx={{ marginTop: 5 }}
        step={10}
        min={200}
        max={800}
        value={horsepowers}
        onChange={(e) => handleValues(e)}
      />
    </div>
  );
}
