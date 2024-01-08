import React, { useEffect, useRef, useState } from 'react'
import './caseStudy.scss'
import graph from '../../assets/caseStudy/graph.png'
import Gallery from '../Seo/component/Gallery/Gallery'
import LetsTalk from '../../component/LetsTalk/LetsTalk'
import { Histoslider } from 'histoslider';




const CaseStudy = () => {
    const [selectedRange, setSelectedRange] = useState(["20000", "40000"]);
        const [selectedYValues, setSelectedYValues] = useState([]);
        const [minPrice, setMinPrice] = useState('');
        const [maxPrice, setMaxPrice] = useState('');
        const [activeDuration, setActiveDuration] = useState("weeks")
        const [sliderEnabled, setSliderEnabled] = useState(true);
        const histosliderRef = useRef();
        useEffect(() => {
            console.log("props", histosliderRef.current.props);
        }, []);

        const chartData1 = [
            { x0: 10000, x: 10000, y: 40 },
            { x0: 10000, x: 20000, y: 50 },
            { x0: 20000, x: 30000, y: 60 },
            { x0: 30000, x: 40000, y: 70 },
            { x0: 40000, x: 50000, y: 80 },
            { x0: 50000, x: 60000, y: 90 },
            { x0: 60000, x: 70000, y: 100 },
            { x0: 70000, x: 80000, y: 80 },
            { x0: 80000, x: 90000, y: 90 },
            { x0: 90000, x: 100000, y: 110 },
            
        ].map(item => ({
            x0: item.x0,
            x: parseInt(item.x, 10),
            y: item.y,
        }));



        const handleSliderChange = array => {
            console.log("array", array)
            setSelectedRange(array);


        };
        const handleMinPriceChange = (event) => {
            const newMinPrice = event.target.value;
            const newMaxPrice = maxPrice;
            setMinPrice(newMinPrice);
            setMaxPrice(newMaxPrice);
            updateSelectedRange(newMinPrice, newMaxPrice);
        };

        const handleMaxPriceChange = (event) => {
            const newMinPrice = minPrice;
            const newMaxPrice = event.target.value;
            setMinPrice(newMinPrice);
            setMaxPrice(newMaxPrice);
            updateSelectedRange(newMinPrice, newMaxPrice);
        };

        const updateSelectedRange = (newMinPrice, newMaxPrice) => {
            const minPriceValue = parseFloat(newMinPrice);
            const maxPriceValue = parseFloat(newMaxPrice);

            if (!isNaN(minPriceValue) && !isNaN(maxPriceValue) && minPriceValue >= 10000) {
                setSelectedRange([minPriceValue, maxPriceValue]);
                setSliderEnabled(false);
            } else {
                setSliderEnabled(true);
                console.error('Invalid price values');
            }
        };


        const handleDurationButtonClick = (duration) => {
            setActiveDuration(duration);
        };

        const handleClearButton = () => {
            setSliderEnabled(true);
            setSelectedRange([20000, 30000]);
        }




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
                                        <option value="">GitHub</option>
                                        <option value="">Instagram</option>
                                        <option value="">Facebook</option>
                                        <option value="">LinkedIn</option>
                                        <option value="">Twitter</option>
                                        <option value="">Reddit</option>
                                    </select>
                                </div>
                                <div className='d-flex budget_range_text'>
                                    <h1>Budget Range</h1>
                                    <p>Avg. $10K</p>
                                </div>
                                <div className='Budget-Range' >
                                    <Histoslider ref={histosliderRef}
                                        data={chartData1.map(item => ({
                                            x0: item.x0,
                                            x: item.x.toString(),
                                            y: item.y,
                                        }))}

                                        selection={selectedRange}
                                        onChange={sliderEnabled ? handleSliderChange : () => { }}
                                        selectedColor="#27303F"
                                        unselectedColor="#EEEEF0"
                                        width={450}
                                        height={120}
                                        style={{ maxWidth: "450px" }}


                                    />
                                    <div className='graph_img'>
                                        <img src={graph} />
                                    </div>
                                </div>
                                <div className='price-button d-flex flex-row justify-content-between'>
                                    <div className='min-button'>
                                        <h6>Min Price</h6>
                                        <input type="text"
                                            class="btn"
                                            placeholder='$35,000'
                                            value={minPrice}
                                            onChange={handleMinPriceChange} />
                                    </div>
                                    <div className='max-button'>
                                        <h6>Max Price</h6>
                                        <input type="text"
                                            class="btn"
                                            placeholder='$35,000'
                                            value={maxPrice}
                                            onChange={handleMaxPriceChange} />
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
                                        <button type='button' class="btn" onClick={handleClearButton}>Clear</button>
                                    </div>
                                    <div className='apply'>
                                        <button type='button' class="btn" onClick={updateSelectedRange}>Apply</button>
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