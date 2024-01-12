import React, { useState } from 'react';

import './test.scss'


import Slider from '@mui/material/Slider';
function valuetext(value) {
  return `$${value.toLocaleString()}`;
}

const Test = () => {

  const [value, setValue] = useState([10000, 37000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
    <>
   <div style={{width:"500px",margin:"0 auto"}}>
      <label htmlFor="doubleRange">Double Range Slider:</label>

      <Slider
          aria-label="Currency range"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={10000}
        max={100000} // Adjust max value as needed
        step={1000} // Adjust step size as needed
      />

    
    </div>
   
    </>
  );
};

export default Test;
