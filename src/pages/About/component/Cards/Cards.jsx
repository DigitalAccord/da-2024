import React from 'react'
import './cards.scss'
import userImg from '../../../../assets/about/userImg.png'
import Slider from "react-slick";
import { UserBottomArrow } from '../../../../assets/svgIcons';
const Cards = () => {
  const cardData = [
    { id: 1, imgSrc: userImg, text: 'Lorem ipsum 1' },
    { id: 2, imgSrc: userImg, text: 'Lorem ipsum 2' },
    { id: 3, imgSrc: userImg, text: 'Lorem ipsum 3' },
    { id: 4, imgSrc: userImg, text: 'Lorem ipsum 3' },
    { id: 5, imgSrc: userImg, text: 'Lorem ipsum 3' },
    { id: 5, imgSrc: userImg, text: 'Lorem ipsum 3' },
    { id: 5, imgSrc: userImg, text: 'Lorem ipsum 3' },
    { id: 5, imgSrc: userImg, text: 'Lorem ipsum 3' },

  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    centerPadding: '20%',
    centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 550, 
        settings: {
          centerPadding: '60', 
        },
      },
     
    ],

    responsive: [
      {
        breakpoint: 480, 
        settings: {
          centerPadding: '55', 
        },
      },
     
    ],

    responsive: [
      {
        breakpoint: 430, 
        settings: {
           centerMode: true,
          centerPadding: '40', 
        },
      },
     
    ],

    responsive: [
      {
        breakpoint: 400, 
        settings: {
          centerPadding: '30', 
        },
      },
     
    ],
    
  };
  return (
    <>
      <div className='card-section'>
        <div className='card-wrapper container ' id='desktop'>
          {cardData.map((card) => (
            <div key={card.id} className='box'>
              <div className='box-content'>
                <div className='box-front'>
                  <img src={card.imgSrc} alt={`Card ${card.id}`} />
                </div>
                <div className='box-back'>
                 <div className='userInfo'>
                  <div className='userName'>
                    <h3>Josh Flinn</h3>
                    <p>Managing Director</p>
                  </div>
                  <div className='userBottomLine'></div>
                  <div className='userQualification'>
                   <h4>Qualifications</h4>
                   <p>Goes Here</p>
                  </div>
                  <div className='userExp'>
                    <p>10+ Years</p>
                  </div>
                  <div className='userAbout'>
                    <h3>About Me</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc.
                    </p>
                    <ul>
                      <li>- Lorem</li>
                      <li>- Lorem</li>
                      <li>- Lorem</li>
                    </ul>
                    <p>Sed molestie rhoncus rutrum.</p>
                  </div>
                  <div className='UserbottomArrow'>
                   <UserBottomArrow/>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          ))}
        </div>

          <div className='card-wrapper' id='mobile'>
            <Slider {...settings}>
              {cardData.map((card) => (
                <div key={card.id} className='box'>
                  <div className='box-content'>
                    <div className='box-front'>
                      <img src={card.imgSrc} alt={`Card ${card.id}`} />
                    </div>
                    <div className='box-back'>
                    <div className='userInfo'>
                    <div className='userName'>
                      <h3>Josh Flinn</h3>
                      <p>Managing Director</p>
                    </div>
                    <div className='userBottomLine'></div>
                    <div className='userQualification'>
                    <h4>Qualifications</h4>
                    <p>Goes Here</p>
                    </div>
                    <div className='userExp'>
                      <p>10+ Years</p>
                    </div>
                    <div className='userAbout'>
                      <h3>About Me</h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc.
                      </p>
                      <ul>
                        <li>- Lorem</li>
                        <li>- Lorem</li>
                        <li>- Lorem</li>
                      </ul>
                      <p>Sed molestie rhoncus rutrum.</p>
                    </div>
                    <div className='UserbottomArrow'>
                    <UserBottomArrow/>
                    </div>
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

export default Cards