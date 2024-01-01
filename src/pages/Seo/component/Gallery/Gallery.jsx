import React from 'react'
import './gallery.scss'
import { SeoArrow, SeoArrowBig, SeoDropArrow } from '../../../../assets/svgIcons'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Gallery = () => {
    const logoStyle = { width: '37%' };
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
   
      
    
      };
    return (
        <>
            <div className='Gallery-section'>
                <div className='gallery-wrapper'>
                    <div className='galllery-section-left'>
                        <div className='gallery-sectionLeft-wrapper'>
                            <div className='gallery-inner-left'>
                                <div className='gallery-inner-left-content'>
                                    <div className='d-flex gap-2'>
                                        <div className='gallery_content_wrapper'>
                                        <div className='gallery-content-box1'>
                                            <h1>Tennis Court Constructions</h1>
                                            <p>Google Ads Case Study</p>
                                            <button>View Case Study</button>
                                        </div>

                                        </div>
                                        <div className='gallery_content_wrapper'>
                                        <div className='gallery-content-box1'>
                                            <h1>Tennis Court Constructions</h1>
                                            <p>Google Ads Case Study</p>
                                            <button>View Case Study</button>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='d-flex gap-2'>
                                    <div className='gallery_content_wrapper'>
                                        <div className='gallery-content-box1'>
                                            <h1>Tennis Court Constructions</h1>
                                            <p>Google Ads Case Study</p>
                                            <button>View Case Study</button>
                                        </div>
                                        </div>
                                        <div className='gallery_content_wrapper'>
                                        <div className='gallery-content-box1'>
                                            <h1>Tennis Court Constructions</h1>
                                            <p>Google Ads Case Study</p>
                                            <button>View Case Study</button>
                                        </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='gallery-inner-right'>
                                <div className='gallery-inner-right-top'>
                                    <h1>GW Homes</h1>
                                    <p>Google Ads Case Study</p>
                                </div>
                                <div className='gallery-inner-right-bottom'>
                                    <h1><span>74%</span> New Website Visitors</h1>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <button>View Case Study</button>
                                        <SeoArrow width={logoStyle.width} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='gallery-inner-left-bottom'>
                            <div className='gallery-inner-right-top '>
                                <h1>Stepping Stone Property</h1>
                                <p>Google Ads Case Study</p>
                            </div>
                            <div className='gallery-inner-right-bottom'>
                                <h1><span>3711%</span> Increase In Leads</h1>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button>View Case Study</button>
                                    <SeoArrowBig />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='galllery-section-right'>
                        <div className='gallery-inner-right-top'>
                            <h1>GW Homes</h1>
                            <p>Google Ads Case Study</p>
                        </div>
                        <div className='gallery-inner-right-bottom'>
                            <h1><span>74%</span> New Website Visitors</h1>
                            <div className='d-flex justify-content-between align-items-center'>
                                <button>View Case Study</button>
                                <SeoArrow />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mobile-gallery-section'>
                <div className='mabile-gallery-content'>
                    <p>View Case Studies</p>
                    <SeoDropArrow/>
                </div>
            <Slider {...settings}>
                <div>
                <div className='gallery-content-box1'>
                    <h1>Tennis Court<br/> Constructions</h1>
                    <p>Google Ads Case Study</p>
                    <button>View Case Study</button>
                </div>

                </div>

                <div>
                <div className='gallery-content-box1'>
                <h1>Tennis Court<br/> Constructions</h1>
                    <p>Google Ads Case Study</p>
                    <button>View Case Study</button>
                </div>

                </div>

                <div>
                <div className='gallery-content-box1'>
                <h1>Tennis Court<br/> Constructions</h1>
                    <p>Google Ads Case Study</p>
                    <button>View Case Study</button>
                </div>

                </div>

                <div>
                <div className='gallery-content-box1'>
                <h1>Tennis Court<br/> Constructions</h1>
                    <p>Google Ads Case Study</p>
                    <button>View Case Study</button>
                </div>

                </div>

                <div>
                <div className='gallery-content-box1'>
                <h1>Tennis Court<br/> Constructions</h1>
                    <p>Google Ads Case Study</p>
                    <button>View Case Study</button>
                </div>

                </div>

                
                </Slider >
            </div>
        </>
    )
}

export default Gallery