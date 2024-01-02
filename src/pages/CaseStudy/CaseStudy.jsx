import React, { useEffect, useRef, useState } from 'react'
import './caseStudy.scss'
import graph from '../../assets/caseStudy/graph.png'
import Gallery from '../Seo/component/Gallery/Gallery'
import LetsTalk from '../../component/LetsTalk/LetsTalk'
import { Histoslider } from 'histoslider';
import { data } from 'jquery'

  
 
const CaseStudy = () => {
    const [selectedRange, setSelectedRange] = useState([20000, 30000]);

    const [selectedYValues, setSelectedYValues] = useState([]);
    const histosliderRef = useRef();
    useEffect(() => {
        console.log("props",histosliderRef.current.props);
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
        { x0: 100000, x: 110000, y: 40 },
        { x0: 110000, x: 120000, y: 50 },
        { x0: 120000, x: 130000, y: 60 },
        { x0: 130000, x: 140000, y: 70 },
        { x0: 140000, x: 150000, y: 80 },
        { x0: 150000, x: 160000 , y: 90 },
      ];
     
      const scaledChartData = chartData1.map(data => ({ ...data, y: data.y * 1000 }));

      const [chartData, setChartData] = useState(scaledChartData);
    
      const handleSliderChange = array => {
        setSelectedRange(array);
      
        const selectedData = scaledChartData.filter(
          data => data.x >= array[0] && data.x <= array[1]
        );
      
        // Display y values of the selected data points
        setSelectedYValues(
          selectedData.map(data => (data.y !== undefined ? data.y : 0))
        );
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
                                <div className='d-flex budget_range_text'>
                                    <h1>Budget Range</h1>
                                    <p>Avg. $10K</p>
                                </div>
                                <div className='Budget-Range' >
                                    <Histoslider ref={histosliderRef}  
                                        data = {chartData.map(item=>({
                                            x0: item.x0,
                                            x: item.x,
                                            y: item.y
                                        }))}
                                     
                                        selection={selectedRange}
                                        onChange={handleSliderChange}
                                        selectedColor="#27303F"
                                        unselectedColor="#EEEEF0"
                                        width="450"
                                        height="120"

                                    />
                                </div>
                                <div className='price-button d-flex flex-row justify-content-between'>
                                    <div className='min-button'>
                                        <h6>Min Price</h6>
                                        <input type="text" class="btn" placeholder='$35,000' />
                                    </div>
                                    <div className='max-button'>
                                        <h6>Max Price</h6>
                                        <input type="text" class="btn" placeholder='$35,000' />
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