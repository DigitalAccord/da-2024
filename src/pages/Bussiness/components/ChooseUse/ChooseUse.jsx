import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './chooseuse.scss'
import { BussinessHeadPhone } from '../../../../assets/svgIcons';
import { max } from 'd3-array';
export const ChooseUse = () => {
  const [activeCardId, setActiveCardId] = useState(4);
  const [cardId, setCardId] = useState(-3);
  const [maxCard, setMaxCard] = useState(0);

  const [cardsData, setCardsData] = useState([
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
    { id: 7, title: 'Card 7' },
  ]);


  useEffect(() => {
    setMaxCard(cardsData.length);
    console.log(cardsData, "length")
  }, [])


  const handleCardClick = (id) => {
    console.log(id, "id")
    setActiveCardId(id + 2);
  };

  const handleCardChange = (index) => {
    if(index === 0){
      setActiveCardId(3);
    }else{
      let count = index+3;
      if(count>=maxCard){
        setActiveCardId(count-maxCard);
      }else{
        setActiveCardId(index+3);
      }

      
    }
    


    // if (index % maxCard-1 > 4) {
    //   console.log("index213: ", index + 3)
    //   setActiveCardId(index + 3)
    // }
    // else {
    //   console.log("index1: ", (index + 3) % maxCard-1)
    //   setActiveCardId((index + 3) % maxCard-1)
    // }
    // if (index === maxCard - 1) {
    //   setActiveCardId(4);
    // } else {
    //   setActiveCardId(index + 3);
    // }
  };
  const settings = {
    dots: true,
    afterChange: handleCardChange,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    CenterMode: true,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      }
    ]
  };
  return (
    <>
      <div className='chooseUs-wrapper'>
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
            {cardsData.map((card) => (

              <div
                key={card.id}
                className={`carousel-card ${card.id === activeCardId + 1 ? 'active' : ''}`}
                onClick={() => handleCardChange(card.id)}
              >
                <div className='carousel-card-content'>
                  <h3>{card.title}</h3>
                </div>
              </div>
            ))}
          </Slider>

        </div>

      </div>
    </>
  )
}
