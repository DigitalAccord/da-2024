import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './swiper.css';

const CenterMode = () => {
  const [cardsData, setCardsData] = useState([
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
    { id: 7, title: 'Card 7' },

  ]);

  const [activeCardId, setActiveCardId] = useState(2);
  const [cardId, setCardId] = useState(-1);
  const [maxCard, setMaxCard] = useState(0);

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  useEffect(() => {
    setMaxCard(cardsData.length);
  }, []); 

  const handleCardChange = (index) => {
      if(index === maxCard-1) {
        setActiveCardId(0);
    } else {
        setActiveCardId(index - cardId);
    }
  };

  const settings = {
    
    dots: true,
    afterChange: handleCardChange,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    CenterMode: true,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ background: 'white', padding: '20px 0px', overflow: 'hidden' }}>
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`your-item ${card.id === activeCardId+1 ? 'active' : ''}` } 
            onChange={() => handleCardClick(card.id)}
          >
            <h3>{card.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterMode;
