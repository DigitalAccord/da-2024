import React from 'react'
import './cards.scss'
import userImg from '../../../../assets/about/userImg.png'
import Slider from "react-slick";
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
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

<div className='card-wrapper container' id='mobile'>
  <Slider {...settings}>
    {cardData.map((card) => (
      <div key={card.id} className='box'>
        <div className='box-content'>
          <div className='box-front'>
            <img src={card.imgSrc} alt={`Card ${card.id}`} />
          </div>
          <div className='box-back'>
            <p>{card.text}</p>
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