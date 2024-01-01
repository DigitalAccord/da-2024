import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './swiper.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Link } from "react-router-dom";
import dummy from "../../assets/card.png"
import Zoom from 'react-reveal/Zoom';
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
              id
            }
          }
        }
      `,
      })
      .then((result) => {
        const filteredCase = result?.data?.caseStudies?.nodes?.filter(
          (caseStudy) => caseStudy.caseStudyData?.mainImage?.mediaItemUrl
        )
        console.log(result?.data?.caseStudies?.nodes?.slice(0, 10))
        setCases(filteredCase || []);
      });
  }, [])

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };



  const handleCardChange = (index) => {
    setActiveCardId(index)
  };

  const truncateText = (text, maxLength, indicesToTruncate, currentIndex) => {
    if (indicesToTruncate.includes(currentIndex) && text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    }
    return text;
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


  const bgActive = (imgSrc) => ({
    background: `linear-gradient(180deg, rgba(243, 106, 36, 0.00) 0%, rgba(243, 106, 36, 0.80) 45.83%, rgba(0, 0, 0, 0.80) 100%),url(${imgSrc || "no Images"})  no-repeat center center, lightgray -1.874px 0px / 178.199% 100% no-repeat`,
    backgroundSize: 'cover'
  });

  const bgInActive = (imgSrc) => ({
    background: `linear-gradient(0deg, rgba(39, 48, 63, 0.85) 0%, rgba(39, 48, 63, 0.85) 100%),url(${imgSrc || "no Images"})  no-repeat center center, lightgray -1.874px 0px / 178.199% 100% no-repeat`,
  });

  return (
    <div className="slider-bg" >
      <div className="slider-width">
        <Slider {...setting}>
          <AboveTextCarousel cardsData={cases} activeCardId={activeCardId} setting={setting} />
        </Slider>
      </div>
      <Slider {...settings}>
        {cases?.length > 0 && cases?.slice(0, 10).map((card, index) => {
          const imgSrc = card?.caseStudyData?.mainImage?.mediaItemUrl;

          // Specify the indices you want to truncate
          const indicesToTruncate = [1];

          const truncatedTitle = truncateText(card?.title, 10, indicesToTruncate, index);

          return (
            <div
              key={card.caseStudyId}
              className={`your-item ${index === activeCardId ? 'active' : ''}`}
              onChange={() => handleCardClick(index)}
            >
              <Zoom>
                <div className="slider-content" style={index === activeCardId ? bgActive(imgSrc) : bgInActive(imgSrc)}>
                  <div className="slider-content-top">
                    <h3>{card?.title}</h3>
                    <p>{card?.caseStudyData?.type}</p>
                  </div>
                  <div className="slider-content-bottom">
                    <h1>{truncatedTitle}</h1>
                    <div className="bottom-line"></div>
                    <Link to={`/case/${card.slug}`}>
                      <button>Case Study</button>
                    </Link>
                  </div>
                </div>
              </Zoom>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CenterMode;
