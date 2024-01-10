import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './chooseuse.scss'
import { BussinessHeadPhone } from '../../../../assets/svgIcons';
export const ChooseUse = () => {
    const [active1Index, setActive1Index] = useState(1);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        focusOnSelect: false,
        afterChange: (index) => setActive1Index(index),
        
      };
  return (
  <>
  <div className='chooseUs-wrapper'>
    <div className='choosUs-row1'>
        <div className='choose_cards'></div>
    </div>
    <div className='choosUs-row1 mt-5'>
   <div className='choose_cards'></div>
   <div className='choose_cards'></div>
   
  
    </div>
    <div className='choosUs-row1 mt-5'>
        <div className='div'>

    <div className='choose_cards1'></div>
   <div className='choose_cards1'></div>
   <div className='choose_cards1'></div>
   <div className='choose_cards1'></div>
   <div className='Coose_overlay'>
   <h1>
    Why Choose
    Us? 
  </h1>
   </div>
        </div>
    </div>



    <div className='crasousel_container mt-5'>
   
      <Slider {...settings}>
        {Array.from({ length: 6 }).map((_, index) => (
            <div>

          <div
            key={index}
            className={`carousel-card ${index === active1Index ? 'active' : ''}`}
          >
            <div className='carousel-card-content'>
              <div className='card-svg'>
                <BussinessHeadPhone/>
              </div>
              <div className='Card-text'>
                <p>Our support team is available 24/7 via our ticketing system to answer your queries. Our office is available between 8am – 5pm (AEST) Monday – Friday.</p>
              </div>
            </div>
        
          </div>
            </div>
        ))}
      </Slider>
   
    </div>

  </div>
  </>
  )
}
