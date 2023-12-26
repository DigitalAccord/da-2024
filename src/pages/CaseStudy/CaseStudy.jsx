import React from 'react'
import './caseStudy.scss'
import graph from '../../assets/caseStudy/graph.png'
import Gallery from '../Seo/component/Gallery/Gallery'
import LetsTalk from '../../component/LetsTalk/LetsTalk'
const CaseStudy = () => {
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
                                <div className='Budget-Range'>
                                    <img src={graph} />
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
    <Gallery/>
          </div>
            
               
                <LetsTalk/>
   </>
  )
}

export default CaseStudy