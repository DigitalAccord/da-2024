import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './swiper.css';
const AboveTextCarousel = ({ cardsData, activeCardId }) => {
  const activeIndex = activeCardId - 1;
  const titlesBeforeActive = cardsData.slice(0, activeIndex).map((card) => card.title);
  const titleAfterActive = cardsData.slice(activeIndex + 1).map((card) => card.title);

  return (
    <div className="above-text-carousel">
      <ul className="carousel-list">
        {titlesBeforeActive.map((title, index) => (
          <li key={index} className="carousel-item">
            {title}
          </li>
        ))}
        <li className={`carousel-item active`}>
          {cardsData[activeIndex].title}
        </li>
        {titleAfterActive.map((title, index) => (
          <li key={index} className="carousel-item">
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
const CenterMode = () => {
  const [cardsData, setCardsData] = useState([
    { id: 1, title: 'Discover Our:', content:"DESIGN" },
    { id: 2, title: 'McCormacks 4WD', content:"SEO | DESIGN" },
    { id: 3, title: 'GW Homes', content:"WEB DESIGN | UX | UI" },
    { id: 4, title: 'Sunlover Heating',content:"DESIGN"  },
    { id: 5, title: 'Card 5' ,content:"DESIGN" },
    { id: 6, title: 'Card 6' ,content:"DESIGN" },
    { id: 7, title: 'Card 7' ,content:"DESIGN" },

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
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-bg" >
       <AboveTextCarousel cardsData={cardsData} activeCardId={activeCardId} />
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`your-item ${card.id === activeCardId+1 ? 'active' : ''}` } 
            onChange={() => handleCardClick(card.id)}
          >

           <div className="slider-content">
            <div className="slider-content-top">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            </div>
            <div className="slider-content-bottom">
              <h1>Century Pools</h1>
              <div className="bottom-line"></div>
              <button>Case Study</button>
            </div>
           </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterMode;
