import React, { useEffect, useRef, useState } from 'react'
import './caseStudy.scss'
import Gallery from '../Seo/component/Gallery/Gallery'
import LetsTalk from '../../component/LetsTalk/LetsTalk'

import Slider from '@mui/material/Slider';
function valuetext(value) {
    return `$${value.toLocaleString()}`;
}


const CaseStudy = () => {


    const [activeDuration, setActiveDuration] = useState("weeks")
    const [value, setValue] = useState([10000, 37000]);
    const [sliderValues, setSliderValues] = useState([10000, 37000]);
    const [minInput, setMinInput] = useState(10000);
    const [maxInput, setMaxInput] = useState(37000);


    const handleDurationButtonClick = (duration) => {
        setActiveDuration(duration);
    };


    const handleChange = (event, newSliderValues) => {
        setSliderValues(newSliderValues);
        setMinInput(newSliderValues[0]);
        setMaxInput(newSliderValues[1]);
    };

    const handleMinInputChange = (e) => {
        const minValue = parseInt(e.target.value.replace(/\D/g, ''), 10);
        setMinInput(minValue);
        setSliderValues([minValue, sliderValues[1]]);
    };

    const handleMaxInputChange = (e) => {
        const maxValue = parseInt(e.target.value.replace(/\D/g, ''), 10);
        setMaxInput(maxValue);
        setSliderValues([sliderValues[0], maxValue]);
    };






    return (
        <>
            <div className='caseStudy-Section'>
                <div className='container section-container'>
                    <div className='case-wrapper'>
                        <div className='case-left'>
                            <div className='case-left-content'>
                                <h1>Case Studies.</h1>
                                <h2>Discover Your Project Possibilities.</h2>
                                <p>
                                    <p>Our digital marketing and design company takes great pride in our portfolio of compelling case studies.</p>
                                    <p>
                                        These stories showcase our expertise in creating impactful digital campaigns and visually stunning designs that drive results. Each case study delves into the unique challenges our clients faced and how we tailored our strategies to meet their specific goals. From boosting website traffic and engagement to elevating brand recognition and customer conversions, our case studies are a testament to our ability to deliver measurable success for our clients.
                                    </p>
                                    <p>Explore these real-world examples to witness the transformational power of our digital marketing and design solutions.</p>
                                </p>
                                <div className='case-button'>
                                    <button type="button" class="btn">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className='case-right'>
                            <div className='case-right-content'>
                                <div class="custom-select">
                                    <label>Select Project</label>
                                    <select>
                                        <option value="">Open this select menu</option>
                                        <option value="">Ui Development</option>
                                        <option value="">Bussiness Development</option>
                                        <option value="">Facebook</option>

                                    </select>
                                </div>
                                <div className='d-flex budget_range_text'>
                                    <h1>Budget Range</h1>
                                    <p>Avg. $10K</p>
                                </div>
                                <div className='Budget-Range' >
                                    <Slider
                                        aria-label="Currency range"
                                        value={sliderValues}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        min={10000}
                                        max={100000}
                                        step={1000}
                                        sx={{
                                            '& .MuiSlider-track': {
                                                backgroundColor: 'black',
                                            },
                                            '& .MuiSlider-rail': {
                                                backgroundColor: '#000000',
                                            },
                                        }}
                                    />

                                </div>
                                <div className='price-button d-flex flex-row justify-content-between'>
                                    <div className='min-button'>
                                        <h6>Min Price</h6>
                                        <input type="text"
                                            class="btn"
                                            placeholder='$35,000'
                                            value={`$${minInput.toLocaleString()}`}
                                            onChange={handleMinInputChange}

                                        />
                                    </div>
                                    <div className='max-button'>
                                        <h6>Max Price</h6>
                                        <input type="text"
                                            class="btn"
                                            placeholder='$35,000'
                                            value={`$${maxInput.toLocaleString()}`}
                                            onChange={handleMaxInputChange}

                                        />
                                    </div>
                                </div>
                                <div className='ProjectDuration'>
                                    <div className='Duration d-flex justify-content-between'>
                                        <div className='project'>
                                            <h5>ProjectDuration</h5>
                                        </div>
                                        <div className='Avg'>
                                            <h5>Avg. Monthly</h5>
                                        </div>
                                    </div>
                                    <div className='duration-button d-flex flex-row justify-content-between'>

                                        <div className={`weeks ${activeDuration === "weeks" ? "active" : ""}`}>
                                            <button type='button' className={`weeks ${activeDuration === "weeks" ? "active" : ""}`}
                                                onClick={() => handleDurationButtonClick('weeks')}>Weeks</button>
                                        </div>

                                        <div className={`weeks ${activeDuration === "months" ? "active" : ""}`}>
                                            <button type='button' className={`weeks ${activeDuration === "months" ? "active" : ""}`}
                                                onClick={() => handleDurationButtonClick('months')}>Months</button>
                                        </div>

                                        <div className={`weeks ${activeDuration === "years" ? "active" : ""}`}>
                                            <button type='button' className={`weeks ${activeDuration === "years" ? "active" : ""}`}
                                                onClick={() => handleDurationButtonClick('years')}>Years</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='case-right-button d-flex flex-row justify-content-between'>
                                    <div className='clear'>
                                        <button type='button' class="btn" >Clear</button>
                                    </div>
                                    <div className='apply'>
                                        <button type='button' class="btn" >Apply</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Gallery />
            </div>


            <LetsTalk />
        </>
    )
}

export default CaseStudy