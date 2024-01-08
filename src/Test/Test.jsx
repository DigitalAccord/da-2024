import React, { useState } from 'react';
import { XYPlot, XAxis, YAxis, HorizontalBarSeries, Crosshair } from 'react-vis';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.Range;
const TooltipRange = Slider.Range; // Use the Range directly for tooltip

const HorizontalBarChartWithSlider = () => {
  const data = [
    { x: 20, y: 'A' },
    { x: 50, y: 'B' },
    { x: 30, y: 'C' },
    { x: 40, y: 'D' },
    { x: 25, y: 'E' },
  ];

  const [selectedRange, setSelectedRange] = useState([20, 50]);

  const handleSliderChange = (range) => {
    setSelectedRange(range);
  };

  return (
    <>
      <XYPlot height={300} width={400} yType="ordinal">
        <XAxis />
        <YAxis />
        <HorizontalBarSeries data={data} />
        <Crosshair values={[{ x: selectedRange[1], y: 'Selected Range' }]}>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '10px' }}>
            {`Selected Range: ${selectedRange[0]} - ${selectedRange[1]}`}
          </div>
        </Crosshair>
      </XYPlot>

      <div style={{ margin: '20px 0' }}>
        <TooltipRange
          min={0}
          max={50}
          step={5}
          defaultValue={[20, 50]}
          value={selectedRange}
          onChange={handleSliderChange}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <span>{selectedRange[0]}</span>
          <span>{selectedRange[1]}</span>
        </div>
      </div>
    </>
  );
};

export default HorizontalBarChartWithSlider;
