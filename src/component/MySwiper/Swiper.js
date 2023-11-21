import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './swiper.css';
const AboveTextCarousel = ({ cardsData, activeCardId,setting }) => {
  console.log({ cardsData, activeCardId })

  const activeIndex = activeCardId;
  const titlesBeforeActive = activeCardId === 0 ? cardsData.length - 1 : activeCardId - 1
  const titleAfterActive = activeCardId === cardsData.length - 1 ? 0 : activeCardId + 1
  console.log("title slider",titlesBeforeActive, activeCardId, titleAfterActive)
 
  return (
    <div className="above-text-carousel">
    <ul className="carousel-list">
        <li className="carousel-item active" style={{fontWeight:"400"}}>
          {cardsData[titlesBeforeActive].title}
        </li>
      <li className={`carousel-item active middle`} style={{fontWeight:"bold"}}>
        {cardsData[activeIndex].title}
      </li>
        <li className="carousel-item active">
        {cardsData[titleAfterActive].title}
        </li>
    </ul>
  </div>
  );
};
const CenterMode = () => {
  const [cardsData, setCardsData] = useState([
    { id: 1, title: 'McCormacks', content:"DESIGN" },
    { id: 2, title: 'GW', content:"SEO | DESIGN" },
    { id: 3, title: 'Sunlover', content:"WEB DESIGN | UX | UI" },
    { id: 4, title: 'McCormacks',content:"DESIGN"  },
    { id: 5, title: 'GW' ,content:"DESIGN" },
    { id: 6, title: 'Sunlover' ,content:"DESIGN" },
    { id: 7, title: 'Sunlover' ,content:"DESIGN" },
  ]);

  const [activeCardId, setActiveCardId] = useState(1);
  const [cardId, setCardId] = useState(-1);
  const [maxCard, setMaxCard] = useState(0);

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  useEffect(() => {
    setMaxCard(cardsData.length);
  }, []); 

  const handleCardChange = (index) => {
      setActiveCardId(index)
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
    autoplay: true,
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
          slidesToScroll: 1
        }
      }
    ]
  };
  const setting = {
    
    dots: true,
    
    infinite: false,
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
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
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
       <div className="slider-width">
       <Slider {...setting}>
       <AboveTextCarousel cardsData={cardsData} activeCardId={activeCardId} setting={setting} />
       </Slider>
       </div>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            className={`your-item ${index === activeCardId ? 'active' : ''}` } 
            onChange={() => handleCardClick(index)}
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
