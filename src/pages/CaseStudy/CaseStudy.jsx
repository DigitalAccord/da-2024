import React, { useEffect, useRef, useState } from 'react'
import './caseStudy.scss'
import graph from '../../assets/caseStudy/graph.png'
import Gallery from '../Seo/component/Gallery/Gallery'
import LetsTalk from '../../component/LetsTalk/LetsTalk'

import { Histoslider } from 'histoslider';

export const data = [
    ["Quarks", "Leptons", "Gauge Bosons", "Scalar Bosons"],
    [2 / 3, -1, 0, 0],
    [2 / 3, -1, 0, 0],
    [2 / 3, -1, 0, 0],
    [2 / 3, -1, 0, 0],
    [-1 / 3, 0, 1, 0],
    [-1 / 3, 0, -1, 0],
    [-1 / 3, 0, 0, 0],
    [-1 / 3, 0, 0, 0],
  ];
  
  export const options = {
    title: "Charges of subatomic particles",
    legend: { position: "top", maxLines: 2 },
    colors: ["#5C3292", "#1A8763", "#871B47", "#999999"],
    interpolateNulls: false,
    bar: { groupWidth: "100%" }, 
    histogram: { bucketSize: 1 },
  };
const CaseStudy = () => {
    const [selectedRange, setSelectedRange] = useState([2, 4]);
    const chartData1 = [
        { x0: 0, x: 1, y: 100 },
        { x0: 1, x: 2, y: 120 },
        { x0: 2, x: 3, y: 120 },
        { x0: 3, x: 4, y: 120 },
        { x0: 4, x: 5, y: 120 },
        { x0: 5, x: 6, y: 120 },
        { x0: 6, x: 7, y: 120 },
        { x0: 7, x: 8, y: 120 },  
        { x0: 8, x: 9, y: 120 },
        { x0: 9, x: 10, y: 120 },
        { x0: 10, x: 11, y: 120 },
        { x0: 11, x: 12, y: 120 },
        { x0: 12, x: 13, y: 120 },
        { x0: 13, x: 14, y: 120 },
        { x0: 14, x: 15, y: 120 },
        { x0: 15, x: 16 , y: 120 },
      ];
    const [chartData,setChartData] = useState(chartData1)
        
    const handleSliderChange = (array) => {
      console.log("Selected Range:", array);
      setSelectedRange(array);
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
                                        <option value="">GitHub</option>
                                        <option value="">Instagram</option>
                                        <option value="">Facebook</option>
                                        <option value="">LinkedIn</option>
                                        <option value="">Twitter</option>
                                        <option value="">Reddit</option>
                                    </select>
                                </div>
                                <div className='Budget-Range' style={{width:"100%", height:"100px"}}>
                                    <Histoslider 
                                        data = {chartData.map(item=>({
                                            x0: item.x0,
                                            x: item.x,
                                            y: item.y
                                        }))}
                                     
                                        selection={selectedRange}
                                        onChange={handleSliderChange}

                                    />
                                </div>
                                <div className='price-button d-flex flex-row justify-content-between'>
                                    <div className='min-button'>
                                        <h6>Min Price</h6>
                                        <button type="button" class="btn">R$35,000</button>
                                    </div>
                                    <div className='max-button'>
                                        <h6>Max Price</h6>
                                        <button type="button" class="btn">$65,000</button>
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
                                        <div className='weeks'>
                                            <button type='button' className='btn'>Weeks</button>
                                        </div>
                                        <div className='weeks'>
                                            <button type='button' className='btn'>Months</button>
                                        </div>
                                        <div className='weeks'>
                                            <button type='button' className='btn'>Years</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='case-right-button d-flex flex-row justify-content-between'>
                                    <div className='clear'>
                                        <button type='button' class="btn">Clear</button>
                                    </div>
                                    <div className='apply'>
                                        <button type='button' class="btn">Apply</button>
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