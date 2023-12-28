import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './swiper.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import dummy from "../../assets/card.png"

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_ENDPOINT}`,
  cache: new InMemoryCache(),
});

const AboveTextCarousel = ({ cardsData, activeCardId, setting }) => {
 

  const activeIndex = activeCardId;
  const titlesBeforeActive = activeCardId === 0 ? cardsData.length - 1 : activeCardId - 1
  const titleAfterActive = activeCardId === cardsData.length - 1 ? 0 : activeCardId + 1




  return (
    <div className="above-text-carousel">
      <ul className="carousel-list">
        <li className="carousel-item active" style={{ fontWeight: "400" }}>
          {cardsData[titlesBeforeActive]?.title}
        </li>
        <li className={`carousel-item active middle`} style={{ fontWeight: "bold" }}>
          {cardsData[activeIndex]?.title}
        </li>
        <li className="carousel-item active">
          {cardsData[titleAfterActive]?.title}
        </li>
      </ul>
    </div>
  );
};
const CenterMode = () => {



  // const [cardsData, setCardsData] = useState([
  //   { id: 1, title: 'McCormacks', content: "DESIGN" },
  //   { id: 2, title: 'GW', content: "SEO | DESIGN" },
  //   { id: 3, title: 'Sunlover', content: "WEB DESIGN | UX | UI" },
  //   { id: 4, title: 'McCormacks', content: "DESIGN" },
  //   { id: 5, title: 'GW', content: "DESIGN" },
  //   { id: 6, title: 'Sunlover', content: "DESIGN" },
  //   { id: 7, title: 'Sunlover', content: "DESIGN" },
  // ]);

  const [activeCardId, setActiveCardId] = useState(1);
  const [cardId, setCardId] = useState(-1);
  const [maxCard, setMaxCard] = useState(0);
  const [cases, setCases] = useState([])
  useEffect(() => {
    client
      .query({
        query: gql`
      query NewQuery {
        caseStudies(first: 1000) {
          nodes {
            caseStudyId
            slug
            uri
            title
            caseStudyData {
              type
              mainImage {
                mediaItemUrl
              }
            }
          }
        }
      }
      `,
      })
      .then((result) => {
        console.log(result?.data?.caseStudies?.nodes?.slice(0,10))
        setCases(result?.data?.caseStudies?.nodes)
      });
  }, [])

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  // useEffect(() => {
  //   setMaxCard(cardsData.length);
  // }, []);

  const handleCardChange = (index) => {
    setActiveCardId(index)
  };

  const settings = {
    dots: true,
    afterChange: handleCardChange,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
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
  const setting = {

    dots: true,

    infinite: false,
    speed: 900,
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
          <AboveTextCarousel cardsData={cases} activeCardId={activeCardId} setting={setting} />
        </Slider>
      </div>
      <Slider {...settings}>
        {cases?.length > 0 && cases?.slice(0,10).map((card, index) => {
          const imgSrc = card?.caseStudyData?.mainImage?.mediaItemUrl
          return <div
            key={card.caseStudyId}
            className={`your-item ${index === activeCardId ? 'active' : ''}`}
            onChange={() => handleCardClick(index)}
          >

            <div className="slider-content" style={{
              backgroundSize: (index === activeCardId )? `cover` : `auto`,
              background: (index === activeCardId) ? `linear-gradient(180deg, rgba(243, 106, 36, 0.00) 0%, rgba(243, 106, 36, 0.80) 45.83%, rgba(0, 0, 0, 0.80) 100%), url(${imgSrc ?? dummy} ) center no-repeat, lightgray -1.874px 0px / 178.199% 100% no-repeat` : `linear-gradient(0deg, rgba(39, 48, 63, 0.85) 0%, rgba(39, 48, 63, 0.85) 100%),
               url(${imgSrc ?? dummy} ) cover/center no-repeat , lightgray -786.457px -122px / 285.415% 130.476% no-repeat;
        box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.25)`}}>
              <div className="slider-content-top">
                <h3>{card?.title}</h3>
                <p>{card?.caseStudyData?.type}</p>
              </div>
              <div className="slider-content-bottom">
                <h1>{card?.title}</h1>
                <div className="bottom-line"></div>
                <button>Case Study</button>
              </div>
            </div>
          </div>
        }).slice(0, 6)}
      </Slider>
    </div>
  );
};

export default CenterMode;
